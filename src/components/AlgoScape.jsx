import React, { useState } from 'react';
import ImageModal from './ImageModal';

const AlgoScape = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const openModal = (src, alt) => {
    setModalSrc(src);
    setModalAlt(alt || 'Image');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalSrc('');
    setModalAlt('');
  };
  return (
    <>
    <section id="algoscape" className="py-20">
      <h3 className="text-3xl font-bold mb-12 text-center">AlgoScape Event Participation</h3>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Blockchain Gaming Event</h4>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              As the Head of the Algorand Club, I organized and led AlgoScape, an innovative blockchain event 
              inspired by Squid Game that combined competitive gaming elements with cutting-edge decentralized technology. 
              This creative event showcased smart contracts, Web3 applications, and blockchain technology through 
              engaging challenges, demonstrating my leadership and innovative approach to tech education and community building.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Squid Game-Inspired Event Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Competitive Gaming & Blockchain Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Creative Tech Education & Engagement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Innovative Community Building</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h5 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Event Highlights</h5>
              </div>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Successfully organized and led AlgoScape, a Squid Game-inspired blockchain event that provided 
                participants with hands-on experience in Algorand's cutting-edge technology, smart contracts, 
                DeFi, and Web3 applications through competitive and engaging challenges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img 
                    src="/algoscape-event-1.jpg" 
                    alt="AlgoScape Event - Md Meraj Ansari Participation"
                    className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      console.log('AlgoScape image 1 failed to load:', e.target.src);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                    onClick={() => openModal('/algoscape-event-1.jpg', 'AlgoScape Event - Md Meraj Ansari Participation')}
                  />
                  <div style={{display: 'none'}} className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400 text-xs">AlgoScape Event Image 1</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-xs p-2">Click to view</p>
                  </div>
                </div>
                
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img 
                    src="/algoscape-event-2.jpg" 
                    alt="AlgoScape Event - Group Photo"
                    className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      console.log('AlgoScape image 2 failed to load:', e.target.src);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                    onClick={() => openModal('/algoscape-event-2.jpg', 'AlgoScape Event - Group Photo')}
                  />
                  <div style={{display: 'none'}} className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400 text-xs">AlgoScape Event Image 2</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-xs p-2">Click to view</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">🎮 Squid Game-Inspired</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ALGO</span>
                  </div>
                  <span className="text-sm text-blue-700 dark:text-blue-300">Blockchain Gaming Event</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Algorand Blockchain Club | Symbiosis Institute of Technology, Hyderabad
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 shadow-lg">
              <img
                src="/algoscape-event-1.jpg"
                alt="AlgoScape Event - Md Meraj Ansari Participation"
                className="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onError={(e) => {
                  console.log('AlgoScape image 1 failed to load:', e.target.src);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
                onClick={() => openModal('/algoscape-event-1.jpg', 'AlgoScape Event - Md Meraj Ansari Participation')}
              />
              <div style={{display: 'none'}} className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">AlgoScape Event</p>
              </div>
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                🚀 AlgoScape
              </div>
              <div className="absolute bottom-8 left-8 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-xs font-medium">
                Click to view
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ImageModal isOpen={isModalOpen} onClose={closeModal} src={modalSrc} alt={modalAlt} />
    </>
  );
};

export default AlgoScape;
