# Revanth Goud Gajagauni - Portfolio

A modern, professional portfolio website showcasing my experience as a Data and Business Analyst. Built with pure HTML, CSS, and JavaScript, featuring a clean navy blue, white, and gold color scheme. Optimized for GitHub Pages deployment.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI**: Clean, minimalistic design with smooth transitions and animations
- **Section-Based Navigation**: Sticky navigation bar with smooth scrolling to sections
- **Interactive Components**: Hover effects, animated cards, and dynamic content
- **Professional Presentation**: Comprehensive showcase of skills, projects, experience, and education
- **Zero Build Tools**: Pure HTML, CSS, and JavaScript - no build process required
- **GitHub Pages Ready**: Deploy directly to GitHub Pages with zero configuration

## Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with CSS variables, flexbox, and grid
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Google Fonts**: Inter font family
- **SVG Icons**: Custom inline SVG icons

## Project Structure

```
revanth-portfolio/
├── css/
│   └── style.css           # All styles with CSS variables
├── js/
│   └── script.js           # Navigation, animations, and interactions
├── index.html              # Main HTML file with all sections
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser. No installation or build process required!

### Option 2: Local Server (Recommended for Development)

For better development experience with live reloading:

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server
```

#### Using PHP:
```bash
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

## Customization

### Colors

The color scheme is defined in [css/style.css](css/style.css) using CSS variables:

```css
:root {
    --navy-950: #000a14;
    --navy-900: #001529;
    --navy-800: #002952;
    --navy-700: #003d7a;
    --gold-400: #fbbf24;
    --gold-500: #f59e0b;
    /* ... more colors */
}
```

### Content

To update personal information, edit the content directly in [index.html](index.html):
- Hero section: Lines 45-62
- About section: Lines 65-105
- Skills section: Lines 108-233
- Projects section: Lines 236-322
- Experience section: Lines 325-405
- Education section: Lines 408-453
- Contact section: Lines 456-507

### Fonts

The portfolio uses Inter font from Google Fonts. To change the font:
1. Update the Google Fonts link in `index.html` (line 13)
2. Update the `--font-family` variable in `css/style.css`

## Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Professional bio with key statistics (4+ years, 50+ projects, etc.)
3. **Skills**: 6 categorized skill areas with certifications
4. **Projects**: 3 featured projects with detailed descriptions
5. **Experience**: Timeline of 4 work positions
6. **Education**: MSBAPM degree details with GPA
7. **Contact**: Multiple contact methods with social links

## Deployment

### GitHub Pages (Recommended)

#### Method 1: From Main Branch
1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be published at `https://username.github.io/repository-name/`

#### Method 2: Using GitHub Desktop
1. Commit all your changes
2. Push to GitHub
3. Follow Method 1 steps to enable GitHub Pages

#### Method 3: Using Command Line
```bash
# Add, commit, and push your changes
git add .
git commit -m "Deploy portfolio"
git push origin main

# Then enable GitHub Pages in repository settings
```

### Custom Domain (Optional)

1. Add a `CNAME` file to the root directory with your domain:
   ```
   yourdomain.com
   ```
2. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IPs
   - Or add a CNAME record pointing to `username.github.io`
3. Enable custom domain in GitHub Pages settings

### Other Platforms

#### Netlify
1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for continuous deployment

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Cloudflare Pages
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your GitHub repository
3. Set build settings (no build command needed)
4. Deploy!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight**: No frameworks or build tools
- **Fast Loading**: Minimal dependencies (only Google Fonts)
- **SEO Optimized**: Semantic HTML with proper meta tags
- **Accessible**: ARIA labels and keyboard navigation support

## Features Breakdown

### Navigation
- Sticky header that appears on scroll
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- Active link highlighting

### Animations
- Fade-in animation on page load
- Scroll-triggered animations using Intersection Observer
- Hover effects on cards and buttons
- CSS transitions throughout

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px, 768px, and 1024px
- Flexible grid layouts
- Touch-friendly buttons and links

## Contact

- **Email**: revanthgoudgajagauni@gmail.com
- **Phone**: 959-666-1894
- **LinkedIn**: [linkedin.com/in/revanthgoudgajagauni](https://linkedin.com/in/revanthgoudgajagauni)
- **GitHub**: [github.com/revanthgoud](https://github.com/revanthgoud)
- **Portfolio**: [Live Site](https://sharathmuthyala.github.io/revanth-portfolio/)

## License

This project is open source and available under the [ISC License](LICENSE).

---

**Built with** ❤️ **using HTML, CSS, and JavaScript**
