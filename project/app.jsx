// ============================================================
// Link Ambiental — App entry
// ============================================================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroPhoto": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=2400&q=80&auto=format&fit=crop",
  "heroTreatment": "ease",
  "accentPalette": "leaf",
  "darkSite": false,
  "showImagery": true
}/*EDITMODE-END*/;

const HERO_PHOTO_OPTIONS = [
  // 1. industrial overhead (warehouse / port)
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=2400&q=80&auto=format&fit=crop',
  // 2. professional looking out window
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=2400&q=80&auto=format&fit=crop',
  // 3. heavy industry / refinery
  'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=2400&q=80&auto=format&fit=crop',
  // 4. corporate executive overlooking city
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=80&auto=format&fit=crop',
];

const CTA_PHOTO = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2000&q=80&auto=format&fit=crop';

const PALETTES = {
  leaf:   { primary: '#8FD089', light: '#ACD9B1', pale: '#DDF1DC' },
  citron: { primary: '#BED858', light: '#DFE9A0', pale: '#F1F7D4' },
  sky:    { primary: '#5EBDD1', light: '#9BD7E5', pale: '#DFF9FF' },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [modalOpen, setModalOpen] = useState(false);

  useReveal();

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  // Apply palette overrides
  useEffect(() => {
    const root = document.documentElement;
    const pal = PALETTES[t.accentPalette] || PALETTES.leaf;
    root.style.setProperty('--la-leaf-solid',  pal.primary);
    root.style.setProperty('--la-leaf-light',  pal.light);
    root.style.setProperty('--la-leaf-pale',   pal.pale);
  }, [t.accentPalette]);

  // Dark/light surface mode (swaps bg-2 for forest)
  useEffect(() => {
    const root = document.documentElement;
    if (t.darkSite) {
      root.style.setProperty('--bg-2', '#0a1f1f');
      root.style.setProperty('--bg-1', '#0d2a2a');
      root.style.setProperty('--bg-3', '#0d2a22');
      root.style.setProperty('--fg-1', '#FAFBF8');
      root.style.setProperty('--fg-2', 'rgba(250,251,248,0.72)');
      root.style.setProperty('--fg-3', 'rgba(250,251,248,0.5)');
      root.style.setProperty('--border-soft', 'rgba(255,255,255,0.06)');
      root.style.setProperty('--border-strong', 'rgba(255,255,255,0.14)');
    } else {
      root.style.removeProperty('--bg-2');
      root.style.removeProperty('--bg-1');
      root.style.removeProperty('--bg-3');
      root.style.removeProperty('--fg-1');
      root.style.removeProperty('--fg-2');
      root.style.removeProperty('--fg-3');
      root.style.removeProperty('--border-soft');
      root.style.removeProperty('--border-strong');
    }
  }, [t.darkSite]);

  const heroPhoto = t.showImagery ? t.heroPhoto : '';

  return (
    <>
      <Header onCtaClick={openModal} />

      <main>
        {t.heroTreatment === 'ease' && (
          <HeroEase onCtaClick={openModal} />
        )}
        {t.heroTreatment === 'photo' && (
          <HeroSection onCtaClick={openModal} photo={heroPhoto} />
        )}
        {t.heroTreatment === 'paper' && (
          <HeroPaper onCtaClick={openModal} />
        )}
        {t.heroTreatment === 'dark' && (
          <HeroDark onCtaClick={openModal} />
        )}

        <PainSection />
        <StatsSection />
        <ServicesSection onCtaClick={openModal} />
        <ProcessSection />
        <PillarsSection />
        <SegmentSection photo={t.showImagery ? PHOTOS.segment : ''} />
        <CtaFinalSection onCtaClick={openModal} photo={t.showImagery ? CTA_PHOTO : ''} />
      </main>

      <Footer onCtaClick={openModal} />

      <DiagModal open={modalOpen} onClose={closeModal} />

      <TweaksPanel title="Tweaks · Link Ambiental">
        <TweakSection label="Hero" />
        <TweakSelect
          label="Tratamento"
          value={t.heroTreatment}
          options={[
            { value: 'ease',  label: 'Centrado (Ease-style)' },
            { value: 'photo', label: 'Foto full-bleed' },
            { value: 'paper', label: 'Paper · type gigante' },
            { value: 'dark',  label: 'Dark · forest 900' },
          ]}
          onChange={(v) => setTweak('heroTreatment', v)}
        />
        {t.heroTreatment === 'photo' && (
          <TweakSelect
            label="Foto"
            value={t.heroPhoto}
            options={HERO_PHOTO_OPTIONS.map((url, i) => ({ value: url, label: `Foto ${i + 1}` }))}
            onChange={(v) => setTweak('heroPhoto', v)}
          />
        )}

        <TweakSection label="Cor de destaque" />
        <TweakColor
          label="Paleta"
          value={t.accentPalette === 'leaf' ? [PALETTES.leaf.primary, PALETTES.leaf.light, PALETTES.leaf.pale]
               : t.accentPalette === 'citron' ? [PALETTES.citron.primary, PALETTES.citron.light, PALETTES.citron.pale]
               : [PALETTES.sky.primary, PALETTES.sky.light, PALETTES.sky.pale]}
          options={[
            [PALETTES.leaf.primary, PALETTES.leaf.light, PALETTES.leaf.pale],
            [PALETTES.citron.primary, PALETTES.citron.light, PALETTES.citron.pale],
            [PALETTES.sky.primary, PALETTES.sky.light, PALETTES.sky.pale],
          ]}
          onChange={(v) => {
            const key = v[0] === PALETTES.leaf.primary ? 'leaf'
                      : v[0] === PALETTES.citron.primary ? 'citron'
                      : 'sky';
            setTweak('accentPalette', key);
          }}
        />

        <TweakSection label="Visual" />
        <TweakToggle
          label="Modo escuro"
          value={t.darkSite}
          onChange={(v) => setTweak('darkSite', v)}
        />
        <TweakToggle
          label="Imagens ligadas"
          value={t.showImagery}
          onChange={(v) => setTweak('showImagery', v)}
        />

        <TweakSection label="Ações" />
        <TweakButton label="Abrir modal de diagnóstico" onClick={openModal} />
        <TweakButton label="Ir para o topo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} secondary />
      </TweaksPanel>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// HERO — Ease Health style (2 cards: text/cta left, solutions carousel right)
// ─────────────────────────────────────────────────────────────────────────

// ─── Carousel card variants (one per service) ─────────────────────────────
function CCLicenciamento() {
  return (
    <>
      <div className="cc-head">
        <div className="cc-ic"><Icon name="fileCheck" size={22} /></div>
        <div>
          <div className="cc-num">Solução 01</div>
          <h4>Licenciamento ambiental</h4>
        </div>
      </div>
      <div className="cc-body">
        <div className="cc-row"><div className="cc-check"><Icon name="check" size={11} /></div> Diagnóstico inicial · 5 dias</div>
        <div className="cc-row"><div className="cc-check"><Icon name="check" size={11} /></div> Protocolo CETESB submetido</div>
        <div className="cc-row"><div className="cc-check"><Icon name="check" size={11} /></div> Estudos técnicos aprovados</div>
        <div className="cc-row pending"><div className="cc-check"><Icon name="check" size={11} /></div> Vistoria agendada · 02/06</div>
      </div>
      <div className="cc-stamp">
        <span>Processo nº 2024-1234</span>
        <span className="badge"><span className="dot"></span> LP em andamento</span>
      </div>
    </>
  );
}

function CCSaude() {
  return (
    <>
      <div className="cc-head">
        <div className="cc-ic"><Icon name="shieldCheck" size={22} /></div>
        <div>
          <div className="cc-num">Solução 02</div>
          <h4>Saúde e segurança</h4>
        </div>
      </div>
      <div className="cc-body">
        <div className="cc-stat-grid">
          <div className="cc-stat">
            <div className="lbl">PGR vigente</div>
            <div className="val">12 <span style={{ fontSize: 12, color: 'var(--fg-3)' }}>unid.</span></div>
          </div>
          <div className="cc-stat">
            <div className="lbl">ASOs em dia</div>
            <div className="val">98<span style={{ fontSize: 16 }}>%</span></div>
          </div>
        </div>
        <div className="cc-row"><div className="cc-check"><Icon name="check" size={11} /></div> AVCB renovado · sede</div>
        <div className="cc-row"><div className="cc-check"><Icon name="check" size={11} /></div> LTCAT atualizado · GHEs</div>
      </div>
      <div className="cc-stamp">
        <span>Auditoria interna · jul/2025</span>
        <span className="badge"><span className="dot"></span> Conforme</span>
      </div>
    </>
  );
}

function CCResiduos() {
  return (
    <>
      <div className="cc-head">
        <div className="cc-ic"><Icon name="recycle" size={22} /></div>
        <div>
          <div className="cc-num">Solução 03</div>
          <h4>Gestão de resíduos</h4>
        </div>
      </div>
      <div className="cc-body">
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 12, color: 'var(--fg-3)',
          letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', fontWeight: 700,
        }}>MTR #4587 · Rastreabilidade</div>
        <div className="cc-row"><div className="cc-check"><Icon name="check" size={11} /></div> Gerador · Indústria Modelo</div>
        <div className="cc-row"><div className="cc-check"><Icon name="check" size={11} /></div> Transportador · Logística X</div>
        <div className="cc-row pending"><div className="cc-check"><Icon name="check" size={11} /></div> Destino certificado · em rota</div>
        <div className="cc-stat-grid">
          <div className="cc-stat">
            <div className="lbl">Resíduo</div>
            <div className="val" style={{ fontSize: 18 }}>2,4 t</div>
          </div>
          <div className="cc-stat">
            <div className="lbl">Classe</div>
            <div className="val" style={{ fontSize: 18 }}>I</div>
          </div>
        </div>
      </div>
      <div className="cc-stamp">
        <span>CADRI 0123/2024</span>
        <span className="badge"><span className="dot"></span> Rastreado</span>
      </div>
    </>
  );
}

