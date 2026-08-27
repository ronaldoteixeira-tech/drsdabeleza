# Plano de Ação — SEO, GEO e Página Institucional

**Projeto:** Drs da Beleza  
**Data de criação:** 25/08/2026  
**Objetivo:** consolidar as landing pages em um único ecossistema, aumentar a visibilidade orgânica no Google e em mecanismos generativos e criar uma página institucional que concentre os procedimentos da clínica.

---

## Resumo executivo

O projeto já possui uma boa base comercial, mas hoje funciona como um conjunto de LPs independentes. Para ganhar tráfego orgânico e visibilidade em respostas de IA, ele precisa virar um único ecossistema:

- uma home institucional canônica em `https://www.drsdabeleza.com.br/`;
- todas as LPs publicadas em subpastas desse domínio;
- navegação e links internos entre home e procedimentos;
- dados técnicos, comerciais e locais consistentes;
- conteúdo original, verificável e revisado por profissionais;
- acesso liberado para Googlebot, Bingbot e OAI-SearchBot.

Segundo a orientação oficial mais recente do Google, GEO não exige truques especiais: SEO técnico, conteúdo original, autoridade local, informações consistentes e boa experiência também sustentam AI Overviews e AI Mode. O Google também informa que `llms.txt` não ajuda na visibilidade no Google Search.

