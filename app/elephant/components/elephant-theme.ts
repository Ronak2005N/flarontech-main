// Elephant Theme - Corporate Premium Color System
// Charcoal, Slate, and Gold accents

export const elephantColors = {
  // Background layers
  bgDeep: '#0a0a0a',
  bgCharcoal: '#1a1a1a',
  bgDark: '#242424',
  bgCard: '#2a2a2a',
  
  // Slate gradients
  slate900: '#0f172a',
  slate800: '#1e293b',
  slate700: '#334155',
  slate600: '#475569',
  slate500: '#64748b',
  slate400: '#94a3b8',
  
  // Gold accent (primary)
  goldPrimary: '#d4af37',
  goldLight: '#DAA520',
  goldDark: '#b8941f',
  
  // Electric blue (AI elements)
  blueAccent: '#3b82f6',
  blueDark: '#2563eb',
  
  // Text colors
  textPrimary: '#ffffff',
  textSecondary: '#e2e8f0',
  textMuted: '#94a3b8',
  textDim: '#64748b',
  
  // Borders
  borderSubtle: 'rgba(212, 175, 55, 0.1)',
  borderGlow: 'rgba(212, 175, 55, 0.3)',
};

export const elephantGradients = {
  heroOverlay: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.3), rgba(10, 10, 10, 0.95))',
  cardHover: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(59, 130, 246, 0.05))',
  sectionDivider: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent)',
};

// Utility class strings for reuse
export const elephantClasses = {
  container: 'max-w-7xl mx-auto px-6 lg:px-8',
  sectionPadding: 'py-20 lg:py-32',
  cardBase: 'bg-[#2a2a2a] border border-[rgba(212,175,55,0.1)] rounded-lg',
  cardHover: 'transition-all duration-300 hover:border-[rgba(212,175,55,0.3)] hover:shadow-lg hover:shadow-[rgba(212,175,55,0.1)]',
  goldText: 'text-[#d4af37]',
  blueText: 'text-[#3b82f6]',
  heading: 'font-bold tracking-tight',
};
