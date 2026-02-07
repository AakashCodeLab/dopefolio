# Aakash Singh - Portfolio Website

A modern, responsive personal portfolio website built with vanilla HTML, SASS, and JavaScript to showcase software development skills and projects.

![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)
![Node Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)

## 🚀 Features

- **Mobile-First Responsive Design** - Optimized for all devices (phone, tablet, desktop)
- **Modern SASS Architecture** - BEM methodology with modular components
- **Semantic HTML5** - Better SEO and accessibility (WCAG 2.1 AA)
- **Vanilla JavaScript** - Lightweight interactions without framework dependencies
- **Performance Optimized** - Lazy loading, minified CSS, optimized assets
- **Progressive Enhancement** - Core content accessible without JavaScript
- **Animated Splash Screen** - Multilingual greeting on page load (configurable)

## ⚙️ Configuration

### Splash Screen Toggle

The portfolio includes an animated splash screen with multilingual greetings. You can easily enable or disable it:

**To disable the splash screen:**
1. Open `index.js`
2. Find the `CONFIG` object at the top:
   ```javascript
   const CONFIG = {
     enableSplashScreen: true  // Set to false to disable splash screen
   }
   ```
3. Change `true` to `false`:
   ```javascript
   const CONFIG = {
     enableSplashScreen: false  // Splash screen disabled
   }
   ```

The splash screen will be completely removed from the page without any delay.

**Splash Screen Settings:**
- **Duration**: 0.5 seconds (~0.9 seconds total with fade-out)
- **Languages**: Hello (English), नमस्ते (Hindi), नमस्कार (Marathi), Bonjour (French)
- **Animation**: Smooth fade-in/out with rotating greetings

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **SASS/SCSS** - CSS preprocessor with modern features
- **JavaScript ES6** - Vanilla JavaScript for interactions
- **Autoprefixer** - Automatic vendor prefixes
- **PostCSS** - CSS post-processing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 14.0.0 (Current version: v20.19.6)
- **npm** >= 6.0.0 (Current version: 10.8.2)

Check your versions:
```bash
node --version
npm --version
```

## 🔧 Installation

1. **Clone the repository** (or download the source code)
   ```bash
   git clone <repository-url>
   cd dopefolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   This will install:
   - `sass` - Modern SASS compiler (Dart Sass)
   - `autoprefixer` - Automatic vendor prefixes
   - `postcss-cli` - CSS post-processing
   - `concat` - File concatenation
   - `npm-run-all` - Run multiple npm scripts

## 🎨 Development

### Local Development Server

Run a local development server to view the site:
```bash
npm start
```

This starts a Python HTTP server at `http://localhost:8000`. Open this URL in your browser to view the site.

### Watch Mode (Development)

In a **separate terminal**, run SASS in watch mode to automatically compile changes:
```bash
npm run watch-sass
# or use the alias
npm run dev
```

This watches `sass/main.scss` and compiles to `css/style.css` on every save.

**Recommended workflow**:
1. Terminal 1: `npm start` (run the local server)
2. Terminal 2: `npm run dev` (watch SASS files)
3. Browser: Open `http://localhost:8000`
4. Edit SASS files → Browser auto-refreshes → See changes instantly!

### Build Production CSS

Build optimized CSS for production:
```bash
npm run build-css
```

This runs the complete build pipeline:
1. **Compile SASS** - `sass/main.scss` → `css/style.comp.css`
2. **Concatenate** - Combine CSS files → `css/style.concat.css`
3. **Autoprefix** - Add vendor prefixes → `css/style.prefix.css`
4. **Compress** - Minify CSS → `css/style.css` (final output)

### Individual Build Steps

Run specific build steps:
```bash
npm run compile-sass   # Compile SASS to CSS
npm run concat-css     # Concatenate CSS files
npm run prefix-css     # Add vendor prefixes
npm run compress-css   # Minify/compress CSS
```

## 📁 Project Structure

