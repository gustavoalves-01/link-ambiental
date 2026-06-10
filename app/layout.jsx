import './globals.css'
import localFont from 'next/font/local'
import { SITE_URL, CONTACT } from '@/lib/site'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import RevealObserver from '@/components/RevealObserver'

const oxygen = localFont({
  src: [
    { path: './fonts/Oxygen-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Oxygen-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Oxygen-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-oxygen',
  display: 'swap',
})

const neuton = localFont({
  src: [
    { path: './fonts/Neuton-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Neuton-Italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/Neuton-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-neuton',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Link Ambiental — Consultoria de SSMA para indústrias',
    template: '%s · Link Ambiental',
  },
  description:
    'Consultoria de SSMA que conduz médias e grandes indústrias à conformidade regulatória — licenciamento ambiental, saúde e segurança do trabalho, gestão de resíduos e sustentabilidade. Do diagnóstico à aprovação, desde 2017.',
  keywords: [
    'consultoria ambiental',
    'consultoria SSMA',
    'licenciamento ambiental',
    'licença de operação CETESB',
    'AVCB',
    'PGR',
    'LTCAT',
    'CADRI',
    'gestão de resíduos industriais',
    'conformidade regulatória',
    'saúde e segurança do trabalho',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Link Ambiental',
    title: 'Link Ambiental — Consultoria de SSMA para indústrias',
    description:
      'Transformamos complexidade regulatória em conformidade real. Licenciamento, SST, resíduos e sustentabilidade para indústrias — do diagnóstico à aprovação.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Link Ambiental — Consultoria de SSMA para indústrias',
    description:
      'Transformamos complexidade regulatória em conformidade real. Do diagnóstico à aprovação, desde 2017.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: '/assets/logo/link-ambiental-leaf-stroke.svg', type: 'image/svg+xml' }],
  },
}

export const viewport = {
  themeColor: '#0D2A2A',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Link Ambiental',
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.whatsappDisplay,
  foundingDate: '2017',
  description:
    'Consultoria de SSMA — meio ambiente, saúde, segurança do trabalho e sustentabilidade — para médias e grandes indústrias. Licenciamento ambiental, conformidade regulatória, gestão de resíduos e ESG.',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Avelino Mariano Pena, 549 — Jardim Restinga',
      addressLocality: 'Suzano',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Giovanni Battista Pirelli, 271 — Sala 805, Vila Homero Thon',
      addressLocality: 'Santo André',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  ],
  areaServed: { '@type': 'State', name: 'São Paulo' },
  knowsAbout: [
    'Licenciamento ambiental',
    'Conformidade regulatória',
    'Gestão de resíduos industriais',
    'Saúde e segurança do trabalho',
    'Sustentabilidade e ESG',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${oxygen.variable} ${neuton.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="aurora" aria-hidden="true"><span className="blob" /></div>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
      </body>
    </html>
  )
}
