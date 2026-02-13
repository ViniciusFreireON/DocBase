# Slides – Box Model, Tipografia, Display e CSS Grid (Conteúdo Corrigido)

## 1. Entendendo o Box Model – a estrutura base do layout

O **Box Model** é o conceito mais fundamental do CSS para layout e visualização. Cada elemento HTML (parágrafo, imagem, div) é renderizado como uma **caixa retangular**. Essa caixa define o espaço que o elemento ocupa e como ele interage com os vizinhos.

Ela é composta por **quatro camadas concêntricas**, do centro para fora: **Conteúdo (Content)**, **Preenchimento (Padding)**, **Borda (Border)** e **Margem (Margin)**. O domínio dessas camadas permite controle preciso de espaçamento, tamanho e posicionamento; a interação entre elas define a dimensão final do elemento na tela.

Um exemplo: a classe **.caixa** ilustra as quatro partes. **width** e **height** definem o Conteúdo; **padding: 20px** cria espaço interno; **border: 5px solid darkblue** envolve o padding; **margin: 15px** separa a caixa de outros elementos.

---

## 2. Conteúdo e padding – o espaço interno da caixa

O **Conteúdo (content)** é o centro da caixa; armazena texto, imagens ou elementos aninhados. As propriedades **width** e **height** definem, por padrão, o tamanho dessa área.

O **Padding** é o espaço entre o conteúdo e a borda. Dá "respiro" ao conteúdo e aumenta o tamanho total do elemento. O padding **assume a cor de fundo** do elemento (é parte interna da caixa). Pode ser aplicado nos quatro lados (top, right, bottom, left) ou com sintaxe resumida.

