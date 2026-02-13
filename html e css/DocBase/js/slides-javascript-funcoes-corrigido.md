# Slides – O que são funções e por que usá-las (Conteúdo Corrigido)

## 1. O que são funções e por que usá-las

As **funções** no JavaScript são blocos de código que executam uma tarefa específica e podem ser **chamadas** a qualquer momento. Você pode pensar em uma função como uma "máquina de tarefas" ou uma receita de bolo: ela tem um nome, pode receber ingredientes (os **parâmetros**) e, quando ativada, executa uma série de passos bem definidos.

O principal motivo para usarmos funções é a **organização do código**. Em vez de escrever um programa inteiro como um único bloco gigante de comandos, dividimos o trabalho em partes menores e gerenciáveis. Isso torna a leitura e a manutenção do código muito mais simples, especialmente em projetos maiores.

Além da organização, as funções promovem o princípio da **modularidade**, em que cada parte do seu sistema é um módulo independente que resolve um problema específico. Essa abordagem é fundamental no desenvolvimento moderno e permite que diferentes desenvolvedores trabalhem em partes distintas do código sem interferir diretamente um no outro, melhorando a escalabilidade e a clareza do projeto técnico.

A definição de uma função é o primeiro passo para criar um código que seja não apenas funcional, mas também profissional e sustentável ao longo do tempo.

Este é o exemplo mais simples de uma declaração de função. Usamos a palavra-chave **function**, seguida pelo nome que escolhemos (**saudacaoBasica**) e parênteses **()**. As instruções que a função deve executar ficam dentro das chaves **{}**. Neste caso, ela apenas define uma variável e imprime uma mensagem no console.

O valor da função só é executado quando a chamamos pelo nome, seguida pelos parênteses, como mostrado nas duas últimas linhas. A principal utilidade aqui é que, em vez de repetir as duas linhas de código para imprimir a mensagem, basta chamar o nome da função, garantindo a reutilização.

---

## 2. Sintaxe básica: declaração de função

A forma mais comum e tradicional de criar uma função em JavaScript é por meio da **Declaração de Função** (Function Declaration). Para declarar uma função, você usa a **palavra-chave** **function**, seguida por um nome obrigatório para a função, que deve ser claro e descritivo para indicar o que ela faz, e um par de parênteses, que é onde os parâmetros serão definidos (mesmo que não haja nenhum). O **corpo** da função, que é o conjunto de instruções a serem executadas, é delimitado por chaves **{}**.

É importante notar que a Declaração de Função é processada **antes** que qualquer código seja executado, um conceito conhecido como **hoisting**, que veremos mais adiante. Isso significa que você pode chamar a função no seu código antes mesmo de ela ter sido definida, o que oferece uma certa flexibilidade, mas também exige atenção para evitar confusões.

Essa sintaxe é a base para a modularização do código, permitindo que você defina blocos de código nomeados que representam unidades lógicas de trabalho. No contexto técnico, usar nomes de funções bem pensados, como **calcularImposto** ou **validarDados**, é essencial para criar um código que se documenta sozinho e é intuitivo para qualquer colega de equipe ler e entender rapidamente o objetivo de cada bloco.

O código demonstra a estrutura de uma declaração de função (**mostrarMensagem**) que contém uma pequena lógica interna: um loop **for** que imprime uma contagem. O propósito é encapsular uma sequência de passos (a contagem e a impressão) sob um único nome. A vantagem é clara: se o processo de contagem precisar ser executado em dez lugares diferentes do seu programa, você só precisa escrever o código do loop uma vez, dentro da função, e chamá-la dez vezes. Isso economiza linhas de código e, o mais importante, garante que a lógica seja sempre a mesma em todos os locais que a utilizam, facilitando correções ou alterações futuras.

---

## 3. Sintaxe alternativa: expressão de função

Uma alternativa para criar funções é utilizando a **Expressão de Função** (Function Expression). Diferente da declaração, a expressão de função é criada como parte de uma expressão maior e frequentemente é atribuída a uma variável. Para fazer isso, você pode usar a palavra-chave **function** sem um nome (**função anônima**) e atribuir toda a definição a uma variável usando **let** ou **const**.

