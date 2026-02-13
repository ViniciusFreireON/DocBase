# Slides – Introdução à automação com repetição (Conteúdo Corrigido)

## 1. Introdução à automação com repetição

Em programação, muitas vezes precisamos executar o mesmo bloco de código várias vezes. Imagine que você precisa exibir uma mensagem de "Bem-vindo" 100 vezes. Fazer isso escrevendo **console.log("Bem-vindo");** cem vezes seria ineficiente e cansativo. É aí que entram os **laços de repetição** (ou **loops**).

Eles são estruturas de controle que permitem automatizar tarefas, executando um conjunto de instruções repetidamente até que uma condição específica seja satisfeita. O grande objetivo é reduzir a quantidade de código e tornar os programas mais dinâmicos e flexíveis.

Os laços são a espinha dorsal de qualquer programa que lida com grandes volumes de dados ou interações contínuas, como processar todos os itens de uma lista ou esperar por uma entrada do usuário.

Nesta aula, focaremos nos laços condicionais, o **while** e o **do while**, que dependem de uma condição verdadeira para continuar ou parar a execução, sendo essenciais para simular sistemas de perguntas e respostas.

Este código simples utiliza o laço **while**. A variável **contador** começa em zero. O laço executa enquanto a condição **contador < 3** for verdadeira. Dentro do laço, a mensagem é exibida e o contador é aumentado em 1. O código será repetido 3 vezes (para contador igual a 0, 1 e 2), e então o laço é encerrado.

---

## 2. Estrutura básica do laço while

O laço **while** (enquanto) é a estrutura de repetição condicional mais fundamental. Ele funciona da seguinte maneira: primeiro, ele avalia uma condição booleana (que resulta em **true** ou **false**).

Se a condição for verdadeira (**true**), o bloco de código dentro do laço é executado. Após a execução do bloco, a condição é avaliada novamente. Esse ciclo continua até que a condição se torne falsa (**false**).

É crucial entender que, se a condição for falsa desde o início, o bloco de código nunca será executado, nem mesmo uma vez. Isso faz do **while** um laço de **pré-teste** ou **teste de entrada**.

Para garantir que o laço termine, é absolutamente necessário que alguma instrução dentro do bloco de repetição altere a condição de controle, caminhando em direção ao ponto em que ela se tornará falsa. Caso contrário, teremos um problema grave conhecido como **loop infinito**.

O código simula um veículo acelerando. O laço **while** continua enquanto a **velocidade** for menor que o limite (60). Em cada repetição, a velocidade é aumentada em 5. O laço irá rodar e parar quando velocidade atingir 60, demonstrando como a variável de controle (**velocidade**) é modificada para forçar a saída do laço.

---

## 3. Estrutura básica do laço do while

Ao contrário do **while**, o laço **do while** (faça enquanto) é uma estrutura de repetição de **pós-teste** ou **teste de saída**. A diferença fundamental é que o bloco de código dentro do **do** é executado **pelo menos uma vez**, antes que a condição seja sequer avaliada pela primeira vez.

Somente após a primeira execução, o programa verifica a condição no final (**while**). Se a condição for verdadeira, o laço continua a executar. Se for falsa, o laço é encerrado.

Essa característica o torna ideal para situações em que a execução inicial do código é obrigatória, como em menus de interação com o usuário, onde é preciso exibir as opções pelo menos uma vez para que o usuário possa escolher algo.

Mesmo que a condição seja falsa logo de início, o **do while** garante que o bloco de comandos seja processado uma única vez, diferenciando-se claramente do **while** tradicional.

Mesmo que o chute fosse 5 desde o início, o bloco **do** seria executado uma vez, pois a condição (**chute !== numeroSecreto**) só é verificada após a primeira execução. No exemplo, ele roda uma vez, o chute é "corrigido" para 5, e na verificação do **while** a condição se torna falsa, encerrando o laço.

---

## 4. Comparação entre while e do while

A escolha entre o **while** e o **do while** depende da necessidade de execução inicial do bloco de código. Utilize o **while** quando você precisa que o bloco de código seja executado somente se a condição for verdadeira.

Ele é ideal para iterações em que o número de repetições é desconhecido e o teste inicial é crucial (ex.: processar dados de um arquivo enquanto houver dados disponíveis). Por outro lado, use o **do while** quando você precisa garantir que o bloco seja executado pelo menos uma vez, independentemente da condição inicial.

Ele é perfeito para menus interativos, em que você precisa exibir as opções e capturar a primeira entrada do usuário antes de decidir se deve repetir (ex.: perguntar se o usuário deseja realizar outra operação).

A principal diferença reside no local do teste: no **while**, o teste é feito no início (pré-teste); no **do while**, o teste é feito no final (pós-teste), após a primeira execução do corpo do laço.

