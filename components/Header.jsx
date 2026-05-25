'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useModal } from './ModalProvider'
import Icon from './Icon'

const NAV_LINKS = [
  { href: '#problema', label: 'Por que importa' },
  { href: '#servicos',  label: 'Serviços' },
  { href: '#processo',  label: 'Como trabalhamos' },
  { href: '#pilares',   label: 'Sobre' },
  { href: '#contato',   label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <header className={`la-header${scrolled ? ' scrolled' : ''}`}>
      <div className="la-container la-header-inner">
        <a href="#top" className="la-logo" aria-label="Link Ambiental — ir para o topo">
          <Image src="/assets/logo/link-ambiental-dark.png" alt="Link Ambiental" width={120} height={36} priority />
        </a>

        <nav aria-label="Navegação principal">
          <ul className="la-nav">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="la-header-cta">
          <button className="btn btn-ghost" onClick={openModal} style={{ padding: '10px 16px', fontSize: 13 }}>
            Falar com especialista
          </button>
          <button className="btn btn-leaf" onClick={openModal} style={{ padding: '12px 18px', fontSize: 13 }}>
            Diagnóstico gratuito <Icon name="arrowRight" size={14} />
          </button>
          <button
            className="la-mobile-toggle"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ background: 'rgba(250,251,248,0.97)', backdropFilter: 'blur(16px)', borderTop: '1px solid var(--border-soft)', padding: '20px 24px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={closeMenu}
                  style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--fg-1)', padding: '8px 0', display: 'block' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: 16 }}>
              <button
                className="btn btn-leaf"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => { closeMenu(); openModal() }}
              >
                Diagnóstico gratuito <Icon name="arrowRight" size={14} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
