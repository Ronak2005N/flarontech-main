import '../css/style.css';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      {/* ===== PAGE LOADER ===== */}
      <div className="page-loader">
        <div className="loader-logo">
          <img src="/images/LoadingLogo.png" alt="Loading Logo" />
        </div>
      </div>

      {/* ===== SCROLL PROGRESS BAR ===== */}
      <div className="scroll-progress"></div>

      {/* ===== PARTICLE CANVAS ===== */}
      <canvas id="particleCanvas"></canvas>

      {/* ===== NAVIGATION ===== */}
      <nav className="main-nav">
        <a href="#hero" className="nav-logo">
          <img src="/images/logo.png" alt="Flarontech Logo" />
          <span>Flarontech</span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">Team</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#vision">Vision</a></li>
        </ul>
        <button className="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* ===== MOBILE NAV ===== */}
      <div className="mobile-nav">
        <a href="#hero">Home</a>
        <a href="#about-anchor">Team</a>
        <a href="#services">Services</a>
        <a href="#vision">Vision</a>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main>

        {/* ========== HERO SECTION ========== */}
        <section id="hero" className="section">
          <div className="hero-gradient-bg"></div>

          {/* Floating Geometric Shapes */}
          <div className="floating-shapes">
            <div className="geo-shape triangle" style={{ top: '12%', left: '8%' }}></div>
            <div className="geo-shape hexagon" style={{ top: '20%', right: '15%' }}></div>
            <div className="geo-shape diamond" style={{ top: '65%', left: '12%' }}></div>
            <div className="geo-shape circle" style={{ top: '30%', right: '8%' }}></div>
            <div className="geo-shape pentagon" style={{ top: '75%', right: '20%' }}></div>
            <div className="geo-shape triangle" style={{ top: '50%', left: '25%', borderBottomColor: '#035A52' }}></div>
            <div className="geo-shape hexagon" style={{ top: '80%', left: '40%', background: '#96BF8A' }}></div>
            <div className="geo-shape diamond" style={{ top: '15%', left: '45%', background: '#035A52' }}></div>
          </div>

          <div className="hero-content">
            <div className="hero-logo-glow">
              <img src="/images/logo.png" alt="Flarontech" className="hero-logo" />
            </div>

            <p className="company-name">Flarontech</p>

            <h1 className="hero-title">
              <span className="line"><span>Rooted in <span className="gradient-text">Innovation.</span></span></span>
              <span className="line"><span>Powered by <span className="gradient-text">Vision.</span></span></span>
            </h1>

            <p className="hero-tagline">Building tomorrow's technology with nature's resilience.</p>

            <a href="#about" className="hero-cta">
              Meet the Team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-arrow"></div>
          </div>
        </section>

        {/* ========== ABOUT SECTION ========== */}
        <section id="about">
          <div className="about-header section-reveal">
            <p className="text-sm uppercase tracking-[0.2em] text-sage font-semibold mb-3">Our Leadership</p>
            <h2 className="section-title">The Minds Behind <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'linear-gradient(135deg, #96BF8A, #c5e8ba, #96BF8A)', backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', backgroundClip: 'text', animation: 'textGradient 4s ease infinite' }}>Flarontech</span></h2>
            <p className="section-subtitle mx-auto">Five visionaries, five spirits. Each leader embodies a force of nature &mdash; together, they build something extraordinary.</p>
          </div>
          <div className="about-slides-area" id="aboutSlides">
            {/* Slides injected by JS */}
          </div>
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section id="services" className="section section-reveal">
          <div className="services-header">
            <p className="text-sm uppercase tracking-[0.2em] text-sage font-semibold mb-3">What We Do</p>
            <h2 className="section-title">Our <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'linear-gradient(135deg, #96BF8A, #c5e8ba, #96BF8A)', backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', backgroundClip: 'text', animation: 'textGradient 4s ease infinite' }}>Services</span></h2>
            <p className="section-subtitle mx-auto">End-to-end technology solutions built with precision and passion.</p>
          </div>

          <div className="services-grid">

            {/* Card 1: Logo & Branding */}
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v8"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  <h3 className="service-title">Logo & Branding</h3>
                </div>
                <div className="card-back">
                  <div className="card-back-header">
                    <div className="service-icon-small">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v8"></path>
                        <path d="M8 12h8"></path>
                      </svg>
                    </div>
                    <h3 className="service-title-small">Logo & Branding</h3>
                  </div>
                  <p className="service-desc">Your brand is your identity. We create unique, memorable, and impactful logos along with complete branding solutions that reflect your vision and values. From color palettes to brand guidelines, we ensure consistency across all platforms.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Website Design & Development */}
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="service-title">Website Design & Development</h3>
                </div>
                <div className="card-back">
                  <div className="card-back-header">
                    <div className="service-icon-small">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <h3 className="service-title-small">Website Design & Development</h3>
                  </div>
                  <p className="service-desc">We design and develop responsive, user-friendly, and high-performance websites tailored to your business needs. Whether it's a portfolio, business website, or e-commerce platform, we create secure and scalable web solutions.</p>
                </div>
              </div>
            </div>

            {/* Card 3: Mobile Application Development */}
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="service-title">Mobile Application Development</h3>
                </div>
                <div className="card-back">
                  <div className="card-back-header">
                    <div className="service-icon-small">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                      </svg>
                    </div>
                    <h3 className="service-title-small">Mobile Application Development</h3>
                  </div>
                  <p className="service-desc">Transform your ideas into powerful mobile applications. We build feature-rich Android and cross-platform apps with intuitive UI/UX, ensuring seamless performance and enhanced user engagement.</p>
                </div>
              </div>
            </div>

            {/* Card 4: Full Stack Development */}
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h3 className="service-title">Full Stack Development</h3>
                </div>
                <div className="card-back">
                  <div className="card-back-header">
                    <div className="service-icon-small">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <h3 className="service-title-small">Full Stack Development</h3>
                  </div>
                  <p className="service-desc">From frontend interfaces to backend architecture and database management, we provide complete full-stack development services. Our solutions are secure, scalable, and optimized for performance.</p>
                </div>
              </div>
            </div>

            {/* Card 5: Documentation Works */}
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path> 
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <h3 className="service-title">Documentation Works</h3>
                </div>
                <div className="card-back">
                  <div className="card-back-header">
                    <div className="service-icon-small">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <h3 className="service-title-small">Documentation Works</h3>
                  </div>
                  <p className="service-desc">We offer professional documentation services including project reports, technical documentation, business documents, and academic documentation with structured formatting and clarity.</p>
                </div>
              </div>
            </div>

            {/* Card 6: New Domain Registration */}
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h3 className="service-title">New Domain Registration</h3>
                </div>
                <div className="card-back">
                  <div className="card-back-header">
                    <div className="service-icon-small">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <h3 className="service-title-small">New Domain Registration</h3>
                  </div>
                  <p className="service-desc">Start your online journey with the perfect domain name. We assist in selecting and registering reliable domain names that align with your brand and business goals.</p>
                </div>
              </div>
            </div>

            {/* Card 7: Web & Email Hosting Services */}
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="service-title">Web & Email Hosting Services</h3>
                </div>
                <div className="card-back">
                  <div className="card-back-header">
                    <div className="service-icon-small">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    </div>
                    <h3 className="service-title-small">Web & Email Hosting Services</h3>
                  </div>
                  <p className="service-desc">Reliable hosting is the backbone of any digital presence. We provide secure, high-speed web hosting and professional business email hosting solutions to ensure uninterrupted performance and communication.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========== VISION SECTION ========== */}
        <section id="vision" className="section section-reveal">
          <div className="vision-container">

            {/* Tree SVG */}
            <div className="vision-tree">
              <svg id="visionTreeSvg" viewBox="0 0 300 500" xmlns="http://www.w3.org/2000/svg">    
                {/* Trunk */}
                <line className="tree-line" x1="150" y1="480" x2="150" y2="320" strokeDasharray="160" strokeDashoffset="160"/>
                {/* Main branches */}
                <line className="tree-line" x1="150" y1="350" x2="100" y2="280" strokeDasharray="100" strokeDashoffset="100"/>
                <line className="tree-line" x1="150" y1="350" x2="200" y2="280" strokeDasharray="100" strokeDashoffset="100"/>
                <line className="tree-line" x1="150" y1="320" x2="80" y2="230" strokeDasharray="120" strokeDashoffset="120"/>
                <line className="tree-line" x1="150" y1="320" x2="220" y2="230" strokeDasharray="120" strokeDashoffset="120"/>
                {/* Secondary branches */}
                <line className="tree-line" x1="100" y1="280" x2="65" y2="220" strokeDasharray="80" strokeDashoffset="80"/>
                <line className="tree-line" x1="100" y1="280" x2="120" y2="220" strokeDasharray="70" strokeDashoffset="70"/>
                <line className="tree-line" x1="200" y1="280" x2="180" y2="220" strokeDasharray="70" strokeDashoffset="70"/>
                <line className="tree-line" x1="200" y1="280" x2="235" y2="220" strokeDasharray="80" strokeDashoffset="80"/>
                {/* Upper branches */}
                <line className="tree-line" x1="80" y1="230" x2="55" y2="170" strokeDasharray="75" strokeDashoffset="75"/>
                <line className="tree-line" x1="80" y1="230" x2="110" y2="175" strokeDasharray="65" strokeDashoffset="65"/>
                <line className="tree-line" x1="220" y1="230" x2="190" y2="175" strokeDasharray="65" strokeDashoffset="65"/>
                <line className="tree-line" x1="220" y1="230" x2="245" y2="170" strokeDasharray="75" strokeDashoffset="75"/>
                {/* Top branches */}
                <line className="tree-line" x1="150" y1="320" x2="150" y2="200" strokeDasharray="120" strokeDashoffset="120"/>
                <line className="tree-line" x1="150" y1="230" x2="130" y2="160" strokeDasharray="80" strokeDashoffset="80"/>
                <line className="tree-line" x1="150" y1="230" x2="170" y2="160" strokeDasharray="80" strokeDashoffset="80"/>
                <line className="tree-line" x1="150" y1="200" x2="140" y2="130" strokeDasharray="80" strokeDashoffset="80"/>
                <line className="tree-line" x1="150" y1="200" x2="160" y2="130" strokeDasharray="80" strokeDashoffset="80"/>
                
                {/* Nodes (branch points) */}
                <circle className="tree-node" cx="150" cy="350" r="5" transform="scale(0)"/>
                <circle className="tree-node" cx="150" cy="320" r="5" transform="scale(0)"/>
                <circle className="tree-node" cx="100" cy="280" r="5" transform="scale(0)"/>
                <circle className="tree-node" cx="200" cy="280" r="5" transform="scale(0)"/>
                <circle className="tree-node" cx="80" cy="230" r="5" transform="scale(0)"/>
                <circle className="tree-node" cx="220" cy="230" r="5" transform="scale(0)"/>
                <circle className="tree-node" cx="150" cy="200" r="4" transform="scale(0)"/>

                {/* Leaves (endpoints) */}
                <polygon className="tree-leaf" points="65,220 55,200 75,205" fill="#96BF8A"/>
                <polygon className="tree-leaf" points="120,220 110,200 130,205" fill="#035A52"/>       
                <polygon className="tree-leaf" points="180,220 170,200 190,205" fill="#96BF8A"/>       
                <polygon className="tree-leaf" points="235,220 225,200 245,205" fill="#035A52"/>       
                <polygon className="tree-leaf" points="55,170 45,150 65,155" fill="#96BF8A"/>
                <polygon className="tree-leaf" points="110,175 100,155 120,160" fill="#035A52"/>       
                <polygon className="tree-leaf" points="190,175 180,155 200,160" fill="#96BF8A"/>       
                <polygon className="tree-leaf" points="245,170 235,150 255,155" fill="#035A52"/>       
                <polygon className="tree-leaf" points="130,160 120,140 140,145" fill="#96BF8A"/>       
                <polygon className="tree-leaf" points="170,160 160,140 180,145" fill="#035A52"/>       
                <polygon className="tree-leaf" points="140,130 130,110 150,115" fill="#96BF8A"/>       
                <polygon className="tree-leaf" points="160,130 150,110 170,115" fill="#035A52"/>       

                {/* Root lines */}
                <line className="tree-line" x1="150" y1="480" x2="130" y2="500" strokeDasharray="30" strokeDashoffset="30"/>
                <line className="tree-line" x1="150" y1="480" x2="170" y2="500" strokeDasharray="30" strokeDashoffset="30"/>
                <line className="tree-line" x1="150" y1="480" x2="145" y2="498" strokeDasharray="20" strokeDashoffset="20"/>
              </svg>
            </div>

            {/* Vision Text */}
            <div className="vision-text">
              <div className="vision-block">
                <h3>Our Roots</h3>
                <p>Flarontech was founded on the belief that technology should grow organically &mdash; deeply rooted in purpose, branching into possibility, and always reaching toward the light of innovation.</p>
              </div>
              <div className="vision-block">
                <h3>Our Growth</h3>
                <p>Like a forest ecosystem, we nurture every project with care. Each solution we build adds another ring of strength, another branch of capability, another canopy of protection for our clients.</p>
              </div>
              <div className="vision-block">
                <h3>Our Canopy</h3>
                <p>We envision a world where technology and nature coexist &mdash; where sustainable innovation shelters communities, empowers businesses, and creates a greener digital future for generations to come.</p>
              </div>
              <div className="vision-block">
                <h3>Our Future</h3>
                <p>Every line of code we write, every system we architect, every partnership we forge plants a seed for tomorrow. The forest is growing. The future is ours to cultivate.</p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <p className="footer-brand">Flaron<span className="ft-green">tech</span></p>
        <p className="footer-tagline">Rooted in Innovation. Powered by Vision.</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">Team</a>
          <a href="#services">Services</a>
          <a href="#vision">Vision</a>
        </div>
        <p className="footer-copy">&copy; 2026 Flarontech. All rights reserved.</p>
      </footer>

      {/* ===== SCRIPTS ===== */}
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" strategy="afterInteractive" />   
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js" strategy="afterInteractive" />  

      {/* Custom JS */}
        <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
