import Icon from './Icon'
import OpenModalButton from './OpenModalButton'

const INCLUDES = [
  'Conversa de 30 minutos com especialista técnico, não com vendedor.',
  'Mapeamento das licenças ativas e seus vencimentos.',
  'Identificação dos três riscos mais urgentes da sua operação.',
  'Recomendações priorizadas que você pode executar com qualquer parceiro.',
]

export default function CtaFinalSection() {
  return (
    <section className="cta-final on-dark" id="contato">
      <div
        className="cta-final-bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2000&q=80&auto=format&fit=crop')" }}
        aria-hidden="true"
      />
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              <OpenModalButton className="btn btn-leaf">
                Solicitar diagnóstico gratuito <Icon name="arrowRight" size={14} />
              </OpenModalButton>
              <a className="btn btn-ghost" href="mailto:contato@linkambiental.com.br">
                contato@linkambiental.com.br
              </a>
            </div>
          </div>

          <div className="cta-final-card reveal" data-delay="1">
            <h3>O que está incluído</h3>
            <ul>
              {INCLUDES.map((item) => (
                <li key={item}>
                  <Icon name="check" size={18} />
                  {item}
                </li>
              ))}
              <li>
                <Icon name="check" size={18} />
                Resposta em até <strong style={{ color: 'var(--la-white)' }}>1 dia útil</strong>.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
