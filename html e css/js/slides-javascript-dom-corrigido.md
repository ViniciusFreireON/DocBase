# Slides – O que é o DOM? A estrutura da página web (Conteúdo Corrigido)

## 1. O que é o DOM? A estrutura da página web

O **DOM** (Document Object Model) é a representação da sua página HTML na memória do seu navegador. Pense nele como uma árvore genealógica da sua página web, em que cada elemento (como um parágrafo, um botão ou uma imagem) é um **nó** ou um **objeto**.

Essa estrutura hierárquica permite que o JavaScript acesse e modifique o conteúdo, a estrutura e o estilo dos elementos de forma dinâmica. Sem o DOM, o JavaScript não teria como "enxergar" ou "tocar" o HTML que o usuário vê na tela.

Quando o navegador carrega uma página, ele cria essa árvore DOM. O nó principal é o **document**. Dentro dele, temos o elemento **&lt;html&gt;**, que contém o **&lt;head&gt;** e o **&lt;body&gt;**, e assim por diante, aninhando todos os outros elementos. É crucial entender que o DOM não é o código HTML em si, mas sim um **modelo de programação** baseado nessa estrutura.

Ele transforma as tags HTML estáticas em objetos que podem ser manipulados com as funções e métodos do JavaScript. Essa manipulação é o que permite criar interatividade: responder a cliques, atualizar informações sem recarregar a página e muito mais.

O código HTML simples define um parágrafo com um **id**. No JavaScript, a linha **document.title** acessa a propriedade do nó principal (**document**). A função **document.getElementById** encontra o elemento no DOM, e **console.log** exibe seu conteúdo de texto no console do navegador, provando que o JavaScript está interagindo com a estrutura.

---

## 2. DOM vs. HTML: entendendo a diferença

Embora estejam intimamente ligados, o DOM e o HTML não são a mesma coisa. O **HTML** é a linguagem de marcação estática (o texto que você escreve no seu editor, as tags). Ele define a estrutura inicial da página.

Já o **DOM** é a interface de programação que o navegador cria a partir desse HTML. A grande diferença é que o HTML é estático, mas o DOM é dinâmico e mutável. Se você usar JavaScript para adicionar um novo parágrafo ou mudar o texto de um título, você está mudando o DOM, mas o arquivo HTML original no servidor permanece o mesmo.

O DOM também corrige erros. Se o seu HTML tiver alguma tag mal formatada (ex.: um **&lt;li&gt;** sem um **&lt;ul&gt;** pai), o navegador tenta corrigir isso ao construir a árvore DOM, criando uma representação válida.

O DOM define a estrutura de **nós**, em que cada nó pode ser um **Elemento** (uma tag, como **&lt;div&gt;**), um **Texto** (o conteúdo dentro da tag) ou um **Atributo** (como **class** ou **id**). A manipulação que faremos nesta aula é focada em encontrar esses nós e alterar suas propriedades. É a ponte essencial entre a estrutura visual da web e a lógica de programação do JavaScript.

O código demonstra a estrutura de nós. Selecionamos a lista (**&lt;ul&gt;**). Usamos **lista.parentNode.nodeName** para mostrar que o pai desse elemento é o **BODY** (ou outro elemento superior, dependendo da estrutura completa do HTML), provando a hierarquia. **firstElementChild** acessa o primeiro item (**&lt;li&gt;**), mostrando a relação pai-filho no DOM.

---

## 3. O objeto document e a porta de entrada

O objeto **document** é o ponto de partida para toda a manipulação do DOM. Ele é o **nó raiz** da árvore DOM, representando a página HTML inteira. Toda função ou método que usamos para encontrar elementos, criar novos ou acessar metadados da página começa com ele.

Pense no **document** como o diretório principal ou o gerente geral da sua página. A partir dele, você pode acessar o **&lt;body&gt;**, o **&lt;head&gt;**, o título da página (**document.title**), a URL atual (**document.URL**) e, o mais importante para nós, as funções de seleção de elementos.

