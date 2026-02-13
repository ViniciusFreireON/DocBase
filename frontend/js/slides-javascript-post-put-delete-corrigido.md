# Slides – O que são POST, PUT e DELETE? (Conteúdo Corrigido)

## 1. O que são POST, PUT e DELETE?

O protocolo **HTTP** (Protocolo de Transferência de Hipertexto) define um conjunto de **métodos** ou "verbos" que indicam a ação desejada a ser realizada em um recurso identificado. Vimos anteriormente o método **GET**, usado para solicitar/ler dados. Nesta aula, focaremos nos métodos usados para **modificar** dados em um servidor, o que chamamos de operações de **C**, **U** e **D** (Create, Update, Delete) do padrão **CRUD** (Create, Read, Update, Delete).

Entender esses métodos é fundamental, pois eles são a base para interações dinâmicas em qualquer aplicação web. O método **POST** é o principal responsável por **criar** novos recursos ou enviar dados para processamento. Imagine que você está preenchendo um formulário de cadastro em um site; ao clicar em "Enviar", geralmente um **POST** é disparado.

O método **PUT** é usado para **atualizar** ou substituir completamente um recurso existente em um endereço específico. Já o método **DELETE** tem o papel mais simples: ele **remove** o recurso identificado pelo endereço (URL) fornecido.

Embora existam outros métodos (como o **PATCH**), para começar, esses três (**POST**, **PUT**, **DELETE**) e o **GET** são os pilares de toda a comunicação com APIs RESTful. Eles diferem do GET porque, em vez de apenas pedir informação, eles enviam informações ou comandos que alteram o estado do servidor.

Este código não faz uma requisição real, mas simula a intenção por trás de cada método HTTP. Ele demonstra que, ao contrário do GET, os métodos **POST** e **PUT** tipicamente exigem que dados sejam enviados junto com a requisição. O **DELETE**, por sua vez, precisa apenas do endereço (URL) do recurso a ser excluído. Isso estabelece o conceito básico: cada método tem um propósito claro e uma estrutura de dados esperada.

---

## 2. O método POST – criando dados na API

O método **POST** é o coração da funcionalidade de **criação** de novos registros no servidor. Quando você interage com uma API e precisa inserir uma nova informação — seja um novo usuário, um novo produto em um carrinho ou um novo comentário em um blog — o **POST** é o método que o seu código JavaScript deve utilizar.

A chave do POST é que ele envia os dados no **corpo da requisição** (request body). Para que o servidor saiba exatamente o que está sendo enviado, é essencial definir o cabeçalho **Content-Type: application/json**, indicando que o corpo da requisição é um objeto **JSON** (JavaScript Object Notation) serializado (transformado em string).

No JavaScript moderno, utilizamos a função **fetch()** para fazer isso, passando um objeto de configuração que especifica o **método** como **'POST'** e inclui o novo dado formatado como JSON.

O servidor, ao receber essa requisição, cria o novo recurso e, idealmente, retorna uma resposta de sucesso (como um código HTTP **201 Created**) e, muitas vezes, o próprio objeto recém-criado, incluindo seu novo identificador único (**ID**).

Este exemplo demonstra a estrutura básica para uma requisição POST usando a API **fetch**. Primeiro, definimos o objeto JavaScript (**novoItem**) que contém os dados a serem criados. Em seguida, configuramos o objeto **configuracao**, em que especificamos o **method: 'POST'**, definimos o cabeçalho crucial **Content-Type** como **application/json** e, por fim, colocamos o objeto de dados, transformado em string JSON usando **JSON.stringify()**, dentro da propriedade **body**. É a união desses três elementos (método, cabeçalho e corpo) que permite ao servidor criar um novo registro.

---

## 3. O método PUT – atualizando dados na API

O método **PUT** é utilizado quando queremos **substituir ou atualizar completamente** um recurso existente na API. Diferentemente do **POST**, que cria um recurso novo, o **PUT** atua sobre um recurso que já possui um identificador (**ID**) conhecido.

Por isso, a **URL** da requisição PUT deve sempre incluir o ID do recurso que será modificado, como por exemplo **/produtos/101**. O principal requisito do PUT é que o **corpo da requisição** (request body) deve conter a **representação completa e atualizada** do recurso.