A principal diferença prática é que, como a função é tratada como um valor armazenado em uma variável, ela não sofre **hoisting** da mesma forma que uma declaração. Isso significa que você só pode chamar a função depois que a linha de código que a define foi executada.

Essa característica pode ser útil para garantir que um bloco de código só seja definido e esteja disponível em um determinado ponto da execução, ou para passá-lo como argumento para outras funções. Embora a sintaxe seja um pouco diferente, o objetivo final é o mesmo: criar um bloco de código reutilizável.

No ambiente técnico, expressões de função são frequentemente usadas em **callbacks** (funções que são passadas para serem executadas posteriormente) e na definição de métodos em objetos, demonstrando sua versatilidade e importância no ecossistema JavaScript.

Aqui definimos a função como uma expressão e a armazenamos na constante **calcularDobro**. Note o uso de **function** sem um nome após ela (função anônima). A função recebe um valor (**numero**), processa o cálculo (* 2) e retorna uma string com o resultado. A chamada é feita usando a variável (**calcularDobro**) como se fosse a própria função. Esta abordagem é muito útil em JavaScript moderno, pois o uso de **const** garante que, uma vez atribuída, a variável **calcularDobro** não possa ser reatribuída para outro valor ou outra função, garantindo maior segurança e previsibilidade do código em ambientes de equipe e projetos complexos.

---

## 4. A estrutura mínima de uma função simples

Para consolidar o entendimento da criação de funções, é crucial entender sua **estrutura mínima** e mais simples. A estrutura essencial de uma função consiste no seu nome, no par de parênteses para os parâmetros e nas chaves que delimitam o bloco de código. Em seu formato mais elementar, uma função pode não receber nenhum dado de entrada (não ter parâmetros) e não retornar nenhum valor de saída (não usar o comando **return**).

Nesse caso, o objetivo principal dela é executar uma **ação**, como imprimir uma mensagem, modificar o conteúdo de um elemento visual ou registrar um evento. Essa simplicidade permite que o código seja dividido em pequenos passos lógicos. Por exemplo, em vez de ter um código que faz cinco coisas diferentes em sequência, você pode ter cinco funções, cada uma fazendo apenas uma dessas coisas.

Essa divisão, conhecida como **princípio da responsabilidade única**, facilita a localização de erros e torna mais fácil a manutenção, pois uma alteração necessária em uma parte do código não afetará as outras funções que trabalham em tarefas diferentes. A função simples é o bloco de construção fundamental de um código modular e limpo.

A função **iniciarSistema** não recebe parâmetros nem retorna valores; ela simplesmente executa uma série de comandos. Ela simula a lógica de inicialização de um aplicativo, imprimindo mensagens para o console. O benefício aqui é o **encapsulamento** de uma rotina. Todo o processo de inicialização, que pode ter dezenas de linhas em um sistema real, está escondido sob um nome simples e claro. Quando outro desenvolvedor lê o código e vê **iniciarSistema()**, ele sabe exatamente o que está acontecendo sem precisar ler cada linha de código dentro da função. Essa abstração é a essência da modularidade: a capacidade de focar no que a função faz, e não necessariamente no como ela faz em um primeiro momento.

---

## 5. Parâmetros: as "entradas" da função

Muitas vezes, uma função precisa de informações externas para realizar sua tarefa. É aí que entram os **parâmetros**. Um parâmetro é um nome de variável listado na definição da função que atua como um **placeholder** para os valores que serão fornecidos quando a função for chamada.

Você pode ter um ou vários parâmetros, separados por vírgulas, dentro dos parênteses da função. O parâmetro funciona como uma "porta de entrada" para os dados. Por exemplo, se você tem uma função que calcula a área de um retângulo, ela precisa de dois dados de entrada: a largura e a altura.

Esses seriam os parâmetros. No momento da chamada, os valores reais que você passa são chamados de **argumentos**. A diferença é sutil, mas importante: **parâmetros** são os nomes na definição (**largura**, **altura**), enquanto **argumentos** são os valores passados na chamada (10, 5).

