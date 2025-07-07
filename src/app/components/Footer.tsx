'use client';
import { motion } from 'framer-motion';

import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-sans font-semibold text-neutral-800 dark:text-neutral-200">
              Fresh Recipes Daily
            </h3>
            <div className="flex gap-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                {darkMode ? (
                  <SunIcon className="w-6 h-6 text-orange-400" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-orange-600" />
                )}
              </button>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-neutral-600 dark:text-neutral-400 font-mono text-sm">
              © {new Date().getFullYear()} Culinary Arts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}