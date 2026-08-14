import ImageCarousel from '@/components/ui/ImageCarousel';
import StatusBadge from '@/components/ui/StatusBadge';
import type { Work } from '@/types';
import { getTechIcon } from '@/utils/tech-icons';
import { getWorkStatus, getWorkStatusVariant, getWorkTechnologies } from '@/utils/work-status';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

type ProjectCardProps = {
  work: Work;
  showTechIcons?: boolean;
};

function isExternalProductUrl(url: string) {
  return !url.includes('github.com') && !url.includes('play.google.com');
}

export default function ProjectCard({ work, showTechIcons = true }: ProjectCardProps) {
  const technologies = getWorkTechnologies(work.attributes);
  const isInDevelopment = getWorkStatusVariant(getWorkStatus(work.attributes)) === 'development';
  const previewUrl = work.previewUrl;
  const showPreviewLink =
    Boolean(previewUrl) && isExternalProductUrl(previewUrl) && !isInDevelopment;

  return (
    <>
      <ImageCarousel
        images={work.images.length > 0 ? work.images : [work.thumbnailUrl]}
        alt={work.title}
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{work.title}</h3>

        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <StatusBadge attributes={work.attributes} />
          <span className="px-2.5 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded-full">
            {work.category}
          </span>
        </div>

        {work.description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{work.description}</p>
        )}

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => {
              const Icon = showTechIcons ? getTechIcon(tech) : undefined;

              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {tech}
                </span>
              );
            })}
          </div>
        )}

        {showPreviewLink && previewUrl && (
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
          >
            <FiExternalLink className="w-4 h-4" />
            Acessar projeto
          </Link>
        )}
      </div>
    </>
  );
}

