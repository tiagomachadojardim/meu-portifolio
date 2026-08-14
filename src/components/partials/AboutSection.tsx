'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiLayers,
  FiTrendingUp,
  FiZap,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
} from 'react-icons/fi';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import { experiences } from '@/data/experiences';
import { works } from '@/data/works';
import { startups } from '@/data/startups';
import { LATTES_URL } from '@/data/education';

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    description: 'Envie um email direto',
    value: 'tiagomachadojardim@gmail.com',
    link: 'mailto:tiagomachadojardim@gmail.com',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: SiWhatsapp,
    title: 'WhatsApp',
    description: 'Fale comigo agora',
    value: '(53) 99705-4143',
    link: 'https://wa.me/5553997054143?text=Ol%C3%A1%20Tiago%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiGithub,
    title: 'GitHub',
    description: 'Veja meus repositórios',
    value: '@tiagomachadojardim',
    link: 'https://github.com/tiagomachadojardim',
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: FiLinkedin,
    title: 'LinkedIn',
    description: 'Conecte-se profissionalmente',
    value: '/in/tiagojardim-tech',
    link: 'https://www.linkedin.com/in/tiagojardim-tech',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: SiInstagram,
    title: 'Instagram',
    description: 'Acompanhe meu dia a dia',
    value: '@tiago.machado.jardim',
    link: 'https://instagram.com/tiago.machado.jardim',
    color: 'from-pink-500 to-purple-600',
  },
  {
    icon: FiExternalLink,
    title: 'Lattes',
    description: 'Currículo acadêmico completo',
    value: 'CNPq Lattes',
    link: LATTES_URL,
    color: 'from-indigo-500 to-purple-600',
  },
];

const AboutSection = () => {
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
    { icon: FiCode, number: productionProjects.toString(), label: 'Produtos em Produção' },
    { icon: FiLayers, number: '3', label: 'Startups Ativas' },
    { icon: FiTrendingUp, number: developmentProjects.toString(), label: 'Em Desenvolvimento' },
    { icon: FiZap, number: yearsOfExperience.toString(), label: 'Anos de Experiência' },
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
            Bacharel em Engenharia de Computação, empreendedor e desenvolvedor full stack. Atuo na
            criação de produtos digitais de ponta a ponta, da modelagem ao deploy.
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
              <span className="font-semibold text-primary-500">Formação:</span> Bacharel em
              Engenharia de Computação pela UNIPAMPA e Tecnólogo em Análise e Desenvolvimento de
              Sistemas pela UniCesumar.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <span className="font-semibold text-primary-500">Empreendedorismo:</span> Sou CEO e
              cofundador da{' '}
              <a
                href="https://www.bientech.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Bientech
              </a>
              , cofundador da{' '}
              <a
                href="https://www.sanaretech.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Sanaretech
              </a>{' '}
              e da{' '}
              <a
                href="https://vespper.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Vespper
              </a>
              . Lidero o desenvolvimento de plataformas SaaS, apps mobile, IoMT e marketplaces em
              HealthTech e soluções digitais.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <span className="font-semibold text-primary-500">Atuação técnica:</span> Com{' '}
              {yearsOfExperience} anos de experiência, domino o ciclo completo de engenharia de
              software, da modelagem ao back-end, front-end e banco de dados, com foco em Laravel,
              PostgreSQL, Flutter e React. Passei pela Embrapa Pecuária Sul, Compass.uol e atuação
              freelance antes de empreender.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Laravel', 'Flutter', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ),
              )}
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
                className="surface-card text-center p-5"
              >
                <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Minhas <span className="text-primary-500">Startups</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {startups.map((startup, index) => (
              <motion.a
                key={startup.name}
                href={startup.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block surface-card-interactive p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {startup.name}
                  </h4>
                  <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-500" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{startup.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experiência Profissional
          </h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.startDate}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="surface-card p-6"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.jobTitle}
                </h4>
                <p className="text-primary-500 font-semibold mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Vamos <span className="text-primary-500">Conversar</span>
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Escolha o melhor canal para entrar em contato. Estou disponível para discutir novos
            projetos, parcerias e oportunidades.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <div className="relative surface-card-interactive p-6 h-full">
                      <div
                        className={`inline-flex p-3 bg-gradient-to-br ${info.color} rounded-xl mb-4`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {info.description}
                      </p>
                      <p className="text-sm font-medium text-primary-500 group-hover:text-primary-600">
                        {info.value}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
