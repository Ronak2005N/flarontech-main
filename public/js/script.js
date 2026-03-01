/* ============================================
   FlaronTECH — Premium Animated Website JS
   ============================================ */

// ---- Register GSAP Plugins ----
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ============================================
// 1. PAGE LOADER
// ============================================
function runLoader() {
  const loader = document.querySelector('.page-loader');
  if (loader && !loader.classList.contains('loaded')) {
    setTimeout(() => {
      loader.classList.add('loaded');
      if (typeof initHeroAnimations === 'function') {
        initHeroAnimations();
      }
    }, 800);
  } else if (!loader) {
    if (typeof initHeroAnimations === 'function') {
      initHeroAnimations();
    }
  }
}

if (document.readyState === 'complete') {
  runLoader();
} else {
  window.addEventListener('load', runLoader);
}



// ============================================
// 3. SCROLL PROGRESS BAR
// ============================================
(function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  gsap.to(bar, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3
    }
  });
})();

// ============================================
// 4. NAVIGATION
// ============================================
(function initNav() {
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  // Scroll-based glass effect
  ScrollTrigger.create({
    start: 80,
    onUpdate: (self) => {
      if (self.scroll() > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  });

  // Mobile toggle
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileNav.classList.remove('open');
      });
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          scrollTo: { y: target, offsetY: 70 },
          duration: 1,
          ease: 'power3.inOut'
        });
      }
    });
  });
})();

// ============================================
// 5. CANVAS PARTICLE SYSTEM
// ============================================
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let animId;
  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 50 : 120;

  const colors = [
    'rgba(150, 191, 138, 0.4)',
    'rgba(3, 90, 82, 0.35)',
    'rgba(150, 191, 138, 0.2)',
    'rgba(255, 255, 255, 0.1)',
    'rgba(3, 90, 82, 0.2)'
  ];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.005 + Math.random() * 0.01
    };
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      // Organic drift
      p.phase += p.phaseSpeed;
      p.x += p.vx + Math.sin(p.phase) * 0.15;
      p.y += p.vy + Math.cos(p.phase) * 0.1;

      // Wrap around
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;

      // Draw particle with glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Connect nearby particles (desktop only)
      if (!isMobile) {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(150, 191, 138, ${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    });

    animId = requestAnimationFrame(draw);
  }

  init();
  draw();

  window.addEventListener('resize', () => {
    resize();
  });

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cancelAnimationFrame(animId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
})();

