import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, whatsappLink } from '@/lib/site'

const WA_FOOTER = whatsappLink('Olá! Visitei o site da Link Ambiental e gostaria de mais informações.')

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-glass glass sheen">
        <div className="footer-grid">

          <div className="footer-brand">
            <Image src="/assets/logo/link-ambiental-dark.png" alt="Link Ambiental" width={66} height={36} style={{ height: 36, width: 'auto' }} />
            <p>Consultoria de SSMA que transforma complexidade regulatória em conformidade real para indústrias brasileiras. Desde 2017.</p>
          </div>

          <div>
            <h5>Navegação</h5>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/servicos">Serviços</Link></li>
              <li><Link href="/sobre">Sobre a Link</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h5>Frentes</h5>
            <ul>
              <li><Link href="/servicos#licenciamento">Licenciamento ambiental</Link></li>
              <li><Link href="/servicos#sst">Segurança do trabalho</Link></li>
              <li><Link href="/servicos#residuos">Gestão de resíduos</Link></li>
              <li><Link href="/servicos#sustentabilidade">Sustentabilidade</Link></li>
            </ul>
          </div>

          <div>
            <h5>Contato</h5>
            <ul>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={WA_FOOTER} target="_blank" rel="noopener noreferrer">{CONTACT.whatsappDisplay}</a></li>
              <li className="footer-address">
                <strong>{CONTACT.matriz.label}</strong><br />
                {CONTACT.matriz.address}<br />
                {CONTACT.matriz.city}
              </li>
              <li className="footer-address">
                <strong>{CONTACT.escritorio.label}</strong><br />
                {CONTACT.escritorio.address}<br />
                {CONTACT.escritorio.city}
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bar">
          <span>© {year} Link Ambiental · CNPJ {CONTACT.cnpj}</span>
          <span className="footer-legal-links">
            <Link href="/politica-de-privacidade">Privacidade</Link>
            <Link href="/termos-de-servico">Termos</Link>
            <Link href="/exclusao-de-dados">Exclusão de dados</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
