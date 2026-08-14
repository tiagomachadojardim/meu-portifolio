import { getWorkStatusConfig } from '@/utils/work-status';
import type { Work } from '@/types';

type StatusBadgeProps = {
  attributes: Work['attributes'];
};

export default function StatusBadge({ attributes }: StatusBadgeProps) {
  const { label, badge, dot } = getWorkStatusConfig(attributes);

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badge}`}
    >
      <span className={`w-2 h-2 rounded-full mr-1.5 ${dot}`} />
      {label}
    </span>
  );
}
