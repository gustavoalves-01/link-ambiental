import Icon from './Icon'
import OpenModalButton from './OpenModalButton'

const SERVICES = [
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
]

export default function ServicesSection() {
  return (
    <section className="services section-pad" id="servicos">
      <div className="la-container">

        <div className="services-head">
          <div className="reveal">
            <span className="la-eyebrow-rule">O que a Link resolve</span>
            <h2 className="services-title">
              Quatro frentes. <span className="light">Uma equipe responsável.</span>
            </h2>
          </div>
          <p className="services-intro reveal" data-delay="1">
            Cada serviço é conduzido por especialistas técnicos internos — não terceirizado para freelancers. A sigla certa vem na hora certa.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
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
          <OpenModalButton className="btn btn-link">
            Ver todos os serviços <Icon name="arrowRight" size={14} />
          </OpenModalButton>
        </div>

      </div>
    </section>
  )
}