Ou seja, mesmo que você queira mudar apenas o nome de um produto, o corpo da requisição deve incluir o nome novo, a descrição antiga, o preço antigo e todas as outras propriedades. Se alguma propriedade for omitida no corpo da requisição PUT, ela será apagada no servidor, pois o PUT tem como objetivo **substituir** o recurso original pelo que foi enviado.

Assim como no POST, o cabeçalho **Content-Type: application/json** e a serialização do objeto JavaScript em JSON são essenciais para que o servidor possa interpretar corretamente os dados de atualização.

O código ilustra a montagem de uma requisição PUT. Note que a **urlRecurso** inclui o ID (**42**) do item que será atualizado, o que é crucial para o PUT. O objeto **dadosAtualizados** contém todas as propriedades do recurso, mesmo aquelas que não mudaram, para garantir que o recurso seja substituído corretamente. A estrutura do objeto **configuracao** é muito semelhante ao POST, mas com o **method: 'PUT'**. Esta estrutura garante que o servidor saiba exatamente qual registro alterar e quais são seus novos valores.

---

## 4. O método DELETE – removendo dados da API

O método **DELETE** é o mais direto e simples dos métodos de manipulação de dados, pois seu único objetivo é **remover** um recurso específico do servidor. Quando um usuário clica em "Excluir" ou "Remover Item", a requisição **DELETE** é disparada.

Para que o servidor saiba exatamente o que apagar, o método DELETE sempre exige que o **ID do recurso** a ser excluído esteja contido na **URL** da requisição. Por exemplo, para deletar um usuário com ID 5, a requisição seria enviada para **/usuarios/5**.

O DELETE **não requer um corpo de requisição** (request body), já que a informação sobre o que apagar já está totalmente contida na URL. No JavaScript, ao usar **fetch()**, precisamos apenas especificar o **method: 'DELETE'** no objeto de configuração.

Uma resposta de sucesso para um DELETE é geralmente um código HTTP **204 (No Content)**, que indica que a ação foi realizada com sucesso e não há conteúdo a ser retornado ao cliente. Este método deve ser usado com cautela, pois a exclusão de dados é, na maioria das vezes, irreversível.

Este código demonstra a simplicidade do método DELETE. Diferentemente do POST e do PUT, a propriedade **body** não é necessária. A URL já contém toda a informação (o ID **15**) para que o servidor identifique e remova o recurso. Apenas o **method: 'DELETE'** no objeto de configuração é suficiente. Isso simplifica a requisição, tornando-a muito objetiva: "Vá para este endereço e remova o que estiver lá".

---

## 5. Criação de objeto e envio via fetch() (POST prático)

Para criar dados, precisamos primeiro **modelar** a informação em um objeto JavaScript que a API espera. Se a API espera um novo usuário com **nome** e **email**, nosso objeto deve ter exatamente essas propriedades.

O processo de envio se resume a três passos essenciais dentro do **fetch()**:

**1.** Definir o **method** como **POST**.

**2.** Definir o cabeçalho **Content-Type** como **application/json**.

**3.** Converter o objeto JavaScript para uma string JSON usando **JSON.stringify()** e passá-lo na propriedade **body**.

Após o envio, a requisição **fetch** retorna uma **Promise**. Precisamos usar o **.then()** para lidar com a resposta do servidor. É crucial verificar se a resposta foi bem-sucedida (ex.: código HTTP **201 Created** ou **200 OK**).

Se a resposta for bem-sucedida, o corpo da resposta geralmente contém o objeto que acabamos de criar, incluindo o **ID** que o servidor atribuiu a ele.

Este é um exemplo completo e funcional usando um serviço real (JSONPlaceholder). A função **criarNovoPost** define o objeto JavaScript e, dentro do **fetch**, configura o POST corretamente. Usamos **await** para esperar a resposta e verificamos se ela está **ok** (código 200–299). Em seguida, usamos **await resposta.json()** para transformar a string JSON de volta em um objeto JavaScript, que é o objeto criado com seu novo ID, provando que a operação de criação foi bem-sucedida.

---

