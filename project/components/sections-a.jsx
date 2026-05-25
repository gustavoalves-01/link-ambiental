// ============================================================
// Sections A — Hero, Pain, Stats, Services
// ============================================================

// Unsplash photos: industrial / corporate / professional looking away
const PHOTOS = {
  hero:     'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=2400&q=80&auto=format&fit=crop',
  // professional by window — refinery / city behind
  ctaFinal: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2000&q=80&auto=format&fit=crop',
  // segmentation: heavy industry overhead
  segment:  'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=80&auto=format&fit=crop',
  // testimonial avatar — corporate portrait
  avatar:   'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&q=80&auto=format&fit=crop&crop=faces',
};

// ─────────────────────────────────────────────────────────────────────────
// SECTION 1 — HERO
// ─────────────────────────────────────────────────────────────────────────
function HeroSection({ onCtaClick, photo, accentClass }) {
  const ref = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => ref.current && ref.current.classList.add('in-view'), 50);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className={'hero ' + (accentClass || '')} id="top" data-screen-label="01 Hero" ref={ref}>
      <div className="hero-bg" style={{ backgroundImage: `url("${photo}")` }} />
      <div className="hero-overlay" />

      <div className="la-container hero-content">
        <div className="hero-grid">
          <div className="hero-left reveal">
            <div className="hero-tag"><span className="dot"></span> Consultoria SSMA · São Paulo / ABC</div>
            <div className="hero-meta">
              <span>Operando desde <b>2017</b></span>
              <span>Setores: <b>química, metalurgia, logística</b></span>
              <span>Foco: <b>conformidade real, não relatório</b></span>
            </div>
          </div>
          <div className="hero-right" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <h1 className="hero-headline reveal" data-delay="1">
              <span className="leaf">Conformidade</span>{' '}
              <span style={{ color: 'rgba(255,255,255,0.96)' }}>não é</span>
              <span className="light">burocracia.</span>
              <span style={{ display: 'block', color: 'var(--la-white)' }}>É proteção.</span>
            </h1>
            <p className="hero-sub reveal" data-delay="2">
              A consultoria de SSMA que conduz sua indústria do diagnóstico à aprovação — sem você se perder no caminho.
            </p>
            <div className="hero-ctas reveal" data-delay="3">
              <button className="btn btn-leaf" onClick={onCtaClick}>
                Falar com especialista <Icon name="arrowRight" size={14} />
              </button>
              <a href="#servicos" className="btn btn-ghost">
                Ver serviços
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Role para descobrir</span>
        <div className="line" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 2 — PAIN
