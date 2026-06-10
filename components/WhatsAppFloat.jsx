import Icon from './Icon'
import { whatsappLink } from '@/lib/site'

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink('Olá! Visitei o site da Link Ambiental e gostaria de falar com um especialista.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Link Ambiental pelo WhatsApp"
    >
      <Icon name="whatsapp" size={26} />
    </a>
  )
}