A variável **deveExecutar** é **false**. O primeiro bloco (**while**) tem sua condição avaliada no início e, sendo falsa, o bloco não é executado. O segundo bloco (**do while**) executa o corpo uma vez, imprime a mensagem, e só depois avalia a condição, que é falsa, encerrando o laço.

---

## 5. Condições para entrada e saída do laço

A chave para o funcionamento de qualquer laço **while** ou **do while** reside na **condição de controle**, que deve ser uma expressão que resulta em um valor booleano: **true** (verdadeiro) ou **false** (falso).

A condição de **entrada** (ou permanência) no laço é quando essa expressão é **true**. O laço continua a repetir enquanto a condição permanecer verdadeira. A condição de **saída** (ou término) é quando a expressão se torna **false**.

É essencial que o código dentro do laço inclua uma instrução que, eventualmente, faça a condição mudar de **true** para **false**. Se essa alteração nunca ocorrer, o laço nunca sairá, resultando no temido **loop infinito**.

As condições geralmente envolvem a comparação de uma variável de controle com um valor limite, usando operadores de comparação como **<**, **>**, **===** ou **!==**. Manter a lógica da condição simples e clara é vital para evitar erros de lógica no fluxo de repetição.

A condição de permanência no laço é **saldo >= saque**. O laço executa e realiza saques de 20 enquanto o saldo for suficiente. A cada repetição, o **saldo** (variável de controle) diminui. Quando o saldo se torna menor que 20, a condição fica **false** (condição de saída) e o laço é encerrado automaticamente.

---

## 6. Cuidados com loops infinitos

Um **loop infinito** é uma condição de erro grave em que um laço de repetição nunca termina porque sua condição de controle nunca se torna falsa.

Isso acontece geralmente por dois motivos principais: (1) a condição de saída é impossível de ser atingida (ex.: pedir para um contador que só aumenta ser menor que um número que ele já ultrapassou), ou (2) a variável de controle (aquela usada na condição) não é alterada dentro do corpo do laço, fazendo com que a condição seja reavaliada como **true** indefinidamente.

Quando um programa entra em um loop infinito, ele consome 100% da capacidade do processador, travando a aplicação e, em alguns casos, até o sistema operacional.

Para evitar isso, sempre revise: (1) sua condição é logicamente possível de ser falsa? (2) Você está alterando a variável de controle dentro do laço na direção da condição de saída? Um simples esquecimento de incrementar ou decrementar a variável já pode levar a esse problema.

O primeiro código comentado ilustra o erro: a variável **i** nunca é alterada, então a condição **i <= 5** permanece sempre **true**, causando um loop infinito. A versão segura demonstra como o incremento (**safeI++**) garante que, após três repetições, a variável **safeI** se torne 4, a condição **safeI <= 3** se torna falsa, e o laço termina.

---

## 7. Controle com variáveis auxiliares (flags)

Além de contadores e limites, podemos controlar a execução de um laço utilizando **variáveis auxiliares**, frequentemente chamadas de **flags** (bandeiras). Uma flag é uma variável booleana (**true** ou **false**) ou uma string/número que indica um estado específico do programa e é usada diretamente na condição de controle do laço.

Por exemplo, podemos usar uma flag chamada **continuarExecucao** inicializada como **true**. O laço roda **while (continuarExecucao)**. Em algum momento dentro do laço, uma ação do usuário ou uma condição interna do programa pode mudar o valor dessa flag para **false**, forçando a saída do laço.

Esse método é muito útil para simular sistemas de perguntas e respostas ou menus, em que a decisão de parar o loop é tomada com base em uma resposta ou evento, e não apenas em um contador numérico. A flag torna a lógica de saída mais clara e intencional.

O laço **do while** depende da flag booleana **desejaContinuar**. O laço executa e, em cada rodada, verifica se a rodada é maior ou igual a 3. Quando essa condição é satisfeita, a flag é alterada para **false**, e na próxima avaliação da condição do **while**, o laço é encerrado, controlando o fluxo por estado e não apenas por limite.

---

## 8. Simulação de sistemas de repetição com perguntas

Os laços de repetição são amplamente utilizados para criar sistemas interativos que dependem da entrada do usuário para continuar ou parar. Um cenário comum é o de um menu em que o programa repete a pergunta ao usuário até que ele escolha a opção "Sair".

Para simular isso em um ambiente de console, podemos usar uma variável de controle (que age como uma flag) para armazenar a última resposta do usuário. O laço **while** (ou **do while**) rodará enquanto a resposta for diferente da opção de saída desejada.

Por exemplo, se a opção de saída for **'N'**, o laço continua **while (resposta !== 'N')**. Essa é uma aplicação prática direta do controle por flags e demonstra como a repetição condicional é essencial para criar interfaces de linha de comando que simulam um diálogo contínuo.

