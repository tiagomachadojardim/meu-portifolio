'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

// Dados mock para o blog
const blogPosts = [
  {
    id: 1,
    title: 'Como Construir uma Aplicação Full Stack com Next.js',
    excerpt: 'Aprenda a criar uma aplicação completa usando Next.js, TypeScript e Tailwind CSS. Desde a configuração inicial até o deploy em produção.',
    content: 'Conteúdo completo do post...',
    publishedAt: '15 Dezembro 2024',
    author: 'Tiago Silva',
    category: 'Desenvolvimento Web',
    readTime: '8 min',
    image: '/images/blog/nextjs-guide.jpg'
  },
  {
    id: 2,
    title: 'Melhores Práticas para Desenvolvimento React',
    excerpt: 'Descubra as melhores práticas e padrões para escrever código React limpo, performático e maintível.',
    content: 'Conteúdo completo do post...',
    publishedAt: '10 Dezembro 2024',
    author: 'Tiago Silva',
    category: 'React',
    readTime: '6 min',
    image: '/images/blog/react-best-practices.jpg'
  },
  {
    id: 3,
    title: 'Introdução ao TypeScript para Desenvolvedores JavaScript',
    excerpt: 'Aprenda os conceitos fundamentais do TypeScript e como migrar gradualmente seus projetos JavaScript.',
    content: 'Conteúdo completo do post...',
    publishedAt: '5 Dezembro 2024',
    author: 'Tiago Silva',
    category: 'TypeScript',
    readTime: '10 min',
    image: '/images/blog/typescript-intro.jpg'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Início
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Meu <span className="text-primary-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Artigos sobre desenvolvimento, tecnologia e minhas experiências como desenvolvedor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      {post.publishedAt}
                    </div>
                    <div className="flex items-center">
                      <FiUser className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    Ler Mais
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Nenhum post encontrado.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
