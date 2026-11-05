import { useEffect, useState } from 'react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

/** Cycles through `words`, animating each one in. Screen readers hear the full list once. */
export default function RotatingText({ words, interval = 2400 }) {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const timer = setInterval(() => setIndex((current) => (current + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [words.length, interval, reduced]);

  return (
    <span className="rotating-text">
      <span className="sr-only">{words.join(', ')}</span>
      <span className="rotating-word" key={index} aria-hidden="true">
        {words[index]}
      </span>
    </span>
  );
}
