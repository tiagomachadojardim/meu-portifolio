import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formação Acadêmica',
  description:
    'Graduações, bootcamps e cursos de Tiago Jardim — Engenharia da Computação (UNIPAMPA), ADS (UniCesumar) e formação complementar.',
};

export default function FormacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
