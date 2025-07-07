"use client";
import { motion } from 'framer-motion';

export default function Welcome({ name }: { name: string }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
            Welcome, <span className="text-blue-600 dark:text-blue-400">{name || 'Guest'}!</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8 font-mono">
            We're excited to have you here
          </p>
        </motion.div>
      </div>
    </section>
  );
}
