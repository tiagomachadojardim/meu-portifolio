'use client';

import type { ReactNode } from 'react';
import classNames from 'classnames';
import {
  PUBLICATION_TYPE_FILTERS,
  type PublicationFilter,
} from '@/utils/publication';

type PublicationFiltersProps = {
  activeType: PublicationFilter;
  onTypeChange: (type: PublicationFilter) => void;
  resultCount: number;
  totalCount: number;
};

export default function PublicationFilters({
  activeType,
  onTypeChange,
  resultCount,
  totalCount,
}: PublicationFiltersProps) {
  return (
    <div className="mb-12 space-y-4">
      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        Tipo de publicação
      </p>
      <div className="flex flex-wrap gap-3">
        {PUBLICATION_TYPE_FILTERS.map((filter) => (
          <FilterButton
            key={filter.id}
            active={activeType === filter.id}
            onClick={() => onTypeChange(filter.id)}
          >
            {filter.label}
          </FilterButton>
        ))}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Exibindo {resultCount} de {totalCount} publicações
      </p>
    </div>
  );
}

type FilterButtonProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
};

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
        active
          ? 'bg-primary-500 text-white'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 border border-gray-200 dark:border-gray-700',
      )}
    >
      {children}
    </button>
  );
}