Referência: [Google — Otimização para recursos de busca generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

---

# 1. Diagnóstico atual

Foram considerados os arquivos HTML publicáveis, documentos estratégicos, copies, brandbook, design system, PDFs, fotos, vídeos e referências presentes no projeto.

## 1.1 Páginas publicáveis encontradas

1. `/` — atualmente outra LP de drenagem;
2. `/crio/` — gordura localizada e criolipólise;
3. `/drenagem/` — Divine Sculpt Detox;
4. `/laser/` — depilação a laser;
5. `/levieen/` — Lavieen facial e capilar;
6. `/limpeza-de-pele/`;
7. `/spa/` — Day Spa e massagens;
8. `/ultraformer/`.

## 1.2 Principais problemas encontrados

### P0 — Críticos

- [ ] A home local é outra LP de drenagem, com title e description iguais aos de `/drenagem/`.
- [ ] Nenhuma das oito páginas possui canonical.
- [ ] Não existem `robots.txt` ou `sitemap.xml` no projeto.
- [ ] Nenhuma LP aponta para outra LP: há zero links internos entre procedimentos.
- [ ] A home local utiliza o WhatsApp fictício `5511999999999`.
- [ ] Os campos de captação da home não pertencem a um formulário funcional.
- [ ] Há uma imagem quebrada em limpeza de pele: `images/imagem 2.jpeg`.
- [ ] O slug `/levieen/` está grafado diferente do nome correto, Lavieen.

### P0 — Consistência local e comercial

- [ ] Confirmar endereço: os textos e schemas usam nº 468, mas uma foto da fachada mostra nº 430.
- [ ] Confirmar bairro e posicionamento geográfico: Jardim Anália Franco, Tatuapé ou “próximo ao Tatuapé”.
- [ ] Confirmar horário de sábado: 14h ou 15h.
- [ ] Confirmar telefone público principal.
- [ ] Confirmar tempo de experiência: a página pública fala em 16 anos; materiais estratégicos falam em 19 anos.
- [ ] Confirmar nota e número atual de avaliações: aparecem 100+ e 130+ nos arquivos.

### P1 — SEO e dados estruturados

- [ ] Apenas limpeza de pele e SPA possuem dados estruturados.
- [ ] Apenas limpeza de pele e SPA possuem Open Graph.
- [ ] Os schemas existentes não informam URL, imagem principal, coordenadas, catálogo completo de serviços ou um `@id` compartilhado da empresa.
- [ ] Não há breadcrumbs entre home, categorias e procedimentos.
- [ ] Não há nomes, formação, registros profissionais ou responsável técnico nas páginas.
- [ ] A checagem pública encontrou a home institucional atual, mas não encontrou as LPs novas. Confirmar cobertura real no Search Console.

### P1 — Performance

- [ ] Os ativos locais referenciados por página somam aproximadamente 8,4 MB a 44 MB.
- [ ] Drenagem referencia vídeos de hero de até 18,5 MB.
- [ ] A maioria das imagens não possui dimensões explícitas no HTML.
- [ ] Há muitos PNGs de 1,5 MB a 2,2 MB que podem ser convertidos para WebP ou AVIF.
- [ ] Alguns vídeos carregam metadados ou reprodução automática sem necessidade.

### P0/P1 — Alegações e autoridade

As seguintes alegações precisam de validação e documentação antes de serem usadas como sinais de autoridade:

- “desinche até 3 kg em uma sessão”;
- “elimina toxinas, ureia e amônia”;
- “estimula a imunidade”;
- “corpo drenando por 48 horas”;
- “resultado a partir de 48 horas”;
- “depilação definitiva e indolor”;
- “resultado em três sessões ou dinheiro de volta”.

- [ ] Criar evidência ou fonte para cada alegação.
- [ ] Validar textos com o responsável técnico.
- [ ] Remover ou moderar alegações sem lastro.
- [ ] Incluir avisos claros de que resultados variam conforme avaliação e organismo.

---

# 2. Plano de ação — SEO e GEO

## Fase 0 — Criar a fonte única da verdade

**Prazo sugerido:** dias 1–3.

### Dados a confirmar no Perfil da Empresa no Google

- [ ] Nome oficial da empresa.
- [ ] Endereço e número corretos.
- [ ] Bairro correto.
- [ ] Relação geográfica com o Tatuapé.
- [ ] Telefone e WhatsApp.
- [ ] Horários de funcionamento.
- [ ] Categoria principal e categorias secundárias.
- [ ] Nota e quantidade atual de avaliações.
- [ ] URL atualmente cadastrada como site.
- [ ] URL atualmente cadastrada para agendamento.

### Criar planilha-mestra da entidade

Campos recomendados:

- nome comercial;
- razão social, se aplicável ao site;
- endereço completo;
- coordenadas;
- telefone;
- horários;
- redes sociais;
- profissionais e credenciais;
- responsável técnico;
- procedimentos ativos;
- preços e durações;
- contraindicações;
- alegações e respectivas evidências;
- URLs canônicas;
- links do Google, Bing, Instagram, TikTok e demais diretórios.

O Google informa que o ranking local é principalmente determinado por relevância, distância e proeminência, e que informações completas e corretas ajudam na relevância.

Referência: [Google — Como melhorar o ranking local](https://support.google.com/business/answer/7091).

---

## Fase 1 — Consolidar domínio e indexação

**Prazo sugerido:** semana 1.

### Arquitetura recomendada

```text
www.drsdabeleza.com.br/
├── drenagem-linfatica/
├── criolipolise/
├── depilacao-a-laser/
├── lavieen/
├── ultraformer/
├── limpeza-de-pele/
└── day-spa/
```

### Ações

- [ ] Tornar `www.drsdabeleza.com.br` o único host canônico.
- [ ] Publicar todas as LPs como subpastas do domínio principal.
- [ ] Inventariar URLs existentes no Search Console, GA4, Google Ads e Cloudflare.
- [ ] Identificar todas as URLs `pages.dev` utilizadas nas campanhas.
- [ ] Definir mapa de redirects antes de mudar os slugs.
- [ ] Criar canonical absoluto e autorreferente em todas as páginas.
- [ ] Criar `robots.txt`.
- [ ] Criar `sitemap.xml` apenas com URLs canônicas.
- [ ] Cadastrar o sitemap no Google Search Console.
- [ ] Cadastrar o site no Bing Webmaster Tools.
- [ ] Implementar IndexNow para alterações futuras.

### Mapa inicial de redirects

```text
/levieen/  -> /lavieen/
/crio/     -> /criolipolise/
/laser/    -> /depilacao-a-laser/
/spa/      -> /day-spa/
```

Também devem ser redirecionadas:

- URLs antigas do site institucional;
- URLs públicas do Cloudflare Pages;
- versões com e sem `www`, conforme o domínio escolhido;
- possíveis variações com `index.html`.

Usar redirects 301 para mudanças permanentes.

Referências:

- [Google — Boas práticas de links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google — Como definir URLs canônicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google — Como criar e enviar um sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

---

## Fase 2 — Correções técnicas

**Prazo sugerido:** semanas 1–2.

### Metadados por página

- [ ] Title exclusivo.
- [ ] Meta description exclusiva.
- [ ] Canonical absoluto.
- [ ] `og:type`.
- [ ] `og:title`.
- [ ] `og:description`.
- [ ] `og:url`.
- [ ] `og:image` absoluto.
- [ ] `twitter:card`.
- [ ] Favicon.
- [ ] `theme-color`.

### Performance e mídia

- [ ] Converter imagens fotográficas para WebP ou AVIF.
- [ ] Manter JPEG/PNG apenas quando necessário.
- [ ] Gerar versões responsivas das imagens.
- [ ] Usar `<picture>`, `srcset` e `sizes`.
- [ ] Adicionar `width` e `height` às imagens.
- [ ] Usar `loading="lazy"` fora da primeira dobra.
- [ ] Usar `fetchpriority="high"` somente na imagem LCP.
- [ ] Evitar autoplay de vídeos pesados no hero.
- [ ] Usar poster otimizado nos vídeos.
- [ ] Aplicar `preload="none"` aos vídeos abaixo da dobra.
- [ ] Carregar o Google Maps apenas próximo à seção de localização.
- [ ] Corrigir a imagem quebrada de limpeza de pele.

### Metas de Core Web Vitals

- LCP menor ou igual a 2,5 segundos;
- INP menor ou igual a 200 milissegundos;
- CLS menor ou igual a 0,1;
- aprovação no percentil 75 em mobile e desktop.

Referência: [web.dev — Core Web Vitals](https://web.dev/articles/vitals).

### Conversão, privacidade e tracking

- [ ] Corrigir o WhatsApp fictício da home.
- [ ] Remover ou implementar corretamente o formulário incompleto.
- [ ] Adicionar consentimento e link para Política de Privacidade.
- [ ] Criar página de Política de Privacidade.
- [ ] Criar página de Termos de Uso.
- [ ] Manter o GTM `GTM-NRTTFJXC` após validar que é o container correto.
- [ ] Padronizar eventos GA4/GTM.

Eventos sugeridos:

```text
click_whatsapp
click_call
click_directions
generate_lead
view_service
play_video
```

Parâmetros:

```text
service
cta_location
page_slug
lead_source
offer_name
```

---

## Fase 3 — Conteúdo útil, confiável e citável

**Prazo sugerido:** semanas 2–6.

Cada LP deve responder claramente:

1. O que é o procedimento?
2. Para quais objetivos é indicado?
3. Como funciona?
4. Quem realiza?
5. Quanto tempo dura?
6. Quantas sessões podem ser necessárias?
7. Quando os resultados costumam aparecer?
8. Há recuperação, preparo ou restrições?
9. Quais são as contraindicações?
10. Quanto custa ou como funciona a avaliação?
11. Por que a abordagem da Drs da Beleza é diferente?

### Autoridade e revisão

- [ ] Exibir nome, formação e registro do profissional responsável.
- [ ] Incluir “Conteúdo revisado por”.
- [ ] Mostrar data da última revisão.
- [ ] Citar fontes primárias para alegações clínicas relevantes.
- [ ] Criar página ou seção de equipe.
- [ ] Explicar a quem pertencem os “16” ou “19 anos de experiência”.

### Prova original

- [ ] Priorizar fotos reais da clínica e da equipe.
- [ ] Mostrar procedimentos reais, quando autorizado.
- [ ] Usar antes/depois somente com consentimento documentado.
- [ ] Informar contexto e variação possível dos resultados.
- [ ] Adicionar legendas e transcrições aos vídeos.
- [ ] Vincular depoimentos à fonte original sempre que possível.

### FAQ

- [ ] Manter FAQ visível e útil em cada LP.
- [ ] Não criar perguntas apenas para repetir palavras-chave.
- [ ] Não tratar `FAQPage` como prioridade de rich result.

O Google descontinuou o rich result de FAQ em maio de 2026. O conteúdo continua útil para usuários e mecanismos generativos, mas não deve ser tratado como um atalho de SEO.

---

## Fase 4 — Dados estruturados

### Home institucional

Criar um grafo JSON-LD com:

- [ ] `WebSite`;
- [ ] `WebPage`;
- [ ] `Organization`;
- [ ] `BeautySalon` e/ou `DaySpa`;
- [ ] endereço completo;
- [ ] telefone;
- [ ] horários;
- [ ] coordenadas;
- [ ] logo;
- [ ] imagem principal;
- [ ] `sameAs` para perfis oficiais;
- [ ] `hasOfferCatalog` com os procedimentos;
- [ ] um `@id` estável para representar a empresa.

### LPs de procedimentos

- [ ] `WebPage`;
- [ ] `Service`;
- [ ] `BreadcrumbList`;
- [ ] `VideoObject` quando houver vídeo indexável;
- [ ] referência ao mesmo `@id` da empresa;
- [ ] URLs e imagens absolutas.

Não usar `AggregateRating` apenas para gerar estrelas com avaliações da própria empresa. Os depoimentos podem continuar visíveis, ligados às fontes originais quando possível.

Referências:

- [Google — LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google — VideoObject](https://developers.google.com/search/docs/appearance/structured-data/video)

---

## Fase 5 — SEO local e Perfil da Empresa

**Prazo sugerido:** semanas 2–12.

- [ ] Definir categoria principal coerente com a atividade real.
- [ ] Adicionar categorias secundárias precisas.
- [ ] Cadastrar todos os procedimentos como serviços.
- [ ] Vincular cada serviço à respectiva LP, quando o perfil permitir.
- [ ] Usar a home institucional no campo “Site”.
- [ ] Usar uma página ou fluxo específico no campo de agendamento.
- [ ] Adicionar UTMs nos links do Perfil da Empresa.
- [ ] Publicar fotos reais de fachada, recepção, salas, equipe e procedimentos.
- [ ] Solicitar avaliações após o atendimento, sem incentivo indevido.
- [ ] Responder avaliações com textos naturais e específicos.
- [ ] Corrigir NAP e horários no Bing Places, Fresha, Viva Tatuapé e demais diretórios.
- [ ] Procurar links editoriais em imprensa local, parceiros e associações.
- [ ] Evitar pacotes de backlinks e diretórios de baixa qualidade.

UTM sugerida para o site no Perfil da Empresa:

```text
?utm_source=google&utm_medium=organic&utm_campaign=gbp
```

---

## Fase 6 — GEO para Google, ChatGPT e Copilot

- [ ] Permitir `Googlebot` no `robots.txt` e na Cloudflare.
- [ ] Permitir `Bingbot` no `robots.txt` e na Cloudflare.
- [ ] Permitir `OAI-SearchBot` no `robots.txt` e na Cloudflare.
- [ ] Verificar se as regras de bot protection não retornam 403 ou desafios aos crawlers legítimos.
- [ ] Definir separadamente a política para `GPTBot`.
- [ ] Garantir que o conteúdo principal exista no HTML inicial.
- [ ] Manter informações consistentes entre site, Google, Bing, redes, vídeos e diretórios.
- [ ] Usar headings claros, tabelas, listas e respostas objetivas quando ajudarem o usuário.
- [ ] Criar conteúdo original baseado em experiência, casos e critérios reais da equipe.
- [ ] Não priorizar `llms.txt` no MVP.
- [ ] Medir referências do ChatGPT com `utm_source=chatgpt.com`.
- [ ] Ativar o relatório AI Performance no Bing Webmaster Tools.
- [ ] Acompanhar o relatório de performance generativa no Google Search Console.

Referências:

- [OpenAI — Publicadores e desenvolvedores](https://help.openai.com/pt-br/articles/12627856-publicadores-e-desenvolvedores-faq)
- [Bing — AI Performance](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c)
- [Bing — IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby)

---

# 3. Plano da página institucional

## 3.1 Decisão de arquitetura

A nova página deve:

- substituir a LP de drenagem atualmente localizada na raiz do projeto;
- evoluir ou substituir a página institucional pública existente;
- não ser publicada como outra home concorrente em um endereço separado;
- ser o destino utilizado no Perfil da Empresa no Google, Instagram, TikTok e demais perfis;
- concentrar autoridade e distribuir essa autoridade para todas as LPs.

## 3.2 Posicionamento sugerido

### Title

```text
Clínica de Estética e Spa no Anália Franco | Drs da Beleza
```

### H1

```text
Estética avançada e spa no Jardim Anália Franco, perto do Tatuapé
```

### Proposta central

> Avaliação individual, protocolos personalizados e uma estrutura completa para tratamentos corporais, faciais, capilares, depilação e bem-estar.

O posicionamento deve aproveitar a plataforma narrativa já definida nos documentos estratégicos:

1. identificação da necessidade;
2. avaliação antes de indicar;
3. protocolo individual;
4. prova real;
5. CTA único para agendamento.

---

## 3.3 Estrutura da página

### 1. Header

- logo;
- Procedimentos;
- Sobre;
- Resultados;
- Localização;
- CTA “Agendar avaliação”.

### 2. Hero

- foto real da clínica ou da equipe;
- proposta institucional;
- CTA “Conhecer procedimentos”;
- CTA “Agendar pelo WhatsApp”.

### 3. Faixa de confiança

- nota atual do Google;
- quantidade atual de avaliações;
- experiência profissional devidamente atribuída;
- localização;
- atendimento personalizado.

Só usar números comprováveis e atualizados.

### 4. Escolha pelo seu objetivo

Criar uma navegação orientada à necessidade:

- reduzir gordura localizada;
- diminuir inchaço e retenção;
- firmar e rejuvenescer;
- tratar pele ou cabelos;
- eliminar pelos;
- relaxar e desacelerar.

### 5. Procedimentos

Cards com breve explicação e link para:

1. Drenagem Linfática / Divine Sculpt Detox;
2. Criolipólise;
3. Depilação a Laser;
4. Lavieen facial e capilar;
5. Ultraformer;
6. Limpeza de Pele;
7. Day Spa e massagens.

### Procedimentos sem LP completa

Lipedema aparece na página pública atual e Highpro aparece nos documentos estratégicos, mas não possuem LPs completas no projeto.

- [ ] Confirmar se continuam sendo oferecidos.
- [ ] Validar diferenciais e alegações.
- [ ] Criar páginas próprias antes de adicioná-los como links principais na home.
- [ ] Não criar cards com CTAs sem destino relevante.

### 6. Como funciona a avaliação

1. Entender objetivo e histórico;
2. realizar avaliação;
3. recomendar protocolo;
4. acompanhar evolução.

### 7. Sobre a clínica e equipe

- missão;
- abordagem personalizada;
- estrutura;
- profissionais;
- formação e registros;
- responsável técnico;
- método e critérios de segurança.

### 8. Espaço real

Galeria com:

- fachada;
- recepção;
- salas de atendimento;
- ofurô;
- rooftop;
- equipamentos;
- equipe em atendimento, quando autorizado.

A direção visual deve seguir o brandbook existente:

- estética warm-premium;
- tons de areia, creme, marrom e dourado;
- Cormorant Garamond para elegância;
- Poppins para leitura e interface;
- Bebas Neue apenas para impacto controlado;
- Dancing Script com no máximo uma ocorrência por peça;
- preferência por fotos reais em vez de imagens genéricas.

### 9. Resultados e avaliações

- casos autorizados;
- antes/depois contextualizado;
- depoimentos com fonte;
- link para o Perfil da Empresa no Google;
- aviso sobre variação de resultados.

### 10. Localização

- endereço confirmado;
- mapa;
- horários;
- referência ao Parque do Ceret;
- áreas atendidas;
- botão de rotas;
- botão de WhatsApp.

### 11. FAQ institucional

Perguntas sugeridas:

- Como funciona a avaliação?
- Preciso saber qual procedimento quero fazer?
- A clínica atende homens e mulheres?
- Quais são os horários?
- Como chegar?
- Há atendimento aos sábados?
- Quais formas de pagamento são aceitas?
- Os resultados variam de pessoa para pessoa?

### 12. CTA final e footer global

- WhatsApp;
- telefone;
- endereço;
- horários;
- redes sociais;
- links para todos os procedimentos;
- Política de Privacidade;
- Termos de Uso.

---

## 3.4 Implementação

- [ ] Criar componentes compartilhados de header e footer.
- [ ] Criar uma fonte compartilhada para NAP e horários.
- [ ] Criar templates compartilhados para metadados e schema.
- [ ] Manter saída estática compatível com Cloudflare Pages.
- [ ] Fazer a home linkar todos os procedimentos.
- [ ] Fazer cada LP linkar de volta para a home.
- [ ] Fazer cada LP apontar para dois ou três procedimentos relacionados.
- [ ] Usar âncoras descritivas, não apenas “saiba mais”.
- [ ] Manter as LPs específicas como destinos para anúncios.
- [ ] Usar a home institucional como destino principal de GMN e redes sociais.

---

# 4. Cronograma recomendado

## Semana atual — Fundação e institucional

### Dia 1

- [ ] Confirmar endereço, bairro, telefone, horários e dados do Google.
- [ ] Confirmar domínio e URLs públicas das LPs.
- [ ] Confirmar alegações, credenciais e responsável técnico.
- [ ] Criar mapa final de URLs e redirects.

### Dia 2

- [ ] Criar `robots.txt`.
- [ ] Criar `sitemap.xml`.
- [ ] Definir canonical e metadados padrão.
- [ ] Corrigir WhatsApp, imagem quebrada e formulário da home.
- [ ] Definir estrutura e copy da página institucional.

### Dia 3

- [ ] Implementar a primeira versão da página institucional.
- [ ] Criar cards e links para os sete procedimentos.
- [ ] Implementar header e footer compartilhados.
- [ ] Implementar dados estruturados da home.

### Dia 4

- [ ] Otimizar imagens principais.
- [ ] Revisar mobile e acessibilidade.
- [ ] Implementar redirects.
- [ ] Padronizar tracking dos CTAs.
- [ ] Validar schemas e links.

### Dia 5

- [ ] Publicar em ambiente de homologação.
- [ ] Executar QA técnico e de conteúdo.
- [ ] Validar Cloudflare, Search Console e Analytics.
- [ ] Publicar em produção após aprovação.
- [ ] Solicitar indexação das URLs prioritárias.

## Semanas 2–4

- [ ] Migrar e otimizar as sete LPs.
- [ ] Adicionar dados estruturados e breadcrumbs.
- [ ] Revisar alegações e autoridade profissional.
- [ ] Otimizar fotos e vídeos.
- [ ] Implementar malha completa de links internos.

## Semanas 5–12

- [ ] Produzir conteúdo especializado original.
- [ ] Trabalhar avaliações e Perfil da Empresa.
- [ ] Corrigir citações e diretórios externos.
- [ ] Conquistar menções e links locais.
- [ ] Monitorar Google, Bing, ChatGPT e conversões.

---

# 5. Indicadores de sucesso

## Indexação e saúde técnica

- [ ] Oito URLs canônicas descobertas e indexadas.
- [ ] Zero links ou imagens quebrados.
- [ ] Zero duplicidades críticas.
- [ ] Sitemap processado sem erros.
- [ ] Canonical escolhido pelo Google igual ao canonical declarado.

## Performance

- [ ] Core Web Vitals aprovados no percentil 75.
- [ ] LCP menor ou igual a 2,5 segundos.
- [ ] INP menor ou igual a 200 milissegundos.
- [ ] CLS menor ou igual a 0,1.

## SEO orgânico

- crescimento de impressões não relacionadas somente à marca;
- crescimento de cliques orgânicos;
- evolução de posição por procedimento;
- páginas indexadas e consultas por LP;
- leads orgânicos por procedimento.

## SEO local

- visibilidade em grade de 3–5 km;
- ligações pelo Perfil da Empresa;
- solicitações de rota;
- cliques para o site;
- WhatsApps e agendamentos com UTM do perfil;
- crescimento e qualidade das avaliações.

## GEO

- citações e páginas citadas no Bing AI Performance;
- consultas de grounding relacionadas aos procedimentos;
- tráfego com `utm_source=chatgpt.com`;
- aparições no relatório generativo do Search Console;
- consistência das informações da marca em respostas de IA.

## Autoridade e governança

- [ ] 100% das alegações sensíveis documentadas ou revisadas.
- [ ] Todos os procedimentos com responsável/revisor identificável.
- [ ] Todas as fotos de clientes com autorização documentada.
- [ ] Dados de endereço, telefone e horários consistentes em todos os canais.

---

# 6. Ordem de execução recomendada

1. Confirmar dados oficiais e alegações.
2. Definir domínio, URLs e redirects.
3. Corrigir problemas críticos da estrutura atual.
4. Criar e publicar a home institucional.
5. Conectar e otimizar as LPs.
6. Configurar indexação, tracking e relatórios.
7. Trabalhar conteúdo especializado e autoridade local.
8. Medir resultados e priorizar as próximas otimizações.

