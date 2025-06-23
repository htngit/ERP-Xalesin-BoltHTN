import { useState, useEffect } from 'react';

/**
 * Hook untuk mendeteksi apakah media query cocok dengan ukuran layar saat ini
 * Berguna untuk membuat UI yang responsif dengan React
 * 
 * @param {string} query - Media query yang akan dievaluasi (contoh: '(min-width: 768px)')
 * @returns {boolean} - True jika media query cocok, false jika tidak
 */
export function useMediaQuery(query: string): boolean {
  // Fungsi untuk mendapatkan nilai awal yang aman (menghindari error SSR)
  const getMatches = (query: string): boolean => {
    // Periksa apakah window tersedia (untuk menghindari error saat SSR)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  // Effect untuk menambahkan dan membersihkan event listener
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia(query);

    // Fungsi handler untuk memperbarui state
    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    // Tambahkan event listener
    // Gunakan addEventListener dengan fallback untuk browser lama
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback untuk browser lama (seperti IE dan beberapa versi Safari)
      mediaQuery.addListener(handleChange);
    }

    // Panggil handler sekali untuk memastikan state awal yang benar
    handleChange();

    // Cleanup: hapus event listener saat komponen unmount
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback untuk browser lama
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
}

/**
 * Preset media queries untuk breakpoint umum
 */
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};