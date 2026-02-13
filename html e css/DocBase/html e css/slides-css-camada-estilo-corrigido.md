# Slides – CSS: A Camada de Estilo da Web (Conteúdo Corrigido)

## 1. CSS: a camada de estilo da web

**Cascading Style Sheets (CSS)** é a linguagem que descreve a **apresentação** de um documento em linguagem de marcação (como HTML). O HTML cuida da estrutura e do significado (esqueleto e conteúdo); o CSS cuida do aspecto visual: cores, fontes, layouts e animações.

A **separação de responsabilidades** entre conteúdo e apresentação facilita a manutenção e a consistência visual. Ao externalizar o estilo, é possível mudar o look and feel de todo o site alterando um único arquivo. A **cascata** e a **herança** são o mecanismo pelo qual o navegador decide quais regras aplicar quando há conflitos. Entender essa separação favorece acessibilidade, SEO e design responsivo.

A ligação no HTML é feita pela tag **&lt;link&gt;** dentro do **&lt;head&gt;** com **rel="stylesheet"** e **href="styles.css"** (ou o caminho do arquivo). Essa é a melhor prática: mantém o HTML limpo e a estrutura separada do visual.

---

## 2. Arquivos externos: organização e reutilização

O **CSS externo** é o método preferido: um arquivo separado com extensão **.css** (por exemplo, estilos.css) contém todas as regras de estilo e é referenciado no **&lt;head&gt;** de cada página com **&lt;link&gt;**, como no slide anterior.

O navegador lê o HTML, encontra o **&lt;link&gt;**, faz requisição para baixar o CSS e aplica as regras aos elementos correspondentes. As vantagens são a **reutilização** (um arquivo estiliza muitas páginas, com identidade visual coesa) e a **performance** (o CSS é armazenado em cache; as páginas seguintes carregam mais rápido).

Um exemplo de conteúdo do arquivo: um bloco **body { ... }** define estilos globais (font-family, background). Outro bloco **.paragrafo-destaque { ... }** aplica estilos só aos elementos com **class="paragrafo-destaque"**. Essa organização em blocos de regras é a sintaxe fundamental do CSS.

---

## 3. Anatomia de uma regra CSS

Uma **regra CSS** tem duas partes principais: o **Seletor** e o **bloco de Declaração**.

