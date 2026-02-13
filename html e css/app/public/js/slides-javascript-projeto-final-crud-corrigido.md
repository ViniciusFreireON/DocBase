# Slides – Introdução ao projeto final (CRUD básico) (Conteúdo Corrigido)

## 1. Introdução ao projeto final (CRUD básico)

O objetivo principal desta aula e do projeto final é **consolidar** todo o conhecimento adquirido sobre JavaScript, Lógica de Programação, Manipulação do DOM e, principalmente, a **integração com um serviço externo**, que será uma **API** (Application Programming Interface).

Este projeto será um **CRUD** (Create, Read, Update, Delete), que representa as quatro operações básicas de persistência de dados. Focaremos em uma aplicação simples, como um "Gerenciador de Itens de Lista", que é um caso de uso clássico e fácil de entender.

É crucial que você compreenda que, ao final, o projeto demonstrará a comunicação completa entre o **Front-end** (HTML/CSS/JS), responsável pela interface e lógica do cliente, e o **Back-end** (simulado pela API), que gerencia os dados.

Para manter a simplicidade, utilizaremos uma estrutura de arquivos básica: **index.html** (estrutura e interface), **style.css** (estilos visuais) e **script.js** (toda a lógica JavaScript). Este modelo permite que você se concentre na lógica de comunicação e no DOM sem se perder em configurações complexas.

---

## 2. Planejamento da interface (HTML e CSS)

Antes de escrever qualquer linha de JavaScript, devemos planejar a **Interface de Usuário (UI)**, que será criada com HTML e estilizada com CSS. Uma UI bem planejada facilita a manipulação pelo JavaScript.

Para o nosso CRUD de "Lista de Itens", precisamos de três elementos essenciais:

**1.** Um **formulário** para adicionar novos itens (operação Create).

**2.** Uma **área de exibição** (geralmente uma lista **&lt;ul&gt;** ou **&lt;table&gt;** ) para mostrar os itens existentes (operação Read).

**3.** **Botões** (ou links) dentro de cada item para as operações Update e Delete.

É fundamental atribuir **IDs** e **classes** descritivas a esses elementos HTML, pois é por meio desses seletores que o JavaScript irá acessá-los e modificá-los (Manipulação do DOM). Por exemplo, o formulário de cadastro pode ter o ID **form-cadastro** e a lista de exibição pode ser identificada por **lista-de-itens**.

O CSS será mantido simples, apenas para garantir a legibilidade e a organização visual, priorizando a funcionalidade do JavaScript. Lembre-se: o HTML é o esqueleto, o CSS é a maquiagem, e o JavaScript é o cérebro que faz tudo funcionar.

---

## 3. Criação da estrutura inicial de arquivos

A organização é um aspecto crucial de qualquer projeto, mesmo os pequenos. Uma estrutura de arquivos bem definida facilita a manutenção, a busca por códigos específicos e a colaboração. Para o nosso projeto final, seguiremos o modelo mais simples e direto, que é o padrão para projetos front-end básicos.

Teremos **três arquivos** na raiz do nosso projeto (na mesma pasta): **index.html**, **style.css** e **script.js**. É importante que o arquivo JavaScript esteja referenciado corretamente no final do corpo (**&lt;body&gt;** ) do **index.html**, como mostrado no slide anterior, para garantir que ele seja carregado após todos os elementos HTML estarem disponíveis na página.

Além da estrutura física dos arquivos, é importante definir um **ponto de entrada** (a função que será executada assim que a página carregar) dentro do **script.js**.

Geralmente, utilizamos um evento **DOMContentLoaded** ou chamamos a função principal diretamente para garantir que a primeira operação, o **Read** (Leitura), seja executada imediatamente, carregando os dados na tela. Manter a coerência e a simplicidade na nomenclatura das variáveis e funções também contribui muito para a clareza do código.

---

## 4. O conceito de API e a operação de leitura (GET)

