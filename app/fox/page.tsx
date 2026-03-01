'use client';

import { FoxNavbar } from './components/FoxNavbar';
import { FoxHero } from './components/FoxHero';
import { FoxAbout } from './components/FoxAbout';
import { FoxSkills } from './components/FoxSkills';
import { FoxProjects } from './components/FoxProjects';
import { FoxActionCards } from './components/FoxActionCards';
import { FoxExperience } from './components/FoxExperience';
import { FoxEducation } from './components/FoxEducation';
import { FoxContact } from './components/FoxContact';
import { FoxFooter } from './components/FoxFooter';

export default function FaheemPage() {
  return (
    <main className="bg-[#1f1f1f] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <FoxNavbar />
      <FoxHero />
      <FoxAbout />
      <FoxSkills />
      <FoxProjects />
      <FoxActionCards />
      <FoxExperience />
      <FoxEducation />
      <FoxContact />
      <FoxFooter />
    </main>
  );
}
