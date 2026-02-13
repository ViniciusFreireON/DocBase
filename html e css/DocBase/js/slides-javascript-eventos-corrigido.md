# Slides – O que são eventos no JavaScript? (Conteúdo Corrigido)

## 1. O que são eventos no JavaScript?

**Eventos** no JavaScript são ações ou ocorrências que acontecem em elementos HTML, acionadas pelo usuário ou pelo próprio navegador. Pense em um evento como um **gatilho** que o navegador está sempre monitorando.

Quando esse gatilho é acionado, podemos fazer com que nosso código JavaScript execute uma função específica, o que chamamos de **função de resposta** (ou **handler**).

Exemplos comuns de eventos incluem o clique em um botão (**click**), o envio de um formulário (**submit**) ou o movimento do mouse sobre um elemento (**mouseover**).

A capacidade de responder a esses eventos é o que transforma uma página web estática em uma aplicação dinâmica e interativa, permitindo que o usuário realmente interaja com o conteúdo, e não apenas o visualize.

O **DOM** (Document Object Model) nos fornece as ferramentas para "escutar" esses eventos e reagir a eles de forma controlada.

Este é o método mais simples de atribuir um evento. Selecionamos o botão (**meuBotao**) e diretamente atribuímos a função **mudarTexto** à sua propriedade **onclick**. Quando o usuário clica no botão, a função é executada, e o parágrafo (**mensagem**) tem seu texto alterado. Isso mostra o conceito básico de que uma ação do usuário (clique) dispara uma função JavaScript, criando uma interação simples.

---

## 2. Tipos de eventos comuns e ocorrências

Existem diversos tipos de eventos que podemos capturar, mas alguns são muito mais utilizados no dia a dia da programação web. Entender os mais comuns é fundamental. O evento **click** é o mais básico, disparado ao clicar com o mouse.

Para interações com campos de texto, temos o evento **input**, que é disparado a cada alteração no conteúdo do campo, e o evento **change**, que é disparado quando o valor de um campo é alterado e ele perde o foco (como ao sair de um campo de texto ou selecionar uma opção em um dropdown).

Além desses, o **submit** é crucial, pois ele é disparado quando um formulário inteiro é enviado. O navegador, por padrão, tem uma ação nativa para cada evento (por exemplo, o **submit** tenta recarregar a página), e muitas vezes precisamos impedir essa ação padrão para poder manipular o evento apenas com JavaScript, garantindo que a nossa lógica de interação seja executada corretamente.

Neste exemplo, usamos o evento **oninput** em um campo de texto. Em vez de esperar o usuário terminar de digitar, a função atribuída é executada instantaneamente sempre que o valor do campo muda (ou seja, a cada nova tecla pressionada). A função acessa o valor atual do campo por meio da propriedade **.value** e atualiza o conteúdo do parágrafo (**saida**). Este é um método muito prático para criar interações em tempo real, como contadores de caracteres ou filtros dinâmicos de pesquisa, mostrando a utilidade do evento **input** na criação de feedback imediato.

---

## 3. O método addEventListener()

O método **addEventListener()** é a maneira moderna e preferida de lidar com eventos no JavaScript. Ele é superior à atribuição direta (**elemento.onclick = funcao**) por uma razão muito importante: ele permite que você anexe **múltiplas funções de resposta** a um único evento em um único elemento.

Se você usar a atribuição direta, a última função atribuída irá sobrescrever todas as anteriores. O **addEventListener()** resolve isso, pois todas as funções anexadas serão executadas quando o evento ocorrer. A sintaxe é simples: **elemento.addEventListener(tipoDoEvento, funcaoDeResposta)**.

O **tipoDoEvento** é uma string (por exemplo, **'click'**, **'mouseover'**, **'submit'**) e a **funcaoDeResposta** é a função que será executada.

Este método é crucial para códigos mais complexos, em que diferentes partes do programa precisam reagir ao mesmo evento. Ele torna o código mais limpo, organizado e fácil de manter.

