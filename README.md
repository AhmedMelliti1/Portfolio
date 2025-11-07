# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark mode support
- 📱 Mobile-friendly navigation
- 🚀 Fast and optimized performance
- ✨ Smooth animations and transitions
- 📧 Contact form
- 🎯 Project showcase section

## Tech Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. Update your name in `components/Hero.tsx`
2. Add your projects in `components/Projects.tsx`
3. Update contact information in `components/Contact.tsx`
4. Modify skills and technologies in `components/About.tsx`

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This Next.js app can be deployed on:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any platform supporting Next.js

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── public/              # Static assets
└── package.json         # Dependencies
```

## License

MIT License - feel free to use this portfolio template for your own projects!

## Contact

Feel free to reach out if you have any questions or suggestions!

