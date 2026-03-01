'use client';

import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
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
                    top: '35%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(230, 46, 45, 0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Grid pattern overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Illustration */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '420px',
                    width: '100%',
                    marginBottom: '2rem',
                    animation: 'pulse502 4s ease-in-out infinite',
                }}
            >
                <img
                    src="/images/502-error.svg"
                    alt="502 - Bad Gateway"
                    style={{
                        width: '100%',
                        height: 'auto',
                        filter: 'drop-shadow(0 20px 60px rgba(230, 46, 45, 0.08))',
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
                    background: 'linear-gradient(135deg, #e62e2d, #ff6b35, #e62e2d)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                502
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
                Bad Gateway
            </p>

            <p
                style={{
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.4)',
                    maxWidth: '480px',
                    lineHeight: 1.7,
                    marginBottom: '2.5rem',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                Something went wrong on our end. The server encountered a temporary error and could not complete your request.
            </p>

            {/* Buttons */}
            <div
                style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <button
                    onClick={reset}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.9rem 2.4rem',
                        borderRadius: '50px',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#fff',
                        background: 'linear-gradient(135deg, #e62e2d, #ff6b35, #e62e2d)',
                        backgroundSize: '200% 200%',
                        border: 'none',
                        cursor: 'pointer',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        boxShadow: '0 4px 25px rgba(230, 46, 45, 0.3)',
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 4 23 10 17 10" />
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                    </svg>
                    Try Again
                </button>

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
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        textDecoration: 'none',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                        cursor: 'pointer',
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Go Home
                </Link>
            </div>

            {/* CSS keyframes */}
            <style>{`
        @keyframes pulse502 {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.9; }
        }
        button:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 40px rgba(230, 46, 45, 0.45), 0 0 60px rgba(255, 107, 53, 0.15) !important;
        }
        a[href="/"]:hover {
          transform: translateY(-3px) !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.05) !important;
        }
      `}</style>
        </div>
    );
}
