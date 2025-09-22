import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Md Meraj Ansari',
    url: 'https://your-portfolio-url.com', // Replace with your actual URL
    image: '/path/to/your/profile-image.jpg', // Replace with your actual image path
    jobTitle: 'Software Developer',
    description: 'Software Developer specializing in Python, Machine Learning, and Web Development',
    sameAs: [
      'https://github.com/your-github', // Replace with your actual social links
      'https://linkedin.com/in/your-linkedin',
      'https://twitter.com/your-twitter'
    ],
    skills: ['Python', 'Machine Learning', 'Web Development', 'Data Science'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Your University Name' // Replace with your actual university
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Md Meraj Ansari - Software Developer Portfolio</title>
      <meta name="description" content="Software Developer specializing in Python, Machine Learning, and Web Development. View my projects and skills." />
      <meta name="keywords" content="software developer, python developer, machine learning, web development, portfolio" />
      <meta name="author" content="Md Meraj Ansari" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://your-portfolio-url.com" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Md Meraj Ansari - Software Developer Portfolio" />
      <meta property="og:description" content="Software Developer specializing in Python, Machine Learning, and Web Development" />
      <meta property="og:image" content="https://your-portfolio-url.com/path/to/og-image.jpg" />
      <meta property="og:url" content="https://your-portfolio-url.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Md Meraj Ansari - Software Developer Portfolio" />
      <meta name="twitter:description" content="Software Developer specializing in Python, Machine Learning, and Web Development" />
      <meta name="twitter:image" content="https://your-portfolio-url.com/path/to/twitter-image.jpg" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional Meta Tags for SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#8B5CF6" /> {/* Match with your site's theme color */}
    </Helmet>
  );
};

export default SEO;