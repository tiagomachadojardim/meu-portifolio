import type { Work } from '@/types';

export type WorkStatusVariant =
  | 'production'
  | 'published'
  | 'development'
  | 'completed'
  | 'unknown';

const STATUS_STYLES: Record<
  WorkStatusVariant,
  { label: string; badge: string; dot: string }
> = {
  production: {
    label: 'Em Produção',
    badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    dot: 'bg-green-500',
  },
  published: {
    label: 'Publicado',
    badge: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    dot: 'bg-blue-500',
  },
  development: {
    label: 'Em Desenvolvimento',
    badge: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    dot: 'bg-yellow-500',
  },
  completed: {
    label: 'Concluído',
    badge: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
    dot: 'bg-gray-500',
  },
  unknown: {
    label: 'Status desconhecido',
    badge: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
    dot: 'bg-gray-400',
  },
};

export function getWorkStatus(attributes: Work['attributes']): string | undefined {
  return attributes.find((attr) => attr.name === 'Status')?.value.toString();
}

export function getWorkStatusVariant(status?: string): WorkStatusVariant {
  if (!status) return 'unknown';

  const normalized = status.toLowerCase();

  if (normalized.includes('produção') || normalized.includes('producao')) {
    return 'production';
  }
  if (normalized.includes('publicado')) {
    return 'published';
  }
  if (normalized.includes('desenvolvimento')) {
    return 'development';
  }
  if (normalized.includes('concluído') || normalized.includes('concluido')) {
    return 'completed';
  }

  return 'unknown';
}

export function getWorkStatusConfig(attributes: Work['attributes']) {
  const status = getWorkStatus(attributes);
  const variant = getWorkStatusVariant(status);
  const styles = STATUS_STYLES[variant];

  return {
    variant,
    label: status || styles.label,
    badge: styles.badge,
    dot: styles.dot,
  };
}

export function getWorkTechnologies(attributes: Work['attributes']): string[] {
  const technologies = attributes.find((attr) => attr.name === 'Tecnologias')?.value;

  if (!technologies) return [];

  return technologies
    .toString()
    .split(',')
    .map((tech) => tech.trim())
    .filter(Boolean);
}

export type WorkStatusFilter = WorkStatusVariant | 'all';

export const WORK_STATUS_FILTERS: { id: WorkStatusFilter; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'production', label: 'Em Produção' },
  { id: 'development', label: 'Em Desenvolvimento' },
  { id: 'completed', label: 'Concluído' },
];

export function getWorkCategories(worksList: Work[]): string[] {
  return Array.from(new Set(worksList.map((work) => work.category))).sort();
}

export function filterWorks(
  worksList: Work[],
  category: string,
  status: WorkStatusFilter,
): Work[] {
  return worksList.filter((work) => {
    const matchesCategory = category === 'all' || work.category === category;
    const workVariant = getWorkStatusVariant(getWorkStatus(work.attributes));
    const matchesStatus = status === 'all' || workVariant === status;

    return matchesCategory && matchesStatus;
  });
}
