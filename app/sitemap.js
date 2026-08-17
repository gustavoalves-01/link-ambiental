import { SITE_URL } from '@/lib/site'

const ROUTES = [
  { path: '', priority: 1 },
  { path: '/servicos', priority: 0.9 },
  { path: '/sobre', priority: 0.7 },
  { path: '/contato', priority: 0.8 },
  { path: '/politica-de-privacidade', priority: 0.3 },
  { path: '/termos-de-servico', priority: 0.3 },
  { path: '/exclusao-de-dados', priority: 0.3 },
]

export default function sitemap() {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
