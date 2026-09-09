# Plano de ação — Testes A/B nas landing pages

## 1. Objetivo

Elevar a taxa de conversão das LPs de menor desempenho usando os princípios da LP de SPA — atual líder em conversão e volume de vendas — sem presumir que a mesma oferta ou a mesma taxa de conversão será reproduzida em procedimentos diferentes.

O teste deve responder a uma pergunta de negócio: **uma experiência inspirada na SPA gera mais leads qualificados, agendamentos e vendas por visita do que a página atual?**

## 2. Leitura do plano de mídia

A imagem do plano de setembro aponta:

- orçamento total mantido em aproximadamente R$ 12,8 mil;
- maior concentração no Google (82%) e 18% no Instagram;
- receita projetada de R$ 44.750;
- 87 novos clientes e custo projetado de R$ 147 por cliente;
- SPA e massagens como principal motor de aquisição e melhor referência atual;
- Drenagem com retorno projetado de 1,8x usando a página atual;
- eventual ganho da nova página não incluído na projeção financeira.

Isso permite tratar CRO como ganho incremental. A redistribuição de mídia continua sendo avaliada separadamente do efeito da LP.

## 3. Decisão de priorização

### Primeira LP: Drenagem

Drenagem deve ser o teste P0 porque:

1. é a linha para a qual o próprio plano já prevê teste de página;
2. tem o menor retorno projetado entre as campanhas de procedimento mantidas no Google;
3. sua página possui fricções objetivas quando comparada à SPA;
4. é possível construir uma variante forte sem mudar preço, público ou procedimento.

### Ordem das próximas LPs

Depois de Drenagem, ordenar as páginas de menor conversão por:

`prioridade = sessões qualificadas × diferença de conversão × margem por venda × confiança ÷ esforço`

Não usar apenas ROAS para afirmar que uma LP converte mal. ROAS também varia com ticket, margem, mídia e fechamento comercial. Antes de escolher a segunda LP, gerar uma tabela com, no mínimo:

- sessões por LP;
- leads qualificados;
- taxa de lead qualificado por sessão;
- agendamentos;
- comparecimentos;
- vendas;
- receita e margem de contribuição;
- investimento e CAC.

Criolipólise só deve entrar na fila após a decisão financeira sobre sua margem, pois uma mudança simultânea de verba pode confundir a leitura econômica. A SPA permanece como referência e não deve ser alterada durante a primeira rodada.

## 4. O que a SPA faz melhor hoje

| Elemento | SPA | Drenagem atual | Oportunidade de teste |
|---|---|---|---|
| Conversão principal | CTA direto para WhatsApp no hero | CTA do hero rola até formulário no fim | Reduzir a conversão a um clique |
| Quantidade de acessos diretos ao WhatsApp | 10 links | 2 links | Dar saída direta nos principais pontos de decisão |
| Mensuração | Evento `whatsapp_click`, serviço e posição do CTA | Apenas carregamento do GTM; sem evento explícito de lead/WhatsApp | Instrumentar o funil completo |
| Hero | Imagem estática e proposta simples | Vídeo automático de 9 MB no mobile e 19 MB no desktop | Testar hero estático mais leve |
| Oferta | Pacotes, preço, duração e CTA próprios | Planos existem, mas os CTAs levam ao formulário | Levar cada escolha diretamente ao WhatsApp com contexto |
| Mensagem | Benefício emocional, local e serviços concretos | Promessa forte, cinco benefícios e nome proprietário no primeiro contato | Simplificar a hierarquia e explicar antes de nomear o método |
| Fricção | Conversa imediata | Nome, telefone e escolha de plano antes da conversa | Testar WhatsApp direto contra formulário |

Esses elementos são hipóteses; o desempenho da SPA não prova isoladamente qual deles causa a conversão. Como as LPs de baixo volume demorariam muito em testes multivariados, a primeira rodada deve usar uma **variante composta**.

## 5. Experimento 01 — Drenagem

### Controle A

Página atual, sem mudanças de copy, ordem, mídia ou formulário.

### Variante B — estrutura inspirada na SPA

1. Hero estático e leve, com versão própria para mobile.
2. Proposta compreensível antes do nome do protocolo.
3. Um CTA primário direto para o WhatsApp.
4. Um CTA secundário para os planos e preços.
5. Prova de confiança logo abaixo dos CTAs.
6. Três benefícios curtos no primeiro bloco, em vez de cinco.
7. Planos antecipados e cada plano com CTA direto e mensagem pré-preenchida específica.
8. Prova social e resultado real antes da explicação longa do método.
9. Localização e conveniência mantidas.
10. Conversão exclusivamente por CTAs de WhatsApp, sem formulário ou webhook na variante B.

### Sugestão de conteúdo para o hero B

**Eyebrow:** Drenagem e detox corporal no Tatuapé

**Título:** Sinta o corpo mais leve e menos inchado já na primeira sessão

**Texto:** Um protocolo personalizado que combina drenagem, modelagem e cuidados detox em um ambiente premium ao lado do Parque do Ceret.

**CTA primário:** Ver horários no WhatsApp

**CTA secundário:** Ver planos a partir de R$ 200

**Prova curta:** avaliação 5,0 no Google · mais de 100 avaliações · estacionamento gratuito

Revisar toda alegação clínica e toda promessa de resultado antes da publicação. Evitar transformar “até 3 kg” em promessa generalizada; manter ressalva de que resultados variam.

### Hipótese

Se a página reduzir o esforço até o contato, simplificar a mensagem e apresentar oferta e confiança mais cedo, então aumentará a taxa de leads qualificados por sessão sem reduzir a taxa de agendamento, comparecimento ou venda.

## 6. Mensuração obrigatória antes do teste

### Identidade do experimento

