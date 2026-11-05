import { useRef } from 'react';
import { Database, Server, Sparkles } from 'lucide-react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js';

const k = (text) => <span className="tok-keyword">{text}</span>;
const p = (text) => <span className="tok-prop">{text}</span>;
const s = (text) => <span className="tok-string">'{text}'</span>;
const c = (text) => <span className="tok-comment">{text}</span>;

const LINES = [
  c('// hello, world: I’m Garv'),
  <>{k('const')} garv = {'{'}</>,
  <>  {p('role')}: {s('Full-stack developer')},</>,
  <>  {p('studying')}: {s('BSc Computer Science')},</>,
  <>  {p('based')}: {s('Kingston, London')},</>,
  <>  {p('stack')}: [{s('React')}, {s('Node.js')}, {s('MySQL')}, {s('Java')}],</>,
  <>  {p('exploring')}: {s('AI-assisted development')},</>,
  <>  {p('status')}: {s('Open to opportunities')},</>,
  <>{'};'}</>,
  '',
  <>{k('export default')} garv;</>,
];

/** A decorative editor window that tilts towards the pointer. */
export default function CodeWindow() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  const tilt = (event) => {
    if (reduced || event.pointerType === 'touch') return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty('--tilt-x', `${(-y * 10).toFixed(2)}deg`);
    ref.current.style.setProperty('--tilt-y', `${(x * 12).toFixed(2)}deg`);
  };

  const reset = () => {
    ref.current.style.setProperty('--tilt-x', '0deg');
    ref.current.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <div className="hero-visual" aria-hidden="true" onPointerMove={tilt} onPointerLeave={reset}>
      <div className="code-window" ref={ref}>
        <div className="code-titlebar">
          <span className="code-dots"><i /><i /><i /></span>
          <span className="code-file">garv.js</span>
          <span className="code-branch">main</span>
        </div>
        <pre className="code-body">
          <code>
            {LINES.map((line, index) => (
              <span className="code-line" key={index} style={{ '--i': index }}>
                <span className="code-ln">{String(index + 1).padStart(2, '0')}</span>
                {line}
              </span>
            ))}
          </code>
        </pre>
        <div className="code-status">
          <span><i className="status-dot" /> Ready to build</span>
          <span>UTF-8 · JavaScript</span>
        </div>
      </div>
      <span className="float-chip chip-one"><Server size={15} /> REST APIs</span>
      <span className="float-chip chip-two"><Database size={15} /> MySQL</span>
      <span className="float-chip chip-three"><Sparkles size={15} /> AI tools</span>
    </div>
  );
}
