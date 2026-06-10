import Icon from '@/components/Icon'
import ContactForm from '@/components/ContactForm'
import { CONTACT, whatsappLink } from '@/lib/site'

export const metadata = {
  title: 'Contato',
  description:
    'Solicite um diagnóstico gratuito: conversa de 30 minutos com especialista técnico sobre licenças, prazos críticos e riscos da sua operação. Resposta em até 1 dia útil.',
  alternates: { canonical: '/contato' },
}

const WA_PAGE = whatsappLink('Olá! Gostaria de solicitar um diagnóstico gratuito para a minha operação.')

const INCLUDES = [
  'Conversa de 30 minutos com especialista técnico, não com vendedor',
  'Mapeamento das licenças ativas e seus vencimentos',
  'Identificação dos riscos mais urgentes da sua operação',
  'Recomendações priorizadas — que você pode executar com qualquer parceiro',
]

export default function ContatoPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="la-container">
          <span className="eyebrow reveal in-view">Diagnóstico gratuito</span>
          <h1 className="display reveal in-view">
            Comece com <span className="light">uma conversa.</span>
          </h1>
          <p className="lead reveal in-view" data-delay="1">
            Sem compromisso. Entendemos o seu cenário antes de propor qualquer coisa — e você sai com clareza, contratando a Link ou não.
          </p>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="la-container">
          <div className="contact-grid">

            <div className="glass-card glass sheen reveal" style={{ gap: 24 }}>
              <h2 className="title">Conte seu cenário</h2>
              <ContactForm />
            </div>

            <div className="contact-aside">
              <div className="glass-card glass sheen reveal" data-delay="1" style={{ gap: 22 }}>
                <div className="contact-item">
                  <div className="ic"><Icon name="whatsapp" size={20} /></div>
                  <div>
                    <h4>WhatsApp</h4>
                    <a href={WA_PAGE} target="_blank" rel="noopener noreferrer">{CONTACT.whatsappDisplay}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ic"><Icon name="mail" size={20} /></div>
                  <div>
                    <h4>E-mail</h4>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ic"><Icon name="mapPin" size={20} /></div>
                  <div>
                    <h4>{CONTACT.matriz.label}</h4>
                    <p>{CONTACT.matriz.address}<br />{CONTACT.matriz.city}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ic"><Icon name="mapPin" size={20} /></div>
                  <div>
                    <h4>{CONTACT.escritorio.label}</h4>
                    <p>{CONTACT.escritorio.address}<br />{CONTACT.escritorio.city}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card glass-dark sheen on-dark reveal" data-delay="2">
                <h3 className="title" style={{ color: 'var(--la-white)' }}>O que está incluído</h3>
                <ul className="scope-list" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  {INCLUDES.map((item) => (
                    <li key={item} style={{ color: 'rgba(255,255,255,0.78)' }}>{item}</li>
                  ))}
                </ul>
                <p style={{ fontSize: 13.5 }}>
                  Resposta em até <strong style={{ color: 'var(--la-white)' }}>1 dia útil</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
