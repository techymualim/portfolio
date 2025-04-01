# Modern Portfolio Website with Blog

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Sanity CMS. Features a unique Dynamic Island-inspired navigation, dark mode support, and a built-in blog.

## ✨ Features

- 🏝️ Dynamic Island-inspired navigation bar
- 🌓 Dark/Light mode with smooth transitions
- 📱 Fully responsive design
- 🎨 Modern glassmorphism UI
- ✍️ Integrated blog with Sanity CMS
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 📸 Next.js Image optimization
- 🔍 TypeScript for type safety

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Sanity account (for blog functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/techymualim/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with your Sanity configuration:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## 🎨 Customization

### Personal Information
Edit `src/app/components/PortfolioWebsite.tsx` to update:
- Name, role, and bio
- Contact information
- Social media links
- Skills
- Projects
- Experience
- Community involvement

### Images
Place your images in the `public/images` directory:
- Profile picture: `prof.png`
- Project images
- Company logos
- Community logos

### Blog Setup with Sanity

1. Install Sanity CLI:
```bash
npm install -g @sanity/cli
```

2. Initialize Sanity studio:
```bash
sanity init
```

3. Choose the following schema types in your Sanity Studio:
- Post
- Author
- Category

4. Deploy Sanity Studio:
```bash
sanity deploy
```

### Blog Content Structure

The blog uses the following schema:

\`\`\`typescript
Post {
  title: string
  slug: string
  mainImage: Image
  publishedAt: datetime
  author: Reference
  categories: Reference[]
  excerpt: string
  body: PortableText
}
\`\`\`

## 🏗️ Project Structure

```
├── public/
│   └── images/           # Static images
├── src/
│   ├── app/
│   │   ├── components/   # React components
│   │   └── portfolio/    # Portfolio sections
│   ├── context/         # Theme context
│   ├── lib/            # Sanity client
│   ├── types/          # TypeScript types
│   └── sanity/         # Sanity configuration
└── styles/             # Global styles
```

## 🎯 Key Components

1. **DynamicIslandNavbar**: 
   - Animated navigation bar
   - Responsive design
   - Theme switcher
   - Profile preview

2. **Portfolio Sections**:
   - Hero
   - About
   - Experience
   - Projects
   - Community
   - Blog
   - Contact

3. **Blog Integration**:
   - Sanity CMS integration
   - Responsive blog layout
   - Category filtering
   - Author profiles

## 🛠️ Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS
- React Feather Icons

## 📱 Responsive Design

The portfolio is fully responsive with:
- Dynamic Island navigation on desktop
- Hamburger menu on mobile
- Fluid typography
- Responsive grid layouts
- Optimized images

## 🎨 Theme Customization

Edit the theme colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'accent-primary': '#2563eb',
      'accent-lightBlue': '#60a5fa',
      'accent-deepBlue': '#1e40af',
    }
  }
}
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 🙏 Acknowledgments

- Dynamic Island design inspired by Apple
- Icons by Feather Icons
- Animations powered by Framer Motion
