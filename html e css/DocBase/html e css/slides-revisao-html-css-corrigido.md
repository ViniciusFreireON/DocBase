# Slides – Revisão da Estrutura HTML Essencial e Introdução ao CSS (Conteúdo Corrigido)

## 1. Revisão da estrutura HTML essencial

O HTML é a espinha dorsal de qualquer página web. A estrutura básica é fundamental para o correto processamento pelo navegador.

O documento começa com **&lt;!DOCTYPE html&gt;**, que informa o tipo de documento, e é encapsulado pela tag **&lt;html&gt;**. Dentro dela ficam **&lt;head&gt;** e **&lt;body&gt;**. O **&lt;head&gt;** contém metadados que não são exibidos na página, mas são vitais para SEO, acessibilidade e carregamento: título, codificação de caracteres e outros. O **&lt;body&gt;** contém todo o conteúdo visível: textos, imagens e links. Uma estrutura bem definida garante interpretação consistente em diferentes plataformas.

O esqueleto básico recomendado inclui **&lt;html lang="pt-br"&gt;** para definir o idioma (recomenda-se minúsculas: pt-br). **&lt;meta charset="UTF-8"&gt;** assegura a exibição correta de acentos e caracteres especiais. **&lt;title&gt;** define o texto da aba do navegador e é importante para identificação e SEO. Todo o conteúdo visível fica dentro do **&lt;body&gt;**.

---

## 2. Fundamentos de SEO no &lt;head&gt;

O SEO (Otimização para Mecanismos de Busca) começa no cabeçalho do documento.

O **&lt;title&gt;** é um dos pontos mais importantes: os motores de busca usam esse texto para entender o tema da página. O **&lt;meta charset="UTF-8"&gt;** garante a codificação correta dos caracteres. O **&lt;meta name="viewport"&gt;** é essencial para responsividade, pois instrui o navegador sobre como escalar o conteúdo em dispositivos móveis. O **&lt;meta name="description"&gt;** fornece um resumo conciso da página e é frequentemente usado como snippet nos resultados de busca (SERP), influenciando o CTR.

No viewport, o valor **content="width=device-width, initial-scale=1.0"** garante que a largura se ajuste ao dispositivo e que o zoom inicial seja 1.0, padrão mobile-first. **&lt;title&gt;** e **&lt;meta name="description"&gt;** bem escritos otimizam cliques e indicam o tema aos motores de busca.

---

## 3. Estrutura semântica e hierarquia de títulos (SEO avançado)

A estrutura semântica usa as tags HTML para descrever o **significado** do conteúdo, não só a aparência.

Os títulos **&lt;h1&gt;** a **&lt;h6&gt;** devem seguir uma hierarquia lógica: **&lt;h1&gt;** deve ser usado **uma vez por página**, como título principal. Os demais (**&lt;h2&gt;**, **&lt;h3&gt;**, etc.) seguem a ordem hierárquica, como em um sumário. Os elementos semânticos **&lt;header&gt;**, **&lt;nav&gt;**, **&lt;main&gt;**, **&lt;section&gt;**, **&lt;article&gt;** e **&lt;footer&gt;** ajudam motores de busca e leitores de tela a entender a função de cada parte da página.

Um exemplo de boa estrutura: um **&lt;h1&gt;** como título geral; o conteúdo dividido em **&lt;section&gt;**s, cada uma com seu **&lt;h2&gt;**. Um **&lt;article&gt;** dentro de uma seção representa conteúdo independente, com seu próprio **&lt;h3&gt;**. Essa hierarquia é valorizada pelo Google e por tecnologias assistivas.

---

## 4. Acessibilidade fundamental: alt em imagens e label em formulários

Acessibilidade (A11Y) garante que pessoas com deficiência possam usar a web. Dois elementos cruciais no HTML são o atributo **alt** nas imagens e a tag **&lt;label&gt;** nos formulários.

O **atributo alt** deve conter um texto alternativo descritivo e conciso da função ou do conteúdo da imagem, pois é lido por leitores de tela. Se a imagem for **apenas decorativa**, use **alt=""** (vazio), para que o leitor de tela a ignore.

A tag **&lt;label&gt;** vincula o texto descritivo ao campo através de **for** no **&lt;label&gt;** e **id** no **&lt;input&gt;**. Ao clicar no texto do label, o foco vai para o input, e o leitor de tela identifica corretamente o campo.

Um exemplo prático: **&lt;label for="nomeUsuario"&gt;** ligado a **&lt;input id="nomeUsuario"&gt;**. Uma **&lt;img&gt;** com alt descritivo é essencial para quem não vê a imagem; outra imagem decorativa (por exemplo, um separador) deve usar **alt=""** para o leitor de tela ignorá-la.

---

## 5. Introdução a ARIA e tabindex (acessibilidade avançada)

