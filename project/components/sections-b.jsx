// ============================================================
// Sections B — Process, Pillars, Segment, CTA Final
// ============================================================

// ─────────────────────────────────────────────────────────────────────────
// SECTION 5 — PROCESS (4 steps)
// ─────────────────────────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    {
      n: '01', title: 'Diagnóstico',
      body: 'Entendemos o seu cenário antes de propor qualquer solução — visita técnica e leitura completa da documentação.',
      meta: [{ k: 'Duração', v: '1–2 semanas' }, { k: 'Entrega', v: 'Mapa de riscos priorizado' }],
    },
    {
      n: '02', title: 'Plano',
      body: 'Cada etapa tem um responsável. Cada prazo tem um dono. Cada dúvida tem uma resposta.',
      meta: [{ k: 'Formato', v: 'Plano + cronograma' }, { k: 'Acesso', v: 'Painel de acompanhamento' }],
    },
    {
      n: '03', title: 'Condução',
      body: 'Gerenciamos junto a prefeituras, CETESB e reguladores. Você não precisa abrir um único protocolo.',
      meta: [{ k: 'Cadência', v: 'Status semanal' }, { k: 'SLA', v: 'Resposta em 24h' }],
    },
    {
      n: '04', title: 'Aprovação',
      body: 'Você recebe resultado — não apenas documentos. E mantemos o acompanhamento pós-emissão.',
      meta: [{ k: 'Entrega', v: 'Licença em mãos' }, { k: 'Pós', v: '12 meses de monitoramento' }],
    },
  ];

  return (
    <section className="process section-pad" id="processo" data-screen-label="05 Processo">
      <div className="la-container">
        <div className="process-head reveal">
          <span className="la-eyebrow-rule">Como trabalhamos</span>
          <h2>
            Quatro etapas <span className="light">— uma equipe, do começo ao fim.</span>
          </h2>
          <p>
            O processo visível é a prova de seriedade. Você sabe a qualquer momento quem está conduzindo o quê, onde está parado e quando volta a andar.
          </p>
        </div>

        <div className="process-track">
          {steps.map((s, i) => (
            <div key={s.n} className={'step reveal' + (i === 0 ? ' active' : '')} data-delay={i + 1}>
              <div className="step-marker">
                <div className="step-circle">{s.n}</div>
              </div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
              <div className="step-meta">
                {s.meta.map((m) => (
                  <span key={m.k}>{m.k}: <b>{m.v}</b></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 6 — PILLARS (3 differentiators + testimonial)
// ─────────────────────────────────────────────────────────────────────────
function PillarsSection() {
  const pillars = [
    {
      n: '01', title: 'Nascemos de dentro da indústria',
      body: 'Fundados em 2017 por quem vivia o mesmo labirinto regulatório dos nossos clientes. Autoridade técnica não é credencial — é experiência acumulada.',
    },
    {
      n: '02', title: 'Você nunca fica sem resposta',
      body: 'Cada etapa tem um responsável. Cada prazo tem um dono. Cada dúvida tem uma resposta. Não entregamos relatório e sumimos.',
    },
    {
      n: '03', title: 'Autoridade que fala a sua língua',
      body: 'É possível ser o maior especialista na sala e ainda comunicar com clareza. Somos técnicos — e sabemos traduzir para quem precisa decidir.',
    },
  ];

  return (
    <section className="pillars section-pad" id="pilares" data-screen-label="06 Pilares">
      <div className="la-container">
        <div className="pillars-head">
          <div className="reveal">
            <span className="la-eyebrow-rule">Por que a Link</span>
            <h2>
              Três coisas <span className="light">nos separam de uma consultoria genérica.</span>
            </h2>
          </div>
          <p className="reveal" data-delay="1">
            Conformidade ambiental é um campo cheio de gente que sabe falar a linguagem dos órgãos. Poucos sabem falar a linguagem da sua planta.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={p.n} className="pillar reveal" data-delay={i + 1}>
              <div className="num">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="testimonial reveal">
          <div className="testimonial-avatar" style={{ backgroundImage: `url("${PHOTOS.avatar}")` }} aria-hidden="true" />
          <div className="testimonial-body">
            <blockquote>
              Aprovamos a renovação da LO em 60 dias após dois anos de impasse com a CETESB. A Link entrou, mapeou o que faltava e tocou o protocolo de ponta a ponta — sem que precisássemos abrir um único e-mail.
            </blockquote>
            <div className="testimonial-meta">
              <b>Renata Carvalho</b>
              <span className="sep"></span>
              <span>Gerente de SSMA · Indústria química, ABC paulista</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 7 — SEGMENT (Para quem)
// ─────────────────────────────────────────────────────────────────────────
function SegmentSection({ photo }) {
  const sectors = [
    { icon: 'flask',   title: 'Químicas',        body: 'Operações com NR-20, NR-23, controle de emissões e gestão de produtos perigosos.' },
    { icon: 'factory', title: 'Metalúrgicas',    body: 'Processos térmicos, efluentes industriais e licenciamento de instalações fixas.' },
    { icon: 'truck',   title: 'Logística pesada', body: 'Terminais, transporte de cargas perigosas, MOPP e gestão de resíduos de operação.' },
    { icon: 'droplet', title: 'Tratamento e água', body: 'Outorgas, monitoramento de efluentes e conformidade com a Resolução CONAMA.' },
  ];

  return (
    <section className="segment section-pad" id="segmento" data-screen-label="07 Segmentação">
      <div className="la-container">
        <div className="segment-grid">
          <div className="segment-text reveal">
            <span className="la-eyebrow-rule">Para quem</span>
            <h2>
              Trabalhamos com quem opera{' '}
              <span className="leaf">em ambientes regulatórios exigentes.</span>
            </h2>
            <p>
              Indústrias químicas, metalúrgicas e de logística que precisam de conformidade real — não de relatórios empilhados em uma gaveta.
            </p>
            <div className="segment-tags">
              <span>Médio porte</span>
              <span>Grande porte</span>
              <span>Multi-planta</span>
              <span>Operação contínua</span>
              <span>Auditoria recorrente</span>
            </div>
          </div>

          <div className="sector-grid reveal" data-delay="1">
            {sectors.map((s) => (
              <div key={s.title} className="sector">
                <div className="ic"><Icon name={s.icon} size={28} /></div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 8 — CTA FINAL
// ─────────────────────────────────────────────────────────────────────────
function CtaFinalSection({ onCtaClick, photo }) {
  return (
    <section className="cta-final on-dark" id="contato" data-screen-label="08 CTA Final">
      <div className="cta-final-bg" style={{ backgroundImage: `url("${photo}")` }} aria-hidden="true" />
      <div className="la-container section-pad" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-final-content">
          <div className="reveal">
            <span className="la-eyebrow-rule" style={{ color: 'var(--la-leaf-solid)' }}>Última dobra</span>
            <h2>
              Sua operação protegida
              <span className="light">começa com uma conversa.</span>
            </h2>
            <p>
              Sem compromisso. Entendemos o seu cenário antes de propor qualquer coisa — e você sai com clareza, contratando a Link ou não.
            </p>
            <div className="cta-final-actions" style={{ marginTop: 'var(--space-6)', flexDirection: 'row', flexWrap: 'wrap' }}>
              <button className="btn btn-leaf" onClick={onCtaClick}>
                Solicitar diagnóstico gratuito <Icon name="arrowRight" size={14} />
              </button>
              <a className="btn btn-ghost" href="mailto:contato@linkambiental.com.br">
                contato@linkambiental.com.br
              </a>
            </div>
          </div>

          <div className="cta-final-card reveal" data-delay="1">
            <h3>O que está incluído</h3>
            <ul>
              <li><Icon name="check" size={18} /> Conversa de 30 minutos com especialista técnico, não com vendedor.</li>
              <li><Icon name="check" size={18} /> Mapeamento das licenças ativas e seus vencimentos.</li>
              <li><Icon name="check" size={18} /> Identificação dos três riscos mais urgentes da sua operação.</li>
              <li><Icon name="check" size={18} /> Recomendações priorizadas que você pode executar com qualquer parceiro.</li>
              <li><Icon name="check" size={18} /> Resposta em até <b style={{ color: 'var(--la-white)' }}>1 dia útil</b>.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProcessSection, PillarsSection, SegmentSection, CtaFinalSection });
