import Link from 'next/link'
import Icon from '@/components/Icon'

export const metadata = {
  title: 'Serviços',
  description:
    'Mais de 40 serviços de SSMA para indústrias: licenciamento ambiental (LP, LI, LO), PGR, AVCB, LTCAT, CADRI, gestão de resíduos, auditorias e relatórios ESG.',
  alternates: { canonical: '/servicos' },
}

const FRONTS = [
  {
    id: 'licenciamento', icon: 'fileCheck', n: '01',
    title: 'Licenciamento e conformidade ambiental',
    body: 'Condução técnica e estratégica de licenças, alvarás e documentos junto a órgãos municipais, estaduais e federais — do diagnóstico à aprovação.',
    groups: [
      {
        name: 'Licenciamento ambiental',
        items: ['Licenciamento ambiental completo', 'Renovação de licença de operação', 'Licença para ampliação (LP/LI/LO)', 'Licença para novo estabelecimento ou equipamento', 'Licenciamento de gasoduto e APRM', 'Atividades isentas ou dispensadas (DAIL/CDL)'],
      },
      {
        name: 'Estudos e pareceres',
        items: ['Parecer técnico ambiental', 'Estudo de análise de risco (EAR)', 'Análise ambiental preliminar', 'Investigação confirmatória', 'Plano de atendimento a emergências (PAE)', 'Plano de preparação de comunidades (PPC)', 'Laudo de ruído ambiental (NBR 10151)'],
      },
      {
        name: 'Autorizações e regularização',
        items: ['Autorização de supressão de vegetação', 'Autorização de movimentação de terra', 'Compensação ambiental', 'Licença sanitária', 'Habite-se', 'Alvará de funcionamento'],
      },
    ],
    tags: ['LP', 'LI', 'LO', 'CETESB', 'IBAMA', 'DAIL', 'EAR'],
  },
  {
    id: 'sst', icon: 'shieldCheck', n: '02',
    title: 'Saúde e segurança do trabalho',
    body: 'Programas, laudos e treinamentos com rigor técnico e execução que respeita sua operação — sem parar a planta.',
    groups: [
      {
        name: 'Programas e laudos',
        items: ['PGR ocupacional', 'LTCAT', 'Laudo de insalubridade', 'Laudo de periculosidade', 'CIPA', 'PPP'],
      },
      {
        name: 'Proteção contra incêndio',
        items: ['AVCB', 'CLCB', 'FAT bombeiros', 'Autorização para treinamento de combate a incêndio'],
      },
      {
        name: 'Saúde ocupacional e treinamentos',
        items: ['PCMSO', 'ASO', 'Treinamentos de NR', 'Treinamento de brigada de incêndio'],
      },
    ],
    tags: ['PGR', 'AVCB', 'LTCAT', 'PCMSO', 'ASO', 'PPP', 'CIPA'],
  },
  {
    id: 'residuos', icon: 'recycle', n: '03',
    title: 'Gestão de resíduos',
    body: 'Gestão integrada da origem ao destino certificado, com rastreabilidade documental completa e conformidade com a legislação vigente.',
    groups: [
      {
        name: 'Gestão e destinação',
        items: ['Gestão de resíduos via SIGOR/MTR', 'Emissão e renovação de CADRI', 'Destinação de resíduos industriais', 'Destinação de resíduos especiais', 'Descarte de itens medicinais'],
      },
    ],
    tags: ['MTR', 'CADRI', 'SIGOR', 'PGRS', 'CDF'],
  },
  {
    id: 'sustentabilidade', icon: 'barChart', n: '04',
    title: 'Sustentabilidade e governança SSMA',
    body: 'Indicadores, auditorias e diagnósticos que posicionam sua indústria além da conformidade mínima — sustentabilidade como vantagem competitiva.',
    groups: [
      {
        name: 'Indicadores e ESG',
        items: ['Estruturação de indicadores de resíduos (CADRI/SIGOR)', 'Estruturação de indicadores de licenciamento e riscos', 'Apoio a relatórios ESG/SSMA'],
      },
      {
        name: 'Auditoria e governança',
        items: ['Auditorias SSMA — segurança, saúde e meio ambiente', 'Diagnóstico de conformidade SSMA', 'Plano de ação e roadmap SSMA'],
      },
    ],
    tags: ['ESG', 'SSMA', 'GRI'],
  },
]

export default function ServicosPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="la-container">
          <span className="eyebrow reveal in-view">Portfólio de serviços</span>
          <h1 className="display reveal in-view">
            A sigla certa, <span className="light">na hora certa.</span>
          </h1>
          <p className="lead reveal in-view" data-delay="1">
            Mais de 40 serviços especializados em quatro frentes integradas — conduzidos por equipe técnica interna, do licenciamento completo ao laudo específico.
          </p>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="la-container" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {FRONTS.map((f) => (
            <article key={f.id} id={f.id} className="glass-card glass sheen reveal" style={{ scrollMarginTop: 120 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className="ic"><Icon name={f.icon} size={22} /></div>
                <span className="num">Frente {f.n}</span>
              </div>
              <h2 className="title" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)' }}>{f.title}</h2>
              <p style={{ maxWidth: 640 }}>{f.body}</p>

              <div className="card-grid" style={{ gap: 0, columnGap: 40 }}>
                {f.groups.map((g) => (
                  <div key={g.name}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--la-forest-600)', margin: '22px 0 0' }}>
                      {g.name}
                    </h3>
                    <ul className="scope-list" style={{ borderTop: 'none', paddingTop: 12 }}>
                      {g.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="tag-row" style={{ marginTop: 10 }}>
                {f.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad-sm" style={{ paddingTop: 0 }}>
        <div className="la-container">
          <div className="cta-panel glass-dark sheen on-dark reveal">
            <span className="eyebrow">Não encontrou o que precisa?</span>
            <h2 className="headline">Conte seu cenário. <span className="light">A gente conduz.</span></h2>
            <p className="lead">
              O portfólio completo cobre da licença de gasoduto ao plano de atendimento a emergências.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-leaf" href="/contato">
                Falar com um especialista <Icon name="arrowRight" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
