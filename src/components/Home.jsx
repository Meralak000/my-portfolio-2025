import React from 'react';

const Home = ({ onNavClick, onImageClick }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center mb-20 pt-24">
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-3xl p-12 border border-gray-200/30 dark:border-gray-700/30 shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
        <button 
          onClick={onImageClick} 
          className="profile-image-container w-48 h-48 bg-gray-200 dark:bg-gray-800/50 border-4 border-purple-400 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300 overflow-hidden"
        >
          <img src="/profile-picture.jpg" alt="Md Meraj Ansari" className="w-full h-full object-cover"/>
        </button>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 dark:from-pink-400 dark:via-purple-500 dark:to-blue-400 animate-pulse">
          Innovator & Tech Enthusiast
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10">
          B.Tech Student at Symbiosis Institute of Technology | Aspiring Innovator Specialist
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={() => onNavClick('projects')} 
            className="glowy-btn px-8 py-3 rounded-lg font-medium"
          >
            <span>View My Work</span>
          </button>
          <a 
            href="./meraj-resum.pdf" 
            download="MD_Meraj_Ansari_Resume.pdf" 
            className="glowy-btn px-8 py-3 rounded-lg font-medium inline-block"
          >
            <span>Download Resume</span>
          </a>
          <button 
            onClick={() => onNavClick('contact')} 
            className="glowy-btn px-8 py-3 rounded-lg font-medium"
          >
            <span>Contact Me</span>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Home;

