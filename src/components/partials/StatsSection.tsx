'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiActivity, FiTrendingUp, FiAward, FiCode, FiZap } from 'react-icons/fi';
import { works } from '@/data/works';
import { experiences } from '@/data/experiences';

const PATTERN_PATH =
  "M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z";

function getPatternStyle(color: string): React.CSSProperties {
  const svg = `<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='${color}' fill-opacity='1'><path d='${PATTERN_PATH}'/></g></g></svg>`;
  return {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
  };
}

const StatsSection = () => {
  const productionProjects = works.filter((w) =>
    w.attributes.some((a) => a.name === 'Status' && a.value.toString().includes('Produção')),
  ).length;
  const developmentProjects = works.filter((w) =>
    w.attributes.some((a) => a.name === 'Status' && a.value.toString().includes('Desenvolvimento')),
  ).length;
  const earliestYear = experiences
    .map((e) => parseInt(e.startDate.replace(/[^0-9]/g, '')))
    .filter((n) => !isNaN(n))
    .reduce((min, y) => (y < min ? y : min), new Date().getFullYear());
  const yearsOfExperience = new Date().getFullYear() - earliestYear;

  const stats = [
    {
      icon: FiActivity,
      number: productionProjects.toString(),
      label: 'Projetos em Produção',
      description: 'Aplicações SaaS e Apps ativos',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: FiCode,
      number: developmentProjects.toString(),
      label: 'Em Desenvolvimento',
      description: 'Funcionalidades & novas plataformas',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiTrendingUp,
      number: yearsOfExperience.toString(),
      label: 'Anos de Experiência',
      description: 'Construindo soluções digitais completas',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: FiUsers,
      number: 'Multi-tenant',
      label: 'Arquitetura',
      description: 'Plataformas escaláveis para múltiplos clientes',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: FiAward,
      number: '100%',
      label: 'Dedicação',
      description: 'Foco diário em qualidade e evolução',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FiZap,
      number: 'API / Bluetooth',
      label: 'Integrações',
      description: 'Apps conectados a dispositivos e serviços',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] dark:hidden">
        <div className="absolute inset-0" style={getPatternStyle('#1f2937')} />
      </div>
      <div className="absolute inset-0 hidden opacity-5 dark:block">
        <div className="absolute inset-0" style={getPatternStyle('#ffffff')} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 dark:bg-primary-500/20 rounded-full mb-4">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
              📊 MÉTRICAS & IMPACTO
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Indicadores <span className="text-primary-500">Profissionais</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Uma visão resumida do estágio atual dos projetos, experiência acumulada e foco diário nas
            entregas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative surface-card p-6 hover:border-primary-500 transition-all duration-300 hover:scale-[1.02]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  />

                  <div
                    className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-3 relative`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>

                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
