import React from 'react';

const SkillsProgress = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "C", level: 85, color: "from-green-500 to-green-600" },
        { name: "R", level: 80, color: "from-purple-500 to-purple-600" },
        { name: "Java", level: 70, color: "from-orange-500 to-orange-600" },
        { name: "HTML & CSS", level: 75, color: "from-pink-500 to-pink-600" },
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "NumPy & Pandas", level: 85, color: "from-cyan-500 to-cyan-600" },
        { name: "Matplotlib & Seaborn", level: 80, color: "from-indigo-500 to-indigo-600" },
        { name: "OpenCV", level: 80, color: "from-red-500 to-red-600" },
        { name: "FastAPI", level: 75, color: "from-yellow-500 to-yellow-600" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Google Cloud", level: 80, color: "from-emerald-500 to-emerald-600" },
        { name: "IoT Development", level: 75, color: "from-violet-500 to-violet-600" },
        { name: "Blockchain (Algorand)", level: 70, color: "from-rose-500 to-rose-600" },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-300/50 dark:border-gray-700/50 shadow-lg transition-all hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30">
          <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            {category.title}
          </h4>
          <div className="grid gap-4">
            {category.skills.map((skill, skillIndex) => (
              <div 
                key={`${categoryIndex}-${skillIndex}`} 
                className="group"
                style={{
                  animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 150}ms`
                }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} transform origin-left transition-all duration-1000 ease-out group-hover:brightness-110`}
                    style={{ 
                      width: `${skill.level}%`,
                      transform: 'scaleX(0)',
                      animation: 'growBar 1.5s ease-out forwards'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;