A **API** (Application Programming Interface) é um "garçom" digital. Imagine que o seu Front-end é você na mesa do restaurante. Você não vai até a cozinha (o Back-end) pegar a comida (os dados). Você pede ao garçom (a API), que leva seu pedido e traz a resposta.

No nosso projeto, a API é o ponto central onde os dados são armazenados e gerenciados. A operação mais básica é a **Leitura**, ou **GET**, que serve para buscar e receber todos os dados que serão exibidos na tela. O JavaScript usa a função nativa **fetch()** para fazer essa comunicação HTTP.

O **fetch()** retorna uma **Promise**, que é um objeto que representa um valor que pode estar disponível agora, no futuro ou nunca. Utilizamos **.then()** para esperar o sucesso da requisição.

O primeiro **.then()** lida com a resposta HTTP e a converte para **JSON**, e o segundo **.then()** recebe os dados prontos para serem manipulados e exibidos na tela, usando o **DOM**. Essa é a base de toda a comunicação de dados no Front-end moderno, e a simplicidade da requisição GET a torna o ponto de partida ideal para a integração com a API.

---

## 5. Detalhando a operação de leitura (GET) e exibição no DOM

A operação **GET** (Read) é fundamental porque é ela que traz os dados do "servidor" (a API) para o navegador e os exibe. Após receber os dados como um **array de objetos JSON** (como no slide anterior), o próximo passo é transformá-los em elementos visuais no HTML.

Isso é feito pela **Manipulação do DOM** (Document Object Model). O DOM é a representação em árvore da sua página HTML, e o JavaScript atua como um editor dessa árvore. Para exibir uma lista, percorremos o array de dados recebidos (usando métodos como **forEach** ou **map**) e, para cada item, criamos um novo elemento HTML, como um **&lt;li&gt;** (item de lista).

Esses novos elementos devem ser configurados com o conteúdo do item (por exemplo, o nome da tarefa) e, o mais importante, devem conter **botões** para as futuras operações de **Update** e **Delete**.

Esses botões devem ter alguma forma de **identificar o item** ao qual pertencem, geralmente usando o **ID** do item (recebido da API) como um atributo de dados (ex.: **data-id="123"**). Finalmente, injetamos (ou "anexamos") esse novo elemento criado na área de exibição principal do nosso HTML (o elemento **&lt;ul&gt;** com ID **lista-de-itens**).

---

## 6. Implementando a operação de criação (POST)

A operação **POST** (Create) é usada para **enviar novos dados** do nosso Front-end para a API, criando um novo registro. Esta é uma das operações mais críticas, pois envolve a coleta de dados de um formulário HTML e o envio correto para o servidor.

O primeiro passo é capturar o **evento de submissão** do formulário (usando **addEventListener('submit', ...)**) e, crucialmente, **prevenir o comportamento padrão** do navegador de recarregar a página (**event.preventDefault()**).

Ao fazer o **fetch()** para a operação POST, devemos configurar a requisição de forma diferente da GET. Precisamos incluir um **segundo argumento** no **fetch**, que é um **objeto de configuração**.

Este objeto deve especificar:

**1.** O **método** (**'POST'**).

**2.** Os **cabeçalhos** (**headers**), que geralmente indicam que estamos enviando dados em formato JSON (**'Content-Type': 'application/json'**).

**3.** O **corpo** (**body**), que é o objeto JavaScript do novo item, convertido para uma string JSON usando **JSON.stringify()**.

Após o sucesso da requisição, o ideal é limpar o formulário e recarregar a lista (chamar a função GET) para que o novo item apareça na tela.

---

## 7. Entendendo os métodos assíncronos (async/await)

Em JavaScript, as requisições de rede (como **fetch()**) são **assíncronas**. Isso significa que elas não param a execução do restante do código enquanto esperam a resposta da API (que pode levar tempo). Essa espera é tratada com **Promises** e as palavras-chave **async** e **await**.

O uso de **async/await** é uma sintaxe mais moderna e legível para lidar com Promises. O termo **async** (assíncrono) deve ser colocado **antes** de uma função para indicar que ela irá rodar código que não será executado sequencialmente.

