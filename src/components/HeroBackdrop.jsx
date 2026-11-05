// Fixed positions keep the meteor shower identical on every visit.
const METEORS = [
  ['8%', '0s', '7s'],
  ['22%', '2.4s', '9s'],
  ['38%', '4.6s', '8s'],
  ['54%', '1.2s', '10s'],
  ['68%', '3.4s', '7.5s'],
  ['82%', '5.8s', '9.5s'],
  ['94%', '6.8s', '8.5s'],
];

/** Decorative hero background: grid, drifting aurora, pointer spotlight and meteors. */
export default function HeroBackdrop() {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-grid-lines" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="hero-spotlight" />
      {METEORS.map(([left, delay, duration]) => (
        <span className="meteor" key={left} style={{ '--left': left, '--delay': delay, '--duration': duration }} />
      ))}
      <div className="hero-fade" />
    </div>
  );
}
