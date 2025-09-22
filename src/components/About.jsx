import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">About Me</h3>
      <div className="max-w-3xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-300/50 dark:border-gray-700/50 shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 transition-all hover:scale-[1.02]">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          A dedicated and innovative second-year B.Tech student at Symbiosis Institute of Technology with a strong foundation in programming and a passion for leveraging technology for societal benefit. Proven ability to lead and collaborate through roles in student clubs and event management. Eager to apply a problem-solving mindset and technical skills to real-world challenges in the tech industry.
        </p>
      </div>
    </section>
  );
};

export default About;

