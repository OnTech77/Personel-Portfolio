/**
 * An endless, decorative scrolling row. The items are listed twice so the loop is seamless,
 * so the whole row is hidden from screen readers: show the same content elsewhere.
 */
export default function Marquee({ items, reverse = false, speed = 40 }) {
  return (
    <div className={`marquee${reverse ? ' marquee-reverse' : ''}`} aria-hidden="true" style={{ '--marquee-duration': `${speed}s` }}>
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