Neste exemplo, anexamos duas funções (**primeiraAcao** e **segundaAcao**) ao mesmo botão para o mesmo evento (**click**), usando o **addEventListener()**. Ao clicar no botão, ambas as funções são executadas em sequência, sem que uma anule a outra. A primeira escreve no console do navegador, e a segunda mostra uma caixa de alerta. Se tivéssemos usado a abordagem **onclick = ...**, apenas a última função definida seria executada, reforçando a flexibilidade e o poder do **addEventListener()** para construir aplicações web modulares.

---

## 4. A função de resposta (handler) e o objeto evento

A **função de resposta** (ou **event handler**) é o bloco de código que executa a lógica desejada quando um evento ocorre. Ela pode ser definida como uma função nomeada ou como uma **função anônima** diretamente dentro do **addEventListener()**, o que é muito comum para ações simples.

Quando essa função é executada, o JavaScript automaticamente passa um argumento para ela, que é o **objeto evento** (muitas vezes representado pela variável **e** ou **event**).

Este objeto é uma fonte rica de informações sobre o evento que acabou de ocorrer, como: qual elemento HTML o disparou (**e.target**), a posição do mouse na tela (**e.clientX**, **e.clientY**) e, crucialmente, o método **e.preventDefault()**. Este método é usado para **impedir a ação padrão** do navegador para aquele evento.

Por exemplo, ao usar **e.preventDefault()** em um evento **submit**, você impede que o formulário tente recarregar a página, permitindo que o JavaScript controle o envio dos dados.

Neste exemplo, anexamos uma função de resposta ao evento **click** de um link (**&lt;a&gt;**). A função recebe o objeto evento como parâmetro (**e**). A linha chave é **e.preventDefault()**. Sem ela, ao clicar, o navegador nos levaria para o Google. Com ela, a ação padrão é bloqueada. Em seguida, um alerta é mostrado, e usamos a propriedade **e.target** para confirmar qual elemento disparou o evento. O **e.target** sempre aponta para o elemento original em que o evento ocorreu, sendo útil para funções que gerenciam múltiplos elementos.

---

## 5. O evento submit e sua importância

O evento **submit** é o mais importante ao trabalhar com formulários, pois ele é disparado quando o usuário tenta enviar o formulário, seja clicando em um botão de envio (**&lt;button type="submit"&gt;**), seja pressionando Enter em um campo de texto.

Por padrão, o navegador está configurado para, ao receber o evento **submit**, coletar os dados do formulário e enviar uma requisição HTTP, o que geralmente resulta no recarregamento da página.

Na programação web moderna com JavaScript, frequentemente queremos interromper esse comportamento padrão para que possamos interceptar os dados, validá-los e enviá-los de forma assíncrona (sem recarregar a página), o que é conhecido como **AJAX** (embora o AJAX seja um tema mais avançado, o conceito de prevenir o recarregamento é o primeiro passo).

Por isso, a primeira linha de código em quase todo **handler** de **submit** é **event.preventDefault()**, que nos dá controle total sobre o que acontece com os dados do formulário após a tentativa de envio.

Neste exemplo, o evento **submit** é anexado ao elemento **&lt;form&gt;** inteiro, e não apenas ao botão. Quando o botão "Entrar" é clicado, o **addEventListener** captura o evento. A primeira ação é **e.preventDefault()**, que garante que a página não será recarregada. Em seguida, acessamos o valor do campo de texto usando a estrutura do objeto evento (**e.target.nomeDoCampo.value**) e exibimos uma mensagem de sucesso. Isso demonstra como o JavaScript assume o controle do processo de envio para manipular os dados de forma programática.

---

## 6. Acessando dados dos formulários

