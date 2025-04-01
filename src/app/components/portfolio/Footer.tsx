import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './SharedComponents';

interface FooterProps {
  userName: string;
}

export const Footer = ({ userName }: FooterProps) => {
  return (
    <motion.footer
      className="py-8 mt-16 bg-gray-50 dark:bg-black/30 border-t border-gray-200 dark:border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-500">
        <p className="text-xs">
          © {new Date().getFullYear()} {userName}. Built with React, Tailwind
          & Framer Motion.
        </p>
      </div>
    </motion.footer>
  );
}; 