const STEPS = [
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
]

export default function ProcessSection() {
  return (
    <section className="process section-pad" id="processo">
      <div className="la-container">

        <div className="process-head reveal">
          <span className="la-eyebrow-rule">Como trabalhamos</span>
          <h2>Quatro etapas <span className="light">— uma equipe, do começo ao fim.</span></h2>
          <p>
            O processo visível é a prova de seriedade. Você sabe a qualquer momento quem está conduzindo o quê, onde está parado e quando volta a andar.
          </p>
        </div>

        <div className="process-track">
          {STEPS.map((s, i) => (
            <div key={s.n} className={`step reveal${i === 0 ? ' active' : ''}`} data-delay={i + 1}>
              <div className="step-marker">
                <div className="step-circle">{s.n}</div>
              </div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
              <div className="step-meta">
                {s.meta.map((m) => (
                  <span key={m.k}>{m.k}: <strong>{m.v}</strong></span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
