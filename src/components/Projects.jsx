import React, { useState } from "react";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Search,
  X,
  Sparkles,
  Layers,
  Activity,
  Code2,
  ArrowUpRight
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Machine Learning", "Full Stack"];

  const filteredProjects = projects.filter((project) => {
    const matchesCat =
      activeCategory === "All" || project.category === activeCategory;
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <section id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="section-tag">
            <Layers size={13} /> Engineering Portfolio
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated showcase of end-to-end applications spanning Deep Learning, Computer Vision,
            and scalable MERN stack web architectures.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="pr-controls-bar">
          {/* Category Tabs */}
          <div className="pr-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pr-tab ${activeCategory === cat ? "pr-tab-active" : ""}`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="pr-search-box">
            <Search size={16} className="pr-search-icon" />
            <input
              type="text"
              placeholder="Search by technology, name, or domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="pr-search-clear"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Project Count Pill */}
        <div className="pr-count-wrap">
          <span className="pr-count-badge">
            Showing {filteredProjects.length} of {projects.length} Projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="pr-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card pr-card">
              {/* Card Header */}
              <div className="pr-card-header">
                <div className="pr-badge-group">
                  <span
                    className="pr-category-badge"
                    style={{
                      borderColor: `${project.accentColor || "#10b981"}44`,
                      color: project.accentColor || "#10b981",
                      background: `${project.accentColor || "#10b981"}15`
                    }}
                  >
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="pr-metrics-badge">
                      <Sparkles size={11} /> {project.metrics}
                    </span>
                  )}
                </div>

                <div className="pr-links-group">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn pr-icon-btn"
                      title="View GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn pr-icon-btn pr-demo-btn"
                      title="Launch Live Demo"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="pr-title">{project.title}</h3>
              <p className="pr-subtitle">{project.subtitle}</p>

              {/* Description */}
              <p className="pr-desc">{project.description}</p>

              {/* Tech Tags */}
              <div className="pr-tags-list">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Card Actions */}
              <div className="pr-bottom-actions">
                {project.demo && project.demo !== "#" ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="pr-live-link"
                  >
                    <span className="pr-pulse-ring" />
                    <span>Live Deployment</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="pr-local-badge">Research / Academic Build</span>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="pr-code-link"
                  >
                    <Code2 size={14} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="pr-empty-card glass-card">
            <FolderGit2 size={36} className="text-muted" />
            <h4 className="pr-empty-title">No projects matched your search</h4>
            <p className="pr-empty-desc">
              Try adjusting your query or click "All" to view all featured work.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="btn btn-cyber"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        .pr-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .pr-tabs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(14, 20, 34, 0.7);
          border: 1px solid var(--glass-border);
          padding: 0.35rem;
          border-radius: var(--radius-full);
          backdrop-filter: blur(12px);
        }

        .pr-tab {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          padding: 0.45rem 1.15rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pr-tab:hover {
          color: var(--text-primary);
        }
        .pr-tab-active {
          color: #061a14;
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.35);
        }

        .pr-search-box {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 280px;
          flex: 1;
          max-width: 420px;
        }

        .pr-search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .pr-search-input {
          width: 100%;
          height: 44px;
          padding: 0 2.5rem 0 2.6rem;
          border-radius: var(--radius-full);
          background: rgba(14, 20, 34, 0.7);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.88rem;
          outline: none;
          transition: all var(--transition-fast);
          backdrop-filter: blur(12px);
        }
        .pr-search-input:focus {
          border-color: var(--accent-emerald);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.25);
        }

        .pr-search-clear {
          position: absolute;
          right: 0.9rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pr-search-clear:hover {
          color: var(--text-primary);
        }

        .pr-count-wrap {
          margin-bottom: 2rem;
        }

        .pr-count-badge {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Grid */
        .pr-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.85rem;
        }

        .pr-card {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          border-radius: var(--radius-lg);
          transition: all var(--transition-normal);
        }
        .pr-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-emerald);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(16, 185, 129, 0.18);
        }

        .pr-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .pr-badge-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pr-category-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.22rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .pr-metrics-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan-light);
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.25);
          padding: 0.22rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .pr-links-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pr-icon-btn {
          width: 36px;
          height: 36px;
        }

        .pr-demo-btn:hover {
          color: var(--accent-emerald);
          border-color: var(--accent-emerald);
        }

        .pr-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.25;
          margin-bottom: 0.25rem;
        }

        .pr-subtitle {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--accent-cyan-light);
          margin-bottom: 1rem;
        }

        .pr-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.68;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .pr-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .pr-bottom-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .pr-live-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--accent-emerald-light);
          transition: all var(--transition-fast);
        }
        .pr-live-link:hover {
          color: #ffffff;
          transform: translateX(2px);
        }

        .pr-pulse-ring {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 10px var(--accent-emerald);
          animation: pulse-dot 1.8s infinite ease-in-out;
        }

        .pr-local-badge {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-muted);
        }

        .pr-code-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }
        .pr-code-link:hover {
          color: var(--text-primary);
        }

        /* Empty State */
        .pr-empty-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3.5rem 1.5rem;
          gap: 1rem;
        }

        .pr-empty-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .pr-empty-desc {
          color: var(--text-secondary);
          max-width: 400px;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          .pr-grid {
            grid-template-columns: 1fr;
          }
          .pr-controls-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .pr-search-box {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}