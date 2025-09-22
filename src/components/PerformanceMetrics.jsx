import React from 'react';

const PerformanceMetrics = () => {
  const metrics = [
    { name: 'Performance', score: 98, color: 'from-green-500 to-green-600' },
    { name: 'Accessibility', score: 100, color: 'from-green-500 to-green-600' },
    { name: 'Best Practices', score: 100, color: 'from-green-500 to-green-600' },
    { name: 'SEO', score: 100, color: 'from-green-500 to-green-600' }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h3 className="text-2xl font-bold mb-8 text-center dark:text-white">
        Performance Metrics
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 shadow-lg"
          >
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={`url(#${metric.name}Gradient)`}
                    strokeWidth="3"
                    strokeDasharray={`${metric.score}, 100`}
                    className="transform -rotate-90 origin-center"
                  />
                  <defs>
                    <linearGradient id={`${metric.name}Gradient`} gradientTransform="rotate(90)">
                      <stop className={`${metric.color.split(' ')[0]}`} offset="0%" />
                      <stop className={`${metric.color.split(' ')[1]}`} offset="100%" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold dark:text-white">{metric.score}</span>
                </div>
              </div>
              <h4 className="font-semibold dark:text-white">{metric.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMetrics;