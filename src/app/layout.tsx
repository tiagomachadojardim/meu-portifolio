import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio pessoal moderno e responsivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="pt-BR" suppressHydrationWarning>
          <body className={`${rubik.variable} font-sans antialiased`}>
            <ClientProviders>
              {children}
            </ClientProviders>
          </body>
        </html>
  );
}
