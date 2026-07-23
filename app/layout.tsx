import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Ajay Patel | Software Developer',
  description: 'Portfolio of Ajay Patel, an experienced software developer specializing in React.js, Node.js, and modern web technologies.',
  keywords: 'software developer, web developer, react developer, nodejs developer, portfolio',
  authors: [{ name: 'Ajay Patel' }],
  creator: 'Ajay Patel',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-ajay-patel-software-developer.vercel.app/',
    title: 'Ajay Patel | Software Developer',
    description: 'Portfolio of Ajay Patel, an experienced software developer specializing in React.js, Node.js, and modern web technologies.',
    siteName: 'Ajay Patel Portfolio',
    images: [
      {
        url: 'https://portfolio-ajay-patel-software-developer.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ajay Patel Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajay Patel | Software Developer',
    description: 'Portfolio of Ajay Patel, an experienced software developer specializing in React.js, Node.js, and modern web technologies.',
    creator: '@ajaypatel7232773',
    images: ['https://portfolio-ajay-patel-software-developer.vercel.app/twitter-image.jpg'],
  },
};

import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}