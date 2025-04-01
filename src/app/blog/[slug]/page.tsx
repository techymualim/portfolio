'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/types/blog';

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Get theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme as 'light' | 'dark');

    // Fetch post data
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          body,
          author->{
            _id,
            name,
            image,
            bio
          },
          categories[]->{
            _id,
            title,
            slug
          }
        }`;

        const postData = await client.fetch(query, { slug: params.slug });
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary"></div>
      </div>
    );
  }

  const mainImageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;
  const authorImageUrl = post.author?.image ? urlFor(post.author.image).url() : null;

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-accent-primary dark:hover:text-accent-primary transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              {authorImageUrl && (
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={authorImageUrl}
                    alt={post.author?.name || ''}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              )}
              <span>{post.author?.name}</span>
            </div>
            <span>•</span>
            <time>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </motion.div>

        {/* Featured Image */}
        {mainImageUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden"
          >
            <Image
              src={mainImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {post.categories.map((category) => (
              <Link
                key={category._id}
                href={`/blog?category=${category.slug.current}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white/60 dark:bg-black/25 backdrop-blur-lg border border-gray-200/80 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                {category.title}
              </Link>
            ))}
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <PortableText value={post.body} />
        </motion.div>

        {/* Author Bio */}
        {post.author?.bio && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 p-8 rounded-2xl bg-white/60 dark:bg-black/25 backdrop-blur-lg border border-gray-200/80 dark:border-white/10"
          >
            <div className="flex items-start space-x-4">
              {authorImageUrl && (
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={authorImageUrl}
                    alt={post.author?.name || ''}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPost; 