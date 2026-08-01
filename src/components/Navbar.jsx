import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "About",      href: "#about" },
    { name: "Skills",     href: "#skills" },

    { name: "Projects",   href: "#projects" },

    { name: "Research",   href: "#research" },
    { name: "Contact",    href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.substring(1));
      const pos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= pos) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nb ${isScrolled ? "nb-scrolled" : ""}`}>
      <div className="container nb-inner">
        <a href="#" className="nb-brand">
          <span className="nb-def">hite</span>
          <span className="nb-name"> JAIN</span>
          <span className="nb-colon">:</span>
        </a>

        <nav className="nb-desktop">
          <ul className="nb-links">
            {navLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href} className={`nb-link ${activeSection === l.href.substring(1) ? "nb-active" : ""}`}>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className="nb-icon-btn" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        <div className="nb-mobile-ctrl">
          <button onClick={toggleTheme} className="nb-icon-btn" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="nb-icon-btn" aria-label="Menu">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="nb-drawer">
          <ul>
            {navLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="nb-drawer-link" onClick={() => setMobileMenuOpen(false)}>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .nb {
          position: fixed; top: 0; left: 0; width: 100%;
          height: var(--navbar-height); z-index: 1000;
          background: rgba(10,10,10,0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid #1a1a1a;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .nb-scrolled {
          background: rgba(10,10,10,0.95);
          border-bottom-color: #2a2a2a;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        .nb-inner {
          display: flex; align-items: center;
          justify-content: space-between; height: 100%;
        }
        .nb-brand {
          font-family: var(--font-heading); font-size: 1.15rem;
          font-weight: 700; text-decoration: none;
          display: flex; align-items: center;
        }
        .nb-def  { color: #555555; }
        .nb-name { color: var(--text-primary); }
        .nb-colon { color: #444444; animation: blink 1.4s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .nb-desktop { display: flex; align-items: center; gap: 1.5rem; }
        .nb-links { display: flex; gap: 1.1rem; list-style: none; }
        .nb-link {
          font-size: 0.875rem; font-weight: 500;
          color: var(--text-muted); text-decoration: none;
          padding: 0.3rem 0; position: relative;
          transition: color 0.2s ease;
        }
        .nb-link:hover, .nb-active { color: var(--text-primary); }
        .nb-active::after {
          content: ""; position: absolute; bottom: -3px;
          left: 0; width: 100%; height: 1.5px;
          background: #555555; border-radius: 2px;
        }
        .nb-icon-btn {
          width: 34px; height: 34px; border-radius: var(--radius-sm);
          background: var(--bg-card); border: 1px solid var(--glass-border);
          color: var(--text-secondary); display: flex; align-items: center;
          justify-content: center; cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .nb-icon-btn:hover { border-color: var(--glass-border-hover); color: var(--text-primary); }

        .nb-mobile-ctrl { display: none; align-items: center; gap: 0.6rem; }

        .nb-drawer {
          position: fixed; top: var(--navbar-height); left: 0; width: 100%;
          background: rgba(10,10,10,0.97);
          border-bottom: 1px solid var(--glass-border);
          padding: 1.25rem 1.5rem;
        }
        .nb-drawer ul { list-style: none; display: flex; flex-direction: column; gap: 0.85rem; }
        .nb-drawer-link {
          font-size: 1rem; font-weight: 600;
          color: var(--text-secondary); text-decoration: none;
          display: block; padding: 0.35rem 0;
          border-bottom: 1px solid #181818;
          transition: color 0.2s ease;
        }
        .nb-drawer-link:hover { color: var(--text-primary); }

        @media (max-width: 920px) {
          .nb-desktop { display: none; }
          .nb-mobile-ctrl { display: flex; }
        }
      `}</style>
    </header>
  );
}
