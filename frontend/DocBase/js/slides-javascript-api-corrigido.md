# Slides – O que é uma API? (o garçom da web) (Conteúdo Corrigido)

## 1. O que é uma API? (o garçom da web)

Uma **API** (Interface de Programação de Aplicações) é o intermediário que permite que dois sistemas de software conversem entre si.

Pense nela como um **garçom** em um restaurante. Você (seu código JavaScript) não vai diretamente para a cozinha (o servidor onde os dados estão), você faz um pedido ao garçom (a API).

O garçom leva seu pedido para a cozinha e te traz a comida (os dados) que você solicitou, sem que você precise saber como a comida foi preparada. No contexto da web, as APIs mais comuns são as **APIs Web** ou **APIs REST**.

Elas definem como seu código deve pedir dados (como lista de produtos, informações do clima, etc.) a um servidor e como o servidor deve entregar esses dados, geralmente em um formato chamado **JSON** (JavaScript Object Notation).

Isso garante uma comunicação organizada e segura entre seu projeto e o serviço externo. O objetivo principal é buscar e enviar dados de forma estruturada.

O código acima mostra uma estrutura de dados **JSON** básica, que é o formato padrão de resposta de quase todas as APIs Web. Ele armazena informações organizadas por chave e valor. Se a sua aplicação recebe esses dados de um servidor via API, você pode simplesmente usar a notação de ponto (**.**) ou colchetes (**[]**) para acessar cada pedaço de informação, como **dadosUsuarios.nome**. Isso é a base para exibir informações dinâmicas na sua página.

---

## 2. Para que serve uma API? (conectando sistemas)

As APIs servem para **compartilhar funcionalidades e dados** sem expor a complexidade interna do sistema. Imagine um site de notícias.

Ele não armazena o clima; ele usa uma **API de clima** para buscar a temperatura atual e exibir para você. Isso significa que seu código se torna mais leve e mais focado no que ele faz de melhor: apresentar a informação.

APIs permitem a **integração** entre diferentes serviços, tornando a web um ambiente interconectado. Por exemplo, quando você faz login em um site usando sua conta do Google, esse site está usando uma API do Google para verificar sua identidade de forma segura.

Elas são essenciais para construir aplicações modernas que precisam de dados atualizados ou que se comunicam com outros serviços online (como pagamentos, mapas, redes sociais, etc.). Em resumo, a API é a **porta de entrada controlada** para acessar recursos de outro lugar.

Neste exemplo, uma página usa **fetch()** para obter a temperatura atual de uma API de clima. O código não armazena dados de clima; ele apenas consome a API e exibe o valor em um elemento da página (**document.getElementById('temperatura').textContent = dados.temp**). Isso ilustra como a API conecta sistemas diferentes: o site de notícias (seu código) e o serviço de clima (a API externa) trabalham juntos sem que você precise implementar a lógica do clima.

---

## 3. Introdução ao fetch(): o pedido assíncrono

O método nativo do JavaScript para fazer **requisições de rede**, como buscar dados de uma API, é o **fetch()**. Ele é a maneira mais moderna e flexível de se comunicar com servidores.

A função **fetch()** recebe a **URL** (endereço) do recurso que você quer acessar como argumento obrigatório. O ponto crucial sobre **fetch()** é que ele é uma operação **assíncrona**.

Isso significa que ele não para o resto do seu código enquanto espera a resposta do servidor, que pode levar alguns milissegundos ou até segundos. Ele faz o pedido e segue em frente, e só quando a resposta chega é que ele continua com as ações que dependem desses dados.

Isso é vital para que a interface do usuário (a página web) não "congele" enquanto espera a resposta. O **fetch()** sempre retorna uma **Promise**, que é o conceito que veremos a seguir para gerenciar esse comportamento assíncrono.

O **fetch()** é chamado com a URL. Como ele é assíncrono, ele retorna uma **Promise** (promessa). Usamos o método **.then()** para definir o que deve acontecer depois que a requisição de rede terminar. O primeiro **.then()** recebe a resposta do servidor. O comando **resposta.json()** é crucial: ele processa os dados brutos da resposta e os transforma em um objeto JavaScript utilizável. O segundo **.then()** recebe esses dados já prontos. O **.catch()** é usado para lidar com qualquer erro de rede que possa ocorrer.

---

## 4. Requisições GET: o padrão de leitura de dados

No mundo das APIs REST, existem diferentes "verbos" ou **métodos HTTP** que indicam a intenção da sua requisição. O método mais comum e básico é o **GET**. O método **GET** é usado exclusivamente para **solicitar ou ler** dados de um recurso no servidor.

