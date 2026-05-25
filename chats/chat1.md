# Site Institucional Link

_Started 2026-05-25 18:22 UTC_

---

## User

Crie o site institucional da Link a partir da estrutura em anexo

## Assistant

_[tool: list_files]_

_[tool: view_image]_

_[tool: questions_v2]_

## User

Questions answered:
- hero_treatment: Decide for me
- variations: Decide for me
- interactivity: Alto — formulário de contato funcional, modal de diagnóstico, contador animado de stats
- imagery: Stock corporativo Unsplash (single-pro, daylight, indústria/escritório)
- nav_footer: Header fixo com nav + footer completo (links, contato, CNPJ, redes)
- stats_section: Tipografia display gigante em fundo forest-900 (efeito 'prova social cinematográfica')

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: update_todos]_

_[tool: copy_files]_

_[tool: copy_starter_component]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: read_file]_

_[tool: grep]_

_[tool: write_file]_

Now let me build. I'll structure as: HTML shell + site.css + app.jsx (sections) + modal.jsx.Now let me build the React components and the main HTML file.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the main app file and the HTML shell:

_[tool: write_file]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Pronto. Site institucional da Link Ambiental entregue com as 8 seções da arquitetura:

**Estrutura**
- Header fixo (vira translúcido no scroll) + Footer completo (CNPJ, contato, redes, legal)
- Hero full-bleed com foto + gradiente forest assinatura + headline two-tone
- Pain section (PAS) com 4 sintomas
- Stats cinematográfica em forest-900 com contador animado
- 4 cards de Serviços com siglas técnicas
- Processo de 4 etapas com timeline conectada
- 3 Pilares + depoimento (Neuton serif)
- Segmentação com 4 setores
- CTA final dark com card "o que está incluído"

**Interatividade**
- Modal de diagnóstico funcional com validação (nome, e-mail, setor, etc.), estado de submissão e tela de sucesso
- Contador animado dos números ao entrar na viewport
- Reveal-on-scroll com IntersectionObserver
- Smooth scroll + header que reage ao scroll

**Tweaks**
- 3 tratamentos de hero: photo / paper / dark
- 4 opções de foto para o hero
- 3 paletas de destaque: leaf / citron / sky
- Toggle modo escuro do site inteiro
- Toggle imagens on/off

Próximos passos sugeridos: trocar fotos do Unsplash por fotografia real da Link, popular números reais quando disponíveis (nº de licenças aprovadas, clientes ativos), e adicionar cases reais na seção Pilares.

## User

Quero uma primeira dobra como a do https://easehealth.com/

## Assistant

_[tool: str_replace_edit]_

Deixa eu ver a referência primeiro.

_[tool: web_fetch]_

Vou refazer a primeira dobra no estilo Ease Health: tipografia gigante centrada em fundo paper, headline em duas linhas com ponto final, CTA único, e duas faixas de trust abaixo (setores + escopo técnico). Mantenho os outros tratamentos no Tweaks.Now build the new HeroEase component and make it default. I'll also wire up the sector icons.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

I used `mountain` and `bolt` icons that don't exist yet. Adding them:

_[tool: fork_verifier_agent]_

Pronto. Refiz a primeira dobra no estilo Ease Health:

- **Tipografia gigante centralizada** (até 156px) em duas linhas com ponto final — "Conformidade não é burocracia. **É proteção.**" — segunda linha em weight light forest-green
- **Pill superior** com indicador pulsante: "Consultoria SSMA · Indústria · Desde 2017"
- **CTA único** primário com micro-meta abaixo ("Resposta em até 1 dia útil · Sem compromisso")
- **Trust strip de setores** com 6 marcas (Química, Metalurgia, Logística, Tratamento de água, Mineração, Energia) — substituindo o "Backed by leading investors"
- **Strip de escopo técnico** com chips de siglas (LP, LI, LO, PGR, AVCB, ASO, LTCAT, etc.) terminando com a pill dark "Cobertura técnica completa" — espelhando o "Broad clinical support" do Ease
- Fundo paper com radiais leaf-tinted muito suaves e watermark de folha quase invisível

O hero antigo (foto full-bleed) continua disponível no painel **Tweaks → Hero → Tratamento**, junto com as variantes Paper e Dark.

## User

Verifier agent check completed

## Assistant

Ótimo — o verificador confirmou que o novo hero ficou conforme a referência. Site pronto.

## User

Hero como esse

## Assistant

_[tool: str_replace_edit]_

Agora vejo. É o layout split com card pastel + dashboard mockup à direita. Vou refazer.Now rewrite the HeroEase component:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Pronto. Hero refeito no padrão Ease Health:

- **Card único leaf-pale** com cantos arredondados e margem externa
- **Grid 2 colunas**: texto à esquerda + dashboard mockup à direita
- **Dashboard "Painel Link"**: chrome de janela, contador "12/14 licenças", pill "Em dia", 4 linhas de licenças com status dots (incluindo uma pulsante para "em renovação"), barra de progresso animada
- **Alert card flutuante** "LP renovada" pop em cima do canto inferior esquerdo do dashboard
- **Decoração**: anéis topográficos sutis no canto inferior direito do card
- Trust strip e scope tags strip ficam abaixo do card, em fundo paper

## User

Verifier agent check completed

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Bugs corrigidos. O alert flutuante "LP renovada" agora vive fora do contêiner com `overflow: hidden`, então aparece inteiro sem colidir com o rodapé do dashboard. O breakpoint do nav subiu para 1040px.

## User

Substitua o hero exatamente por essa estrutura, ao invés de um mockup, queremos um card carrossel alternando entre as soluções que oferecemos

## Assistant

_[tool: str_replace_edit]_

Vou refazer com a estrutura exata: dois cards lado-a-lado (texto+CTA esquerda, mockup direita), CTA em card separado, e o lado direito vira carrossel das 4 soluções.Now rewrite the HeroEase component with the carousel:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Pronto. Hero refeito conforme o screenshot do Ease:

**Estrutura: 2 painéis lado a lado**
- **Esquerda (40%)** — dois cards empilhados:
  - Card leaf-pale com headline em serif Neuton ("Conformidade não é burocracia. / *É proteção.*" em itálico light)
  - Card dark forest com "Falar com especialista" + botão circular de seta gigante (justify-between, hover desliza a seta)
- **Direita (60%)** — card sage-stone com carrossel:
  - Mockup branco único, cycle de 4 soluções a cada 4.2s com crossfade
  - Cada card mostra um mini-painel específico do serviço (Licenciamento → checklist de protocolo, SST → stats PGR/ASO, Resíduos → MTR rastreado, ESG → sparkline de emissões)
  - Pill branco abaixo com label da solução ativa
  - 4 dots de navegação (ativo vira pill alongado)
  - Pausa no hover, clique no dot navega manualmente

Trust strip e scope strip continuam abaixo como referência.

## User

Verifier agent check completed

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Carousel agora tem `min-height: 420px` explícito, então os cards brancos renderizam com fundo, sombra e conteúdo visível. O card direito também subiu para 600px de altura mínima.

## User

Verifier agent check completed

## Assistant

Tudo certo — carousel renderiza corretamente. Hero finalizado no padrão Ease Health com carrossel das 4 soluções.