A palavra-chave **await** só pode ser usada **dentro de uma função async**. Ela faz com que o código "pause" apenas dentro dessa função e espere que a Promise seja resolvida (com sucesso ou falha) antes de continuar para a próxima linha de código.

Isso simplifica a lógica, especialmente ao fazer várias operações de API em sequência (ex.: buscar dados, depois processar cada um). Para o nosso projeto CRUD, o uso de **async/await** no **fetch** torna o código mais direto para capturar a resposta e o erro, eliminando a necessidade de aninhar múltiplos **.then()**.

---

## 8. O processo de JSON.stringify() e JSON.parse()

No desenvolvimento web, os dados são frequentemente trocados entre o Front-end e o Back-end em formato **JSON** (JavaScript Object Notation). Embora o nome inclua "JavaScript Object", o JSON é, na verdade, um **formato de texto puro**.

Um objeto JavaScript não pode ser enviado diretamente pela rede; ele precisa ser convertido em uma **string de texto** que segue a formatação JSON. É aqui que entram os métodos **JSON.stringify()** e **JSON.parse()**.

**JSON.stringify(objeto):** este método é usado para converter um **objeto JavaScript** (que temos no nosso código) em uma **string de texto JSON**. Isso é crucial para as operações **POST** (Create) e **PUT** (Update), pois o corpo da requisição HTTP (o **body**) precisa ser uma string serializada (texto). Se tentarmos enviar o objeto diretamente, a API não irá interpretá-lo corretamente.

**JSON.parse(stringJSON):** este método é usado para converter uma **string de texto JSON** (que recebemos da API nas operações GET e após o POST/PUT) de volta para um **objeto JavaScript** manipulável. Isso é essencial para que possamos usar a notação de ponto (ex.: **dado.nome**) para acessar as propriedades dos dados e exibi-los no DOM.

---

## 9. Implementando a operação de deleção (DELETE)

A operação **DELETE** é a mais simples em termos de **corpo da requisição**, mas exige cuidado na **identificação**. O objetivo é remover um registro específico da API. Para que o servidor saiba qual item deletar, precisamos passar o **ID único** desse item na **URL** da requisição.

Essa é a razão pela qual, no Slide 5, insistimos em armazenar o ID do item em um **atributo de dados** (ex.: **data-id**) nos botões de Delete criados dinamicamente no DOM. Quando o usuário clica no botão, o JavaScript resgata o ID e o utiliza na requisição **fetch**.

O **fetch()** para o DELETE requer apenas dois elementos:

**1.** O **método** definido como **'DELETE'** no objeto de configuração.

**2.** A **URL correta**, que deve incluir o ID do recurso a ser deletado (ex.: **URL_BASE/123**).

Diferentemente do POST e do PUT, o DELETE geralmente **não precisa de um corpo (body)**. Se a API retornar um status de sucesso (comumente **200**, **204** ou **202**), significa que a deleção foi bem-sucedida. Após isso, o passo final é recarregar a lista (chamar a função GET) para que o item deletado desapareça da tela.

---

## 10. Implementando a operação de atualização (PUT/PATCH)

A operação de **Update** é a mais complexa do CRUD, pois geralmente requer **duas etapas** no Front-end:

**1.** Criar um mecanismo para exibir os dados atuais em um formulário (modo de edição).

**2.** Enviar os dados modificados de volta para a API.

O método HTTP mais comum é o **PUT**, usado para **substituir todo** o recurso no servidor, ou **PATCH**, usado para atualizar **parcialmente** o recurso (enviando apenas os campos alterados). Para manter a simplicidade, focaremos no **PUT**.

Assim como no POST, o **fetch()** para o PUT exige que configuremos o método para **'PUT'**, definamos o cabeçalho **'Content-Type': 'application/json'** e, mais importante, incluamos o **corpo (body)** com a nova versão **completa** do item, convertido em JSON (**JSON.stringify()**).