## 6. Manipulação de resposta da API – sucesso e erro

Após enviar qualquer requisição (**POST**, **PUT**, **DELETE**), o servidor sempre retorna uma **resposta**. O sucesso ou falha da operação depende do **código de status HTTP** que vem nessa resposta. O aluno deve aprender a tratar esses dois cenários: sucesso e erro.

Em caso de **sucesso**, os códigos mais comuns para manipulação de dados são: **200 OK** (para PUT, GET ou DELETE bem-sucedidos), **201 Created** (para POST bem-sucedido) e **204 No Content** (frequentemente usado para DELETE bem-sucedido, pois não há corpo a ser retornado).

Em caso de **erro**, códigos importantes são: **400 Bad Request** (dados inválidos), **401 Unauthorized** (não autenticado), **403 Forbidden** (não tem permissão) e **404 Not Found** (recurso não existe).

O JavaScript, ao usar **fetch()**, não lança erro automaticamente para códigos **4xx** ou **5xx**. É nossa responsabilidade verificar se a propriedade **resposta.ok** é **true** ou se o **resposta.status** está dentro da faixa de sucesso.

Se não estiver, devemos **lançar um erro** (ex.: **throw new Error()**) para que o bloco **catch** possa tratá-lo, evitando que o programa tente processar dados que não existem.

A função **deletarItem** demonstra a importância da verificação do **resposta.status**. Em um DELETE, um código **204** ou **200** indica sucesso. Se a API retornasse **404** (Not Found), o código trataria especificamente esse caso. Qualquer outro código de falha (4xx, 5xx) é capturado pela cláusula **else** que lança um novo **Error**, sendo então processado pelo bloco **catch**. Isso garante que o aluno consiga distinguir entre uma exclusão bem-sucedida, um item que já não existia e outros erros inesperados do servidor.

---

## 7. Simulação de API local com ferramentas

Trabalhar com APIs em desenvolvimento muitas vezes exige que tenhamos um ambiente de testes local ou simulado. Para o aprendizado inicial, não é prático configurar um servidor de banco de dados complexo. Ferramentas como **JSON Server** ou **MockAPI** simplificam isso.

O **JSON Server** permite que você crie uma API RESTful completa apenas a partir de um arquivo JSON. Você pode fazer requisições **GET**, **POST**, **PUT** e **DELETE** para ele, e ele persistirá as alterações no seu arquivo JSON (simulando um banco de dados) de forma local.

**MockAPI** (ou serviços similares como o **JSONPlaceholder**, que estamos usando nos exemplos) são APIs mockadas na nuvem, criadas especificamente para fins de teste e simulação.

Elas oferecem **endpoints** (URLs) prontas para você usar em seus testes, permitindo que você pratique os métodos **POST**, **PUT** e **DELETE** sem ter que construir o backend do zero. O aluno deve focar na lógica do frontend e deixar o backend simulado cuidar da persistência.

Este código usa o JSONPlaceholder (uma ferramenta de simulação na nuvem) para praticar o método PUT. O endpoint (**/users/1**) é usado, e o objeto **dadosParaEnvio** contém as propriedades que simulam a atualização completa do recurso. O resultado no console mostrará o objeto retornado com o novo nome, provando que a lógica de envio (método, cabeçalhos, **body**) para o PUT está correta, sem a necessidade de configurar um backend complexo. O aluno pode mudar o método para POST ou DELETE e ver as diferentes respostas.

---

## 8. Conversão de dados: objeto JS e string JSON

Toda a comunicação com APIs via HTTP para **envio** de dados (POST, PUT) depende da correta **conversão** de dados entre **objeto JavaScript** e **string JSON**. O servidor da API (escrito em Python, Java, Node.js, etc.) entende JSON, que é um formato universal de texto para troca de dados.

O nosso código JavaScript trabalha com **objetos**. Para enviar dados, precisamos transformar o objeto JS em uma **string JSON**; para receber dados, precisamos transformar a string JSON da resposta em um **objeto JS**.