```
dopefolio/
├── index.html              # Main landing page
├── project-1.html          # Project case study (Rasoighar)
├── project-2.html          # Additional case study
├── project-3.html          # Additional case study
├── index.js                # Main JavaScript (navigation, interactions)
├── package.json            # Dependencies and scripts
├── sass/                   # SASS source files
│   ├── main.scss           # Main import file
│   ├── abstracts/          # Variables, mixins, utilities
│   │   ├── _variables.scss # Color scheme, spacing
│   │   ├── _mixins.scss    # Responsive breakpoints
│   │   └── _utilities.scss # Helper classes
│   ├── base/               # Reset, typography, base styles
│   │   └── _base.scss      # Global styles
│   ├── components/         # Reusable components
│   │   ├── _header.scss    # Header/navigation
│   │   ├── _footer.scss    # Footer
│   │   ├── _skills.scss    # Skills badges
│   │   └── _mouse-scroll.scss # Scroll indicator
│   └── pages/              # Page-specific styles
│       ├── _home.scss      # Homepage sections
│       └── _project-case-study.scss # Project pages
├── css/                    # Compiled CSS output
│   ├── style.css           # Final production CSS (minified)
│   ├── style.comp.css      # Compiled SASS output
│   ├── style.concat.css    # Concatenated CSS
│   └── style.prefix.css    # Prefixed CSS
└── assets/                 # Images, icons, media
    ├── png/                # PNG images
    ├── jpeg/               # JPEG images
    └── svg/                # SVG icons and graphics
```

## 🎨 Design System

### Colors
- **Primary**: `#7843e9` (Purple)
- **Text**: `#333` (Dark gray)
- **Background**: `#fafafa` (Light gray)

### Typography
- **Font Family**: Source Sans Pro (Google Fonts)
- **Base Font Size**: 62.5% (1rem = 10px)

### Responsive Breakpoints

| Device | Max Width | Mixin Usage |
|--------|-----------|-------------|
| Phone | 600px (37.5em) | `@include respond(phone)` |
| Tablet Portrait | 900px (56.25em) | `@include respond(tab-port)` |
| Tablet Landscape | 1200px (75em) | `@include respond(tab-land)` |
| Desktop | 1200-1800px | Default styles |
| Large Desktop | 1800px+ (112.5em) | `@include respond(big-desktop)` |

### Border Radius
- **Standard**: `5px` (stored in `$commonBorderRadius`)

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## ♿ Accessibility

This project follows **WCAG 2.1 Level AA** standards:
- ✅ Semantic HTML5 elements
- ✅ Descriptive alt text for images
- ✅ Proper heading hierarchy
- ✅ Keyboard navigation support
- ✅ Color contrast 4.5:1 (normal text), 3:1 (large text)
- ✅ Form labels properly associated
- ✅ Screen reader compatible

## 📈 Performance

Target metrics (Lighthouse):
- **Performance Score**: > 90
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Deployment

### Build for Production

1. Run the production build:
   ```bash
   npm run build-css
   ```

2. Deploy the following files:
   - `index.html`, `project-*.html` (HTML pages)
   - `css/style.css` (minified CSS)
   - `css/style.css.map` (source map, optional)
   - `index.js` (JavaScript)
   - `assets/` (all images and media)

### Deployment Platforms

This static site can be deployed to:
- **Netlify** - Drag & drop or Git integration
- **Vercel** - Zero-config deployment
- **GitHub Pages** - Free hosting for public repos
- **AWS S3 + CloudFront** - Scalable hosting
- **Any static hosting service**

## 📝 Maintenance

### Updating Dependencies

Check for outdated packages:
```bash
npm outdated
```

Update dependencies:
```bash
npm update
```

### SASS Import Deprecation Warning

You may see warnings about `@import` being deprecated in Dart Sass 3.0.0. To future-proof:

1. Migrate `@import` to `@use` and `@forward`
2. Run the automated migrator:
   ```bash
   npm install -g sass-migrator
   sass-migrator module --migrate-deps sass/main.scss
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New feature
- `fix:` - Bug fix
- `style:` - CSS/styling changes
- `refactor:` - Code restructuring
- `docs:` - Documentation updates
- `chore:` - Build process, dependencies

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Aakash Singh**

- Portfolio: [https://www.aakashrsingh.com/](https://www.aakashrsingh.com/)
- GitHub: [@AakashCodeLab](https://github.com/AakashCodeLab)
- LinkedIn: [Aakash Singh](https://www.linkedin.com/in/aakash-s-305bb195)
- Twitter: [@AaAakash1801](https://twitter.com/AaAakash1801)

## 🙏 Acknowledgments

- Font: [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) by Google Fonts
- Icons: Custom SVG icons
- Inspiration: Modern portfolio design trends

## 📚 Additional Resources

- [SASS Documentation](https://sass-lang.com/documentation)
- [BEM Methodology](http://getbem.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Performance Best Practices](https://web.dev/fast/)

---

**Made with ❤️ by Aakash Singh**

*If you find this project useful, please give it a ⭐ on GitHub!*
