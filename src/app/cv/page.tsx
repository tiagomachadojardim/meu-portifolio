import Link from 'next/link';

export const metadata = {
  title: 'Currículo | Tiago Jardim',
  description: 'Baixe o currículo de Tiago Jardim e conheça sua experiência e projetos.',
};

export default function CVPage() {
  const cvPath = '/cv/TiagoJardim-CV.pdf';

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Currículo</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Para baixar o meu currículo em PDF, use o botão abaixo. Se o arquivo não abrir, coloque seu PDF em <code className="px-1 rounded bg-gray-100 dark:bg-gray-800">public/cv/TiagoJardim-CV.pdf</code>.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 text-center"
          >
            Baixar PDF
          </a>
          <Link href="#dicas" className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 font-semibold text-center hover:border-primary-500 hover:text-primary-500">
            Onde colocar o arquivo?
          </Link>
        </div>

        <div id="dicas" className="mt-12 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-bold mb-2">Como configurar</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Crie a pasta <code className="px-1 rounded bg-gray-100 dark:bg-gray-700">public/cv</code> se ainda não existir.</li>
            <li>Coloque seu arquivo PDF com o nome <strong>TiagoJardim-CV.pdf</strong>.</li>
            <li>Acesse novamente esta página e clique em "Baixar PDF".</li>
          </ol>
          <p className="mt-4">Se preferir outro nome de arquivo, atualize o caminho no código desta página.</p>
        </div>
      </div>
    </section>
  );
}
