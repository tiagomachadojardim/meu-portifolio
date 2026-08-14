'use client';

import type { ReactNode } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import {
  WORK_STATUS_FILTERS,
  type WorkStatusFilter,
} from '@/utils/work-status';

type WorksFiltersProps = {
  categories: string[];
  activeCategory: string;
  activeStatus: WorkStatusFilter;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: WorkStatusFilter) => void;
  resultCount: number;
  totalCount: number;
};

const CATEGORY_LABELS: Record<string, string> = {
  'Web Development': 'Web',
  'Mobile App': 'Mobile',
};

const STATUS_DOTS: Partial<Record<WorkStatusFilter, string>> = {
  production: 'bg-green-500',
  development: 'bg-yellow-500',
  completed: 'bg-gray-400',
};

export default function WorksFilters({
  categories,
  activeCategory,
  activeStatus,
  onCategoryChange,
  onStatusChange,
  resultCount,
  totalCount,
}: WorksFiltersProps) {
  const hasActiveFilters = activeCategory !== 'all' || activeStatus !== 'all';

  const clearFilters = () => {
    onCategoryChange('all');
    onStatusChange('all');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-12 surface-card-interactive p-4 md:p-5"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">
        <FilterGroup label="Categoria">
          <FilterButton
            active={activeCategory === 'all'}
            onClick={() => onCategoryChange('all')}
            layoutId="category-indicator"
          >
            Todas
          </FilterButton>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeCategory === category}
              onClick={() => onCategoryChange(category)}
              layoutId="category-indicator"
            >
              {CATEGORY_LABELS[category] ?? category}
            </FilterButton>
          ))}
        </FilterGroup>

        <div className="hidden lg:block w-px self-stretch bg-gray-200 dark:bg-gray-700" />

        <FilterGroup label="Status">
          {WORK_STATUS_FILTERS.map((filter) => (
            <FilterButton
              key={filter.id}
              active={activeStatus === filter.id}
              onClick={() => onStatusChange(filter.id)}
              layoutId="status-indicator"
              dotClass={STATUS_DOTS[filter.id]}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterGroup>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Exibindo{' '}
          <motion.span
            key={resultCount}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-semibold text-gray-700 dark:text-gray-200"
          >
            {resultCount}
          </motion.span>{' '}
          de {totalCount} projetos
        </p>

        <AnimatePresence>
          {hasActiveFilters && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors"
            >
              <FiX className="w-3.5 h-3.5" />
              Limpar filtros
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

type FilterGroupProps = {
  label: string;
  children: ReactNode;
};

function FilterGroup({ label, children }: FilterGroupProps) {
  return (
    <div className="flex-1 min-w-0">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2.5 uppercase tracking-wider">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

type FilterButtonProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  layoutId: string;
  dotClass?: string;
};

function FilterButton({
  active,
  onClick,
  children,
  layoutId,
  dotClass,
}: FilterButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={classNames(
        'relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
        active
          ? 'text-white'
          : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700',
      )}
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 rounded-full bg-primary-500 shadow-sm shadow-primary-500/30"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {dotClass && (
          <span
            className={classNames(
              'w-2 h-2 rounded-full shrink-0',
              active ? 'bg-white/90' : dotClass,
            )}
          />
        )}
        {children}
      </span>
    </motion.button>
  );
}