function CCESG() {
  const bars = [40, 52, 48, 60, 55, 68, 62, 75, 70, 78, 72, 86];
  return (
    <>
      <div className="cc-head">
        <div className="cc-ic"><Icon name="barChart" size={22} /></div>
        <div>
          <div className="cc-num">Solução 04</div>
          <h4>Sustentabilidade · ESG</h4>
        </div>
      </div>
      <div className="cc-body">
        <div className="cc-stat-grid">
          <div className="cc-stat">
            <div className="lbl">Emissões CO₂</div>
            <div className="val">−18<span style={{ fontSize: 16 }}>%</span></div>
            <div className="delta down">vs. 2024 · escopos 1+2</div>
          </div>
          <div className="cc-stat">
            <div className="lbl">Indicadores</div>
            <div className="val">36<span style={{ fontSize: 14, color: 'var(--fg-3)' }}> / 38</span></div>
            <div className="delta">conformes GRI</div>
          </div>
        </div>
        <div className="cc-spark">
          {bars.map((h, i) => (
            <div key={i} className={'bar' + (i === bars.length - 1 ? ' lead' : '')} style={{ height: h + '%' }}></div>
          ))}
        </div>
      </div>
      <div className="cc-stamp">
        <span>Relatório anual 2025</span>
        <span className="badge"><span className="dot"></span> Publicado</span>
      </div>
    </>
  );
}

