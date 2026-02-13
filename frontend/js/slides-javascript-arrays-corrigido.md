# Slides – O que são arrays (listas) – Conteúdo Corrigido

## 1. O que são arrays (listas)

**Arrays**, também chamados de **listas** em muitos contextos, são estruturas de dados fundamentais na programação. Pense neles como caixas organizadas com vários compartimentos, onde você pode guardar vários itens relacionados sob um único nome.

Em vez de criar uma variável para cada nota de um aluno (ex.: **nota1**, **nota2**, **nota3**), você cria um único array chamado **notas** e guarda todas as notas dentro dele.

O principal objetivo dos arrays é permitir que trabalhemos com **coleções de dados** de forma eficiente. Isso significa que podemos agrupar, acessar e manipular um grande número de valores (como números, textos ou até outras variáveis) de uma só vez, usando métodos e loops simples.

Arrays tornam o código mais limpo, mais fácil de gerenciar e escalável, especialmente quando o número de itens que você precisa armazenar é desconhecido ou pode mudar. Eles são a base para construir coisas como listas de compras, placares de jogos e coleções de usuários em sistemas.

Este código demonstra a diferença fundamental: em vez de usar três variáveis separadas (**fruta1**, **fruta2**, **fruta3**), criamos uma única variável, **listaDeFrutas**, que armazena todos os valores em uma sequência organizada. O **console.log** mostra que o array é uma coleção agrupada, e o **typeof** confirma que, em JavaScript, arrays são um tipo especial de objeto.

---

## 2. Para que servem os arrays

Os arrays servem para **organizar** e **simplificar** a manipulação de dados agrupados. Sua utilidade é vasta, sendo encontrados em quase todos os programas que você usa.

A principal vantagem é o **acesso indexado**, que veremos a seguir, e a possibilidade de aplicar uma mesma operação a todos os elementos da coleção de uma só vez (como somar todos os valores ou listar todos os nomes).

Pense em um sistema de controle de estoque: em vez de centenas de variáveis individuais para cada produto, um array pode armazenar todos os nomes dos produtos.

Se você estiver fazendo um jogo, um array pode armazenar as coordenadas de todos os inimigos na tela ou o placar dos últimos 10 jogadores.

Resumindo, sempre que você precisar armazenar múltiplos valores do mesmo tipo (ou até de tipos diferentes, em JavaScript) sob um único identificador, o array é a estrutura ideal. Eles permitem que o código seja dinâmico e flexível.

Aqui temos três exemplos de como arrays são usados na prática. O array **notasBimestrais** armazena números, enquanto **inventario** e **diasDaSemana** armazenam textos (**strings**). O código ilustra a capacidade de agrupar diferentes tipos de informações do mundo real (notas, itens, dias) em coleções simples e prontas para serem processadas, como, por exemplo, calcular a média das notas.

---

## 3. Criação básica de arrays

Em JavaScript, a forma mais comum e recomendada de criar um array é usando **colchetes** (**[]**). Esta é a forma **literal** e a mais fácil de ler e escrever. Você simplesmente declara a variável e coloca os valores, separados por vírgulas, dentro dos colchetes.

Por exemplo, para criar uma lista de números, você escreveria **[10, 20, 30]**. Para textos (**strings**), você usaria **["Maria", "João", "Ana"]**.

É importante lembrar que um array pode estar **vazio** (**[]**) e ser preenchido depois, ou pode conter uma mistura de tipos de dados (números, textos, booleanos), embora seja mais comum e organizado manter tipos similares.

O ato de criar o array é chamado de **inicialização**. A flexibilidade do JavaScript em aceitar diferentes tipos no mesmo array o torna muito poderoso.

O código mostra quatro maneiras de inicializar arrays. A primeira e a segunda são as mais comuns. A terceira mostra um array inicializado vazio, que pode ser preenchido futuramente. A quarta demonstra a flexibilidade do JavaScript, em que **dadosMistos** armazena um texto, um número e um valor booleano (verdadeiro/falso). Todos são criados de forma simples usando os colchetes **[]**.

---

## 4. Acesso a elementos: o conceito de índice

Para acessar um item específico dentro de um array, usamos o conceito de **índice**. O índice é um número que representa a **posição** do elemento dentro da lista, e ele **sempre começa em zero (0)**.

Isso é um ponto crucial em quase todas as linguagens de programação! Se um array tem 5 elementos, os índices válidos são 0, 1, 2, 3 e 4.

Para acessar o primeiro elemento, você usa o índice **0**. Para o segundo, o índice **1**, e assim por diante. O acesso é feito colocando o índice entre colchetes (**[]**) logo após o nome da variável do array, por exemplo: **meuArray[2]**.

