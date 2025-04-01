'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import BlogCard from '../components/BlogCard';
import type { Post, Category } from '@/types/blog';

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Get theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme as 'light' | 'dark');

    // Fetch posts and categories
    const fetchData = async () => {
      try {
        // Fetch posts
        const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          excerpt,
          author->{
            _id,
            name,
            image
          },
          categories[]->{
            _id,
            title,
            slug
          }
        }`;

        // Fetch categories
        const categoriesQuery = `*[_type == "category"] {
          _id,
          title,
          slug
        }`;

        const [postsData, categoriesData] = await Promise.all([
          client.fetch(postsQuery),
          client.fetch(categoriesQuery),
        ]);

        setPosts(postsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.categories?.some((cat) => cat._id === selectedCategory)
      )
    : posts;

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Thoughts, tutorials, and insights about software development, design,
            and technology.
          </motion.p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-accent-primary text-white'
                : 'bg-white/60 dark:bg-black/25 backdrop-blur-lg border border-gray-200/80 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Posts
          </motion.button>
          {categories.map((category, index) => (
            <motion.button
              key={category._id}
              onClick={() => setSelectedCategory(category._id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category._id
                  ? 'bg-accent-primary text-white'
                  : 'bg-white/60 dark:bg-black/25 backdrop-blur-lg border border-gray-200/80 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <BlogCard post={post} theme={theme} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No posts found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage; 