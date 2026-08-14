'use client';

import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiExternalLink } from 'react-icons/fi';
import { education, LATTES_URL } from '@/data/education';
import { courses } from '@/data/courses';
import type { CourseCategory } from '@/types';

const CATEGORY_LABELS: Record<CourseCategory, string> = {
  bootcamp: 'Bootcamps e bolsas',
  online: 'Cursos online',
};

export default function FormacaoPage() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'all'>('all');

  const courseCategories = useMemo(() => {
    const categories = Array.from(new Set(courses.map((course) => course.category)));
    return categories as CourseCategory[];
  }, []);

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'all') return courses;
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  const totalHours = courses.reduce(
    (sum, course) => sum + (course.workloadHours ?? 0),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Formação <span className="text-primary-500">Acadêmica</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Graduações, bootcamps e cursos complementares que fundamentam minha atuação em
              engenharia de software e HealthTech.
            </p>
            <a
              href={LATTES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              Currículo Lattes
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FiAward className="w-6 h-6 text-primary-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Graduação
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="surface-card p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <span className="text-sm font-semibold text-primary-500">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {item.school}
                </p>
                {item.description && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {item.description}
                  </p>
                )}
                {item.researchGroup && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      Grupo de pesquisa:{' '}
                    </span>
                    <a
                      href={item.researchGroup.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center gap-1"
                    >
                      {item.researchGroup.name}
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                )}
                {item.thesisTitle && (
                  <div className="mt-4 p-4 rounded-lg surface-card">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
                      TCC
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {item.thesisTitle}
                    </p>
                    {item.advisor && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Orientador: {item.advisor}
                      </p>
                    )}
                    <Link
                      href="/publicacoes"
                      className="inline-block mt-3 text-sm font-medium text-primary-500 hover:text-primary-600"
                    >
                      Ver na página de publicações →
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <FiBook className="w-6 h-6 text-primary-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Cursos e bootcamps
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {courses.length} cursos · {totalHours}h de carga horária registrada
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <CategoryButton
              active={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            >
              Todos
            </CategoryButton>
            {courseCategories.map((category) => (
              <CategoryButton
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {CATEGORY_LABELS[category]}
              </CategoryButton>
            ))}
          </div>

          <div className="space-y-4">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="flex flex-col sm:flex-row sm:items-start gap-3 p-5 surface-card"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                      {CATEGORY_LABELS[course.category]}
                    </span>
                  </div>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {course.institution} · {course.completedAt}
                    {course.workloadHours ? ` · ${course.workloadHours}h` : ''}
                  </p>
                  {course.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {course.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

type CategoryButtonProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
};

function CategoryButton({ active, onClick, children }: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
        active
          ? 'bg-primary-500 text-white'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900'
      }`}
    >
      {children}
    </button>
  );
}