// ============================================
// 6. FLOATING GEOMETRIC SHAPES (Hero Parallax)
// ============================================
(function initFloatingShapes() {
  const shapes = document.querySelectorAll('.geo-shape');
  shapes.forEach((shape, i) => {
    const speed = 50 + Math.random() * 150;
    const direction = i % 2 === 0 ? -1 : 1;

    gsap.to(shape, {
      y: direction * speed,
      x: direction * (20 + Math.random() * 40),
      rotation: direction * (30 + Math.random() * 60),
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  });
})();

// ============================================
// 7. HERO ENTRANCE ANIMATIONS
// ============================================
function initHeroAnimations() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('.hero-logo', {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.2
  })
    .to('.company-name', {
      opacity: 1,
      y: 0,
      duration: 0.7
    }, '-=0.4')
    .to('.hero-title', {
      opacity: 1,
      duration: 0.1
    }, '-=0.3')
    .from('.hero-title .line span', {
      y: 80,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power4.out'
    }, '-=0.1')
    .to('.hero-tagline', {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, '-=0.4')
    .to('.hero-cta', {
      opacity: 1,
      y: 0,
      duration: 0.7
    }, '-=0.3')
    .to('.scroll-indicator', {
      opacity: 1,
      duration: 0.6
    }, '-=0.2');

  // Hero parallax on scroll
  gsap.to('.hero-content', {
    y: -80,
    opacity: 0.3,
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });
}

// ============================================
// 8. GEOMETRIC LOW-POLY ANIMAL SVGs
// ============================================
const animalSVGs = {
  dragon: `<img src="images/dragon logo vector1.svg" alt="Dragon" style="width: 130%; height: 130%; object-fit: contain;" />`,

  elephant: `<img src="images/elephant.png" alt="Elephant" style="width: 100%; height: 100%; object-fit: contain;" />`,

  octopus: `<img src="images/panthor.png" alt="Panthor" style="width: 100%; height: 100%; object-fit: contain;" />`,

  wolf: `<img src="images/falcon.png" alt="Falcon" style="width: 130%; height: 130%; object-fit: contain;" />`,

  tiger: `<img src="images/fox.png" alt="Fox" style="width: 130%; height: 130%; object-fit: contain;" />`
};

// ============================================
// 9. ABOUT SECTION — ANIMAL SHOWCASE ANIMATION
// ============================================
(function initAboutSection() {
  const teamMembers = [
    {
      name: 'Lokesh Kumar A R',
      role: 'Chief Executive Officer',
      animal: 'dragon',
      desc: 'Leading with fire and vision. A strategic mind that ignites innovation and drives the company toward uncharted territories.',
      animalName: '🐉 Dragon Spirit',
      portfolioUrl: '/dragon',
      portfolioIcon: '🐉',
      portfolioBtnClass: 'dragon-portal-btn'
    },
    {
      name: 'Ronak',
      role: 'Chief Technology Officer',
      animal: 'elephant',
      desc: 'Wise, resilient, and unforgettable. Building the technological backbone with steadfast determination and enormous impact.',
      animalName: '🐘 Elephant Strength',
      animalTypeUrl: '/elephant'
    },
    {
      name: 'Thamil',
      role: 'Chief Design Officer',
      animal: 'octopus',
      desc: 'Multi-talented and endlessly creative. Weaving design excellence across every touchpoint with fluid adaptability.',
      animalName: '🐈‍⬛ Panther Grace',
      portfolioUrl: '/panther',
      portfolioIcon: '🐈‍⬛',
      portfolioBtnClass: 'panther-portal-btn'
    },
    {
      name: 'Aravindh',
      role: 'Chief Operations Officer',
      animal: 'wolf',
      desc: 'Sharp instincts and pack leadership. Orchestrating operations with precision, loyalty, and relentless pursuit of excellence.',
      animalName: '🦅 Falcon Vision'
    },
    {
      name: 'Faheem',
      role: 'Chief Marketing Officer',
      animal: 'tiger',
      desc: 'Bold, striking, and impossible to ignore. Crafting brand narratives that leave a lasting impression on every audience.',
      animalName: '🦊 Fox Charm',
      animalTypeUrl: '/faheem'
    }
  ];

  // Inject slides HTML
  const container = document.getElementById('aboutSlides');
  if (!container) return;

  teamMembers.forEach((member, i) => {
    const slide = document.createElement('div');
    slide.className = 'animal-slide';
    slide.id = `slide-${i}`;
    slide.innerHTML = `
      <div class="animal-visual" data-tilt>
        ${animalSVGs[member.animal]}
      </div>
      <div class="animal-info">
        <h2 class="animal-name glow-text">${member.name}</h2>
        <p class="animal-role">${member.role}</p>
        <p class="animal-desc">${member.desc}</p>
        ${member.animalTypeUrl
          ? `<a href="${member.animalTypeUrl}" class="animal-type animal-type-link">${member.animalName}</a>`
          : `<span class="animal-type">${member.animalName}</span>`}
        ${member.portfolioUrl ? `
        <a href="${member.portfolioUrl}" class="${member.portfolioBtnClass}">
          <span class="${member.portfolioBtnClass}-icon">${member.portfolioIcon}</span>
          <span>View Portfolio</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>` : ''}
      </div>
    `;
    container.appendChild(slide);
  });

  // Create pinned scroll animation
  const slides = gsap.utils.toArray('.animal-slide');
  const totalSlides = slides.length;

  // Main timeline — pin entire #about section
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top top',
      end: `+=${totalSlides * 60}%`,
      pin: true,
      scrub: 1,
      anticipatePin: 1
    }
  });

  slides.forEach((slide, i) => {
    const visual = slide.querySelector('.animal-visual');
    const name = slide.querySelector('.animal-name');
    const role = slide.querySelector('.animal-role');
    const desc = slide.querySelector('.animal-desc');
    const type = slide.querySelector('.animal-type');

    // Each slide animation
    const slideTl = gsap.timeline();

    // Enter: animal pops up from bottom
    slideTl.fromTo(slide, { opacity: 0, pointerEvents: 'none' }, { opacity: 1, pointerEvents: 'auto', duration: 0.3 })
      .fromTo(visual, { y: 200, scale: 0.5, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }, '<')
      // Slide animal to left
      .to(visual, { x: -30, duration: 0.3, ease: 'power2.out' })
      // Name fades in 
      .fromTo(name, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: 'power3.out' }, '-=0.1')
      // Role fades in
      .fromTo(role, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.25, ease: 'power2.out' }, '-=0.1')
      // Description fades in
      .fromTo(desc, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out' }, '-=0.05')
      // Animal type badge
      .fromTo(type, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.2, ease: 'back.out(2)' }, '-=0.1')
      // Hold
      .to({}, { duration: 0.4 })
      // Exit
      .to(slide, { opacity: 0, y: -40, duration: 0.3, ease: 'power2.in', pointerEvents: 'none' });

    aboutTl.add(slideTl, i > 0 ? '-=0.1' : '0');
  });

  // Tilt effect on hover
  document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
      el.style.transition = 'transform 0.5s ease';
      setTimeout(() => { el.style.transition = ''; }, 500);
    });
  });
})();

