import { useCallback, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollFrame } from '../hooks/useScrollPosition.js';

/** A thin sky bar showing how far down the page the visitor is, plus a back-to-top button. */
export default function ScrollProgress() {
  const barRef = useRef(null);
  const buttonRef = useRef(null);

  const onScroll = useCallback((offset, progress) => {
    barRef.current?.style.setProperty('--progress', progress.toFixed(4));
    buttonRef.current?.classList.toggle('is-visible', offset > 700);
  }, []);
  useScrollFrame(onScroll);

  return (
    <>
      <div className="scroll-progress" ref={barRef} aria-hidden="true" />
      <a className="back-to-top icon-button" href="#home" ref={buttonRef} aria-label="Back to top">
        <ArrowUp size={18} />
      </a>
    </>
  );
}
