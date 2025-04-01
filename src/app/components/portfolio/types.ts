import { motion } from 'framer-motion';

export interface SectionTitleProps {
  title: string;
  id: string;
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  elementType?: keyof typeof motion;
  variants?: any;
  theme: 'light' | 'dark';
  cardType?: string;
  whileHoverEffect?: Record<string, any>;
}

export interface ThemeSwitcherProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  codeUrl?: string;
  liveUrl?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export interface CommunityItem {
  title: string;
  description: string;
  date: string;
  icon: any;
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
  logoUrl: string;
} 