/**
 * Logo SaldoGT en SVG: círculo con gráfica ascendente y moneda.
 * `tone="dark"` para fondos oscuros (texto blanco), `tone="light"` para fondos claros.
 */
export function LogoMark({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="var(--brand-500)" />
      <circle
        cx="24"
        cy="24"
        r="19.5"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
      />
      <rect x="13" y="27" width="4.2" height="7" rx="1" fill="#fff" />
      <rect x="19.2" y="24" width="4.2" height="10" rx="1" fill="#fff" />
      <path
        d="M13.5 23.5 19 18.5l3.5 3 7-6.5"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 14.5h4.2v4.2"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="29.5" r="5.6" fill="#fff" />
      <text
        x="30"
        y="32.6"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        fill="var(--brand-600)"
      >
        $
      </text>
    </svg>
  );
}

export default function Logo({ tone = "dark", className = "" }) {
  const wordColor = tone === "dark" ? "text-white" : "text-text";
  const accentColor = tone === "dark" ? "text-mint-400" : "text-brand-600";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span
        className={`font-display text-[1.45rem] font-bold leading-none tracking-tight ${wordColor}`}
      >
        Saldo<span className={accentColor}>GT</span>
      </span>
    </span>
  );
}
