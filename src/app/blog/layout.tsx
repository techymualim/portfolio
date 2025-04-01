'use client';

import React from 'react';
import DynamicIslandNavbar from '@/components/DynamicIslandNavbar';
import { useTheme } from '@/context/ThemeContext';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  const userName = 'Hassam Jawed';

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <DynamicIslandNavbar theme={theme} setTheme={setTheme} userName={userName} />
      {children}
    </div>
  );
} 