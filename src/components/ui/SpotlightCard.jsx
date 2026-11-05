/** A card whose background and border light up around the pointer. */
export default function SpotlightCard({ as: Tag = 'article', className = '', children, ...props }) {
  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <Tag className={`spotlight-card${className ? ` ${className}` : ''}`} onPointerMove={handlePointerMove} {...props}>
      {children}
    </Tag>
  );
}
