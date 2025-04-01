import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle, GlassCard, staggerContainer, fadeInUp } from './SharedComponents';
import { CommunityItem } from './types';

interface CommunitySectionProps {
  community: CommunityItem[];
  theme: 'light' | 'dark';
}

export const CommunitySection = ({ community, theme }: CommunitySectionProps) => {
  return (
    <motion.section
      id="community"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <SectionTitle title="Community Involvement" id="community-title" />
      <ul className="space-y-5">
        {community.map((item, index) => (
          <motion.li
            key={item.title + index}
            variants={fadeInUp}
            className="group"
          >
            <GlassCard
              elementType="div"
              className="p-5 flex items-start gap-5 transition-colors border border-transparent hover:border-accent-primary/20 dark:hover:border-accent-deepBlue/30"
              theme={theme}
              whileHoverEffect={{}}
            >
              <motion.div
                className="bg-gray-100 dark:bg-black/10 p-2.5 rounded-lg border border-gray-200 dark:border-white/10 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: -5 }}
              >
                <div className="relative w-8 h-8">
                  <Image
                    src={item.logoUrl}
                    alt={`${item.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
              <div className="flex-grow">
                <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0 ml-auto pt-1 hidden md:block">
                {item.date}
              </span>
            </GlassCard>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}; 