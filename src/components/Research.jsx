import React from "react";
import {
  FileText,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Zap,
  BookOpen,
  Sparkles,
  Users
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Research() {
  const { research } = portfolioData;

  return (
    <section id="research">
      <div className="container">
        {/* Title */}
        <div className="section-title-wrap">
          <span className="section-tag">
            <BookOpen size={13} /> Academic Publications
          </span>
          <h2 className="section-title">Peer-Reviewed Research</h2>
          <p className="section-subtitle">
            Scientific investigation into cryptographic efficiency, edge embedded security,
            and resource optimization for continuous IoT telemetry.
          </p>
        </div>

        {/* Research Stack */}
        <div className="rs-container">
          {research.map((paper) => (
            <div key={paper.id} className="glass-card rs-card">
              {/* Top Bar: Indexed badge + Read Paper CTA */}
              <div className="rs-head">
                <div className="rs-badges">
                  <span className="rs-indexed-pill">
                    <ShieldCheck size={14} />
                    <span>{paper.indexed || "Scopus Indexed"}</span>
                  </span>
                  <span className="rs-venue-pill">
                    <Cpu size={13} />
                    <span>Edge Computing &amp; AI</span>
                  </span>
                </div>

                {paper.doiLink && (
                  <a
                    href={paper.doiLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary rs-read-btn"
                  >
                    <span>Read Paper Manuscript</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Title & Metadata */}
              <h3 className="rs-title">{paper.title}</h3>

              <div className="rs-author-strip">
                <span className="rs-author-item">
                  <Users size={14} className="text-emerald" />
                  <strong>Author:</strong> {paper.coAuthors}
                </span>
                <span className="rs-venue-item">
                  <BookOpen size={13} className="text-cyan" />
                  <span className="rs-venue-text">{paper.venue}</span>
                </span>
              </div>

              {/* Research Metrics Strip */}
              <div className="rs-metrics-grid">
                <div className="rs-metric-box">
                  <div className="rs-metric-val">34%</div>
                  <div className="rs-metric-lbl">Energy Overhead Reduction</div>
                </div>
                <div className="rs-metric-box">
                  <div className="rs-metric-val">AES-128/256</div>
                  <div className="rs-metric-lbl">Data Confidentiality</div>
                </div>
                <div className="rs-metric-box">
                  <div className="rs-metric-val">HMAC-SHA</div>
                  <div className="rs-metric-lbl">Message Authentication</div>
                </div>
                <div className="rs-metric-box">
                  <div className="rs-metric-val">Edge Microcontrollers</div>
                  <div className="rs-metric-lbl">Constrained Hardware Target</div>
                </div>
              </div>

              {/* Abstract */}
              <div className="rs-abstract-wrap">
                <h4 className="rs-abstract-title">Abstract</h4>
                <p className="rs-abstract-text">{paper.abstract}</p>
              </div>

              {/* Tech Tags */}
              <div className="rs-tags-row">
                {paper.tags.map((t, i) => (
                  <span key={i} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rs-container {
          max-width: 960px;
          margin: 0 auto;
        }

        .rs-card {
          padding: 2.5rem;
          border-radius: var(--radius-xl);
        }

        .rs-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .rs-badges {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .rs-indexed-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--accent-emerald-light);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        .rs-venue-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--accent-cyan-light);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
        }

        .rs-read-btn {
          font-size: 0.85rem;
          padding: 0.6rem 1.25rem;
        }

        .rs-title {
          font-family: var(--font-heading);
          font-size: clamp(1.35rem, 2.4vw, 1.85rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.85rem;
        }

        .rs-author-strip {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem 1.25rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
        }

        .rs-author-item,
        .rs-venue-item {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }

        .rs-venue-text {
          color: var(--text-muted);
          font-style: italic;
        }

        /* Metrics */
        .rs-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .rs-metric-box {
          background: rgba(11, 16, 28, 0.8);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 1rem 0.85rem;
          text-align: center;
          transition: all var(--transition-fast);
        }
        .rs-metric-box:hover {
          border-color: var(--accent-emerald);
          transform: translateY(-2px);
        }

        .rs-metric-val {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--accent-emerald-light);
          margin-bottom: 0.25rem;
        }

        .rs-metric-lbl {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* Abstract */
        .rs-abstract-wrap {
          background: rgba(255, 255, 255, 0.02);
          border-left: 3px solid var(--accent-emerald);
          padding: 1.25rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 1.75rem;
        }

        .rs-abstract-title {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-emerald-light);
          margin-bottom: 0.5rem;
        }

        .rs-abstract-text {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .rs-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .rs-card {
            padding: 1.35rem 1.15rem;
            border-radius: var(--radius-lg);
          }
          .rs-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }
          .rs-read-btn {
            width: 100%;
            justify-content: center;
          }
          .rs-title {
            font-size: 1.3rem;
            line-height: 1.3;
          }
          .rs-author-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.45rem;
            margin-bottom: 1.25rem;
          }
          .rs-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.65rem;
          }
          .rs-metric-box {
            padding: 0.75rem 0.5rem;
            min-height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .rs-metric-val {
            font-size: 1.05rem;
            line-height: 1.2;
            word-break: break-word;
          }
          .rs-metric-lbl {
            font-size: 0.64rem;
            line-height: 1.35;
            letter-spacing: 0.02em;
          }
          .rs-abstract-wrap {
            padding: 1rem 1.15rem;
          }
          .rs-abstract-text {
            font-size: 0.88rem;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
}