**ARIA** (Accessible Rich Internet Applications) são atributos que melhoram a semântica e a acessibilidade, especialmente para conteúdo dinâmico ou componentes que não são nativamente semânticos (por exemplo, **&lt;div&gt;** usado como botão).

O **aria-label** fornece um rótulo conciso para elementos sem texto visível, como botões que são apenas um ícone. O **tabindex** controla a ordem de foco ao pressionar Tab: **tabindex="0"** inclui o elemento na ordem natural de tabulação; **tabindex="-1"** remove o elemento da ordem (o foco só pode ser dado via JavaScript).

Um botão com **aria-label** dá nome a um elemento que visualmente é só um "X". **role="alert"** com **aria-live="polite"** informa aos leitores de tela que o conteúdo do div é uma notificação a ser lida. **tabindex="0"** em um link garante que ele possa ser focado pela tecla Tab, permitindo navegação sem mouse.

---

## 6. Tipos de imagem para a web: PNG e JPEG

O **PNG (Portable Network Graphics)** é ideal para transparência (canais alfa) e gráficos com áreas de cor sólida, como logos, ícones e ilustrações. Sua compressão é **sem perdas**, ou seja, a qualidade é preservada, mas os arquivos podem ser maiores.

O **JPEG/JPG** é o padrão para **fotografias** e imagens com muitas variações de cor e detalhes. A compressão é **com perdas**: reduz bem o tamanho do arquivo, mas compressão muito alta pode gerar artefatos visuais.

O elemento **&lt;picture&gt;** permite otimização: oferece WebP para navegadores compatíveis e fallback para PNG (ou JPEG) quando necessário, garantindo melhor desempenho e compatibilidade.

---

## 7. Tipos de imagem moderna: WebP e SVG

O **WebP** é um formato moderno (Google) com compressão superior a JPEG e PNG, com ou sem perdas, resultando em arquivos menores e carregamento mais rápido. Recomenda-se como formato principal quando possível.

O **SVG (Scalable Vector Graphics)** é um formato **vetorial** baseado em XML; descreve gráficos com fórmulas matemáticas (pontos, linhas, curvas). Pode ser escalado sem perder qualidade e é ideal para logos, ícones e ilustrações simples, com tamanho de arquivo pequeno e comportamento responsivo.

Um SVG inserido **inline** no HTML evita requisição HTTP extra e o ícone se adapta a qualquer resolução. Uma imagem WebP é uma escolha moderna e eficiente para fotos e imagens complexas.

---

## 8. Favicons e ícones adicionais

Favicons são ícones exibidos na aba do navegador, nos favoritos e no histórico. São importantes para identidade visual e usabilidade, pois ajudam a identificar a página entre várias abas.

O formato tradicional é **.ico**; formatos modernos como **PNG** e **SVG** são amplamente suportados. Incluir ícones de alta resolução para dispositivos Apple (**apple-touch-icon**) e manifestos para Android e PWAs garante exibição correta em todos os contextos.

No **&lt;head&gt;** podemos ter favicon.ico para compatibilidade com navegadores antigos; PNG 32x32 como padrão moderno; **apple-touch-icon** para tela inicial em iOS. Ícones de fontes externas (por exemplo, Font Awesome) usam uma tag no HTML (como **&lt;i&gt;**) e exigem CSS adicional.

---

## 9. Introdução ao CSS e formas de inserção

O **CSS** (Cascading Style Sheets) estiliza documentos HTML: cores, fontes e layouts. A separação entre HTML (estrutura) e CSS (estilo) é um pilar do desenvolvimento web moderno.

Há três formas de aplicar CSS. **Inline:** usando o atributo **style** no elemento; deve ser evitado, pois mistura estilo e conteúdo. **Interno:** dentro da tag **&lt;style&gt;** no **&lt;head&gt;**; útil para estilos de uma única página. **Externo (recomendado):** arquivo .css separado, linkado ao HTML via **&lt;link&gt;** — promove organização e reuso em múltiplas páginas.

Um exemplo: um **&lt;h1&gt;** estilizado pela tag **&lt;style&gt;** interna; um **&lt;p&gt;** com estilo inline (alta especificidade, usar com cautela); **&lt;link&gt;** no **&lt;head&gt;** apontando para style.css é o método preferido em projetos maiores.

---

## 10. Criação e linkagem do style.css externo

O CSS externo é a melhor prática para projetos de qualquer porte: separa apresentação do conteúdo, tornando o código mais limpo, manutenível e reutilizável.

O arquivo tem extensão **.css** (por exemplo, style.css) e contém apenas regras de estilo. No HTML, use **&lt;link&gt;** dentro do **&lt;head&gt;**. Os atributos essenciais são **rel="stylesheet"** (relação do arquivo como folha de estilos) e **href="caminho/do/arquivo.css"** (caminho do arquivo). O navegador faz cache do arquivo e aplica os estilos à página.

