import { useEffect, useState } from 'react';

/**
 * Calls `onScroll` at most once per animation frame while the page scrolls or resizes.
 * The callback gets the scroll offset and the page's scroll progress from 0 to 1.
 */
export function useScrollFrame(onScroll) {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      onScroll(window.scrollY, max > 0 ? window.scrollY / max : 0);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [onScroll]);
}

/** True once the page has scrolled further than `threshold` pixels. */
export function useScrolledPast(threshold) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return past;
}
