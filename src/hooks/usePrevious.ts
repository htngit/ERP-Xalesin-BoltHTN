import { useEffect, useRef } from 'react';

/**
 * Hook untuk menyimpan nilai sebelumnya dari suatu state atau prop
 * Berguna untuk membandingkan nilai saat ini dengan nilai sebelumnya
 * 
 * @template T - Tipe data nilai yang akan disimpan
 * @param {T} value - Nilai yang akan disimpan versi sebelumnya
 * @returns {T | undefined} - Nilai sebelumnya atau undefined jika belum ada nilai sebelumnya
 */
export function usePrevious<T>(value: T): T | undefined {
  // Gunakan useRef untuk menyimpan nilai sebelumnya
  const ref = useRef<T>();
  
  // Perbarui ref.current setelah setiap render
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  // Kembalikan nilai sebelumnya (akan undefined pada render pertama)
  return ref.current;
}