import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, GlassCard, staggerContainer, fadeInUp } from './SharedComponents';
import { Experience } from './types';

interface ExperienceSectionProps {
  experiences: Experience[];
  theme: 'light' | 'dark';
}

export const ExperienceSection = ({ experiences, theme }: ExperienceSectionProps) => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <SectionTitle title="Experience" id="experience-title" />
      <div className="space-y-8 relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="flex items-start gap-6 group"
          >
            <div className="mt-1 flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-black/10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm group-hover:bg-accent-primary/10 dark:group-hover:bg-accent-deepBlue/20 transition-colors">
              <img
                src={exp.logoUrl}
                alt={`${exp.company} Logo`}
                className="w-6 h-6 object-contain rounded-sm"
              />
            </div>
            <GlassCard
              className="flex-grow p-5 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10"
              theme={theme}
              whileHoverEffect={{}}
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 sm:mt-0 flex-shrink-0">
                  {exp.date}
                </p>
              </div>
              <p className="text-accent-primary dark:text-accent-lightBlue font-medium mb-2 text-sm">
                {exp.company}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {exp.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}; 