O uso de parâmetros torna as funções extremamente flexíveis e reutilizáveis, pois elas podem operar com diferentes conjuntos de dados sem que sua lógica interna precise ser reescrita.

A função **exibirMensagemPersonalizada** foi definida com dois parâmetros: **nomeUsuario** e **cidade**. Na primeira chamada da função, os argumentos "Júlia" e "São Paulo" são passados. Internamente, a variável **nomeUsuario** assume o valor "Júlia" e **cidade** assume "São Paulo". Na segunda chamada, os valores são diferentes, mas a lógica da função permanece a mesma. A utilidade central é a generalização da lógica: a função sabe como construir a frase, mas os detalhes (o nome e a cidade) são fornecidos no momento da execução, tornando a função aplicável a qualquer pessoa ou cidade.

---

## 6. Argumentos e a ordem de passagem

A **passagem de argumentos** é a maneira como fornecemos os dados de entrada que os parâmetros da função esperam. Em JavaScript, a **ordem** em que os argumentos são passados é crucial. Eles são mapeados para os parâmetros da função estritamente pela sua **posição** (ordem posicional).

O primeiro argumento fornecido será associado ao primeiro parâmetro definido, o segundo argumento ao segundo parâmetro, e assim por diante. Se você inverter a ordem dos argumentos na chamada, o código pode até rodar, mas o resultado será logicamente incorreto, pois a função tentará usar o valor errado para o propósito errado.

É uma boa prática ter nomes de parâmetros que deixem claro o que eles representam. Além disso, se você chamar uma função e não fornecer um argumento para um parâmetro (ou fornecer menos argumentos do que o número de parâmetros), o parâmetro não fornecido terá o valor especial **undefined** dentro da função.

No desenvolvimento técnico, a precisão na ordem dos argumentos é um fator que elimina bugs sutis e difíceis de rastrear, reforçando a importância de um design de função claro e uma documentação mental ou real sobre a ordem esperada das entradas.

A função **formatarNome** espera que o primeiro parâmetro seja o nome e o segundo seja o sobrenome, com o objetivo de retornar o sobrenome em caixa alta, seguido pelo nome. No Resultado 1, a ordem está correta, e a saída é a esperada. No Resultado 2, a ordem dos argumentos foi invertida na chamada, e o valor que deveria ser o nome ("Santos") é tratado como sobrenome, e vice-versa, resultando em uma formatação incorreta (ANA, Santos). Este exemplo demonstra de forma simples por que a ordem posicional é um fator crítico em funções com múltiplos parâmetros: a lógica interna da função depende da correta correspondência dos dados de entrada.

---

## 7. O comando return: a "saída" da função

O comando **return** é o mecanismo fundamental em JavaScript que permite que uma função **gere um valor de saída** e o envie de volta para o local onde foi chamada. Quando o JavaScript encontra a palavra-chave **return** dentro de uma função, ele faz duas coisas essenciais: primeiro, ele **para** a execução do código da função imediatamente, e segundo, ele **devolve** o valor especificado após o **return** como o resultado da chamada da função.

Se você não especificar um valor após o **return**, ou se a função terminar sem encontrar um comando **return** (o que é comum em funções que apenas executam uma ação, como as que usam **console.log**), ela automaticamente retorna o valor **undefined**.

Uma função é muito mais útil quando **retorna** um valor, pois esse valor pode ser armazenado em uma variável, usado em cálculos subsequentes ou passado como argumento para outra função. Isso permite que você encadeie operações e construa sistemas complexos a partir de funções simples.

A capacidade de retornar valores é o que transforma a função de um simples bloco de comandos em uma **unidade de processamento de dados** reutilizável, essencial para o desenvolvimento de qualquer lógica técnica.

A função **calcularAreaQuadrado** demonstra o poder do **return**. Se o lado for inválido (menor ou igual a zero), a função retorna a string "Valor inválido!" e para sua execução (a linha de cálculo da área nunca é alcançada). Se o valor for válido, ela calcula a área e usa **return area** para enviar o resultado. Observe que o valor retornado é capturado pela variável que recebe a chamada (**area1** e **area2**). Isso transforma a chamada da função (**calcularAreaQuadrado(5)**) em um valor (25), que pode ser usado como qualquer outra variável. Essa capacidade de produzir um resultado é o que torna as funções a espinha dorsal de qualquer processamento de dados em um software.