O JavaScript globalmente já tem acesso a esse objeto quando o script é executado no contexto de um navegador. É por isso que podemos simplesmente digitar **document.getElementById(...)** sem precisar declarar o **document** antes.

Entender que o **document** engloba tudo simplifica a mentalidade de como abordar a manipulação: você sempre começa de cima (o **document**) e desce para encontrar o elemento específico que precisa ser modificado. Isso garante que o script tente interagir com a página depois que ela tenha sido carregada e a árvore DOM tenha sido totalmente construída pelo navegador.

Este exemplo simples foca em mostrar como o objeto **document** fornece acesso imediato a informações globais da página, como o **title** e a **URL**. Acessar **document.body** é um atalho comum para obter o elemento principal em que a maioria do conteúdo visual está, e **tagName** confirma que estamos lidando com a tag **BODY**.

---

## 4. Nós, elementos e hierarquia (pai, filho, irmão)

A manipulação do DOM é toda sobre a relação entre os **nós**. É uma hierarquia familiar. Em termos simples, um **nó** é qualquer coisa na árvore DOM (pode ser um elemento, um texto, um comentário). Um **elemento** é um tipo específico de nó que corresponde a uma tag HTML, como **&lt;div&gt;**, **&lt;span&gt;** ou **&lt;a&gt;**. Compreender a terminologia de parentesco é fundamental:

**Pai (parent node):** o elemento que contém outro. Ex.: o **&lt;body&gt;** é o pai de um **&lt;div&gt;** que está dentro dele.

**Filho (child node):** os elementos contidos diretamente por um pai. Ex.: o **&lt;h1&gt;** e o **&lt;p&gt;** dentro de um **&lt;div&gt;** são seus filhos.

**Irmão (sibling node):** elementos que compartilham o mesmo pai. Ex.: dois parágrafos consecutivos dentro da mesma **&lt;div&gt;** são irmãos.

O JavaScript oferece propriedades como **parentNode**, **children**, **firstElementChild**, **nextElementSibling** para navegar por essa família. Essa capacidade de navegação permite que, se você selecionar um elemento, você consiga encontrar e manipular seus parentes ou filhos sem precisar de uma nova seleção, o que é poderoso e eficiente. Essa é a essência de como o DOM permite interagir com a estrutura da página de forma relacional.

