import { useState, useEffect } from 'react';

/**
 * Hook untuk menunda pembaruan nilai sampai pengguna berhenti melakukan perubahan
 * Berguna untuk mengurangi jumlah operasi yang dilakukan ketika nilai berubah dengan cepat
 * (seperti saat pengguna mengetik di input pencarian)
 * 
 * @template T - Tipe data nilai yang akan di-debounce
 * @param {T} value - Nilai yang akan di-debounce
 * @param {number} delay - Waktu penundaan dalam milidetik
 * @returns {T} - Nilai yang sudah di-debounce
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Atur timer untuk menunda pembaruan nilai debouncedValue
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Bersihkan timer jika value berubah (atau komponen unmount)
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}