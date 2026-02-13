# Slides – O laço for (Conteúdo Corrigido)

## 1. O que é um laço de repetição?

Um **laço de repetição** (ou **loop**) é uma estrutura fundamental na programação que permite executar um bloco de código várias vezes. Imagine que você precisa escrever a mesma mensagem dez vezes; sem um laço, você teria que copiar e colar o comando dez vezes, o que é ineficiente e propenso a erros.

O laço **for** surge como uma solução elegante para esse problema, permitindo que você defina uma instrução para ser repetida com base em uma condição. O nosso objetivo principal aqui é entender como o **for** nos dá um controle preciso sobre o número de repetições.

Esse controle é feito por meio de um **contador**, que será inicializado, testado a cada volta e modificado até que a condição de parada seja satisfeita. Essa é a essência da lógica de repetição controlada, que evita que o código fique preso em um **loop infinito**, um erro comum para iniciantes.

É como dar 10 passos exatos: você começa do zero, verifica se já deu 10 passos, se não, dá mais um, e repete até atingir o objetivo.

Este código demonstra o uso mais básico do **for**. Ele executa a instrução **console.log("Olá!")** três vezes. A variável **i** é o contador. Ela começa em 0, continua enquanto **i** for menor que 3, e é aumentada em 1 a cada repetição (**i++**). Quando **i** chega a 3, a condição é falsa e o laço para, exibindo "Fim do loop.".

---

## 2. Sintaxe e estrutura do for

A sintaxe do laço **for** é composta por **três partes essenciais**, separadas por ponto e vírgula dentro dos parênteses, e elas definem exatamente como a repetição será controlada.

A primeira parte é a **Inicialização (1)**, em que declaramos e damos um valor inicial à variável de controle (o contador), geralmente usando **let i = 0;** .

A segunda parte é a **Condição (2)**, que é testada antes de cada repetição; o código dentro do laço só executa se essa condição for verdadeira (ex.: **i < 10;**).

A terceira e última parte é a **Expressão Final (3)**, que é executada após cada repetição e serve para atualizar o contador, normalmente incrementando-o (**i++**).

A ordem de execução é crucial: a Inicialização ocorre apenas uma vez no começo; depois, em cada ciclo, a Condição é verificada, o Bloco de Código é executado, e a Expressão Final atualiza o contador. Dominar essas três partes é a chave para qualquer controle de repetição.

Aqui, usamos a variável **contador** para ser mais descritivo. **1. Inicialização:** **let contador = 1** define o ponto de partida. **2. Condição:** **contador <= 5** garante que o loop execute exatamente 5 vezes (para 1, 2, 3, 4 e 5). **3. Expressão Final:** **contador = contador + 1** aumenta o contador em 1 a cada volta, controlando o avanço.

---

## 3. Controle por número de repetições

O controle de repetições é o principal uso do laço **for**. A grande vantagem é que ele nos permite saber antecipadamente quantas vezes um bloco de código será executado, sem depender de uma condição interna complexa.

Para controlar o número de repetições, ajustamos a Condição e a Inicialização. Por exemplo, se você quer repetir algo **N** vezes, você pode começar o contador em 0 e definir a condição como **contador < N**, ou começar em 1 e definir a condição como **contador <= N**.

O importante é que a diferença entre o valor final e o inicial (incluindo o passo) resulte no número de vezes desejado. Isso é essencial para tarefas como processar uma lista de itens com tamanho conhecido, criar elementos em uma interface ou simular eventos em sequência, garantindo que o código não execute nem a mais nem a menos do que o necessário.

Este código mostra como usar uma variável externa (**vezes = 7**) para controlar o número exato de repetições. O contador **volta** começa em 0 e o laço roda enquanto **volta** for menor que 7. As repetições ocorrem para **volta** igual a 0, 1, 2, 3, 4, 5 e 6, totalizando 7 execuções. Dentro do **console.log**, somamos 1 a **volta** apenas para exibir a contagem de forma mais amigável ao usuário (de 1 a 7).

---

## 4. A expressão final (o passo)

A **Expressão Final**, a terceira parte da sintaxe do **for**, é frequentemente chamada de "o passo" porque ela define como o contador avança ou retrocede a cada ciclo. O uso mais comum é o **incremento** (aumento de 1) usando o operador **i++**, que é uma forma curta e eficiente de escrever **i = i + 1**.

Contudo, podemos definir qualquer tipo de passo: aumentar de 2 em 2 (**i = i + 2**), de 5 em 5 (**i += 5**), ou até mesmo diminuir o contador (**i--** ou **i -= 1**). O passo é o que garante que, em algum momento, a Condição se torne falsa, encerrando o laço.