O script seleciona o elemento com **id="meu-alvo"**. Ele usa **parentNode.id** para mostrar o ID do elemento pai (**div#pai**). Em seguida, usa **previousElementSibling** para apontar para o parágrafo irmão que está antes dele (**p#irmao1**), demonstrando a navegação simples na hierarquia do DOM.

---

## 5. Seleção I: getElementById (a busca exata)

A forma mais simples e direta de selecionar um elemento no DOM é usando o método **document.getElementById()**. Este método é projetado para encontrar um **único** elemento na página que possui um atributo **id** correspondente ao valor que você fornece.

Lembre-se: na web, um **id** deve ser único em toda a página HTML. Se existirem dois elementos com o mesmo ID, o JavaScript encontrará e retornará apenas o primeiro que encontrar, o que pode levar a um comportamento inesperado. Por isso, use IDs apenas para elementos que realmente são únicos e importantes para a manipulação.

A principal vantagem de **getElementById** é sua velocidade. Por ser uma busca exata e não ter que analisar a estrutura de classes ou tags, ele é geralmente o método de seleção mais rápido.

Ele retorna o objeto **Elemento** ou **null** se nenhum elemento com o ID especificado for encontrado. É uma ótima prática para selecionar contêineres principais, formulários únicos ou áreas em que você realizará a maior parte das atualizações dinâmicas na página.

O **getElementById("titulo-principal")** encontra o **&lt;h2&gt;** de forma rápida e exata. Ao ser clicado, a função **mudarTitulo** é executada, e o texto do **&lt;h2&gt;** é modificado. Isso mostra a seleção e a modificação (que veremos em detalhes depois) trabalhando juntas.

---

## 6. Seleção II: querySelector (a versatilidade do seletor CSS)

O método **document.querySelector()** é extremamente poderoso e versátil, pois permite que você use **qualquer seletor CSS válido** para encontrar um elemento.

Diferentemente do **getElementById**, que só busca por ID, o **querySelector** pode buscar por ID (**#meu-id**), por classe (**.minha-classe**), por tag (**p**), e até mesmo por uma combinação complexa de seletores (ex.: **div > p.destaque**). No entanto, a regra mais importante é: ele **sempre retorna apenas o primeiro elemento** que corresponde ao seletor na ordem em que aparece no código-fonte.

Se você estiver procurando por uma classe que aparece em vários lugares, o **querySelector** só lhe dará o primeiro. Para buscar classes, lembre-se de prefixar com um ponto (**.**), e para IDs, com um **#**.

A sua versatilidade o torna a escolha ideal para quando você precisa de uma seleção mais específica ou baseada em classes, mas está interessado em apenas uma ocorrência do elemento. Sua única desvantagem é que, por ter que interpretar o seletor CSS, ele pode ser marginalmente mais lento que a busca direta por ID.

O primeiro **querySelector(".card")** busca na página e retorna o primeiro elemento **&lt;div&gt;** com a classe **card** (o "Item 1"). O segundo **querySelector("#principal")** usa o seletor de ID, encontrando o "Item 2", mostrando como o mesmo método lida com diferentes tipos de seletores CSS.

---

## 7. Seleção III: querySelectorAll (listas de elementos)

Quando você precisa trabalhar com múltiplos elementos que compartilham a mesma classe, tag ou padrão de seletor, o método **document.querySelectorAll()** é a ferramenta correta. Assim como o **querySelector**, ele aceita qualquer seletor CSS válido.

A diferença fundamental é que ele retorna uma **NodeList** (lista de nós), que é uma coleção de **todos** os elementos que correspondem ao seletor, e não apenas o primeiro. Essa **NodeList** se comporta de maneira semelhante a um **array** (lista), permitindo que você percorra cada elemento usando um loop, como o **for** ou o **forEach**.

Lembre-se de que o resultado é uma coleção **estática**: se novos elementos forem adicionados ao HTML depois da execução do **querySelectorAll**, essa lista original não será automaticamente atualizada.

É perfeito para aplicar uma mesma estilização, um mesmo evento ou realizar uma modificação em massa, como esconder todos os itens de uma lista ou mudar a cor de todos os botões com uma classe específica. A manipulação de listas é uma das tarefas mais comuns no desenvolvimento web.

O **querySelectorAll(".item")** retorna uma lista com os três parágrafos. Usamos o método **forEach** (comum em listas) para iterar sobre cada parágrafo. Dentro do loop, o **textContent** de cada elemento é alterado, demonstrando a manipulação em massa.

---

## 8. Outros métodos antigos: getElementsByTagName e getElementsByClassName

Antes da introdução dos versáteis **querySelector** e **querySelectorAll**, os desenvolvedores usavam métodos específicos, como **document.getElementsByTagName()** e **document.getElementsByClassName()**.

Estes métodos ainda são válidos e úteis, especialmente se você deseja buscar apenas por tags ou apenas por classes. O **getElementsByTagName()** retorna uma lista de todos os elementos que têm a tag HTML especificada (ex.: **p**, **div**, **img**). Já o **getElementsByClassName()** retorna uma lista de todos os elementos que contêm a classe CSS especificada.

A principal diferença técnica em relação ao **querySelectorAll** é que estes métodos mais antigos retornam uma **HTMLCollection** (coleção HTML), que é geralmente considerada **dinâmica** ou "live". Isso significa que, se um elemento for adicionado ou removido da página após a sua seleção, a **HTMLCollection** se atualiza automaticamente para refletir essa mudança.

Embora o **querySelectorAll** seja mais poderoso por aceitar qualquer seletor CSS, é bom conhecer estes métodos para ler códigos legados ou quando a velocidade e a natureza "live" da coleção são importantes para o seu projeto.

O código usa **getElementsByClassName("alerta")** para obter a **HTMLCollection** de todos os elementos com essa classe. Como o **forEach** não é nativo em **HTMLCollection**, usamos **Array.from()** para convertê-la temporariamente. Isso permite iterar sobre os elementos e ler o conteúdo de ambos.

---

## 9. Modificação de texto I: textContent (texto puro e seguro)

A propriedade **textContent** é usada para obter ou definir o conteúdo de **texto puro** de um elemento e de todos os seus descendentes (filhos, netos, etc.). É a maneira mais segura e recomendada de inserir texto simples no DOM.

Quando você atribui uma string a **textContent**, qualquer tag HTML dentro dessa string é tratada como texto comum e não é renderizada pelo navegador. Por exemplo, se você tentar inserir **&lt;h1&gt;Novo Título&lt;/h1&gt;** usando **textContent**, o que aparecerá na tela será exatamente a string **&lt;h1&gt;Novo Título&lt;/h1&gt;**, incluindo as tags, e não um título formatado.

Usar **textContent** é essencialmente como limpar o conteúdo de um elemento e preenchê-lo com texto. Seu uso principal é para exibir dados vindo de variáveis, formulários ou APIs, garantindo que nenhum código malicioso ou tag HTML indesejada seja executada no navegador do usuário, prevenindo problemas de segurança conhecidos como **XSS** (Cross-Site Scripting). Para o conteúdo textual da página, ele deve ser sua primeira escolha.

Selecionamos a **&lt;div&gt;** e primeiro lemos seu conteúdo usando **textContent**. Depois, sobrescrevemos com uma nova string. A linha final demonstra o ponto de segurança: o **&lt;b&gt;tag HTML&lt;/b&gt;** é inserido na página exatamente como está escrito, sem negrito, provando que é apenas texto puro.

---

## 10. Modificação de conteúdo II: innerHTML (HTML rico)

A propriedade **innerHTML** é usada para obter ou definir o conteúdo **HTML** (incluindo todas as tags e estruturas) de um elemento. Se você precisa inserir um parágrafo inteiro, uma lista ou uma imagem, e quer que o navegador interprete essas tags e as renderize corretamente, você deve usar o **innerHTML**.

É o método que permite injetar uma estrutura completa de elementos dentro de um elemento pai existente no DOM. Por ser capaz de interpretar e renderizar as tags, o **innerHTML** deve ser usado com extremo cuidado.

Se você estiver inserindo dados que vêm de fontes externas (como entrada de um usuário), há um risco de que um código malicioso (como um **&lt;script&gt;**) possa ser injetado e executado, causando problemas de segurança.

Se você tem certeza absoluta da origem e da segurança do código HTML que está inserindo, ou se o código é fixo e controlado por você, ele é uma ferramenta poderosa para construir interfaces dinâmicas complexas rapidamente.

Definimos uma string que contém duas tags **&lt;li&gt;** válidas, sendo que a segunda tem uma tag **&lt;b&gt;** interna. Ao atribuir essa string a **ul.innerHTML**, o navegador interpreta e renderiza uma lista com dois itens, um deles em negrito, mostrando a injeção de estrutura.

---

## 11. Modificação de atributos: setAttribute e getAttribute

Os **atributos** são informações adicionais contidas em uma tag HTML, como **id**, **class**, **src** (para imagens) ou **href** (para links). Para manipular esses atributos, usamos os métodos **setAttribute()** e **getAttribute()**. O **getAttribute(nomeDoAtributo)** permite que você leia o valor atual de um atributo de um elemento selecionado.

Por exemplo, para descobrir o endereço de um link, você chamaria **link.getAttribute('href')**. O **setAttribute(nomeDoAtributo, novoValor)** permite que você defina ou mude o valor de um atributo. Se o atributo não existir, ele será criado. Se existir, ele terá seu valor substituído. Isso é fundamental para tarefas como mudar a fonte de uma imagem (**src**), desabilitar um botão (**disabled**) ou adicionar um link a uma tag **&lt;a&gt;**.

É importante notar que, para atributos como **class**, você pode usar **setAttribute('class', 'nova-classe')**, mas o JavaScript tem métodos mais específicos e recomendados para manipular classes que veremos brevemente.

O **setAttribute** é usado duas vezes. Primeiro, ele atualiza o **href** do link, fazendo com que ele aponte para um novo endereço quando clicado. Em seguida, ele preenche o atributo **src** da imagem, fazendo com que o navegador carregue o arquivo de imagem especificado, se ele existir.

---

## 12. Gerenciamento de classes: classList (mais prático que setAttribute)

Embora você possa usar **setAttribute('class', ...)** para mudar a classe de um elemento, a melhor maneira de trabalhar com classes CSS é usando a propriedade **classList**.

A **classList** é uma coleção de métodos que simplificam o gerenciamento de classes sem sobrescrever as classes existentes. Isso é crucial, pois um elemento geralmente tem múltiplas classes (ex.: **class="card destaque ativo"**).

Os métodos principais do **classList** são:

**1. add(classe):** adiciona uma nova classe ao elemento sem remover as outras.

**2. remove(classe):** remove uma classe específica do elemento.

**3. toggle(classe):** adiciona a classe se ela não estiver presente e a remove se ela já estiver presente (ótimo para botões de "ligar/desligar" ou menus).

**4. contains(classe):** retorna **true** ou **false** se o elemento tem ou não a classe.

O uso do **classList** permite que você crie interações visuais complexas de forma limpa, apenas alternando classes que já têm regras de estilo definidas no seu CSS, tornando o JavaScript focado apenas na lógica da interação.

Ao clicar no botão, a função anônima é executada. O **statusDiv.classList.toggle("ativo")** adiciona a classe "ativo" na primeira vez e a remove na próxima. A verificação com **contains("ativo")** permite que o script saiba o estado atual para exibir a mensagem correta no console.

---

## 13. Inserção de elementos I: criando com createElement

Além de modificar o conteúdo de elementos existentes, o JavaScript nos permite criar novos elementos do zero e inseri-los na página. Isso é feito principalmente com o método **document.createElement(tagName)**.

O argumento é o nome da tag HTML que você deseja criar (ex.: **'div'**, **'p'**, **'a'**, **'li'**). Quando você chama essa função, o JavaScript cria um novo nó de elemento na memória, mas ele ainda não está visível na página, pois ainda não foi anexado à árvore DOM existente.

O processo de criação de um novo elemento geralmente envolve três passos:

**1. Criação:** usar **document.createElement()** para gerar o nó.

**2. Configuração:** usar **textContent**, **setAttribute** ou **classList.add** para dar a ele conteúdo, atributos e estilo.

**3. Anexação:** usar métodos como **appendChild()** ou **insertBefore()** (que veremos a seguir) para colocá-lo em algum lugar do DOM visível.

Essa metodologia de criação de elementos na memória antes de inseri-los no DOM é crucial para otimizar o desempenho, pois o navegador só precisa renderizar a nova estrutura uma única vez.

O código cria um elemento **&lt;p&gt;** com **document.createElement("p")**. Ele é configurado com texto e uma classe, mas neste ponto a variável **novoParagrafo** guarda o elemento apenas na memória do JavaScript. O **console.log** apenas confirma a criação do objeto, preparando para a próxima etapa.

---

## 14. Inserção de elementos II: anexando com appendChild

Após criar e configurar um novo elemento com **createElement**, você precisa inseri-lo em algum lugar da estrutura visível, ou seja, anexá-lo à árvore DOM. O método mais comum e simples para isso é **elementoPai.appendChild(elementoFilho)**.

Como o próprio nome sugere, este método pega o **elementoFilho** que você criou (ou que você moveu de outro lugar) e o insere como o **último filho** dentro do **elementoPai** especificado.

Se você chamar **appendChild** em um elemento que já está na página, ele será **movido** de sua localização atual para se tornar o último filho do novo pai. Ele nunca faz uma cópia, sempre move o nó.

Isso o torna ideal para adicionar novos itens ao final de uma lista, ou para construir blocos de conteúdo um após o outro, garantindo que o novo elemento se torne parte da página web e seja renderizado pelo navegador.

Continuamos o processo de criação. O **novoItem** é configurado, e **lista.appendChild(novoItem)** o insere na **&lt;ul&gt;** com **id="lista-de-compras"**. O item "Pão Integral" agora aparece na página depois de "Leite", concluindo o ciclo de criação e inserção dinâmica.

---

## 15. Estilização dinâmica com element.style

A maneira mais direta de aplicar estilos CSS diretamente a um elemento usando JavaScript é por meio da propriedade **element.style**. Esta propriedade permite que você acesse e defina as regras de estilo **inline** (diretamente no atributo **style=""** do HTML) para o elemento selecionado.

Ao usar o **element.style**, você está aplicando estilos que têm a prioridade mais alta no CSS, geralmente sobrescrevendo estilos definidos em folhas de estilo externas ou internas.

O ponto crucial é a sintaxe. As propriedades CSS que usam hífen (ex.: **background-color**, **font-size**) devem ser convertidas para a notação **camelCase** no JavaScript (ex.: **backgroundColor**, **fontSize**).

Por exemplo, para mudar a cor de fundo, você escreveria **elemento.style.backgroundColor = 'red'**. Embora seja fácil de usar para mudanças rápidas, para grandes alterações de estilo é melhor usar o **classList.add()** para alternar classes pré-definidas no CSS, mantendo o JavaScript focado na lógica e o CSS focado na aparência.

Selecionamos o parágrafo e acessamos sua propriedade **style**. Usamos a notação camelCase para definir **backgroundColor**, **fontSize** e **border**. Estes estilos são aplicados diretamente ao elemento, sendo úteis para feedback visual instantâneo (ex.: destacar um campo de erro).

---

## 16. Inserção em posições específicas: insertAdjacentElement

Enquanto o **appendChild** só insere um elemento como o último filho, o método **elemento.insertAdjacentElement(posicao, novoElemento)** oferece controle granular sobre onde o novo elemento deve ser colocado em relação ao elemento de referência. Este método aceita dois argumentos: a posição e o elemento a ser inserido.

Existem quatro strings de posição que você pode usar:

**1. beforebegin:** insere o **novoElemento** antes do próprio elemento (como um irmão anterior).

**2. afterbegin:** insere o **novoElemento** como primeiro filho do elemento.

**3. beforeend:** insere o **novoElemento** como último filho do elemento (funciona como **appendChild**).

**4. afterend:** insere o **novoElemento** depois do próprio elemento (como um irmão posterior).

Essa flexibilidade torna este método ideal para construir interfaces em que a ordem de inserção é crucial, como adicionar um cabeçalho dentro de uma **&lt;div&gt;** existente (**afterbegin**) ou inserir uma mensagem de erro logo após um campo de formulário (**afterend**).

O código cria dois elementos. O **aviso** é inserido na posição **beforebegin** da tag de referência, o que o coloca antes do pai da referência no DOM. O **primeiroFilho** é inserido na posição **afterbegin** do **parentNode** da referência, garantindo que ele seja o primeiro elemento dentro do contêiner **#pai-ref**.
