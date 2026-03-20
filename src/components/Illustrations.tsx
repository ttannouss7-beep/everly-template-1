import { SVGProps } from "react";

type IllustrationProps = Omit<SVGProps<SVGSVGElement>, "viewBox"> & {
  className?: string;
};

export function OliveTree({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 160 240"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Trunk */}
      <path d="M80 235 C78 215 82 195 80 172" strokeWidth="3.5" />

      {/* Main branches */}
      <path d="M80 188 C67 178 52 166 38 152" strokeWidth="2.2" />
      <path d="M80 188 C93 178 108 166 122 152" strokeWidth="2.2" />
      <path d="M80 183 C79 168 81 152 80 136" strokeWidth="2.2" />

      {/* Left sub-branches */}
      <path d="M52 166 C43 155 36 144 28 130" strokeWidth="1.3" />
      <path d="M44 160 C38 147 34 136 28 120" strokeWidth="1.3" />
      <path d="M38 152 C34 140 32 127 28 112" strokeWidth="1.3" />

      {/* Right sub-branches */}
      <path d="M108 166 C117 155 124 144 132 130" strokeWidth="1.3" />
      <path d="M116 160 C122 147 126 136 132 120" strokeWidth="1.3" />
      <path d="M122 152 C126 140 128 127 132 112" strokeWidth="1.3" />

      {/* Center sub-branches */}
      <path d="M80 155 C67 145 58 134 48 118" strokeWidth="1.3" />
      <path d="M80 155 C93 145 102 134 112 118" strokeWidth="1.3" />
      <path d="M80 148 C79 135 81 122 80 108" strokeWidth="1.3" />

      {/* Leaves — left cluster */}
      <ellipse cx="26" cy="127" rx="4" ry="9" transform="rotate(-50 26 127)" strokeWidth="0.9" />
      <ellipse cx="24" cy="112" rx="4" ry="9" transform="rotate(-55 24 112)" strokeWidth="0.9" />
      <ellipse cx="29" cy="100" rx="4" ry="9" transform="rotate(-45 29 100)" strokeWidth="0.9" />
      <ellipse cx="35" cy="118" rx="3.5" ry="8" transform="rotate(-40 35 118)" strokeWidth="0.9" />
      <ellipse cx="40" cy="128" rx="3.5" ry="8" transform="rotate(-30 40 128)" strokeWidth="0.9" />

      {/* Leaves — right cluster */}
      <ellipse cx="134" cy="127" rx="4" ry="9" transform="rotate(50 134 127)" strokeWidth="0.9" />
      <ellipse cx="136" cy="112" rx="4" ry="9" transform="rotate(55 136 112)" strokeWidth="0.9" />
      <ellipse cx="131" cy="100" rx="4" ry="9" transform="rotate(45 131 100)" strokeWidth="0.9" />
      <ellipse cx="125" cy="118" rx="3.5" ry="8" transform="rotate(40 125 118)" strokeWidth="0.9" />
      <ellipse cx="120" cy="128" rx="3.5" ry="8" transform="rotate(30 120 128)" strokeWidth="0.9" />

      {/* Leaves — center cluster */}
      <ellipse cx="46" cy="115" rx="3.5" ry="8" transform="rotate(-30 46 115)" strokeWidth="0.9" />
      <ellipse cx="53" cy="104" rx="3.5" ry="8" transform="rotate(-20 53 104)" strokeWidth="0.9" />
      <ellipse cx="78" cy="104" rx="4" ry="9" transform="rotate(-5 78 104)" strokeWidth="0.9" />
      <ellipse cx="82" cy="92" rx="4" ry="9" transform="rotate(5 82 92)" strokeWidth="0.9" />
      <ellipse cx="114" cy="115" rx="3.5" ry="8" transform="rotate(30 114 115)" strokeWidth="0.9" />
      <ellipse cx="107" cy="104" rx="3.5" ry="8" transform="rotate(20 107 104)" strokeWidth="0.9" />

      {/* Olives */}
      <circle cx="29" cy="123" r="3" strokeWidth="0.9" />
      <circle cx="131" cy="123" r="3" strokeWidth="0.9" />
      <circle cx="48" cy="112" r="2.5" strokeWidth="0.9" />
      <circle cx="112" cy="112" r="2.5" strokeWidth="0.9" />
      <circle cx="80" cy="100" r="3" strokeWidth="0.9" />
      <circle cx="58" cy="107" r="2.5" strokeWidth="0.9" />
      <circle cx="102" cy="107" r="2.5" strokeWidth="0.9" />
    </svg>
  );
}

