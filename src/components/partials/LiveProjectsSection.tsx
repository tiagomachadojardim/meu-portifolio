'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { works } from '@/data/works';
import Image from 'next/image';

const LiveProjectsSection = () => {
  return (
    <section id="works" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meus <span className="text-primary-500">Projetos</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Uma seleção dos projetos que desenvolvi e mantenho — pessoais e da empresa — com foco no que eu implementei.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={work.thumbnailUrl}
                  alt={work.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {work.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  {work.attributes.find(attr => attr.name === 'Status')?.value.toString().includes('Produção') ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                      Em Produção
                    </span>
                  ) : work.attributes.find(attr => attr.name === 'Status')?.value.toString().includes('Publicado') ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></span>
                      Publicado
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1.5"></span>
                      Em Desenvolvimento
                    </span>
                  )}
                  <span className="px-2.5 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded-full">
                    {work.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {work.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {work.attributes.find(attr => attr.name === 'Tecnologias')?.value.toString().split(',').map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProjectsSection;
