'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { publications } from '@/data/publications';
import { LATTES_URL } from '@/data/education';
import PublicationCard from '@/components/ui/PublicationCard';
import PublicationFilters from '@/components/ui/PublicationFilters';
import {
  filterPublications,
  type PublicationFilter,
} from '@/utils/publication';

export default function PublicacoesPage() {
  const [activeType, setActiveType] = useState<PublicationFilter>('all');

  const filteredPublications = useMemo(
    () => filterPublications(publications, activeType),
    [activeType],
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
              Publicações <span className="text-primary-500">Acadêmicas</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              TCC, artigos completos e resumos apresentados em congressos e simpósios nas áreas
              de computação aplicada à saúde e fisioterapia pediátrica.
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <PublicationFilters
            activeType={activeType}
            onTypeChange={setActiveType}
            resultCount={filteredPublications.length}
            totalCount={publications.length}
          />

          {filteredPublications.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPublications.map((publication, index) => (
                <motion.div
                  key={publication.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <PublicationCard publication={publication} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Nenhuma publicação encontrada com o filtro selecionado.
              </p>
              <button
                type="button"
                onClick={() => setActiveType('all')}
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
