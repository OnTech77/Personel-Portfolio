export default function SectionLabel({ children }) {
  return (
    <span className="section-label">
      <span className="label-dot" />
      {children}
    </span>
  );
}