---

## 8. Função completa: parâmetros, processamento e retorno

A maioria das funções úteis em um projeto técnico combina os **três elementos essenciais**: parâmetros (entrada de dados), processamento (a lógica interna) e retorno (saída de dados). Essa é a estrutura de uma função "caixa preta" ideal: ela recebe dados, realiza uma operação complexa que não é visível do lado de fora e produz um resultado final.

Essa abordagem atende diretamente ao objetivo de **modularizar** o código. Ao criar uma função completa, você isola um pedaço da lógica de negócio do seu sistema. Por exemplo, em um sistema de vendas, você pode ter uma função chamada **aplicarDesconto** que recebe o valor do produto e o percentual de desconto como parâmetros, faz o cálculo internamente e retorna o preço final.

O restante do seu código não precisa saber como o desconto é calculado, apenas que, ao chamar essa função e fornecer os dados de entrada, ele receberá o resultado correto. Essa **separação de responsabilidades** é a chave para a manutenção de grandes projetos, garantindo que a lógica de cálculo fique em um só lugar.

A função **calcularMedia** é um exemplo completo. Ela usa três parâmetros para receber as notas. O processamento interno realiza a soma, o cálculo da média e uma verificação condicional. Por fim, o **return** envia uma string formatada, contendo tanto o valor da média arredondado quanto uma indicação de aprovação/recuperação, como seu valor de saída. Note que as variáveis **soma** e **media** existem apenas dentro da função e não poluem o escopo externo. O código fora da função apenas lida com o resultado final, encapsulando toda a lógica de cálculo e formatação em um bloco reutilizável, que pode ser usado para calcular a média de centenas de alunos sem reescrever a lógica a cada vez.

---

## 9. Escopo global vs. escopo de função (local)

O **escopo** de variável em JavaScript define a região do seu código onde uma variável está acessível ou "visível". Existem dois tipos principais de escopo que devemos dominar. O **Escopo Global** é o escopo de mais alto nível: qualquer variável declarada fora de qualquer função ou bloco (**{}**) é global.

Variáveis globais podem ser acessadas e modificadas por qualquer código em qualquer parte do programa, inclusive dentro de qualquer função. Em contraste, o **Escopo de Função** (ou **local**) é criado toda vez que uma função é executada.

Uma variável declarada dentro de uma função (usando **let**, **const** ou **var**) é uma variável **local** e só pode ser acessada e manipulada dentro dessa função. O código fora da função não tem visibilidade nem acesso a essas variáveis locais.

O entendimento e a aplicação correta do escopo são vitais para evitar conflitos de nomes de variáveis e para garantir que as funções sejam independentes, evitando que a lógica de uma função interfira acidentalmente no estado de outra ou no estado global do sistema.

Neste exemplo, **nomeSistema** é uma variável global e pode ser acessada de dentro da função **exibirStatus**. Já a variável **versao** é declarada localmente dentro da função. Quando a função é executada, ambas são exibidas corretamente. No entanto, se tentarmos acessar **versao** fora da função (na linha comentada), o JavaScript irá gerar um erro de referência, pois **versao** só existe no escopo local da função **exibirStatus**. A principal utilidade do escopo local é o **isolamento**: ele garante que as variáveis temporárias e de trabalho de uma função não se misturem com as variáveis de outras partes do código, criando ambientes de execução limpos e previsíveis.

---

## 10. Acesso e proteção de variáveis locais

O principal benefício do escopo de função é a **proteção** e o **isolamento** dos dados. Quando uma variável é declarada localmente dentro de uma função, ela é **privada** para essa função.

Isso significa que mesmo que outra função ou parte do código tenha uma variável com o mesmo nome, não haverá conflito, pois elas existem em escopos separados. Isso é chamado de **encapsulamento de dados** em um nível básico.

O acesso a essas variáveis locais só pode ocorrer por meio da própria função. Essa restrição é uma característica de design intencional que permite que as funções operem como unidades independentes, o que é fundamental para a modularização.

