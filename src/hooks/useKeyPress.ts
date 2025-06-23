import { useState, useEffect } from 'react';

/**
 * Hook untuk mendeteksi ketika tombol keyboard tertentu ditekan
 * Berguna untuk shortcut keyboard atau navigasi
 * 
 * @param {string | string[]} targetKey - Tombol atau array tombol yang akan dipantau
 * @returns {boolean} - True jika tombol yang dipantau sedang ditekan, false jika tidak
 */
export function useKeyPress(targetKey: string | string[]): boolean {
  // State untuk melacak apakah tombol sedang ditekan
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  // Konversi targetKey menjadi array jika bukan array
  const keys = Array.isArray(targetKey) ? targetKey : [targetKey];

  // Fungsi yang dipanggil saat tombol ditekan
  const downHandler = (event: KeyboardEvent): void => {
    if (keys.includes(event.key)) {
      setKeyPressed(true);
    }
  };

  // Fungsi yang dipanggil saat tombol dilepas
  const upHandler = (event: KeyboardEvent): void => {
    if (keys.includes(event.key)) {
      setKeyPressed(false);
    }
  };

  // Tambahkan event listeners
  useEffect(() => {
    // Periksa apakah window tersedia (untuk menghindari error saat SSR)
    if (typeof window === 'undefined') return;

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    // Cleanup: hapus event listeners saat komponen unmount
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [keys]); // Re-run effect jika keys berubah

  return keyPressed;
}

/**
 * Contoh penggunaan:
 * 
 * ```tsx
 * function MyComponent() {
 *   const isEnterPressed = useKeyPress('Enter');
 *   const isEscapePressed = useKeyPress('Escape');
 *   const isArrowKeysPressed = useKeyPress(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);
 * 
 *   return (
 *     <div>
 *       {isEnterPressed && <p>Enter ditekan!</p>}
 *       {isEscapePressed && <p>Escape ditekan!</p>}
 *       {isArrowKeysPressed && <p>Tombol panah ditekan!</p>}
 *     </div>
 *   );
 * }
 * ```
 */