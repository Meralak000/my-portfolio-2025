import React from 'react';

const IEEELeadership = () => {
  return (
    <section id="ieee-leadership" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">IEEE Leadership & Engagement</h3>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">IEEE</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  IEEE IAS Student Branch Chair
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Symbiosis Institute of Technology, Hyderabad
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Serving as the Chair of the IEEE Industry Applications Society Student Branch Chapter at SIT Hyderabad. 
              Leading initiatives in industry applications, organizing technical events, and fostering innovation 
              among students in electrical and electronics engineering.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Student Leadership & Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Technical Event Organization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Industry Applications Focus</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">IEEE Community Building</span>
              </div>
            </div>
            
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">IEEE</span>
                  </div>
                  <h6 className="font-semibold text-blue-800 dark:text-blue-200">Conference Attendance</h6>
                </div>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
                  Attended IEEE ICASP 2025 - International Conference on Acoustics, Speech and Signal Processing, 
                  demonstrating commitment to staying current with cutting-edge research and industry developments.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                    <img 
                      src="/WhatsApp Image 2025-09-22 at 02.43.35_18b717ce.jpg" 
                      alt="IEEE ICASP 2025 Conference - Md Meraj Ansari"
                      className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                      onError={(e) => {
                        console.log('IEEE ICASP image 1 failed to load:', e.target.src);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                      onClick={() => {
                        const modal = document.createElement('div');
                        modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                        modal.onclick = () => document.body.removeChild(modal);
                        
                        const img = document.createElement('img');
                        img.src = '/WhatsApp Image 2025-09-22 at 02.43.35_18b717ce.jpg';
                        img.className = 'max-h-[90vh] max-w-[90vw] object-contain';
                        img.alt = 'IEEE ICASP 2025 Conference - Md Meraj Ansari';
                        
                        modal.appendChild(img);
                        document.body.appendChild(modal);
                      }}
                    />
                    <div style={{display: 'none'}} className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400 text-xs">IEEE ICASP 2025 Image 1</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white text-xs p-2">Click to view</p>
                    </div>
                  </div>
                  
                  <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                    <img 
                      src="/WhatsApp Image 2025-09-22 at 02.43.35_d19e04e7.jpg" 
                      alt="IEEE ICASP 2025 Conference - Md Meraj Ansari"
                      className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                      onError={(e) => {
                        console.log('IEEE ICASP image 2 failed to load:', e.target.src);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                      onClick={() => {
                        const modal = document.createElement('div');
                        modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                        modal.onclick = () => document.body.removeChild(modal);
                        
                        const img = document.createElement('img');
                        img.src = '/WhatsApp Image 2025-09-22 at 02.43.35_d19e04e7.jpg';
                        img.className = 'max-h-[90vh] max-w-[90vw] object-contain';
                        img.alt = 'IEEE ICASP 2025 Conference - Md Meraj Ansari';
                        
                        modal.appendChild(img);
                        document.body.appendChild(modal);
                      }}
                    />
                    <div style={{display: 'none'}} className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400 text-xs">IEEE ICASP 2025 Image 2</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white text-xs p-2">Click to view</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 text-center">
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">IEEE ICASP 2025 Conference</span>
                </div>
              </div>
            
            <div className="pt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                IEEE Industry Applications Society | SIT Hyderabad
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-6 shadow-lg group cursor-pointer overflow-hidden">
              <img 
                src="/ieee-ias-poster.jpg" 
                alt="IEEE IAS Student Branch Chapter - Md Meraj Ansari as Chair"
                className="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-102"
                onError={(e) => {
                  console.log('IEEE poster image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
                onClick={() => {
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                  modal.onclick = () => document.body.removeChild(modal);
                  
                  const img = document.createElement('img');
                  img.src = '/ieee-ias-poster.jpg';
                  img.className = 'max-h-[90vh] max-w-[90vw] object-contain';
                  img.alt = 'IEEE IAS Student Branch Chapter - Md Meraj Ansari as Chair';
                  
                  modal.appendChild(img);
                  document.body.appendChild(modal);
                }}
              />
              <div style={{display: 'none'}} className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">IEEE Poster Image</p>
              </div>
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                IEEE Chair
              </div>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to enlarge
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IEEELeadership;
