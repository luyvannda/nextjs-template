import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SHeader } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next App template',
  description: 'This is a template for team work in Next App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SHeader />
        {children}
      </body>
    </html>
  );
}