// ─────────────────────────────────────────────────────────────────────────
function PainSection() {
  const symptoms = [
    { icon: 'alert',    title: 'Licença vencida',          body: 'Operação exposta à paralisação e multa proporcional ao faturamento.' },
    { icon: 'clock',    title: 'Laudo atrasado',           body: 'PGR, LTCAT, AVCB sem renovação no prazo — auditoria descobre antes de você.' },
    { icon: 'ban',      title: 'Órgão sem resposta',       body: 'Protocolos parados na CETESB, IBAMA ou prefeitura sem ninguém acompanhando.' },
    { icon: 'user',     title: 'Responsabilidade pessoal', body: 'Cada pendência é um foco potencial — e o nome no formulário é o seu.' },
  ];

  return (
    <section className="pain section-pad" id="problema" data-screen-label="02 Problema">
      <div className="la-container">
        <div className="pain-grid">
          <div className="reveal">
            <span className="la-eyebrow-rule">O problema</span>
            <h2 className="pain-headline">
              O ambiente regulatório brasileiro não para de crescer.{' '}
              <span className="accent">Os riscos também.</span>
            </h2>
          </div>

          <div className="pain-body reveal" data-delay="1">
            <p>
              Para um responsável de SSMA, cada pendência ambiental é um foco de incêndio potencial:{' '}
              <b style={{ color: 'var(--fg-1)', fontWeight: 700 }}>multa, paralisação, responsabilidade pessoal.</b>
            </p>
            <p>
              A maioria das consultorias entrega documentos. Pouquíssimas gerenciam o processo de ponta a ponta — e é exatamente aí que a operação descarrila.
            </p>

            <div className="pain-symptoms">
              {symptoms.map((s, i) => (
                <div key={i} className="pain-symptom">
                  <div className="ic"><Icon name={s.icon} size={26} /></div>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 3 — STATS (cinematographic dark)
// ─────────────────────────────────────────────────────────────────────────
function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.25 });

  const yrs = useCountUp(8, inView, 1400);
  const team = useCountUp(1, inView, 1200);

  const stats = [
    { eyebrow: 'Operação',         num: <>+{yrs}<span className="unit"> anos</span></>, label: 'no mercado de consultoria SSMA, desde 2017.' },
    { eyebrow: 'Atuação',          num: <>SP<span className="unit"> · ABC</span></>,    label: 'cobertura regional com presença em planta cliente.' },
    { eyebrow: 'Setores',          num: <span style={{ fontSize: '0.65em', lineHeight: 1.05 }}>Quím. Metal.<br/>Log.</span>, label: 'indústrias químicas, metalúrgicas e logísticas.' },
    { eyebrow: 'Equipe',           num: <>{team}<span className="unit"> equipe</span></>, label: 'do diagnóstico à aprovação — mesmo time, ponta a ponta.' },
  ];

  return (
    <section className="stats section-pad on-dark" id="numeros" data-screen-label="03 Números" ref={ref}>
      <div className="la-container stats-content">
        <div className="stats-header reveal">
          <span className="la-eyebrow-rule">A Link em números</span>
          <h2>
            Credibilidade que aparece <span className="light">antes do primeiro relatório.</span>
          </h2>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat reveal" data-delay={i + 1}>
              <div className="stat-eyebrow">{s.eyebrow}</div>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="stats-footnote reveal">
          Esses são os dados disponíveis hoje. À medida que ampliamos o histórico público de licenças aprovadas, clientes ativos e taxa de renovação, substituiremos os indicadores por números específicos — prova social genuína vale mais que cifra inflada.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 4 — SERVICES
// ─────────────────────────────────────────────────────────────────────────
function ServicesSection({ onCtaClick }) {
  const services = [
    {
      n: '01', icon: 'fileCheck',
      title: 'Licenciamento e conformidade',
      body: 'Do diagnóstico à aprovação junto a órgãos municipais, estaduais e federais — sem você ter que aprender o caminho.',
      siglas: ['LP', 'LI', 'LO', 'CETESB', 'IBAMA'],
    },
    {
      n: '02', icon: 'shieldCheck',
      title: 'Saúde e segurança do trabalho',
      body: 'PGR, AVCB, ASO e laudos com rigor técnico e execução que respeita sua operação — sem parar a planta.',
      siglas: ['PGR', 'AVCB', 'ASO', 'LTCAT', 'PCMSO'],
    },
    {
      n: '03', icon: 'recycle',
      title: 'Gestão de resíduos',
      body: 'Conformidade ambiental integrada — da origem ao destino certificado, com rastreabilidade documental.',
      siglas: ['MTR', 'CDF', 'PGRS', 'CADRI'],
    },
    {
      n: '04', icon: 'barChart',
      title: 'Sustentabilidade e ESG',
      body: 'Indicadores, auditorias e relatórios para ir além da conformidade mínima — alinhados a SASB, GRI e SBTi.',
      siglas: ['ESG', 'GRI', 'SASB', 'SBTi', 'TCFD'],
    },
  ];

  return (
    <section className="services section-pad" id="servicos" data-screen-label="04 Serviços">
      <div className="la-container">
        <div className="services-head">
          <div className="reveal">
            <span className="la-eyebrow-rule">O que a Link resolve</span>
            <h2 className="services-title">
              Quatro frentes. <span className="light">Uma equipe responsável.</span>
            </h2>
          </div>
          <p className="services-intro reveal" data-delay="1">
            Cada card comunica o resultado, não o processo. A sigla certa vem na hora certa — quando ela já é solução, não jargão.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={s.n} className="service-card reveal" data-delay={(i % 2) + 1}>
              <div className="num">SERVIÇO {s.n}</div>
              <div className="ic"><Icon name={s.icon} size={22} /></div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="siglas">
                {s.siglas.map((sig) => <span key={sig}>{sig}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="services-foot">
          <p className="la-caption" style={{ margin: 0, maxWidth: 540 }}>
            Cada frente é conduzida por especialistas técnicos, não terceirizada para freelancers.
          </p>
          <button className="btn btn-link" onClick={onCtaClick}>
            Ver todos os serviços <Icon name="arrowRight" size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HeroSection, PainSection, StatsSection, ServicesSection, PHOTOS });