Ele é o padrão. Quando você digita um endereço no seu navegador, ele está fazendo uma requisição GET. Ao usar o **fetch()**, se você não especificar um método (ou seja, não passar o segundo argumento com as configurações), ele assume automaticamente que o método é **GET**.

Isso o torna perfeito para buscar informações como listas de produtos, detalhes de um único item ou qualquer dado que você precise exibir na sua página sem modificar nada no servidor. É um método considerado **seguro** e **idempotente** (fazer a mesma requisição várias vezes não causa efeitos colaterais no servidor).

Aqui, o **fetch(urlPosts)** faz uma requisição GET para buscar os dados dos posts. Note a inclusão de uma verificação simples: **if (response.ok)**. Isso é um primeiro passo no tratamento de erros, garantindo que só prosseguiremos se o status HTTP da resposta for positivo. O código então processa a resposta e exibe o número de posts e o título do primeiro, confirmando que os dados foram lidos com sucesso do servidor.

---

## 5. Promises: a promessa de um valor futuro

Uma **Promise** (promessa) em JavaScript é um objeto que representa a **eventual conclusão** (ou falha) de uma operação assíncrona e seu valor resultante.

É como uma promessa na vida real: você faz um pedido a alguém, e essa pessoa te promete que o pedido será atendido (sucesso) ou que ela informará que não conseguiu (falha).

O **fetch()** sempre retorna uma Promise. Essa Promise pode estar em três estados:

**1. Pending (pendente):** a operação ainda não terminou (o pedido está a caminho).

**2. Fulfilled (realizada):** a operação terminou com sucesso (o pedido foi entregue), e o valor resultante está disponível.

**3. Rejected (rejeitada):** a operação falhou (o pedido não pôde ser entregue, por um erro de rede, por exemplo).

As Promises nos permitem anexar **funções de callback** (funções que serão chamadas depois) para lidar com o sucesso (**.then()**) e o erro (**.catch()**) da operação, organizando o código assíncrono de maneira limpa e sequencial.

A função **simularBusca** retorna uma **new Promise**. Dentro dela, usamos **setTimeout** para simular o atraso de rede. Se a variável **sucesso** for **true**, chamamos **resolver()**, o que faz a Promise entrar no estado Fulfilled e aciona o bloco **.then()**. Se for **false**, chamamos **rejeitar()**, o que a torna Rejected e aciona o bloco **.catch()**. Esse é o mecanismo fundamental por trás do **fetch()**: ele resolve ou rejeita sua própria Promise.

---

## 6. O uso de .then() para sucesso sequencial

O método **.then()** é o coração da manipulação de Promises e é usado para tratar o resultado de uma Promise quando ela é **resolvida** (sucesso).

Ele recebe uma **função de callback** que será executada somente depois que a operação assíncrona for concluída. Você pode **encadear** (chain) múltiplos **.then()**s para realizar operações sequenciais, em que o resultado de um **.then()** é passado como argumento para o próximo. Isso é fundamental no **fetch()**:

**1. O primeiro .then()** recebe o objeto **Response** e geralmente retorna **response.json()** para processar o corpo dos dados.

**2. O segundo .then()** recebe os dados já convertidos para JavaScript (o objeto ou array) e é onde você de fato usa esses dados para manipular o HTML.

Essa cadeia garante que a próxima etapa (manipular dados) só ocorra depois que a etapa anterior (buscar e processar a resposta) estiver 100% concluída.

O primeiro **.then()** recebe a **respostaHTTP** e usa **return respostaHTTP.json()**. Note que **response.json()** também retorna uma Promise, permitindo o encadeamento. O segundo **.then()** recebe o valor resolvido dessa nova Promise (os **dadosDoTodo** em formato JavaScript). Isso garante a sequência: primeiro a busca na rede, e só depois que a busca for bem-sucedida e os dados estiverem prontos, a manipulação e exibição dos dados na tela.

---

## 7. O uso de .catch() para tratamento de falhas

O método **.catch()** é o seu mecanismo de segurança. Ele é usado para lidar com **qualquer tipo de erro** que possa ter ocorrido durante o ciclo de vida de uma Promise, incluindo a requisição **fetch()**.

O **.catch()** só será executado se a Promise entrar no estado **Rejected** (rejeitada). No contexto do **fetch()**, ele geralmente captura dois tipos de falhas:

**1. Erros de rede:** problemas de conexão, como o usuário estar offline, a URL estar incorreta ou o servidor não estar respondendo. O **fetch()** só rejeita a Promise (aciona o **.catch()**) em caso de falha de rede.

