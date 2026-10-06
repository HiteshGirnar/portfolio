import React, { useState } from "react";
import {
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  FileText,
  Sparkles,
  Cpu,
  Brain,
  Layers,
  ShieldCheck
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personalInfo } = portfolioData;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 8,
      y: (x / (rect.width / 2)) * 8
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Headline, pitch, stats, CTAs */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <div className="status-pill hero-status-pill">
              <span className="status-dot" />
              <span>{personalInfo.status}</span>
            </div>
            <div className="hero-loc-pill">
              <MapPin size={13} className="text-cyan" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <h1 className="hero-heading">
            Engineering <span className="hero-accent-text">Intelligent AI</span> &amp; Modern{" "}
            <span className="hero-gradient-text">Full-Stack Solutions</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong className="text-glow">{personalInfo.name}</strong>—an AI &amp; Machine
            Learning engineer specializing in Deep Learning, Computer Vision, and scalable MERN stack architectures.
            Building intelligent software that bridges rigorous algorithms with high-performance user experiences.
          </p>

          {/* Key Metric Highlights */}
          <div className="hero-stats-grid">
            {personalInfo.stats?.map((stat, i) => (
              <div key={i} className="hero-stat-card">
                <div className="hero-stat-val">
                  <span>{stat.value}</span>
                  {stat.suffix && <span className="hero-stat-suf">{stat.suffix}</span>}
                </div>
                <div className="hero-stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={17} />
            </a>

            <a href="#research" className="btn btn-cyber">
              <FileText size={16} />
              <span>Research Paper</span>
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="btn btn-ghost"
              title="Send direct email"
            >
              <Mail size={16} />
              <span>Email Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social-strip">
            <span className="hero-social-label">Profiles:</span>
            <div className="hero-social-icons">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.socials.twitter || "#"}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                title="Twitter / X"
              >
                <Twitter size={18} />
              </a>
              <a
                href={personalInfo.socials.googleScholar || "#"}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                title="Google Scholar"
              >
                <Brain size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Cyber Profile Showcase */}
        <div className="hero-visual">
          <div
            className="hero-card-perspective"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
          >
            {/* Radiant Ambient Glow Behind Card */}
            <div className="hero-glow-bloom" />

            {/* Glowing Border Frame */}
            <div className="hero-profile-frame">
              <div className="hero-image-wrap">
                <img
                  src="/hitesh_profile.jpeg"
                  alt={personalInfo.name}
                  className="hero-profile-img"
                  loading="eager"
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith(".jpeg")) {
                      e.currentTarget.src = "/hitesh_profile.jpg";
                    }
                  }}
                />
                <div className="hero-img-overlay" />
              </div>

              {/* High-Tech Terminal Strip on Photo */}
              <div className="hero-id-strip">
                <span className="hero-id-status" />
                <span className="hero-id-text">AIML • DEPT_DSCE // 2027</span>
              </div>
            </div>

            {/* Floating Orbiting Tech Badges */}
            <div className="hero-floating-badge badge-top-left">
              <Brain size={16} className="text-emerald" />
              <span>Deep Learning</span>
            </div>

            <div className="hero-floating-badge badge-top-right">
              <Layers size={16} className="text-cyan" />
              <span>MERN Stack</span>
            </div>

            <div className="hero-floating-badge badge-bottom-right">
              <ShieldCheck size={16} className="text-emerald" />
              <span>Edge AI Security</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 94vh;
          display: flex;
          align-items: center;
          padding-top: calc(var(--navbar-height) + 4rem);
          padding-bottom: 5rem;
          border-top: none;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          align-items: center;
          gap: 4.5rem;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
        }

        .hero-badge-wrap {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .hero-status-pill {
          background: rgba(16, 185, 129, 0.12);
        }

        .hero-loc-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--glass-border);
          padding: 0.32rem 0.85rem;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
        }

        .hero-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 4.4vw, 3.8rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 1.4rem;
        }

        .hero-accent-text {
          color: var(--accent-emerald-light);
          text-shadow: 0 0 25px rgba(16, 185, 129, 0.45);
        }

        .hero-gradient-text {
          background: var(--gradient-heading);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 620px;
          margin-bottom: 2rem;
        }

        .text-glow {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.9rem;
          margin-bottom: 2.2rem;
          max-width: 580px;
        }

        .hero-stat-card {
          background: rgba(14, 20, 34, 0.65);
          backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 0.85rem 0.75rem;
          text-align: center;
          transition: all var(--transition-fast);
        }
        .hero-stat-card:hover {
          border-color: var(--accent-emerald);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(16, 185, 129, 0.2);
        }

        .hero-stat-val {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .hero-stat-suf {
          font-size: 0.85rem;
          color: var(--accent-emerald-light);
          margin-left: 0.15rem;
        }

        .hero-stat-lbl {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-social-strip {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hero-social-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .hero-social-icons {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        /* Right Column Showcase */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .hero-card-perspective {
          position: relative;
          width: 340px;
          height: 420px;
          transition: transform 0.15s ease-out;
          transform-style: preserve-3d;
        }

        .hero-glow-bloom {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.25), rgba(6, 182, 212, 0.2), transparent 70%);
          filter: blur(35px);
          z-index: 0;
          border-radius: var(--radius-xl);
          animation: bloom-pulse 6s ease-in-out infinite alternate;
        }

        @keyframes bloom-pulse {
          0% { opacity: 0.6; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1.05); }
        }

        .hero-profile-frame {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          border-radius: var(--radius-xl);
          padding: 8px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.6), rgba(6, 182, 212, 0.3), rgba(255, 255, 255, 0.1));
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(16, 185, 129, 0.2);
          overflow: hidden;
        }

        .hero-image-wrap {
          width: 100%;
          height: 100%;
          border-radius: calc(var(--radius-xl) - 6px);
          overflow: hidden;
          position: relative;
          background: #090d16;
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: contrast(1.05) brightness(1.02);
          transition: transform 0.4s ease;
        }
        .hero-card-perspective:hover .hero-profile-img {
          transform: scale(1.04);
        }

        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(7, 9, 14, 0.85) 0%, transparent 45%);
          pointer-events: none;
        }

        .hero-id-strip {
          position: absolute;
          bottom: 16px;
          left: 18px;
          right: 18px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-sm);
          background: rgba(11, 16, 28, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(56, 189, 248, 0.25);
          z-index: 2;
        }

        .hero-id-status {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
        }

        .hero-id-text {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent-cyan-light);
        }

        /* Floating Orbiting Badges */
        .hero-floating-badge {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.95rem;
          border-radius: var(--radius-full);
          background: rgba(14, 20, 34, 0.92);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(56, 189, 248, 0.3);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4), 0 0 18px rgba(16, 185, 129, 0.2);
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          z-index: 3;
          animation: float-bob 4.5s ease-in-out infinite alternate;
          white-space: nowrap;
        }

        .badge-top-left {
          top: -14px;
          left: -28px;
          animation-delay: 0s;
        }

        .badge-top-right {
          top: 35%;
          right: -36px;
          animation-delay: 1.4s;
        }

        .badge-bottom-right {
          bottom: 22px;
          left: -25px;
          animation-delay: 2.2s;
        }

        @keyframes float-bob {
          0% { transform: translateY(0); }
          100% { transform: translateY(-9px); }
        }

        .text-emerald { color: var(--accent-emerald); }
        .text-cyan    { color: var(--accent-cyan); }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3.5rem;
          }
          .hero-content {
            align-items: center;
          }
          .hero-badge-wrap,
          .hero-actions,
          .hero-social-strip {
            justify-content: center;
          }
          .hero-stats-grid {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-visual {
            order: -1;
            margin-bottom: 1rem;
          }
        }

        @media (max-width: 600px) {
          .hero-section {
            padding-top: calc(var(--navbar-height) + 1.25rem);
            padding-bottom: 3.5rem;
          }
          .hero-heading {
            font-size: 1.85rem;
            line-height: 1.2;
            margin-bottom: 1rem;
          }
          .hero-description {
            font-size: 0.92rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.65rem;
            width: 100%;
          }
          .hero-stat-card {
            padding: 0.7rem 0.5rem;
          }
          .hero-stat-val {
            font-size: 1.25rem;
          }
          .hero-stat-lbl {
            font-size: 0.68rem;
          }
          .hero-card-perspective {
            width: 250px;
            height: 315px;
          }
          .hero-floating-badge {
            font-size: 0.72rem;
            padding: 0.35rem 0.65rem;
            gap: 0.35rem;
          }
          .badge-top-left {
            top: -10px;
            left: 0px;
          }
          .badge-top-right {
            top: 28%;
            right: -10px;
          }
          .badge-bottom-right {
            bottom: -14px;
            left: 50%;
            transform: translateX(-50%);
            animation: none;
          }
          .hero-id-strip {
            bottom: 8px;
            left: 10px;
            right: 10px;
            padding: 0.32rem 0.6rem;
          }
          .hero-id-text {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </section>
  );
}