import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ShitPoster',
  description: 'Post anything you like, free speech baby.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextTopLoader showSpinner={false} />
          <Header />
          {/* Style this main later to make every page the same */}
          <main className='min-h-screen flex justify-center'>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
