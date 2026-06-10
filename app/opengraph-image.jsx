import { ImageResponse } from 'next/og'

export const alt = 'Link Ambiental — Consultoria de SSMA para indústrias'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'linear-gradient(135deg, #0D2A2A 0%, #06402B 100%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#8FD089',
          }}
        >
          <div style={{ width: 48, height: 3, background: '#8FD089', display: 'flex' }} />
          Link Ambiental
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
            Conformidade não é burocracia. É proteção.
          </div>
          <div style={{ fontSize: 30, color: '#ACD9B1', maxWidth: 900, lineHeight: 1.4 }}>
            Consultoria de SSMA que conduz indústrias do diagnóstico à aprovação — desde 2017.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 22, color: '#FFFFFF', opacity: 0.85 }}>
          <span>Licenciamento</span>
          <span style={{ color: '#8FD089' }}>·</span>
          <span>Segurança do Trabalho</span>
          <span style={{ color: '#8FD089' }}>·</span>
          <span>Resíduos</span>
          <span style={{ color: '#8FD089' }}>·</span>
          <span>Sustentabilidade</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
