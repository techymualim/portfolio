import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GitHub } from 'react-feather';
import { SectionTitle, GlassCard, staggerContainer } from './SharedComponents';
import { Project } from './types';

interface ProjectsSectionProps {
  projects: Project[];
  theme: 'light' | 'dark';
}

export const ProjectsSection = ({ projects, theme }: ProjectsSectionProps) => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <SectionTitle title="Selected Projects" id="projects-title" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <GlassCard
            key={project.title}
            className="flex flex-col group"
            theme={theme}
            cardType="project"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5 md:p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent-primary/10 dark:bg-accent-deepBlue/20 text-accent-primary dark:text-accent-lightBlue border border-accent-primary/20 dark:border-accent-deepBlue/30 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex justify-end items-center gap-4 text-xs">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="text-accent-primary dark:text-accent-lightBlue hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Live <ArrowRight size={12} />
                  </motion.a>
                )}
                {project.codeUrl && (
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="text-gray-500 dark:text-gray-400 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Code <GitHub size={12} />
                  </motion.a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </motion.section>
  );
}; 