A variável **comando** funciona como a condição de controle do laço. O laço continua enquanto o comando for diferente de "SAIR". O bloco interno simula uma operação e, condicionalmente (usando a função **Math.random** para simular uma chance aleatória), altera o valor de **comando** para "SAIR", quebrando a condição do **while** e encerrando o sistema de repetição.

---

## 9. Construindo um contador simples com while

O **contador progressivo** é a aplicação mais básica e didática do laço **while**. Ele ilustra perfeitamente os três elementos cruciais de um laço de repetição baseado em contagem:

1. A **inicialização** da variável de controle (geralmente em 0 ou 1);  
2. A **condição de término**, que compara a variável com um limite; e  
3. A **atualização** da variável de controle (incremento ou decremento) dentro do corpo do laço.

Neste caso, o contador aumenta progressivamente em cada ciclo. A lógica é simples: o laço continua enquanto o contador não atingir o número máximo desejado.

Essa estrutura é a base para a iteração sobre coleções de dados (como arrays) e a execução de tarefas um número fixo de vezes. Mesmo que o laço **for** seja mais conciso para contadores, o **while** demonstra a lógica de controle de forma mais explícita.

A variável **item** começa em 1. O laço executa enquanto **item** for menor ou igual a 5. Em cada passo, o número do item é exibido e o **item** é incrementado em 1 (**item++**). Isso garante que o laço seja executado exatamente 5 vezes, demonstrando um controle de repetição por contagem.

---

## 10. O uso do do while para validação de entrada

Uma das melhores aplicações do laço **do while** é na **validação de entrada** de dados. Como o **do while** garante que o bloco de código seja executado pelo menos uma vez, ele é perfeito para solicitar uma entrada ao usuário e depois verificar se essa entrada é válida.

Se o dado estiver incorreto (por exemplo, um número negativo onde um positivo é esperado), a condição do **while** no final será **true**, e o laço será repetido, solicitando a entrada novamente. O processo continua (repete a pergunta e o pedido) enquanto a resposta for inválida.

Quando o usuário finalmente fornece um dado que satisfaz os critérios de validação, a condição se torna **false**, e o laço é encerrado.

Essa técnica é fundamental para criar sistemas robustos que não aceitam dados incorretos ou fora do formato esperado, melhorando a experiência do usuário e a integridade do sistema.

A senha inicial é "invalida". O bloco **do** é executado, a senha é "digitada" (simulada como "12345"). A condição do **while** verifica se a senha é diferente da **senhaCorreta**. Como agora são iguais, a condição é **false**, e o laço termina após apenas uma execução (ou repetiria se a simulação não tivesse "digitado" a correta).

---

## 11. Decrescimento e contagem regressiva

Os laços condicionais não servem apenas para contar de 0 até um número maior. Eles são igualmente úteis para realizar **contagens regressivas** ou para decrementar um valor até que ele atinja um limite inferior (como zero).

A lógica é invertida: a variável de controle deve ser inicializada com um valor alto (o limite superior), e a condição de permanência no laço deve ser "maior que o limite inferior". Dentro do laço, em vez de incrementar, usamos o **decremento** (ex.: **i--** ou **i = i - 1**) para reduzir o valor da variável a cada repetição.

O laço continua a executar enquanto a variável for maior que o limite de parada. Essa aplicação é comum em sistemas que gerenciam estoque (onde o processamento ocorre enquanto o estoque for maior que zero) ou em sistemas de cronometragem para lançamento de foguetes.

A variável **foguete** começa em 5. O laço executa enquanto **foguete** for maior que 0. Em cada repetição, a mensagem de contagem é exibida e **foguete** é decrementado em 1. O laço roda 5 vezes e, quando **foguete** se torna 0, a condição **foguete > 0** é avaliada como falsa e o laço é encerrado, finalizando a contagem.

---

## 12. Acumuladores em laços de repetição

Além de contadores, os laços são essenciais para o uso de **acumuladores**. Um acumulador é uma variável que tem seu valor modificado (geralmente aumentado) pela soma de outros valores em cada iteração do laço.

É uma técnica fundamental para calcular somas totais, médias ou para combinar strings (concatenar textos). A variável acumuladora deve ser inicializada **fora** do laço, normalmente com o valor zero, para garantir que o somatório comece do ponto correto.

Dentro do laço, a instrução chave é a atribuição de adição (ex.: **total = total + valor** ou **total += valor**), em que o novo valor é somado ao valor anterior do acumulador.

O **while** é muito usado para calcular a soma de uma série de números até que um critério seja atingido, como somar números até que o total ultrapasse 1000.

