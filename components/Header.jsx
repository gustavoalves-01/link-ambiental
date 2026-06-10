"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`la-header${scrolled ? " scrolled" : ""}`}>
      <div className="la-header-pill">
        <Link
          href="/"
          className="la-logo"
          aria-label="Link Ambiental — página inicial"
        >
          <Image
            src="/assets/logo/link-ambiental-header.svg"
            alt=""
            width={63}
            height={34}
            priority
            style={{ height: 34, width: "auto" }}
          />
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="la-nav">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={pathname === l.href ? "active" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="la-header-cta">
          <Link className="btn btn-solid" href="/contato">
            Diagnóstico gratuito <Icon name="arrowRight" size={14} />
          </Link>
          <button
            className="la-mobile-toggle"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="la-mobile-menu glass">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={pathname === l.href ? "active" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="menu-cta">
              <Link className="btn btn-solid" href="/contato">
                Diagnóstico gratuito <Icon name="arrowRight" size={14} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
