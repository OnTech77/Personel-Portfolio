import { useEffect, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js';

/**
 * Cross-fading screenshots with numbered step buttons. It moves to the next step every few
 * seconds, pauses while the pointer or focus is on it, and stops once a step is picked.
 */
export default function ProjectGallery({ title, images, interval = 4000 }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [chosen, setChosen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || paused || chosen) return undefined;
    const timer = setInterval(() => setActive((current) => (current + 1) % images.length), interval);
    return () => clearInterval(timer);
  }, [reduced, paused, chosen, images.length, interval]);

  return (
    <div
      className="project-gallery"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((item, index) => (
        <div className={`gallery-image${index === active ? ' is-active' : ''}`} key={item.src} aria-hidden={index !== active}>
          <img src={item.src} alt={item.alt} loading="lazy" />
        </div>
      ))}
      <div className="gallery-steps" role="group" aria-label={`${title} screenshots`}>
        {images.map((item, index) => (
          <button
            type="button"
            key={item.label}
            className="gallery-step"
            aria-pressed={index === active}
            aria-label={`Show the ${item.label} step`}
            onClick={() => {
              setActive(index);
              setChosen(true);
            }}
          >
            <span aria-hidden="true">{index + 1}</span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
