import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-orange-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 font-sans"
      >
          Master the Art of
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Modern Cooking
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 font-mono">
          Explore world cuisines with chef-curated recipes and expert techniques
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-sans transition-all">
            Browse Recipes
          </button>
          <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full text-lg font-sans transition-all dark:border-orange-400 dark:text-orange-400">
            Watch Videos
          </button>
        </div>
      </div>
    </section>
  );
}