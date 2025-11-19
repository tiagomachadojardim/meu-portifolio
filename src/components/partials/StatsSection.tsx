'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiActivity, FiTrendingUp, FiAward, FiGlobe, FiCheck } from 'react-icons/fi';

const StatsSection = () => {
  const stats = [
    {
      icon: FiUsers,
      number: '3',
      label: 'Clientes Ativos',
      description: 'Utilizando o PulmoScan Platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiGlobe,
      number: '5',
      label: 'Produtos',
      description: 'Entre produção e desenvolvimento',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiCheck,
      number: '3',
      label: 'Em Produção',
      description: 'Aplicações rodando ativamente',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: FiActivity,
      number: '99%',
      label: 'Uptime',
      description: 'Disponibilidade dos serviços',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiTrendingUp,
      number: '2',
      label: 'Anos',
      description: 'De experiência em desenvolvimento',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FiAward,
      number: '100%',
      label: 'Dedicação',
      description: 'Comprometimento com qualidade',
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full mb-4">
            <span className="text-primary-400 font-semibold text-sm">📊 MÉTRICAS & IMPACTO</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Números que <span className="text-primary-500">Falam por Si</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            O impacto real dos nossos produtos em números, mostrando o crescimento e a confiança dos usuários
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
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-xl mb-4 relative`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA removida conforme solicitação */}
      </div>
    </section>
  );
};

export default StatsSection;
