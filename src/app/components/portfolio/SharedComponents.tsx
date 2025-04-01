import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'react-feather';
import { SectionTitleProps, GlassCardProps, ThemeSwitcherProps } from './types';

// Animation Variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const subtleHover = {
  hover: { y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

export const cardHoverLight = {
  hover: {
    ...subtleHover.hover,
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.08)',
  },
};

export const cardHoverDark = {
  hover: {
    ...subtleHover.hover,
    boxShadow:
      '0 8px 25px -5px rgba(37, 99, 235, 0.1), 0 0 15px -3px rgba(37, 99, 235, 0.05)',
  },
};

export const tapEffect = { scale: 0.96 };

// Section Title Component
export const SectionTitle = ({ title, id }: SectionTitleProps) => (
  <motion.div
    id={id}
    className="mb-12 md:mb-16 pt-24 -mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    variants={fadeInUp}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
      {title}
    </h2>
    <motion.div
      className="h-1 w-16 bg-accent-primary mt-3"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      style={{ originX: 0 }}
    />
  </motion.div>
);

// Glass Card Component
export const GlassCard = ({
  children,
  className = '',
  elementType = 'div',
  variants = fadeInUp,
  theme,
  cardType = '',
  whileHoverEffect = {},
}: GlassCardProps) => {
  const Element = motion[elementType] as any;
  const currentHover = theme === 'dark' ? cardHoverDark : cardHoverLight;
  const typeClass = cardType ? `${cardType}-card` : '';

  return (
    <Element
      className={`relative bg-white/60 dark:bg-black/25 backdrop-blur-lg border border-gray-200/80 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-black/15 overflow-hidden ${typeClass} ${className}`}
      variants={variants}
      whileHover={{ ...currentHover.hover, ...whileHoverEffect }}
      layout
    >
      {children}
    </Element>
  );
};

// Theme Switcher Component
export const ThemeSwitcher = ({ theme, setTheme }: ThemeSwitcherProps) => {
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-500/10 focus:outline-none transition-colors"
      whileHover={{ scale: 1.15, rotate: 15 }}
      whileTap={tapEffect}
      aria-label={
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
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
  );
}; 