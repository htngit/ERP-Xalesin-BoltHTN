import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import {
  YStack,
  XStack,
  Card,
  H2,
  H4,
  Text,
  Button,
  Separator,
} from 'tamagui';
import { router } from 'expo-router';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [lastScannedData, setLastScannedData] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    if (scanned) return;
    
    setScanned(true);
    setLastScannedData(data);
    setIsScanning(false);
    
    Alert.alert(
      'Barcode Scanned!',
      `Type: ${type}\nData: ${data}`,
      [
        {
          text: 'Search Product',
          onPress: () => {
            // Navigate to inventory with search query
            router.push(`/inventory?search=${encodeURIComponent(data)}`);
          },
        },
        {
          text: 'Scan Again',
          onPress: () => {
            setScanned(false);
            setIsScanning(true);
          },
        },
      ]
    );
  };

  const resetScanner = () => {
    setScanned(false);
    setIsScanning(true);
    setLastScannedData(null);
  };

  if (hasPermission === null) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" padding="$4">
        <Text>Requesting camera permission...</Text>
      </YStack>
    );
  }

  if (hasPermission === false) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" padding="$4" space="$4">
        <H2>No Camera Access</H2>
        <Text textAlign="center" color="$gray11">
          Camera permission is required to scan barcodes. Please enable camera access in your device settings.
        </Text>
        <Button
          theme="blue"
          onPress={() => {
            Camera.requestCameraPermissionsAsync();
          }}
        >
          Request Permission
        </Button>
      </YStack>
    );
  }

  return (
    <YStack flex={1} backgroundColor="$background">
      {/* Header */}
      <YStack padding="$4" space="$3">
        <H2>Barcode Scanner</H2>
        <Text color="$gray11">
          Point your camera at a barcode to scan it
        </Text>
      </YStack>

      <Separator />

      {/* Camera View */}
      {isScanning && (
        <YStack flex={1} margin="$4" borderRadius="$4" overflow="hidden">
          <CameraView
            style={{ flex: 1 }}
            facing="back"
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: [
                'qr',
                'pdf417',
                'aztec',
                'ean13',
                'ean8',
                'upc_e',
                'datamatrix',
                'code128',
                'code39',
                'code93',
                'codabar',
                'itf14',
              ],
            }}
          >
            {/* Scanning overlay */}
            <YStack
              flex={1}
              justifyContent="center"
              alignItems="center"
              backgroundColor="rgba(0,0,0,0.3)"
            >
              <YStack
                width={250}
                height={250}
                borderWidth={2}
                borderColor="white"
                borderRadius="$4"
                justifyContent="center"
                alignItems="center"
              >
                <Text color="white" fontSize="$3" textAlign="center">
                  Position barcode within the frame
                </Text>
              </YStack>
            </YStack>
          </CameraView>
        </YStack>
      )}

      {/* Scanned Result */}
      {lastScannedData && !isScanning && (
        <YStack flex={1} padding="$4" space="$4">
          <Card padding="$4" backgroundColor="$green2">
            <YStack space="$3">
              <H4 color="$green11">Scan Successful!</H4>
              <Text fontSize="$3" color="$green11">
                Barcode Data:
              </Text>
              <Text
                fontSize="$4"
                fontWeight="bold"
                color="$green11"
                backgroundColor="$green3"
                padding="$3"
                borderRadius="$2"
              >
                {lastScannedData}
              </Text>
            </YStack>
          </Card>

          <XStack space="$3">
            <Button
              flex={1}
              theme="blue"
              onPress={() => {
                router.push(`/inventory?search=${encodeURIComponent(lastScannedData)}`);
              }}
            >
              Search Product
            </Button>
            <Button
              flex={1}
              theme="gray"
              onPress={resetScanner}
            >
              Scan Again
            </Button>
          </XStack>
        </YStack>
      )}

      {/* Manual Controls */}
      <YStack padding="$4" space="$3">
        <Separator />
        <XStack space="$3">
          <Button
            flex={1}
            theme="gray"
            disabled={!isScanning}
            onPress={() => {
              setIsScanning(false);
              setScanned(true);
            }}
          >
            Pause Scanning
          </Button>
          <Button
            flex={1}
            theme="blue"
            onPress={() => router.push('/inventory/add')}
          >
            Add New Product
          </Button>
        </XStack>
      </YStack>
    </YStack>
  );
}