# Slides – O Poder do Flexbox (Conteúdo Corrigido)

## 1. Flexbox: ativando a flexibilidade

O **CSS Flexible Box Layout (Flexbox)** é um módulo de layout **unidimensional**: distribui espaço entre os itens em um contêiner ao longo de **uma linha ou uma coluna**. Antes do Flexbox, alinhamento e distribuição dependiam de floats ou posicionamento, com problemas de manutenção e responsividade. O Flexbox simplifica a criação de layouts dinâmicos, fazendo os elementos se ajustarem quando o tamanho da tela ou do contêiner muda.

A ativação é simples: defina **display: flex** no elemento **pai** (Flex Container). Todos os filhos diretos passam a ser **Flex Items**. Essa declaração muda o contexto de formatação e permite usar as demais propriedades do Flexbox (alinhamento, direção, espaçamento). O Flexbox trabalha com uma dimensão por vez: **eixo principal (main axis)** e **eixo cruzado (cross axis)**.

Ao aplicar **display: flex** em **.container-flex**, os **.item-flex** se dispõem em linha horizontal (padrão), alinhados no eixo principal, ocupando o mínimo necessário (por exemplo, width: 100px). Borda e padding ajudam a visualizar o contêiner e a separação dos itens.

---

## 2. Controlando os eixos: flex-direction

A propriedade **flex-direction** define o **eixo principal** — a direção em que os flex items são dispostos. O Flexbox é unidimensional: você controla **ou** linha **ou** coluna por vez.

Os valores são **row** (padrão, esquerda → direita), **row-reverse** (direita → esquerda), **column** (cima → baixo), **column-reverse** (baixo → cima). A direção influencia **justify-content** e **align-items** (sempre em relação ao eixo principal ou ao cruzado). Com **column**, o eixo principal fica vertical e **justify-content** controla o alinhamento vertical.

Um exemplo: **.container-row** com **row** (itens lado a lado). **.container-column** com **flex-direction: column** e **height: 200px** — itens empilhados verticalmente. Útil para sidebars e menus verticais.

---

## 3. Distribuição de espaço: justify-content

**justify-content** (no Flex Container) alinha os flex items ao longo do **eixo principal** e controla como o espaço extra é distribuído. É ideal para centralizar, espaçar uniformemente ou agrupar nas extremidades.

Os valores são **flex-start** (padrão), **flex-end**, **center**, **space-between** (espaço entre os itens, primeiro no início e último no fim), **space-around** (espaço ao redor de cada item). O comportamento depende de **flex-direction**: com **row**, controla o alinhamento horizontal; com **column**, o vertical.

Um exemplo: **.container-justify** com **justify-content: space-between** — itens "Início" e "Fim" nas bordas, "Meio" no centro, espaço distribuído entre eles. **.container-center** com **justify-content: center** centraliza todos os itens como um bloco no eixo principal. Essencial para navbars e centralização de grupos.

---

## 4. Controle perpendicular: align-items

Enquanto **justify-content** atua no **eixo principal**, **align-items** atua no **eixo cruzado** (perpendicular). Garante que os itens de uma linha (ou coluna) fiquem alinhados na direção cruzada.

Os valores são **stretch** (padrão, estica para preencher o eixo cruzado), **flex-start**, **flex-end**, **center**. A combinação **justify-content: center** e **align-items: center** no contêiner permite a **centralização perfeita** de um elemento dentro de outro (historicamente difícil no CSS).

Um exemplo: contêiner com **height: 150px** e **align-items: center** — itens com alturas diferentes ("Alto" e "Curto") ficam centralizados verticalmente no eixo cruzado. Com **flex-direction: column**, **align-items: center** centralizaria horizontalmente. Vital para cards e itens de menu com alturas variadas.

---

## 5. Simplificando o espaçamento: gap

A propriedade **gap** adiciona espaçamento **apenas entre** os flex items, sem margem nas bordas do contêiner — evita margens indesejadas ou excesso no perímetro.

A sintaxe pode usar **row-gap** e **column-gap** separados, ou **gap: &lt;row-gap&gt; &lt;column-gap&gt;**. No Flexbox com **row**, **column-gap** é o espaço horizontal e **row-gap** o vertical (útil com **flex-wrap**). É essencial em layouts responsivos onde margens tradicionais atrapalham.

Um exemplo: **.container-gap** com **gap: 20px** — 20px entre Card A e B, e entre B e C; nenhum espaço extra nas bordas. **flex-grow: 1** nos itens faz com que ocupem o espaço disponível de forma distribuída.

---

## 6. Layouts multilinhas: flex-wrap

Por padrão o Flexbox mantém todos os itens em **uma linha**, o que pode causar overflow em telas menores. **flex-wrap** permite **várias linhas** (controle bidimensional limitado).

