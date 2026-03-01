'use client';

import React, { useState } from 'react';
import PantherNav from '@/components/ui/PantherNav';
import PantherHero from '@/components/ui/PantherHero';
import PantherAbout from '@/components/ui/PantherAbout';
import PantherSkills from '@/components/ui/PantherSkills';
import PantherExperience from '@/components/ui/PantherExperience';
import PantherProjects from '@/components/ui/PantherProjects';
import PantherContact from '@/components/ui/PantherContact';
import PantherForestHub from '@/components/ui/PantherForestHub';
import PantherFooter from '@/components/ui/PantherFooter';

export default function PantherPage() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main
      className={`panther-page ${isDark ? 'panther-dark' : 'panther-light'} min-h-screen bg-[var(--p-bg)] text-[var(--p-text)] selection:bg-[var(--p-accent)] selection:text-[var(--p-invert-text)] transition-colors duration-300`}
    >
      <PantherNav isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />
      <PantherHero isDark={isDark} />
      <PantherAbout />
      <PantherSkills />
      <PantherExperience />
      <PantherProjects />
      <PantherContact />
      <PantherForestHub />
      <PantherFooter />
    </main>
  );
}
