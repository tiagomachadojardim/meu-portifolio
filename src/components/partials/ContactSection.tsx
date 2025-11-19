'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMail, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      description: 'Envie um email direto',
      value: 'tiagomachadojardim@gmail.com',
      link: 'mailto:tiagomachadojardim@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: SiWhatsapp,
      title: 'WhatsApp',
      description: 'Fale comigo agora',
      value: '(53) 99705-4143',
      link: 'https://wa.me/5553997054143?text=Ol%C3%A1%20Tiago%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiGithub,
      title: 'GitHub',
      description: 'Veja meus repositórios',
      value: '@tiagomachadojardim',
      link: 'https://github.com/tiagomachadojardim',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      description: 'Conecte-se profissionalmente',
      value: '/in/tiagojardim-tech',
      link: 'https://www.linkedin.com/in/tiagojardim-tech',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: SiInstagram,
      title: 'Instagram',
      description: 'Acompanhe meu dia a dia',
      value: '@tiago.machado.jardim',
      link: 'https://instagram.com/tiago.machado.jardim',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: FiGlobe,
      title: 'Bientech',
      description: 'Conheça minha startup',
      value: 'bientech.com.br',
      link: 'https://bientech.com.br',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Vamos <span className="text-primary-500">Conversar</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Escolha o melhor canal para entrar em contato. Estou sempre disponível para discutir novos projetos e oportunidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="relative bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:border-primary-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`inline-flex p-4 bg-gradient-to-br ${info.color} rounded-xl mb-4 relative`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {info.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {info.description}
                    </p>
                    
                    {/* Value */}
                    <p className="text-sm font-medium text-primary-500 group-hover:text-primary-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
