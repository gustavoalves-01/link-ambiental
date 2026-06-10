/**
 * Dados institucionais da Link Ambiental — fonte única para todo o site.
 * Origem: Portfólio de Serviços oficial (2026).
 */
export const SITE_URL = 'https://www.linkambiental.com'

export const CONTACT = {
  email: 'contato@linkambiental.com',
  whatsappDisplay: '+55 11 99492-8921',
  whatsappNumber: '5511994928921',
  cnpj: '28.452.434/0001-41',
  matriz: {
    label: 'Matriz Operacional',
    address: 'Rua Avelino Mariano Pena, 549 — Jardim Restinga',
    city: 'Suzano · SP',
  },
  escritorio: {
    label: 'Escritório',
    address: 'Rua Giovanni Battista Pirelli, 271 — Sala 805, Vila Homero Thon',
    city: 'Santo André · SP',
  },
}

export function whatsappLink(message) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
