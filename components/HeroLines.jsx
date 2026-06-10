/* Linhas de "link" fluindo pelo fundo do hero — SVG puro, sem JS no cliente */
export default function HeroLines() {
  return (
    <div className="hero-lines" aria-hidden="true">
      <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lk-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#69C367" stopOpacity="0" />
            <stop offset="0.25" stopColor="#69C367" stopOpacity="0.75" />
            <stop offset="0.65" stopColor="#5EBDD1" stopOpacity="0.65" />
            <stop offset="1" stopColor="#5EBDD1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lk-grad-soft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3C6D55" stopOpacity="0" />
            <stop offset="0.5" stopColor="#3C6D55" stopOpacity="0.34" />
            <stop offset="1" stopColor="#3C6D55" stopOpacity="0" />
          </linearGradient>
          <filter id="lk-glow" x="-20%" y="-200%" width="140%" height="500%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* trilhas — curvas em "S" se entrelaçando, como elos */}
        <path id="lk-p1" className="lk-line" d="M -80 250 C 260 130, 480 380, 740 300 S 1180 150, 1520 270" stroke="url(#lk-grad)" />
        <path className="lk-glowline" d="M -80 250 C 260 130, 480 380, 740 300 S 1180 150, 1520 270" stroke="url(#lk-grad)" filter="url(#lk-glow)" />

        <path id="lk-p2" className="lk-line lk-dash" d="M -80 430 C 300 500, 560 310, 880 420 S 1280 540, 1520 440" stroke="url(#lk-grad-soft)" />

        <path id="lk-p3" className="lk-line" d="M -80 590 C 340 660, 720 490, 1040 590 S 1360 660, 1520 600" stroke="url(#lk-grad)" style={{ opacity: 0.5 }} />

        <path className="lk-line lk-dash" d="M -80 140 C 420 90, 820 200, 1520 120" stroke="url(#lk-grad-soft)" style={{ opacity: 0.6 }} />

        {/* nós de conexão */}
        <g className="lk-node" style={{ '--d': '0s' }}>
          <circle cx="740" cy="300" r="4" />
          <circle className="halo" cx="740" cy="300" r="4" />
        </g>
        <g className="lk-node" style={{ '--d': '1.4s' }}>
          <circle cx="880" cy="420" r="3.5" />
          <circle className="halo" cx="880" cy="420" r="3.5" />
        </g>
        <g className="lk-node" style={{ '--d': '2.8s' }}>
          <circle cx="340" cy="610" r="3.5" />
          <circle className="halo" cx="340" cy="610" r="3.5" />
        </g>

        {/* pontos viajando pelas linhas */}
        <circle className="lk-dot" r="3.5" fill="#69C367">
          <animateMotion dur="16s" repeatCount="indefinite">
            <mpath href="#lk-p1" />
          </animateMotion>
        </circle>
        <circle className="lk-dot" r="3" fill="#5EBDD1">
          <animateMotion dur="22s" begin="-8s" repeatCount="indefinite">
            <mpath href="#lk-p2" />
          </animateMotion>
        </circle>
        <circle className="lk-dot" r="2.5" fill="#3C6D55">
          <animateMotion dur="19s" begin="-4s" repeatCount="indefinite">
            <mpath href="#lk-p3" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  )
}
