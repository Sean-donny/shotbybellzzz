import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Cal_Sans,
  Petit_Formal_Script,
} from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const calSans = Cal_Sans({
  variable: '--font-cal-sans',
  subsets: ['latin'],
  weight: '400',
});

const petitFormalScript = Petit_Formal_Script({
  variable: '--font-petit-formal-script',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Shot by Bellzzz',
  description: 'Photographer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${calSans.variable} ${petitFormalScript.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
