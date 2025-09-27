'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiMonitor, FiUsers } from 'react-icons/fi';
import { services } from '@/data/services';

const ServicesSection = () => {
  const icons = [FiCode, FiSmartphone, FiMonitor, FiUsers];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meus <span className="text-primary-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ofereço soluções completas em desenvolvimento e design para transformar suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = icons[index];
            
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar seu próximo projeto?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Vamos conversar sobre como posso ajudar a transformar suas ideias em soluções digitais incríveis.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Vamos Conversar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
