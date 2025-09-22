import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const countVisitor = () => {
      // Get current count from localStorage
      const currentCount = parseInt(localStorage.getItem('visitorCount') || '0');
      
      // Check if this is a new session
      const lastVisit = localStorage.getItem('lastVisit');
      const now = new Date().toDateString();
      
      if (lastVisit !== now) {
        // Increment count for new session
        const newCount = currentCount + 1;
        localStorage.setItem('visitorCount', newCount.toString());
        localStorage.setItem('lastVisit', now);
        setVisitorCount(newCount);
      } else {
        // Use existing count for same session
        setVisitorCount(currentCount);
      }
      
      setLoading(false);
    };

    countVisitor();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-full px-4 py-2 border border-gray-300/50 dark:border-gray-700/50 shadow-lg">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span className="font-semibold dark:text-white">
          {visitorCount.toLocaleString()} visitor{visitorCount !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
};

export default VisitorCounter;