import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">Education</h3>
      <div className="max-w-3xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-300/50 dark:border-gray-700/50 shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 transition-all hover:scale-[1.02]">
        <div className="flex items-start mb-6">
          <div className="bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-500/30 dark:to-pink-500/30 p-3 rounded-lg mr-4 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5m9-5v6" />
            </svg>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-1">Bachelor of Technology (B.Tech)</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Symbiosis Institute of Technology, Hyderabad</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2024 – Present | Currently in the second year of undergraduate studies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

