# Md Meraj Ansari - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring custom animations, dark/light theme toggle, and interactive elements.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🌙 Dark/Light theme toggle
- ✨ Custom cursor animations
- 🎭 Interactive flip cards for certifications
- 📱 Mobile-responsive navigation
- 📧 Contact form with EmailJS integration
- 🎪 Animated background elements (stars/leaves)
- 🖼️ Image modal for profile picture
- ⚡ Fast loading with Vite

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Email Service**: EmailJS
- **Icons**: Font Awesome
- **Animations**: CSS3 + JavaScript

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` folder

3. Deploy the `dist` folder to your hosting service

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

### Netlify
1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Your site will be live!

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## File Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── CustomCursor.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   ├── ImageModal.jsx
│   ├── Navigation.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Personal Information
Update the following files with your information:
- `src/components/Home.jsx` - Main title and description
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact information
- `src/components/Projects.jsx` - Your projects
- `src/components/Experience.jsx` - Work experience
- `src/components/Certifications.jsx` - Certifications

### Styling
- Main styles are in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Theme colors can be customized in the CSS variables

### EmailJS Configuration
Update the EmailJS configuration in `src/components/Contact.jsx`:
```javascript
const serviceID = 'your-service-id';
const templateID = 'your-template-id';
const publicKey = 'your-public-key';
```

## Assets

Make sure to add these files to the `public` folder:
- `profile-picture.jpg` - Your profile picture
- `meraj resume.pdf` - Your resume

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Md Meraj Ansari
- Email: mdmeraj3005@gmail.com
- LinkedIn: [mdmeraj05](https://www.linkedin.com/in/mdmeraj05/)
- GitHub: [Meralak000](https://github.com/Meralak000)