Para que o JavaScript consiga acessar e usar as informações digitadas pelo usuário, ele precisa "ler" o valor dos campos do formulário. A maneira mais fácil e direta de fazer isso é garantindo que cada campo de formulário (**&lt;input&gt;**, **&lt;textarea&gt;**, **&lt;select&gt;**) possua um atributo **id** ou um atributo **name**.

Depois de selecionar o elemento no JavaScript (usando **document.getElementById()**, por exemplo), o valor atual digitado pelo usuário é sempre armazenado na propriedade **.value** do elemento DOM.

Para caixas de seleção (checkboxes) e botões de rádio (radio buttons), você também pode verificar a propriedade **.checked**, que retorna **true** se o item estiver selecionado e **false** caso contrário.

Acessar o **.value** é o alicerce para qualquer validação ou envio de dados. É crucial lembrar que o **.value** sempre retorna o conteúdo como uma **string**, mesmo que o usuário tenha digitado números.

Este código mostra como selecionar campos individuais e capturar seus valores. Ao clicar no botão, o JavaScript acessa a propriedade **.value** dos elementos **nomeCampo** e **idadeCampo**. Mesmo que o **idadeCampo** seja do tipo "number" no HTML, o JavaScript o lê como uma string. O uso do **template literal** (a string entre crases **`**) ajuda a formatar e exibir os dados capturados de forma clara no parágrafo de resultado. Isso ilustra o processo básico de extração de dados do formulário para o JavaScript.

---

## 7. Validação simples: verificando campos vazios

A **validação** de formulários é o processo de garantir que os dados inseridos pelo usuário são válidos e completos antes de serem processados. A forma mais básica de validação é verificar se um campo obrigatório está vazio.

No JavaScript, isso é feito lendo a propriedade **.value** do campo e comparando-a com uma string vazia (**""**) ou verificando se o seu comprimento (**.length**) é zero.

Se um campo estiver vazio quando o formulário for enviado, devemos impedir o **submit** (usando **e.preventDefault()**) e mostrar uma mensagem de erro ao usuário, orientando-o a preencher o campo.

Essa validação inicial é crucial para a experiência do usuário, pois impede o envio de dados incompletos ou inúteis para o servidor, economizando processamento e garantindo a qualidade da informação.

Embora o HTML5 tenha validações nativas (como o atributo **required**), o JavaScript nos dá o poder de personalizar a mensagem de erro e a lógica de verificação.

Este código demonstra uma validação simples dentro do **handler** do evento **submit**. Ele verifica o comprimento (**.length**) do valor do campo de e-mail. Se for zero (campo vazio), ele chama **e.preventDefault()** para parar o envio e exibe uma mensagem de erro em vermelho. Se o campo estiver preenchido, a mensagem de erro é limpa e a lógica de envio (que aqui é apenas uma simulação) continua. Este é o padrão fundamental: validar → se falhar, impedir o envio e notificar o usuário.

---

## 8. Validação simples: verificando tamanho mínimo

Outra forma básica e muito comum de validação é verificar se o valor inserido possui um **tamanho mínimo** de caracteres. Isso é crucial para campos como senhas ou códigos de segurança, em que um valor muito curto pode indicar um erro de digitação ou ser inseguro.

Novamente, usamos a propriedade **.length** do valor do campo para verificar o número de caracteres. A lógica é a mesma da verificação de campos vazios: no **handler** do evento **submit**, verificamos se **campo.value.length** é menor do que o mínimo exigido.

Se a condição for verdadeira, o envio deve ser impedido com **e.preventDefault()** e uma mensagem clara deve ser mostrada ao usuário.

Este tipo de validação não garante que a informação está correta, mas garante que ela tem a estrutura mínima aceitável, o que é um passo importante para a integridade dos dados.

Neste código, definimos uma constante para o número mínimo de caracteres exigido para a senha. No momento do **submit**, a função de resposta verifica se o comprimento da senha (**senhaCampo.value.length**) é menor que essa constante. Se for, o envio é abortado com **e.preventDefault()**, e o usuário recebe a notificação sobre a regra. Se a senha tiver 6 ou mais caracteres, a validação é aprovada. Este exemplo utiliza uma variável para a regra, o que torna o código mais fácil de manter, pois basta mudar o valor da constante **MIN_CARACTERES** para atualizar a regra de validação em um único lugar.

---

## 9. Atualizando conteúdo de texto (textContent)

Uma das interações mais básicas e visíveis em uma página web é a atualização de seu conteúdo de texto em resposta a uma ação do usuário. O JavaScript facilita isso por meio da propriedade **.textContent**.

Após selecionar um elemento DOM (como um parágrafo ou um cabeçalho), você pode ler o conteúdo de texto atual ou, mais comumente, atribuir um novo valor a ele (**elemento.textContent = novoTexto**). Essa ação é instantânea e o navegador renderiza a mudança imediatamente.

Ao combinarmos um evento (como o **click**) com a atualização do **.textContent**, criamos feedback visual direto para o usuário, por exemplo, mostrando uma mensagem de sucesso, um erro ou a contagem de um item no carrinho de compras.

Diferente do **.innerHTML** (que permite injetar código HTML e pode ser perigoso), o **.textContent** é mais seguro, pois trata o valor apenas como texto puro.

Este código cria um contador simples. Ele declara uma variável JavaScript (**contagem**) que armazena o estado numérico. A cada clique no botão, o **handler** do evento **click** incrementa essa variável. O passo crucial é a linha **display.textContent = 'Contagem: ' + contagem;**, que pega o novo valor da variável JavaScript e o injeta no parágrafo com o **id="contador"**. Este é um exemplo clássico de como o JavaScript manipula dados e reflete essas mudanças de volta para a interface do usuário (UI) de forma imediata e visível.

---

## 10. Atualizando classes CSS (classList)

Muitas vezes, em vez de mudar o texto, queremos mudar a **aparência** de um elemento. Por exemplo, destacar um campo de formulário com uma borda vermelha se a validação falhar, ou mostrar/esconder um menu.

A melhor forma de fazer isso é manipulando as **classes CSS** do elemento, e a propriedade **.classList** é a ferramenta ideal no JavaScript.

O **classList** fornece métodos poderosos: **.add(classe)** para adicionar uma nova classe, **.remove(classe)** para remover uma classe, e **.toggle(classe)** para adicionar a classe se ela não estiver presente, ou removê-la se já estiver.

Essa abordagem é preferível a mudar diretamente o estilo (**elemento.style.propriedade**), pois mantém a separação de responsabilidades: o CSS define a aparência (**.erro**, **.destaque**) e o JavaScript decide quando essa aparência deve ser aplicada, tornando o código mais limpo e organizado.

Este exemplo utiliza o método **.classList.toggle()** para alternar a classe CSS **destaque** no elemento **caixa** a cada clique no botão. O estilo **destaque** está definido no bloco **&lt;style&gt;**. O uso do **toggle** é muito prático para criar funcionalidades de "liga/desliga", como menus expansíveis ou temas claro/escuro. A função verifica se a classe está presente (**.classList.contains()**) para mudar o texto do próprio botão, demonstrando como o JavaScript pode gerenciar classes para controlar o estilo e a interface de forma dinâmica.

---

## 11. Trabalhando com campos de seleção (dropdowns)

Os campos de seleção (**&lt;select&gt;**) são elementos de formulário comuns que permitem ao usuário escolher uma opção de uma lista. Para capturar a escolha do usuário, o evento mais útil é o **change**.

O evento **change** é disparado quando o valor de um campo de formulário é alterado e o campo perde o foco. No caso do **&lt;select&gt;**, o evento é disparado assim que o usuário seleciona uma nova opção na lista.

Para ler a opção escolhida, você acessa a propriedade **.value** do elemento **&lt;select&gt;** selecionado. É importante garantir que o atributo **value** esteja definido em cada uma das tags **&lt;option&gt;** dentro do **&lt;select&gt;**.

Ao utilizar o evento **change**, podemos, por exemplo, carregar dados relacionados à opção escolhida, recalcular um preço ou mostrar informações adicionais, criando uma interface altamente responsiva.

Este código usa o evento **change** no elemento **&lt;select&gt;**. Toda vez que uma nova cor é escolhida, a função é executada. A variável **novaCor** recebe o **value** da opção selecionada (por exemplo, "azul"). Esse valor é usado para atualizar o texto de feedback e, como demonstração, também é usado para mudar a cor de fundo do próprio parágrafo de resultado (**resultado.style.backgroundColor = novaCor;**). Isso ilustra como o **change** é essencial para capturar e reagir às escolhas em listas de seleção.

---

## 12. Desabilitando e habilitando elementos

Em muitas situações de formulário, precisamos tornar um campo inativo até que uma condição específica seja atendida, ou desabilitar um botão após o primeiro clique para evitar envios duplicados. Isso é feito manipulando a propriedade **.disabled** do elemento.

Essa propriedade é um valor **booleano**, ou seja, aceita apenas **true** ou **false**. Definir **elemento.disabled = true** irá desabilitar o campo de formulário (tornando-o inacessível e, muitas vezes, cinza), enquanto **elemento.disabled = false** o habilita novamente.

A desabilitação é muito usada em validações: se um campo obrigatório está vazio, o botão de envio pode permanecer desabilitado.

Ao combinarmos um evento **input** com a verificação de validação, podemos criar um botão que só é habilitado após o preenchimento de todos os dados essenciais, melhorando a experiência e a integridade do formulário.

Neste exemplo, o botão "Enviar Dados" começa desabilitado no HTML (com o atributo **disabled**). O evento **input** é usado no campo de texto para verificar o seu valor a cada tecla. A lógica checa se o comprimento do texto é maior ou igual a 4. Se for, a propriedade **botao.disabled** é definida como **false**, habilitando o botão. Se o texto for apagado e o comprimento cair abaixo de 4, ele é desabilitado novamente. Isso mostra um uso prático do **input** e da propriedade **disabled** para criar uma validação em tempo real que controla a disponibilidade de outros elementos da página.

---

## 13. Funções anônimas e setas (arrow functions)

Ao usar o **addEventListener()**, é muito comum que a função de resposta seja definida no local, sem um nome. Chamamos isso de **função anônima**. Isso é ideal para ações simples que não serão reutilizadas em outros lugares do código.

Mais moderna e concisa é a sintaxe de **função de seta** (arrow function), que é uma forma compacta de escrever funções anônimas.

Ela tem a sintaxe **(parametros) =&gt; { corpo_da_funcao }**. No contexto de eventos, ambas as formas são usadas para manter o código limpo, especialmente quando a lógica do **handler** é curta.

Embora a arrow function tenha uma diferença técnica mais avançada no tratamento do **this** que não abordaremos, no nível básico você pode vê-la como uma simplificação da escrita da função anônima tradicional, sendo a forma dominante em códigos JavaScript recentes.

Este exemplo demonstra as duas sintaxes de função anônima em **handlers** de eventos. Ambas recebem o objeto evento (**e**) e executam uma ação. A principal diferença é visual: a função de seta **((e) =&gt; { ... })** é mais compacta do que a função anônima tradicional **(function(e) { ... })**. Ambas são ideais para usar diretamente no **addEventListener** quando a função não precisa ser chamada por nome em outro lugar do programa, mantendo a lógica do evento bem próxima da sua definição.

---

## 14. Respondendo a múltiplos elementos com um único handler

Em uma página com vários botões que fazem a mesma coisa (por exemplo, adicionar um item ao carrinho ou deletar uma linha de uma tabela), não é eficiente escrever um **addEventListener** separado para cada um.

Podemos aplicar um **handler** (função de resposta) a todos eles de uma vez. Para fazer isso, primeiro selecionamos todos os elementos que nos interessam usando **document.querySelectorAll('seletor')**.

Este método retorna uma **NodeList** (que é como um array de elementos). Podemos então usar um loop (**for** ou **forEach**) para percorrer essa lista e anexar o mesmo **addEventListener** a cada elemento.

Dentro do **handler**, o objeto evento (**e**) e sua propriedade **e.target** se tornam essenciais, pois o **e.target** nos diz exatamente qual dos elementos na lista foi clicado, permitindo que a lógica da função seja aplicada corretamente.

O código seleciona todos os botões que compartilham a classe **.acao-btn** usando **querySelectorAll**. Em seguida, o método **forEach** aplica o mesmo **handler** de **click** a cada um. Dentro da função anônima, usamos **e.target.textContent** para identificar qual botão específico foi clicado, e atualizamos o parágrafo de log com essa informação. Isso elimina a necessidade de dar IDs únicos a cada botão e escrever código repetitivo, mostrando como um único **handler** pode gerenciar uma coleção de elementos.

---

## 15. Mudança de estilo direta para feedback rápido

Embora a manipulação de classes CSS com **.classList** seja a melhor prática para mudanças de estilo complexas, para pequenas e pontuais alterações podemos usar a propriedade **.style** do elemento DOM.

A sintaxe é **elemento.style.propriedadeCSS = valor**. Por exemplo, para mudar a cor do texto para vermelho, você usaria **elemento.style.color = 'red'**.

A vantagem é a simplicidade e a rapidez, ideal para dar um feedback instantâneo ao usuário, como mudar a cor de um campo que acaba de ser validado como correto.

Lembre-se de que as propriedades CSS que contêm hífen (como **background-color**) devem ser escritas em **camelCase** no JavaScript (ficando **backgroundColor**). O uso do **.style** deve ser reservado para estilos dinâmicos gerados pelo JavaScript, e não para o estilo básico da página.

Este código utiliza os eventos **focus** e **blur**, que são úteis para campos de formulário. O evento **focus** é disparado quando o usuário clica dentro do campo, e o **blur** é disparado quando ele sai. Nos **handlers** desses eventos, manipulamos o estilo diretamente: quando o campo ganha foco, ele recebe uma cor de fundo amarela clara e uma borda laranja (usando a notação **style.propriedade**). Quando ele perde o foco, o estilo é revertido. Isso demonstra como o **.style** é ideal para dar feedback visual em tempo real sobre o estado de interação do usuário com o elemento.

---

## 16. Criando interações condicionais simples

A verdadeira utilidade do JavaScript em eventos está em criar **interações condicionais**, ou seja, fazer coisas diferentes dependendo de alguma condição.

Por exemplo, só mostrar uma caixa de texto se o usuário marcar a opção "Outro" em uma lista, ou só realizar o cálculo se ambos os campos numéricos estiverem preenchidos.

Isso envolve usar as estruturas de controle **if/else** dentro da função de resposta do evento. A condição pode ser baseada no valor de um campo (**campo.value === 'x'**), se um checkbox está marcado (**checkbox.checked**), ou se um elemento tem ou não uma determinada classe CSS.

Essa lógica condicional é o que permite que nossas páginas web tenham um comportamento complexo e inteligente, adaptando-se às escolhas do usuário. A chave é sempre ler o estado atual dos elementos DOM antes de tomar a decisão e executar a ação correspondente.

Este exemplo usa o evento **change** em um checkbox para criar uma interação condicional. A função de resposta verifica o estado do checkbox usando a propriedade booleana **checkbox.checked**. Se for **true** (marcado), o estilo de exibição do campo de texto é alterado para **block**, fazendo-o aparecer. Se for **false** (desmarcado), o estilo é alterado para **none**, escondendo-o. Esta é a técnica básica para criar seções dinâmicas em formulários, em que a visibilidade de um elemento depende de uma escolha anterior do usuário.
