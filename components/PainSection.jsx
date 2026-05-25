import Icon from './Icon'

const SYMPTOMS = [
  { icon: 'alert', title: 'Licença vencida',          body: 'Operação exposta à paralisação e multa proporcional ao faturamento.' },
  { icon: 'clock', title: 'Laudo atrasado',           body: 'PGR, LTCAT, AVCB sem renovação no prazo — auditoria descobre antes de você.' },
  { icon: 'ban',   title: 'Órgão sem resposta',       body: 'Protocolos parados na CETESB, IBAMA ou prefeitura sem ninguém acompanhando.' },
  { icon: 'user',  title: 'Responsabilidade pessoal', body: 'Cada pendência é um foco potencial — e o nome no formulário é o seu.' },
]

export default function PainSection() {
  return (
    <section className="pain section-pad" id="problema">
      <div className="la-container">
        <div className="pain-grid">

          <div className="reveal">
            <span className="la-eyebrow-rule">O problema</span>
            <h2 className="pain-headline">
              O ambiente regulatório brasileiro não para de crescer.
              <span className="accent"> Os riscos também.</span>
            </h2>
          </div>

          <div className="pain-body reveal" data-delay="1">
            <p>
              Para um responsável de SSMA, cada pendência ambiental é um foco de incêndio potencial:{' '}
              <strong style={{ color: 'var(--fg-1)', fontWeight: 700 }}>multa, paralisação, responsabilidade pessoal.</strong>
            </p>
            <p>
              A maioria das consultorias entrega documentos. Pouquíssimas gerenciam o processo de ponta a ponta — e é exatamente aí que a operação descarrila.
            </p>
            <div className="pain-symptoms">
              {SYMPTOMS.map((s) => (
                <div key={s.title} className="pain-symptom">
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
  )
}