// ============================================
// 10. SERVICES SECTION ANIMATION
// ============================================
(function initServices() {
  const cards = gsap.utils.toArray('.service-card');
  if (!cards.length) return;

  gsap.from(cards, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#services',
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  });
})();

// ============================================
// SERVICES CARD FLIP ANIMATION
// ============================================
(function initCardFlip() {
  const cards = document.querySelectorAll('.service-card');
  const flipTimeouts = new Map(); // Track timeout for each card

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const isCurrentlyFlipped = this.classList.contains('flipped');

      // If this card is already flipped, flip it back immediately
      if (isCurrentlyFlipped) {
        this.classList.remove('flipped');
        // Clear its timeout if exists
        if (flipTimeouts.has(this)) {
          clearTimeout(flipTimeouts.get(this));
          flipTimeouts.delete(this);
        }
        return;
      }

      // Find all other flipped cards and schedule them to flip back
      cards.forEach(otherCard => {
        if (otherCard !== this && otherCard.classList.contains('flipped')) {
          // Clear any existing timeout for this card
          if (flipTimeouts.has(otherCard)) {
            clearTimeout(flipTimeouts.get(otherCard));
          }

          // Set new timeout to flip it back after 2 seconds
          const timeout = setTimeout(() => {
            otherCard.classList.remove('flipped');
            flipTimeouts.delete(otherCard);
          }, 2000);

          flipTimeouts.set(otherCard, timeout);
        }
      });

      // Flip the current card
      this.classList.add('flipped');
    });
  });
})();

// ============================================
// 11. VISION SECTION — TREE GROWTH ANIMATION
// ============================================
(function initVisionTree() {
  const treeSvg = document.getElementById('visionTreeSvg');
  if (!treeSvg) return;

  // Animate tree lines (branches growing)
  const treeLines = gsap.utils.toArray('.tree-line');
  const treeNodes = gsap.utils.toArray('.tree-node');
  const treeLeaves = gsap.utils.toArray('.tree-leaf');
  const visionBlocks = gsap.utils.toArray('.vision-block');

  const visionTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#vision',
      start: 'top 60%',
      end: 'bottom 80%',
      scrub: 1
    }
  });

  // Grow trunk and branches
  treeLines.forEach((line, i) => {
    visionTl.to(line, {
      strokeDashoffset: 0,
      duration: 0.5,
      ease: 'none'
    }, i * 0.15);
  });

  // Pop in nodes
  treeNodes.forEach((node, i) => {
    visionTl.to(node, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'back.out(3)'
    }, 0.3 + i * 0.15);
  });

  // Fade in leaves
  treeLeaves.forEach((leaf, i) => {
    visionTl.to(leaf, {
      opacity: 0.7,
      duration: 0.3,
      ease: 'power2.out'
    }, 0.5 + i * 0.1);
  });

  // Fade in text blocks
  visionBlocks.forEach((block, i) => {
    visionTl.to(block, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, 0.2 + i * 0.25);
  });
})();

// ============================================
// 12. GENERAL SECTION REVEALS
// ============================================
(function initSectionReveals() {
  gsap.utils.toArray('.section-reveal').forEach((section) => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });
})();

// ============================================
// 13. FOOTER ANIMATION
// ============================================
(function initFooter() {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;

  gsap.from(footer.children, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: footer,
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    }
  });
})();

// ============================================
// 14. SERVICES SECTION HEADER REVEAL
// ============================================
(function initServicesHeader() {
  const header = document.querySelector('.services-header');
  if (!header) return;

  gsap.from(header.children, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: header,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
})();

// ============================================
// 15. ABOUT HEADER REVEAL
// ============================================
(function initAboutHeader() {
  const header = document.querySelector('.about-header');
  if (!header) return;

  gsap.from(header.children, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: header,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
})();