Se uma função usa variáveis temporárias, como contadores em loops ou resultados intermediários de cálculos, o escopo local garante que esses nomes de variáveis não afetem outras partes do sistema.

Essa proteção é essencial em projetos grandes, em que muitos desenvolvedores criam muitas funções; se todas as variáveis fossem globais, o risco de sobrescrever acidentalmente um valor importante seria altíssimo, gerando bugs complexos e inesperados.

A variável **taxaServico** é local e, portanto, privada da função **registrarPedido**. Ela é criada e destruída a cada chamada da função e não pode ser acessada de fora. A única exceção de acesso no escopo local é a leitura e modificação de variáveis globais (**totalPedidos**), o que é possível (como visto na linha que incrementa **totalPedidos**), mas geralmente desencorajado em prol de um código mais limpo e previsível. A utilidade desse isolamento de **taxaServico** é garantir que o cálculo intermediário de uma função não interfira em qualquer outra variável chamada **taxaServico** que possa existir no escopo global ou em outra função, protegendo a integridade dos dados e o comportamento esperado de cada módulo do código.

---

## 11. O conceito de hoisting em funções

O **Hoisting** (içamento ou elevação) é um comportamento particular do JavaScript em que as declarações de variáveis e funções são movidas "virtualmente" para o topo do seu escopo antes que o código comece a ser executado. É importante notar a distinção entre a **função declarada** (Function Declaration) e a **função expressa** (Function Expression) em relação ao hoisting.

As **Declarações de Função** são completamente "içadas" para o topo do seu escopo, o que significa que você pode chamar a função antes mesmo de ela aparecer no código fonte. O interpretador JavaScript sabe que a função existe e onde ela está definida antes de chegar à linha de sua definição.

Por outro lado, as **Expressões de Função** (que geralmente são atribuídas a uma variável com **const** ou **let**) têm apenas a declaração da variável içada, mas não a função em si.

