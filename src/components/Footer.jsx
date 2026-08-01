import React from "react";
import { ArrowUp, Heart, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
];

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#home" className="brand-logo">
            <span className="brand-name">Hitesh</span>
            <span className="brand-colon">.</span>
            <span className="brand-last">Jain</span>
          </a>
          <p className="footer-subtext">
            Artificial Intelligence &amp; Machine Learning Portfolio
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="footer-soc-icon"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-soc-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="footer-soc-icon"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="container footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} Hitesh Jain. Made with{" "}
          <Heart size={13} className="heart-icon" /> and a lot of coffee.
        </p>

        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <style>{`

.footer-wrap {
  border-top: 1px solid var(--divider-color, var(--glass-border));
  background: var(--bg-secondary);
  padding-top: 3rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.3fr 1fr auto;
  align-items: start;
  gap: 2rem;
  padding-bottom: 2.25rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.brand-logo {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
  display: inline-flex;
  align-items: baseline;
  width: fit-content;
}

.brand-name { color: var(--text-primary); }
.brand-colon { color: var(--accent-green); margin: 0 0.05em; }
.brand-last { color: var(--text-secondary); font-weight: 500; }

.footer-subtext {
  font-size: 0.85rem;
  color: var(--text-muted);
  max-width: 320px;
  line-height: 1.5;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding-top: 0.3rem;
}

.footer-link {
  font-size: 0.88rem;
  color: var(--text-secondary);
  width: fit-content;
  transition: color var(--transition-fast, 0.15s ease);
}

.footer-link:hover { color: var(--text-primary); }

.footer-socials {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-self: end;
}

.footer-soc-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  transition: all var(--transition-fast, 0.15s ease);
}

.footer-soc-icon:hover {
  color: var(--text-primary);
  border-color: var(--glass-border-hover);
  background: var(--bg-card);
  transform: translateY(-2px);
}

.footer-divider {
  border-top: 1px solid var(--divider-color, var(--glass-border));
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
}

.copyright-text {
  font-size: 0.85rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.heart-icon {
  color: #ef4444;
  fill: #ef4444;
  flex-shrink: 0;
}

.back-to-top-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.back-to-top-btn:hover {
  background: var(--accent-green);
  color: #06170d;
  border-color: var(--accent-green);
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(74, 222, 128, 0.35);
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    text-align: center;
    padding-bottom: 1.75rem;
  }

  .footer-brand { align-items: center; }
  .footer-links { align-items: center; }
  .footer-link { width: auto; }
  .footer-socials { justify-self: center; }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .copyright-text { justify-content: center; }
}

      `}</style>
    </footer>
  );
}