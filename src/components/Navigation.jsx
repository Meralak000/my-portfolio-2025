import React, { useState, useEffect } from 'react';
import BearThemeToggle from './BearThemeToggle';

const Navigation = ({ activeSection, theme, isNavOpen, onNavClick, onThemeToggle, onNavToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = ['Skills', 'Experience', 'Event Coordination', 'IEEE Leadership', 'Induction Program', 'AlgoScape', 'Projects', 'Timeline', 'Contact'];

  return (
    <>
      {/* Fixed Name Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button 
            onClick={() => onNavClick('home')} 
            className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Md Meraj Ansari
          </button>
        </div>
      </div>

      {/* Scrollable Navigation Menu */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'translate-y-16 opacity-100' 
          : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-700/30 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 flex justify-center">
                <div className="hidden lg:flex space-x-6 items-center">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => onNavClick(item.toLowerCase().replace(' ', '-'))}
                      className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                        activeSection === item.toLowerCase().replace(' ', '-') 
                          ? 'text-white bg-purple-600 shadow-lg' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="lg:hidden flex items-center">
                <button onClick={onNavToggle} className="z-50 p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                  </svg>
                </button>
              </div>
              
              <div className="flex-shrink-0">
                <BearThemeToggle theme={theme} onThemeToggle={onThemeToggle} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Original Navigation for larger screens when not scrolled */}
      <nav className={`transition-all duration-500 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } mb-16 mt-20`}>
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6">
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onNavClick(item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    activeSection === item.toLowerCase().replace(' ', '-') 
                      ? 'text-white bg-purple-600 shadow-lg' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-white hover:bg-purple-600/90 dark:hover:text-white dark:hover:bg-purple-600/90'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={onNavToggle} className="z-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
          <div className="flex-shrink-0">
            <BearThemeToggle theme={theme} onThemeToggle={onThemeToggle} />
          </div>
        </div>
      </nav>
      
      <div className={`fixed top-0 left-0 h-full w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-40 transform ${
        isNavOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavClick(item.toLowerCase().replace(' ', '-'), true)}
              className="text-2xl font-bold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {item}
            </button>
          ))}
          <a 
            href="./meraj-resum.pdf" 
            download="MD_Meraj_Ansari_Resume.pdf" 
            className="text-xl font-medium text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 px-4 py-2 rounded-md hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;

