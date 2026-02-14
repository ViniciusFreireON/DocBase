# Slides – Introdução ao JavaScript (Conteúdo Corrigido)

## 1. O que é JavaScript e sua função no navegador

O JavaScript (JS) é uma linguagem de programação essencial para o desenvolvimento web. Diferente de linguagens usadas para construir servidores (como Java ou Python), o JavaScript tem como principal ambiente de execução o navegador web (como Chrome, Firefox ou Edge).

Sua função primária é tornar as páginas estáticas e sem vida em experiências dinâmicas e interativas. Pense nele como o motor que permite que menus se expandam, imagens deslizem em carrosséis, formulários validem dados em tempo real antes de serem enviados, e que você veja animações na tela.

Ele é executado no lado do cliente (o computador do usuário), trabalhando em conjunto com o HTML (que define a estrutura da página) e o CSS (que define o estilo e a aparência). O JS manipula o Modelo de Objeto de Documento (DOM), que é a representação da página HTML.

Este é um exemplo básico de código JavaScript embutido diretamente no HTML (tag `script`). A função **alert()** exibe uma pequena caixa de diálogo pop-up no navegador com a mensagem "Olá, mundo!". A função **console.log()** envia a mensagem para o Console do Navegador, uma ferramenta fundamental para testes e depuração que veremos adiante. Ele demonstra como o JS é lido e executado imediatamente pelo navegador.

---

## 2. Introdução à lógica de programação

Antes de escrever código em qualquer linguagem, é crucial entender a lógica de programação. A lógica é a organização coerente e estruturada de passos para resolver um problema.

Em essência, é como dar instruções claras e sequenciais para um robô. Um programa de computador nada mais é do que um conjunto de instruções lógicas.

Conceitos como **sequência** (instruções executadas uma após a outra), **condição** (fazer algo se uma condição for verdadeira, o famoso if/else) e **repetição** (fazer algo várias vezes, usando loops) são os pilares dessa lógica.

Desenvolver essa forma de pensar ajuda a transformar uma ideia complexa em um conjunto de comandos simples que o computador pode processar. Dominar a lógica garante que seu código não apenas funcione, mas que o faça de maneira eficiente e correta, prevenindo erros de execução.

Este código ilustra a lógica de programação. Primeiro, ele executa uma sequência ao definir duas variáveis (**numero** e **limite**). Em seguida, ele usa uma estrutura de condição (**if/else**) para tomar uma decisão. Se o valor de **numero** for maior que **limite** (o que é verdadeiro, 10 > 5), ele executa o bloco dentro do **if**. Caso contrário, executaria o bloco dentro do **else**. Este é o processo fundamental de tomada de decisão que sustenta qualquer programa.

---

## 3. Criando o primeiro arquivo JS e integrando com HTML

Existem duas formas principais de incluir JavaScript em uma página web. A primeira, vista no Slide 1, é o código embutido, usando a tag `script` dentro do arquivo HTML. Embora seja útil para testes rápidos, a prática recomendada para projetos reais é usar um arquivo externo de JavaScript.

Isso ajuda a manter o código limpo, organizado e separado do HTML e CSS, seguindo o princípio de separação de responsabilidades.

Você cria um arquivo com a extensão **.js** (exemplo: **script.js**) e o anexa ao HTML usando a tag **&lt;script src="caminho/para/seu/arquivo.js"&gt;&lt;/script&gt;**.

O ideal é colocar essa tag no final do **body** do HTML, logo antes da tag de fechamento **&lt;/body&gt;**, para garantir que o HTML seja carregado primeiro, evitando problemas de performance e garantindo que o JS possa acessar todos os elementos da página.

O arquivo **index.html** usa a tag **&lt;script src="app.js"&gt;&lt;/script&gt;** para vincular o código externo. O arquivo **app.js** é executado pelo navegador. Ele primeiro registra uma mensagem no Console. Em seguida, ele usa um comando simples do DOM (**document.querySelector('h1').textContent**) para selecionar o elemento **h1** e mudar o seu texto, provando que o JavaScript está ativo e manipulando o conteúdo HTML.

---

## 4. Console do navegador e testes simples