Se o passo estiver ausente ou incorreto, o laço pode se tornar um loop infinito, pois a condição de parada nunca será alcançada, o que irá travar a execução do programa. Por isso, a definição correta do passo é tão importante quanto a condição de parada.

Neste exemplo, a variável **numero** começa em 0 e o laço continua até que **numero** seja maior que 15. A chave está na expressão final: **numero += 3**. Isso faz com que o contador avance de 3 em 3 a cada volta. O output (saída) será 0, 3, 6, 9, 12 e 15, demonstrando como o passo pode ser ajustado para pular valores.

---

## 5. Contagens crescentes simples

As **contagens crescentes** são o padrão do laço **for**. Elas são usadas quando você precisa processar algo em uma ordem sequencial, do menor para o maior valor.

Para realizar uma contagem crescente, o princípio é simples: a Inicialização deve ser um valor menor que a Condição de Parada, e a Expressão Final deve ser um incremento (geralmente **i++**). Por exemplo, para contar de 1 até 10, você inicializa com **i = 1**, a condição é **i <= 10**, e o passo é **i++**.

Esse método é a base para a maioria das operações com laços, como percorrer arrays (listas de dados), gerar sequências numéricas ou simplesmente repetir uma ação um número fixo de vezes, garantindo que cada repetição seja feita na ordem correta, aumentando o contador.

Neste código, a variável **num** começa em 1 e aumenta de 1 em 1 (**num++**) a cada ciclo. O laço roda enquanto **num** for menor ou igual a 4. Ele executa para **num** igual a 1, 2, 3 e 4. Quando **num** se torna 5, a condição (5 <= 4) é falsa e o laço se encerra, mostrando a progressão em ordem crescente.

---

## 6. Contagens decrescentes

A **contagem decrescente** é o oposto da crescente e é utilizada quando precisamos processar algo de trás para frente, como uma contagem regressiva para o lançamento de um foguete ou processar dados na ordem inversa.

Para fazer uma contagem decrescente, precisamos inverter a lógica das três partes do **for**. A Inicialização deve ser um valor maior (o ponto de partida alto). A Condição de Parada deve testar se o contador é maior ou igual ao valor final (ex.: **i >= 0**).

E, de forma crucial, a Expressão Final deve ser um **decremento** (diminuição), usando o operador **i--** ou **i = i - 1**. Por exemplo, para contar de 10 a 1, você começa com **i = 10**, a condição é **i >= 1**, e o passo é **i--**. Essa variação mostra a flexibilidade do **for** para se adaptar a diferentes necessidades de sequenciamento.

A variável **segundos** inicia em 5. O laço continua enquanto **segundos** for maior ou igual a 1. A expressão **segundos--** diminui o contador em 1 a cada volta. O código executa para 5, 4, 3, 2 e 1, e depois exibe "Lançamento!", simulando uma contagem regressiva.

---

## 7. Contagens com saltos personalizados

Vimos que a Expressão Final define o "passo" do laço. O passo não precisa ser apenas 1 (**++** ou **--**). Podemos criar **contagens com saltos personalizados** para processar apenas valores específicos, como todos os números pares, múltiplos de 5, ou pular de 10 em 10.

O segredo é manipular a Expressão Final usando operadores de atribuição composta, como **+=** ou **-=**. Por exemplo, **i += 2** é a maneira simples de dizer "aumente **i** em 2 unidades". Usar saltos otimiza o código quando você só precisa interagir com um subconjunto de valores dentro de um intervalo.

Imagine calcular juros compostos a cada 6 meses; em vez de iterar mês a mês, você pode usar um salto de 6. Esse controle fino demonstra o poder do **for** em modelar lógicas de repetição complexas.

Neste código, a variável **k** começa em 0 e a condição é **k <= 20**. A expressão final **k += 4** faz o contador aumentar em 4 a cada ciclo. Os valores exibidos serão 0, 4, 8, 12, 16 e 20, demonstrando um salto de 4. Se fosse um decremento, usaríamos **-=** para saltar para trás.

---

## 8. Combinação de parâmetros na prática

Na prática, a força do laço **for** reside na sua capacidade de combinar os três parâmetros para resolver problemas específicos.

Podemos, por exemplo, criar um laço que começa em 100, vai até 50 (decrescente) e tem um passo de 5 em 5. A flexibilidade da sintaxe **for** (Inicialização; Condição; Expressão Final) permite que o programador crie a sequência de repetição exatamente como a lógica do algoritmo exige.

Isso é fundamental em algoritmos que precisam de uma repetição limitada, como desenhar uma grade de 10×10 (em que um **for** interno faria as linhas e um **for** externo faria as colunas), ou processar blocos de dados de um arquivo.

A capacidade de controlar o início, o fim e o ritmo de avanço é o que torna o **for** a escolha preferida para a maioria das repetições com contador.

