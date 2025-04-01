import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { urlFor } from '@/lib/sanity';
import type { Post } from '@/types/blog';

interface BlogCardProps {
  post: Post;
  theme: 'light' | 'dark';
}

const BlogCard = ({ post, theme }: BlogCardProps) => {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative bg-white/60 dark:bg-black/25 backdrop-blur-lg border border-gray-200/80 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-black/15 overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent-primary/10">
          {/* Image Container */}
          <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                <span className="text-sm">No image</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="bg-accent-primary/10 dark:bg-accent-deepBlue/20 text-accent-primary dark:text-accent-lightBlue border border-accent-primary/20 dark:border-accent-deepBlue/30 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                {post.author.image && (
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <span>{post.author.name}</span>
              </div>
              <time dateTime={post.publishedAt}>
                {format(new Date(post.publishedAt), 'MMM d, yyyy')}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard; 