Os valores são **nowrap** (padrão), **wrap** (quebra para a próxima linha quando falta espaço), **wrap-reverse** (quebra invertida). Com **wrap** ativo, **align-content** passa a controlar o espaço **entre** as linhas. É essencial para galerias, listas de tags e cards responsivos.

Um exemplo: **.container-wrap** com **width: 300px** e itens de **120px**. Com **flex-wrap: wrap** e **gap: 10px**, cabem dois itens na primeira linha (120+120+10); o restante vai para a linha de baixo. Responsividade fluida sem media queries só para quebra de linha.

---

## 7. Distribuição proporcional: flex-grow, flex-shrink, flex-basis

As propriedades **flex-grow**, **flex-shrink** e **flex-basis** (ou a shorthand **flex**) controlam o tamanho dos flex items e permitem **colunas elásticas**.

**flex-grow** é o fator de crescimento no espaço extra. Todos com **flex-grow: 1** dividem o espaço igualmente; um com **flex-grow: 2** e outros com 1 recebe o dobro do espaço extra. **flex-shrink** define quanto o item pode encolher quando falta espaço. **flex-basis** é o tamanho inicial antes de crescer ou encolher. **flex: 1** equivale a **flex: 1 1 0%** (cresce e encolhe; base 0).

Um exemplo: layout de três colunas com **.col-1** com **flex: 1**, **.col-2** com **flex: 2** (o dobro do espaço extra da col-1). **.col-fixa** com **flex: 0 0 150px** — não cresce nem encolhe, largura fixa 150px (sidebar); as outras duas preenchem o restante proporcionalmente.

---

## 8. Flexibilidade individual: align-self

**align-items** define o alinhamento de **todos** os itens no eixo cruzado; **align-self** (aplicado ao **Flex Item**) **sobrescreve** esse comportamento em um item específico.

Os valores são **auto** (padrão), **flex-start**, **flex-end**, **center**, **baseline**, **stretch**. É útil quando a maioria segue um padrão (por exemplo, **align-items: center**) e um ou dois itens precisam de alinhamento diferente (por exemplo, botão ou ícone no rodapé da linha). Permite micro-gestão do layout sem quebrar a estrutura Flexbox.

Um exemplo: **.container-self** com **align-items: flex-start**. O item **.item-center** usa **align-self: center** (meio vertical); **.item-end** usa **align-self: flex-end** (rodapé). Controle fino por item.

---

## 9. Flexbox e responsividade

O Flexbox é a base para layouts **inerentemente responsivos**: os itens se adaptam e preenchem o espaço. Além de **flex-wrap**, é importante usar **flex-grow**, **flex-shrink** e **flex-basis** para controlar o redimensionamento. Por exemplo: em tela larga, **flex-basis: 25%** (quatro cards por linha); em media query para tela menor, **flex-basis: 100%** (um card por linha). Preferir tamanhos relativos (%, vw, em) e evitar pixels fixos nos itens quando possível.

Um exemplo: **.card** com **flex: 1 1 200px** — base 200px; se houver espaço, vários cards por linha; em tela estreita, menos cards por linha e **flex-grow: 1** faz com que preencham a linha. Layout fluido sem definir 25% ou 50% manualmente em media queries.

---

## 10. Mobile First: priorizando o móvel

**Mobile First** é uma estratégia em que o design e o CSS são feitos **primeiro para telas pequenas** (celular) e depois aprimorados para telas maiores (tablet, desktop). Isso evita o padrão antigo de fazer para desktop e "reduzir" para mobile, que gera código complexo e pesado. No CSS: estilos base **sem** media queries para o layout móvel; depois, **media queries com min-width** para adicionar estilos quando a largura for maior. O Flexbox combina bem: **flex-direction: column** (empilhamento vertical) é natural para mobile.

Um exemplo: estilo base com **flex-direction: column** (blocos empilhados, ideal para celular). Dentro de **@media (min-width: 600px)** o layout muda para colunas lado a lado. Assim, o CSS mais complexo só é aplicado em telas que precisam, melhorando a performance em smartphones.

---

## 11. Breakpoints e media queries

**Media Queries** aplicam estilos conforme características do dispositivo. No Mobile First com Flexbox, usam-se **pontos de quebra (breakpoints)** com **min-width** para mudar o layout (por exemplo, uma coluna → duas → quatro). Dentro da media query podem ser sobrescritas **flex-direction**, **justify-content**, **align-items** ou **flex** / **flex-basis** dos itens. Exemplo típico: menu hambúrguer no mobile e navbar horizontal no desktop, apenas trocando propriedades na media query. Os breakpoints devem ser definidos pelo **conteúdo** (quando o layout começa a quebrar), não por dispositivos específicos.

Um exemplo: **.card-mq** com **flex-basis: 100%** no padrão (uma coluna). Em **min-width: 600px**, **flex-basis** ≈ 50% (duas colunas). Em **min-width: 900px**, **flex-basis** ≈ 33.33% (três colunas). **calc()** pode ser usado para descontar o **gap** da largura e manter o espaçamento correto.

