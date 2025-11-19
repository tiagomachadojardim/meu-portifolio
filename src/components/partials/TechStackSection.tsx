'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiLaravel, SiPhp, SiPostgresql, 
  SiMysql, SiMongodb, SiFlutter, SiDart,
  SiGit, SiFigma, SiBootstrap
} from 'react-icons/si';

const TechStackSection = () => {
  const techCategories = [
    {
      title: 'Frontend',
      techs: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'hover:text-black dark:hover:text-white' },
        { name: 'React', icon: SiReact, color: 'hover:text-[#61DAFB]' },
        { name: 'TypeScript', icon: SiTypescript, color: 'hover:text-[#3178C6]' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:text-[#06B6D4]' },
      ]
    },
    {
      title: 'Backend',
      techs: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'hover:text-[#339933]' },
        { name: 'Laravel', icon: SiLaravel, color: 'hover:text-[#FF2D20]' },
        { name: 'PHP', icon: SiPhp, color: 'hover:text-[#777BB4]' },
      ]
    },
    {
      title: 'Database',
      techs: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'hover:text-[#4169E1]' },
        { name: 'MySQL', icon: SiMysql, color: 'hover:text-[#4479A1]' },
        { name: 'MongoDB', icon: SiMongodb, color: 'hover:text-[#47A248]' },
      ]
    },
    {
      title: 'Mobile',
      techs: [
        { name: 'Flutter', icon: SiFlutter, color: 'hover:text-[#02569B]' },
        { name: 'Dart', icon: SiDart, color: 'hover:text-[#0175C2]' },
      ]
    },
    {
      title: 'Ferramentas',
      techs: [
        { name: 'Git', icon: SiGit, color: 'hover:text-[#F05032]' },
        { name: 'Figma', icon: SiFigma, color: 'hover:text-[#F24E1E]' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'hover:text-[#7952B3]' },
      ]
    },
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Stack <span className="text-primary-500">Tecnológico</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Tecnologias e ferramentas que utilizo para criar soluções digitais completas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.techs.map((tech, techIndex) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    >
                      <Icon 
                        className={`text-4xl text-gray-700 dark:text-gray-300 transition-colors duration-300 ${tech.color}`} 
                      />
                      <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
