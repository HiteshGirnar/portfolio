import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
  Brain,
  MessageSquare,
  Sparkles,
  Clock
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact({ showToast }) {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    showToast("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Please write a brief message";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      showToast("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    }, 1100);
  };

  return (
    <section id="contact">
      <div className="container">
        {/* Title */}
        <div className="section-title-wrap">
          <span className="section-tag">
            <MessageSquare size={13} /> Transmission
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in collaborating on AI/ML projects, full-stack applications, or discussing
            exciting career opportunities? Let's connect.
          </p>
        </div>

        <div className="ct-layout">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="glass-card ct-info-card">
            <div className="ct-status-box">
              <span className="status-dot" />
              <div className="ct-status-text">
                <span className="ct-status-title">Current Status</span>
                <span className="ct-status-val">{personalInfo.status}</span>
              </div>
            </div>

            <h3 className="ct-info-title">Let's build intelligent solutions together</h3>
            <p className="ct-info-desc">
              I am currently considering internships, full-time developer roles, and collaborative
              research projects in AI, Machine Learning, and Full-Stack Engineering.
            </p>

            {/* Email Copy Box */}
            <div className="ct-email-box">
              <div className="ct-email-left">
                <Mail size={18} className="text-emerald" />
                <span className="ct-email-val">{personalInfo.socials.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="ct-copy-btn"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Location & Time */}
            <div className="ct-meta-list">
              <div className="ct-meta-item">
                <MapPin size={17} className="text-cyan" />
                <div>
                  <span className="ct-meta-label">Location</span>
                  <span className="ct-meta-val">{personalInfo.location}</span>
                </div>
              </div>

              <div className="ct-meta-item">
                <Clock size={17} className="text-emerald" />
                <div>
                  <span className="ct-meta-label">Time Zone</span>
                  <span className="ct-meta-val">IST (UTC +5:30)</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="ct-socials-wrap">
              <span className="ct-socials-label">Connect across platforms:</span>
              <div className="ct-social-links">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social-pill"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social-pill"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.twitter || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social-pill"
                >
                  <Twitter size={16} />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={personalInfo.socials.googleScholar || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social-pill"
                >
                  <Brain size={16} />
                  <span>Scholar</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card ct-form-card">
            <h3 className="ct-form-title">Send A Message</h3>
            <p className="ct-form-subtitle">Fill out the form below to reach me directly.</p>

            <form onSubmit={handleSubmit} className="ct-form" noValidate>
              <div className="ct-form-group">
                <label htmlFor="ct-name" className="ct-label">
                  Your Name *
                </label>
                <input
                  id="ct-name"
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`ct-input ${errors.name ? "ct-input-err" : ""}`}
                />
                {errors.name && <span className="ct-err-msg">{errors.name}</span>}
              </div>

              <div className="ct-form-group">
                <label htmlFor="ct-email" className="ct-label">
                  Your Email *
                </label>
                <input
                  id="ct-email"
                  type="email"
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`ct-input ${errors.email ? "ct-input-err" : ""}`}
                />
                {errors.email && <span className="ct-err-msg">{errors.email}</span>}
              </div>

              <div className="ct-form-group">
                <label htmlFor="ct-subject" className="ct-label">
                  Subject (Optional)
                </label>
                <input
                  id="ct-subject"
                  type="text"
                  placeholder="e.g. Internship Inquiry / AI Project"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="ct-input"
                />
              </div>

              <div className="ct-form-group">
                <label htmlFor="ct-message" className="ct-label">
                  Message *
                </label>
                <textarea
                  id="ct-message"
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`ct-input ct-textarea ${errors.message ? "ct-input-err" : ""}`}
                />
                {errors.message && <span className="ct-err-msg">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary ct-submit-btn"
              >
                {submitting ? (
                  <span>Sending Message...</span>
                ) : sent ? (
                  <>
                    <Check size={17} />
                    <span>Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .ct-layout {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 2.25rem;
          align-items: stretch;
        }

        .ct-info-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ct-status-box {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.28);
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .ct-status-text {
          display: flex;
          flex-direction: column;
        }

        .ct-status-title {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .ct-status-val {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-emerald-light);
        }

        .ct-info-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.75rem;
        }

        .ct-info-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .ct-email-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-md);
          background: rgba(11, 16, 28, 0.8);
          border: 1px solid var(--glass-border);
          margin-bottom: 1.75rem;
        }

        .ct-email-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .ct-email-val {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .ct-copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .ct-copy-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-emerald);
        }

        .ct-meta-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .ct-meta-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .ct-meta-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .ct-meta-val {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .ct-socials-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .ct-social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .ct-social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }
        .ct-social-pill:hover {
          color: var(--text-primary);
          border-color: var(--accent-emerald);
          transform: translateY(-2px);
        }

        /* Form */
        .ct-form-card {
          padding: 2.5rem;
        }

        .ct-form-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .ct-form-subtitle {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ct-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .ct-label {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ct-input {
          width: 100%;
          background: rgba(11, 16, 28, 0.75);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 0.85rem 1.15rem;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.92rem;
          outline: none;
          transition: all var(--transition-fast);
        }
        .ct-input:focus {
          border-color: var(--accent-emerald);
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.25);
        }

        .ct-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .ct-input-err {
          border-color: #ef4444 !important;
        }

        .ct-err-msg {
          font-size: 0.78rem;
          color: #ef4444;
          font-family: var(--font-mono);
        }

        .ct-submit-btn {
          margin-top: 0.5rem;
          width: 100%;
          padding: 0.9rem;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          .ct-layout {
            grid-template-columns: 1fr;
          }
          .ct-info-card, .ct-form-card {
            padding: 1.85rem;
          }
        }
      `}</style>
    </section>
  );
}