import type { Metadata } from 'next';
import {
  Climate_Crisis,
  Boldonse,
  Cal_Sans,
  Petit_Formal_Script,
  LINE_Seed_JP,
} from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const climateCrisis = Climate_Crisis({
  variable: '--font-climate-crisis',
  subsets: ['latin'],
});

const boldonese = Boldonse({
  variable: '--font-boldonese',
  subsets: ['latin'],
  weight: '400',
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

const lineSeedJP = LINE_Seed_JP({
  variable: '--font-line-seed-jp',
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
        className={`${climateCrisis.variable} ${boldonese.variable} ${calSans.variable} ${petitFormalScript.variable} ${lineSeedJP.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
