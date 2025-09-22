import React from 'react';

const EventCoordination = () => {
  return (
    <section id="event-coordination" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">Event Coordination & Achievements</h3>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              ANVESHAN 2025 - Event Coordinator
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Successfully coordinated ANVESHAN 2025, the annual technical fest of Symbiosis Institute of Technology, Hyderabad. 
              Led a team to organize a diverse range of events including treasure hunts, neon parties, esports competitions, 
              DJ nights, and many more engaging activities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Event Management & Team Leadership</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Strategic Planning & Execution</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Multi-Event Coordination</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Stakeholder Management</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h5 className="text-lg font-semibold text-blue-800 dark:text-blue-200">AI Agent Development</h5>
              </div>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Successfully built my first AI agent using Salesforce Agentforce platform, demonstrating proficiency in AI development and enterprise solutions.
              </p>
              
              <div className="mb-4 relative">
                <img 
                  src="/ai-agent-salesforce.jpg" 
                  alt="AI Agent Development - Salesforce Agentforce"
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onError={(e) => {
                    console.log('AI Agent image failed to load:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                  onClick={() => {
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                    modal.onclick = () => document.body.removeChild(modal);
                    
                    const img = document.createElement('img');
                    img.src = '/ai-agent-salesforce.jpg';
                    img.className = 'max-h-[90vh] max-w-[90vw] object-contain';
                    img.alt = 'AI Agent Development - Salesforce Agentforce';
                    
                    modal.appendChild(img);
                    document.body.appendChild(modal);
                  }}
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-xs font-medium">
                  Click to view
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Powered by:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SF</span>
                  </div>
                  <span className="text-sm text-blue-700 dark:text-blue-300">Salesforce Agentforce</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                March 8-9, 2025 | Symbiosis Institute of Technology, Hyderabad
              </span>
            </div>
          </div>
          
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 shadow-lg">
                <img 
                  src="/anveshan-2025-poster.jpg" 
                  alt="ANVESHAN 2025 Event Poster - Event Coordinated by Md Meraj Ansari"
                  className="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onError={(e) => {
                    console.log('ANVESHAN Image failed to load:', e.target.src);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                  onClick={() => {
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                    modal.onclick = () => document.body.removeChild(modal);
                    
                    const img = document.createElement('img');
                    img.src = '/anveshan-2025-poster.jpg';
                    img.className = 'max-h-[90vh] max-w-[90vw] object-contain';
                    img.alt = 'ANVESHAN 2025 Event Poster - Event Coordinated by Md Meraj Ansari';
                    
                    modal.appendChild(img);
                    document.body.appendChild(modal);
                  }}
                />
                <div style={{display: 'none'}} className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Image not found</p>
                </div>
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Event Coordinator
                </div>
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-xs font-medium">
                  Click to view
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default EventCoordination;
