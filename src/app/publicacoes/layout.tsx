import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publicações Acadêmicas',
  description:
    'TCC, artigos e resumos apresentados por Tiago Jardim em congressos como SBCAS e eventos de fisioterapia pediátrica.',
};

export default function PublicacoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