const SOLUTIONS = [
  { key: 'lic',  label: 'Licenciamento ambiental',     Card: CCLicenciamento },
  { key: 'sst',  label: 'Saúde e segurança do trabalho', Card: CCSaude },
  { key: 'res',  label: 'Gestão de resíduos',          Card: CCResiduos },
  { key: 'esg',  label: 'Sustentabilidade e ESG',      Card: CCESG },
];

function SolutionsCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % SOLUTIONS.length), 4200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
         style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div className="carousel">
        {SOLUTIONS.map((s, i) => {
          const Card = s.Card;
          return (
            <div key={s.key} className={'carousel-card' + (i === idx ? ' active' : '')} aria-hidden={i !== idx}>
              <Card />
            </div>
          );
        })}
      </div>

      <div className="carousel-label">{SOLUTIONS[idx].label}</div>

      <div className="carousel-dots" role="tablist">
        {SOLUTIONS.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-label={s.label}
            aria-selected={i === idx}
            className={i === idx ? 'active' : ''}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}

function HeroEase({ onCtaClick }) {
  const sectors = [
    { name: 'Química',         icon: 'flask' },
    { name: 'Metalurgia',      icon: 'factory' },
    { name: 'Logística',       icon: 'truck' },
    { name: 'Tratamento de água', icon: 'droplet' },
    { name: 'Mineração',       icon: 'mountain' },
    { name: 'Energia',         icon: 'bolt' },
  ];

  const scope = [
    'LP', 'LI', 'LO', 'PGR', 'AVCB', 'ASO', 'LTCAT', 'PCMSO',
    'MTR', 'CADRI', 'PGRS', 'CETESB', 'IBAMA', 'ESG',
  ];

  return (
    <>
      <div className="hero-ease-wrap" id="top" data-screen-label="01 Hero">
        <div className="hero-ease-grid">
          <div className="hero-ease-col-left">
            <div className="hero-ease-card-text reveal in-view">
              <h1 className="hero-serif">
                Conformidade não é burocracia.
                <span className="light">É proteção.</span>
              </h1>
              <p className="hero-ease-sub">
                A consultoria de SSMA que conduz sua indústria do diagnóstico à aprovação — sem você se perder no caminho.
              </p>
            </div>
            <button className="hero-ease-cta-card reveal in-view" data-delay="1" onClick={onCtaClick}>
              <span>Falar com especialista</span>
              <span className="arrow"><Icon name="arrowRight" size={20} /></span>
            </button>
          </div>

          <div className="hero-ease-col-right reveal in-view" data-delay="2">
            <SolutionsCarousel />
          </div>
        </div>
      </div>

      <div className="trust-strip">
        <div className="trust-eyebrow">Atendendo indústrias regulamentadas em</div>
        <div className="trust-logos">
          {sectors.map((s) => (
            <span key={s.name} className="sector-mark">
              <Icon name={s.icon} size={20} />
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div className="scope-strip">
        <div className="scope-tags">
          {scope.map((s) => <span key={s}>{s}</span>)}
          <span className="featured">Cobertura técnica completa</span>
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Alt hero treatments
// ─────────────────────────────────────────────────────────────────────────
function HeroPaper({ onCtaClick }) {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero"
             style={{ background: 'var(--bg-2)', minHeight: '92vh', alignItems: 'center' }}>
      <div className="la-container hero-content" style={{ paddingBottom: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 1100 }}>
          <span className="la-eyebrow-rule reveal in-view">Consultoria SSMA · Desde 2017</span>
          <h1 className="reveal in-view" data-delay="1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(56px, 9vw, 152px)', lineHeight: 0.95,
            letterSpacing: '-0.025em', color: 'var(--fg-1)', margin: 0,
          }}>
            <span style={{ color: 'var(--la-forest-700)' }}>Conformidade</span>
            <span style={{ display: 'block', color: 'var(--fg-1)' }}>não é burocracia.</span>
            <span style={{ display: 'block', fontWeight: 300, color: 'var(--la-forest-600)' }}>É proteção.</span>
          </h1>
          <p className="reveal in-view" data-delay="2" style={{
            fontFamily: 'var(--font-body)', fontWeight: 300,
            fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.5,
            color: 'var(--fg-2)', maxWidth: 720, margin: 0,
          }}>
            A consultoria de SSMA que conduz sua indústria do diagnóstico à aprovação — sem você se perder no caminho.
          </p>
          <div className="hero-ctas reveal in-view" data-delay="3" style={{ marginTop: 16 }}>
            <button className="btn btn-primary" onClick={onCtaClick}>
              Falar com especialista <Icon name="arrowRight" size={14} />
            </button>
            <a href="#servicos" className="btn btn-ghost">Ver serviços</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDark({ onCtaClick }) {
  return (
    <section className="hero on-dark" id="top" data-screen-label="01 Hero"
             style={{ background: 'var(--la-forest-900)', minHeight: '92vh', alignItems: 'center' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        background: 'radial-gradient(ellipse at 20% 30%, rgba(143,208,137,0.15), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(143,208,137,0.08), transparent 60%)',
      }} />
      <div className="la-container hero-content" style={{ paddingBottom: 0, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 1100 }}>
          <span className="la-eyebrow-rule reveal in-view" style={{ color: 'var(--la-leaf-solid)' }}>Consultoria SSMA · Desde 2017</span>
          <h1 className="reveal in-view" data-delay="1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(56px, 9vw, 152px)', lineHeight: 0.95,
            letterSpacing: '-0.025em', margin: 0,
          }}>
            <span style={{ color: 'var(--la-leaf-solid)' }}>Conformidade</span>
            <span style={{ display: 'block', color: 'var(--la-white)' }}>não é burocracia.</span>
            <span style={{ display: 'block', fontWeight: 300, color: 'var(--la-leaf-light)' }}>É proteção.</span>
          </h1>
          <p className="reveal in-view" data-delay="2" style={{
            fontFamily: 'var(--font-body)', fontWeight: 300,
            fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.5,
            color: 'rgba(255,255,255,0.78)', maxWidth: 720, margin: 0,
          }}>
            A consultoria de SSMA que conduz sua indústria do diagnóstico à aprovação — sem você se perder no caminho.
          </p>
          <div className="hero-ctas reveal in-view" data-delay="3" style={{ marginTop: 16 }}>
            <button className="btn btn-leaf" onClick={onCtaClick}>
              Falar com especialista <Icon name="arrowRight" size={14} />
            </button>
            <a href="#servicos" className="btn btn-ghost">Ver serviços</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
