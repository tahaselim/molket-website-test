import React from 'react';
import { motion } from 'framer-motion';

/** Dark page banner for secondary pages (news.html, projects.html), matching the home hero
 *  so the transparent navbar stays readable. */
const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <header className="relative bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 pt-36 pb-20 text-center text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
            className="text-lg text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <div className="h-1 w-20 bg-blue-400 mx-auto mt-6"></div>
      </div>
    </header>
);

export default PageHeader;
