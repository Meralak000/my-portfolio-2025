import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label="Back to top"
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        bg-white/90 dark:bg-gray-800/90 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-md`}
      style={{ width: 48, height: 48 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto text-purple-600 dark:text-purple-400">
        <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default BackToTop;



