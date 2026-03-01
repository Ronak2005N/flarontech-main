import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            style={{
                minHeight: '100vh',
                background: '#0a0a0c',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                fontFamily: "'Inter', sans-serif",
                color: '#fff',
                textAlign: 'center',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Ambient glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(150, 191, 138, 0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Illustration */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '480px',
                    width: '100%',
                    marginBottom: '2rem',
                    animation: 'float404 6s ease-in-out infinite',
                }}
            >
                <img
                    src="/images/404-error.png"
                    alt="404 - Page Not Found"
                    style={{
                        width: '100%',
                        height: 'auto',
                        filter: 'drop-shadow(0 20px 60px rgba(150, 191, 138, 0.1))',
                    }}
                />
            </div>

            {/* Text */}
            <h1
                style={{
                    fontFamily: "'Condenso', 'Inter', sans-serif",
                    fontSize: 'clamp(3rem, 10vw, 7rem)',
                    fontWeight: 'normal',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(135deg, #96BF8A, #c5e8ba, #96BF8A)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: 'none',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                404
            </h1>

            <p
                style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                Page Not Found
            </p>

            <p
                style={{
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.4)',
                    maxWidth: '450px',
                    lineHeight: 1.7,
                    marginBottom: '2.5rem',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                The page you&apos;re looking for has drifted into the void. Let&apos;s get you back on solid ground.
            </p>

            {/* Go Home Button */}
            <Link
                href="/"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.9rem 2.4rem',
                    borderRadius: '50px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#fff',
                    background: 'linear-gradient(135deg, #035A52, #0a7a6e, #035A52)',
                    backgroundSize: '200% 200%',
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 4px 25px rgba(3, 90, 82, 0.3)',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Go Home
            </Link>

            {/* CSS keyframes via style tag */}
            <style>{`
        @keyframes float404 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        a[href="/"]:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 40px rgba(3, 90, 82, 0.45), 0 0 60px rgba(150, 191, 138, 0.15) !important;
        }
      `}</style>
        </div>
    );
}
