import Image from 'next/image'
import Icon from './Icon'
import OpenModalButton from './OpenModalButton'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="la-container">
        <div className="footer-grid">

          <div className="footer-brand">
            <div className="logo-line">
              <Image src="/assets/logo/link-ambiental-dark.png" alt="Link Ambiental" width={120} height={38} />
            </div>
            <p>Consultoria de SSMA para indústrias que precisam de conformidade real — não de relatórios empilhados em uma gaveta.</p>
            <div className="footer-social">
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" size={16} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={16} />
              </a>
              <a href="mailto:contato@linkambiental.com.br" aria-label="E-mail">
                <Icon name="mail" size={16} />
              </a>
            </div>
          </div>

          <div>
            <h5>Serviços</h5>
            <ul>
              <li><a href="#servicos">Licenciamento ambiental</a></li>
              <li><a href="#servicos">Saúde e segurança do trabalho</a></li>
              <li><a href="#servicos">Gestão de resíduos</a></li>
              <li><a href="#servicos">Sustentabilidade e ESG</a></li>
              <li><a href="#servicos">Ver todos os serviços</a></li>
            </ul>
          </div>

          <div>
            <h5>Empresa</h5>
            <ul>
              <li><a href="#pilares">Sobre a Link</a></li>
              <li><a href="#processo">Como trabalhamos</a></li>
              <li><a href="#segmento">Para quem atendemos</a></li>
              <li><a href="#pilares">Cases</a></li>
              <li><a href="#pilares">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h5>Contato</h5>
            <div className="footer-contact-row">
              <a href="mailto:contato@linkambiental.com.br">contato@linkambiental.com.br</a>
              <a href="tel:+5511000000000">+55 11 0000-0000</a>
              <span style={{ color: 'rgba(255,255,255,0.55)', marginTop: 12, display: 'block' }}>
                Av. Industrial, 1234 — sala 502<br />
                Santo André · SP · 09080-000
              </span>
            </div>
            <div style={{ marginTop: 20 }}>
              <OpenModalButton className="btn btn-leaf" style={{ padding: '12px 18px', fontSize: 13 }}>
                Solicitar diagnóstico
              </OpenModalButton>
            </div>
          </div>

        </div>

        <div className="footer-bar">
          <span>© {year} Link Ambiental Consultoria LTDA · CNPJ 00.000.000/0001-00</span>
          <div className="legal">
            <a href="#privacidade">Política de privacidade</a>
            <a href="#cookies">Cookies</a>
            <a href="#termos">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
