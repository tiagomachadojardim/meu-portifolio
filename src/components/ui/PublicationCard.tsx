import type { Publication } from '@/types';
import {
  getPublicationTypeLabel,
  getPublicationTypeStyle,
} from '@/utils/publication';
import { FiBookOpen, FiExternalLink, FiFileText } from 'react-icons/fi';

type PublicationCardProps = {
  publication: Publication;
};

export default function PublicationCard({ publication }: PublicationCardProps) {
  const typeLabel = getPublicationTypeLabel(publication.type);
  const typeStyle = getPublicationTypeStyle(publication.type);

  return (
    <article className="surface-card-interactive p-6 h-full flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${typeStyle}`}
        >
          {typeLabel}
        </span>
        <span className="text-sm font-semibold text-primary-500 shrink-0">
          {publication.year}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">
        {publication.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">Autores:</span>{' '}
        {publication.authors}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">Evento:</span>{' '}
        {publication.event}
        {publication.location ? ` — ${publication.location}` : ''}
      </p>

      {publication.publisher && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span className="font-medium text-gray-700 dark:text-gray-300">Publicação:</span>{' '}
          {publication.publisher}
          {publication.pages ? `, p. ${publication.pages}` : ''}
        </p>
      )}

      {publication.description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 flex-1">
          {publication.description}
        </p>
      )}

      {(publication.pdfUrl || publication.externalUrl) && (
        <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
          {publication.pdfUrl && (
            <a
              href={publication.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
            >
              <FiFileText className="w-4 h-4" />
              Baixar PDF
            </a>
          )}
          {publication.externalUrl && publication.type !== 'tcc' && (
            <a
              href={publication.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              Ver publicação
            </a>
          )}
          {publication.type === 'tcc' && (
            <span className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <FiBookOpen className="w-4 h-4" />
              Trabalho de conclusão de curso
            </span>
          )}
        </div>
      )}
    </article>
  );
}
