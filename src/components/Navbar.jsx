import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles, Send } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
      const sections = ["home", ...navLinks.map((l) => l.href.substring(1))];
      const pos = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= pos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nb-wrapper ${isScrolled ? "nb-scrolled" : ""}`}>
      <div className="container nb-container">
        <nav className="nb-pill">
          {/* Logo */}
          <a href="#home" className="nb-brand" aria-label="Hitesh Jain Homepage">
            <span className="nb-brand-sym">&lt;</span>
            <span className="nb-brand-txt">HJ</span>
            <span className="nb-brand-slash">/</span>
            <span className="nb-brand-sym">&gt;</span>
            <span className="nb-pulse-dot" />
          </a>

          {/* Desktop Links */}
          <ul className="nb-desktop-links">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nb-link ${isActive ? "nb-active" : ""}`}
                  >
                    {link.name}
                    {isActive && <span className="nb-active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Controls */}
          <div className="nb-actions">
            <button
              onClick={toggleTheme}
              className="nb-icon-toggle"
              aria-label="Toggle visual theme"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? <Sun size={17} className="text-amber" /> : <Moon size={17} className="text-cyan" />}
            </button>

            <a href="#contact" className="nb-cta-btn">
              <span>Let's Talk</span>
              <Send size={13} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nb-menu-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="nb-drawer">
          <ul className="nb-drawer-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nb-drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <span className="nb-drawer-arrow">→</span>
                </a>
              </li>
            ))}
            <li className="nb-drawer-cta-wrap">
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Connect with Hitesh</span>
                <Send size={15} />
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .nb-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }
        .nb-scrolled {
          padding: 0.65rem 0;
        }

        .nb-container {
          display: flex;
          justify-content: center;
        }

        .nb-pill {
          width: 100%;
          max-width: 1040px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.25rem 0 1.5rem;
          background: rgba(14, 20, 34, 0.78);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(56, 189, 248, 0.16);
          border-radius: var(--radius-full);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nb-scrolled .nb-pill {
          background: rgba(11, 16, 28, 0.92);
          border-color: rgba(16, 185, 129, 0.35);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.55), 0 0 20px rgba(16, 185, 129, 0.18);
        }

        [data-theme="light"] .nb-pill {
          background: rgba(255, 255, 255, 0.86);
          border-color: rgba(15, 23, 42, 0.1);
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
        }
        [data-theme="light"] .nb-scrolled .nb-pill {
          background: rgba(255, 255, 255, 0.96);
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
        }

        .nb-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.15rem;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.12rem;
          text-decoration: none;
          color: var(--text-primary);
          transition: transform 0.2s ease;
        }
        .nb-brand:hover {
          transform: scale(1.05);
        }
        .nb-brand-sym {
          color: var(--accent-emerald);
        }
        .nb-brand-txt {
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #ffffff 40%, #67e8f9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        [data-theme="light"] .nb-brand-txt {
          background: linear-gradient(135deg, #0f172a 40%, #0369a1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nb-brand-slash {
          color: var(--accent-cyan);
        }
        .nb-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 10px var(--accent-emerald);
          margin-left: 0.35rem;
          animation: pulse-dot 2s infinite ease-in-out;
        }

        .nb-desktop-links {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          list-style: none;
        }

        .nb-link {
          position: relative;
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }
        .nb-link:hover {
          color: var(--text-primary);
          background: rgba(56, 189, 248, 0.06);
        }
        .nb-active {
          color: var(--text-primary);
          font-weight: 600;
          background: rgba(16, 185, 129, 0.12);
        }
        .nb-active-indicator {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 2.5px;
          border-radius: var(--radius-full);
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
        }

        .nb-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .nb-icon-toggle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nb-icon-toggle:hover {
          border-color: var(--accent-cyan);
          color: var(--text-primary);
          transform: rotate(15deg);
        }

        .nb-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.15));
          border: 1px solid rgba(16, 185, 129, 0.45);
          color: var(--accent-emerald-light);
          transition: all 0.25s ease;
        }
        .nb-cta-btn:hover {
          background: linear-gradient(135deg, #10b981, #06b6d4);
          color: #061a14;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
          transform: translateY(-1px);
        }

        .nb-menu-toggle {
          display: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .nb-drawer {
          position: fixed;
          top: calc(var(--navbar-height) + 1rem);
          left: 1rem;
          right: 1rem;
          background: rgba(11, 16, 28, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          animation: drawer-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-theme="light"] .nb-drawer {
          background: rgba(255, 255, 255, 0.97);
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
        }

        @keyframes drawer-enter {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nb-drawer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .nb-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .nb-drawer-link:hover {
          border-color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.1);
        }
        .nb-drawer-arrow {
          color: var(--accent-emerald);
        }
        .nb-drawer-cta-wrap {
          margin-top: 0.6rem;
        }

        @media (max-width: 900px) {
          .nb-desktop-links, .nb-cta-btn {
            display: none;
          }
          .nb-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