export function WeddingCake({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 160 210"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Bottom tier */}
      <rect x="10" y="150" width="140" height="52" rx="4" strokeWidth="1.4" />
      <line x1="10" y1="168" x2="150" y2="168" strokeWidth="0.8" />
      <line x1="10" y1="182" x2="150" y2="182" strokeWidth="0.8" />
      {/* Pearl dots — bottom tier */}
      <circle cx="28" cy="160" r="2" fill="currentColor" stroke="none" />
      <circle cx="46" cy="160" r="2" fill="currentColor" stroke="none" />
      <circle cx="64" cy="160" r="2" fill="currentColor" stroke="none" />
      <circle cx="80" cy="160" r="2" fill="currentColor" stroke="none" />
      <circle cx="96" cy="160" r="2" fill="currentColor" stroke="none" />
      <circle cx="114" cy="160" r="2" fill="currentColor" stroke="none" />
      <circle cx="132" cy="160" r="2" fill="currentColor" stroke="none" />

      {/* Plate — bottom to middle */}
      <ellipse cx="80" cy="149" rx="73" ry="6" strokeWidth="1.3" />

      {/* Middle tier */}
      <rect x="30" y="108" width="100" height="42" rx="3" strokeWidth="1.4" />
      <line x1="30" y1="124" x2="130" y2="124" strokeWidth="0.8" />
      <line x1="30" y1="136" x2="130" y2="136" strokeWidth="0.8" />
      {/* Pearl dots — middle tier */}
      <circle cx="48" cy="117" r="2" fill="currentColor" stroke="none" />
      <circle cx="65" cy="117" r="2" fill="currentColor" stroke="none" />
      <circle cx="80" cy="117" r="2" fill="currentColor" stroke="none" />
      <circle cx="95" cy="117" r="2" fill="currentColor" stroke="none" />
      <circle cx="112" cy="117" r="2" fill="currentColor" stroke="none" />

      {/* Plate — middle to top */}
      <ellipse cx="80" cy="107" rx="52" ry="5" strokeWidth="1.3" />

      {/* Top tier */}
      <rect x="48" y="70" width="64" height="38" rx="3" strokeWidth="1.4" />
      <line x1="48" y1="84" x2="112" y2="84" strokeWidth="0.8" />
      <line x1="48" y1="95" x2="112" y2="95" strokeWidth="0.8" />
      {/* Pearl dots — top tier */}
      <circle cx="62" cy="78" r="2" fill="currentColor" stroke="none" />
      <circle cx="80" cy="78" r="2" fill="currentColor" stroke="none" />
      <circle cx="98" cy="78" r="2" fill="currentColor" stroke="none" />

      {/* Top plate */}
      <ellipse cx="80" cy="69" rx="34" ry="4.5" strokeWidth="1.3" />

      {/* Floral topper — stem */}
      <line x1="80" y1="68" x2="80" y2="46" strokeWidth="1.1" />
      {/* Stem leaves */}
      <ellipse cx="73" cy="60" rx="2.5" ry="6.5" transform="rotate(-30 73 60)" strokeWidth="0.9" />
      <ellipse cx="87" cy="60" rx="2.5" ry="6.5" transform="rotate(30 87 60)" strokeWidth="0.9" />
      {/* 5-petal flower */}
      <g transform="translate(80 36)">
        <ellipse cx="0" cy="-8" rx="3" ry="7" strokeWidth="0.9" />
        <ellipse cx="0" cy="-8" rx="3" ry="7" transform="rotate(72)" strokeWidth="0.9" />
        <ellipse cx="0" cy="-8" rx="3" ry="7" transform="rotate(144)" strokeWidth="0.9" />
        <ellipse cx="0" cy="-8" rx="3" ry="7" transform="rotate(216)" strokeWidth="0.9" />
        <ellipse cx="0" cy="-8" rx="3" ry="7" transform="rotate(288)" strokeWidth="0.9" />
        <circle cx="0" cy="0" r="3.5" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function FloralSprigs({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 300 100"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* ── Left sprig ── */}
      <path d="M150 90 C130 78 108 64 85 48" strokeWidth="1.4" />
      <path d="M85 48 C68 36 52 25 38 14" strokeWidth="1.4" />
      {/* Left side branches */}
      <path d="M110 65 C106 54 104 42 102 28" strokeWidth="1" />
      <path d="M95 56 C90 44 88 32 86 18" strokeWidth="1" />
      {/* Left leaves (paired) */}
      <ellipse cx="138" cy="72" rx="3.5" ry="8" transform="rotate(145 138 72)" strokeWidth="0.9" />
      <ellipse cx="133" cy="67" rx="3.5" ry="8" transform="rotate(35 133 67)" strokeWidth="0.9" />
      <ellipse cx="120" cy="61" rx="3" ry="7" transform="rotate(148 120 61)" strokeWidth="0.9" />
      <ellipse cx="116" cy="57" rx="3" ry="7" transform="rotate(32 116 57)" strokeWidth="0.9" />
      <ellipse cx="100" cy="48" rx="3" ry="7" transform="rotate(150 100 48)" strokeWidth="0.9" />
      <ellipse cx="97" cy="43" rx="3" ry="7" transform="rotate(30 97 43)" strokeWidth="0.9" />
      <ellipse cx="78" cy="36" rx="3" ry="7" transform="rotate(158 78 36)" strokeWidth="0.9" />
      <ellipse cx="75" cy="31" rx="3" ry="7" transform="rotate(22 75 31)" strokeWidth="0.9" />
      <ellipse cx="58" cy="24" rx="3" ry="7" transform="rotate(162 58 24)" strokeWidth="0.9" />
      <ellipse cx="55" cy="19" rx="3" ry="7" transform="rotate(18 55 19)" strokeWidth="0.9" />
      {/* Left flower */}
      <g transform="translate(38 10)">
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" strokeWidth="0.9" />
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" transform="rotate(72)" strokeWidth="0.9" />
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" transform="rotate(144)" strokeWidth="0.9" />
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" transform="rotate(216)" strokeWidth="0.9" />
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" transform="rotate(288)" strokeWidth="0.9" />
        <circle cx="0" cy="0" r="3" strokeWidth="1" />
      </g>

      {/* ── Right sprig (mirror) ── */}
      <path d="M150 90 C170 78 192 64 215 48" strokeWidth="1.4" />
      <path d="M215 48 C232 36 248 25 262 14" strokeWidth="1.4" />
      {/* Right side branches */}
      <path d="M190 65 C194 54 196 42 198 28" strokeWidth="1" />
      <path d="M205 56 C210 44 212 32 214 18" strokeWidth="1" />
      {/* Right leaves (paired) */}
      <ellipse cx="162" cy="72" rx="3.5" ry="8" transform="rotate(35 162 72)" strokeWidth="0.9" />
      <ellipse cx="167" cy="67" rx="3.5" ry="8" transform="rotate(145 167 67)" strokeWidth="0.9" />
      <ellipse cx="180" cy="61" rx="3" ry="7" transform="rotate(32 180 61)" strokeWidth="0.9" />
      <ellipse cx="184" cy="57" rx="3" ry="7" transform="rotate(148 184 57)" strokeWidth="0.9" />
      <ellipse cx="200" cy="48" rx="3" ry="7" transform="rotate(30 200 48)" strokeWidth="0.9" />
      <ellipse cx="203" cy="43" rx="3" ry="7" transform="rotate(150 203 43)" strokeWidth="0.9" />
      <ellipse cx="222" cy="36" rx="3" ry="7" transform="rotate(22 222 36)" strokeWidth="0.9" />
      <ellipse cx="225" cy="31" rx="3" ry="7" transform="rotate(158 225 31)" strokeWidth="0.9" />
      <ellipse cx="242" cy="24" rx="3" ry="7" transform="rotate(18 242 24)" strokeWidth="0.9" />
      <ellipse cx="245" cy="19" rx="3" ry="7" transform="rotate(162 245 19)" strokeWidth="0.9" />
      {/* Right flower */}
      <g transform="translate(262 10)">
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" strokeWidth="0.9" />
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" transform="rotate(72)" strokeWidth="0.9" />
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" transform="rotate(144)" strokeWidth="0.9" />
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" transform="rotate(216)" strokeWidth="0.9" />
        <ellipse cx="0" cy="-7" rx="2.8" ry="6" transform="rotate(288)" strokeWidth="0.9" />
        <circle cx="0" cy="0" r="3" strokeWidth="1" />
      </g>

      {/* Center leaf pair where stems meet */}
      <ellipse cx="150" cy="84" rx="3" ry="6.5" transform="rotate(-15 150 84)" strokeWidth="0.9" />
      <ellipse cx="150" cy="84" rx="3" ry="6.5" transform="rotate(15 150 84)" strokeWidth="0.9" />
    </svg>
  );
}

export function GiftBow({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Ribbon tails */}
      <path d="M68 80 C58 97 48 112 40 130" strokeWidth="1.3" />
      <path d="M75 82 C68 100 62 115 58 133" strokeWidth="1.3" />
      <path d="M92 80 C102 97 112 112 120 130" strokeWidth="1.3" />
      <path d="M85 82 C92 100 98 115 102 133" strokeWidth="1.3" />

      {/* Left bow loop */}
      <path
        d="M80 68 C66 52 36 42 24 55 C16 65 24 78 42 78 C58 78 72 74 80 68"
        strokeWidth="1.4"
      />
      {/* Left loop interior crease */}
      <path d="M56 73 C48 65 39 61 33 65" strokeWidth="0.8" />

      {/* Right bow loop */}
      <path
        d="M80 68 C94 52 124 42 136 55 C144 65 136 78 118 78 C102 78 88 74 80 68"
        strokeWidth="1.4"
      />
      {/* Right loop interior crease */}
      <path d="M104 73 C112 65 121 61 127 65" strokeWidth="0.8" />

      {/* Central knot */}
      <ellipse cx="80" cy="74" rx="13" ry="10" strokeWidth="1.5" />
      {/* Knot fold detail */}
      <path d="M70 72 C74 70 80 70 86 72 C82 76 78 76 70 72" strokeWidth="0.8" />
    </svg>
  );
}
