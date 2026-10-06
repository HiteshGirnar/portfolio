import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className={`app-root theme-${theme}`}>
      {/* 3D WebGL Constellation and Ambient Glow Background */}
      <AmbientBackground />

      {/* Floating Glassmorphic Pill Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Contact showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Notification Toast */}
      {toastMessage && (
        <div className="toast-alert" role="status" aria-live="polite">
          <CheckCircle2 size={20} className="text-emerald" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
