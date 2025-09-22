import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Chair, IEEE Industry Applications Society (IAS)",
      organization: "Symbiosis Institute of Technology, Hyderabad Student Branch",
      icon: "lightning",
      color: "amber",
      points: [
        "Lead the student branch chapter, organizing technical events, workshops, and seminars.",
        "Promote student membership and engagement in IEEE activities."
      ]
    },
    {
      title: "Co-Lead, Algorand Blockchain Club",
      organization: "Symbiosis Institute of Technology, Hyderabad",
      icon: "lock",
      color: "cyan",
      points: [
        "Co-led the student-run blockchain club, fostering a learning environment.",
        "Conducted technical workshops on Algorand Blockchain."
      ]
    },
    {
      title: "Event Coordinator, ANVESHAN",
      organization: "Symbiosis Institute of Technology, Hyderabad",
      icon: "calendar",
      color: "rose",
      points: [
        "Managed coordination for ANVESHAN, the flagship event of the institute.",
        "Demonstrated strong organizational and teamwork skills."
      ]
    }
  ];

  const getIcon = (iconType) => {
    const icons = {
      lightning: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      lock: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      ),
      calendar: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      )
    };
    return icons[iconType] || icons.lightning;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      amber: {
        gradient: 'from-yellow-500 to-amber-500',
        text: 'text-amber-600 dark:text-amber-300 group-hover:text-amber-700 dark:group-hover:text-amber-200',
        dot: 'bg-amber-400 group-hover:bg-amber-500 dark:group-hover:bg-amber-300'
      },
      cyan: {
        gradient: 'from-emerald-500 to-cyan-500',
        text: 'text-cyan-600 dark:text-cyan-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-200',
        dot: 'bg-cyan-400 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-300'
      },
      rose: {
        gradient: 'from-pink-500 to-rose-500',
        text: 'text-rose-600 dark:text-rose-300 group-hover:text-rose-700 dark:group-hover:text-rose-200',
        dot: 'bg-rose-400 group-hover:bg-rose-500 dark:group-hover:bg-rose-300'
      }
    };
    return colorMap[color] || colorMap.amber;
  };

  return (
    <section id="experience" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">Experience & Leadership</h3>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => {
          const colors = getColorClasses(exp.color);
          return (
            <div key={index} className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-300/50 dark:border-gray-700/50 shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 transition-all hover:scale-[1.02] group">
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${colors.gradient} p-2 rounded-lg mr-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {getIcon(exp.icon)}
                  </svg>
                </div>
                <div>
                  <h4 className={`text-xl font-semibold ${colors.text} transition-colors`}>
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{exp.organization}</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 mr-3 transition-colors`}></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

