import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Volunteer() {
  const { volunteering } = portfolioData;
  return (
    <section id="volunteer">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">Volunteering</h2>
          <p className="section-subtitle">Community contributions, mentorship, and leadership roles.</p>
        </div>
        <div className="grid-3">
          {volunteering.map((v, i) => (
            <div key={i} className="glass-card vl-card">
              <h3 className="vl-role">{v.role}</h3>
              <h4 className="vl-org">{v.organization}</h4>
              <p className="vl-desc">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .vl-card { display: flex; flex-direction: column; gap: 0.4rem; }
        .vl-role { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--text-primary); }
        .vl-org  { font-size: 0.85rem; font-weight: 600; color: var(--text-muted); }
        .vl-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55; margin-top: 0.35rem; }
      `}</style>
    </section>
  );
}
