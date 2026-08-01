import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experiences } = portfolioData;
  return (
    <section id="experiences">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Roles across AI engineering, research, and software development.</p>
        </div>

        <div className="ex-timeline">
          <div className="ex-line"></div>
          {experiences.map((exp, i) => (
            <div key={i} className="ex-item">
              <div className="ex-dot">{exp.logo}</div>
              <div className="glass-card ex-card">
                <div className="ex-head">
                  <div>
                    <h3 className="ex-role">{exp.role}</h3>
                    <h4 className="ex-company">{exp.company}</h4>
                  </div>
                  <div className="ex-meta">
                    <span className="ex-pill"><Calendar size={12}/> {exp.period}</span>
                    <span className="ex-pill"><MapPin size={12}/> {exp.location}</span>
                  </div>
                </div>
                <ul className="ex-list">
                  {exp.highlights.map((h, j) => (
                    <li key={j}><span className="ex-bullet">—</span><span>{h}</span></li>
                  ))}
                </ul>
                <div className="ex-stack">
                  {exp.techStack.map((t, k) => <span key={k} className="tech-badge">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ex-timeline { position: relative; max-width: 860px; margin: 0 auto; padding: 0.5rem 0; }
        .ex-line { position: absolute; left: 20px; top: 0; bottom: 0; width: 1px; background: var(--glass-border); }
        .ex-item { position: relative; padding-left: 60px; margin-bottom: 2rem; }
        .ex-dot { position: absolute; left: 0; top: 0; width: 42px; height: 42px; border-radius: 50%; background: var(--bg-card); border: 1px solid var(--glass-border); display: flex; align-items: center; justify-content: center; font-size: 1.15rem; z-index: 2; }
        .ex-card { padding: 1.5rem; }
        .ex-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.1rem; gap: 1rem; flex-wrap: wrap; }
        .ex-role { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text-primary); }
        .ex-company { font-size: 0.9rem; font-weight: 600; color: var(--text-secondary); margin-top: 0.2rem; }
        .ex-meta { display: flex; gap: 0.6rem; flex-wrap: wrap; }
        .ex-pill { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.77rem; color: var(--text-muted); background: var(--bg-secondary); border: 1px solid var(--glass-border); padding: 0.22rem 0.65rem; border-radius: var(--radius-full); }
        .ex-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.25rem; }
        .ex-list li { display: flex; gap: 0.6rem; color: var(--text-secondary); font-size: 0.93rem; line-height: 1.6; }
        .ex-bullet { color: var(--text-muted); flex-shrink: 0; margin-top: 0.05rem; }
        .ex-stack { display: flex; flex-wrap: wrap; gap: 0.45rem; padding-top: 1rem; border-top: 1px solid var(--glass-border); }
        @media (max-width: 640px) {
          .ex-timeline { padding-left: 0; }
          .ex-item { padding-left: 48px; }
          .ex-line { left: 14px; }
          .ex-dot { width: 32px; height: 32px; font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
}
