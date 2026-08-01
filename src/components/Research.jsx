import React from "react";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Research() {
  const { research } = portfolioData;
  return (
    <section id="research">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Publications</span>
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle">Scopus-indexed conference papers published at IEEE and Springer venues.</p>
        </div>
        <div className="rs-stack">
          {research.map(r => (
            <div key={r.id} className="glass-card rs-card">
              <div className="rs-head">
                <div className="rs-badges">
                  <span className="rs-indexed">Scopus Indexed</span>
                </div>
                {r.doiLink && (
                  <a href={r.doiLink} target="_blank" rel="noreferrer" className="rs-read-btn">
                    Read Paper <ExternalLink size={13}/>
                  </a>
                )}
              </div>
              <h3 className="rs-title">{r.title}</h3>
              <p className="rs-venue">{r.publication}</p>
              <p className="rs-abstract">{r.abstract}</p>
              <div className="rs-tags">
                {r.tags.map((t, i) => <span key={i} className="tech-badge">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .rs-stack { display: flex; flex-direction: column; gap: 1.5rem; max-width: 900px; margin: 0 auto; }
        .rs-card { padding: 1.75rem; }
        .rs-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.65rem; }
        .rs-badges { display: flex; gap: 0.5rem; }
        .rs-indexed { font-size: 0.72rem; font-weight: 700; color: var(--accent-green); background: #0f1f0f; border: 1px solid #1a3a1a; padding: 0.2rem 0.65rem; border-radius: var(--radius-full); }
        .rs-read-btn { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); background: var(--bg-secondary); border: 1px solid var(--glass-border); padding: 0.3rem 0.8rem; border-radius: var(--radius-sm); text-decoration: none; transition: all 0.15s ease; }
        .rs-read-btn:hover { color: var(--text-primary); border-color: var(--glass-border-hover); }
        .rs-title { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.3rem; line-height: 1.4; }
        .rs-venue { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.85rem; }
        .rs-abstract { font-size: 0.93rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem; }
        .rs-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; padding-top: 1rem; border-top: 1px solid var(--glass-border); }
      `}</style>
    </section>
  );
}
