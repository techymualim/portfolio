'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Home,
  Layers,
  Code,
  BookOpen,
  Mail,
  Sun,
  Moon,
} from 'react-feather';
import { usePathname } from 'next/navigation';

interface DynamicIslandNavbarProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  userName: string;
}

const DynamicIslandNavbar = ({ theme, setTheme, userName }: DynamicIslandNavbarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, tooltip: 'Back to Top' },
    { name: 'Projects', icon: Layers, tooltip: 'View Projects' },
    { name: 'Experience', icon: Code, tooltip: 'Work Experience' },
    { name: 'Blog', icon: BookOpen, tooltip: 'Read Articles', href: '/blog' },
    { name: 'Contact', icon: Mail, tooltip: 'Get in Touch' },
  ];

  const getNavItemHref = (item: typeof navItems[0]) => {
    if (item.href) return item.href;
    
    // If we're on the blog page and clicking a portfolio section, redirect to home page with hash
    if (pathname === '/blog') {
      return `/#${item.name.toLowerCase()}`;
    }
    
    return `#${item.name.toLowerCase()}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center items-start w-full z-50 px-4 pt-6">
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 25,
          mass: 0.5,
          delay: 0.3,
        }}
        className={`
          relative
          inline-flex
          items-center
          gap-4
          px-6
          py-2.5
          rounded-full
          shadow-lg
          border
          backdrop-blur-xl
          ${
            isHovered || isMobileMenuOpen
              ? 'bg-white/90 dark:bg-black/90 border-gray-200/50 dark:border-white/20'
              : 'bg-white/80 dark:bg-black/80 border-gray-200/30 dark:border-white/10'
          }
          transition-all
          duration-300
          ease-out
          max-w-xl
          w-auto
        `}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative flex-shrink-0"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 absolute -inset-1 blur-md" />
          <div className="relative w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 shadow-xl overflow-hidden">
            <Image
              src="/images/prof.png"
              alt={userName}
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
        </motion.div>

        {/* Navigation Items */}
        <div className="flex items-center gap-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={getNavItemHref(item)}
              className="relative p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-accent-primary dark:hover:text-white transition-colors group"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "tween", duration: 0.2 }}
              title={item.tooltip}
            >
              <item.icon size={16} />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-gray-800 dark:bg-white text-white dark:text-gray-800 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                {item.tooltip}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-gray-200 dark:bg-white/10" />

        {/* Theme Switcher */}
        <motion.button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-500/10 focus:outline-none transition-colors"
          whileHover={{ scale: 1.15, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 p-3 bg-white dark:bg-black/95 rounded-2xl border border-gray-200/50 dark:border-white/10 backdrop-blur-lg shadow-lg w-56"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={getNavItemHref(item)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-accent-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default DynamicIslandNavbar; 