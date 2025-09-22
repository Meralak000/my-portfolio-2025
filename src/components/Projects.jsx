import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Obstacle-Avoiding Robot Car",
      description: "This project showcases skills in hardware integration and real-time programming by creating an autonomous vehicle that uses ultrasonic sensors to intelligently navigate its environment.",
      technologies: ["Arduino", "C++", "Robotics"],
      repoLink: "https://github.com/Meralak000/Arduino-Obstacle-Avoiding-Robot-Car-4WD",
      liveLink: "#",
    },
    {
      title: "AI Voice Assistant",
      description: "Built to explore natural language processing, this assistant demonstrates the ability to integrate multiple Python libraries for speech recognition and task automation.",
      technologies: ["Python", "Speech Recognition"],
      repoLink: "https://github.com/Meralak000/Ai-Assistant-using-python",
      liveLink: "#",
    },
    {
      title: "Sign Language Detection",
      description: "Real-time Sign Language Recognition using YOLO with dataset prep, training pipeline, and inference scripts. Features end-to-end pipeline for data collection, labeling, training, validation, and deployment.",
      technologies: ["Python", "YOLO", "Computer Vision", "OpenCV"],
      repoLink: "https://github.com/Meralak000/sign-language-detection-",
      liveLink: "#",
    },
    {
      title: "Speech-to-Text System",
      description: "Real-time Speech-to-Text system for accurate, low-latency transcription with optional streaming and offline Whisper support. Features microphone to markdown transcription in seconds.",
      technologies: ["Python", "Whisper", "Speech Recognition", "Real-time"],
      repoLink: "https://github.com/Meralak000/Speech-to-text-using-Python",
      liveLink: "#",
    },
    {
      title: "Personal Portfolio Website",
      description: "The very site you're on, this portfolio was built from scratch to demonstrate proficiency in modern frontend development, including React and responsive design with Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      repoLink: "https://github.com/Meralak000/my-porfolio",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">My Projects</h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 transition-all hover:scale-[1.02] flex flex-col">
            <h4 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-300">{project.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
            <div className="mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">{tech}</span>
              ))}
            </div>
            <div className="mt-auto flex justify-between items-center">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                Live Demo
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                View Code &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

