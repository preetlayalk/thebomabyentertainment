export default function ComingSoon() {
  return (
    <main className="stage">
      <svg viewBox="0 0 44 52" className="mark" aria-hidden fill="none">
        <path d="M2 50V22C2 10.95 10.95 2 22 2s20 8.95 20 20v28H2Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 50V23c0-7.73 6.27-14 14-14s14 6.27 14 14v27" stroke="currentColor" strokeWidth="0.7" opacity=".55" />
        <text x="22" y="37" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="600">
          TBE
        </text>
      </svg>
      <p className="eyebrow">The Bombay Entertainment</p>
      <h1>
        Coming <em>soon.</em>
      </h1>
      <p className="lead">We&apos;re putting the finishing touches on something new. Check back shortly.</p>
    </main>
  );
}
