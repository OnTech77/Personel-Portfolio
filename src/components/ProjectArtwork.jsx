/** Illustrations for projects without a screenshot. */
export default function ProjectArtwork({ type }) {
  if (type === 'ai') {
    return (
      <div className="project-art art-ai" aria-hidden="true">
        <div className="ai-orbit orbit-a" />
        <div className="ai-orbit orbit-b" />
        <div className="ai-core">AI</div>
        <span className="ai-note note-a">PEOPLE</span>
        <span className="ai-note note-b">WORK</span>
        <span className="ai-note note-c">IDEAS</span>
      </div>
    );
  }

  return (
    <div className="project-art art-portfolio" aria-hidden="true">
      <div className="browser-mock">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>ontech77.github.io</span>
        </div>
        <div className="browser-page">
          <span className="browser-badge" />
          <b />
          <b className="browser-accent" />
          <span className="browser-line" />
          <div className="browser-cards">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}
