import React from 'react';

const Certifications = () => {
  const certifications = [
    { 
      title: "Machine Learning Certification", 
      issuer: "Codesoft", 
      details: "Completed an intensive internship focused on Machine Learning principles and applications.", 
      date: "August 2025" 
    },
    { 
      title: "Python Coding Certification", 
      issuer: "Internpe", 
      details: "Successfully finished a Python programming internship, demonstrating proficiency in core concepts.", 
      date: "July 2025" 
    },
    { 
      title: "Google Cloud Skill Boost Badges", 
      issuer: "Google Cloud", 
      details: [
        "Arcade Base Camp (May & April 2025)", 
        "Arcade Trivia (April 2025, Week 1 & 2)", 
        "Arcade Certification Zone (April 2025)"
      ], 
      isList: true 
    },
    { 
      title: "Conference & Hackathon", 
      issuer: "Participation", 
      details: [
        "Attended IEEE ICASP2025 Conference", 
        "Participant in college-level Hackathon"
      ], 
      isList: true 
    }
  ];

  const certTextColors = [
    'text-cyan-500 dark:text-cyan-300', 
    'text-rose-500 dark:text-rose-300', 
    'text-amber-500 dark:text-amber-300', 
    'text-emerald-500 dark:text-emerald-300'
  ];

  return (
    <section id="certifications" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">Certifications & Accomplishments</h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white/50 dark:bg-gray-900/80 border border-gray-300/50 dark:border-gray-700/50">
                <h4 className={`text-lg font-semibold ${certTextColors[index % certTextColors.length]}`}>
                  {cert.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mt-2">{cert.issuer}</p>
              </div>
              <div className="flip-card-back bg-white/50 dark:bg-gray-900/80 border border-gray-300/50 dark:border-gray-700/50">
                {cert.isList ? (
                  <ul className="text-sm text-left space-y-1 text-gray-700 dark:text-gray-300">
                    {cert.details.map((item, i) => (
                      <li key={i}>- {item}</li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{cert.details}</p>
                    {cert.date && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">{cert.date}</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

