import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, GitHub, Linkedin, Twitter } from 'react-feather';
import { fadeInUp } from './SharedComponents';

interface HeroSectionProps {
  userName: string;
  userBio: string;
  GitHubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  placeholderBg: string;
  placeholderAccent: string;
  placeholderFormat: string;
}

export const HeroSection = ({
  userName,
  userBio,
  GitHubUrl,
  linkedinUrl,
  twitterUrl,
  placeholderBg,
  placeholderAccent,
  placeholderFormat,
}: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white dark:from-gray-900/80 dark:to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.05),transparent)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
               
                <span className="text-accent-primary dark:text-accent-lightBlue mr-2">
                  Building Impactful Products  
                </span> 
                 with AI & Community.
              </motion.h1>


              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
              >
                {userBio}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <a
                  href="#work"
                  className="px-6 py-3 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/90 transition-colors flex items-center gap-2"
                >
                  View Work <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  Get in Touch
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 pt-4"
              >
                {[
                  { icon: GitHub, href: GitHubUrl, label: 'GitHub' },
                  { icon: Linkedin, href: linkedinUrl, label: 'LinkedIn' },
                  { icon: Twitter, href: twitterUrl, label: 'Twitter' },
                ].map((social) => social.href && (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-accent-primary dark:hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-2xl mx-auto lg:mx-0 order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6 p-4">
              {/* First Column */}
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg transform translate-y-4"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/images/one.jpg"
                    alt="Portfolio Image 1"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/images/two.jpg"
                    alt="Portfolio Image 2"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              {/* Second Column */}
              <div className="space-y-4 md:space-y-6 transform translate-y-10">
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/images/three.png"
                    alt="Portfolio Image 3"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <motion.div
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/images/four.jpg"
                    alt="Portfolio Image 4"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -inset-4 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent rounded-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(37,99,235,0.15),transparent)] rounded-3xl" />
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.075]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 