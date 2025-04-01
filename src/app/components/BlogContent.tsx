import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface BlogContentProps {
  content: any[];
  theme: 'light' | 'dark';
}

const components = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlFor(value).url();
      return (
        <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={value.alt || 'Blog post image'}
            fill
            className="object-cover"
          />
        </div>
      );
    },
    code: ({ value }: any) => (
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto">
        <code className="text-sm">{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent-primary dark:border-accent-lightBlue pl-4 my-4 italic text-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside my-4 space-y-2 text-gray-600 dark:text-gray-400">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside my-4 space-y-2 text-gray-600 dark:text-gray-400">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-primary dark:text-accent-lightBlue hover:underline"
      >
        {children}
      </a>
    ),
  },
};

const BlogContent = ({ content, theme }: BlogContentProps) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
};

export default BlogContent; 