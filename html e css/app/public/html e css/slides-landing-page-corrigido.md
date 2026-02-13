# Slides – Revisão de Estrutura HTML e Projeto Landing Page (Conteúdo Corrigido)

## 1. Revisão de estrutura HTML básica

O HTML é a espinha dorsal da página: define estrutura e significado (títulos, parágrafos, imagens, links). O documento deve começar com **&lt;!DOCTYPE html&gt;**, seguido da tag **&lt;html&gt;**, que envolve todo o conteúdo. Dentro de **&lt;html&gt;** ficam **&lt;head&gt;** (metadados, título da aba, links para CSS) e **&lt;body&gt;** (tudo que o usuário vê).

É importante priorizar **tags semânticas**: **&lt;h1&gt;** para título principal, **&lt;p&gt;** para parágrafos, **&lt;a&gt;** para links — isso garante acessibilidade e organização. Para o projeto, manter a estrutura mínima focada na primeira landing page.

O esqueleto mínimo inclui **&lt;link rel="stylesheet" href="css/estilo.css"&gt;** para conectar o CSS. **&lt;h1&gt;** e **&lt;p&gt;** definem o conteúdo; **&lt;a&gt;** cria o link. Com isso, a base para o design fica pronta.

---

## 2. Revisão de estilização CSS

O CSS é responsável pela aparência: cores, fontes, tamanhos, posicionamento e espaçamento. Funciona por **seletores** que "miram" um elemento (por exemplo, **h1**, **.card**) e aplicam propriedades e valores (por exemplo, **h1 { color: blue; }**).

