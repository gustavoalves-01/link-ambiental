import Link from 'next/link'
import Icon from '@/components/Icon'
import HeroLines from '@/components/HeroLines'

const SCOPE = ['LP', 'LI', 'LO', 'PGR', 'AVCB', 'ASO', 'LTCAT', 'PCMSO', 'CADRI', 'MTR', 'SIGOR', 'PGRS', 'CETESB', 'IBAMA', 'EAR', 'DAIL', 'CLCB', 'PPP', 'CIPA', 'ESG']

const RISKS = [
  {
    n: '01', title: 'Licença vencida',
    body: 'Operação exposta à paralisação e multa proporcional ao faturamento — um vencimento esquecido pode custar meses de operação.',
  },
  {
    n: '02', title: 'Laudo atrasado',
    body: 'PGR, LTCAT e AVCB sem renovação no prazo. A auditoria descobre antes de você — e o passivo já está formado.',
  },
  {
    n: '03', title: 'Órgão sem resposta',
    body: 'Protocolos parados na CETESB, no IBAMA ou na prefeitura, sem ninguém acompanhando e sem previsão de andamento.',
  },
  {
    n: '04', title: 'Responsabilidade pessoal',
    body: 'Cada pendência é um risco potencial — e o nome no formulário é o do responsável técnico. O seu.',
  },
]

const FACTS = [
  { num: '2017', lbl: 'Fundada de dentro da indústria, por quem conhecia a dor antes de resolvê-la.' },
  { num: '4',    lbl: 'Frentes integradas: meio ambiente, saúde, segurança e sustentabilidade.' },
  { num: '+40',  lbl: 'Serviços especializados — do licenciamento completo ao laudo específico.' },
  { num: '3',    lbl: 'Esferas regulatórias: municipal, estadual e federal.' },
]

const SERVICES = [
  {
    icon: 'fileCheck', href: '/servicos#licenciamento',
    title: 'Licenciamento e conformidade',
    body: 'Licenças, alvarás e estudos junto a órgãos municipais, estaduais e federais — do diagnóstico à aprovação.',
  },
  {
    icon: 'shieldCheck', href: '/servicos#sst',
    title: 'Saúde e segurança do trabalho',
    body: 'PGR, AVCB, laudos e treinamentos com rigor técnico — sem parar a planta.',
  },
  {
    icon: 'recycle', href: '/servicos#residuos',
    title: 'Gestão de resíduos',
    body: 'Da origem ao destino certificado, com rastreabilidade documental completa.',
  },
  {
    icon: 'barChart', href: '/servicos#sustentabilidade',
    title: 'Sustentabilidade e governança',
    body: 'Indicadores, auditorias e diagnósticos para ir além da conformidade mínima.',
  },
]

const STEPS = [
  {
    n: 'Etapa 01', title: 'Diagnóstico',
    body: 'Entendemos o seu cenário antes de propor qualquer solução — visita técnica e leitura completa da documentação.',
    meta: ['Visita técnica', 'Mapa de riscos priorizado'],
  },
  {
    n: 'Etapa 02', title: 'Plano',
    body: 'Cada etapa tem um responsável. Cada prazo tem um dono. Cada dúvida tem uma resposta.',
    meta: ['Plano + cronograma', 'Responsável por etapa'],
  },
  {
    n: 'Etapa 03', title: 'Condução',
    body: 'Gerenciamos junto a prefeituras, órgãos ambientais e reguladores. Você não precisa abrir um único protocolo.',
    meta: ['Comunicação contínua', 'Municipal a federal'],
  },
  {
    n: 'Etapa 04', title: 'Aprovação',
    body: 'Você recebe resultado — não apenas documentos. E mantemos o acompanhamento pós-emissão.',
    meta: ['Licença em mãos', 'Acompanhamento de renovações'],
  },
]

const SECTORS = [
  { name: 'Química',            icon: 'flask'    },
  { name: 'Metalurgia',         icon: 'factory'  },
  { name: 'Logística',          icon: 'truck'    },
  { name: 'Tratamento de água', icon: 'droplet'  },
  { name: 'Mineração',          icon: 'mountain' },
  { name: 'Energia',            icon: 'bolt'     },
]

