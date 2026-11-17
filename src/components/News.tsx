import React from 'react';
import { motion } from 'framer-motion';

const News: React.FC = () => {
  const updates = [
    {
      date: 'June 2026',
      title: 'Vice-Chair of IEEE/P1947',
      description:
        'Congratulations to Alain Chancé on his appointment as Vice-Chair of the IEEE P1947 working group, and thank you for his ongoing contributions to the project. This is a significant recognition of Alain’s expertise and dedication to advancing quantum computing standards.',
    },
    {
      date: 'May 2026',
      title: 'New Quantum Computing Course',
      description: 'Dr. Taha Selim published a new course on quantum computing from scratch.',
    },
    {
      date: 'April 2026',
      title: 'Cairo University Spring School in Quantum Technologies',
      description:
        'Cairo University hosted a spring school in quantum technologies, with Dr. Taha Selim as a co-organizer and speaker. The event was a great success, attracting students and researchers from across the region. The school featured a panel discussion on advanced quantum algorithms by Dr. Keeper L. Sharkey and Alain Chancé.',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News</h2>
          <p className="text-lg text-gray-600">Latest updates from MolKet's quantum and AI initiatives.</p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((item, index) => (
            <motion.article
              key={item.title}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-sm font-bold text-blue-600 mb-2">{item.date}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
