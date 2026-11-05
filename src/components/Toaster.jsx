import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { TOAST } from '../lib/events.js';

/** Shows short confirmation messages sent with `toast()`. */
export default function Toaster() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let timer;
    const onToast = (event) => {
      setMessage({ text: event.detail, id: Date.now() });
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 2600);
    };
    window.addEventListener(TOAST, onToast);
    return () => {
      clearTimeout(timer);
      window.removeEventListener(TOAST, onToast);
    };
  }, []);

  return (
    <div className="toaster" role="status" aria-live="polite">
      {message && (
        <div className="toast" key={message.id}>
          <Check size={16} aria-hidden="true" /> {message.text}
        </div>
      )}
    </div>
  );
}
