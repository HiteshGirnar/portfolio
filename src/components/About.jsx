import React from "react";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate engineer combining data science, machine learning, and
            software craftsmanship.
          </p>
        </div>

        <div className="ab-grid">
          {/* Bio */}
          <div className="glass-card ab-bio-card">
            <span className="ab-quote-mark">“</span>
            <h3 className="ab-heading">My Journey</h3>

            {personalInfo.extendedBio.map((p, i) => (
              <p key={i} className="ab-para">
                {p}
              </p>
            ))}

            {personalInfo.interests?.length > 0 && (
              <div className="ab-passions">
                <div className="ab-pass-title">Beyond the code</div>
                <div className="ab-pass-row">
                  {personalInfo.interests.map((interest, i) => (
                    <span key={i} className="ab-pass-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Education */}
          <div className="ab-edu-col">
            <h3 className="ab-heading">
              <GraduationCap size={20} /> Education
            </h3>

            <div className="ab-timeline">
              {personalInfo.education.map((ed, i) => {
                const ongoing = /present/i.test(ed.period);
                return (
                  <div key={i} className="ab-tl-row">
                    <div className="ab-tl-marker">
                      <span
                        className={`ab-tl-dot ${ongoing ? "ab-tl-dot-live" : ""}`}
                      ></span>
                      {i !== personalInfo.education.length - 1 && (
                        <span className="ab-tl-line"></span>
                      )}
                    </div>

                    <div className="glass-card ab-edu-card">
                      <div className="ab-edu-top">
                        <span className="ab-badge">{ed.badge}</span>
                        <span className="ab-period">{ed.period}</span>
                      </div>
                      <h4 className="ab-degree">{ed.degree}</h4>
                      <p className="ab-inst">{ed.institution}</p>
                      <p className="ab-loc">
                        <MapPin size={13} /> {ed.location}
                      </p>
                      {ed.score && (
                        <div className="ab-score">
                          <Award size={13} /> {ed.score}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ab-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 1.75rem; align-items: start; }

        .ab-heading { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin-bottom: 1.1rem; display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary); }

        .ab-bio-card { position: relative; overflow: hidden; }
        .ab-quote-mark { position: absolute; top: -0.5rem; right: 1.25rem; font-family: var(--font-heading); font-size: 5rem; line-height: 1; color: var(--glass-border); user-select: none; }
        .ab-para { position: relative; color: var(--text-secondary); font-size: 0.97rem; line-height: 1.7; margin-bottom: 1rem; }

        .ab-passions { margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--glass-border); }
        .ab-pass-title { font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.7rem; }
        .ab-pass-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .ab-pass-tag { font-size: 0.82rem; color: var(--text-secondary); background: var(--bg-secondary); border: 1px solid var(--glass-border); padding: 0.28rem 0.75rem; border-radius: var(--radius-sm); }

        .ab-edu-col { display: flex; flex-direction: column; gap: 1rem; }

        .ab-timeline { display: flex; flex-direction: column; }
        .ab-tl-row { display: grid; grid-template-columns: 20px 1fr; gap: 1rem; }
        .ab-tl-marker { display: flex; flex-direction: column; align-items: center; padding-top: 0.4rem; }
        .ab-tl-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--text-muted); flex-shrink: 0; }
        .ab-tl-dot-live { background: var(--accent-green); box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.15); }
        .ab-tl-line { flex: 1; width: 1px; background: var(--glass-border); margin: 0.4rem 0; }

        .ab-edu-card { padding: 1.35rem; margin-bottom: 1rem; transition: border-color 0.2s ease; }
        .ab-edu-card:hover { border-color: var(--glass-border-hover); }
        .ab-edu-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .ab-badge { font-size: 0.72rem; font-weight: 700; color: var(--text-muted); background: var(--bg-secondary); border: 1px solid var(--glass-border); padding: 0.18rem 0.6rem; border-radius: var(--radius-sm); }
        .ab-period { font-size: 0.78rem; color: var(--text-muted); }
        .ab-degree { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem; }
        .ab-inst { font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.3rem; }
        .ab-loc { display: flex; align-items: center; gap: 0.3rem; font-size: 0.8rem; color: var(--text-muted); }
        .ab-score { display: inline-flex; align-items: center; gap: 0.35rem; margin-top: 0.65rem; font-size: 0.82rem; font-weight: 600; color: var(--accent-green); background: #0f1f0f; border: 1px solid #1a3a1a; padding: 0.22rem 0.65rem; border-radius: var(--radius-sm); }

        @media (max-width: 920px) {
          .ab-grid { grid-template-columns: 1fr; }
          .ab-quote-mark { display: none; }
        }
      `}</style>
    </section>
  );
}