O Console do Navegador é a ferramenta mais importante para qualquer desenvolvedor JavaScript, especialmente para iniciantes. Ele faz parte das Ferramentas do Desenvolvedor (geralmente acessível por **F12** ou **Ctrl+Shift+I**). O Console serve a dois propósitos principais.

Primeiro, ele é um ambiente para testes imediatos: você pode digitar comandos JS diretamente nele e ver o resultado na hora, sem precisar criar arquivos.

Segundo e mais crucial, ele é a principal ferramenta de **depuração (debugging)**. Mensagens de erro do seu código JS aparecem nele, informando exatamente qual linha causou o problema.

Além disso, a função **console.log()** é usada para "imprimir" o valor de variáveis, mensagens de status ou o resultado de cálculos em pontos específicos do seu código para rastrear o fluxo de execução e entender o que está acontecendo "por baixo dos panos".

Este exemplo mostra o uso estratégico de **console.log()**. Ele não afeta o que aparece na tela do usuário, mas registra informações no Console do Desenvolvedor. Se você estivesse tentando depurar um problema, esses logs seriam essenciais para confirmar se as variáveis **nome** e **idade** estão com os valores esperados antes de uma operação e para verificar se o cálculo (**somaIdade**) foi realizado corretamente.

---

## 5. Variáveis e a palavra-chave let

Uma variável é essencialmente um "rótulo" ou um "contêiner" nomeado na memória do computador que armazena um valor. Em JavaScript, você usa a palavra-chave **let** para declarar uma variável cujo valor pode ser alterado (**mutável**) ao longo do tempo de execução do programa.

É a forma mais comum e moderna de declarar variáveis que você espera que mudem (por exemplo, a pontuação de um jogo ou o nome que um usuário digita em um campo). Ao declarar uma variável com **let**, você deve dar a ela um nome claro e descritivo (uma boa prática).

O uso de **let** em vez de **var** (uma palavra-chave mais antiga) é recomendado porque **let** tem um escopo de bloco mais seguro, o que significa que ela só existe dentro do bloco de código onde foi declarada, evitando confusões em programas maiores.

Este exemplo demonstra o uso e a mutabilidade da variável declarada com **let**. A variável **pontuacao** é inicializada com 0. Em seguida, seu valor é alterado para 50 (ou seja, ela muda de valor), e depois é diretamente definida para 100. Essa capacidade de alterar o valor é o que torna o **let** ideal para dados que precisam ser atualizados dinamicamente durante o uso do aplicativo.

---

## 6. A palavra-chave const (constantes)

Enquanto **let** é usada para valores que mudam, a palavra-chave **const** é usada para declarar uma **constante**, que é uma variável cujo valor não pode ser reatribuído depois de sua declaração inicial. O nome "constante" já indica seu propósito: armazenar valores fixos que o programa não deve alterar.

Por exemplo, você usaria **const** para armazenar o valor de Pi (π), o limite máximo de usuários ou o nome de domínio da sua aplicação. Usar **const** sempre que possível é uma boa prática de programação.

Isso torna o código mais seguro, pois impede alterações acidentais em valores críticos, e torna o código mais fácil de entender, pois um desenvolvedor sabe que aquele valor é fixo. Se você tentar reatribuir um novo valor a uma constante, o JavaScript gerará um erro.

Aqui, **IMPOSTO** é declarada com **const** porque 10% é um valor que não deve ser alterado no programa. A linha comentada (**IMPOSTO = 0.15;**), se executada, mostraria que reatribuir um valor a uma constante resultaria em um erro (**TypeError**). O uso correto de uma constante é simplesmente utilizá-la em operações, como visto no cálculo de **valorImposto**, garantindo que a taxa usada seja sempre a original.

---

## 7. Tipos primitivos de dados (String, Number, Boolean)

Em JavaScript, todo valor que armazenamos tem um tipo de dado associado. Os **tipos de dados primitivos** são os blocos de construção mais básicos da linguagem. Os três mais comuns são:

