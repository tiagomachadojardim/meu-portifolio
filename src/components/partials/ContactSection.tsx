'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import Input from '@/components/form/Input';
import Textarea from '@/components/form/Textarea';
import Button from '@/components/form/Button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (res.ok) {
        setFeedback(json.message || 'Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFeedback(json.error || 'Não foi possível enviar sua mensagem.');
      }
    } catch (error) {
      setFeedback('Erro ao enviar. Tente novamente mais tarde.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'tiagomachadojardim@gmail.com',
      link: 'mailto:tiagomachadojardim@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'WhatsApp',
      value: '(53) 99705-4143',
      link: 'https://wa.me/5553997054143?text=Ol%C3%A1%20Tiago%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.'
    },
    {
      icon: FiMapPin,
      title: 'Localização',
      value: 'Bagé - RS, Brasil',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Entre em <span className="text-primary-500">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Vamos conversar sobre seu próximo projeto. Estou sempre disponível para discutir novas oportunidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Vamos conversar
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Estou sempre interessado em novos projetos e oportunidades. 
              Se você tem uma ideia ou precisa de ajuda com seu projeto, 
              não hesite em entrar em contato!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="form-title">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"><FiUser /> Nome</label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"><FiMail /> Email</label>
                  <Input
                    id="email"
                    placeholder="seu@email.com"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"><FiMessageSquare /> Assunto</label>
                <Input
                  id="subject"
                  placeholder="Ex.: Desenvolvimento de aplicativo de saúde"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"><FiSend /> Mensagem</label>
                <Textarea
                  id="message"
                  placeholder="Descreva brevemente sua necessidade, prazo e qualquer detalhe relevante."
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleChange(e)}
                  rows={6}
                  required
                />
              </div>

              {feedback && (
                <div className="mb-2 text-sm text-center text-gray-600 dark:text-gray-300">{feedback}</div>
              )}
              <Button type="submit" className="w-full" disabled={submitting as any}>
                <FiSend className="w-5 h-5 mr-2" />
                {submitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
