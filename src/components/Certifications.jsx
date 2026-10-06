import React from "react";
import {
  Award,
  CheckCircle,
  ExternalLink,
  Shield,
  Cloud,
  Brain,
  Database,
  FileSpreadsheet,
  Sparkles
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;

  const iconMap = {
    Cloud: <Cloud size={24} className="text-cyan" />,
    Brain: <Brain size={24} className="text-emerald" />,
    Shield: <Shield size={24} className="text-rose" />,
    Database: <Database size={24} className="text-cyan" />,
    FileSpreadsheet: <FileSpreadsheet size={24} className="text-violet" />
  };

  return (
    <section id="certifications">
      <div className="container">
        {/* Title */}
        <div className="section-title-wrap">
          <span className="section-tag">
            <Award size={13} /> Verified Credentials
          </span>
          <h2 className="section-title">Certifications &amp; Training</h2>
          <p className="section-subtitle">
            Industry-standard qualifications and accredited coursework across Cloud Platforms,
            Machine Learning algorithms, and Cybersecurity.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {certifications?.map((cert) => (
            <div key={cert.id} className="glass-card cert-card">
              <div className="cert-card-header">
                <div
                  className="cert-icon-box"
                  style={{
                    backgroundColor: `${cert.color || "#10b981"}18`,
                    borderColor: `${cert.color || "#10b981"}35`
                  }}
                >
                  {iconMap[cert.icon] || <Award size={24} className="text-emerald" />}
                </div>

                <div className="cert-badge-row">
                  <span className="cert-badge">{cert.badge}</span>
                  <span className="cert-status-tag">
                    <CheckCircle size={12} className="text-emerald" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">
                  Issued by <strong className="text-primary">{cert.issuer}</strong>
                </p>
                <p className="cert-desc">{cert.description}</p>
              </div>

              <div className="cert-footer">
                <span className="cert-verify-link">
                  <Sparkles size={13} className="text-emerald" />
                  <span>Credential Active</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
        }

        .cert-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.85rem;
          border-radius: var(--radius-lg);
          transition: all var(--transition-normal);
        }
        .cert-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-emerald);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.45), 0 0 22px rgba(16, 185, 129, 0.16);
        }

        .cert-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .cert-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cert-badge-row {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.35rem;
        }

        .cert-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .cert-status-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--accent-emerald-light);
        }

        .cert-content {
          margin-bottom: 1.5rem;
        }

        .cert-name {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.4rem;
        }

        .cert-issuer {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .cert-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .cert-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .cert-verify-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--accent-emerald-light);
        }

        .text-rose   { color: #f43f5e; }
        .text-violet { color: #a855f7; }

        @media (max-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .cert-grid {
            grid-template-columns: 1fr;
            gap: 1.15rem;
          }
          .cert-card {
            padding: 1.35rem 1.15rem;
          }
        }
      `}</style>
    </section>
  );
}