- **String:** Representa texto (letras, palavras, frases). Uma string é sempre definida por aspas (simples: **'texto'** ou duplas: **"texto"**).
- **Number:** Representa valores numéricos inteiros (ex.: 10) ou de ponto flutuante/decimais (ex.: 3.14). Não há distinção entre inteiros e decimais em JS; ambos são **Number**.
- **Boolean:** Representa um valor lógico, que só pode ser **true** (verdadeiro) ou **false** (falso). Booleans são fundamentais para estruturas de controle (como o **if/else**).

Entender o tipo de dado é crucial porque o JavaScript trata e opera de maneira diferente com cada um. Por exemplo, somar dois **Number** resulta em uma soma matemática, mas somar duas **String** resulta em uma **concatenação** (união de textos).

O código demonstra a declaração dos três tipos primitivos. A função **typeof** é usada para verificar qual tipo de dado o JavaScript reconhece para cada variável. No final, é mostrado um exemplo de concatenação de strings, onde a variável **nome** (String) e **idade** (Number) são unidas a outras strings usando o operador **+** para formar uma única mensagem de texto.

---

## 8. Operadores matemáticos e de atribuição

Programas não apenas armazenam dados, mas também os manipulam usando operadores.

**Operadores matemáticos** permitem realizar cálculos básicos. Os principais são: **+** (adição), **-** (subtração), **\*** (multiplicação), **/** (divisão), **%** (módulo, que retorna o resto de uma divisão).

**Operadores de atribuição** são usados para atribuir um valor a uma variável. O mais básico é o **=** (atribui o valor da direita para a variável da esquerda). Existem também **operadores de atribuição composta**, que realizam uma operação e uma atribuição ao mesmo tempo, simplificando o código (ex.: **x += 5** é o mesmo que **x = x + 5**).

O entendimento desses operadores é fundamental para a criação de qualquer lógica de cálculo ou contagem dentro de um programa.

O primeiro bloco mostra a aplicação direta dos operadores **+** e **%** (módulo). O módulo é muito útil para verificar se um número é par ou ímpar (se o resto da divisão por 2 for 0, ele é par). O segundo bloco demonstra o operador de atribuição composta **+=**. Em vez de escrever a variável duas vezes para somar e atribuir, usamos o **+=** para fazer a mesma coisa de forma mais curta, o que resulta em 10 + 20 = 30.

---

## 9. Comentários: anotando o código

Os comentários são trechos de texto em seu código que são completamente ignorados pelo navegador (motor JavaScript). Eles não afetam o funcionamento do programa, mas são absolutamente essenciais para a leitura e manutenção do código por humanos (você mesmo no futuro ou outros desenvolvedores).

Eles servem para explicar o **porquê** de uma parte do código existir, documentar funções complexas ou deixar notas sobre um trecho que precisa ser revisado.

Existem dois tipos principais de comentários:

1. **Comentários de linha única:** Começam com **//** e valem até o final da linha.
2. **Comentários de múltiplas linhas:** Começam com **/\*** e terminam com **\*/**.

Uma boa prática é comentar o código que não é óbvio ou que introduz uma lógica complexa, evitando comentar o óbvio (ex.: *// Aqui somo 1 + 1*).

