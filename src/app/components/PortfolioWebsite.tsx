'use client'
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import DynamicIslandNavbar from '@/components/DynamicIslandNavbar';
import { HeroSection } from './portfolio/HeroSection';
import { AboutSection } from './portfolio/AboutSection';
import { ExperienceSection } from './portfolio/ExperienceSection';
import { ProjectsSection } from './portfolio/ProjectsSection';
import { BlogSection } from './portfolio/BlogSection';
import { CommunitySection } from './portfolio/CommunitySection';
import { ContactSection } from './portfolio/ContactSection';
import { Footer } from './portfolio/Footer';
import { Award, Users, Edit3 } from 'react-feather';
import { client } from '@/lib/sanity';
import { Post } from '@/types/blog';

const PortfolioWebsite = () => {
  const { theme, setTheme } = useTheme();
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt,
        body,
        author->{
          _id,
          name,
          image
        },
        categories[]->{
          _id,
          title,
          slug
        }
      }`;

      const posts = await client.fetch(query);
      setBlogPosts(posts);
    };

    fetchBlogPosts();
  }, []);

  // --- Configuration & Data ---
  const userName = 'Hassam Jawed';
  const userRole = 'Product Software Engineer';
  const userFocus = 'React / Django / AI';
  const userBio =
    'Positioned at the confluence of meaningful design and engineering solutions. Focused on creating impact with React, Django, and AI-driven features.';
  const userEmail = 'your.email@example.com'; // <-- REPLACE
  const userLocation = 'Karachi, Pakistan';
  const GitHubUrl = 'https://GitHub.com/yourusername'; // <-- REPLACE
  const linkedinUrl = 'https://linkedin.com/in/yourusername'; // <-- REPLACE
  const twitterUrl = ''; // Optional: Replace or leave empty
  const resumeUrl = '#'; // <-- REPLACE with link to your CV/Resume PDF

  // Placeholders (Theme Aware)
  const placeholderDarkBg = '0A0A0A';
  const placeholderLightBg = 'F0F4F8';
  const placeholderAccent = '2563eb';
  const placeholderFormat = 'webp';
  const placeholderTextColDark = '9CA3AF';
  const placeholderTextColLight = '6B7280';
  const placeholderBg =
    theme === 'dark' ? placeholderDarkBg : placeholderLightBg;
  const placeholderTextCol =
    theme === 'dark' ? placeholderTextColDark : placeholderTextColLight;

  // Core Skills
  const skills = [
    'React.js',
    'Django',
    'Python',
    'JavaScript',
    'TypeScript',
    'AI/ML Concepts',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Product Strategy',
    'UI/UX Design',
    'Leadership',
    'Community Building',
    'Figma',
    'Git',
  ];

  // Projects
  const projects = [
    {
      title: 'AI-Powered Admin Dashboard',
      description:
        'Django Admin dashboard enhanced with AI features for data analysis and user management.',
      tags: ['Django Admin', 'AI', 'Python', 'Productivity'],
      imageUrl: `https://placehold.co/600x350/${placeholderBg}/${placeholderAccent}.${placeholderFormat}?text=AI+Admin`,
      codeUrl: '#',
    },
    {
      title: 'Electron App Feature Refactor',
      description:
        'Refactored and improved core features for a cross-platform Electron application.',
      tags: ['Electron', 'JavaScript', 'Refactoring'],
      imageUrl: `https://placehold.co/600x350/${placeholderBg}/${placeholderAccent}.${placeholderFormat}?text=Electron+App`,
      codeUrl: '#',
    },
    {
      title: 'Raabtaa Landing Page & Dashboard',
      description:
        'Designed and developed landing page and data dashboard for Raabtaa Tech.',
      tags: ['React', 'UI/UX', 'Figma', 'Data Viz'],
      imageUrl: `https://placehold.co/600x350/${placeholderBg}/${placeholderAccent}.${placeholderFormat}?text=Raabtaa+Dash`,
      liveUrl: '#',
    },
  ];

  // Community work
  const community = [
    {
      title: 'Organizer, GDG Kolachi',
      description:
        'Organizing Developer Baithaks, Devfest, I/O Extended, Build with AI workshops, impacting hundreds of developers.',
      date: 'Nov 2021 - Pres',
      icon: Award,
      tags: ['Leadership', 'Event Management', 'Google Tech', 'AI/ML'],
    },
    {
      title: 'GDSC Lead, DHA Suffa University',
      description:
        'Led the Google Developer Student Club, organized workshops, talks, and mentored students.',
      date: 'Aug 2021 - Jul 2022',
      icon: Users,
      tags: ['Leadership', 'Mentorship', 'University'],
    },
    {
      title: 'Design Lead, Flutter Karachi',
      description:
        'Led design for Flutter Extended Karachi 2023 (featured at Flutter Connect) & Flutter Flash 2022.',
      date: 'Oct 2022',
      icon: Edit3,
      tags: ['Design', 'Flutter', 'Events'],
    },
  ];

  // Experience
  const experiences = [
    {
      role: 'Associate Software Engineer',
      company: 'Vertika Limited',
      date: 'May 2024 - Pres',
      description:
        'Designing Postgres schemas, refactoring Electron app features, building Django Admin dashboards, working with AWS (EC2, S3, RDS) & Docker.',
      tags: ['Django', 'PostgreSQL', 'Electron', 'JavaScript', 'AWS', 'Docker'],
      logoUrl: `https://placehold.co/80x80/${placeholderBg}/${placeholderTextCol}.${placeholderFormat}?text=VL`,
    },
    {
      role: 'Investment & Expansion Analyst',
      company: 'IMAN (500 Global w22)',
      date: 'Aug 2023 - Sep 2023',
      description:
        'Created pitch decks, managed CRM data migration (using Python script).',
      tags: ['Pitch Decks', 'CRM', 'Python', 'Data Migration'],
      logoUrl: `https://placehold.co/80x80/${placeholderBg}/${placeholderTextCol}.${placeholderFormat}?text=IM`,
    },
    {
      role: 'Software Trainee / Intern',
      company: 'Raabtaa Tech',
      date: 'May 2022 - Oct 2022',
      description:
        'Designed & developed dashboards (Figma, React, Chart.js), database querying, UI/UX improvements, built landing page.',
      tags: ['React', 'UI/UX', 'Figma', 'Data Viz', 'SQL'],
      logoUrl: `https://placehold.co/80x80/${placeholderBg}/${placeholderTextCol}.${placeholderFormat}?text=RT`,
    },
  ];

  return (
    <div
      className={`flex flex-col min-h-screen bg-light-bg dark:bg-dark-bg text-gray-600 dark:text-gray-400 font-sans scroll-smooth transition-colors duration-300`}
    >
      <DynamicIslandNavbar
        theme={theme}
        setTheme={setTheme}
        userName={userName}
      />

      <HeroSection
        userName={userName}
        userBio={userBio}
        GitHubUrl={GitHubUrl}
        linkedinUrl={linkedinUrl}
        twitterUrl={twitterUrl}
        placeholderBg={placeholderBg}
        placeholderAccent={placeholderAccent}
        placeholderFormat={placeholderFormat}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24 md:space-y-32 overflow-hidden">
        <AboutSection
          userLocation={userLocation}
          skills={skills}
          theme={theme}
        />

        <ExperienceSection
          experiences={experiences}
          theme={theme}
        />

        <ProjectsSection
          projects={projects}
          theme={theme}
        />

        <BlogSection
          blogPosts={blogPosts}
          theme={theme}
        />

        <CommunitySection
          community={community}
          theme={theme}
        />

        <ContactSection
          userEmail={userEmail}
          userLocation={userLocation}
          GitHubUrl={GitHubUrl}
          linkedinUrl={linkedinUrl}
          theme={theme}
        />
      </main>

      <Footer userName={userName} />
    </div>
  );
};

export default PortfolioWebsite;
