import React from 'react';

const ProjectVideos = () => {
  return (
    <section id="project-videos" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">Project Demonstrations</h3>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* AI Assistant Video */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200">AI Voice Assistant</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Python • Speech Recognition • NLP</p>
                </div>
              </div>
              
              <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
                <video 
                  controls 
                  className="w-full h-64 object-cover"
                  poster="/ai-assistant-poster.jpg"
                  onError={(e) => {
                    console.log('AI Assistant video failed to load:', e.target.src);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                >
                  <source src="/ai-assistant-demo.mp4" type="video/mp4" />
                  <source src="/ai-assistant-demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <div style={{display: 'none'}} className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <p className="text-lg font-medium">AI Assistant Video</p>
                    <p className="text-sm text-gray-400">Video not available</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Watch the AI Assistant in action, demonstrating speech recognition, 
                  natural language processing, and automated task execution.
                </p>
                <div className="flex items-center space-x-4 text-xs text-blue-600 dark:text-blue-400">
                  <span>🎤 Voice Commands</span>
                  <span>🤖 Task Automation</span>
                  <span>💬 Natural Language</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sign Language Detection Video */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-200">Sign Language Detection</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">YOLO • Computer Vision • OpenCV</p>
                </div>
              </div>
              
              <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
                <video 
                  controls 
                  className="w-full h-64 object-cover"
                  poster="/sign-language-poster.jpg"
                  onError={(e) => {
                    console.log('Sign Language video failed to load:', e.target.src);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                >
                  <source src="/sign-language-demo.mp4" type="video/mp4" />
                  <source src="/sign-language-demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <div style={{display: 'none'}} className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <p className="text-lg font-medium">Sign Language Detection Video</p>
                    <p className="text-sm text-gray-400">Video not available</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Experience real-time sign language recognition using YOLO, 
                  showcasing computer vision and machine learning capabilities.
                </p>
                <div className="flex items-center space-x-4 text-xs text-green-600 dark:text-green-400">
                  <span>👋 Real-time Detection</span>
                  <span>🎯 YOLO Model</span>
                  <span>📹 Computer Vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default ProjectVideos;