Entender o conceito de **índice zero** é o primeiro passo para dominar a manipulação de arrays. Se você tentar acessar um índice que não existe (como o índice 5 em um array de 5 elementos), o JavaScript retornará **undefined**. O array **planetas** tem 4 elementos. O código acessa e armazena o primeiro elemento ("Mercúrio") usando o índice **[0]** e o terceiro elemento ("Terra") usando o índice **[2]**. Note que o índice **[4]** tenta acessar o quinto elemento, que não existe, resultando no valor **undefined** no console. Este é um exemplo simples e direto de como usar o índice para recuperar valores específicos.

---

## 5. Modificação de elementos

A **modificação** de elementos em um array é feita de forma muito similar ao acesso, mas com uma **atribuição** (o sinal de igual, **=**). Você identifica a posição do elemento que deseja mudar usando seu índice e, em seguida, atribui um novo valor a ele.

Por exemplo, se você tem uma lista de nomes e percebe que o nome na terceira posição (índice 2) está escrito errado, você pode corrigi-lo com **nomes[2] = "Novo Nome"**. Essa ação substitui o valor antigo pelo novo.

Essa capacidade de alteração é o que torna os arrays estruturas de dados **dinâmicas**. Você pode atualizar placares de jogos, mudar status de tarefas ou corrigir dados de cadastro, tudo usando o mesmo array. O array não precisa ser recriado; apenas o valor na posição específica é alterado.

O código demonstra a modificação no local. A lista inicial é alterada usando os índices. O valor "Teclado" na posição **[1]** é substituído por "Mouse Pad", e "Câmera" na posição **[3]** é substituído por "Webcam HD". A lista final reflete essas mudanças, provando que é possível alterar o conteúdo de um array de forma pontual e simples.

---

## 6. O tamanho do array: propriedade length

A propriedade **length** é um recurso extremamente útil e básico dos arrays. Ela não é um **método** (não usa parênteses), mas sim uma **propriedade** que retorna o número total de elementos contidos no array.

Para usá-la, basta escrever o nome do array seguido de **.length**, por exemplo: **meuArray.length**. É fundamental para saber quantos itens você tem em uma lista, o que é crucial para evitar tentar acessar um índice que não existe (um erro comum).

O valor de **length** é sempre **um a mais** do que o índice do último elemento, já que a contagem começa em 1 para o tamanho, mas o índice começa em 0.

Você usará o **length** o tempo todo, especialmente ao iterar sobre o array com loops **for** ou **while**, como veremos mais adiante.

O array **coresDoArcoIris** possui 5 elementos, e o **.length** retorna o valor 5. O código, então, utiliza essa propriedade para calcular o índice do último elemento (5 - 1 = 4) e acessá-lo diretamente, demonstrando como o **length** é usado para manipulação prática de arrays, especialmente para acessar o final da lista sem saber seu tamanho de antemão.

---

## 7. Iteração básica com for

**Iterar** sobre um array significa percorrer todos os seus elementos, um por um, geralmente para fazer alguma operação com cada um deles (como mostrá-los na tela, somá-los ou aplicar uma regra).

A forma mais clássica e controlada de fazer isso é usando o loop **for**. O loop **for** é perfeito para arrays porque ele permite que você defina um contador (geralmente **i**), que começa no índice 0, e continua até que atinja o limite imposto pela propriedade **length** do array.

A condição de parada é tipicamente **i < array.length**. A cada repetição, o contador **i** aumenta, permitindo que você acesse o próximo elemento usando **array[i]** . Esta é a espinha dorsal de qualquer processamento de listas em programação.

O **for** começa com **i = 0**. Ele continua enquanto **i** for menor que **alunosAprovados.length** (que é 4). A cada volta, ele imprime a posição (**i**) e o nome do aluno (**alunosAprovados[i]**). Quando **i** se torna 4, a condição 4 < 4 é falsa, e o loop para, garantindo que todos os 4 elementos (índices 0 a 3) sejam processados e que nenhum erro por acesso a índice inexistente ocorra.

---

## 8. Iteração básica com while

Embora o loop **for** seja mais comum para arrays devido à sua sintaxe compacta, o loop **while** também pode ser usado para iteração.

A principal diferença é que o **while** exige que você gerencie o contador (**i**) manualmente. Você deve inicializar a variável de contagem antes do loop e incrementá-la (aumentar seu valor) dentro do loop.

A condição do **while** é a mesma do **for**: o loop continua enquanto o contador (**i**) for menor que **array.length**. Se você esquecer de incrementar o contador dentro do **while**, o loop nunca irá parar, resultando em um **loop infinito**, o que travará o programa.

O **while** pode ser preferido em situações em que a condição de parada é mais complexa ou não está diretamente ligada ao número de itens.

Inicializamos **i** com 0. O **while** executa enquanto **i** for menor que 4. Dentro do loop, acessamos o elemento usando **precos[i]** e, de forma crucial, usamos **i++** para garantir que **i** seja incrementado a cada repetição. Assim, o loop eventualmente atinge a condição de parada e processa todos os elementos do array, mostrando um uso alternativo e funcional de loops para iteração.

