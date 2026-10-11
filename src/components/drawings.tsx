import { useId } from "react";

function starPoints(cx: number, cy: number, outer: number, inner: number) {
  const points: string[] = [];
  for (let i = 0; i < 10; i += 1) {
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const radius = i % 2 === 0 ? outer : inner;
    points.push(
      `${(cx + Math.cos(angle) * radius).toFixed(2)},${(cy + Math.sin(angle) * radius).toFixed(2)}`,
    );
  }
  return points.join(" ");
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon
        points={starPoints(50, 52, 44, 18)}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Octahedron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 148" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
        <polygon points="60,8 106,74 60,140 14,74" />
        <polygon points="60,46 106,74 60,102 14,74" />
        <line x1="60" y1="8" x2="60" y2="140" />
      </g>
      <circle cx="60" cy="8" r="3.2" fill="var(--color-ember)" stroke="none" />
    </svg>
  );
}

const CAPSULE =
  "M100 16 C128 52 142 96 146 146 L146 286 Q146 308 100 308 Q54 308 54 286 L54 146 C58 96 72 52 100 16 Z";

type ShieldProps = {
  coverage: number;
  hot: boolean;
  testing: boolean;
  labeled?: boolean;
  className?: string;
};

export function Capsule({
  coverage,
  hot,
  testing,
  labeled = false,
  className,
}: ShieldProps) {
  const clip = useId().replace(/:/g, "");
  const cols = 3;
  const rows = 6;
  const tiles = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const vary = 0.72 + ((row * 3 + col) % 4) * 0.08;
      tiles.push(
        <rect
          key={`${row}-${col}`}
          x={66 + col * 24}
          y={162 + row * 22}
          width="20"
          height="18"
          fill="currentColor"
          className={hot || testing ? "text-ember" : "text-ink"}
          opacity={coverage <= 0 ? 0 : Math.min(0.95, coverage * vary)}
        />,
      );
    }
  }

  return (
    <svg
      viewBox={labeled ? "0 0 292 328" : "40 0 120 328"}
      width={labeled ? 292 : 120}
      height={328}
      className={`h-auto max-w-full ${className ?? "w-full text-ink"}`}
      role="img"
      aria-label="Escudo térmico extraterrestre"
    >
      <defs>
        <clipPath id={clip}>
          <rect x="60" y="156" width="80" height="140" />
        </clipPath>
      </defs>
      <path d={CAPSULE} fill="var(--color-paper)" />
      <g clipPath={`url(#${clip})`} className={testing ? "tps-heat" : undefined}>
        {tiles}
        {Array.from({ length: 7 }, (_, index) => (
          <line
            key={`h-${index}`}
            x1="58"
            x2="142"
            y1={160 + index * 22}
            y2={160 + index * 22}
            stroke="currentColor"
            strokeOpacity="0.35"
          />
        ))}
        {[78, 100, 122].map((x) => (
          <line
            key={`v-${x}`}
            x1={x}
            x2={x}
            y1="156"
            y2="296"
            stroke="currentColor"
            strokeOpacity="0.35"
          />
        ))}
      </g>
      <path
        d={CAPSULE}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={testing ? "text-ember" : "text-ink"}
      />
      {labeled ? (
        <g className="text-ink" fill="currentColor" stroke="currentColor">
          <path d="M168 168 H186" fill="none" strokeWidth="1.4" />
          <path d="M168 168 l8 -4.5 v9 Z" stroke="none" />
          <text
            x="196"
            y="158"
            stroke="none"
            fontFamily="Fraunces, Palatino, serif"
            fontSize="20"
          >
            Escudo
          </text>
          <text
            x="196"
            y="182"
            stroke="none"
            fontFamily="Fraunces, Palatino, serif"
            fontSize="20"
          >
            térmico
          </text>
          <text
            x="196"
            y="208"
            stroke="none"
            fontFamily="Outfit, sans-serif"
            fontSize="15"
          >
            E.T.
          </text>
        </g>
      ) : null}
    </svg>
  );
}

type RocketProps = {
  coverage: number;
  hot: boolean;
  lit: boolean;
  className?: string;
};

export function Cohete({ coverage, hot, lit, className }: RocketProps) {
  const clip = useId().replace(/:/g, "");
  const tiles = [];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      tiles.push(
        <rect
          key={`${row}-${col}`}
          x={78 + col * 22}
          y={168 + row * 22}
          width="18"
          height="18"
          fill="currentColor"
          className={hot || lit ? "text-ember" : "text-ink"}
          opacity={coverage <= 0 ? 0 : Math.min(0.95, coverage * (0.7 + ((row + col) % 3) * 0.1))}
        />,
      );
    }
  }

  return (
    <svg
      viewBox="0 0 320 500"
      width={320}
      height={500}
      className={`h-auto max-w-full ${className ?? "w-full text-ink"}`}
      role="img"
      aria-label="Cohete con el escudo aplicado"
    >
      <defs>
        <clipPath id={clip}>
          <rect x="74" y="162" width="72" height="112" />
        </clipPath>
      </defs>
      {lit ? (
        <g className="tps-flame text-ember">
          <path d="M96 392 C102 438 108 458 120 478 C132 458 138 438 144 392 Z" fill="currentColor" />
          <path
            d="M106 392 C110 424 114 442 120 456 C126 442 130 424 134 392 Z"
            fill="var(--color-paper)"
            opacity="0.45"
          />
        </g>
      ) : null}
      <polygon points="120,28 168,150 72,150" fill="var(--color-paper)" />
      <rect x="72" y="150" width="96" height="210" fill="var(--color-paper)" />
      <g clipPath={`url(#${clip})`} className={lit ? "tps-heat" : undefined}>
        {tiles}
      </g>
      <polygon
        points="120,28 168,150 72,150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect
        x="72"
        y="150"
        width="96"
        height="210"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <line x1="120" y1="36" x2="120" y2="148" stroke="currentColor" strokeOpacity="0.3" />
      {[172, 194, 216, 238, 260].map((y) => (
        <line key={y} x1="72" x2="168" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.28" />
      ))}
      <polygon points="72,250 28,332 72,308" fill="var(--color-paper)" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <polygon points="168,250 212,332 168,308" fill="var(--color-paper)" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <polygon points="88,360 152,360 164,396 76,396" fill="var(--color-paper)" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <g fill="currentColor" stroke="currentColor">
        <path d="M196 214 H214" fill="none" strokeWidth="1.4" />
        <path d="M196 214 l8 -4.5 v9 Z" stroke="none" />
        <text
          x="224"
          y="222"
          stroke="none"
          fontFamily="Fraunces, Palatino, serif"
          fontSize="22"
        >
          COHETE
        </text>
      </g>
    </svg>
  );
}
