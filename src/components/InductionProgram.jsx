import React from 'react';

const InductionProgram = () => {
  return (
    <section id="induction-program" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">College Induction & Achievements</h3>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-green-700 dark:text-green-300">First Induction Program</h4>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Participated in the inaugural induction program of our college, marking the beginning of our academic journey 
              at Symbiosis Institute of Technology, Hyderabad. This program introduced us to the college culture, 
              academic expectations, and provided opportunities for team building and collaboration.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">College Orientation & Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Team Building Activities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Academic & Cultural Introduction</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Peer Networking & Collaboration</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h5 className="text-lg font-semibold text-green-800 dark:text-green-200">Futsal Championship Victory</h5>
              </div>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Our team secured the <strong>first prize in futsal</strong> during the induction program, 
                demonstrating excellent teamwork, strategic thinking, and competitive spirit. This achievement 
                showcased our ability to work together effectively under pressure and highlighted our commitment 
                to both academic and extracurricular excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img 
                    src="/WhatsApp Image 2025-09-22 at 02.46.34_c6a3c2d9.jpg" 
                    alt="Futsal Championship - First Prize Winners"
                    className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      console.log('Futsal winning image 1 failed to load:', e.target.src);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                      modal.onclick = () => document.body.removeChild(modal);
                      
                      const img = document.createElement('img');
                      img.src = '/WhatsApp Image 2025-09-22 at 02.46.34_c6a3c2d9.jpg';
                      img.className = 'max-h-[90vh] max-w-[90vw] object-contain';
                      img.alt = 'Futsal Championship - First Prize Winners';
                      
                      modal.appendChild(img);
                      document.body.appendChild(modal);
                    }}
                  />
                  <div style={{display: 'none'}} className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400 text-xs">Futsal Victory Image 1</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-xs p-2">Click to view</p>
                  </div>
                </div>
                
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img 
                    src="/WhatsApp Image 2025-09-22 at 02.46.36_d59b6f59.jpg" 
                    alt="Futsal Championship - Team Celebration"
                    className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      console.log('Futsal winning image 2 failed to load:', e.target.src);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                      modal.onclick = () => document.body.removeChild(modal);
                      
                      const img = document.createElement('img');
                      img.src = '/WhatsApp Image 2025-09-22 at 02.46.36_d59b6f59.jpg';
                      img.className = 'max-h-[90vh] max-w-[90vw] object-contain';
                      img.alt = 'Futsal Championship - Team Celebration';
                      
                      modal.appendChild(img);
                      document.body.appendChild(modal);
                    }}
                  />
                  <div style={{display: 'none'}} className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400 text-xs">Futsal Victory Image 2</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-xs p-2">Click to view</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">🏆 First Prize Winners</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">⚽</span>
                  </div>
                  <span className="text-sm text-green-700 dark:text-green-300">Futsal Championship</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Symbiosis Institute of Technology, Hyderabad | Induction Program
              </span>
            </div>
          </div>
          
          <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 shadow-lg">
                <img 
                  src="/WhatsApp Image 2025-09-22 at 02.46.34_c6a3c2d9.jpg" 
                  alt="Futsal Championship Winners - First Prize Team"
                  className="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onError={(e) => {
                    console.log('Futsal championship image failed to load:', e.target.src);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                  onClick={() => {
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                    modal.onclick = () => document.body.removeChild(modal);
                    
                    const img = document.createElement('img');
                    img.src = '/WhatsApp Image 2025-09-22 at 02.46.34_c6a3c2d9.jpg';
                    img.className = 'max-h-[90vh] max-w-[90vw] object-contain';
                    img.alt = 'Futsal Championship Winners - First Prize Team';
                    
                    modal.appendChild(img);
                    document.body.appendChild(modal);
                  }}
                />
                <div style={{display: 'none'}} className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Futsal Champions</p>
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  🏆 Futsal Champions
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

export default InductionProgram;
