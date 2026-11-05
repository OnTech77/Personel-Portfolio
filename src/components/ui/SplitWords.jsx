/** Splits text into words that animate in one after another. */
export default function SplitWords({ text, className = '', start = 0, step = 70 }) {
  return (
    <span className={className}>
      {text.split(' ').map((word, index) => (
        <span className="split-word" key={`${word}-${index}`} style={{ '--word-delay': `${start + index * step}ms` }}>
          {word}
          {' '}
        </span>
      ))}
    </span>
  );
}