Para um projeto simples, use **seletor de tag** (body), **seletor de classe** (.card) e **seletor de ID** (#principal). Classes podem ser usadas em vários elementos; ID deve ser único. Propriedades básicas incluem **background-color**, **font-size** e **padding**.

Um exemplo: o **body** define fundo, fonte e **margin: 0**. O **h1** centraliza e usa **border-bottom** cinza. O **p** usa **line-height** para leitura. Com o HTML do slide anterior, o texto ganha cor e fonte mais agradável.

---

## 3. Conceito de design responsivo

**Design responsivo** é criar layouts que se adaptam a qualquer tamanho de tela (celular, tablet, desktop). Como a maior parte do acesso é mobile, o projeto precisa funcionar bem em telas pequenas: boa UX, sem zoom ou rolagem lateral para ler.

Em vez de layout fixo, use um layout **fluido** que muda em pontos específicos — em desktop os blocos ficam lado a lado; em celular se empilham verticalmente. Para a landing page, é essencial garantir que formulário e texto sejam legíveis em qualquer celular.

Um exemplo com Flexbox: **.container** com **display: flex**; **flex-wrap: wrap** permite que os **.item** quebrem para a linha de baixo quando não houver espaço. **flex: 1 1 300px** — cada item tem no mínimo 300px e pode crescer ou encolher; em tela pequena os itens se empilham.

---

## 4. A regra essencial: meta tag viewport

Para o navegador mobile interpretar a página como responsiva (e não um site desktop encolhido), é obrigatório incluir no **&lt;head&gt;** a **Meta Tag Viewport**. Sem ela, o celular carrega a página como desktop (cerca de 980px) e depois reduz, deixando o texto ilegível e quebrando o layout.

A tag é **&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;**. **width=device-width** faz a largura da página igual à largura real do dispositivo. **initial-scale=1.0** define o zoom inicial. É a base de qualquer projeto moderno e deve estar entre as primeiras coisas no **&lt;head&gt;**. Sem essa tag, media queries e Flexbox não funcionam corretamente no celular.

---

## 5. Boas práticas de código HTML

A principal boa prática é a **semântica**: usar as tags para o propósito correto, e não **&lt;div&gt;** para tudo. Use **&lt;header&gt;** para o cabeçalho, **&lt;nav&gt;** para menus, **&lt;main&gt;** para o conteúdo principal, **&lt;footer&gt;** para o rodapé.

Isso facilita o entendimento por outros desenvolvedores, por leitores de tela e por mecanismos de busca. Manter a estrutura **limpa e indentada** (espaços ou tabs) mostra visualmente a hierarquia e ajuda a encontrar tags não fechadas. No projeto, usar tags semânticas nas seções principais da landing (header, main, form).

Um exemplo: **&lt;header&gt;** agrupa título e **&lt;nav&gt;**; **&lt;main&gt;** envolve o conteúdo; **&lt;section&gt;** organiza o tema "Sobre"; **&lt;footer&gt;** com copyright. Essas tags dão contexto em vez de várias **&lt;div&gt;**s sem significado.

---

## 6. Boas práticas de código CSS

A organização e a **nomenclatura** evitam que o CSS vire um pesadelo. Use **comentários** para dividir seções (por exemplo, /\* ESTILOS GERAIS \*/, /\* LAYOUT \*/, /\* FORMULÁRIO \*/). Evite nomes genéricos (.a, .box1); prefira nomes descritivos (.botao-principal, .area-formulario). Pode-se usar o padrão **BEM** de forma básica, com classes com hífens (por exemplo, .bloco-texto). Isso evita conflitos e deixa o código escalável.

Um exemplo: **.btn** define o visual base dos botões; **.btn--primario** é um modificador que altera só a cor. No HTML: **&lt;button class="btn btn--primario"&gt;Enviar&lt;/button&gt;**. Reutilização do estilo base e manutenção mais fácil.

---

## 7. Estrutura de pastas simples

Manter os arquivos organizados: criar **três pastas** na raiz do projeto — **css**, **js** e **img**. O **index.html** fica na **raiz** (fora dessas pastas). A pasta **css** guarda os arquivos de estilo (estilo.css); **js**, os scripts (script.js); **img**, imagens, ícones e logos. Essa estrutura facilita as referências (por exemplo, href="css/estilo.css") e deixa o projeto limpo.

Um exemplo: **index.html** é o ponto de partida. Para o estilo: caminho relativo **css/estilo.css**. Para imagem: **img/logo.png**. Organização simples, universal e fundamental desde o início.

---

## 8. O arquivo CSS base (reset e variáveis)

Os navegadores têm estilos padrão para **&lt;h1&gt;**, **&lt;p&gt;**, **&lt;ul&gt;**, etc., o que gera diferenças entre eles. Um **reset** (ou normalização) remove ou padroniza margens e paddings. No estilo.css, comece zerando margem e padding do **body** e do seletor universal **\***. Também é boa prática definir **variáveis CSS** em **:root** (por exemplo, cores principais) e usá-las com **var()** — isso facilita mudanças futuras.

Um exemplo: o seletor **\*** zera margin e padding; **box-sizing: border-box** simplifica o cálculo de tamanhos. Em **:root** ficam variáveis (--cor-fundo-claro, etc.); **var(--cor-fundo-claro)** aplica o valor. Alterar em :root atualiza todo o CSS que usa a variável.

---

## 9. Estrutura básica da landing page

Uma **Landing Page** tem um objetivo: levar o visitante a uma ação (geralmente preencher um formulário). A estrutura típica é: (1) **Header** — logo e chamada; (2) **Main** — explicação do produto ou serviço e **CTA** (Chamada para Ação); (3) **Footer** — informações legais ou links.

Para simplificar, divida o **&lt;main&gt;** em duas colunas: uma para o texto atrativo e outra para o formulário. Com Flexbox, as colunas ficam lado a lado no desktop e se empilham no celular.

Um exemplo: **&lt;main&gt;** é o contêiner principal. Dentro, **&lt;section class="conteudo-principal"&gt;** agrupa tudo; **.bloco-texto** (marketing e chamada) e **.bloco-formulario** (formulário). No CSS, **display: flex** em **.conteudo-principal** coloca os dois blocos lado a lado — padrão de layout simples.

---

## 10. O módulo de conteúdo

A área de conteúdo (**.bloco-texto**) deve ser atraente e legível: **padding** adequado e **font-size** bom em telas pequenas. Atenção ao **contraste** e à **hierarquia** — o **&lt;h2&gt;** deve ser maior e mais impactante que o parágrafo. Use **max-width** para que o texto não fique largo demais em telas grandes (linhas muito longas cansam). Limitar a largura mantém o bloco elegante e funcional em todos os dispositivos.

Um exemplo: CSS para **.bloco-texto** com fundo branco, padding, **flex-grow: 1** (Flexbox) para usar o espaço disponível. O **&lt;h2&gt;** pode usar a variável **--cor-principal**. O resultado é um card com fundo branco, layout limpo e centralizado.

---

## 11. Criação de formulário simples

O formulário é o coração da landing. A tag **&lt;form&gt;** agrupa os campos. Cada campo deve ter **&lt;label&gt;** associada; a ligação é feita com **for** na label e **id** no input — ao clicar na label, o campo recebe foco. Campos básicos: **input type="text"** (nome), **input type="email"** (validação de formato), **input type="submit"** ou **&lt;button type="submit"&gt;** (envio). Use **required** nos campos obrigatórios para validação nativa do navegador.

Um exemplo: labels com **for** e inputs com **id** correspondente. **type="email"** valida o formato. **required** impede envio em branco. **id="form-inscricao"** no formulário e **id="btn-enviar"** no botão de envio são referências para o JavaScript na próxima etapa.

---

## 12. Responsividade básica com media queries

**Media Queries** aplicam estilos conforme características do dispositivo (principalmente largura). O conceito é: "Se a tela tiver no máximo (ou mínimo) X pixels, aplique ESTE estilo." No projeto, use uma media query para mudar o layout: em telas pequenas (por exemplo, até 768px), trocar **flex-direction** de **row** (lado a lado) para **column** (empilhado).

Um exemplo: **.conteudo-principal** define o layout padrão (Flexbox em linha). Dentro de **@media (max-width: 768px)** define-se **flex-direction: column**. O texto e o formulário que estavam lado a lado se empilham ao encolher a janela ou em celular — uso básico e eficaz de media queries.

---

## 13. Uso estratégico de IDs para JavaScript

O JavaScript precisa identificar elementos de forma única; o **id** serve para isso. O **id** deve ser **único** na página — ideal para o formulário (**id="form-inscricao"**), o botão de envio (**id="btn-enviar"**) ou uma mensagem de status (**id="mensagem-status"**). O método **document.getElementById()** usa esse id para acessar e manipular o elemento. Definir os ids no HTML prepara a interatividade com JS.

Um exemplo: **id="form-inscricao"** para interceptar o envio; **id="btn-enviar"** para o botão; **id="mensagem-status"** para um parágrafo inicialmente oculto (display: none), que o JS pode exibir (display: block) após o envio. O id é a porta de entrada para interação precisa.

---

## 14. O poder das classes para manipulação em lote

Enquanto **id** é para elementos únicos, **classes** identificam **grupos** de elementos. Com classes, o JavaScript pode manipular vários elementos de uma vez (por exemplo, na validação — borda vermelha em todos os campos com erro). Crie uma classe CSS **.campo-erro** (borda vermelha, fundo rosa claro) e o JS usa **classList.add()** para aplicá-la aos inputs. **document.querySelectorAll()** seleciona todos os elementos com uma classe. Assim, com poucas linhas, vários campos recebem o mesmo estilo de erro.

Um exemplo: a classe **.campo-erro** existe no CSS. O JS buscaria os inputs (por exemplo, classe **.form-input**) e aplicaria **.campo-erro** com **classList.add()** — manipulação em lote; com 10 campos, o mesmo código afeta todos.

---

## 15. Preparando o formulário para interação com JS

Para o JS manipular o formulário, os campos devem ter **name** (usado pelo navegador no envio) e, quando necessário, **id** (para o JS e para a label). Para manipulação com JS, o **id** é prioritário. Agrupar os inputs com uma classe comum (por exemplo, **.form-input**) facilita pegar todos os campos para validação. O atributo **action** do **&lt;form&gt;**: se apontar para um URL real, o formulário envia e a página recarrega. Para o JS assumir o controle, use **action="#"** ou vazio e impeça o envio padrão no script.

Um exemplo: cada input com **id** (label + JS), **name** (envio) e classe **.form-input**. **input type="date"** como exemplo de campo com interface nativa. Com isso, o formulário está pronto para ser lido e controlado pelo JavaScript.

---

## 16. O básico da conexão com JavaScript

O JavaScript precisa ser **conectado** ao HTML pela tag **&lt;script&gt;**. Pode ficar no **&lt;head&gt;** ou, **recomendado**, no **final do &lt;body&gt;**. Colocar **&lt;script src="js/script.js"&gt;&lt;/script&gt;** logo antes de **&lt;/body&gt;** garante que o navegador já carregou todo o HTML (formulário, ids) antes do script rodar. Se o script estiver no **&lt;head&gt;**, pode tentar acessar elementos do **&lt;body&gt;** que ainda não existem e gerar erro.

Um exemplo: a linha **&lt;script src="js/script.js"&gt;&lt;/script&gt;** conecta o arquivo JS seguindo a estrutura de pastas (pasta **js**, arquivo script.js). Posicionada no final do **&lt;body&gt;**, antes de **&lt;/body&gt;**, evita erros de referência e é a melhor prática para projetos pequenos e grandes.
