import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Send, Copy, Check, MessageSquare, Github, Linkedin, BookOpen, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ showToast }) {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const fieldRefs = useRef({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    showToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = data => {
    const errs = {};
    if (!data.name.trim()) errs.name = 'Enter your name';
    if (!data.email.trim()) errs.email = 'Enter your email address';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Enter a valid email address';
    if (!data.message.trim()) errs.message = 'Write a message before sending';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstField = ['name', 'email', 'message'].find(f => errs[f]);
      fieldRefs.current[firstField]?.focus();
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      showToast('Message sent successfully! Thanks for reaching out.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 1800);
    }, 1200);
  };

  // ---- reveal on scroll ----
  const infoRef = useRef(null);
  const formCardRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = [infoRef.current, formCardRef.current].filter(Boolean);
    if (reduceMotion) {
      els.forEach(el => el.classList.add('cv-in-view'));
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cv-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">
            <MessageSquare size={14} /> Connect
          </span>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">
            Feel free to get in touch with me for inquiries, research collaborations, or software opportunities!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-card glass-card" ref={infoRef}>
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-text">
              I am eager to engage in conversations about AI engineering, data science pipelines, research papers, or open-source projects.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon-wrap">
                  <Mail size={18} className="text-cyan" />
                </div>
                <div className="detail-body">
                  <span className="detail-label">Email Address</span>
                  <div className="email-copy-row">
                    <span className="detail-value">{personalInfo.socials.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className={`copy-btn ${copied ? 'copy-btn-success' : ''}`}
                      title="Copy Email"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-wrap">
                  <MapPin size={18} className="text-cyan" />
                </div>
                <div className="detail-body">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="social-connect-box">
              <span className="social-box-title">Find me on other platforms:</span>
              <div className="social-box-links">
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="social-chip">
                  <Github size={16} /> GitHub
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="social-chip">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href={personalInfo.socials.googleScholar} target="_blank" rel="noreferrer" className="social-chip">
                  <BookOpen size={16} /> Google Scholar
                </a>
                <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="social-chip">
                  <Twitter size={16} /> Twitter / X
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card glass-card" ref={formCardRef}>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <h3 className="form-title">Send a Message</h3>

              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  ref={el => (fieldRefs.current.name = el)}
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
              </div>

              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  ref={el => (fieldRefs.current.email = el)}
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Collaboration / Opportunity"
                  value={formData.subject}
                  onChange={e => handleChange('subject', e.target.value)}
                />
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  ref={el => (fieldRefs.current.message = el)}
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={submitting || sent}
                className={`btn btn-primary submit-btn ${sent ? 'submit-btn-sent' : ''}`}
              >
                <span className="submit-btn-inner">
                  {submitting ? (
                    <>Sending<span className="cv-spinner" /></>
                  ) : sent ? (
                    <>Sent <Check size={16} /></>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2.5rem;
          align-items: start;
        }

        /* ---- reveal on scroll ---- */
        .contact-info-card, .contact-form-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1);
        }
        .contact-form-card { transition-delay: .12s; }
        .contact-info-card.cv-in-view, .contact-form-card.cv-in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .info-title, .form-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .info-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.25rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .detail-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), border-color 0.2s ease;
        }

        .detail-item:hover .detail-icon-wrap {
          transform: scale(1.08);
          border-color: var(--accent-cyan);
        }

        .detail-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          display: block;
          font-weight: 600;
        }

        .detail-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .email-copy-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .copy-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .copy-btn:focus-visible {
          outline: 2px solid var(--accent-cyan);
          outline-offset: 2px;
        }

        .copy-btn-success {
          border-color: var(--accent-emerald);
          color: var(--accent-emerald);
          animation: cv-pop 0.35s ease;
        }

        .social-connect-box {
          padding-top: 1.5rem;
          border-top: 1px solid var(--glass-border);
        }

        .social-box-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          display: block;
        }

        .social-box-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .social-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-chip:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          transform: translateY(-2px);
        }

        .social-chip:focus-visible {
          outline: 2px solid var(--accent-cyan);
          outline-offset: 2px;
        }

        /* Form styling */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-group input, .form-group textarea {
          background: rgba(9, 13, 22, 0.6);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-group input:hover, .form-group textarea:hover {
          border-color: var(--glass-border-hover, var(--glass-border));
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.2);
        }

        .form-group.has-error input, .form-group.has-error textarea {
          border-color: #f87171;
        }

        .form-group.has-error input:focus, .form-group.has-error textarea:focus {
          box-shadow: 0 0 10px rgba(248, 113, 113, 0.25);
        }

        .field-error {
          font-size: 0.78rem;
          color: #f87171;
          animation: cv-fade-in 0.25s ease;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .submit-btn-inner {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn svg {
          transition: transform 0.25s ease;
        }

        .submit-btn:not(:disabled):hover svg {
          transform: translateX(3px);
        }

        .submit-btn-sent {
          background: var(--accent-emerald) !important;
        }

        .cv-spinner {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-top-color: #fff;
          display: inline-block;
          animation: cv-spin 0.7s linear infinite;
        }

        .text-emerald { color: var(--accent-emerald); }

        @keyframes cv-pop {
          0% { transform: scale(1); }
          40% { transform: scale(1.18); }
          100% { transform: scale(1); }
        }

        @keyframes cv-fade-in {
          from { opacity: 0; transform: translateY(-3px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes cv-spin {
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-info-card, .contact-form-card, .copy-btn-success, .field-error, .cv-spinner,
          .detail-icon-wrap, .social-chip, .submit-btn svg {
            animation: none !important;
            transition: none !important;
          }
          .contact-info-card, .contact-form-card { opacity: 1 !important; transform: none !important; }
          .social-chip:hover, .detail-item:hover .detail-icon-wrap { transform: none; }
        }

        @media (max-width: 920px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}