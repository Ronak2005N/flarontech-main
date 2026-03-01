import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-panther-heading',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-panther-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Panther — Thamilelelan · Flarontech',
  description: 'Full Stack Developer & Systems Builder',
};

export default function PantherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      {/* Override font-heading and font-mono within the panther page */}
      <style>{`
        .panther-page .font-heading,
        .panther-page h1, .panther-page h2, .panther-page h3 {
          font-family: var(--font-panther-heading, 'Space Grotesk'), sans-serif !important;
          letter-spacing: -0.02em;
        }
        .panther-page .font-mono,
        .panther-page code {
          font-family: var(--font-panther-mono, 'JetBrains Mono'), monospace !important;
        }
      `}</style>
      {children}
    </div>
  );
}