Para isso, o JavaScript fornece o objeto global **JSON** com dois métodos principais: **JSON.stringify(objeto)** transforma o objeto JS em string JSON (usado no corpo da requisição de envio). E **JSON.parse(string)** transforma a string JSON de volta em um objeto JS (usado quando o **fetch** retorna o texto da resposta, embora **resposta.json()** faça isso de forma assíncrona). Dominar essa conversão é crucial, pois um erro aqui, como enviar o objeto JS diretamente no **body**, causará um **400 Bad Request** na API.

O código ilustra de forma simples e direta as duas conversões. **JSON.stringify()** pega o objeto JS e o transforma em uma string (notação de texto com aspas duplas em torno das chaves e valores string) que pode ser enviada pela rede. **JSON.parse()** faz o caminho inverso, pegando essa string e recriando o objeto JS, permitindo que o código o manipule. Essa é a base de todo o envio e recebimento de dados no consumo de APIs.

---

## 9. Atualização do DOM com dados criados/atualizados

A principal razão para criar ou atualizar dados na API é que o **usuário final** veja essa mudança na interface, ou seja, no **DOM** (Document Object Model).

A atualização do DOM com dados manipulados na API geralmente segue três etapas após o sucesso da requisição:

**1. Receber os dados:** o **fetch()** retorna a resposta da API, que é transformada em um objeto JavaScript.

**2. Criar elementos:** usamos o JavaScript puro (**document.createElement()**) para criar os novos elementos HTML (como um **&lt;li&gt;** para uma nova tarefa ou um novo **&lt;div&gt;** para um novo post).

**3. Anexar ao DOM:** injetamos esses novos elementos na parte correta da página (**elementoPai.appendChild(novoElemento)**).

Se a operação foi um **DELETE**, a atualização é mais simples: basta usar **elemento.remove()** ou **elementoPai.removeChild(elemento)** no elemento que correspondia ao ID excluído. É essencial garantir que o DOM seja atualizado **apenas após** a API confirmar a operação.

A função **simularCriacaoEAtualizacaoDOM** simula o recebimento dos dados novos (incluindo o ID **101**) que viriam da API após um POST. A função **adicionarItemNoDOM** simula as etapas de manipulação do DOM. Ela "seleciona" uma lista e "cria" um novo elemento (**novoLi**) com o ID e o título, anexando-o à lista. Isso mostra ao aluno que os dados recém-criados ou alterados na API são usados imediatamente para refletir a mudança visualmente na página web.

---

## 10. O conceito CRUD e sua implementação em JS

**CRUD** é um acrônimo fundamental no desenvolvimento web, representando as quatro operações básicas de persistência de dados: **Create**, **Read**, **Update** e **Delete**. Cada uma dessas operações mapeia-se diretamente para um método HTTP que aprendemos:

**Create** utiliza o método **POST** para adicionar um novo recurso. **Read** usa o método **GET** para obter um ou mais recursos. **Update** emprega **PUT** (ou **PATCH**) para modificar um recurso existente. **Delete** usa o método **DELETE** para remover um recurso.

Organizar o código JavaScript em torno do CRUD torna a aplicação mais limpa e manutenível. O objetivo final do aluno deve ser criar um conjunto de funções (ex.: **criarItem()**, **lerItens()**, **atualizarItem()**, **deletarItem()**) que encapsulem a lógica do **fetch()** para cada método HTTP.

Isso isola o consumo da API do restante do código, facilitando a depuração e o desenvolvimento de novas funcionalidades. Uma aplicação web simples é essencialmente um front-end que executa operações CRUD com um back-end (a API).

Este exemplo mostra a estrutura organizacional do código CRUD. Cada função é nomeada de forma clara (criar, ler, atualizar, deletar) e recebe os parâmetros necessários (dados para POST/PUT, ID para PUT/DELETE/GET). Dentro de cada uma dessas funções, o aluno deve implementar o código **fetch()** específico para o método HTTP correspondente, usando os exemplos das etapas anteriores. Isso promove uma organização lógica em que cada parte do código tem uma única responsabilidade.

---

## 11. Organização de código: separando a lógica da API

Uma boa prática de programação, mesmo em projetos simples, é **separar** o código responsável por interagir com a API (lógica de data fetching) do código responsável por manipular a interface do usuário (lógica do DOM).

