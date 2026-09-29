"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/brand";

const links = [
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="shell siteHeader__inner">
        <a className="wordmark" href="#inicio" aria-label="Helena Barem Beauty, início">
          <span className="wordmark__name">Helena Barem</span>
          <span className="wordmark__descriptor">BEAUTY</span>
        </a>

        <button
          className="menuToggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className="siteNav"
          aria-label="Navegação principal"
          data-open={menuOpen}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="button button--small button--wine siteNav__mobileCta"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp_header"
            onClick={() => setMenuOpen(false)}
          >
            Agendar horário <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <a
          className="button button--small button--wine siteHeader__cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics="whatsapp_header"
        >
          Agendar horário <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
