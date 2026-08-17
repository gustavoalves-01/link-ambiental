# Referências para as páginas legais

Esta nota registra as fontes consultadas para estruturar as páginas públicas de privacidade, termos e exclusão de dados do site da Link Ambiental.

## Requisitos do Meta

- O campo de exclusão de dados do Meta aceita uma URL pública com instruções para que a pessoa solicite a exclusão dos dados quando o aplicativo não implementa um callback automático. A página criada para esse fim é `/exclusao-de-dados`.
- A página de exclusão orienta o pedido por e-mail, identifica o controlador, explica a confirmação de identidade e informa as exceções de conservação. Ela não apresenta um callback URL, porque o projeto atual não possui endpoint de backend para receber o callback do Meta.
- A política de privacidade informa o escopo do serviço, os dados tratados, finalidades, compartilhamentos, retenção, segurança, direitos e canal de contato.

## LGPD e ANPD

- A ANPD informa que o titular pode solicitar confirmação, acesso, correção, anonimização, bloqueio, eliminação e outros direitos, observadas as hipóteses legais.
- A eliminação não é absoluta: dados podem ser conservados nas hipóteses do art. 16 da LGPD, como obrigação legal ou regulatória, exercício de direitos e outras hipóteses previstas em lei.
- A ANPD orienta que o titular primeiro exerça o direito diretamente perante o controlador e guarde os registros da solicitação.

## Fontes primárias

- [ANPD — Direitos dos titulares](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares)
- [ANPD — Denúncia/Petição de titular referente à LGPD](https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/denuncia-peticao-de-titular-referente-lgpd)
- [Lei nº 13.709/2018 — LGPD, texto compilado no Planalto](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm)
- [Meta Privacy Policy](https://www.facebook.com/privacy/policy/)
- [Meta for Developers — Data Deletion Callback](https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback/)

> Esta nota é uma referência de implementação, não substitui revisão jurídica. Antes de publicar, confirme se o app Meta coleta algum dado adicional e atualize a política para refletir exatamente esse tratamento.
