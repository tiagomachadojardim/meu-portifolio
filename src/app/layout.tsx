import type { Metadata } from "next";
import Script from "next/script";
import { Rubik } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";
import { LATTES_URL } from "@/data/education";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Tiago Jardim - Desenvolvedor Full Stack & Empreendedor",
    template: "%s | Tiago Jardim",
  },
  description:
    "Desenvolvedor Full Stack e cofundador de startups (Bientech, Vespper, Sanaretech). Especializado em SaaS, apps mobile, HealthTech e plataformas web com Laravel, Flutter e React.",
  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: 'Tiago Jardim',
    title: 'Tiago Jardim - Desenvolvedor Full Stack & Empreendedor',
    description:
      'Desenvolvedor Full Stack e cofundador de startups (Bientech, Vespper, Sanaretech). Especializado em SaaS, apps mobile, HealthTech e plataformas web.',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiago Jardim - Desenvolvedor Full Stack & Empreendedor',
    description:
      'Desenvolvedor Full Stack e cofundador de startups (Bientech, Vespper, Sanaretech). Especializado em SaaS, apps mobile e HealthTech.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="pt-BR" suppressHydrationWarning>
          <head>
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
              }}
            />
          </head>
          <body className={`${rubik.variable} font-sans antialiased`}>
            <Script id="jsonld-person" type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Tiago Jardim',
                url: baseUrl,
                jobTitle: 'Desenvolvedor Full Stack & Empreendedor',
                sameAs: [
                  'https://github.com/tiagomachadojardim',
                  'https://www.linkedin.com/in/tiagojardim-tech',
                  'https://www.bientech.com.br/',
                  'https://vespper.com.br/',
                  'https://www.sanaretech.com.br/',
                  LATTES_URL,
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