Este código mostra os dois tipos de comentários. O bloco inicial, delimitado por **/\* ... \*/**, explica o propósito geral. O comentário após a declaração de **contador** explica o porquê do bloco de repetição (**for**). O comentário na linha **contador++;** explica o que aquela instrução faz. Os comentários tornam claro que, após o loop, **contador** será 5, mesmo que o código seja simples.

---

## 10. Organização e nomenclatura de código (Boas práticas I)

Um código bem escrito não é apenas aquele que funciona, mas aquele que é fácil de ler e entender. A organização e a **nomenclatura** (dar nomes) são cruciais para isso. Nomes de variáveis e funções devem ser descritivos e claros.

Evite nomes genéricos como **a**, **b**, **temp**, a menos que sejam usados em contextos muito limitados (como o **i** em um loop **for**).

Use o padrão de nomenclatura **camelCase** em JavaScript, onde a primeira palavra é minúscula e as seguintes começam com maiúscula (ex.: **nomeCompleto**, **calcularImposto**).

Além disso, use **espaçamento** e **indentação** (recuos) consistentes. Sempre coloque um espaço após as vírgulas e use recuos (geralmente 2 ou 4 espaços) para separar blocos de código, como dentro de funções ou estruturas **if/else**, melhorando a hierarquia visual.

O primeiro bloco (comentado) é difícil de ler porque usa abreviações e não tem espaçamento adequado. O segundo bloco segue as boas práticas: usa **const** para valores fixos e **camelCase** (**nomeCompleto**, **idadeUsuario**). A formatação é limpa, com espaços em torno de operadores e um recuo claro no bloco **if**. Essa clareza é fundamental para o trabalho em equipe e para a manutenção futura do código.

---

## 11. A importância da modularização inicial (Boas práticas II)

À medida que o código cresce, ele pode se tornar confuso. A **modularização** (dividir o código em partes menores e bem definidas) é essencial. Mesmo em projetos pequenos e básicos, você deve começar a pensar em **funções**.

Uma **função** é um bloco de código que executa uma tarefa específica e pode ser reutilizado. Em vez de escrever a mesma lógica várias vezes, você a encapsula em uma função e a chama (executa) quando necessário.

Isso evita a repetição de código, torna a depuração mais fácil (pois você testa apenas uma função por vez) e melhora a organização.

Neste ponto inicial, vamos focar em criar funções simples que apenas executam uma ação e que podem ser chamadas em resposta a um evento.

Este exemplo define a função **saudarUsuario**, que aceita um dado de entrada (**nome**) e exibe uma saudação no Console. A lógica de criar a mensagem está encapsulada. Podemos reutilizar essa mesma lógica simplesmente chamando a função com diferentes nomes (**saudarUsuario("Carlos")** e **saudarUsuario("Ana")**). Isso economiza linhas de código e garante que a saudação seja sempre formatada da mesma maneira.

---

## 12. Contextualização e fluxo do código (Conectando os pontos)

É importante entender como todos esses conceitos básicos se encaixam no fluxo de execução de um programa JavaScript no navegador.

Quando o navegador carrega o HTML e encontra a tag **script**, ele começa a ler o código JS de cima para baixo (sequencialmente). Ele declara as variáveis (**let**, **const**) e atribui seus valores. Ele executa operações e cálculos (+, -, etc.). Ele define as funções (mas não as executa ainda, apenas as registra). Ele executa os comandos que não estão dentro de funções.

Quando ocorre um **evento** (ex.: clique de botão), o código dentro da função ligada a esse evento é acionado (chamado). Todo esse fluxo, desde a declaração de um **let** até a chamada de uma função, é o que chamamos de **tempo de execução**. O entendimento claro dessa sequência de eventos é a chave para a depuração de código.

O código demonstra o fluxo de execução. Primeiro, as variáveis **USUARIO_PADRAO** (constante) e **statusOnline** (variável) são definidas. A função **mudarStatus** é definida, mas seu código não é executado imediatamente. O programa segue sequencialmente, imprimindo o status inicial. Somente quando a função é chamada no final (**mudarStatus();**) é que a lógica interna (alterar **statusOnline** para **true** e logar a mensagem) é finalmente executada.

---

## 13. Introdução ao DOM (Document Object Model)

O **DOM (Document Object Model)** é a representação estruturada da sua página HTML. Pense nele como uma árvore genealógica onde cada elemento HTML (como um **h1**, um **p**, um **button** ou uma **img**) é um **nó** ou um **objeto**.

O JavaScript é a ferramenta que nos permite acessar e modificar essa árvore, alterando o conteúdo (texto), a estrutura (adicionar ou remover elementos) e o estilo (CSS) da página.

O DOM permite que o JavaScript transforme uma página estática (apenas HTML e CSS) em uma aplicação dinâmica. Quando você usa JavaScript para mudar o texto de um parágrafo ou para esconder um menu, você está **manipulando o DOM**. O DOM é a ponte entre o seu código JS e o que o usuário vê no navegador.

Este é um exemplo direto de manipulação do DOM. O elemento **h2** recebe um **ID** (**tituloPrincipal**), que funciona como uma etiqueta única. No JavaScript, usamos o comando **document.getElementById()** para selecionar este nó na árvore do DOM. Em seguida, a propriedade **.textContent** é usada para mudar o texto interno do **h2** para "Título Alterado pelo DOM!". Isso acontece assim que a página é carregada, provando que o JS tem controle sobre o HTML.

---

## 14. Criando uma função para manipular o DOM com um botão (Preparação)

A maneira mais comum de iniciar a interatividade na web é através de **eventos**, e o evento mais básico é o **clique do mouse** em um botão.

Para isso, precisamos de dois elementos: um **botão HTML** (tag **button**) que servirá como nosso gatilho — ele precisa de um **ID** para que o JavaScript possa encontrá-lo — e uma **função JavaScript** que encapsula a lógica que queremos executar (ex.: mudar a cor da tela, mostrar uma mensagem). A função que criamos no Slide 12 (**mudarStatus()**) é um exemplo dessa ideia. Nosso próximo passo será "conectar" o clique do botão a essa função, para que a lógica só seja executada quando o usuário interagir com a página. Essa separação de responsabilidades (HTML para estrutura, JS para comportamento) é o cerne do desenvolvimento web.

Este código prepara o terreno. Temos um parágrafo (**p**) e um botão (**button**), ambos com IDs. Criamos uma função **mostrarMensagem()** que, por enquanto, apenas loga uma mensagem no Console. Note que, ao carregar a página, nada acontece, porque a função ainda não foi conectada ao evento de clique do botão. A lógica de mostrar a mensagem só será acionada quando essa conexão for estabelecida.

---

## 15. Conectando o botão e a função (Evento onclick simples)

Para fazer com que a função JavaScript seja executada quando o usuário clica no botão, usamos o evento chamado **onclick**. A forma mais simples de fazer essa conexão, ideal para iniciantes e testes, é adicionar o atributo **onclick** diretamente à tag HTML do botão.

O valor desse atributo é o nome da função que você deseja chamar, seguido de parênteses (ex.: **onclick="minhaFuncao()"**).

O fluxo é o seguinte: (1) o navegador carrega o botão; (2) o usuário clica; (3) o atributo **onclick** é lido, e a função JavaScript especificada é imediatamente executada.

Combinando esta técnica com a manipulação do DOM, podemos criar nossa primeira funcionalidade completa: um botão que muda o conteúdo da tela.

A chave aqui é o atributo **onclick="mudarConteudo()"** na tag **button**. Quando o usuário clica, ele chama a função **mudarConteudo()** no JavaScript. Essa função, por sua vez, usa **document.getElementById("resultado")** para encontrar o parágrafo e altera seu texto usando **.textContent**. Isso demonstra o ciclo completo de interatividade: **usuário (clique) → HTML (evento) → JavaScript (função) → DOM (mudança na tela)**.

---

## 16. Conclusão da introdução: criando interatividade básica

Chegamos ao ponto em que todos os conceitos iniciais se unem para criar a primeira experiência web interativa.

O **JavaScript** atua como o motor que move o **DOM** (a estrutura HTML). **Variáveis** (**let**/**const**) e **tipos** armazenam os dados. **Operadores** calculam e manipulam esses dados. **Funções** agrupam a lógica de maneira reutilizável. O **DOM** é o alvo para as alterações. Os **eventos** (**onclick**) são os gatilhos que iniciam a execução das funções.

Este entendimento básico (**dados → lógica → evento → DOM**) é o alicerce para qualquer aplicação web moderna, seja ela um formulário simples, uma calculadora ou um jogo complexo. O próximo passo será explorar outras estruturas de controle e maneiras mais robustas de lidar com eventos e manipulação de objetos.

Este exemplo final sintetiza a aula. A variável **contadorCliques** armazena o estado (o número de cliques). O botão, via **onclick="incrementar()"**, chama a função **incrementar**. Esta função incrementa a variável usando o operador **++** (um atalho para **+= 1**) e, em seguida, usa o DOM para exibir o novo valor do contador na tela, fazendo com que o número mude toda vez que o botão é clicado. Esta é a essência da interatividade baseada em eventos.