Isso é chamado de **Separação de Preocupações**. Em um projeto JavaScript, isso significa criar um arquivo ou um objeto que contenha apenas as funções CRUD (**criarItem**, **deletarItem**, etc.) e outro arquivo/função que contenha a lógica de **event listeners** (manipuladores de cliques de botão) e a atualização do DOM.

Quando o usuário clica em "Salvar", a função do DOM chama a função da API (**await criarItem(dadosForm)**) e, após o sucesso, usa os dados de retorno para atualizar a tela.

Essa organização melhora a **modularidade**: se a URL da API mudar, você só precisa alterar um arquivo. Se o design da página mudar, você só precisa alterar a lógica do DOM, sem mexer na comunicação de rede.

O código apresenta dois blocos lógicos. O objeto **ApiService** encapsula toda a lógica de comunicação com a rede, como as funções **post** e **put**, que seriam responsáveis por chamar o **fetch()**. A função **handleFormSubmit** representa a lógica da interface do usuário. Ela chama o **ApiService** e manipula o resultado para atualizar a tela. O aluno vê claramente que o DOM (a interface) e a API (a rede) estão em locais diferentes, mas se comunicam por meio de funções bem definidas.

---

## 12. Usando async/await no fetch() para o CRUD

Para simplificar a escrita de código **assíncrono** (como as requisições **fetch**), o JavaScript moderno introduziu as palavras-chave **async** e **await**.

Uma função marcada como **async** permite que o código dentro dela use **await** antes de qualquer operação que retorne uma **Promise**, como o próprio **fetch()**. Usar **await** torna o código que lida com Promises mais limpo e parecido com o código síncrono (que executa linha por linha).

Em vez de aninhar múltiplos **.then().then()**, o aluno pode escrever o código de forma linear. Por exemplo, em vez de **fetch().then(resposta =&gt; resposta.json()).then(dados =&gt; ...)** usamos **const resposta = await fetch(...)** e **const dados = await resposta.json()**.

Esta abordagem é altamente recomendada para o CRUD, pois melhora a legibilidade e simplifica o tratamento de erros usando o bloco **try...catch**.

A função **deletarComAsyncAwait** mostra como o código se torna mais legível. A palavra-chave **await** paralisa a execução da função até que o **fetch()** termine e retorne a resposta. Isso permite que a verificação de status (**if (resposta.status...)**) seja feita na linha seguinte, como se o código fosse síncrono. O bloco **try...catch** é usado para centralizar o tratamento de erros, capturando tanto erros de rede quanto erros HTTP que nós decidimos lançar (como o 404). O aluno deve adotar esse padrão para todas as operações CRUD.

---

## 13. Caso prático: criando uma tarefa (POST)

Vamos aplicar o conhecimento de **POST** para criar uma nova tarefa em uma aplicação To-Do List. Em um cenário real, o usuário preencheria um formulário com o título da tarefa.

Ao clicar em "Adicionar", o JavaScript coleta esses dados, monta o objeto e envia a requisição **POST**. É crucial que o código **espere a resposta** do servidor, pois ele retornará o objeto recém-criado, incluindo o **ID único** que foi gerado no backend.

Sem esse ID, o front-end não conseguiria, posteriormente, atualizar ou deletar essa tarefa específica. O código abaixo simula o envio e o uso do ID de retorno.

A URL de destino é um endpoint simples (por exemplo, **/tarefas**). O corpo da requisição deve ser um objeto JSON contendo o título e qualquer outro dado inicial, como **concluida: false**.

A função **adicionarNovaTarefa** encapsula a lógica do POST. Ela cria o objeto **novaTarefa**, envia o **fetch** com o **method: 'POST'** e a conversão para JSON. O ponto-chave é que a variável **tarefaCriada** recebe a resposta do servidor, que contém o novo ID. O aluno deve entender que esse ID é essencial e deve ser usado para atualizar a lista de tarefas na interface do usuário (DOM).

---

## 14. Caso prático: marcando tarefa como concluída (PUT)

O método **PUT** é ideal para marcar uma tarefa como concluída, pois isso geralmente envolve a atualização completa de uma única propriedade no objeto (de **completed: false** para **completed: true**).

