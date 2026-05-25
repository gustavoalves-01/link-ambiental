import './globals.css'

export const metadata = {
  title: 'Link Ambiental — Conformidade não é burocracia. É proteção.',
  description: 'Consultoria de SSMA para indústrias químicas, metalúrgicas e de logística. Do diagnóstico à aprovação — sem você se perder no caminho.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/assets/logo/link-ambiental-leaf-stroke.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
