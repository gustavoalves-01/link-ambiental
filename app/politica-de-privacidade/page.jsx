import LegalPage from '@/components/LegalPage'
import { CONTACT, SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Política de privacidade',
  description: 'Saiba como a Link Ambiental coleta, utiliza, compartilha e protege dados pessoais.',
  alternates: { canonical: '/politica-de-privacidade' },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage
      eyebrow="Transparência"
      title={<>Política de <span className="light">privacidade.</span></>}
      intro="A Link Ambiental respeita a sua privacidade e trata dados pessoais de forma clara, segura e compatível com a legislação aplicável."
      updatedAt="2026-08-17"
    >
      <p className="legal-callout">
        Esta política se aplica ao site {SITE_URL}, aos formulários e aos canais de contato vinculados a ele e, quando aplicável, às integrações da Link Ambiental com produtos da Meta.
      </p>

      <h2>1. Quem somos</h2>
      <p>
        A <strong>Link Ambiental Consultoria LTDA</strong>, inscrita no CNPJ sob o nº {CONTACT.cnpj}, é a controladora dos dados pessoais tratados nas operações descritas nesta política.
      </p>
      <p>
        <strong>Canal de privacidade e encarregado:</strong>{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>
      <p>
        Endereço para correspondência: {CONTACT.matriz.address}, {CONTACT.matriz.city}.
      </p>

      <h2>2. Quais dados podemos tratar</h2>
      <p>Dependendo da sua interação conosco, podemos tratar:</p>
      <ul>
        <li><strong>Dados de identificação:</strong> nome e, quando informado, cargo ou função;</li>
        <li><strong>Dados profissionais:</strong> empresa, setor, porte da operação e informações sobre o cenário apresentado;</li>
        <li><strong>Dados de contato:</strong> e-mail e telefone;</li>
        <li><strong>Conteúdo da comunicação:</strong> mensagens, solicitações, documentos ou informações que você decidir enviar;</li>
        <li><strong>Dados técnicos básicos:</strong> informações que podem aparecer em registros de hospedagem, segurança e acesso, como endereço IP, data, horário, navegador e dispositivo.</li>
      </ul>
      <p>
        Não solicitamos dados pessoais sensíveis para o contato comercial. Evite enviar informações sensíveis, senhas, tokens de acesso ou documentos que não sejam necessários para o atendimento.
      </p>

      <h2>3. Como coletamos os dados</h2>
      <ul>
        <li>quando você preenche um formulário ou envia uma mensagem por e-mail;</li>
        <li>quando você inicia uma conversa pelo WhatsApp;</li>
        <li>quando você interage com uma página, anúncio ou recurso da Link Ambiental em produtos da Meta;</li>
        <li>automaticamente, por meio de registros técnicos necessários à operação, segurança e prevenção de abusos do site.</li>
      </ul>

      <h2>4. Para que usamos os dados</h2>
      <p>Usamos os dados pessoais para:</p>
      <ul>
        <li>responder solicitações, dúvidas e pedidos de diagnóstico;</li>
        <li>entender o cenário da empresa e preparar um contato comercial adequado;</li>
        <li>enviar comunicações relacionadas ao atendimento solicitado;</li>
        <li>manter a segurança, prevenir fraude e registrar interações necessárias;</li>
        <li>cumprir obrigações legais, regulatórias e determinações de autoridades;</li>
        <li>exercer direitos em processos judiciais, administrativos ou arbitrais.</li>
      </ul>

      <h2>5. Bases legais</h2>
      <p>
        O tratamento pode se fundamentar, conforme o caso, na execução de procedimentos preliminares relacionados a contrato, no legítimo interesse, no cumprimento de obrigação legal ou regulatória, no exercício regular de direitos ou no consentimento. Quando o tratamento depender de consentimento, você poderá revogá-lo a qualquer momento pelo canal de privacidade.
      </p>

      <h2>6. Compartilhamento e transferências</h2>
      <p>
        Podemos compartilhar o mínimo necessário com provedores de hospedagem, segurança, e-mail e comunicação, além de fornecedores que prestem serviços para a Link Ambiental. Quando você escolhe falar conosco por WhatsApp ou interage com produtos da Meta, a Meta e seus prestadores também podem tratar dados sob suas próprias políticas e termos.
      </p>
      <p>
        Não vendemos dados pessoais. Também não compartilhamos dados para finalidades incompatíveis com as informadas nesta política. Alguns fornecedores podem processar dados fora do Brasil; nesses casos, adotamos as medidas e garantias exigidas pela legislação aplicável.
      </p>

      <h2>7. Retenção e eliminação</h2>
      <p>
        Mantemos os dados somente pelo período necessário para cumprir as finalidades informadas, atender obrigações legais, preservar registros de segurança ou exercer direitos. Depois disso, os dados serão eliminados ou anonimizados, ressalvadas as hipóteses legais que autorizem a conservação.
      </p>

      <h2>8. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados, perda, alteração, divulgação ou destruição. Nenhum ambiente é completamente livre de riscos; por isso, também pedimos que você não envie credenciais ou informações desnecessárias pelos canais de contato.
      </p>

      <h2>9. Cookies e tecnologias semelhantes</h2>
      <p>
        O site pode utilizar recursos técnicos estritamente necessários ao funcionamento, segurança e entrega das páginas. Na versão atual, não utilizamos cookies próprios de publicidade ou analytics para criar perfis de visitantes. Se essa prática mudar, atualizaremos esta política e informaremos as opções disponíveis.
      </p>

      <h2>10. Seus direitos</h2>
      <p>
        Nos termos da LGPD, você pode solicitar confirmação da existência de tratamento, acesso, correção, anonimização, bloqueio, eliminação de dados desnecessários ou tratados em desconformidade, informação sobre compartilhamentos, revogação do consentimento e demais direitos aplicáveis.
      </p>
      <p>
        Para exercer um direito, envie um e-mail para <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Podemos solicitar informações razoáveis para confirmar a identidade e proteger os dados contra solicitações fraudulentas. O atendimento é gratuito, observadas as hipóteses legais de conservação e os prazos aplicáveis.
      </p>

      <h2>11. Crianças e adolescentes</h2>
      <p>
        Nossos canais são direcionados a empresas e ao público profissional. Não buscamos coletar intencionalmente dados de crianças. Se você identificar que uma criança enviou dados pessoais, entre em contato para que possamos avaliar a eliminação adequada.
      </p>

      <h2>12. Alterações</h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças no site, nos serviços ou na legislação. A versão vigente estará sempre disponível nesta página, com a data da última atualização.
      </p>

      <h2>13. Contato</h2>
      <p>
        Dúvidas, solicitações ou reclamações sobre privacidade podem ser encaminhadas para <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>
    </LegalPage>
  )
}
