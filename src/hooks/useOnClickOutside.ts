import { RefObject, useEffect } from 'react';

/**
 * Hook untuk mendeteksi klik di luar elemen tertentu
 * Berguna untuk menutup dropdown, modal, atau popover saat pengguna mengklik di luar
 * 
 * @param {RefObject<HTMLElement | null>} ref - Referensi ke elemen yang akan dipantau
 * @param {(event: MouseEvent | TouchEvent) => void} handler - Fungsi yang akan dipanggil saat klik di luar elemen
 * @param {boolean} [enabled=true] - Apakah hook diaktifkan atau tidak
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
): void {
  useEffect(() => {
    if (!enabled) return;
    
    const listener = (event: MouseEvent | TouchEvent) => {
      // Jika ref atau ref.current tidak ada, atau jika klik terjadi di dalam elemen, jangan lakukan apa-apa
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      
      handler(event);
    };
    
    // Tambahkan event listener untuk mouse dan touch events
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    
    // Cleanup: hapus event listener saat komponen unmount atau enabled berubah
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]);
}