import React from 'react';
import SkillsProgress from './SkillsProgress';

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      color: "orange",
      skills: ['Python', 'C', 'R', 'Java', 'HTML & CSS']
    },
    {
      title: "Libraries & Frameworks",
      color: "teal",
      skills: ['NumPy', 'Pandas', 'Matplotlib & Seaborn', 'OpenCV', 'FastAPI']
    },
    {
      title: "Tools & Platforms",
      color: "purple",
      skills: ['Google Cloud', 'IoT Development', 'Blockchain (Algorand)']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/30 dark:border-gray-700/30 shadow-xl">
        <h3 className="text-3xl font-bold mb-12 text-center dark:text-white">Technical Skills</h3>
        <div className="max-w-6xl mx-auto">
          <SkillsProgress />
        </div>
      </div>
    </section>
  );
};

export default Skills;

