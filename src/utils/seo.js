/**
 * SEO Configuration for Md Meraj Ansari Portfolio
 * 
 * This file contains SEO constants and utilities for the portfolio website
 * Based on user profile: B.Tech AI/ML (2024), IEEE IAS Chair (2025)
 */

export const SEO_CONFIG = {
  // Primary SEO Information
  siteName: 'Md Meraj Ansari Portfolio',
  siteUrl: 'https://mdmerajansari.dev',
  author: 'Md Meraj Ansari',
  
  // Default meta information
  defaultTitle: 'Md Meraj Ansari - AI/ML Developer & IEEE IAS Chair | Portfolio',
  defaultDescription: 'B.Tech AI/ML student (2024), IEEE IAS Society Chair (2025), Python & Data Science expert. Specializing in machine learning, computer vision, and cloud computing.',
  
  // Keywords for better search visibility
  keywords: [
    'Md Meraj Ansari',
    'AI ML developer',
    'machine learning',
    'Python developer',
    'IEEE IAS Chair',
    'computer vision',
    'data science',
    'B.Tech AIML',
    'artificial intelligence',
    'Google Cloud certified',
    'React portfolio',
    'NumPy Pandas',
    'OpenCV',
    'face recognition',
    'speech to text',
    'IEEE Industry Applications Society'
  ],
  
  // Social media handles
  social: {
    twitter: '@mdmerajansari',
    linkedin: 'https://linkedin.com/in/mdmerajansari',
    github: 'https://github.com/mdmerajansari'
  },
  
  // Open Graph images
  ogImage: '/og-image.svg',
  profileImage: '/profile-picture.jpg',
  
  // Structured data for rich snippets
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Md Meraj Ansari',
    jobTitle: 'AI/ML Developer & IEEE IAS Society Chair',
    description: 'B.Tech AI/ML student specializing in machine learning, computer vision, and cloud computing',
    skills: [
      'Artificial Intelligence',
      'Machine Learning', 
      'Python Programming',
      'Data Science',
      'Computer Vision',
      'Cloud Computing',
      'React Development',
      'OpenCV',
      'NumPy',
      'Pandas'
    ],
    education: 'Bachelor of Technology in Artificial Intelligence and Machine Learning (2024)',
    memberOf: 'IEEE Industry Applications Society Chair (2025)'
  }
};

// Page-specific SEO data
export const PAGE_SEO = {
  home: {
    title: 'Md Meraj Ansari - AI/ML Developer & IEEE IAS Chair | Portfolio',
    description: 'Welcome to my portfolio. B.Tech AI/ML student, IEEE IAS Society Chair, and Python developer specializing in machine learning and computer vision.',
    keywords: ['portfolio', 'AI developer', 'machine learning portfolio', 'IEEE IAS']
  },
  about: {
    title: 'About - Md Meraj Ansari | AI/ML Developer & IEEE IAS Chair',
    description: 'Learn about my journey as a B.Tech AI/ML student (2024) and IEEE IAS Society Chair (2025). Passionate about artificial intelligence and machine learning.',
    keywords: ['about', 'B.Tech AIML', 'IEEE IAS Chair', 'AI ML student']
  },
  education: {
    title: 'Education - Md Meraj Ansari | B.Tech in AI/ML (2024)',
    description: 'My educational background including B.Tech in Artificial Intelligence and Machine Learning started in 2024.',
    keywords: ['education', 'B.Tech AIML', 'artificial intelligence degree', 'machine learning education']
  },
  skills: {
    title: 'Skills - Md Meraj Ansari | Python, AI/ML, Computer Vision',
    description: 'Technical skills in Python, machine learning, data science, computer vision with OpenCV, and cloud computing expertise.',
    keywords: ['Python skills', 'machine learning skills', 'computer vision', 'data science', 'OpenCV']
  },
  projects: {
    title: 'Projects - Md Meraj Ansari | AI/ML & Computer Vision Projects',
    description: 'Explore my projects including face recognition systems, speech-to-text applications, and machine learning implementations.',
    keywords: ['AI projects', 'machine learning projects', 'face recognition', 'speech to text', 'Python projects']
  },
  experience: {
    title: 'Experience - Md Meraj Ansari | IEEE Leadership & Technical Projects',
    description: 'Professional experience including IEEE IAS Society Chair position and technical project development.',
    keywords: ['IEEE experience', 'leadership experience', 'technical experience', 'project management']
  },
  timeline: {
    title: 'Timeline - Md Meraj Ansari | Journey from 2024 to 2025',
    description: 'My professional journey timeline from starting B.Tech in AI/ML (2024) to becoming IEEE IAS Society Chair (2025).',
    keywords: ['career timeline', 'professional journey', 'IEEE IAS Chair', 'B.Tech AIML timeline']
  },
  certifications: {
    title: 'Certifications - Md Meraj Ansari | Google Cloud & Technical Certifications',
    description: 'View my certifications including Google Cloud certification (2024) and other technical achievements.',
    keywords: ['Google Cloud certification', 'technical certifications', 'cloud computing certification']
  },
  contact: {
    title: 'Contact - Md Meraj Ansari | Get in Touch',
    description: 'Contact me for AI/ML projects, IEEE collaborations, or professional opportunities.',
    keywords: ['contact', 'hire AI developer', 'IEEE collaboration', 'machine learning consultation']
  }
};

// Utility function to generate page-specific meta tags
export const generatePageMeta = (pageKey) => {
  const pageData = PAGE_SEO[pageKey] || PAGE_SEO.home;
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: [...SEO_CONFIG.keywords, ...pageData.keywords].join(', '),
    canonical: `${SEO_CONFIG.siteUrl}${pageKey === 'home' ? '' : `#${pageKey}`}`
  };
};