Este exemplo demonstra uma combinação de parâmetros: **1. Inicialização:** **let valor = 50** (alto). **2. Condição:** **valor >= 10** (condição de parada baixa). **3. Expressão Final:** **valor -= 10** (decremento com salto de 10). Ele processa os níveis 50, 40, 30, 20 e 10, finalizando quando o valor se torna 0, mostrando uma contagem decrescente com salto.

---

## 9. for e a estrutura condicional if

A combinação de um laço **for** com uma estrutura condicional **if** é extremamente poderosa.

O **for** garante que um bloco de código seja executado um número controlado de vezes, enquanto o **if** permite que você execute ações diferentes dentro desse bloco de repetição, dependendo do estado atual do contador ou dos dados que estão sendo processados.

Por exemplo, você pode usar um laço para percorrer 100 números, mas só exibir na tela aqueles que são pares. O laço faz a contagem de 1 a 100, mas o **if** testa se (o número atual **% 2 === 0**).

Essa combinação é a base de muitos algoritmos de filtragem, processamento de dados e tomada de decisão repetitiva, permitindo que o código se comporte de maneira dinâmica mesmo dentro de um ciclo fixo de repetições.

O laço **for** itera a variável **numero** de 1 a 10. Dentro do laço, a condição **if (numero % 2 === 0)** verifica se o resto da divisão de **numero** por 2 é zero. Se for, o número é par e é exibido. Caso contrário (se for ímpar), o código dentro do **if** é ignorado, mas o laço continua até o fim.

---

## 10. Filtragem de dados usando if

A **filtragem de dados** é uma aplicação prática muito comum da combinação **for** e **if**.

Em um ambiente real, como um sistema de gerenciamento de estoque, você pode usar um laço **for** para passar por todos os 500 produtos (itens) e, usando um **if**, identificar e listar apenas aqueles cuja quantidade está abaixo do limite mínimo ou aqueles cujo preço é superior a um certo valor.

O laço garante que todos os produtos sejam inspecionados, enquanto o **if** atua como um filtro, selecionando apenas os itens que atendem a um critério específico.

Essa técnica permite que o programador automatize relatórios, alertas e processamento seletivo de informações de forma eficiente e controlada.

Apesar de não usarmos módulos aqui, o conceito de array (**notas**) é simples. O **for** percorre cada item da lista (de índice 0 a 5). Para cada item (**notas[i]**), o **if** verifica se a nota é maior ou igual a 7. Somente as notas que satisfazem essa condição de filtro são exibidas no console como "Aprovada", ignorando as notas 6 e 5.

---

## 11. Múltiplas condições (if/else if/else) no laço

Podemos expandir a capacidade de tomada de decisão dentro do laço **for** usando as estruturas **else if** e **else**. Isso nos permite classificar ou processar os dados em várias categorias diferentes.

Por exemplo, ao processar notas de alunos, o **for** percorre todas as notas, mas a estrutura condicional aninhada (com **if**, **else if** e **else**) pode classificá-las como "Excelente" (nota > 9), "Bom" (nota > 7), ou "Precisa Estudar Mais" (nota <= 7).

Essa lógica de múltiplos caminhos dentro da repetição é essencial para criar sistemas de pontuação, categorização de produtos ou qualquer rotina que exija respostas diferentes para diferentes faixas de valores, garantindo que cada item processado pelo laço receba a ação correta.

O laço **for** itera a variável **valor** de -2 a 2. Em cada repetição: **1.** O primeiro **if** checa se o valor é positivo. **2.** Se não for, o **else if** checa se é negativo. **3.** Se não for nenhum dos dois, o **else** é executado, indicando que o valor é zero. O código classifica todos os 5 valores no intervalo.

---

## 12. Interrompendo e pulando repetições (break e continue)

Embora o laço **for** seja controlado pelas três partes em seu cabeçalho, existem comandos especiais para alterar o fluxo de execução dentro do corpo do laço: **break** e **continue**.

O comando **break** é usado para encerrar **imediatamente** o laço, independentemente de a condição do **for** ainda ser verdadeira. É útil quando você encontra o resultado que procurava e não precisa mais continuar (ex.: achou um nome em uma lista).

Já o comando **continue** faz com que o laço pule o restante do código do ciclo atual e vá diretamente para a próxima iteração (para a Expressão Final). É útil quando você encontra uma situação que deve ser ignorada, mas o laço deve prosseguir (ex.: pular feriados em um calendário). Ambos os comandos são usados em conjunto com o **if** para definir a condição de interrupção ou de pulo.

O laço **for** deveria ir até 5, mas a cada ciclo a condição **if (num === 4)** é testada. Quando **num** chega a 4, o **break** é executado. Isso interrompe imediatamente o laço, impedindo que a repetição para 5 ocorra (o **console.log** dentro do **if** é executado antes do **break**), mostrando a importância do controle de fluxo.