Registrar em todos os eventos:

- `experiment_id = lp_drenagem_01`
- `variant_id = a` ou `b`
- `service = drenagem`
- `cta_location`
- `page_path`
- UTMs, `gclid` e `fbclid`, quando existirem

### Funil

1. `experiment_view`
2. `cta_click`
3. `whatsapp_click`
4. `qualified_lead`
5. `appointment_booked`
6. `appointment_attended`
7. `sale`
8. `revenue` e `contribution_margin`

O clique no WhatsApp não é lead por si só. Para conectar a sessão à conversa, usar mensagem pré-preenchida ou link de redirecionamento identificando a variante, e gravar a mesma variante no CRM.

A variante B não utiliza formulário nem webhook. Todos os pontos comerciais levam diretamente ao WhatsApp e recebem uma identificação de origem. Nunca contar clique ou abertura de WhatsApp como venda.

### Métricas

**Métrica primária:** leads qualificados ÷ sessões elegíveis.

**Métricas secundárias:**

- clique em CTA por sessão;
- agendamento por sessão;
- venda por sessão;
- CAC por cliente;
- receita e margem por sessão.

**Guardrails:**

- taxa de qualificação;
- comparecimento;
- conversão do atendimento em venda;
- ticket médio e margem;
- rejeição/engajamento;
- LCP e carregamento no mobile.

## 7. Configuração do A/B

- Divisão: 50% A e 50% B.
- Sorteio após o clique, na própria LP ou na camada de entrega, e não por campanhas com públicos diferentes.
- Persistência: o mesmo navegador sempre vê a mesma variante por pelo menos 30 dias.
- Mesmas campanhas, palavras-chave, anúncios, regiões, horários e dispositivos nas duas variantes.
- Tráfego interno e de QA excluído.
- Uma única experiência ativa por LP.
- A SPA não entra na divisão; ela é referência de arquitetura, não controle estatístico da Drenagem.

Se o teste for dividido por URLs de anúncio, garantir que A e B tenham distribuição idêntica de termos de busca, dispositivo e horário. O ideal é sortear a variante depois que o visitante chega.

## 8. Amostra e regra de decisão

Definir a amostra depois de extrair a conversão-base real. Cenários para detectar ganho relativo de 50%, com 95% de confiança e 80% de poder:

| Conversão atual | Meta mínima | Sessões aproximadas por variante |
|---:|---:|---:|
| 2,0% | 3,0% | 3.820 |
| 3,0% | 4,5% | 2.515 |
| 5,0% | 7,5% | 1.470 |

Regras:

- mínimo de 14 dias e dois ciclos semanais completos;
- não interromper porque um painel mostrou vantagem nos primeiros dias;
- máximo inicial de 42 dias; se a amostra não chegar, classificar como inconclusivo;
- promover B somente se a métrica primária melhorar com significância e os guardrails não piorarem materialmente;
- mesmo com mais leads, rejeitar B se piorar qualidade, comparecimento, margem ou CAC final.

Para páginas com tráfego insuficiente, testar uma variante composta e um ganho mínimo relevante maior. Não dividir o pouco tráfego entre três ou mais versões.

## 9. Cronograma proposto

### Semana 0 — Base e instrumentação

- congelar e documentar a página A;
- extrair 28 dias de sessões, leads, agendamentos e vendas por LP;
- definir o ranking das LPs;
- implementar eventos e integração com CRM;
- validar discrepância entre GA4, GTM, WhatsApp e CRM.

### Semana 1 — Construção

- criar a variante B de Drenagem;
- preparar imagens desktop/mobile;
- manter preço, procedimento e condições comerciais do controle;
- configurar a divisão 50/50 e persistência de variante.

### Semana 2 — QA e lançamento

- testar Android, iPhone e desktop;
- validar UTMs, `gclid`, `fbclid`, mensagens e CRM;
- validar mensagens pré-preenchidas, identificação da variante e chegada no CRM;
- publicar e iniciar o teste.

### Semanas 3 e 4 — Operação

- verificar apenas integridade dos dados e problemas críticos;
- não escolher vencedor antes da regra de parada;
- acompanhar qualidade, agenda e atendimento por variante.

### Semanas 5 e 6 — Decisão

- consolidar o funil completo e o resultado econômico;
- promover a vencedora ou declarar inconclusivo;
- documentar aprendizado;
- aplicar a arquitetura vencedora à próxima LP priorizada, criando um novo controle próprio.

## 10. Backlog de testes depois da variante composta

Se B vencer, isolar os componentes em rodadas seguintes:

1. CTA fixo no mobile versus CTA apenas dentro das seções.
2. Preço visível no hero versus preço na seção de planos.
3. Imagem estática versus vídeo otimizado.
4. Prova social abaixo do CTA versus após o primeiro bloco.
5. CTA “Ver horários” versus “Agendar avaliação”.
6. Benefício direto versus nome do protocolo no título.

Cada novo teste usa a versão vencedora anterior como controle.

## 11. Critério de conclusão do programa

O programa é bem-sucedido quando houver:

- mensuração de ponta a ponta por LP e variante;
- pelo menos uma decisão estatisticamente válida em Drenagem;
- redução de CAC ou aumento de margem por sessão;
- playbook reutilizável para as demais LPs;
- documentação do que funcionou, do que não funcionou e em qual tipo de procedimento.

## 12. Próximas ações imediatas

1. Confirmar a lista e as taxas atuais das LPs consideradas de menor conversão.
2. Extrair o baseline de 28 dias da Drenagem.
3. Aprovar a métrica primária como **lead qualificado por sessão**.
4. Criar a variante B seguindo o blueprint acima.
5. Integrar a identificação dos CTAs de WhatsApp ao CRM.
6. Rodar QA e lançar em 50/50.
