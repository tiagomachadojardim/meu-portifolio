'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiTrendingUp, FiZap } from 'react-icons/fi';
import { experiences } from '@/data/experiences';
import { works } from '@/data/works';

const AboutSection = () => {
  const productionProjects = works.filter(w =>
    w.attributes.some(a => a.name === 'Status' && a.value.toString().includes('Produção'))
  ).length;
  const developmentProjects = works.filter(w =>
    w.attributes.some(a => a.name === 'Status' && a.value.toString().includes('Desenvolvimento'))
  ).length;
  const earliestYear = experiences
    .map(e => parseInt(e.startDate.replace(/[^0-9]/g, ''))) // extrai números
    .filter(n => !isNaN(n))
    .reduce((min, y) => y < min ? y : min, new Date().getFullYear());
  const yearsOfExperience = new Date().getFullYear() - earliestYear;

  const stats = [
    { icon: FiCode, number: productionProjects.toString(), label: 'Produtos em Produção' },
    { icon: FiLayers, number: yearsOfExperience.toString(), label: 'Anos de Experiência' },
    { icon: FiTrendingUp, number: developmentProjects.toString(), label: 'Em Desenvolvimento' },
    { icon: FiZap, number: 'API / Bluetooth', label: 'Integrações' },
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
            Sobre <span className="text-primary-500">Mim</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Fundador da Bientech, desenvolvedor full stack apaixonado por transformar ideias em produtos digitais que impactam vidas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Minha Jornada
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <span className="font-semibold text-primary-500">Formação Acadêmica:</span> Graduado em Análise e Desenvolvimento 
              de Sistemas e atualmente cursando Engenharia de Computação. Minha paixão por tecnologia me levou a fundar 
              a <span className="font-semibold text-primary-500">Bientech</span>, uma startup focada em soluções inovadoras 
              para saúde respiratória.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <span className="font-semibold text-primary-500">Experiência Profissional:</span> Com {yearsOfExperience} anos de experiência 
              em desenvolvimento de software, já atuei como monitor de informática e tenho sólida experiência em infraestrutura 
              de TI, incluindo manutenção de computadores e redes. Essa bagagem me dá uma visão completa do ciclo de desenvolvimento, 
              desde a infraestrutura até o produto final.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Desenvolvo soluções completas para <span className="font-semibold">web e mobile (Android)</span>, utilizando 
              tecnologias modernas. Atualmente, mantenho múltiplos produtos em produção servindo clientes reais, sempre focando 
              em qualidade, performance e experiência do usuário.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Next.js', 'React', 'Laravel', 'Flutter', 'TypeScript', 'PostgreSQL', 'Firebase', 'Tailwind'].map((tech) => (
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-5 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-xs">
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