function Marquee() {
  const group = (hidden) => (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {SCOPE.map((s) => <span key={s}>{s}</span>)}
      <span className="featured">Cobertura técnica completa</span>
    </div>
  )
  return (
    <div className="marquee">
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <HeroLines />
        <div className="hero-spot" aria-hidden="true" />

        <div className="la-container hero-content">
          <span className="eyebrow cine">Consultoria de SSMA · desde 2017</span>
          <h1 className="display cine cine-1">
            Conformidade não é burocracia. <span className="light">É proteção.</span>
          </h1>
          <p className="lead cine cine-2">
            Conduzimos médias e grandes indústrias do diagnóstico à aprovação — com autoridade técnica, agilidade e total transparência.
          </p>
          <div className="hero-actions cine cine-3">
            <Link className="btn btn-solid" href="/contato">
              Solicitar diagnóstico gratuito <Icon name="arrowRight" size={14} />
            </Link>
            <Link className="btn btn-glass" href="/servicos">
              Conhecer os serviços
            </Link>
          </div>
        </div>

        <div className="scroll-cue cine cine-4" aria-hidden="true">Explore</div>

        <div className="marquee-section cine cine-4">
          <Marquee />
        </div>
      </section>

      {/* Propósito */}
      <section className="section-pad-sm">
        <div className="la-container">
          <div className="quote-panel glass sheen reveal">
            <blockquote>
              Existimos para transformar complexidade regulatória em conformidade real — com clareza, agilidade e a segurança de quem conhece profundamente cada etapa do caminho.
            </blockquote>
            <div className="quote-meta">Nosso propósito</div>
          </div>
        </div>
      </section>

      {/* Riscos — editorial */}
      <section className="section-pad" id="riscos">
        <div className="la-container">
          <div className="pain-grid">
            <div className="pain-sticky reveal">
              <span className="eyebrow">Por que importa</span>
              <h2 className="headline">
                O ambiente regulatório não para de crescer. <span className="grad">Os riscos também.</span>
              </h2>
              <p className="lead">
                A maioria das consultorias entrega documentos. Pouquíssimas gerenciam o processo de ponta a ponta — e é exatamente aí que a operação descarrila.
              </p>
            </div>

            <div className="risk-list">
              {RISKS.map((r, i) => (
                <div key={r.n} className="risk-item reveal" data-delay={(i % 2) + 1}>
                  <span className="ghost" aria-hidden="true">{r.n}</span>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Números — banda escura */}
      <section className="section-pad-sm">
        <div className="la-container">
          <div className="stats-band glass-dark sheen on-dark reveal">
            <span className="eyebrow">A Link em síntese</span>
            <h2 className="headline" style={{ maxWidth: 620, marginTop: 22 }}>
              Autoridade técnica <span className="light">construída de dentro da operação.</span>
            </h2>
            <div className="stats-band-grid">
              {FACTS.map((f) => (
                <div key={f.num} className="stat-big">
                  <span className="num grad-dark">{f.num}</span>
                  <span className="lbl">{f.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-pad" id="servicos">
        <div className="la-container">
          <div className="section-head reveal">
            <span className="eyebrow">O que a Link resolve</span>
            <h2 className="headline">Quatro frentes. <span className="light">Uma equipe responsável.</span></h2>
          </div>

          <div className="card-grid">
            {SERVICES.map((s, i) => (
              <Link key={s.title} href={s.href} className="glass-card glass sheen reveal" data-delay={(i % 2) + 1}>
                <div className="ic"><Icon name={s.icon} size={22} /></div>
                <h3 className="title">{s.title}</h3>
                <p>{s.body}</p>
                <span className="link-arrow">Ver escopo completo <Icon name="arrowRight" size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Processo — linha do tempo */}
      <section className="section-pad-sm" id="processo">
        <div className="la-container">
          <div className="section-head reveal">
            <span className="eyebrow">Como trabalhamos</span>
            <h2 className="headline">Do diagnóstico <span className="light">à aprovação.</span></h2>
            <p className="lead">
              Você sabe a qualquer momento quem está conduzindo o quê, onde está parado e quando volta a andar.
            </p>
          </div>

          <div className="timeline">
            {STEPS.map((s, i) => (
              <div key={s.n} className="timeline-item reveal" data-delay={(i % 2) + 1}>
                <span className="timeline-dot" aria-hidden="true" />
                <span className="k">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="meta">
                  {s.meta.map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setores */}
      <section className="section-pad-sm">
        <div className="la-container">
          <div className="section-head reveal" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Para quem</span>
            <h2 className="headline" style={{ fontSize: 'clamp(26px, 2.8vw, 38px)' }}>
              Indústrias que operam em <span className="light">ambientes regulatórios exigentes.</span>
            </h2>
          </div>
          <div className="sector-strip reveal" data-delay="1">
            {SECTORS.map((s) => (
              <span key={s.name} className="sector-mark">
                <Icon name={s.icon} size={20} />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="la-container">
          <div className="cta-panel glass-dark sheen on-dark reveal">
            <span className="eyebrow">Próximo passo</span>
            <h2 className="headline">Sua operação protegida <span className="light">começa com uma conversa.</span></h2>
            <p className="lead">
              Sem compromisso. Entendemos o seu cenário antes de propor qualquer coisa — e você sai com clareza, contratando a Link ou não.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-leaf" href="/contato">
                Solicitar diagnóstico gratuito <Icon name="arrowRight" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