A **URL** também deve conter o **ID** do item que está sendo modificado. No Front-end, o fluxo geralmente envolve a criação de um formulário pop-up ou **modal** que é preenchido com os dados atuais do item selecionado. Ao salvar, a requisição PUT é enviada e, em caso de sucesso, a lista é recarregada.

---

## 11. Persistência opcional com localStorage

Em muitos projetos simples, como o nosso, pode ser útil manter os dados salvos no navegador do usuário para que eles não desapareçam quando a página for fechada ou recarregada, mesmo que não haja uma API real. O **localStorage** do navegador é perfeito para isso.

Ele armazena dados como **pares de chave-valor** e os mantém mesmo após o navegador ser fechado, persistindo entre sessões (diferente do **sessionStorage**). A grande limitação é que ele armazena **apenas strings**.

Para usar o **localStorage** com nossos objetos JavaScript, precisamos novamente usar o **JSON.stringify()** antes de salvar e o **JSON.parse()** ao recuperar:

**Salvar:** usamos **localStorage.setItem(chave, JSON.stringify(objeto))**. Por exemplo, **localStorage.setItem('minhaLista', JSON.stringify(arrayDeItens))**.

**Recuperar:** usamos **JSON.parse(localStorage.getItem(chave))**. Isso transforma a string JSON de volta em um array ou objeto que o nosso código pode manipular.

Em um projeto com API, o **localStorage** seria usado para armazenar dados não críticos, como preferências de usuário ou tokens de autenticação, e não a lista principal de itens em si. Contudo, em um projeto educacional, ele simula a persistência de dados de forma local.

---

## 12. Organização final e modularização do código

À medida que o nosso **script.js** cresce, a organização se torna vital para a legibilidade. Embora estejamos mantendo o código simples e em um único arquivo, é uma boa prática começar a **modularizar** o código, ou seja, dividir a lógica em blocos (funções) coesos e nomeados. Isso torna cada parte do código responsável por uma única coisa, facilitando a manutenção e os testes.

**Estrutura lógica sugerida para script.js:**

**1. Variáveis globais/constantes:** definição da URL da API (**const API_BASE_URL**), IDs de elementos do DOM, etc.

**2. Funções CRUD:** funções separadas para **buscarDados()**, **criarItem()**, **atualizarItem()** e **deletarItem()**. Cada uma delas deve conter a lógica de **fetch()** e o tratamento da resposta.

**3. Funções de DOM/interface:** funções para **exibirItensNaTela(itens)** (que cria o HTML e anexa eventos) e **limparFormulario()**.

**4. Função de inicialização (init()):** a função principal que anexa os **event listeners** (como o **submit** do formulário) e chama a primeira operação GET para carregar os dados.

Essa separação (separar **Lógica de Dados** vs. **Lógica de Interface**) é a base para a escrita de um código limpo, facilitando que o aluno identifique onde cada parte do projeto está implementada.

---

## 13. Testes de integração e depuração (debug)

O desenvolvimento de um projeto CRUD envolve o que chamamos de **Testes de Integração**, que verificam se o Front-end e o Back-end (a API) estão se comunicando corretamente. É muito comum encontrar erros, especialmente nas requisições assíncronas.

Você deve testar cada operação individualmente após a implementação:

**1. Teste GET (Read):** ao carregar a página, os dados devem aparecer. **Erro comum:** esquecer o **await resposta.json()**.

**2. Teste POST (Create):** ao enviar o formulário, o novo item deve aparecer no console (com a resposta da API) e, após a recarga, na lista. **Erro comum:** esquecer o **event.preventDefault()** ou não enviar o **body** como string JSON.

**3. Teste DELETE:** ao clicar no botão, a confirmação deve aparecer e o item deve sumir da lista. **Erro comum:** não anexar o ID correto à URL de deleção.

**4. Teste PUT (Update):** ao editar e salvar, a alteração deve ser refletida. **Erro comum:** enviar o método como POST em vez de PUT ou PATCH.

