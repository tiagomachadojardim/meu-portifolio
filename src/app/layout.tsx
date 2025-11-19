import type { Metadata } from "next";
import Script from "next/script";
import { Rubik } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Tiago Jardim - Desenvolvedor Full Stack & Fundador",
    template: "%s | Tiago Jardim",
  },
  description: "Desenvolvedor Full Stack, fundador da Bientech. Especializado em criar soluções digitais completas: SaaS, aplicativos mobile e plataformas web.",
  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: 'Tiago Jardim',
    title: 'Tiago Jardim - Desenvolvedor Full Stack & Fundador',
    description: 'Desenvolvedor Full Stack, fundador da Bientech. Especializado em criar soluções digitais completas: SaaS, aplicativos mobile e plataformas web.',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiago Jardim - Desenvolvedor Full Stack & Fundador',
    description: 'Desenvolvedor Full Stack, fundador da Bientech. Especializado em criar soluções digitais completas: SaaS, aplicativos mobile e plataformas web.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="pt-BR" suppressHydrationWarning>
          <body className={`${rubik.variable} font-sans antialiased`}>
            <Script id="jsonld-person" type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Tiago Jardim',
                url: baseUrl,
                jobTitle: 'Desenvolvedor Full Stack & Fundador',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Bientech'
                },
                sameAs: [
                  'https://github.com/tiagomachadojardim',
                  'https://www.linkedin.com/in/tiagojardim-tech'
                ]
              })}
            </Script>
            <ClientProviders>
              {children}
            </ClientProviders>
          </body>
        </html>
  );
}