---

## 12. Distribuição multilinha: align-content

**align-content** só tem efeito quando o Flex Container tem **flex-wrap: wrap** (ou wrap-reverse) e **várias linhas** de itens, e há espaço livre no eixo cruzado. Diferente de **align-items** (que alinha os itens **dentro** de cada linha), **align-content** alinha **o conjunto de linhas** dentro do contêiner.

Os valores são **flex-start**, **flex-end**, **center**, **space-between**, **space-around**, **stretch** (padrão). Com uma única linha, **align-content** não altera nada; quem controla é **align-items**. É útil para centralizar verticalmente um bloco de cards em um contêiner alto.

Um exemplo: **.container-content** com **height: 300px**, **width: 250px** e **flex-wrap: wrap** — itens 3 e 4 na segunda linha. **align-content: center** centraliza o bloco das duas linhas no espaço vertical. **align-content: space-between** distribui o espaço entre as linhas.

---

## 13. Ordem visual: a propriedade order

A propriedade **order** (no Flex Item) altera a **ordem visual** dos itens, sem mudar a ordem no HTML. Isso preserva a **estrutura semântica** (importante para acessibilidade e SEO) e permite otimizar o layout para o usuário. O valor é um **inteiro** (0 é o padrão). Itens com **order** menor aparecem primeiro. Por exemplo: HTML A, B, C; B com **order: 1** e A com **order: -1** → ordem visual A, C, B. É fundamental em Mobile First (por exemplo, sidebar no topo no HTML, mas visualmente no rodapé em mobile).

Um exemplo: HTML com Item 1, Item 2, Item 3. Item 2 com **order: 0** (padrão). Item 1 com **order: -1** (primeiro na exibição). Item 3 com **order: 1** (último). Resultado visual: 1, 2, 3. Útil para reposicionar sidebar ou cabeçalhos em mobile sem alterar o DOM.

---

## 14. Aplicação: Barra de Navegação com Flexbox

Um uso clássico do Flexbox é a **navbar**: logo à esquerda, links à direita (ou ao centro) e todos **alinhados verticalmente**. Com **display: flex** no contêiner: **justify-content: space-between** coloca a logo em uma ponta e o menu na outra (ou **flex-start** para agrupar). **align-items: center** alinha verticalmente logo e links (que podem ter alturas diferentes). A responsividade vem de media queries que, em telas pequenas, mudam para **flex-direction: column** (menu vertical) ou ocultam os links e exibem um botão "hambúrguer" (com JavaScript ou checkbox em CSS).

Um exemplo: **.navbar** com **display: flex**, **justify-content: space-between** (logo à esquerda, **.nav-links** à direita), **align-items: center**. **.nav-links** também é um Flexbox com **gap: 15px** entre os links. Padrão para navbars modernas; em mobile, uma media query pode usar **flex-direction: column** e **justify-content: center**.

---

## 15. Flexbox vs. Grid: unidimensional vs. bidimensional

O **Flexbox** é **unidimensional** — uma linha ou uma coluna. É ideal para **componentes**: navbars, listas de tags, grupos de botões, cards que fluem. O **CSS Grid** é **bidimensional** — linhas e colunas ao mesmo tempo. É ideal para a **estrutura da página** (cabeçalho, sidebar, conteúdo, rodapé).

Boas práticas: usar **Grid** para o layout **macro** (página inteira) e **Flexbox** para o **micro** (alinhamento e distribuição dentro de cada área). São complementares; podem ser aninhados para layouts complexos.

---

## 16. Check-list e fluxo de trabalho Flexbox

| Aplicado em | Propriedade | Função principal | Valores chave |
|-------------|-------------|------------------|---------------|
| Container | **display** | Ativa o modo Flexbox | flex |
| Container | **flex-direction** | Define o eixo principal (linha/coluna) | row, column |
| Container | **flex-wrap** | Permite quebra de linha | wrap, nowrap |
| Container | **justify-content** | Alinha itens no eixo principal | center, space-between |
| Container | **align-items** | Alinha itens no eixo cruzado | center, stretch, flex-start, flex-end |
| Container | **gap** | Espaço entre itens | 20px, 1rem |
| Item | **order** | Altera a ordem visual do item | 0 (padrão), -1, 1 |
| Item | **flex** | Abreviada: crescimento, encolhimento, base | 1 (elástico), 0 0 100px (fixo) |
| Item | **align-self** | Sobrescreve align-items no item | center, flex-end |

Resumo do fluxo: ativar **display: flex** no contêiner; definir **flex-direction** e, se necessário, **flex-wrap**; usar **justify-content** e **align-items** para alinhamento; **gap** para espaçamento; nos itens, **flex** para crescimento proporcional e **order** ou **align-self** para exceções.
