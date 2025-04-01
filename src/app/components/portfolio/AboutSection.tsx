import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, GlassCard, staggerContainer, fadeInUp } from './SharedComponents';

interface AboutSectionProps {
  userLocation: string;
  skills: string[];
  theme: 'light' | 'dark';
}

export const AboutSection = ({ userLocation, skills, theme }: AboutSectionProps) => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <SectionTitle title="About" id="about-title" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <motion.div
          variants={fadeInUp}
          className="md:col-span-2 space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          <p>
            Based in {userLocation}, I operate at the intersection of
            product strategy, engineering, and design. My focus is on
            building impactful, user-centric applications using modern web
            technologies, with a particular emphasis on the React and Django
            ecosystems, increasingly incorporating AI.
          </p>
          <p>
            I thrive on translating complex requirements into scalable,
            maintainable code and enjoy leading features from ideation
            through deployment. I amm also deeply involved in the tech
            community, organizing events and sharing knowledge.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="space-y-5"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full text-xs font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}; 