**2. Erros lançados (throw):** se você usar a palavra-chave **throw new Error(...)** dentro de qualquer um dos blocos **.then()**, o fluxo do programa será desviado imediatamente para o **.catch()** mais próximo.

Isso é útil para tratar respostas HTTP que não são consideradas sucesso (como um erro **404** – Recurso não encontrado), mesmo que a conexão tenha sido bem-sucedida.

Ao usar uma URL que não existe ou se a internet estiver desligada, a Promise retornada pelo **fetch()** será rejeitada (estado Rejected). Isso aciona o bloco **.catch()**, que recebe um objeto **erro**. Dentro do **.catch()**, é uma boa prática exibir uma mensagem de erro amigável para o usuário no HTML (**document.getElementById('mensagem').textContent = ...**), informando que os dados não puderam ser carregados.

---

## 8. O fluxo completo de fetch(), .then() e .catch()

O fluxo de consumo de API usando **fetch** segue uma linha de execução clara e controlada:

**fetch(URL):** inicia-se a requisição assíncrona (estado Pending).

**Resposta HTTP OK (e sem erro de rede):** a Promise é resolvida. O primeiro **.then()** é chamado.

**Primeiro .then():** recebe o objeto **Response**. Retorna **response.json()** (ou **response.text()**), que inicia outra Promise para processar o corpo da resposta.

**Processamento JSON OK:** a segunda Promise é resolvida. O próximo **.then()** é chamado.

**Segundo (e demais) .then()s:** recebem os dados prontos e manipuláveis. É aqui que o HTML da página é atualizado.

**Falha de rede:** a Promise inicial é rejeitada (estado Rejected). O fluxo vai diretamente para o **.catch()**.

**Erro em qualquer .then():** se ocorrer um erro (ex.: **throw new Error()**) dentro de qualquer **.then()**, o fluxo também desvia imediatamente para o **.catch()** mais próximo. Entender esse fluxo de "cascata" e desvio em caso de erro é crucial para escrever código robusto.

O output no console irá mostrar a ordem: 1, 2, 3, 4. Isso demonstra que o **fetch()** é não bloqueante. O JavaScript executa a linha **fetch(url)**, a **Promise** entra em estado Pending, e o código segue imediatamente para a linha do **console.log("2...")**. Somente quando a resposta da API chega é que os blocos **.then()** (3 e 4) são executados, sem ter travado a execução do código principal.

---

## 9. Preparando o HTML para dados dinâmicos

Consumir uma API é a primeira metade da tarefa; a segunda é **exibir** esses dados de forma visível e organizada no seu projeto web. Para isso, você precisa ter elementos **placeholder** (marcadores de posição) no seu arquivo HTML que o JavaScript possa manipular.

O método mais comum é usar um **&lt;div&gt;** ou um **&lt;ul&gt;** com um **id** único. O **id** serve como uma âncora para o JavaScript. Por exemplo, se você quer exibir uma lista de itens, você pode criar um **&lt;ul&gt;** com **id="lista-produtos"**.

Seu código JavaScript irá usar **document.getElementById('lista-produtos')** para encontrar esse elemento e, em seguida, criar novos elementos HTML (**&lt;li&gt;** , **&lt;p&gt;** , **&lt;img&gt;** ) usando **document.createElement()** e inserir o texto e os valores que vieram da API (**data.nome**, **data.preco**, etc.) dentro deles.

O HTML possui um elemento **&lt;div&gt;** com o identificador **id="dados-do-usuario"**. Inicialmente, ele mostra "Carregando dados...". Este **id** será o alvo do nosso JavaScript. Assim que os dados da API forem recebidos, o JavaScript irá selecionar este **div** e substituir seu conteúdo (**.innerHTML** ou **.textContent**) pelos dados dinâmicos, como o nome e a idade do usuário, garantindo que a página seja atualizada após o sucesso do **fetch()**.

---

## 10. Inserindo um único item no HTML

Para inserir um **único dado** (como o nome de um usuário ou a temperatura atual) no HTML, o processo é direto. Depois que você receber os dados no último **.then()** do seu **fetch()**, você deve:

**Selecionar o elemento:** use **document.getElementById('seu-id')** para obter a referência do elemento HTML.

**Acessar a propriedade:** use a notação de ponto para pegar o valor do dado (**dados.nome**, **dados.title**).

**Atualizar o conteúdo:** atribua o dado ao **textContent** do elemento para inserir apenas texto, ou ao **innerHTML** para inserir HTML formatado.

