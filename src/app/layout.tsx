import type { Metadata } from 'next';
import './globals.css';
import { SNavBar } from '@/components/navbar';
import { SRecoilRoot } from '@/states';

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
      <body className="bg-slate-100 h-screen w-screen">
        <SRecoilRoot>
          <SNavBar />
          {children}
        </SRecoilRoot>
      </body>
    </html>
  );
}
