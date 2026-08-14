import type { Publication, PublicationType } from '@/types';

export type PublicationFilter = PublicationType | 'all';

export const PUBLICATION_TYPE_FILTERS: {
  id: PublicationFilter;
  label: string;
}[] = [
  { id: 'all', label: 'Todos' },
  { id: 'tcc', label: 'TCC' },
  { id: 'conference-paper', label: 'Artigos completos' },
  { id: 'extended-abstract', label: 'Resumos expandidos' },
  { id: 'abstract', label: 'Resumos' },
];

const PUBLICATION_TYPE_LABELS: Record<PublicationType, string> = {
  tcc: 'TCC',
  'conference-paper': 'Artigo completo',
  'extended-abstract': 'Resumo expandido',
  abstract: 'Resumo',
};

const PUBLICATION_TYPE_STYLES: Record<PublicationType, string> = {
  tcc: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'conference-paper':
    'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'extended-abstract':
    'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  abstract:
    'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
};

export function getPublicationTypeLabel(type: PublicationType): string {
  return PUBLICATION_TYPE_LABELS[type];
}

export function getPublicationTypeStyle(type: PublicationType): string {
  return PUBLICATION_TYPE_STYLES[type];
}

export function filterPublications(
  items: Publication[],
  type: PublicationFilter,
): Publication[] {
  if (type === 'all') return items;
  return items.filter((item) => item.type === type);
}
