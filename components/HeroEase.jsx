import Icon from './Icon'
import SolutionsCarousel from './SolutionsCarousel'
import OpenModalButton from './OpenModalButton'

const SECTORS = [
  { name: 'Química',            icon: 'flask'    },
  { name: 'Metalurgia',         icon: 'factory'  },
  { name: 'Logística',          icon: 'truck'    },
  { name: 'Tratamento de água', icon: 'droplet'  },
  { name: 'Mineração',          icon: 'mountain' },
  { name: 'Energia',            icon: 'bolt'     },
]

const SCOPE = ['LP','LI','LO','PGR','AVCB','ASO','LTCAT','PCMSO','MTR','CADRI','PGRS','CETESB','IBAMA','ESG']

export default function HeroEase() {
  return (
    <>
      <div className="hero-ease-wrap" id="top">
        <div className="hero-ease-grid">

          {/* LEFT: text + CTA */}
          <div className="hero-ease-col-left">
            <div className="hero-ease-card-text reveal in-view">
              <h1 className="hero-serif">
                Conformidade não é burocracia.
                <span className="light">É proteção.</span>
              </h1>
              <p className="hero-ease-sub">
                A consultoria de SSMA que conduz sua indústria do diagnóstico à aprovação — sem você se perder no caminho.
              </p>
            </div>

            <OpenModalButton className="hero-ease-cta-card reveal in-view" data-delay="1">
              <span>Falar com especialista</span>
              <span className="arrow"><Icon name="arrowRight" size={20} /></span>
            </OpenModalButton>
          </div>

          {/* RIGHT: solutions carousel */}
          <div className="hero-ease-col-right reveal in-view" data-delay="2">
            <SolutionsCarousel />
          </div>

        </div>
      </div>

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="trust-eyebrow">Atendendo indústrias regulamentadas em</div>
        <div className="trust-logos">
          {SECTORS.map((s) => (
            <span key={s.name} className="sector-mark">
              <Icon name={s.icon} size={18} />
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* Scope strip */}
      <div className="scope-strip">
        <div className="scope-tags">
          {SCOPE.map((s) => <span key={s}>{s}</span>)}
          <span className="featured">Cobertura técnica completa</span>
        </div>
      </div>
    </>
  )
}
