import { useState, useEffect } from 'react';

/**
 * Interface untuk ukuran jendela
 */
interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

/**
 * Hook untuk mendapatkan ukuran jendela browser secara real-time
 * Berguna untuk membuat UI yang responsif berdasarkan ukuran jendela
 * 
 * @returns {WindowSize} - Objek berisi width dan height dari jendela browser
 */
export function useWindowSize(): WindowSize {
  // Inisialisasi state dengan undefined untuk menghindari error saat SSR
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler untuk memperbarui state
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Tambahkan event listener
    window.addEventListener('resize', handleResize);

    // Panggil handler sekali untuk mendapatkan ukuran awal
    handleResize();

    // Cleanup: hapus event listener saat komponen unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Array dependensi kosong berarti effect hanya dijalankan sekali saat mount

  return windowSize;
}