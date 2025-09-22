import React, { useState, useRef, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import EventCoordination from './components/EventCoordination';
import IEEELeadership from './components/IEEELeadership';
import InductionProgram from './components/InductionProgram';
import AlgoScape from './components/AlgoScape';
import Projects from './components/Projects';
import ProjectVideos from './components/ProjectVideos';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ImageModal from './components/ImageModal';
import BackToTop from './components/BackToTop';


const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    } catch {
      return 'dark';
    }
  });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Custom Cursor Refs
  const cursorDotRef = useRef(null);
  const cursorCircleRef = useRef(null);

  // Theme Toggle Logic
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      document.querySelectorAll('.star').forEach(el => el.remove());
    }
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  useEffect(() => {
    // Load EmailJS SDK
    const emailJsScript = document.createElement('script');
    emailJsScript.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    emailJsScript.async = true;
    document.body.appendChild(emailJsScript);

    // Create and Append FontAwesome
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    fontAwesomeLink.integrity = 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==';
    fontAwesomeLink.crossOrigin = 'anonymous';
    fontAwesomeLink.referrerPolicy = 'no-referrer';
    document.head.appendChild(fontAwesomeLink);

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function createLeaves() {
        if (!document.documentElement.classList.contains('dark') && !prefersReducedMotion) {
            const existingLeaves = document.querySelectorAll('.leaf');
            if (existingLeaves.length > 6) return;
            
            let e = document.createElement("div");
            e.setAttribute("class", "leaf");
            e.style.position = 'fixed';
            e.style.left = Math.random() * window.innerWidth + "px";
            e.style.fontSize = (14 + Math.random() * 8) + "px";
            e.style.willChange = 'transform, opacity';
            
            const duration = 8 + Math.random() * 4;
            e.style.animationDuration = duration + "s";
            
            document.body.appendChild(e);
            
            setTimeout(() => { 
              if(document.body.contains(e)) {
                document.body.removeChild(e);
              }
            }, duration * 1000);
        }
    }

    function createStars() {
        if (document.documentElement.classList.contains('dark') && !prefersReducedMotion) {
            const existingStars = document.querySelectorAll('.star');
            if (existingStars.length >= 8) return; // Max 8 stars as per memory specs
            
            let e = document.createElement("div");
            e.setAttribute("class", "star");
            e.style.position = 'fixed';
            e.style.left = Math.random() * window.innerWidth + "px";
            e.style.fontSize = (12 + Math.random() * 8) + "px";
            e.style.willChange = 'transform, opacity';
            
            const duration = 2 + Math.random() * 3;
            e.style.animationDuration = duration + "s";
            
            document.body.appendChild(e);
            
            setTimeout(() => { 
              if(document.body.contains(e)) {
                document.body.removeChild(e);
              }
            }, duration * 1000);
        }
    }

    const leafInterval = theme === 'light' && !prefersReducedMotion ? setInterval(createLeaves, 400) : null;
    const starInterval = theme === 'dark' && !prefersReducedMotion ? setInterval(createStars, 200) : null; // 200ms as per memory specs

    // Optimize pointer tracking with better throttling
    let ticking = false;
    let rafId = null;
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
        if (!ticking) {
          rafId = requestAnimationFrame(() => {
            // Only update if elements actually use these CSS variables
            const x = pointerX.toFixed(1);
            const y = pointerY.toFixed(1);
            const xp = (pointerX / window.innerWidth).toFixed(3);
            const yp = (pointerY / window.innerHeight).toFixed(3);
            
            const docStyle = document.documentElement.style;
            docStyle.setProperty('--x', x);
            docStyle.setProperty('--xp', xp);
            docStyle.setProperty('--y', y);
            docStyle.setProperty('--yp', yp);
            
            ticking = false;
          });
          ticking = true;
        }
    };
    document.body.addEventListener('pointermove', syncPointer, { passive: true });

    return () => {
      if (leafInterval) clearInterval(leafInterval);
      if (starInterval) clearInterval(starInterval);
      if (document.head.contains(fontAwesomeLink)) document.head.removeChild(fontAwesomeLink);
      if(document.body.contains(emailJsScript)) document.body.removeChild(emailJsScript);
      document.querySelectorAll('.leaf').forEach(el => el.remove());
      document.querySelectorAll('.star').forEach(el => el.remove());
      document.body.removeEventListener('pointermove', syncPointer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [theme]);

  // Reveal sections on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.15 }
    );
    const nodes = document.querySelectorAll('.section-reveal');
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  // Add manifest and register a basic service worker for offline shell + SEO
  useEffect(() => {
    const manifestLink = document.createElement('link');
    manifestLink.rel = 'manifest';
    manifestLink.href = '/manifest.webmanifest';
    document.head.appendChild(manifestLink);
    
    const themeMeta = document.createElement('meta');
    themeMeta.name = 'theme-color';
    themeMeta.content = theme === 'dark' ? '#0f172a' : '#8b5cf6';
    document.head.appendChild(themeMeta);

    // Add SEO-friendly page title updates
    const updatePageTitle = () => {
      const section = activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
      if (activeSection === 'home') {
        document.title = 'Md Meraj Ansari - AI/ML Developer & IEEE IAS Chair | Portfolio';
      } else {
        document.title = `${section} - Md Meraj Ansari | AI/ML Developer & IEEE IAS Chair`;
      }
    };
    updatePageTitle();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').catch(() => {});
    }

    return () => {
      if (document.head.contains(manifestLink)) document.head.removeChild(manifestLink);
      if (document.head.contains(themeMeta)) document.head.removeChild(themeMeta);
    };
  }, [theme, activeSection]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      }, { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = (sectionId, fromMobile = false) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const headerOffset = 80; // aligns with scroll-padding-top
    const rect = target.getBoundingClientRect();
    const startY = window.scrollY;
    const targetY = startY + rect.top - headerOffset;
    const distance = Math.abs(targetY - startY);

    if (prefersReduced) {
      window.scrollTo(0, targetY);
    } else {
      // Faster overall, snap instantly for short hops
      if (distance < 200) {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      } else {
        const duration = 280;
      const start = performance.now();
      const ease = (t) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2; // easeInOutQuad
      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const y = startY + (targetY - startY) * ease(progress);
        window.scrollTo(0, y);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      }
    }
    setActiveSection(sectionId);
    if (fromMobile) setIsNavOpen(false);
  };

  return (
    <>
  <CustomCursor cursorDotRef={cursorDotRef} cursorCircleRef={cursorCircleRef} />
  <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen text-gray-800 dark:text-white overflow-hidden relative font-sans transition-colors duration-300">
        <div className="relative z-10 px-6 py-12 md:px-12 lg:px-24">
          <Navigation 
            activeSection={activeSection}
            theme={theme}
            isNavOpen={isNavOpen}
            onNavClick={handleNavClick}
            onThemeToggle={toggleTheme}
            onNavToggle={() => setIsNavOpen(!isNavOpen)}
          />

          <Home onNavClick={handleNavClick} onImageClick={() => setIsModalOpen(true)} />
          <div className="section-divider my-10" />
          <div className="section-reveal"><About /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><Education /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><Skills /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><Experience /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><EventCoordination /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><IEEELeadership /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><InductionProgram /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><AlgoScape /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><Projects /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><ProjectVideos /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><Timeline /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><Certifications /></div>
          <div className="section-divider my-10" />
          <div className="section-reveal"><Contact /></div>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default App;