# Senior Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with shadcn/ui components
- 📱 Fully responsive across all devices
- 🌙 Dark/Light mode support
- ⚡ Fast performance with Next.js 14
- 🎯 SEO optimized
- 📧 Contact form ready for integration
- 🔧 Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd senior-engineer-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information
- Update `app/page.tsx` with your personal information
- Replace placeholder images in the `public` folder
- Modify the metadata in `app/layout.tsx`

### Content Sections
- **Hero Section**: Update name, title, and description
- **About**: Modify the about text and skills
- **Experience**: Add your work history
- **Projects**: Showcase your projects with real links
- **Contact**: Update contact information

### Styling
- Colors can be modified in `app/globals.css`
- Component styles use Tailwind CSS classes
- Dark mode variables are defined in the CSS custom properties

### Adding New Sections
The modular structure makes it easy to add new sections:
1. Create the section component
2. Import and add it to `app/page.tsx`
3. Update navigation if needed

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

## License

This project is open source and available under the [MIT License](LICENSE).
