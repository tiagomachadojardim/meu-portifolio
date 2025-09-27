'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Input from '@/components/form/Input';
import Textarea from '@/components/form/Textarea';
import Button from '@/components/form/Button';

export default function ContactPage() {
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
              Entre em <span className="text-primary-500">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Vamos conversar sobre seu próximo projeto. Estou sempre disponível para discutir novas oportunidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Vamos conversar
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Estou sempre interessado em novos projetos e oportunidades. 
                  Se você tem uma ideia ou precisa de ajuda com seu projeto, 
                  não hesite em entrar em contato!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                      <FiMail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Email
                      </h3>
                      <a
                        href="mailto:tiago@exemplo.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                      >
                        tiago@exemplo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                      <FiPhone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Telefone
                      </h3>
                      <a
                        href="tel:+5511999999999"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                      >
                        +55 (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                      <FiMapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Localização
                      </h3>
                      <span className="text-gray-600 dark:text-gray-300">
                        São Paulo, SP - Brasil
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Envie uma Mensagem
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Nome"
                      name="name"
                      required
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      required
                    />
                  </div>

                  <Input
                    label="Assunto"
                    name="subject"
                    required
                  />

                  <Textarea
                    label="Mensagem"
                    name="message"
                    rows={6}
                    required
                  />

                  <Button type="submit" size="lg" className="w-full">
                    <FiSend className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