O **Seletor** aponta para o(s) elemento(s) HTML a estilizar (por exemplo, h1, .classe, #id). O **Bloco de Declaração** é delimitado por **{}** e contém uma ou mais declarações. Cada declaração segue o formato **propriedade : valor;** (dois pontos, ponto e vírgula no final). O ponto e vírgula é crucial; sua ausência pode quebrar a regra.

Por exemplo: **h1 { color: red; font-size: 24px; }** — **h1** é o seletor; **{ color: red; font-size: 24px; }** é o bloco de declaração. No CSS usam-se comentários de bloco **/\*** e **\*/**. Numa regra com seletor **p**, o bloco pode definir font-family (por exemplo, Georgia, serif), line-height e text-align, ilustrando a estrutura Seletor–Propriedade–Valor.

---

## 4. O poder dos seletores CSS

Três tipos básicos são essenciais. O **seletor de tipo (elemento)** seleciona todos os elementos daquele tipo (por exemplo, **h1** seleciona todos os **&lt;h1&gt;**). É útil para estilos globais.

O **seletor de classe** seleciona elementos com **class** de valor específico; o prefixo é **.** (por exemplo, **.btn-primario** seleciona **&lt;button class="btn-primario"&gt;**). É o mais usado e promove reutilização. O **seletor de ID** seleciona o único elemento com **id** específico; o prefixo é **#** (por exemplo, **#menu-principal**). O ID deve ser único na página.

A escolha do seletor afeta a **especificidade** e a flexibilidade do design. O seletor **a** pode remover sublinhado e definir cor padrão para todos os links. A classe **.alerta** pode ser aplicada a qualquer elemento (div, p, button) que precise de visual de aviso. O ID **#rodape** estiliza só a seção de rodapé. Classes e IDs permitem estilizar de forma mais granular do que só pelo tipo.

---

## 5. Gerenciando cores para o design

As cores no CSS podem ser especificadas de várias formas. **Nomes:** mais de 140 pré-definidos (red, blue, lightblue); úteis para testes, mas limitados. **Hexadecimal (Hex):** **#RRGGBB** (6 dígitos, ou 3 abreviado); por exemplo, #ff0000 é vermelho; formato muito comum e conciso.

**RGB:** **rgb(vermelho, verde, azul)** — cada valor de 0 a 255; por exemplo, rgb(255, 0, 0). **RGBA:** como RGB, com o canal **Alpha** (opacidade): 0 = transparente, 1 = opaco; por exemplo, **rgba(0, 0, 0, 0.5)** é preto semi-transparente, essencial para sobreposições.

Um exemplo: **background-color** em Hex; **color** em RGB; **border-bottom** em RGBA com opacidade (por exemplo, 0.7) para uma linha preta 70% opaca. Dominar esses formatos permite implementar qualquer cor da paleta com precisão.

---

## 6. Unidades: px, %, em e rem

A unidade **px (pixel)** é **absoluta** e fixa; útil para bordas e elementos que não devem mudar de tamanho. A **% (porcentagem)** é relativa ao elemento pai (width, height, padding, margin) ou à fonte do elemento (line-height).

A unidade **em** é relativa ao **font-size do elemento pai**. Se o pai tem 16px, 1em = 16px. É boa para padding e margens que escalem com o texto. A **rem (root em)** é relativa ao **font-size do elemento raiz** (**&lt;html&gt;**). Se **&lt;html&gt;** tem 16px, 1rem = 16px, independente do pai; é o padrão em design responsivo para fontes, pois todo o texto escala de forma uniforme.

Um exemplo: **html { font-size: 16px; }** define a base para rem. Um **.card** pode usar **%** na largura (flexível), **em** no padding (escala com a fonte do card), e **.card-titulo** pode usar **rem** para o font-size (sempre relativo ao documento; facilita acessibilidade).

---

## 7. Estilização de fontes e textos

Quatro propriedades essenciais para o texto: **color** (cor da fonte); **background-color** (cor de fundo do elemento; preenche conteúdo, padding e borda, **não** a margem); **font-size** (tamanho do texto; preferir unidades relativas como em e rem para escalabilidade e acessibilidade); **text-align** (alinhamento horizontal: left, right, center, justify).

Recomenda-se **font-size** em rem e **line-height** para um bom espaçamento entre linhas. Um exemplo: **.header-box** com fundo azul; **.titulo** com texto branco, centralizado e font-size em rem; **.subtitulo** com cor cinza e **text-align: justify** (útil em blocos longos, com cuidado em colunas estreitas na web).

---

## 8. Controle do background (plano de fundo)

**background-color** é a propriedade mais usada para cores sólidas. A cor de fundo preenche o conteúdo e a área de **padding** do elemento (não a margem). Por padrão o fundo é **transparent**; a cor do elemento pai fica visível.

**background** é uma shorthand (atalho) para várias propriedades de fundo. Usar background-color de forma estratégica ajuda a segmentar o conteúdo e guiar o olhar (por exemplo, destaque de CTA).

Um exemplo: **.botao-cta** com fundo verde (#28a745) e texto branco para contraste. **.secao-secundaria** com fundo cinza claro (#e9ecef) para delimitar visualmente um bloco em relação ao body.

---

## 9. O essencial: modelo de caixa (Box Model)

Todo elemento HTML é tratado como uma **caixa retangular** com quatro componentes, do centro para fora. **Content (conteúdo):** onde ficam texto, imagem ou vídeo; o tamanho é definido por **width** e **height**. **Padding (preenchimento):** espaço interno entre conteúdo e borda; a cor de fundo cobre essa área. **Border (borda):** linha ao redor do padding e do conteúdo (espessura, estilo, cor). **Margin (margem):** espaço **externo** à borda; separa a caixa de outras; é sempre transparente.

Dominar o Box Model é a base para posicionar e espaçar elementos corretamente.

Um exemplo: caixa com **width** e **height** fixos (por exemplo, 200px × 100px), **padding: 20px** (espaço interno com cor de fundo, por exemplo amarelo claro), **border: 5px solid #0056b3** (borda azul) e **margin: 30px** (distância dos vizinhos).

---

## 10. Margin: espaçamento entre elementos

**margin** cria espaço **ao redor** do elemento, fora da borda; é sempre transparente. Evita que elementos fiquem colados e melhora legibilidade e organização.

Ela pode ser definida por lado: **margin-top**, **margin-right**, **margin-bottom**, **margin-left**. A **shorthand** aceita de 1 a 4 valores (sentido horário: top, right, bottom, left): **margin: 20px;** (os 4 lados); **margin: 10px 20px;** (top/bottom 10px, left/right 20px); **margin: 10px 20px 30px 40px;** (top, right, bottom, left).

Para **centralização horizontal**, um elemento de bloco com **width** definida pode usar **margin: 0 auto;** (ou **margin: 50px auto;** com margem vertical) para distribuir o espaço restante igualmente nas laterais e centralizar o bloco.

Um exemplo: **.bloco-padrao** com dois valores (15px top/bottom, 5px left/right). **.bloco-centralizado** com **margin: 50px auto** e **width** definida para centralizar.

---

## 11. Padding: espaçamento interno

**padding** define o espaço **entre o conteúdo e a borda** do elemento. Diferente da margin, o padding **faz parte** do elemento — a **background-color** cobre essa área. Dá "respiração" ao conteúdo e aumenta a área clicável de botões e links.

Pode ser definido por lado (padding-top, etc.) ou com **shorthand padding** (1 a 4 valores, mesma lógica horária que a margin). O padding aumenta o tamanho total da caixa, a menos que **box-sizing: border-box** esteja ativo.

Um exemplo: **.card-info** com padding em 4 valores (mais espaço no topo, menos nas laterais). **.lista-item** com padding-left e padding-right para afastar o texto da borda (por exemplo, para ícones ou marcadores).

---

## 12. Border: estilizando limites visuais

**border** desenha uma linha ao redor do padding e do conteúdo. A forma mais comum é a **shorthand**, com três valores na ordem: **espessura**, **estilo**, **cor** — por exemplo, **border: 2px solid black;** É possível estilizar cada lado (border-top, border-bottom, etc.) e usar **border-radius** para arredondar cantos (um ou mais valores).

Um exemplo: **.botao-arredondado** com borda sólida vermelha escura e **border-radius: 8px** (cantos arredondados). **.linha-divisoria** com **border-bottom** em estilo **dashed** (tracejado), criando um separador sutil em vez de uma caixa completa.

---

## 13. Cascata: a ordem de prioridade

A **cascata** é o algoritmo que o navegador usa para decidir quais regras aplicar quando várias regras afetam a mesma propriedade. A ordem de prioridade (simplificando, sem !important) envolve: (1) **Origem da folha:** estilos de autor (seu CSS) prevalecem sobre estilos padrão do navegador. (2) **Especificidade:** a regra mais específica vence (detalhada no próximo tópico). (3) **Ordem no código:** com mesma origem e mesma especificidade, vence a regra que aparece **por último** no CSS (ou no último arquivo linkado).

Entender essa ordem é vital para depurar por que um estilo não está sendo aplicado.

Um exemplo: duas regras com o mesmo seletor (**p**) têm a mesma especificidade. A Regra 1 define **color: blue**; a Regra 2, que vem depois, define **color: red** e **background-color**. O texto fica vermelho (a segunda regra sobrescreve a cor); o background-color é aplicado normalmente.

---

## 14. Especificidade: quem grita mais alto?

A **especificidade** é o cálculo que determina a prioridade quando mais de uma regra se aplica ao mesmo elemento. O navegador usa um "peso" em categorias (geralmente descrito como A, B, C). **A (ID):** seletores **#id** têm o maior peso (por exemplo, 100 na representação 1-0-0). **B (classe, atributo, pseudo-classe):** **.classe**, **[type="text"]**, **:hover** têm peso médio (por exemplo, 10 na representação 0-1-0). **C (elemento, pseudo-elemento):** **p**, **h1**, **::before** têm peso menor (por exemplo, 1 na representação 0-0-1).

A regra com **maior pontuação combinada** vence (por exemplo, um ID vence muitas classes). Se a especificidade for igual, a **cascata** (ordem no código) decide.

Um exemplo de aplicação: uma regra com **#menu** vence uma com **.menu**; uma com **.destaque** vence uma só com **p**. Usar **.card-produto** para padding e margin ilustra a estilização por classe; o mesmo conceito de especificidade se aplica quando há conflito entre seletores.

---

## 15. Combinando seletores para estilos precisos

Além dos seletores básicos, podemos **combiná-los** (hierarquia de seletores) com **combinadores**. O **descendente (espaço)** seleciona um elemento descendente em qualquer nível: por exemplo, **nav a** — todos os links dentro de um **&lt;nav&gt;**. O **filho direto (&gt;)** seleciona apenas o filho imediato: por exemplo, **ul &gt; li** — apenas **&lt;li&gt;** que são filhos diretos de **&lt;ul&gt;**.

O **adjacente imediato (+)** seleciona o elemento imediatamente após outro, no mesmo nível: por exemplo, **h2 + p** — o parágrafo logo após um **&lt;h2&gt;**. O **geralmente adjacente (~)** seleciona todos os irmãos que vêm depois: por exemplo, **h2 ~ p** — todos os **&lt;p&gt;** após um **&lt;h2&gt;** no mesmo nível.

Seletores combinados aumentam a especificidade e permitem estilos em contextos muito específicos do layout. **nav a** estiliza só os links da navegação; **ul &gt; li** estiliza itens de lista filhos diretos; **h2 + p** estiliza o primeiro parágrafo após cada **&lt;h2&gt;**. **.container-central** com **width: 60%** e **margin: 30px auto** centraliza o bloco; o parágrafo **.alinhado-centro** com **text-align: center** centraliza o texto dentro do bloco — distinção importante entre centralizar o bloco e centralizar o conteúdo.

---

## 16. Melhores práticas: consistência e manutenção

**Priorize CSS externo:** manter estilos em arquivo .css (por exemplo, styles.css) garante separação de responsabilidades e permite cache do navegador. **Favoreça classes:** prefira **.classe** a IDs ou seletores de tipo puros; classes são reutilizáveis e têm especificidade moderada.

**Use unidades relativas:** **rem** para fontes; **em** ou **%** para espaçamentos e dimensões quando a responsividade for importante. **Evite IDs para estilo:** IDs (#id) têm alta especificidade (1.0.0), dificultando sobrescrita e reuso; use IDs para âncoras ou JavaScript. **Comente o código:** use **/\* \*/** para explicar regras complexas ou a estrutura de arquivos grandes.

Essas práticas equilibram precisão e facilidade de manutenção em projetos CSS sustentáveis.
