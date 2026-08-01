import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [toastMessage, setToastMessage] = useState(null);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className={`app-wrapper theme-${theme}`}>
      {/* Ambient background blur elements */}
      <div className="ambient-bg">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
      </div>

      {/* Main Header & Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
     
        <Projects />
        <Research />
        <Contact showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast Alert */}
      {toastMessage && (
        <div className="toast-alert">
          <CheckCircle2 size={18} className="text-cyan" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