---

## 9. Inserção no final com push()

Uma das operações mais frequentes em arrays é **adicionar** novos elementos. O método **push()** é o mais simples para isso: ele insere um ou mais novos elementos **no final** do array.

É como colocar um novo item na última posição de uma fila. Este método **modifica o array original** (chamamos isso de operação **in-place**) e é muito eficiente.

O **push()** é ideal quando você está coletando dados sequencialmente, como adicionar um novo jogador ao placar após o fim de uma partida, ou adicionar um novo item a um carrinho de compras.

Além de adicionar o novo elemento, o **push()** tem um **retorno**: ele retorna o novo comprimento (o novo **.length**) do array após a adição.

O array **listaDeEspera** inicialmente tem 3 nomes. A primeira chamada ao **push()** adiciona "Helena" como o 4º elemento. A segunda chamada adiciona "Igor" e armazena o novo tamanho (5) na variável **novoTamanho**. O array final é modificado, mostrando os dois novos elementos adicionados de forma simples no final da lista.

---

## 10. Inserção no início com unshift()

Enquanto o **push()** adiciona ao final, o método **unshift()** é usado para inserir um ou mais novos elementos **no início** do array (na posição de índice 0).

Pense nisso como furar uma fila: todos os outros elementos são "empurrados" uma posição para a direita para dar espaço ao novo elemento na frente.

Por exemplo, se você tem uma lista de notícias e quer que a mais recente apareça sempre no topo, o **unshift()** é a ferramenta correta.

Assim como o **push()**, o **unshift()** também modifica o array original e retorna o novo comprimento do array após a inserção.

No entanto, o **unshift()** pode ser um pouco menos eficiente que o **push()** em arrays muito longos, pois o programa precisa reindexar todos os elementos existentes.

O array **ultimosEventos** é inicializado com B e C. O primeiro **unshift()** coloca "Evento A - Novo" na frente, deslocando B e C. O segundo **unshift()** coloca "Evento Z - Mais Novo" no novo índice 0. O resultado mostra que os novos eventos foram inseridos no começo da lista, reordenando a sequência para que os elementos mais novos apareçam primeiro.

---

## 11. Remoção do final com pop()

Para **remover** elementos, também temos métodos simples e diretos. O método **pop()** é usado para remover o **último** elemento de um array. É o oposto do **push()**.

Ele é muito útil, por exemplo, para processar uma fila de tarefas em que a última tarefa adicionada é a primeira a ser removida (Last-In, First-Out – **LIFO**). O que o **pop()** retorna não é o novo tamanho do array, mas sim o **elemento que foi removido**.

Isso é muito útil se você precisa usar esse valor removido em outra parte do seu código, como, por exemplo, mostrar uma mensagem "Item X removido do carrinho". Assim como os métodos de inserção, o **pop()** também altera o array original, diminuindo seu tamanho em 1.

O array **pilhaDePratos** tem 3 itens. O primeiro **pop()** remove "Prato C", e este valor é armazenado em **pratoRemovido**. A pilha fica com A e B. O segundo **pop()** remove "Prato B", e a pilha final fica apenas com "Prato A". O código mostra que o **pop()** é usado para retirar o item do final e que ele retorna o valor retirado para uso.

---

## 12. Remoção do início com shift()

O método **shift()** é o oposto do **unshift()** e é usado para remover o **primeiro** elemento de um array (o elemento no índice 0).

Este método é ideal para processar listas ou filas em que o primeiro item a entrar é o primeiro a sair (First-In, First-Out – **FIFO**), como em uma lista de espera de atendimento: o cliente que chegou primeiro é o primeiro a ser atendido e removido da fila.

Assim como o **pop()**, o **shift()** retorna o elemento que foi removido, permitindo que você o utilize. Ele também altera o array original, e todos os elementos restantes são **reindexados**, ou seja, seus índices são diminuídos em 1. Por exemplo, o elemento que estava no índice 1 passa a ser o novo índice 0.

A **filaDeAtendimento** começa com 3 clientes. O primeiro **shift()** remove "Cliente 1" (o primeiro da fila), e este valor é armazenado em **atendido**. Note que "Cliente 2" e "Cliente 3" automaticamente se tornam os novos índices 0 e 1, respectivamente. O segundo **shift()** remove "Cliente 2", deixando apenas "Cliente 3" na fila restante. O **shift()** é eficiente para simular o comportamento de uma fila.

---

## 13. Aplicação prática de for: cálculo simples (soma e média)

O loop **for** é essencial para realizar cálculos e processamentos em massa em arrays numéricos. Uma aplicação muito comum é o **cálculo da soma total** dos elementos de um array e, consequentemente, o **cálculo da média aritmética**.