O código **&lt;link rel="stylesheet" href="styles/main.css"&gt;** estabelece a conexão. O caminho relativo **styles/main.css** pressupõe que o CSS está em uma pasta **styles** na mesma estrutura do HTML.

---

## 11. Estrutura da regra CSS: seletor, propriedade e valor

Uma **regra CSS** é composta pelo **seletor**, que aponta para o(s) elemento(s) HTML a estilizar (por exemplo, h1, .classe, #id), e pelo **bloco de declaração**.

O bloco de declaração fica entre chaves **{}** e contém uma ou mais declarações. Cada declaração é um par **propriedade : valor;** (separados por dois pontos, terminados por ponto e vírgula). A **propriedade** é a característica a modificar (por exemplo, color, font-size); o **valor** é o ajuste aplicado (por exemplo, red, 24px).

Um exemplo: uma regra que seleciona todos os **p** e define color verde e font-weight negrito. Outra regra seleciona elementos com a classe **destaque** e aplica background amarelo, borda sólida preta 1px e padding 10px.

---

## 12. Seletores básicos: tag, classe e ID

O **seletor de tag (tipo)** aplica o estilo a **todas** as instâncias da tag (por exemplo, p, h2). O **seletor de classe** é o mais flexível: agrupa elementos de tags diferentes. No HTML usamos **class="nome"**; no CSS, **.nome**. Pode ser reutilizado em vários elementos.

O **seletor de ID** é o mais específico e deve ser usado para **um único** elemento na página. No HTML: **id="id_unico"**; no CSS: **#id_unico** (jogo da velha). Não deve ser repetido.

Um exemplo: dois parágrafos com a mesma classe; um div com ID único. O CSS aplica tamanho de fonte a todos os **p** (tag); cor azul via classe a ambos os parágrafos; fundo escuro e texto branco apenas ao elemento **#cabecalho-unico** (ID).

---

## 13. Propriedades de cor e tipografia essenciais

As propriedades **color** e **background-color** controlam a cor do texto e a cor de fundo do elemento, essenciais para contraste e destaque. **font-size** define o tamanho do texto (px, em, rem, %). **font-family** define a fonte utilizada, com lista de fallbacks (por exemplo, Arial, sans-serif). **text-align** controla o alinhamento horizontal (left, center, right, justify).

Um exemplo: o **body** define a fonte primária e o fundo geral. Uma classe **.titulo-secao** pode usar RGB para a cor, centralizar o texto e aumentar o font-size. A lista em **font-family** garante fallback: se a primeira fonte não existir no sistema, as seguintes são usadas, terminando em uma fonte genérica (sans-serif).

---

## 14. Espaçamento com margin e padding (Box Model)

No **Box Model**, cada elemento HTML é tratado como uma caixa com **conteúdo**, **padding** (preenchimento interno), **borda** (border) e **margin** (margem externa).

O **padding** é o espaço entre o conteúdo e a borda; aumenta o tamanho visual do elemento por dentro. A **margin** é o espaço que separa a borda do elemento de outros elementos; é usada para afastar componentes. Ambos podem ser definidos para todos os lados (por exemplo, 10px) ou por lado (margin-top, etc.).

A classe **.card-produto** pode usar **padding: 15px** (espaço entre conteúdo e borda em todos os lados) e **margin: 20px auto** (20px em cima e embaixo; **auto** nas laterais para centralizar o bloco quando há **width** definida, por exemplo 300px).

---

## 15. Combinação de propriedades e alinhamento visual

As propriedades visuais são combinadas para obter o design desejado (por exemplo, um botão com background-color, color, padding e margin). **text-align** centraliza o texto; para **centralizar um elemento de bloco**, use **width** definida e **margin: auto**.

Um exemplo: **.container-central** com **width: 60%** e **margin: 30px auto** centraliza o bloco na página. O parágrafo **.alinhado-centro** usa **text-align: center** para centralizar o texto dentro do bloco. A distinção entre centralizar o bloco e centralizar o texto é um ponto importante para iniciantes.

---

## 16. Comentários e boas práticas de CSS

No CSS, os comentários são definidos entre **/\*** e **\*/**. Use-os para explicar regras complexas, justificar decisões de design ou marcar seções (por exemplo, /\* SEÇÃO CABEÇALHO \*/).

Entre as boas práticas estão: usar nomes de classe e ID descritivos (por exemplo, .btn-primario em vez de .b1); manter indentação consistente (2 ou 4 espaços); agrupar seletores quando compartilham as mesmas propriedades (por exemplo, h1, h2 { color: #333; }). Priorizar **CSS externo** sobre interno e inline é a regra de ouro para separação de responsabilidades.

Um exemplo: comentários delimitam seções do CSS (cabeçalho, main, rodapé). Código organizado por seções e com indentação uniforme facilita a manutenção e a leitura em equipe ou em revisões futuras.
