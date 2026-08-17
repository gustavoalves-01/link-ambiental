import LegalPage from '@/components/LegalPage'
import { CONTACT } from '@/lib/site'

export const metadata = {
  title: 'Exclusão de dados',
  description: 'Instruções para solicitar por e-mail a exclusão de dados pessoais da Link Ambiental.',
  alternates: { canonical: '/exclusao-de-dados' },
}

export default function ExclusaoDeDadosPage() {
  return (
    <LegalPage
      eyebrow="Seus dados"
      title={<>Solicite a <span className="light">exclusão.</span></>}
      intro="Você pode solicitar por e-mail a exclusão dos dados pessoais tratados pela Link Ambiental, inclusive dados fornecidos em uma interação com uma integração Meta."
      updatedAt="2026-08-17"
    >
      <p className="legal-callout">
        Esta página pode ser informada no Meta como <strong>User Data Deletion Instructions URL</strong> quando a exclusão for atendida por solicitação manual, por e-mail.
      </p>

      <h2>Como solicitar</h2>
      <ol>
        <li>Envie um e-mail para <a href={`mailto:${CONTACT.email}?subject=Solicita%C3%A7%C3%A3o%20de%20exclus%C3%A3o%20de%20dados`}>{CONTACT.email}</a>.</li>
        <li>Use o assunto <strong>Solicitação de exclusão de dados</strong>.</li>
        <li>Informe seu nome, o e-mail usado no contato e, se aplicável, o nome ou identificador da conta, app ou recurso Meta relacionado ao pedido.</li>
        <li>Escreva no corpo da mensagem: <strong>“Solicito a exclusão dos meus dados pessoais tratados pela Link Ambiental.”</strong></li>
      </ol>

      <h2>O que acontece depois</h2>
      <p>
        Responderemos ao pedido pelo canal utilizado para confirmar a identidade e delimitar os dados envolvidos. Depois da confirmação, avaliaremos e eliminaremos ou anonimizaremos os dados que não precisem ser mantidos, observando a legislação aplicável.
      </p>
      <p>
        Alguns registros podem ser conservados quando houver obrigação legal ou regulatória, necessidade de exercício regular de direitos, prevenção a fraude ou outra hipótese autorizada por lei. Nesses casos, os dados serão mantidos apenas para a finalidade permitida e pelo período necessário.
      </p>

      <h2>Importante</h2>
      <ul>
        <li>Não envie senhas, tokens de acesso, documentos completos ou dados sensíveis no e-mail.</li>
        <li>Se o pedido estiver relacionado a dados mantidos diretamente pela Meta, você também poderá precisar usar os controles de privacidade da própria Meta.</li>
        <li>Esta solicitação não apaga registros que a Meta ou outros provedores mantenham sob suas próprias políticas e responsabilidades.</li>
      </ul>

      <h2>Outros direitos</h2>
      <p>
        Pelo mesmo canal, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, informação sobre compartilhamentos ou revogação de consentimento, conforme aplicável. Consulte também a <a href="/politica-de-privacidade">Política de privacidade</a>.
      </p>
    </LegalPage>
  )
}