Use o **Console do Navegador** (F12) intensamente. Mensagens de erro de rede (**Failed to fetch**), erros de status HTTP (como **404**, **500**) ou erros de **undefined** na manipulação do DOM são seus principais indicadores. Use **console.log()** para inspecionar o objeto antes de enviá-lo (**JSON.stringify(objeto)**) e após recebê-lo (**dados**).

---

## 14. Considerações sobre APIs de exemplo (Mock API)

Em um ambiente de aprendizado, muitas vezes não temos um Back-end real para conectar nosso Front-end. Nesses casos, usamos **Mock APIs** (APIs de Simulação/Exemplo) ou **APIs Públicas de Teste**.

Um exemplo clássico e muito útil é o **JSONPlaceholder**. Este é um serviço online gratuito que fornece dados falsos (**/posts**, **/users**, **/todos**) e simula todas as operações CRUD (GET, POST, PUT, DELETE). Ele é perfeito para testar o código JavaScript.

**Importante sobre Mock APIs:**

**GET:** funciona perfeitamente, retornando dados reais.

**POST, PUT, DELETE:** o serviço simula a operação com sucesso, retornando o código de status correto e, no caso do POST, o novo recurso com um ID. No entanto, o item **não é realmente salvo** no servidor. Se você fizer um POST e depois um GET, o item que você criou não estará lá.

Essa limitação é aceitável, pois o objetivo é testar se o seu código de Front-end (a sintaxe do **fetch**, o tratamento do JSON e a atualização do DOM) está funcionando corretamente, e não a persistência real do servidor.

Outra opção é usar o **localStorage** (como no Slide 11) para simular o armazenamento persistente no seu próprio navegador, se você precisar que os dados permaneçam após um POST e recarregamento da página.

---

## 15. Estrutura final do projeto e arquivos de entrega

O projeto final deve ser entregue em uma **estrutura simples de pasta** que contém os três arquivos essenciais e que pode ser facilmente executada abrindo o **index.html** no navegador.

Ao final, o aluno deve garantir que:

**1.** O **index.html** referencia o **style.css** e o **script.js** corretamente.

**2.** O **script.js** possui um **ponto de entrada** (**init** ou **DOMContentLoaded**) que executa o GET.

**3.** As funções de CRUD (GET, POST, PUT, DELETE) estão conectadas aos **eventos corretos** no DOM (carregamento da página, submissão do formulário, clique nos botões).

**4.** O código está organizado em **funções lógicas**.

A simplicidade e a coesão do código são mais importantes do que a complexidade da interface. O foco é demonstrar a **integração completa** do Front-end com a API.

---

## 16. Orientações para melhorias futuras (next steps)

Embora o objetivo do projeto final seja a implementação básica e funcional do CRUD, o aprendizado não para aqui. Um desenvolvedor júnior deve sempre olhar para a frente e identificar áreas de melhoria. Isso demonstra maturidade e ambição profissional.

**Sugestões de aprimoramento e estudos futuros:**

**1. Validação de formulário:** adicionar lógica JavaScript para garantir que o usuário insira dados válidos (por exemplo, o campo não pode estar vazio) antes de enviar o POST/PUT para a API.

**2. Interface de usuário (UX/UI):** melhorar a estética com um CSS mais elaborado e, principalmente, dar **feedback visual** ao usuário (ex.: mostrar um ícone de "carregando" enquanto espera a resposta da API).

**3. Tratamento de erros no Front-end:** exibir mensagens de erro mais claras ao usuário em vez de apenas **console.error** (ex.: "Falha na conexão com o servidor. Tente novamente mais tarde.").

**4. Uso de funções de ordem superior:** implementar o código de forma mais funcional usando **map**, **filter** e **reduce** para processar os arrays de dados recebidos da API, tornando o código mais conciso.

O projeto final é uma **base**. A capacidade de expandi-lo e aprimorá-lo, aplicando novos conceitos de organização de código e experiência do usuário, é o que fará a diferença no seu portfólio.
