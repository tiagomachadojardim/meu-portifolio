'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { experiences } from '@/data/experiences';

const AboutSection = () => {
  const stats = [
    { icon: FiCode, number: '50+', label: 'Projetos Concluídos' },
    { icon: FiLayers, number: '3+', label: 'Anos de Experiência' },
    { icon: FiUsers, number: '20+', label: 'Clientes Satisfeitos' },
    { icon: FiTrendingUp, number: '100%', label: 'Taxa de Sucesso' },
  ];

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
            Sobre <span className="text-primary-500">Mim</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras que fazem a diferença.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Minha História
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Comecei minha jornada na programação há mais de 3 anos e desde então tenho me dedicado 
              a criar experiências digitais excepcionais. Especializado em desenvolvimento web e mobile, 
              sempre busco aprender novas tecnologias e aplicar as melhores práticas do mercado.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Acredito que a tecnologia deve ser acessível e intuitiva. Meu objetivo é transformar 
              ideias complexas em soluções simples e elegantes que realmente agregam valor aos usuários.
            </p>
            <div className="flex flex-wrap gap-4">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experiência Profissional
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.jobTitle}
                    </h4>
                    <p className="text-primary-500 font-semibold mb-3">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 bg-primary-500 rounded-full mx-4 flex-shrink-0" />
                <div className="hidden md:block w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mx-auto" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
