import Link from 'next/link'
import Icon from '@/components/Icon'

export const metadata = {
  title: 'Sobre',
  description:
    'Fundada em 2017 de dentro da indústria, a Link Ambiental conduz médias e grandes indústrias à conformidade e à sustentabilidade com autoridade, agilidade e transparência.',
  alternates: { canonical: '/sobre' },
}

const BELIEFS = [
  {
    title: 'Conformidade é proteção',
    body: 'Uma indústria em conformidade opera com segurança, cresce com credibilidade e protege suas pessoas, seu entorno e seu futuro.',
  },
  {
    title: 'Clareza em cada etapa',
    body: 'O cliente nunca deve se sentir perdido no processo. Cada etapa tem um responsável. Cada dúvida tem uma resposta. Cada prazo tem um dono.',
  },
  {
    title: 'Agilidade é respeito',
    body: 'Respeito ao tempo, à operação e ao investimento de quem confia em nós.',
  },
]

const SECTORS = [
  { icon: 'flask',   title: 'Químicas',         body: 'NR-20, controle de emissões e gestão de produtos perigosos.' },
  { icon: 'factory', title: 'Metalúrgicas',     body: 'Processos térmicos, efluentes industriais e instalações fixas.' },
  { icon: 'truck',   title: 'Logística pesada', body: 'Terminais, cargas perigosas e resíduos de operação.' },
  { icon: 'droplet', title: 'Tratamento e água', body: 'Outorgas, efluentes e conformidade com a Resolução CONAMA.' },
]

export default function SobrePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="la-container">
          <span className="eyebrow reveal in-view">Quem somos</span>
          <h1 className="display reveal in-view">
            Nascemos de dentro <span className="light">da indústria.</span>
          </h1>
          <p className="lead reveal in-view" data-delay="1">
            Fundada em 2017 por quem conhecia a dor do mercado antes de se propor a resolvê-la — não como observador externo, mas como parte do mesmo ambiente regulatório que nossos clientes enfrentam todos os dias.
          </p>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="la-container">
          <div className="quote-panel glass sheen reveal">
            <blockquote>
              Essa origem é o que sustenta nossa autoridade técnica e orienta cada projeto. Desde então, construímos uma operação dedicada a uma única missão: conduzir indústrias à conformidade e à sustentabilidade com autoridade, agilidade e total transparência.
            </blockquote>
            <div className="quote-meta">Nossa missão</div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="la-container">
          <div className="section-head reveal">
            <span className="eyebrow">No que acreditamos</span>
            <h2 className="headline">Princípios que <span className="light">orientam cada projeto.</span></h2>
          </div>

          <div className="card-grid-3">
            {BELIEFS.map((b, i) => (
              <div key={b.title} className="glass-card glass sheen reveal" data-delay={i + 1}>
                <h3 className="title">{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="la-container">
          <div className="section-head reveal">
            <span className="eyebrow">Para quem existimos</span>
            <h2 className="headline">Indústrias em ambientes <span className="light">regulatórios exigentes.</span></h2>
            <p className="lead">
              Médias e grandes indústrias que precisam de um parceiro que entenda a complexidade do seu negócio antes de propor qualquer solução.
            </p>
          </div>

          <div className="card-grid">
            {SECTORS.map((s, i) => (
              <div key={s.title} className="glass-card glass sheen reveal" data-delay={(i % 2) + 1}>
                <div className="ic"><Icon name={s.icon} size={22} /></div>
                <h3 className="title">{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="la-container">
          <div className="cta-panel glass-dark sheen on-dark reveal">
            <span className="eyebrow">Nossa promessa</span>
            <div className="quote-panel" style={{ padding: '24px 0 0' }}>
              <blockquote style={{ fontSize: 'clamp(19px, 1.9vw, 26px)' }}>
                Para médias e grandes indústrias que operam em ambientes regulatórios complexos, a Link Ambiental é a consultoria de SSMA que conduz o caminho da conformidade com autoridade técnica, agilidade e total transparência.
              </blockquote>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-leaf" href="/contato">
                Começar com uma conversa <Icon name="arrowRight" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
