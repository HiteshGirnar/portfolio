import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Twitter, Brain, Heart, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personalInfo } = portfolioData;

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="ft-wrap">
      <div className="container ft-top">
        <div className="ft-brand">
          <a href="#home" className="ft-logo">
            <span className="text-emerald">&lt;</span>
            <span className="ft-logo-name">HITESH JAIN</span>
            <span className="text-cyan">/&gt;</span>
          </a>
          <p className="ft-sub">
            Artificial Intelligence, Deep Learning &amp; Modern Full-Stack Engineering.
          </p>
          <div className="ft-live-status">
            <span className="status-dot" />
            <span>Open to opportunities in Bengaluru &amp; Remote</span>
          </div>
        </div>

        <nav className="ft-nav" aria-label="Footer Navigation">
          <span className="ft-col-title">Navigation</span>
          <div className="ft-links-grid">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="ft-link">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="ft-channels">
          <span className="ft-col-title">Connect</span>
          <div className="ft-social-icons">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={personalInfo.socials.twitter || "#"}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="Twitter"
            >
              <Twitter size={17} />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="icon-btn"
              title="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="ft-divider-line" />

      <div className="container ft-bottom">
        <p className="ft-copy">
          © {new Date().getFullYear()} Hitesh Jain. Engineered with React &amp; Three.js.
        </p>

        <button
          onClick={scrollToTop}
          className="ft-top-btn"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <span>Top</span>
          <ArrowUp size={15} />
        </button>
      </div>

      <style>{`
        .ft-wrap {
          border-top: 1px solid var(--divider-color);
          background: rgba(7, 9, 14, 0.95);
          padding-top: 4rem;
          padding-bottom: 2rem;
          position: relative;
          z-index: 2;
        }

        [data-theme="light"] .ft-wrap {
          background: rgba(248, 250, 252, 0.98);
        }

        .ft-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .ft-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-family: var(--font-mono);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.85rem;
        }

        .ft-logo-name {
          letter-spacing: 0.08em;
          background: var(--gradient-heading);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ft-sub {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 340px;
          margin-bottom: 1.25rem;
        }

        .ft-live-status {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--accent-emerald-light);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
        }

        .ft-col-title {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.15rem;
        }

        .ft-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem 1rem;
        }

        .ft-link {
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }
        .ft-link:hover {
          color: var(--accent-emerald-light);
        }

        .ft-social-icons {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .ft-divider-line {
          width: 100%;
          height: 1px;
          background: var(--glass-border);
          margin-bottom: 1.75rem;
        }

        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .ft-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(14, 20, 34, 0.8);
          border: 1px solid var(--glass-border);
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .ft-top-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-emerald);
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.3);
          transform: translateY(-2px);
        }

        @media (max-width: 850px) {
          .ft-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}