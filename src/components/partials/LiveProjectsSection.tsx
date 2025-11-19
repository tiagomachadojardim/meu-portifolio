'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiExternalLink, FiActivity, FiUsers, FiTrendingUp, FiCode } from 'react-icons/fi';

const LiveProjectsSection = () => {
  const liveProjects = [
    {
      name: 'PulmoScan Platform',
      type: 'SaaS em Produção',
      description: 'Plataforma completa de gestão para saúde respiratória. Sistema multi-tenant em produção com 3 clientes ativos.',
      url: 'https://bientech.com.br',
      status: 'Em Produção',
      statusColor: 'bg-green-500',
      metrics: [
        { label: 'Status', value: 'Online', icon: FiActivity },
        { label: 'Clientes', value: '3', icon: FiUsers },
        { label: 'Uptime', value: '99%', icon: FiTrendingUp },
      ],
      tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Tailwind'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'PulmoScan App',
      type: 'Mobile Application',
      description: 'Aplicativo mobile Android para coleta e análise de dados respiratórios em tempo real.',
      url: 'https://play.google.com/store',
      status: 'Publicado',
      statusColor: 'bg-green-500',
      metrics: [
        { label: 'Plataforma', value: 'Android', icon: FiCode },
        { label: 'Status', value: 'Ativo', icon: FiUsers },
        { label: 'Versão', value: '1.0', icon: FiTrendingUp },
      ],
      tech: ['Flutter', 'Dart', 'Firebase'],
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'PulmoGame',
      type: 'Gamificação Mobile',
      description: 'Aplicativo de gamificação para exercícios respiratórios, tornando a reabilitação mais envolvente.',
      url: 'https://bientech.com.br',
      status: 'Em Produção',
      statusColor: 'bg-green-500',
      metrics: [
        { label: 'Plataforma', value: 'Android', icon: FiCode },
        { label: 'Tipo', value: 'Gamificação', icon: FiActivity },
        { label: 'Status', value: 'Ativo', icon: FiTrendingUp },
      ],
      tech: ['Flutter', 'Dart', 'Bluetooth'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'PulmoFlow Platform',
      type: 'SaaS em Desenvolvimento',
      description: 'Nova plataforma de gestão para análise avançada de função pulmonar, atualmente em desenvolvimento.',
      url: 'https://bientech.com.br',
      status: 'Em Desenvolvimento',
      statusColor: 'bg-yellow-500',
      metrics: [
        { label: 'Status', value: 'Beta', icon: FiCode },
        { label: 'Progresso', value: '70%', icon: FiActivity },
        { label: 'Previsão', value: '2025', icon: FiTrendingUp },
      ],
      tech: ['Next.js', 'Laravel', 'PostgreSQL'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'PulmoFlow App',
      type: 'Mobile em Desenvolvimento',
      description: 'Aplicativo mobile para o sistema PulmoFlow, com recursos avançados de análise pulmonar.',
      url: 'https://bientech.com.br',
      status: 'Em Desenvolvimento',
      statusColor: 'bg-yellow-500',
      metrics: [
        { label: 'Plataforma', value: 'Android', icon: FiCode },
        { label: 'Progresso', value: '60%', icon: FiActivity },
        { label: 'Previsão', value: '2025', icon: FiTrendingUp },
      ],
      tech: ['Flutter', 'Dart', 'Firebase'],
      gradient: 'from-indigo-500 to-blue-600'
    },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {liveProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Header com gradiente */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <Link 
                    href={project.url}
                    target="_blank"
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-sm opacity-90">{project.type}</p>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 ${project.statusColor} rounded-full animate-pulse`}></span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {project.status}
                  </span>
                </div>

                {/* Descrição */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Métricas */}
                <div className="space-y-3 mb-6">
                  {project.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-primary-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">{metric.value}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer com link */}
              <div className="px-6 pb-6">
                <Link 
                  href={project.url}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors group"
                >
                  Acessar Projeto
                  <FiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA removida: seção unificada já lista os projetos principais */}
      </div>
    </section>
  );
};

export default LiveProjectsSection;