---

## 13. Algoritmos simples: geração de tabuadas

A repetição controlada do laço **for** é o motor por trás de muitos algoritmos simples e úteis, como a **geração de tabuadas**.

Um algoritmo para gerar uma tabuada consiste em fixar um número (a base, ex.: 7) e usar o **for** para variar o multiplicador de 1 a 10. O laço garante que a operação de multiplicação (**base * multiplicador**) seja realizada exatamente 10 vezes. Este é um excelente exemplo de como a estrutura do **for** (Inicialização, Condição e Passo) mapeia diretamente uma necessidade matemática.

A lógica algorítmica aqui é: para cada número de 1 a 10, multiplique-o pela base. Isso demonstra que o **for** é mais do que apenas um contador; é uma ferramenta para automatizar processos lógicos repetitivos.

A variável **base** é fixada em 5. O laço **for** itera a variável **multiplicador** de 1 a 10. Dentro do laço, a multiplicação é calculada e o resultado formatado é exibido. O **for** garante que o cálculo da tabuada seja feito para todos os multiplicadores (de 1 a 10) de forma automática.

---

## 14. Algoritmos simples: soma acumulada

Outro algoritmo fundamental que utiliza o laço **for** é a **soma acumulada**. Este conceito envolve a repetição de uma operação em que o resultado de cada etapa é guardado e usado na próxima etapa, acumulando-se.

Imagine somar todos os números de 1 a 100. Você precisa de uma variável externa ao laço, chamada **acumulador** (ou **total**), que começa em zero. O laço **for** itera de 1 a 100, e a cada volta o número atual é somado ao acumulador.

A lógica é: **acumulador = acumulador + número_atual**. Essa técnica é crucial para calcular totais (ex.: total de vendas em um mês), médias (somar e dividir no final) ou qualquer cálculo em que um valor final depende da soma sequencial de muitos valores intermediários.

A variável **total** armazena o resultado da soma e é inicializada fora do laço em 0. O **for** itera **num** de 1 a 5. Em cada ciclo, o valor de **num** é adicionado a **total**. O laço calcula: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15. O valor final exibido é 15, a soma de todos os números no intervalo.

---

## 15. Entendendo a variável acumuladora (exemplo prático)

Para fixar a ideia de soma acumulada, é vital entender que a **variável acumuladora** (como o **total** no exemplo anterior) precisa ser declarada **fora** do laço.

Se ela for declarada dentro do **for**, ela será reiniciada a zero a cada nova repetição, perdendo o valor acumulado, o que resultaria em um erro lógico.

O acumulador atua como um "caderno de notas" persistente, em que cada passo do laço anota seu resultado parcial. Este padrão algorítmico, em que o laço itera e uma variável externa armazena o estado progressivo do cálculo, é um dos mais comuns e importantes na programação.

Ele não se limita à soma; podemos usá-lo para acumular multiplicações (calculando fatoriais, por exemplo), ou para concatenar textos (construindo uma mensagem longa a partir de várias partes).

A variável **mensagemFinal** é a nossa acumuladora, mas em vez de números, ela acumula texto (**string**), começando com "Início: ". O **for** executa 3 vezes. Em cada ciclo, ele concatena (une) o número atual (**i**) e o texto " -> " à mensagem existente. O resultado final, fora do laço, mostra a sequência: Início: 1 -> 2 -> 3 -> Fim.

---

## 16. Analogia e revisão do for

Para finalizar, podemos usar uma **analogia** para revisar o laço **for**. Pense em uma esteira de produção em uma fábrica.

**Inicialização:** É o momento em que você coloca a primeira peça na esteira (ex.: **i = 1**). **Condição:** É o sensor que verifica se você já fez peças suficientes (ex.: **i <= 10**). Se o sensor disser "Sim, ainda faltam peças", o processo continua. **Bloco de Código:** É o robô que realiza o trabalho principal (ex.: processar um cálculo, imprimir algo). **Expressão Final (O Passo):** É o avanço da esteira, movendo para a próxima peça a ser trabalhada (ex.: **i++**).

O laço **for** é a ferramenta ideal para qualquer tarefa em que você saiba quantas vezes algo precisa ser feito. Lembre-se: use **for** para repetição controlada por contador, **if** para tomada de decisão dentro da repetição, e variáveis externas para acumular resultados.

Aqui, **degrau** é um acumulador de texto (**string**). O **for** itera 4 vezes. Em cada ciclo (**i**), um novo asterisco ("*") é adicionado (acumulado) à variável **degrau**, e o resultado é impresso. O resultado no console será a escada de asteriscos: uma linha com *, depois **, depois *** e ****.
