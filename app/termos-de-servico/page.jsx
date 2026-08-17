import LegalPage from '@/components/LegalPage'
import { CONTACT, SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Termos de serviço',
  description: 'Termos aplicáveis ao uso do site e dos canais digitais da Link Ambiental.',
  alternates: { canonical: '/termos-de-servico' },
}

export default function TermosDeServicoPage() {
  return (
    <LegalPage
      eyebrow="Regras de uso"
      title={<>Termos de <span className="light">serviço.</span></>}
      intro="Estes termos definem as regras para o uso do site e dos canais digitais da Link Ambiental."
      updatedAt="2026-08-17"
    >
      <p className="legal-callout">
        Ao acessar {SITE_URL} ou utilizar um canal digital da Link Ambiental, você declara que leu estes termos. Se não concordar com eles, não utilize o site ou os serviços digitais.
      </p>

      <h2>1. Identificação do serviço</h2>
      <p>
        O site é mantido por <strong>Link Ambiental Consultoria LTDA</strong>, CNPJ nº {CONTACT.cnpj}, com endereço na {CONTACT.matriz.address}, {CONTACT.matriz.city}. O contato oficial é <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>2. Objeto</h2>
      <p>
        O site apresenta informações institucionais e serviços de consultoria de SSMA, meio ambiente, saúde, segurança do trabalho e sustentabilidade. Os canais digitais podem permitir o envio de uma solicitação de contato ou diagnóstico.
      </p>
      <p>
        O conteúdo do site é informativo e não substitui uma análise técnica, jurídica ou regulatória específica. Uma proposta comercial, escopo, prazo e preço somente serão considerados acordados quando formalizados entre as partes por escrito.
      </p>

      <h2>3. Uso permitido</h2>
      <p>Você se compromete a utilizar o site de forma lícita e a:</p>
      <ul>
        <li>fornecer informações verdadeiras, atualizadas e próprias, ou ter autorização para fornecê-las;</li>
        <li>não tentar obter acesso indevido, testar vulnerabilidades ou interferir na operação do site;</li>
        <li>não enviar conteúdo ilícito, ofensivo, fraudulento, malicioso ou que viole direitos de terceiros;</li>
        <li>não utilizar o site para disparos, scraping abusivo, spam ou finalidade concorrencial desleal.</li>
      </ul>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Marcas, nomes, textos, imagens, logotipos, layouts e demais conteúdos do site pertencem à Link Ambiental ou são utilizados sob autorização. É permitida a consulta para uso pessoal ou profissional legítimo, mas não a reprodução, distribuição, alteração ou exploração comercial sem autorização prévia por escrito.
      </p>

      <h2>5. Links e serviços de terceiros</h2>
      <p>
        O site pode direcionar você para WhatsApp, produtos da Meta, provedores de e-mail ou outros sites. Esses ambientes têm termos, políticas e controles próprios. A Link Ambiental não controla a disponibilidade, o conteúdo ou as práticas de privacidade de terceiros.
      </p>

      <h2>6. Disponibilidade e responsabilidade</h2>
      <p>
        Empregamos esforços razoáveis para manter o site disponível e atualizado, mas não garantimos funcionamento ininterrupto ou ausência de erros. Podemos suspender ou alterar páginas e recursos para manutenção, segurança ou atualização.
      </p>
      <p>
        As informações do site não constituem garantia de aprovação de licenças, autorizações ou resultados perante órgãos públicos, pois esses resultados dependem também de documentos, fatos, prazos, decisões e requisitos de terceiros. A responsabilidade por informações enviadas pelo usuário é de quem as fornece.
      </p>

      <h2>7. Dados pessoais</h2>
      <p>
        O tratamento de dados pessoais decorrente do uso do site é explicado na <a href="/politica-de-privacidade">Política de privacidade</a>. Para solicitar a exclusão de dados, consulte as <a href="/exclusao-de-dados">Instruções de exclusão de dados</a>.
      </p>

      <h2>8. Suspensão de acesso</h2>
      <p>
        Podemos limitar ou suspender o acesso de quem violar estes termos, a legislação ou a segurança do site, sem prejuízo das medidas cabíveis. Sempre que possível, consideraremos a gravidade e a possibilidade de correção da conduta.
      </p>

      <h2>9. Alterações dos termos</h2>
      <p>
        Estes termos podem ser atualizados para acompanhar mudanças no site, nos serviços ou na legislação. A versão vigente estará disponível nesta página, com a data da última atualização.
      </p>

      <h2>10. Lei aplicável e contato</h2>
      <p>
        Estes termos são regidos pelas leis brasileiras. Questões sobre o uso do site devem ser encaminhadas inicialmente para <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>, para tentativa de solução direta.
      </p>
    </LegalPage>
  )
}