O acumulador **soma** começa em 0. O laço roda de 1 a 4. Em cada passo, o valor de **numero** é adicionado à **soma**. Ao final, o laço acumula 1+2+3+4 = 10. A variável **soma** armazena o resultado cumulativo de todas as repetições do laço.

---

## 13. O comando break para saída imediata

Embora a forma ideal de sair de um laço **while** ou **do while** seja por meio da sua condição de controle tornar-se falsa, existe uma maneira de forçar a saída a qualquer momento: o comando **break**.

O **break** é uma instrução que interrompe **imediatamente** a execução do laço mais interno, transferindo o controle do programa para a primeira linha de código que segue o bloco do laço.

Ele é útil em situações excepcionais, como encontrar um valor específico em uma busca (não há necessidade de continuar procurando) ou detectar uma condição de erro crítica. O uso excessivo de **break** pode dificultar a leitura do código, pois a condição de saída não estará mais apenas no cabeçalho do **while**. Por isso, deve ser usado com moderação e apenas quando a condição de interrupção for inesperada ou mais complexa do que a condição principal do laço.

O laço está configurado para ir até 10. No entanto, quando **numeroBusca** atinge 7, o bloco **if** é ativado e o comando **break** é executado. Isso força a saída imediata do laço, e o programa continua a execução a partir da linha após o bloco **while**, mesmo que a condição de controle (**numeroBusca <= 10**) ainda fosse verdadeira.

---

## 14. O comando continue para pular iterações

O comando **continue** oferece uma forma de otimizar a execução do laço sem interrompê-lo totalmente. Quando o **continue** é encontrado dentro de um laço **while** ou **do while**, ele interrompe a execução **apenas da iteração atual** e salta imediatamente para a próxima avaliação da condição do laço.

O código que está abaixo do **continue** no bloco da iteração atual é simplesmente ignorado. Ele é extremamente útil quando você precisa processar uma lista de itens, mas deseja pular aqueles que não atendem a um certo requisito sem parar o laço inteiro.

Por exemplo, processar apenas os números pares em uma sequência: se o número for ímpar, um **continue** é usado para pular para o próximo número, garantindo que o restante do código da iteração não seja executado para números ímpares.

O laço conta de 1 a 5. Quando **i** é igual a 3, o **continue** é executado. A mensagem "Número processado: 3" é ignorada, e o laço salta diretamente para a reavaliação da condição, incrementando **i** para 4. Isso permite que a iteração do número 3 seja omitida do processamento normal sem interromper o laço.

---

## 15. Aninhamento de laços (while dentro de while)

É possível colocar um laço de repetição dentro de outro laço. Essa técnica é chamada de **aninhamento de laços**. O laço de fora é chamado de **laço externo**, e o laço de dentro é o **laço interno**.

Para cada execução do laço externo, o laço interno será executado completamente (todas as suas repetições). Por exemplo, se o laço externo rodar 3 vezes e o laço interno rodar 4 vezes, o bloco de código mais interno será executado um total de 3 × 4 = 12 vezes.

O aninhamento é fundamental para trabalhar com estruturas de dados bidimensionais, como tabelas e matrizes (linhas e colunas), ou para criar coordenadas em jogos e gráficos.

A principal complicação é garantir que ambos os laços (interno e externo) tenham suas próprias variáveis de controle e condições de saída bem definidas, para evitar loops infinitos complexos.

O laço externo (**linha**) roda 2 vezes. Para cada vez que o laço externo roda, o laço interno (**coluna**) roda 3 vezes (de 1 a 3). O resultado são 6 execuções no total, mostrando a combinação de todas as linhas com todas as colunas.

---

## 16. Variáveis locais e escopo em laços

Quando trabalhamos com laços de repetição, é crucial entender o conceito de **escopo de variáveis**. O escopo define onde uma variável pode ser acessada dentro do seu código.

Em JavaScript moderno (e seguindo boas práticas), as variáveis declaradas com **let** ou **const** dentro do bloco de código de um laço (**{ }**) têm **escopo de bloco**, ou seja, elas só existem e só podem ser usadas dentro daquele laço.

Se você tentar acessar uma variável declarada com **let** dentro do **while** a partir do código que vem depois, ocorrerá um erro.

As variáveis de controle (como contadores ou flags) que determinam a condição do laço devem ser declaradas **antes** do laço (no escopo externo), para que o **while** ou **do while** possa acessá-las na condição e para que o código após o laço possa verificar o valor final da variável.

A variável **foraDoLaco** é declarada antes e está acessível dentro e fora do **while**. A variável **dentroDoLaco** é declarada com **let** dentro do **while** e só existe ali. O código final acessa **foraDoLaco** (que é 8), mas se tentasse acessar **dentroDoLaco** após o laço, o programa falharia, pois ela está fora do seu escopo de vida.
