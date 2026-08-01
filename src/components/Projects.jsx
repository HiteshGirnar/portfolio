import React, { useState, useRef, useLayoutEffect, useEffect, useCallback } from "react";
import { FolderGit2, Search, ExternalLink, Github, X, SearchX } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const allTags = ["All", ...new Set(projects.flatMap(p => p.tags))].slice(0, 8);

  const filtered = projects.filter(p => {
    const m =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    const t2 = tag === "All" || p.tags.includes(tag);
    return m && t2;
  });

  // ---- sliding pill behind the active tag ----
  const tagRefs = useRef({});
  const tagWrapRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0, ready: false });

  const measurePill = useCallback(() => {
    const el = tagRefs.current[tag];
    const wrap = tagWrapRef.current;
    if (el && wrap) {
      const elRect = el.getBoundingClientRect();
      const wrapRect = wrap.getBoundingClientRect();
      setPill({
        left: elRect.left - wrapRect.left,
        top: elRect.top - wrapRect.top,
        width: elRect.width,
        height: elRect.height,
        ready: true
      });
    }
  }, [tag]);

  useLayoutEffect(() => {
    measurePill();
    window.addEventListener("resize", measurePill);
    return () => window.removeEventListener("resize", measurePill);
  }, [measurePill]);

  const filterKey = `${tag}::${query}`;

  // ---- reveal-on-scroll for cards ----
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const registerCard = el => { if (el) cardRefs.current.push(el); };

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      cardRefs.current.forEach(el => el.classList.add("pr-in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add("pr-in-view");
            observer.unobserve(el);
            // once the reveal has played, drop the stagger delay so later
            // hover transitions on this card aren't laggy
            const delayMs = (parseFloat(el.style.getPropertyValue("--stagger")) || 0) * 70;
            window.setTimeout(() => el.style.setProperty("--stagger", 0), delayMs + 650);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    cardRefs.current.forEach(el => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterKey]);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Innovations</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A showcase of machine learning, deep learning, and full-stack development projects.</p>
        </div>

        <div className="pr-controls">
       

          <div className="pr-tags" ref={tagWrapRef}>
            <div
              className="pr-tag-pill"
              style={{
                transform: `translate(${pill.left}px, ${pill.top}px)`,
                width: pill.width,
                height: pill.height,
                opacity: pill.ready ? 1 : 0
              }}
            />
            {allTags.map(t => (
              <button
                key={t}
                ref={el => (tagRefs.current[t] = el)}
                onClick={() => setTag(t)}
                className={`pr-tag ${tag === t ? "pr-tag-active" : ""}`}
                aria-pressed={tag === t}
              >
                {t}
              </button>
            ))}
          </div>

          <p className="pr-count" key={filtered.length}>
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid-2 pr-grid" key={filterKey}>
            {filtered.map((p, i) => (
              <div
                key={p.id}
                ref={registerCard}
                className="glass-card pr-card"
                style={{ "--stagger": i }}
              >
                <div className="pr-top">
                  <div className="pr-icon"><FolderGit2 size={20} /></div>
                  <div className="pr-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="pr-link-btn" title="GitHub">
                        <Github size={16} />
                      </a>
                    )}
                    {p.demo && p.demo !== "#" && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="pr-link-btn" title="Demo">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="pr-title">{p.title}</h3>
                <h4 className="pr-sub">{p.subtitle}</h4>
                <p className="pr-desc">{p.description}</p>
                <div className="pr-badges">
                  {p.tags.map((t, idx) => <span key={idx} className="tech-badge">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card pr-empty" key={filterKey}>
            <SearchX size={28} className="pr-empty-icon" />
            <p className="pr-empty-title">No projects match</p>
            <p className="pr-empty-body">
              Nothing fits "{query || tag}". Try a different term or clear your filters.
            </p>
            <button
              className="pr-empty-reset"
              onClick={() => { setQuery(""); setTag("All"); }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        .pr-controls { display: flex; flex-direction: column; align-items: center; gap: 0.85rem; margin-bottom: 2.75rem; }

        .pr-search { display: flex; align-items: center; gap: 0.65rem; padding: 0.6rem 1rem; width: 100%; max-width: 460px; transition: border-color .2s ease, box-shadow .2s ease; }
        .pr-search:focus-within { box-shadow: 0 0 0 3px var(--glass-border-hover, rgba(255,255,255,0.08)); }
        .pr-search-icon { color: var(--text-muted); flex-shrink: 0; transition: color .2s ease; }
        .pr-search:focus-within .pr-search-icon { color: var(--text-primary); }
        .pr-input { background: none; border: none; outline: none; color: var(--text-primary); font-family: var(--font-body); font-size: 0.92rem; width: 100%; }
        .pr-input::placeholder { color: var(--text-muted); }
        .pr-clear { all: unset; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--text-muted); padding: 3px; border-radius: 5px; transition: color .15s ease, background .15s ease, transform .15s ease; }
        .pr-clear:hover { color: var(--text-primary); background: var(--bg-card-hover); }
        .pr-clear:active { transform: scale(0.9); }

        .pr-tags { position: relative; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.45rem; }
        .pr-tag-pill { position: absolute; left: 0; top: 0; background: var(--text-primary); border-radius: var(--radius-sm); z-index: 0; transition: transform .35s cubic-bezier(.4,0,.2,1), width .35s cubic-bezier(.4,0,.2,1), height .35s cubic-bezier(.4,0,.2,1), opacity .2s ease; }
        .pr-tag { position: relative; z-index: 1; font-size: 0.78rem; font-weight: 500; padding: 0.28rem 0.8rem; border-radius: var(--radius-sm); background: var(--bg-card); border: 1px solid var(--glass-border); color: var(--text-muted); cursor: pointer; transition: color .2s ease, border-color .2s ease; }
        .pr-tag:hover { border-color: var(--glass-border-hover); color: var(--text-primary); }
        .pr-tag:focus-visible { outline: 2px solid var(--text-primary); outline-offset: 2px; }
        .pr-tag-active { color: var(--bg-primary, #0a0a0a); background: transparent; border-color: transparent; }

        .pr-count { font-size: 0.78rem; color: var(--text-muted); margin: 0; }

        .pr-grid { align-items: start; }

        /* ---- reveal on scroll ---- */
        .pr-card {
          position: relative; overflow: hidden; display: flex; flex-direction: column;
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity .6s cubic-bezier(.16,1,.3,1),
            transform .6s cubic-bezier(.16,1,.3,1),
            box-shadow .35s ease,
            border-color .25s ease;
          transition-delay: calc(var(--stagger, 0) * 70ms), calc(var(--stagger, 0) * 70ms), 0s, 0s;
        }
        .pr-card.pr-in-view { opacity: 1; transform: translateY(0); }
        .pr-card::before {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.06), transparent 55%);
          transition: opacity .35s ease;
        }
        .pr-card.pr-in-view:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -20px rgba(0,0,0,0.45); border-color: var(--glass-border-hover); }
        .pr-card.pr-in-view:hover::before { opacity: 1; }

        .pr-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .pr-icon { width: 40px; height: 40px; border-radius: var(--radius-sm); background: var(--bg-secondary); border: 1px solid var(--glass-border); display: flex; align-items: center; justify-content: center; color: var(--text-secondary); transition: transform .35s cubic-bezier(.34,1.56,.64,1), color .25s ease; }
        .pr-card:hover .pr-icon { transform: rotate(-6deg) scale(1.08); color: var(--text-primary); }

        .pr-links { display: flex; gap: 0.45rem; }
        .pr-link-btn { width: 34px; height: 34px; border-radius: var(--radius-sm); background: var(--bg-secondary); border: 1px solid var(--glass-border); color: var(--text-secondary); display: flex; align-items: center; justify-content: center; text-decoration: none; transition: color .15s ease, border-color .15s ease, transform .15s ease; }
        .pr-link-btn:hover { color: var(--text-primary); border-color: var(--glass-border-hover); transform: translateY(-2px); }
        .pr-link-btn:focus-visible { outline: 2px solid var(--text-primary); outline-offset: 2px; }

        .pr-title { font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem; }
        .pr-sub   { font-size: 0.85rem; font-weight: 500; color: var(--text-muted); margin-bottom: 0.85rem; }
        .pr-desc  { font-size: 0.93rem; color: var(--text-secondary); line-height: 1.6; flex-grow: 1; margin-bottom: 1.25rem; }
        .pr-badges { display: flex; flex-wrap: wrap; gap: 0.4rem; padding-top: 1rem; border-top: 1px solid var(--glass-border); }

        .pr-empty { text-align: center; padding: 3rem 2rem; color: var(--text-muted); display: flex; flex-direction: column; align-items: center; gap: 0.35rem; animation: pr-fade-in .4s cubic-bezier(.16,1,.3,1) both; }
        .pr-empty-icon { color: var(--text-muted); margin-bottom: 0.5rem; }
        .pr-empty-title { font-size: 1rem; font-weight: 600; color: var(--text-primary); margin: 0; }
        .pr-empty-body { font-size: 0.88rem; margin: 0 0 0.75rem; max-width: 320px; }
        .pr-empty-reset { all: unset; cursor: pointer; font-size: 0.8rem; font-weight: 600; padding: 0.5rem 1.1rem; border-radius: var(--radius-sm); border: 1px solid var(--glass-border); color: var(--text-primary); transition: border-color .15s ease, background .15s ease; }
        .pr-empty-reset:hover { border-color: var(--glass-border-hover); background: var(--bg-card-hover); }

        @keyframes pr-fade-in {
          from { opacity: 0; transform: translateY(14px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .pr-card, .pr-empty, .pr-tag-pill, .pr-icon, .pr-link-btn, .pr-card::before {
            animation: none !important;
            transition: none !important;
          }
          .pr-card { opacity: 1 !important; transform: none !important; }
          .pr-card:hover, .pr-card.pr-in-view:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}