Para fazer isso, você precisa de uma variável externa (**soma**) inicializada em zero. Dentro do **for**, a cada iteração, você acessa o valor numérico do array usando o índice (**array[i]**) e o adiciona à variável **soma**.

Ao final do loop, a variável **soma** conterá o total. Se você dividir essa soma pelo **array.length**, você obtém a média. Esta é uma aplicação fundamental que demonstra o poder da iteração para processar dados de forma rápida e repetitiva.

O loop **for** percorre os 4 valores do array **vendasSemanais**. A cada volta, o valor atual é somado à **somaTotal**. Ao final, **somaTotal** guarda a soma de todos os itens. O código, então, calcula a **média** dividindo a soma pelo tamanho do array (**.length**), arredondando os resultados para duas casas decimais (**.toFixed(2)**), demonstrando como arrays e loops trabalham juntos para processamento numérico.

---

## 14. Substituição em massa com for

Além de modificar um único elemento por índice (como vimos no Slide 5), o loop **for** permite que você faça uma **substituição** ou **transformação em massa** em todos os elementos de um array, ou em um subconjunto deles.

Por exemplo, você pode querer aplicar um aumento de 10% no preço de todos os produtos de uma lista, ou converter todos os nomes de uma lista para letras maiúsculas.

Você usa o **for** para percorrer o array, e dentro do loop usa a sintaxe de modificação (**array[i] = novoValor**) para atualizar o valor na posição atual (**i**).

Essa técnica é poderosa para padronizar dados ou aplicar regras de negócio em toda uma coleção, economizando muito tempo e linhas de código que seriam necessárias para modificar cada item individualmente.

O loop **for** percorre o array **nomesIniciais** (que está todo em letras minúsculas). Dentro do loop, a variável **nomesIniciais[i]** é substituída por uma nova string: a primeira letra (**charAt(0)**) em maiúscula (**toUpperCase()**) concatenada com o resto da string (**slice(1)**). O resultado final é que todos os nomes no array original foram corrigidos para o padrão de primeira letra maiúscula, demonstrando a substituição em massa.

---

## 15. Substituição, inserção e remoção com índice (básico)

Vimos os métodos **push()**, **pop()**, **unshift()** e **shift()**, que trabalham apenas nas extremidades. No entanto, o **acesso direto por índice** permite uma substituição mais flexível em qualquer ponto.

Além disso, é importante notar uma característica única do JavaScript: você pode inserir elementos em um índice inexistente, mas isso deve ser feito com cuidado.

Se você atribuir um valor a um índice muito maior que o **length** atual (ex.: um array de 3 elementos tem **.length** 3, e você atribui a **array[10]**), o JavaScript criará "buracos" vazios (**empty**) entre o último elemento existente e o novo elemento.

Embora flexível, é mais seguro e limpo usar os métodos **push**/**unshift** ou o método **splice** (mais avançado) para inserções e remoções no meio. A forma mais segura de manipulação com índice é a **substituição no local**.

O código mostra três manipulações por índice: **(1)** Substituição simples: "Bravo" (índice 1) é trocado por "Beta". **(2)** Inserção com salto: "Echo" é colocado no índice 5, criando um slot vazio no índice 4. **(3)** Uma remoção básica: o elemento "Delta" (índice 3) é substituído pelo valor **undefined**, mas o slot continua existindo. O array final mostra a flexibilidade e os efeitos de criar buracos na lista, o que é uma particularidade do JavaScript.

---

## 16. Comparação básica dos métodos de alteração estrutural

Para finalizar a manipulação básica de arrays, é fundamental ter uma visão **comparativa** dos quatro principais métodos de alteração de estrutura.

Eles são essenciais para manter a ordem e a funcionalidade de listas em projetos. O critério de escolha entre eles é puramente a **posição** em que você precisa adicionar ou remover o elemento. Lembre-se de que todos eles alteram o array original e o seu tamanho (**length**).

Utilize **push()** e **pop()** para simular uma **pilha** (empilhamento/desempilhamento) ou quando a ordem do restante dos elementos não for crucial.

Utilize **unshift()** e **shift()** para simular uma **fila** (entrada/saída ordenada) ou quando a ordem for rigorosa, mas tenha em mente o custo de reindexação em arrays grandes. Para substituição em qualquer índice, use a atribuição direta **array[i] = novoValor**.

Este código demonstra os quatro métodos básicos em sequência, mostrando o ciclo completo de manipulação. O array começa com A, B, C. Adicionamos D no final (**push**), removemos D do final (**pop**), adicionamos Z no início (**unshift**) e removemos Z do início (**shift**). O resultado final é o array original [A, B, C], e as variáveis **item1** e **item2** guardam os elementos removidos. Isso consolida a diferença entre os métodos de extremidade.
