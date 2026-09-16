# Prodkick - Interactive Quiz Platform

A modern, responsive quiz platform built with vanilla HTML, CSS, and JavaScript. Test your knowledge across multiple categories including General Knowledge, Movies, Science, Sports, and Geography.

## Features

- 🎯 5 Quiz Categories with 60 questions each
- 📊 3 Difficulty Levels (Easy, Medium, Hard)
- 📱 Fully Responsive Design
- 🎨 iOS-Inspired Modern UI
- 🌙 Dark Mode Support
- 📝 Educational Blog Content
- ⚡ Fast & Lightweight

## Project Structure

```
prodkick/
├── site/                    # Main application
│   ├── assets/
│   │   ├── css/            # Stylesheets
│   │   ├── fonts/          # Local font files
│   │   ├── images/         # Image assets
│   │   │   ├── blog/       # Blog images
│   │   │   ├── quiz/       # Quiz category icons
│   │   │   ├── icons/      # UI icons
│   │   │   └── about/      # About page images
│   │   └── js/             # JavaScript files (if any)
│   ├── blog/               # Blog article pages
│   ├── quiz-play.html/     # Quiz pages
│   ├── *.html              # Main pages
│   ├── package.json        # NPM dependencies
│   └── vite.config.js      # Vite configuration
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory

2. Navigate to the site folder:
   ```bash
   cd site
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the port shown in terminal).

### Production Build

Build for production:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Tech Stack

- **Build Tool**: Vite 7.1.0
- **CSS**: Custom CSS with CSS Variables
- **Fonts**: Inter (self-hosted)
- **Images**: JPG format, organized by category
- **Architecture**: Multi-Page Application (MPA)

## Pages

- **Home** (`index.html`) - Landing page with quiz categories
- **Quiz Selection** (`quiz.html`) - Choose quiz category and difficulty
- **Quiz Play** (`quiz-play.html/**`) - Individual quiz pages
- **Blog** (`blog.html`) - Educational articles
- **About** (`about.html`) - Platform information
- **Contact** (`contact.html`) - Contact form
- **Privacy** (`privacy.html`) - Privacy policy
- **Terms** (`terms.html`) - Terms of service

## Blog Topics

- Memory Techniques
- Effective Learning
- Multiple Choice Tips
- Time Management
- Quiz Psychology
- General Knowledge
- Digital Tools
- Group Study

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved © 2024 Prodkick

## Contributing

This is a personal project. If you'd like to suggest improvements, please open an issue.

## Contact

For questions or support, visit the contact page on the website.
