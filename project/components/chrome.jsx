// ============================================================
// Header + Footer
// ============================================================

function Header({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#problema',   label: 'Por que importa' },
    { href: '#servicos',   label: 'Serviços' },
    { href: '#processo',   label: 'Como trabalhamos' },
    { href: '#pilares',    label: 'Sobre' },
    { href: '#contato',    label: 'Contato' },
  ];

  return (
    <header className={'la-header' + (scrolled ? ' scrolled' : '')}>
      <div className="la-container la-header-inner">
        <a href="#top" className="la-logo" aria-label="Link Ambiental">
          <img src="assets/logo/link-ambiental-dark.png" alt="Link Ambiental" />
        </a>
        <nav>
          <ul className="la-nav">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="la-header-cta">
          <button className="btn btn-ghost" onClick={onCtaClick}
                  style={{ padding: '10px 16px', fontSize: 13 }}>
            Falar com especialista
          </button>
          <button className="btn btn-leaf" onClick={onCtaClick}
                  style={{ padding: '12px 18px', fontSize: 13 }}>
            Diagnóstico gratuito <Icon name="arrowRight" size={14} />
          </button>
          <button className="la-mobile-toggle" aria-label="Menu"
                  onClick={() => setMobileOpen((v) => !v)}>
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{
          background: 'rgba(250,251,248,0.97)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border-soft)',
          padding: '20px 24px',
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setMobileOpen(false)}
                                  style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--fg-1)', padding: '8px 0', display: 'block' }}>{l.label}</a></li>
            ))}
            <li style={{ marginTop: 12 }}>
              <button className="btn btn-leaf" onClick={() => { setMobileOpen(false); onCtaClick(); }} style={{ width: '100%', justifyContent: 'center' }}>
                Diagnóstico gratuito <Icon name="arrowRight" size={14} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Footer({ onCtaClick }) {
  return (
    <footer className="footer" id="footer">
      <div className="la-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-line">
              <img src="assets/logo/link-ambiental-dark.png" alt="Link Ambiental" />
            </div>
            <p>Consultoria de SSMA para indústrias que precisam de conformidade real — não de relatórios empilhados em uma gaveta.</p>
            <div className="footer-social">
              <a href="#linkedin" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
              <a href="#instagram" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
              <a href="mailto:contato@linkambiental.com.br" aria-label="E-mail"><Icon name="mail" size={16} /></a>
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
              <li><a href="#cases">Cases</a></li>
              <li><a href="#carreiras">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h5>Contato</h5>
            <div className="footer-contact-row">
              <a href="mailto:contato@linkambiental.com.br">contato@linkambiental.com.br</a>
              <a href="tel:+5511000000000">+55 11 0000-0000</a>
              <span style={{ color: 'rgba(255,255,255,0.55)', marginTop: 12 }}>
                Av. Industrial, 1234 — sala 502<br />
                Santo André · SP · 09080-000
              </span>
            </div>
            <div style={{ marginTop: 20 }}>
              <button className="btn btn-leaf" onClick={onCtaClick}
                      style={{ padding: '12px 18px', fontSize: 13 }}>
                Solicitar diagnóstico
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <span>© {new Date().getFullYear()} Link Ambiental Consultoria LTDA · CNPJ 00.000.000/0001-00</span>
          <div className="legal">
            <a href="#privacidade">Política de privacidade</a>
            <a href="#cookies">Cookies</a>
            <a href="#termos">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
