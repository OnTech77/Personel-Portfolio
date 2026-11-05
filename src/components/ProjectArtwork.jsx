import { Download, WandSparkles } from 'lucide-react';

/** Illustrations for projects without a screenshot. */
export default function ProjectArtwork({ type }) {
  if (type === 'slides') {
    return (
      <div className="project-art art-slides" aria-hidden="true">
        <div className="slides-scene">
          <div className="md-panel">
            <span className="md-file">talk.md</span>
            <span>
              <b>#</b> My Talk
            </span>
            <span className="md-muted">---</span>
            <span>
              <b>##</b> Agenda
            </span>
            <span>
              <b>-</b> Why
            </span>
            <span>
              <b>-</b> How
            </span>
            <span className="md-muted">Note: say hello</span>
          </div>
          <div className="slide-stack">
            <div className="mini-slide slide-back" />
            <div className="mini-slide slide-mid" />
            <div className="mini-slide slide-front">
              <span className="slide-kicker">SLIDECRAFT</span>
              <b>Markdown → Slides</b>
              <i />
              <i />
              <i />
            </div>
          </div>
          <span className="art-chip chip-ai">
            <WandSparkles size={14} /> AI enhance
          </span>
          <span className="art-chip chip-pdf">
            <Download size={14} /> PDF
          </span>
        </div>
      </div>
    );
  }

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
