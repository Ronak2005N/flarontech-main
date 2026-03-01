import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './elephant-fonts.css';

const offbit = localFont({
  src: './Font/OffBit-DotBold.ttf',
  variable: '--font-offbit',
  display: 'swap',
});

const murai = localFont({
  src: './Font/Murai-FreeVersion.ttf',
  variable: '--font-murai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ronak - The Elephant | CIO Portfolio',
  description: 'Chief Information Officer portfolio showcasing system-level thinking, AI architecture, and strategic development.',
};

export default function ElephantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      className={`${offbit.variable} ${murai.variable} elephant-layout`}
    >
      {children}
    </div>
  );
}
