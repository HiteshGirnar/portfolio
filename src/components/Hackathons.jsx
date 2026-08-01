import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Hackathons() {
  const { hackathons } = portfolioData;
  return (
    <section id="hackathons">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Competitions</span>
          <h2 className="section-title">Hackathons</h2>
          <p className="section-subtitle">Top placements from national and international hackathons.</p>
        </div>
        <div className="grid-3">
          {hackathons.map((h, i) => (
            <div key={i} className="glass-card hk-card">
              <div className="hk-top">
                <span className="hk-badge">{h.badge}</span>
                <span className="hk-year">{h.date}</span>
              </div>
              <h3 className="hk-title">{h.title}</h3>
              <h4 className="hk-award">{h.award}</h4>
              <p className="hk-org">?? {h.organizer}</p>
              <p className="hk-desc">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .hk-card { display: flex; flex-direction: column; }
        .hk-top  { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; }
        .hk-badge{ font-size: 0.78rem; font-weight: 700; color: var(--accent-green); background: #0f1f0f; border: 1px solid #1a3a1a; padding: 0.2rem 0.65rem; border-radius: var(--radius-full); }
        .hk-year { font-size: 0.78rem; color: var(--text-muted); }
        .hk-title{ font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem; }
        .hk-award{ font-size: 0.88rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem; }
        .hk-org  { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem; }
        .hk-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55; }
      `}</style>
    </section>
  );
}
