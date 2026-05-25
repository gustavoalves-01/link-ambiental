const PILLARS = [
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
]

export default function PillarsSection() {
  return (
    <section className="pillars section-pad" id="pilares">
      <div className="la-container">

        <div className="pillars-head">
          <div className="reveal">
            <span className="la-eyebrow-rule">Por que a Link</span>
            <h2>Três coisas <span className="light">nos separam de uma consultoria genérica.</span></h2>
          </div>
          <p className="reveal" data-delay="1">
            Conformidade ambiental é um campo cheio de gente que sabe falar a linguagem dos órgãos. Poucos sabem falar a linguagem da sua planta.
          </p>
        </div>

        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <div key={p.n} className="pillar reveal" data-delay={i + 1}>
              <div className="num">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="testimonial reveal">
          <div
            className="testimonial-avatar"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&q=80&auto=format&fit=crop&crop=faces')" }}
            aria-hidden="true"
          />
          <div className="testimonial-body">
            <blockquote>
              Aprovamos a renovação da LO em 60 dias após dois anos de impasse com a CETESB. A Link entrou, mapeou o que faltava e tocou o protocolo de ponta a ponta — sem que precisássemos abrir um único e-mail.
            </blockquote>
            <div className="testimonial-meta">
              <strong>Renata Carvalho</strong>
              <span className="sep" />
              <span>Gerente de SSMA · Indústria química, ABC paulista</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