Um exemplo: a classe **.com-padding** usa **padding-top/bottom: 30px** e **padding-left/right: 15px**. A cor de fundo (#e0f0ff) se estende pela área do padding. A sintaxe **padding: 30px 15px;** (2 valores) equivale a 30px em cima e embaixo e 15px nas laterais.

---

## 3. Border e margin – separando e delimitando elementos

A **Border** é a linha que circunda o padding e o conteúdo; é o delimitador visual. Pode ser estilizada em espessura, estilo (solid, dashed, dotted, etc.) e cor. Também entra no tamanho total do elemento.

A **Margin** é a camada mais externa; é o espaço **transparente** fora da borda. Cria distância entre o elemento e os vizinhos. Diferente do padding, a margem é sempre transparente (o fundo do pai ou do body aparece).

**Colapso de margens:** as margens verticais adjacentes (topo e base) de dois elementos podem **colapsar** — apenas a maior é aplicada.

Um exemplo: **.bloco** com **border: 4px dashed** laranja e **margin-bottom: 25px** para espaçamento entre blocos. O espaço da margem é transparente; com padding, o espaço ficaria dentro do bloco.

---

## 4. O modelo box-sizing: controlando o tamanho final da caixa

No modelo padrão (**box-sizing: content-box**), **width** e **height** definem só o tamanho do **Conteúdo**. Ao adicionar padding e border, o tamanho total na tela **aumenta**. Por exemplo: width: 200px + padding: 20px + border: 5px resulta em 200 + 2×20 + 2×5 = **250px** de largura total.

Com **box-sizing: border-box**, a largura e a altura definidas **incluem** padding e border. Um **width: 200px** com padding e border terá **exatamente 200px** de largura total; o conteúdo interno se ajusta. Isso simplifica muito o cálculo de layouts.

Um exemplo: o seletor **\*** aplica **box-sizing: border-box** a todos os elementos (prática recomendada). Dois **.box** com width: 200px: o que usa border-box fica com 200px totais; o que usa **content-box** fica com 200 (conteúdo) + 2×15 (padding) + 2×10 (borda) = 250px totais.

---

## 5. Fontes personalizadas com Google Fonts

A tipografia impacta a legibilidade e a personalidade do site. Serviços como **Google Fonts** permitem usar milhares de fontes gratuitas, servidas pelo Google — sem precisar hospedar os arquivos.

No Google Fonts, selecione o estilo (por exemplo, regular, bold), copie o **&lt;link&gt;** para o HTML ou a regra **@import** para o CSS e adicione ao projeto. No CSS, use **font-family** com o nome exato da fonte e inclua um **fallback** (por exemplo, serif) para o caso de falha no carregamento.

Um exemplo: a tag **&lt;link&gt;** no **&lt;head&gt;** solicita a fonte 'Playfair Display' (pesos 400 e 700). No **&lt;style&gt;**, a classe **.titulo** usa **font-family** com esse nome e **serif** como fallback.

---

## 6. Estilização de textos – fontes, cores e tamanhos

Além da fonte, um conjunto de propriedades define a aparência e a legibilidade. **font-size** controla o tamanho do texto; preferir **em** ou **rem** para acessibilidade e responsividade. **color** define a cor da fonte; **font-weight** a espessura (normal, bold ou 100–900). **line-height** define a altura entre linhas (crucial em parágrafos longos); **letter-spacing** o espaço entre letras. Boa prática: contraste adequado entre texto e fundo.

**text-transform** altera a capitalização do texto (uppercase, lowercase, capitalize, etc.). Um exemplo: **font-size: 1.1rem**; **line-height: 1.6** (160% do tamanho da fonte); **text-align: justify**; **text-transform: capitalize** (primeira letra de cada palavra em maiúscula). Essas propriedades melhoram a fluidez e a legibilidade.

---

## 7. Estilização de imagens – tamanho e borda

Imagens devem ser controladas dentro do Box Model para não quebrar o layout. O principal é torná-las **responsivas**.

A regra **max-width: 100%** é a regra de ouro: a imagem nunca ultrapassa a largura do elemento pai, evitando overflow horizontal. **height: auto** mantém a proporção (aspect ratio), evitando distorção. **border-radius** arredonda cantos; **border** define o contorno; **object-fit** controla como a imagem preenche o contêiner (**cover** = cobre, podendo cortar; **contain** = imagem inteira visível).

Um exemplo: **.imagem-responsiva** com **max-width: 100%**, **height: auto**, **border: 5px**, **border-radius: 15px** e **display: block** para respeitar o Box Model (incluindo margens verticais).

---

## 8. Estilização de links e estados – interatividade visual

O CSS permite estilizar links em diferentes **estados**, dando feedback visual ao usuário. Os quatro estados principais são: **a:link** (estado padrão, não visitado); **a:visited** (link já visitado); **a:hover** (mouse sobre o link); **a:active** (momento do clique).

É comum usar **text-decoration: none** e aplicar cores ou sublinhado em **:hover**. A ordem das regras deve seguir **L-V-H-A** (Link, Visited, Hover, Active) para :hover e :active funcionarem corretamente.

Um exemplo: cor base e remoção do sublinhado; **transition: color 0.3s ease** para mudança suave. Em **:hover**, cor diferente e sublinhado; em **:active**, cor mais escura. A transição torna a interação mais agradável.

---

## 9. Entendendo o fluxo normal e a propriedade display

O **Fluxo Normal** é a forma padrão como o navegador dispõe os elementos; as regras dependem do valor de **display**. Os dois valores mais importantes são **display: block** — ocupa toda a largura disponível, começa em nova linha, empilha verticalmente — e **display: inline** — ocupa só o espaço do conteúdo; outros elementos inline podem ficar na mesma linha.

Elementos como **div**, **p**, **h1**–**h6** são **block** por padrão; **span**, **a**, **strong**, **em** são **inline**. No código, blocos com margens e paddings se empilham e se estendem por 100% da largura do pai, mesmo com pouco conteúdo interno.

---

## 10. Elementos block – características e aplicações

Elementos **block** são os "tijolos" do layout vertical. Características: (1) Sempre começam em **nova linha**. (2) Por padrão ocupam **100% da largura** do contêiner pai. (3) Respeitam integralmente o Box Model (width, height, padding, margin, incluindo colapso de margens verticais).

Exemplos: **&lt;div&gt;**, **&lt;p&gt;**, **&lt;h1&gt;**–**&lt;h6&gt;**, **&lt;header&gt;**, **&lt;footer&gt;**, **&lt;ul&gt;**/**&lt;ol&gt;**. São ideais para seções principais da página.

Um exemplo: dois blocos com **width: 50%** não ficam lado a lado — o segundo começa em nova linha. **margin: 10px auto** centraliza um bloco quando a largura está definida.

---

## 11. Elementos inline – características e limitações

Elementos **inline** fluem na linha de texto; são ideais para marcar trechos sem quebrar o fluxo. (1) Não iniciam nova linha; podem ficar lado a lado. (2) Ocupam apenas a largura do conteúdo. (3) **Ignoram width e height** — o tamanho vem do conteúdo. (4) Respeitam padding e border horizontais; **padding e margin verticais** não afetam a altura da linha (podem sobrepor).

Exemplos: **&lt;span&gt;**, **&lt;a&gt;**, **&lt;strong&gt;**, **&lt;em&gt;**, **&lt;img&gt;** (com peculiaridades).

Um exemplo: **.destaque** em um **&lt;span&gt;**: **width** e **height** são ignorados; o padding é aplicado, mas o padding vertical não afasta as linhas vizinhas. Margin horizontal funciona; margin vertical é ignorada no cálculo da linha.

---

## 12. O híbrido inline-block

**display: inline-block** combina o comportamento de inline (ficar na mesma linha) com o Box Model de block (respeita **width**, **height**, **padding** e **margin** em todas as direções). É útil para menus horizontais, galerias de miniaturas ou qualquer layout em que elementos precisem ficar lado a lado com dimensões controladas. Foi em grande parte substituído por **Flexbox** e **Grid** em layouts mais complexos.

Um exemplo: **div** com **display: inline-block**, **width: 120px**, **height: 40px** e **margin: 5px** em todos os lados — os blocos ficam na mesma linha e as margens verticais são respeitadas, ao contrário do inline puro.

---

## 13. Introdução ao CSS Grid – o layout bidimensional

O **CSS Grid** é um sistema **bidimensional** (linhas e colunas) para layouts web. Diferente de hacks com float ou inline-block, o Grid permite definir uma **grade** no contêiner (Grid Container) e posicionar os itens filhos (Grid Items) com precisão.

Diferente do Flexbox (unidimensional — linha ou coluna), o Grid trabalha com as duas dimensões ao mesmo tempo; é ideal para layout de página inteira (cabeçalho, barra lateral, conteúdo) e componentes complexos. Ativação: **display: grid** no elemento pai.

Um exemplo: **.container-grid** com **display: grid**; **grid-template-columns: 1fr 2fr 1fr** (três colunas; a do meio com o dobro das laterais); **grid-template-rows: 100px 50px**; **gap: 10px** entre as células. A unidade **fr** (fração) distribui o espaço restante.

---

## 14. Definição de linhas e colunas com grid-template

A definição da grade é feita com **grid-template-columns** e **grid-template-rows**, que aceitam uma lista de tamanhos (tracks). Podem ser usadas unidades fixas (px, em, %) ou a unidade **fr** (fração), que distribui o espaço disponível de forma proporcional. Por exemplo, **1fr 1fr 1fr** = três colunas iguais. A função **repeat()** simplifica grades repetidas: **repeat(5, 1fr)**.

Um exemplo: primeira coluna **80px** (fixa); última **10%**; as duas do meio com **2fr** e **3fr** — o espaço restante é dividido em 5 partes (2/5 e 3/5). Ilustra a combinação de unidades fixas e proporcionais.

---

## 15. Posicionamento de itens: grid-area e linhas da grade

O Grid permite posicionar e **estender** itens sobre múltiplas células. Duas abordagens: **Linhas da grade:** numeradas a partir de 1; use **grid-column-start**, **grid-column-end**, **grid-row-start**, **grid-row-end** (ou os atalhos **grid-column** e **grid-row**). **Áreas nomeadas:** no contêiner, **grid-template-areas** define regiões com nomes; no item, **grid-area** posiciona o item na área correspondente — o layout fica legível no próprio CSS.

Um exemplo: **.layout-nomeado** com **grid-template-areas** em 3 linhas e 2 colunas; a linha **"header header"** faz o item #cabecalho ocupar as duas colunas; #menu e #conteudo ocupam uma coluna cada em suas áreas nomeadas.

---

## 16. Diferenças chave entre Grid e Flexbox

| Aspecto | CSS Grid | Flexbox |
|--------|----------|---------|
| **Dimensão** | Bidimensional (linhas e colunas) | Unidimensional (linha ou coluna) |
| **Melhor uso** | Layout de página inteira (macro-layout) | Alinhamento dentro de um componente (micro-layout) |
| **Controle** | Contêiner define trilhas e posicionamento dos itens | Contêiner define o fluxo; itens controlam distribuição (ex.: flex-grow) |
| **Fluxo** | Áreas nomeadas para posicionamento | Ordem e espaçamento em um eixo |

**Resumo:** Flexbox organiza em **uma** linha ou coluna (menus, formulários, botões). Grid organiza em **linhas e colunas** ao mesmo tempo (estrutura geral da página). Na prática, usam-se juntos: **Grid** para o layout geral; **Flexbox** para o alinhamento fino dentro dos itens do Grid.
