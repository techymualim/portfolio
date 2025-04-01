import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, staggerContainer } from './SharedComponents';
import BlogCard from '../BlogCard';
import type { Post } from '@/types/blog';

interface BlogSectionProps {
  blogPosts: Post[];
  theme: 'light' | 'dark';
}

export const BlogSection = ({ blogPosts, theme }: BlogSectionProps) => {
  return (
    <motion.section
      id="blogs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <SectionTitle title="Writings & Talks" id="blogs-title" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post._id} post={post} theme={theme} />
        ))}
      </div>
    </motion.section>
  );
}; 