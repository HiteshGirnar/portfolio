import React from "react";
import {
  GraduationCap,
  Award,
  MapPin,
  Brain,
  Code2,
  ShieldCheck,
  Cpu,
  Calendar,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personalInfo } = portfolioData;

  const pillarIcons = {
    Brain: <Brain size={22} className="text-emerald" />,
    Code2: <Code2 size={22} className="text-cyan" />,
    ShieldCheck: <ShieldCheck size={22} className="text-emerald" />,
    Cpu: <Cpu size={22} className="text-cyan" />
  };

  return (
    <section id="about">
      <div className="container">
        {/* Title Header */}
        <div className="section-title-wrap">
          <span className="section-tag">
            <Sparkles size={13} /> Engineering Background
          </span>
          <h2 className="section-title">Architecting With Purpose</h2>
          <p className="section-subtitle">
            Blending mathematical machine learning algorithms with reliable full-stack engineering
            to solve tangible challenges.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Bento Card 1: Narrative & Engineering Ethos (7 cols) */}
          <div className="glass-card col-7 ab-story-card">
            <div className="ab-card-header">
              <span className="ab-card-tag">Core Philosophy</span>
              <h3 className="ab-card-title">Where Algorithms Meet Production</h3>
            </div>

            <div className="ab-paragraphs">
              {personalInfo.extendedBio.map((paragraph, index) => (
                <p key={index} className="ab-para">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="ab-traits-wrap">
              <span className="ab-traits-label">Engineering Focus:</span>
              <div className="ab-traits-row">
                <span className="ab-trait-pill">Production MERN</span>
                <span className="ab-trait-pill">Edge AI &amp; Cryptography</span>
                <span className="ab-trait-pill">Deep Learning</span>
                <span className="ab-trait-pill">Docker &amp; Cloud</span>
                <span className="ab-trait-pill">System Optimization</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Core Engineering Pillars (5 cols) */}
          <div className="glass-card col-5 ab-pillars-card">
            <div className="ab-card-header">
              <span className="ab-card-tag">Specializations</span>
              <h3 className="ab-card-title">Technical Domains</h3>
            </div>

            <div className="ab-pillars-list">
              {personalInfo.highlights?.map((pillar, i) => (
                <div key={i} className="ab-pillar-item">
                  <div className="ab-pillar-icon">
                    {pillarIcons[pillar.icon] || <Cpu size={20} className="text-emerald" />}
                  </div>
                  <div className="ab-pillar-text">
                    <h4 className="ab-pillar-title">{pillar.title}</h4>
                    <p className="ab-pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 3: Academic Timeline & Milestones (12 cols) */}
          <div className="glass-card col-12 ab-edu-card">
            <div className="ab-edu-header">
              <div className="ab-edu-title-group">
                <div className="ab-edu-icon-wrap">
                  <GraduationCap size={22} className="text-emerald" />
                </div>
                <div>
                  <h3 className="ab-card-title">Academic Milestones &amp; Education</h3>
                  <p className="ab-card-desc">
                    Formal training in Artificial Intelligence, Machine Learning, and Computer Science.
                  </p>
                </div>
              </div>
            </div>

            <div className="ab-edu-grid">
              {personalInfo.education.map((edu, i) => (
                <div key={i} className="ab-edu-item">
                  <div className="ab-edu-badge-row">
                    <span className="ab-edu-badge">{edu.badge}</span>
                    <span className="ab-edu-period">
                      <Calendar size={13} /> {edu.period}
                    </span>
                  </div>

                  <h4 className="ab-edu-degree">{edu.degree}</h4>
                  <p className="ab-edu-inst">{edu.institution}</p>

                  <div className="ab-edu-meta">
                    <span className="ab-edu-loc">
                      <MapPin size={13} /> {edu.location}
                    </span>
                    {edu.score && (
                      <span className="ab-edu-score">
                        <Award size={13} /> {edu.score}
                      </span>
                    )}
                  </div>

                  {edu.highlights && (
                    <p className="ab-edu-note">{edu.highlights}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ab-story-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ab-card-header {
          margin-bottom: 1.25rem;
        }

        .ab-card-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-emerald-light);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.35rem;
        }

        .ab-card-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .ab-card-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .ab-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .ab-para {
          font-size: 0.96rem;
          line-height: 1.72;
          color: var(--text-secondary);
        }

        .ab-traits-wrap {
          padding-top: 1.25rem;
          border-top: 1px solid var(--glass-border);
        }

        .ab-traits-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.65rem;
        }

        .ab-traits-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ab-trait-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--accent-cyan-light);
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.22);
          padding: 0.28rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        /* Pillars Card */
        .ab-pillars-list {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .ab-pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.85rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all var(--transition-fast);
        }
        .ab-pillar-item:hover {
          border-color: var(--glass-border-hover);
          background: rgba(16, 185, 129, 0.05);
          transform: translateX(4px);
        }

        .ab-pillar-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ab-pillar-title {
          font-family: var(--font-heading);
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .ab-pillar-desc {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        /* Education Card */
        .ab-edu-card {
          padding: 2.25rem;
        }

        .ab-edu-header {
          margin-bottom: 1.75rem;
        }

        .ab-edu-title-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .ab-edu-icon-wrap {
          width: 44px;
          height: 44px;
          min-width: 44px;
          min-height: 44px;
          flex-shrink: 0;
          align-self: flex-start;
          margin-top: 3px;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ab-edu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .ab-edu-item {
          padding: 1.5rem;
          border-radius: var(--radius-md);
          background: rgba(11, 16, 28, 0.7);
          border: 1px solid var(--glass-border);
          transition: all var(--transition-normal);
        }
        .ab-edu-item:hover {
          border-color: var(--accent-emerald);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35), 0 0 18px rgba(16, 185, 129, 0.15);
        }

        [data-theme="light"] .ab-edu-item {
          background: rgba(248, 250, 252, 0.9);
        }

        .ab-edu-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .ab-edu-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-emerald-light);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.22rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .ab-edu-period {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-muted);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .ab-edu-degree {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .ab-edu-inst {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .ab-edu-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.65rem;
          margin-bottom: 0.85rem;
        }

        .ab-edu-loc {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .ab-edu-score {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-cyan-light);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.28);
          padding: 0.18rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .ab-edu-note {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.5;
          padding-top: 0.75rem;
          border-top: 1px dashed var(--glass-border);
        }

        @media (max-width: 768px) {
          .ab-story-card, .ab-pillars-card {
            padding: 1.5rem 1.25rem;
          }
          .ab-edu-card {
            padding: 1.5rem 1.25rem;
          }
          .ab-edu-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .ab-edu-item {
            padding: 1.25rem 1rem;
          }
          .ab-edu-degree {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}