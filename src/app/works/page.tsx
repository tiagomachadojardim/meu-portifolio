'use client';

import { useMemo, useState } from 'react';
import { works } from '@/data/works';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import WorksFilters from '@/components/ui/WorksFilters';
import {
  filterWorks,
  getWorkCategories,
  type WorkStatusFilter,
} from '@/utils/work-status';

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatus, setActiveStatus] = useState<WorkStatusFilter>('all');

  const categories = useMemo(() => getWorkCategories(works), []);

  const filteredWorks = useMemo(
    () => filterWorks(works, activeCategory, activeStatus),
    [activeCategory, activeStatus],
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Meus <span className="text-primary-500">Projetos</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Uma coleção completa dos projetos que desenvolvi, desde aplicações web até sistemas mobile.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <WorksFilters
            categories={categories}
            activeCategory={activeCategory}
            activeStatus={activeStatus}
            onCategoryChange={setActiveCategory}
            onStatusChange={setActiveStatus}
            resultCount={filteredWorks.length}
            totalCount={works.length}
          />

          {filteredWorks.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="surface-card overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <ProjectCard work={work} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Nenhum projeto encontrado com os filtros selecionados.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setActiveStatus('all');
                }}
                className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