O uso de **textContent** é mais seguro contra ataques de **Cross-Site Scripting (XSS)**, pois ele insere o valor como texto puro, não como código HTML que pode ser executado. É a abordagem recomendada quando você está apenas exibindo um valor simples vindo da API.

Após o **fetch()** bem-sucedido e a conversão para JSON, o bloco **.then(usuario =&gt; ...)** é executado. Usamos o **document.getElementById('dados-do-usuario')** para acessar a âncora. Criamos uma **template string** (usando **`** e **${}**) para montar o HTML de forma simples e atribuímos isso à propriedade **innerHTML** do elemento placeholder. Isso faz com que o texto "Carregando dados..." seja substituído pelos detalhes formatados do usuário.

---

## 11. Inserindo uma lista de itens no HTML (loops)

Muitas APIs retornam uma **lista de itens** (um array de objetos), como uma lista de posts, produtos ou tarefas. Para exibir todos esses itens, você precisa usar um **loop** (como **forEach** ou **for...of**) dentro do seu último **.then()**.

O processo é:

**Selecionar o contêiner:** obtenha a referência do elemento pai (**&lt;ul&gt;** ou **&lt;div&gt;** ) que irá conter a lista.

**Iterar os dados:** percorra o array de dados recebidos.

**Criar elementos:** dentro do loop, crie novos elementos para cada item (**document.createElement('li')**).

**Preencher e anexar:** preencha o conteúdo do novo elemento e anexe-o ao elemento pai usando **.appendChild()**.

Essa abordagem cria elementos de forma dinâmica, garantindo que o número de itens na tela corresponda exatamente ao que foi retornado pela API.

Após receber o array de objetos **tarefas**, usamos o método **.forEach()** para processar cada um. Dentro do loop, **document.createElement('li')** cria um item de lista para cada tarefa. O **textContent** é preenchido com o título e um ícone de status. Finalmente, **listaTarefas.appendChild(itemLista)** é o comando que pega o novo elemento criado e o insere de fato no **DOM** (Document Object Model) da página, tornando-o visível ao usuário.

---

## 12. Funções para organizar o código de exibição

Com o código crescendo, é uma excelente prática de programação organizar a lógica de exibição de dados em **funções separadas**.

Em vez de colocar todo o código de manipulação do HTML dentro do **.then()**, você pode criar uma função como **exibirDados(dados)** ou **renderizarLista(lista)** e chamá-la dentro do callback do sucesso. Essa abordagem traz vários benefícios:

**Reutilização:** você pode chamar a mesma função de exibição em diferentes partes do seu código, ou após diferentes chamadas de API.

**Clareza:** o código dentro do **.then()** fica mais limpo, apenas focado em passar os dados corretos para a função de exibição.

**Manutenção:** se você precisar mudar o layout, você só precisa modificar o código dentro da função de exibição, sem tocar na lógica do **fetch()**. Isso mantém o código modular e fácil de entender, o que é fundamental para projetos maiores.

Criamos duas funções: **criarItemLista** (que faz o trabalho de montar o HTML para um único item) e **renderizarLista** (que gerencia o loop e a inserção no contêiner principal). No **.then()**, agora só precisamos chamar **renderizarLista(dados)**. Isso torna o código que lida com a Promise (**fetch().then().catch()**) muito mais limpo e legível. A linha **listaCont.innerHTML = '';** é um truque útil para limpar a lista antes de inserir novos dados.

---

## 13. Diferença entre erros de rede e erros de resposta

É crucial saber que existem **dois tipos principais** de falhas ao consumir uma API:

**Erros de rede (network errors):** são falhas na conexão propriamente dita. Exemplos: usuário está offline, o nome de domínio da API está incorreto ou o servidor simplesmente não conseguiu ser encontrado. **Somente** estes erros fazem o **fetch()** rejeitar a Promise, acionando o bloco **.catch()**. O JavaScript nem sequer recebe uma resposta HTTP do servidor nesses casos.

**Erros de resposta (HTTP errors):** a conexão com o servidor foi bem-sucedida, mas o servidor enviou um código de status HTTP que indica um problema. Exemplos: **404 Not Found** (recurso não existe), **401 Unauthorized** (sem permissão) ou **500 Internal Server Error** (erro interno no servidor). Nesses casos, o **fetch()** **não** rejeita a Promise! Ele a resolve normalmente e o **.then()** é chamado. Você precisa verificar o status da resposta dentro do primeiro **.then()**.

Quando a URL retorna um **404**, o JavaScript executa o primeiro **.then()**. É lá que o tratamento de erro de resposta acontece: **if (!response.ok)** verifica se o status da resposta é um erro HTTP. Se for, usamos **throw new Error(...)** para rejeitar a Promise manualmente, desviando o fluxo para o bloco **.catch()** para tratamento unificado do erro.

---

## 14. Verificando o status da resposta HTTP (o response.ok)

Para lidar com erros de resposta (como **404** ou **500**), você deve inspecionar o objeto **Response** que é recebido no primeiro **.then()**.

Existem duas propriedades úteis:

**1. response.status:** é o número do código de status HTTP (**200**, **404**, **500**, etc.).

**2. response.ok:** é uma propriedade **booleana** (verdadeiro/falso). Ela é **true** se o código de status for bem-sucedido (entre 200 e 299). Caso contrário, é **false**. A melhor e mais simples prática é verificar **response.ok**. Se for falso, isso indica que o servidor recebeu o pedido, mas algo deu errado (o recurso não existe, problema de autenticação, etc.).

Nesses casos, você deve interromper o fluxo da Promise e lançar um erro usando **throw new Error()**, garantindo que o **.catch()** seja ativado.

O **if (!response.ok)** é a linha de defesa contra erros como 404. Se o status for um erro, ele lança um novo **Error** com a mensagem descritiva. Essa ação faz com que o fluxo pule o resto dos **.then()**s e vá direto para o **.catch()**. Dentro do **.catch()**, podemos exibir a mensagem de erro detalhada no console e, principalmente, na tela do usuário.

---

## 15. O tratamento unificado de erros no .catch()

O bloco **.catch()** se torna o **ponto central** para lidar com todos os tipos de falhas que podem ocorrer: falhas de rede (que rejeitam o **fetch()** diretamente) e falhas de resposta HTTP (que são lançadas manualmente por nós no **.then()**).

Essa unificação simplifica muito o código. No seu **.catch()**, você deve:

**1. Logar o erro:** use **console.error(erro)** para que o erro detalhado apareça no Console do Navegador (útil para o desenvolvedor).

**2. Informar o usuário:** atualize um elemento no HTML (o mesmo placeholder que você usou para dados, por exemplo) com uma mensagem clara de que houve um problema. Mensagens como "Erro ao carregar os dados. Tente novamente mais tarde" são mais úteis do que mensagens técnicas.

**3. Ações de recuperação (opcional):** em casos mais avançados, você poderia tentar refazer a requisição ou carregar dados default (padrão) em vez de exibir a mensagem de erro.

O bloco **.catch(erro =&gt; {...})** é onde o código reage à falha. O foco aqui é a linha **statusMsg.textContent = ...**, que muda o texto na tela de forma amigável, orientando o usuário sobre o que pode ter ocorrido (problema de rede). Também incluímos um log no console para fins de debug (localização de erro), e uma ação opcional (**.disabled = false**) para demonstrar que o **.catch()** pode ser usado para reabilitar elementos da interface.

---

## 16. Resumo e melhores práticas de consumo de API

Para finalizar, vamos resumir as **melhores práticas** para buscar dados externos de forma segura e controlada:

**Use fetch():** é o padrão moderno do JavaScript para requisições de rede e retorna uma Promise.

**Gerencie Promises:** use **.then()** para o fluxo de sucesso sequencial (primeiro a resposta, depois o JSON) e **.catch()** para tratamento de falhas.

**Verifique o status:** sempre verifique **response.ok** no primeiro **.then()**. Se for **false** (erro HTTP como 404), use **throw new Error()** para garantir que o erro seja tratado pelo **.catch()**.

**Trate erros de rede:** use o bloco **.catch()** para capturar falhas de conexão ou erros lançados, e forneça feedback claro ao usuário.

**Manipulação do DOM:** use **document.getElementById()**, **document.createElement()** e **.appendChild()** (ou **.innerHTML**) dentro do último **.then()** para exibir os dados de forma dinâmica e organizada. Mantenha essa lógica em funções separadas para um código mais limpo.

Este bloco é o padrão completo. Ele começa com **fetch()**. O primeiro **.then()** contém o tratamento de erro de resposta (**if (!response.ok)**), lançando um erro em caso de falha HTTP. O segundo **.then()** é dedicado a manipular os dados no HTML (o objetivo final). Por fim, o **.catch(erro)** unifica o tratamento, capturando tanto erros de rede quanto os erros lançados, garantindo que o usuário receba uma mensagem de erro clara na tela.
