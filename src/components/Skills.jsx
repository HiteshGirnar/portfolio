import React, { useState } from "react";
import { Cpu, Terminal, Sparkles, Database, Layers, CheckCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Machine Learning", "Full Stack", "Languages", "Database & Cloud", "Tools"];

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills">
      <div className="container">
        {/* Title */}
        <div className="section-title-wrap">
          <span className="section-tag">
            <Cpu size={13} /> Technical Matrix
          </span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A comprehensive spectrum of frameworks, models, databases, and toolchains I leverage
            to design intelligent software.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="sk-filter-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`sk-filter-pill ${activeCategory === cat ? "sk-filter-active" : ""}`}
            >
              <span>{cat}</span>
              {cat === "All" && <span className="sk-pill-count">{skills.length}</span>}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <div className="sk-grid">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="glass-card sk-card">
              <div className="sk-card-top">
                <div className="sk-icon-wrap">
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="sk-icon-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="sk-icon-fallback"
                    style={{ display: skill.icon ? "none" : "flex" }}
                  >
                    <Terminal size={20} className="text-emerald" />
                  </div>
                </div>

                {skill.level && (
                  <span className={`sk-level-pill sk-lvl-${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                )}
              </div>

              <div className="sk-card-body">
                <h3 className="sk-title">{skill.name}</h3>
                <span className="sk-cat-label">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ambient Tech Ticker */}
        <div className="sk-ticker-container">
          <div className="sk-ticker-header">
            <span className="sk-ticker-tag">LIVE TECH TICKER</span>
          </div>
          <div className="sk-marquee-track">
            <div className="sk-marquee-content">
              {[...skills, ...skills].map((s, i) => (
                <div key={i} className="sk-ticker-item">
                  {s.icon && (
                    <img src={s.icon} alt="" className="sk-ticker-icon" aria-hidden="true" />
                  )}
                  <span className="sk-ticker-name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sk-filter-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 3rem;
        }

        .sk-filter-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-body);
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(14, 20, 34, 0.7);
          border: 1px solid var(--glass-border);
          padding: 0.5rem 1.15rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-fast);
          backdrop-filter: blur(12px);
        }

        .sk-filter-pill:hover {
          color: var(--text-primary);
          border-color: rgba(56, 189, 248, 0.35);
          background: rgba(20, 30, 52, 0.85);
          transform: translateY(-2px);
        }

        .sk-filter-active {
          color: #061a14;
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%) !important;
          border-color: transparent !important;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
        }

        .sk-pill-count {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 0.1rem 0.45rem;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.25);
          color: inherit;
        }

        .sk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1.25rem;
          margin-bottom: 4rem;
        }

        .sk-card {
          padding: 1.35rem 1.25rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 125px;
          transition: all var(--transition-fast);
        }
        .sk-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-emerald);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4), 0 0 18px rgba(16, 185, 129, 0.15);
        }

        .sk-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .sk-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
        }

        .sk-icon-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
        }

        .sk-icon-fallback {
          align-items: center;
          justify-content: center;
        }

        .sk-level-pill {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 600;
          padding: 0.18rem 0.5rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .sk-lvl-advanced {
          color: var(--accent-emerald-light);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .sk-lvl-proficient {
          color: var(--accent-cyan-light);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .sk-lvl-intermediate {
          color: #facc15;
          background: rgba(250, 204, 21, 0.12);
          border: 1px solid rgba(250, 204, 21, 0.3);
        }

        .sk-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .sk-cat-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Ambient Ticker */
        .sk-ticker-container {
          position: relative;
          background: rgba(11, 16, 28, 0.65);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem 0;
          overflow: hidden;
          backdrop-filter: blur(14px);
        }

        .sk-ticker-header {
          text-align: center;
          margin-bottom: 0.75rem;
        }

        .sk-ticker-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .sk-marquee-track {
          display: flex;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
        }

        .sk-marquee-content {
          display: flex;
          align-items: center;
          gap: 2.2rem;
          animation: sk-loop 35s linear infinite;
          width: max-content;
        }

        .sk-marquee-track:hover .sk-marquee-content {
          animation-play-state: paused;
        }

        @keyframes sk-loop {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .sk-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          white-space: nowrap;
        }

        .sk-ticker-icon {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .sk-ticker-name {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        @media (max-width: 600px) {
          .sk-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
          }
          .sk-card {
            padding: 1rem 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}