import Icon from './Icon'

const SECTORS = [
  { icon: 'flask',   title: 'Químicas',         body: 'Operações com NR-20, NR-23, controle de emissões e gestão de produtos perigosos.' },
  { icon: 'factory', title: 'Metalúrgicas',     body: 'Processos térmicos, efluentes industriais e licenciamento de instalações fixas.' },
  { icon: 'truck',   title: 'Logística pesada', body: 'Terminais, transporte de cargas perigosas, MOPP e gestão de resíduos de operação.' },
  { icon: 'droplet', title: 'Tratamento e água', body: 'Outorgas, monitoramento de efluentes e conformidade com a Resolução CONAMA.' },
]

export default function SegmentSection() {
  return (
    <section className="segment section-pad" id="segmento">
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
              {['Médio porte', 'Grande porte', 'Multi-planta', 'Operação contínua', 'Auditoria recorrente'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="sector-grid reveal" data-delay="1">
            {SECTORS.map((s) => (
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
  )
}
