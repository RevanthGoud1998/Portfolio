# Revanth Goud Gajagauni - Portfolio

A modern, professional portfolio website showcasing my experience as a Data and Business Analyst. Built with React and Tailwind CSS, featuring a clean navy blue, white, and gold color scheme.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI**: Clean, minimalistic design with smooth transitions and animations
- **Section-Based Navigation**: Sticky navigation bar with smooth scrolling to sections
- **Interactive Components**: Hover effects, animated cards, and dynamic content
- **Professional Presentation**: Comprehensive showcase of skills, projects, experience, and education

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Icons**: Custom SVG icons
- **Fonts**: Inter (via Google Fonts)

## Project Structure

```
revanth-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation bar
│   │   ├── Hero.jsx            # Hero section with introduction
│   │   ├── About.jsx           # About me section
│   │   ├── Skills.jsx          # Skills and technologies
│   │   ├── Projects.jsx        # Featured projects
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Education.jsx       # Educational background
│   │   ├── Contact.jsx         # Contact information
│   │   └── Footer.jsx          # Footer component
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles and Tailwind config
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies

```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sharathmuthyala/revanth-portfolio.git
cd revanth-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization

### Colors

The color scheme is defined in [tailwind.config.js](tailwind.config.js). You can customize the navy and gold colors:

```javascript
colors: {
  navy: {
    // Custom navy shades
  },
  gold: {
    // Custom gold shades
  },
}
```

### Content

To update personal information, modify the respective component files in [src/components/](src/components/).

### Fonts

The portfolio uses Inter font from Google Fonts. To change the font, update [index.html](index.html) and [tailwind.config.js](tailwind.config.js).

## Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Professional bio with key statistics
3. **Skills**: Categorized technical skills and certifications
4. **Projects**: Featured projects with detailed descriptions
5. **Experience**: Timeline of work experience
6. **Education**: Academic background
7. **Contact**: Contact information and social media links

## Deployment

This portfolio can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## Contact

- **Email**: revanthgoudgajagauni@gmail.com
- **Phone**: 959-666-1894
- **LinkedIn**: [linkedin.com/in/revanthgoudgajagauni](https://linkedin.com/in/revanthgoudgajagauni)
- **GitHub**: [github.com/revanthgoud](https://github.com/revanthgoud)

## License

This project is open source and available under the [ISC License](LICENSE).