Para realizar essa operação, o JavaScript deve saber o **ID** da tarefa (obtido durante a leitura inicial ou a criação). A **URL** precisa incluir esse ID (**/todos/{id}**). O **corpo** da requisição (**body**) deve conter o **objeto completo** da tarefa, mas com a propriedade **completed** alterada para **true**.

É uma boa prática, após a requisição PUT ser bem-sucedida, usar a resposta do servidor para atualizar o estado da tarefa no DOM. Por exemplo, se a API retornar a tarefa com **completed: true**, o front-end pode adicionar uma classe CSS (**.concluida**) ao elemento HTML correspondente, riscando o nome da tarefa.

A função **marcarTarefaConcluida** demonstra o uso do PUT. O endpoint é montado com o **idDaTarefa**. É essencial que o objeto (**dadosCompletos**) contenha **todas** as propriedades, mesmo que apenas uma (**completed**) tenha sido alterada, conforme a regra do PUT. Ao receber a **tarefaAtualizada** do servidor, o console mostra o novo estado (**true**), confirmando a operação e fornecendo os dados para a atualização do DOM.

---

## 15. Caso prático: excluindo um comentário (DELETE)

O método **DELETE** é usado para a funcionalidade de **exclusão**. Em um cenário de blog, quando o usuário clica no ícone de lixeira ao lado de um comentário, o JavaScript dispara a requisição **DELETE**.

A única informação crítica que precisa ser enviada é o **ID do recurso na URL**. O corpo da requisição é vazio. Após o sucesso, a aplicação deve não apenas receber a confirmação (ex.: **200 OK** ou **204 No Content**), mas também **remover o elemento HTML** correspondente do DOM imediatamente.

Se o elemento for removido **antes** da confirmação do servidor, e a API falhar (ex.: erro de rede), o usuário terá uma experiência inconsistente (o comentário sumiu para ele, mas ainda está no servidor).

A ordem correta é:

**1.** Enviar DELETE.

**2.** Aguardar sucesso da API.

**3.** Remover o elemento do DOM.

A função **removerPost** demonstra a simplicidade do DELETE. O **fetch()** é chamado apenas com o **method: 'DELETE'**. O código verifica se a resposta foi bem-sucedida (**resposta.ok**). Após a confirmação, o console registra o sucesso e sugere a linha de código (**document.getElementById().remove()**) que seria usada para remover o elemento correspondente do DOM. O aluno entende que o DELETE é sobre o ID na URL e a ação de remoção no DOM.

---

## 16. Conclusão do CRUD: fluxo completo de interação

O desenvolvimento de aplicações web consiste em **ligar** as ações do usuário (cliques e formulários) às operações de CRUD na API e **refletir** o resultado no DOM. Um fluxo de trabalho completo para um único recurso (ex.: um post de blog) segue a seguinte sequência de interações:

**Leitura (GET):** ao carregar a página, o **fetch()** com GET busca todos os posts e os exibe no DOM.

**Criação (POST):** o usuário preenche um formulário e clica em "Salvar". O código dispara um **POST** com os dados. A resposta (com o novo ID) é usada para adicionar o novo post no topo da lista do DOM.

**Atualização (PUT):** o usuário clica em "Editar". O código dispara um **PUT** com os dados alterados e o ID do post. A resposta é usada para reescrever o conteúdo do post na tela, sem recarregar a página.

**Exclusão (DELETE):** o usuário clica em "Excluir". O código dispara um **DELETE** com o ID do post na URL. Após o sucesso, o elemento HTML correspondente é removido do DOM.

Dominar essa correlação entre a **ação do usuário**, o **método HTTP** (POST/PUT/DELETE) e a **atualização da interface** (DOM) é o objetivo final do consumo de APIs para manipular dados.

A função **atualizarEExibirPost** representa o fluxo completo de interação para o PUT. Ela recebe a entrada do usuário (novo título/corpo), monta o objeto, chama o **fetch()** com o método PUT, trata a resposta de erro e, em caso de sucesso, usa o **postAtualizado** para imprimir a confirmação no console (simulando a atualização do DOM). O aluno vê que a função é a ponte entre a interface e a API, e o PUT garante que o recurso seja modificado no servidor.
