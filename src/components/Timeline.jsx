import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  const timelineData = [
    {
      id: 1,
      year: '2024',
      title: 'Started B.Tech in AIML Journey',
      category: 'Education',
      description: 'Began pursuing Bachelor of Technology (B.Tech) in Artificial Intelligence and Machine Learning, diving deep into cutting-edge AI technologies.',
      icon: 'academic',
      color: 'purple',
      achievements: ['B.Tech in AI & Machine Learning', 'Advanced programming concepts', 'AI/ML fundamentals']
    },
    {
      id: 2,
      year: '2024',
      title: 'Python Mastery & Data Science Exploration',
      category: 'Skills',
      description: 'Developed expertise in Python programming and discovered the fascinating world of data science and machine learning.',
      icon: 'code',
      color: 'blue',
      achievements: ['Python proficiency', 'NumPy & Pandas mastery', 'First data analysis projects']
    },
    {
      id: 3,
      year: '2024',
      title: 'IEEE Student Membership',
      category: 'Leadership',
      description: 'Joined IEEE as a student member, beginning journey in technical leadership and community building.',
      icon: 'team',
      color: 'cyan',
      achievements: ['IEEE Student Member', 'Technical community involvement']
    },
    {
      id: 4,
      year: '2024',
      title: 'Google Cloud Certification',
      category: 'Certification',
      description: 'Achieved Google Cloud certification, demonstrating proficiency in cloud computing and modern infrastructure.',
      icon: 'cloud',
      color: 'rose',
      achievements: ['Google Cloud certified', 'Cloud architecture knowledge', 'Scalable solutions']
    },
    {
      id: 5,
      year: '2024',
      title: 'Machine Learning Breakthrough',
      category: 'Skills',
      description: 'Completed comprehensive machine learning projects and developed expertise in computer vision with OpenCV.',
      icon: 'ai',
      color: 'green',
      achievements: ['ML project portfolio', 'OpenCV mastery', 'Computer vision applications']
    },
    {
      id: 6,
      year: '2024',
      title: 'Advanced Project Development',
      category: 'Projects',
      description: 'Built sophisticated projects including face recognition systems, speech-to-text applications, and web development.',
      icon: 'project',
      color: 'indigo',
      achievements: ['Face recognition system', 'Speech-to-text application', 'Full-stack development']
    },
    {
      id: 7,
      year: '2025',
      title: 'IEEE IAS Society Chair',
      category: 'Leadership',
      description: 'Elevated to Chair of IEEE IAS (Industry Applications Society), leading initiatives and organizing technical events for 200+ students.',
      icon: 'leadership',
      color: 'amber',
      achievements: ['IEEE IAS Society Chair', 'Event management', 'Team leadership skills']
    },
    {
      id: 8,
      year: '2025',
      title: 'Professional Portfolio',
      category: 'Achievement',
      description: 'Created this comprehensive portfolio showcasing technical skills, leadership experience, and project accomplishments.',
      icon: 'portfolio',
      color: 'emerald',
      achievements: ['React expertise', 'Modern web development', 'Professional presentation']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.dataset.id);
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, id]));
          } else {
            // Remove item from visible set when it goes out of view
            setVisibleItems(prev => {
              const newSet = new Set(prev);
              newSet.delete(id);
              return newSet;
            });
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const getIcon = (iconType) => {
    const icons = {
      academic: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      ),
      code: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      ),
      team: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
      leadership: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      ),
      ai: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
      cloud: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      ),
      project: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      ),
      portfolio: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
      )
    };
    return icons[iconType] || icons.academic;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      purple: {
        bgLight: 'from-purple-600 to-purple-700',
        bgDark: 'dark:from-purple-500/30 dark:to-purple-600/30',
        text: 'text-white dark:text-purple-300',
        icon: 'text-purple-300',
        border: 'border-purple-500',
        dot: 'bg-purple-500'
      },
      blue: {
        bgLight: 'from-blue-600 to-blue-700',
        bgDark: 'dark:from-blue-500/30 dark:to-blue-600/30',
        text: 'text-white dark:text-blue-300',
        icon: 'text-blue-300',
        border: 'border-blue-500',
        dot: 'bg-blue-500'
      },
      cyan: {
        bgLight: 'from-cyan-600 to-cyan-700',
        bgDark: 'dark:from-cyan-500/30 dark:to-cyan-600/30',
        text: 'text-white dark:text-cyan-300',
        icon: 'text-cyan-300',
        border: 'border-cyan-500',
        dot: 'bg-cyan-500'
      },
      amber: {
        bgLight: 'from-amber-600 to-amber-700',
        bgDark: 'dark:from-amber-500/30 dark:to-amber-600/30',
        text: 'text-white dark:text-amber-300',
        icon: 'text-amber-300',
        border: 'border-amber-500',
        dot: 'bg-amber-500'
      },
      green: {
        bgLight: 'from-green-600 to-green-700',
        bgDark: 'dark:from-green-500/30 dark:to-green-600/30',
        text: 'text-white dark:text-green-300',
        icon: 'text-green-300',
        border: 'border-green-500',
        dot: 'bg-green-500'
      },
      rose: {
        bgLight: 'from-rose-600 to-rose-700',
        bgDark: 'dark:from-rose-500/30 dark:to-rose-600/30',
        text: 'text-white dark:text-rose-300',
        icon: 'text-rose-300',
        border: 'border-rose-500',
        dot: 'bg-rose-500'
      },
      indigo: {
        bgLight: 'from-indigo-600 to-indigo-700',
        bgDark: 'dark:from-indigo-500/30 dark:to-indigo-600/30',
        text: 'text-white dark:text-indigo-300',
        icon: 'text-indigo-300',
        border: 'border-indigo-500',
        dot: 'bg-indigo-500'
      },
      emerald: {
        bgLight: 'from-emerald-600 to-emerald-700',
        bgDark: 'dark:from-emerald-500/30 dark:to-emerald-600/30',
        text: 'text-white dark:text-emerald-300',
        icon: 'text-emerald-300',
        border: 'border-emerald-500',
        dot: 'bg-emerald-500'
      }
    };
    return colorMap[color] || colorMap.purple;
  };

  return (
    <section id="timeline" className="py-20 relative">
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/30 dark:border-gray-700/30 shadow-xl">
        <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Learning Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A visual timeline showcasing my educational milestones, skill development, and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] md:w-[3px] h-full rounded-full opacity-100 dark:opacity-90 timeline-line z-0"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const colors = getColorClasses(item.color);
              const isVisible = visibleItems.has(item.id);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  data-id={item.id}
                  className={`timeline-item relative flex items-center ${
                    isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                  } ${
                    isVisible 
                      ? 'opacity-100 translate-x-0 translate-y-0' 
                      : `opacity-0 ${
                          isLeft 
                            ? 'translate-x-16 md:translate-x-16 md:translate-y-0' 
                            : 'translate-x-16 md:-translate-x-16 md:translate-y-0'
                        } translate-y-8`
                  } transition-all duration-700 ease-out delay-200`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.text} bg-gradient-to-r ${colors.bgLight} ${colors.bgDark}`}>
                          {item.category}
                        </span>
                        <span className="text-2xl font-bold text-gray-400 dark:text-gray-500">
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 dark:text-white">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <div className={`w-2 h-2 rounded-full ${colors.dot} mr-3 opacity-60`}></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-transparent backdrop-blur-sm shadow-[0_0_12px_rgba(0,0,0,0.25)] flex items-center justify-center border-2 md:border-4 border-white/30 dark:border-gray-700 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    } transition-transform duration-500 delay-500`}>
                      <span className="absolute inset-2 rounded-full bg-white/80 dark:bg-gray-900/80"></span>
                      <svg
                        className={`relative z-10 w-7 h-7 md:w-8 md:h-8 ${colors.icon} drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {getIcon(item.icon)}
                      </svg>
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-300/30 dark:border-purple-700/30">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Future Aspirations
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Continuing the journey with exciting goals ahead
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center p-4 bg-white/30 dark:bg-gray-800/30 rounded-xl">
                <span className="text-sm font-medium dark:text-white">Advanced AI/ML Specialization</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white/30 dark:bg-gray-800/30 rounded-xl">
                <span className="text-sm font-medium dark:text-white">Industry Leadership Role</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white/30 dark:bg-gray-800/30 rounded-xl">
                <span className="text-sm font-medium dark:text-white">Open Source Contributions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Timeline;