A variável é içada e inicializada com **undefined** (para **var**) ou fica em um estado inacessível (para **let**/**const**) até a linha real de atribuição, o que significa que você não pode chamá-la antes de sua definição. Compreender o hoisting evita bugs de "função não definida" e ajuda a escolher a sintaxe de função mais apropriada para cada situação.

No exemplo, a função **resultadoSoma** é uma Declaração de Função e pode ser chamada antes de sua definição no código (**resultadoSoma()** é chamado antes de **function resultadoSoma() {}**). Isso é o hoisting em ação, em que o código funciona porque o JavaScript já "sabe" sobre a existência da função. Já a seção comentada com **funcaoExpressa** demonstra que, se você tentar chamar uma Expressão de Função antes de sua definição, o programa falhará (assumindo que a variável foi declarada com **let** ou **const**). A utilidade do hoisting da Declaração de Função é permitir uma estrutura de código em que as funções principais podem ser listadas no início do arquivo, facilitando a leitura da estrutura lógica, enquanto os detalhes de sua implementação estão mais abaixo, sem causar erros de execução.

---

## 12. Evitando efeitos colaterais com variáveis globais

Embora as funções possam acessar e modificar variáveis globais (conforme visto no Slide 9), essa prática deve ser **evitada** na maioria dos casos, pois introduz o que chamamos de **efeitos colaterais**. Um efeito colateral ocorre quando uma função não apenas retorna um valor, mas também **modifica** algo fora de seu próprio escopo (o ambiente global, o DOM, um arquivo, etc.).

Quando uma função modifica uma variável global, ela se torna dependente do estado anterior dessa variável, e a alteração que ela faz pode afetar de forma imprevisível outras funções que também usam ou dependem daquela variável global. Isso torna o código muito mais difícil de testar e depurar, pois o comportamento de uma função não é mais previsível apenas com base em seus parâmetros.

A regra de ouro para um código limpo e modular é: uma função ideal deve se comunicar com o mundo exterior **apenas** por meio de seus **parâmetros de entrada** e de seu **valor de retorno**.

Se você precisa mudar um valor global, é melhor que a função **retorne** o novo valor e o código que a chamou decida o que fazer com ele (como atribuí-lo de volta à variável global), mantendo a função mais "pura".

A função **incrementarGlobal** é um mau exemplo de design porque ela modifica diretamente a variável **contadorGlobal**, um efeito colateral que torna o rastreamento do estado do sistema complicado. A função **calcularComRetorno** exemplifica a boa prática: ela recebe um valor (**valor**), realiza o cálculo e simplesmente retorna o novo valor. A decisão de atualizar a variável global (**contadorGlobal = calcularComRetorno(contadorGlobal)**) é feita **fora** da função, no escopo de chamada. A utilidade desse design é a **previsibilidade**: a função **calcularComRetorno** sempre fará a mesma coisa (somar 1), independentemente do estado global. O controle sobre a variável global permanece no código principal, onde é mais fácil de ser visualizado e gerenciado.

---

## 13. Reutilização de código: a força da função

A **reutilização de código** é, de longe, um dos maiores benefícios de se usar funções e é o que realmente define a produtividade e a qualidade em projetos de software. A função atua como um **template de lógica**, um bloco de construção que pode ser aplicado em múltiplos contextos sem que você precise reescrever o código interno.

Se você tem dez lugares no seu aplicativo que precisam, por exemplo, formatar um número como moeda, você não deve escrever o código de formatação dez vezes. Em vez disso, você cria uma única função **formatarMoeda()** e a chama em todos os dez lugares.

Além da óbvia economia de tempo e linhas de código, o benefício mais crucial é a **manutenção centralizada**. Se houver uma mudança na regra de formatação (por exemplo, a necessidade de mudar de Real para Dólar), você só precisa alterar uma única linha de código dentro da função **formatarMoeda()**.

Se o código estivesse repetido em dez lugares, você teria que corrigir todos os dez, aumentando drasticamente a chance de esquecer um ou introduzir novos erros, o que é um pesadelo em produção. A reutilização é a base para o desenvolvimento eficiente e menos propenso a falhas.

A primeira parte do exemplo mostra o código de cálculo de imposto e formatação repetido para o Item A e o Item B, o que é ineficiente. A segunda parte resolve isso com a função **calcularImposto**. Agora, a lógica de cálculo (multiplicar por 1,05) está centralizada. A utilidade reside em: **(1)** Economia: a lógica está escrita apenas uma vez. **(2)** Manutenção: se a taxa mudar de 5% para 6%, basta alterar **let taxa = 0.06;** dentro da função, e os preços de A e B serão corrigidos automaticamente nas próximas chamadas. A chamada à função se torna uma abstração que simplifica a leitura do código principal, focando no que está sendo feito (**calcularImposto**) em vez de como (**valorBase * (1 + 0.05)**).

---

## 14. Encapsulamento da lógica: escondendo os detalhes

O **encapsulamento** é o conceito de agrupar dados e o comportamento que opera sobre esses dados em uma única unidade, que é a função. No contexto técnico, ele significa **esconder os detalhes de implementação** do mundo exterior, permitindo que a função seja vista como uma "caixa preta" confiável.

O usuário da função (que pode ser outro desenvolvedor ou outra parte do seu próprio código) só precisa saber **o que** a função faz (seu propósito), **o que** ela recebe (parâmetros) e **o que** ela retorna (saída).

Ele não precisa saber quais variáveis temporárias são usadas internamente, quais algoritmos complexos estão sendo executados ou quais etapas intermediárias estão envolvidas. Isso é crucial para a **manutenibilidade** do software.

Se a função precisar ser otimizada ou reescrita internamente, o código que a chama não precisa ser alterado, desde que a **interface** (parâmetros e retorno) permaneça a mesma. O encapsulamento minimiza a dependência entre os módulos do código, tornando o sistema mais robusto e mais fácil de evoluir sem causar efeitos em cascata.

A função **gerarIdUnico** encapsula uma lógica complexa de criação de um identificador. O código externo (as linhas **let idProduto...** e **let idServico...**) apenas se importa com o resultado final, o ID gerado. As variáveis internas como **timestamp**, **parteNome** e **numAleatorio** são detalhes de implementação que estão totalmente encapsulados. O benefício é que, se decidirmos mudar a lógica de geração do ID (por exemplo, usar um número aleatório de 1000 em vez de 100), as linhas externas de chamada da função não precisam ser tocadas. O encapsulamento permite que a função evolua e melhore internamente sem quebrar o código que depende dela, garantindo a estabilidade e a facilidade de manutenção de todo o sistema.

---

## 15. Introdução a funções puras: previsibilidade

No caminho para o código de alta qualidade, um conceito importante é o de **Funções Puras**.

Uma função é considerada **pura** se atender a duas condições rigorosas:

**1.** Dados os mesmos argumentos, ela sempre retorna o mesmo resultado; e  
**2.** Ela não produz efeitos colaterais.

A primeira condição garante a **previsibilidade**: se você chamar a função **somar(2, 3)** mil vezes, ela sempre retornará 5, sem surpresas. Isso contrasta com funções que usam o horário atual, um valor aleatório ou dados de entrada do usuário, que podem mudar a cada execução.

A segunda condição é a de **não ter efeitos colaterais**, o que significa que ela não pode modificar o estado global do programa, como mudar variáveis globais, escrever em arquivos ou fazer requisições de rede.

Funções puras são os blocos de construção ideais para a programação funcional e sistemas complexos. Elas são inerentemente mais simples de entender porque toda a informação necessária para o seu trabalho vem de seus parâmetros, e toda a sua saída é o seu valor de retorno.

A função **multiplicar** é pura. Ela só depende de **x** e **y** e sempre retornará o produto. Se você chamar **multiplicar(5, 3)** em qualquer momento, o resultado será 15, sem exceção. A função **sacar**, no entanto, é **impura**. Ela não apenas retorna o saldo, mas também modifica a variável global **saldoConta**. O resultado da chamada (**sacar(20)**) depende do valor de **saldoConta** antes da chamada, e a chamada muda o valor de **saldoConta** para futuras chamadas, tornando-a imprevisível para testes e manutenções. A utilidade das funções puras, como **multiplicar**, está na **confiança**: você sabe exatamente o que esperar dela e ela não vai bagunçar outras partes do seu código.

---

## 16. Características de uma função pura e seus benefícios

As funções puras são a forma mais estável e confiável de lógica que você pode escrever, e a importância de introduzi-las está diretamente ligada à construção de software de nível profissional. Elas oferecem dois grandes benefícios: **facilidade de teste** e **facilidade de composição**.

Primeiro, a **facilidade de teste** é inigualável. Para testar uma função pura, basta fornecer a ela os argumentos de entrada e verificar se o valor de saída é o esperado. Não há necessidade de configurar um ambiente complexo (como uma base de dados ou uma conexão de rede) ou verificar se alguma variável global foi alterada. Isso torna os testes de unidade rápidos, isolados e extremamente confiáveis.

Segundo, a **composição** é simplificada. Você pode combinar várias funções puras (a saída de uma se torna a entrada da próxima) com total confiança de que a ordem da execução é a única coisa que importa, e não o momento ou o estado global.

No desenvolvimento técnico, a adoção de funções puras é vista como uma técnica avançada que leva à redução de bugs, maior clareza e um código que pode ser executado em ambientes paralelos sem risco de conflito de dados, pois elas não compartilham nem modificam o estado.

As funções **elevarAoQuadrado** e **somarCinco** são ambas puras. Elas não dependem de nada externo e não modificam nada externo. O exemplo demonstra a **composição**: a saída de **elevarAoQuadrado** (que é 16) é usada como entrada para **somarCinco**. O benefício principal está na garantia de que, não importa onde ou quando você use **elevarAoQuadrado(4)**, o resultado será sempre 16, e esse 16 entrará em **somarCinco** para resultar em 21. Se uma das funções fosse impura (por exemplo, lendo uma variável global que mudava a cada milissegundo), a composição se tornaria imprevisível. A previsibilidade das funções puras permite construir sistemas complexos de maneira segura, combinando pequenas lógicas que são fáceis de testar individualmente, mas que geram um resultado robusto e confiável quando conectadas.
