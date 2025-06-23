import { RefObject, useEffect, useState } from 'react';

/**
 * Interface untuk opsi Intersection Observer
 */
interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * Hook untuk mendeteksi kapan elemen muncul dalam viewport
 * Berguna untuk implementasi lazy loading, infinite scroll, atau animasi saat elemen terlihat
 * 
 * @param {RefObject<Element>} elementRef - Referensi ke elemen yang akan dipantau
 * @param {UseIntersectionObserverOptions} [options] - Opsi untuk Intersection Observer
 * @returns {IntersectionObserverEntry | undefined} - Entry dari Intersection Observer atau undefined
 */
export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: UseIntersectionObserverOptions = {}
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const element = elementRef.current;
    // Jangan observe jika tidak ada elemen atau jika sudah frozen
    if (!element || frozen) return;

    // Callback untuk Intersection Observer
    const observerCallback = ([entry]: IntersectionObserverEntry[]): void => {
      setEntry(entry);
    };

    // Buat observer dengan opsi yang diberikan
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      root,
      rootMargin,
    });

    // Mulai observe elemen
    observer.observe(element);

    // Cleanup: hentikan observe saat komponen unmount
    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}