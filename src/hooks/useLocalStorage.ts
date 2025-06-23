import { useState, useEffect } from 'react';

/**
 * Hook untuk menyimpan dan mengambil data dari localStorage dengan tipe data yang aman
 * @template T - Tipe data yang akan disimpan
 * @param {string} key - Kunci untuk menyimpan data di localStorage
 * @param {T} initialValue - Nilai awal jika data tidak ditemukan di localStorage
 * @returns {[T, (value: T | ((val: T) => T)) => void]} - Tuple berisi nilai dan fungsi setter
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // Fungsi state initializer untuk menghindari pembacaan localStorage pada setiap render
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Efek untuk menyinkronkan localStorage ketika storedValue berubah
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  // Fungsi setter yang menerima nilai baru atau fungsi updater
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Izinkan nilai menjadi fungsi sehingga kita memiliki API yang sama dengan useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      
      // Simpan ke state
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}