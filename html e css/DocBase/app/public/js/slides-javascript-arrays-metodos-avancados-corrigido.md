# Slides – Push e pop: métodos de array (Conteúdo Corrigido)

## 1. Push e pop: adicionando e removendo no final

O **Array** em JavaScript é uma das estruturas de dados mais fundamentais e frequentemente usadas, representando uma lista ordenada de valores. Os métodos **push()** e **pop()** são as operações mais básicas e essenciais para manipular essa lista na extremidade final, atuando como o comportamento de uma **pilha** (stack), em que o último elemento a entrar é o primeiro a sair (**LIFO** – Last In, First Out).

O método **push()** é utilizado para adicionar um ou mais elementos ao **final** de um array. Ele modifica o array original (é um método **mutável**) e retorna o novo comprimento do array.

Já o método **pop()** faz o inverso: ele remove o **último** elemento de um array e retorna o elemento que foi removido. É crucial entender que ambos os métodos trabalham diretamente no array existente, alterando-o permanentemente.

Por serem operações de manipulação na ponta final da estrutura, eles tendem a ser muito eficientes em termos de desempenho, sendo amplamente usados para construir e esvaziar listas de forma simples e direta, o que é fundamental para a lógica de programação.

O código demonstra como **push()** insere o novo item "Pagar Contas" no final do array **tarefas**, modificando o array original. Em seguida, **pop()** remove o último elemento adicionado, devolvendo-o para a variável **removido**. Essa é a maneira mais simples e performática de gerenciar o final de uma lista, simulando uma pilha em que a última tarefa adicionada é a primeira a ser feita (LIFO).

---

## 2. Inserir e remover elementos no início (shift e unshift)

Enquanto **push()** e **pop()** lidam com o final do array, os métodos **unshift()** e **shift()** permitem a manipulação do **início** da lista. O método **unshift()** é usado para adicionar um ou mais elementos ao início de um array.

Assim como **push()**, ele é um método **mutável**, ou seja, altera o array original, e retorna o novo comprimento do array. Em contrapartida, o método **shift()** remove o elemento que está na primeira posição (índice 0) do array e retorna o elemento removido. Embora sejam muito úteis, é importante notar que **shift()** e **unshift()** são geralmente **menos eficientes** em termos de desempenho do que **push()** e **pop()**.

Isso ocorre porque, ao adicionar ou remover elementos no início, todos os índices dos elementos subsequentes no array precisam ser realocados e atualizados, o que consome mais tempo de processamento, especialmente em arrays muito grandes.

Portanto, seu uso é recomendado quando a lógica da aplicação realmente exige a priorização do início da lista, como em uma **fila** (queue).

O código ilustra como **unshift()** insere "Ana" na primeira posição (índice 0) do array **convidados**, deslocando todos os outros elementos para a direita. Posteriormente, **shift()** remove o elemento na posição inicial, "Ana", e o armazena na variável **primeiro**. O array **convidados** é permanentemente alterado em ambas as operações. Essa funcionalidade é essencial para gerenciar a ordem de processamento em que o primeiro a entrar deve ser o primeiro a ser tratado (FIFO), como em sistemas de mensagens ou tickets de atendimento.

---

## 3. Splice: inserindo, removendo ou substituindo elementos

O método **splice()** é, de longe, um dos mais poderosos e versáteis métodos de manipulação de arrays, pois ele consegue fazer tudo o que **push()**, **pop()**, **shift()** e **unshift()** fazem, e muito mais, porém em **qualquer posição** do array, não apenas nas extremidades.

Este método mutável aceita até três ou mais argumentos e **sempre retorna um novo array** contendo os elementos que foram removidos, mesmo que nenhum elemento tenha sido removido (nesse caso retorna um array vazio).

O primeiro argumento é o **índice inicial** de onde a modificação deve começar. O segundo argumento é o **número de elementos** a serem removidos a partir desse índice. A partir do terceiro argumento em diante, são os **elementos a serem adicionados** no local onde a remoção ocorreu.

Se o segundo argumento for **0**, o **splice()** se comporta apenas como um método de inserção, adicionando novos elementos sem remover nada. Entender o **splice()** é crucial para realizar modificações complexas e cirúrgicas em arrays de forma eficiente.

Este exemplo mostra a tríplice funcionalidade de **splice()**. Primeiro, ele remove a "Laranja" (1 elemento a partir do índice 2). Em seguida, ele insere "Pêssego" no índice 1, sem remover nenhum elemento (0 no segundo argumento). Por fim, ele substitui "Uva" por "Melão" (1 elemento removido, 1 elemento inserido) a partir do índice 3. Perceba que **splice()** altera o array **frutas** diretamente em todos os casos.

---

## 4. Slice: criando subarrays não-mutáveis (cópias)

Diferentemente de **splice()**, o método **slice()** (sem o "p") é um método **não-mutável** (ou imutável). Sua principal função é extrair uma porção de um array existente e retornar um **novo array** contendo os elementos selecionados, **sem modificar** o array original. Isso é fundamental no desenvolvimento moderno, em que é preferível evitar a alteração de dados originais.

O método aceita dois argumentos opcionais: o primeiro é o **índice de início** (inclusivo) e o segundo é o **índice de fim** (exclusivo). Se nenhum argumento for fornecido, **slice()** cria uma **cópia rasa** (shallow copy) completa do array original, o que é uma técnica comum para trabalhar com dados sem o risco de efeitos colaterais.

Se apenas o índice de início for fornecido, a fatia irá até o final do array. A imutabilidade de **slice()** o torna a ferramenta ideal para operações em que você precisa de uma cópia de segurança dos dados originais ou apenas uma parte específica da lista para processamento temporário.

O código demonstra a imutabilidade do **slice()**. Na primeira parte, **slice()** sem argumentos cria uma cópia completa (**copiaCores**). Mesmo após adicionar "Preto" à cópia, o array **coresOriginais** permanece intocado. Em seguida, mostramos como especificar um intervalo (início inclusivo, fim exclusivo) e como começar a extração de um ponto específico até o final da lista, sempre gerando novos arrays e preservando a fonte de dados.

---

## 5. IndexOf: localizando a primeira ocorrência de um valor

Saber se um elemento existe em um array e, mais importante, **onde** ele está, é uma tarefa muito comum. O método **indexOf()** é o principal responsável por essa busca. Ele procura por um determinado valor em um array e retorna o **índice** (posição) da **primeira ocorrência** desse valor.

Se o elemento não for encontrado no array, **indexOf()** retorna o valor **-1**. O uso do -1 como indicador de "não encontrado" é uma convenção comum em muitas linguagens de programação. O método aceita um **segundo argumento opcional**, que é o índice de início da busca.

Se você especificar esse segundo argumento, o método começará a procurar a partir daquela posição, ignorando as posições anteriores. É importante ressaltar que **indexOf()** realiza uma **comparação estrita** (usa **===**), o que significa que ele compara não apenas o valor, mas também o tipo.

Ele é um método **não-mutável**, ou seja, não altera o array original, e é amplamente utilizado em estruturas condicionais para verificar a presença de itens antes de realizar operações complexas.

O exemplo demonstra a utilidade de **indexOf()**. Primeiro, ele encontra a primeira "Alice" no índice 0. Quando procura por "Eve", que não existe, o retorno é -1. A busca avançada mostra como, ao definir o segundo argumento como 1, o método ignora o índice 0 e encontra a segunda ocorrência de "Alice" no índice 3. Este método é essencial para lógicas de controle, como evitar a duplicação de itens em uma lista, verificando se um item já está presente antes de adicioná-lo.

---

## 6. Includes: verificação simples de existência

Se a única coisa que você precisa saber é se um determinado elemento está **presente** em um array, sem se importar com o índice, o método **includes()** é a escolha ideal. Introduzido em versões mais recentes do JavaScript (ES6), ele é uma forma mais limpa e moderna de realizar essa verificação em comparação com a checagem **indexOf() === -1**.

O **includes()** retorna simplesmente um valor booleano **true** se o array contém o elemento e **false** caso contrário. Sua sintaxe é mais legível e expressiva, tornando o código mais fácil de entender. Além do valor a ser procurado, **includes()** também aceita um segundo argumento opcional, que é o índice a partir do qual a busca deve começar.

Assim como **indexOf()**, ele também usa o princípio da **igualdade estrita** (**===**), mas com uma diferença notável: ele consegue encontrar o valor **NaN** (Not a Number), enquanto **indexOf()** falha nessa busca específica. Este método é a ferramenta de preferência para validações de presença de itens em listas de permissões, inventários ou verificações rápidas.

O código mostra a simplicidade do **includes()**. A variável **temAdmin** retorna **true** porque "admin" está na lista. **temTester** retorna **false**. A terceira verificação demonstra o uso do índice de início: ao começar a busca a partir do índice 2 (onde está "viewer"), o método não consegue encontrar "editor", que está no índice 1, e retorna **false**. O **includes()** deve ser usado sempre que uma resposta Sim/Não (booleano) for suficiente para a lógica do programa.

---

## 7. A grande diferença: mutabilidade vs. imutabilidade

Em JavaScript, os métodos de array podem ser classificados em dois grupos cruciais: os **Mutáveis** (que alteram o array original) e os **Imutáveis** (que não alteram o original, mas retornam um novo array ou outro valor). Os métodos mutáveis, como **push()**, **pop()**, **shift()**, **unshift()** e **splice()**, modificam a estrutura de dados existente **in-place**.

Isso significa que, após a execução, o array original terá um novo estado, o que é eficiente em termos de memória, mas pode causar efeitos colaterais inesperados em partes complexas do código, se outras variáveis estiverem referenciando o mesmo array.

Já os métodos **imutáveis**, como **slice()**, **indexOf()**, **includes()**, e veremos em breve **map()**, **filter()** e **forEach()** (embora este último não retorne um novo array, ele não altera o original), garantem que o array original permaneça intacto. Eles retornam uma cópia modificada ou um valor booleano/índice.

A programação funcional e o desenvolvimento com frameworks modernos como React preferem o uso de métodos imutáveis para garantir a previsibilidade e rastreabilidade das alterações de estado, o que é um princípio fundamental para criar aplicações estáveis e de fácil manutenção.

O primeiro bloco de código (**listaMutavel**) mostra que, ao usar **push()**, o array **listaOriginal** é alterado, pois **listaMutavel** é apenas uma referência ao original. No segundo bloco (**listaImutavel**), usamos **slice()** para garantir que **novaLista** seja uma cópia independente. Quando **push(40)** é executado na **novaLista**, o array **listaImutavel** de origem permanece inalterado. Essa é a essência da imutabilidade: trabalhar com cópias para evitar efeitos colaterais.

---

## 8. Escolhendo a ferramenta certa: performance vs. previsibilidade

A escolha entre métodos mutáveis e imutáveis não é uma questão de certo ou errado, mas de **contexto** e **prioridade**. Em geral, para pequenos arrays ou operações de alta frequência em que a performance é crítica e você sabe exatamente o que está alterando, os métodos mutáveis (**push**, **pop**, **shift**, **unshift**) são mais eficientes.

Eles trabalham diretamente na memória alocada, evitando a sobrecarga de criar um novo objeto Array a cada operação. No entanto, em sistemas maiores e mais complexos, em que o estado da aplicação é gerenciado em um único lugar (como em uma arquitetura de gerenciamento de estado), a **imutabilidade** é crucial.

Métodos como **slice()** e os que serão introduzidos (**map()**, **filter()**) garantem que a alteração de dados seja rastreável e previsível. Criar um novo array a cada mudança facilita a detecção de que algo mudou, o que é vital para otimizar a renderização de interfaces de usuário.

Uma boa regra é: use métodos mutáveis em funções locais em que você tem controle total sobre o array, e prefira métodos imutáveis ao manipular dados que afetam o estado global da sua aplicação.

O exemplo contrasta os dois usos. A função **adicionarAoLog** usa **push()** (mutável) no array **logDeAtividades** porque é uma operação local e prioriza a performance. Já a função **desativarUsuario** retorna um novo array usando **map()** (imutável, será visto adiante) para garantir que o array original **dadosDoUsuario** não seja modificado, mantendo a previsibilidade do estado global da aplicação.

---

## 9. ForEach: executando uma ação para cada elemento

O **forEach()** é um método de array de alto nível que simplifica a tarefa de **iterar** sobre todos os elementos de um array, substituindo, em muitos casos, o tradicional loop **for**. Ele executa uma função de **callback** fornecida uma vez para cada elemento presente no array.

A função de callback recebe até três argumentos: o valor do elemento atual, o índice desse elemento e o array que está sendo percorrido (que raramente é usado).

É vital entender que **forEach()** é primariamente um método de **iteração** e não de **transformação**, o que significa que ele **não retorna** um novo array nem modifica o array original (ou seja, é imutável em relação ao array, mas não gera um novo array).

Seu propósito é executar uma **ação**, como imprimir dados no console, disparar eventos ou acumular um valor em uma variável externa. Ele é ideal para tarefas que exigem um efeito colateral por elemento, como a atualização de elementos em uma interface gráfica ou o registro de dados.

O código utiliza **forEach()** para percorrer o array **produtos**. A cada iteração, a função de callback é executada. Ela usa o argumento **produto** para acessar o nome e o preço, e o argumento **indice** para mostrar a posição. O principal efeito colateral é a soma do preço de cada produto à variável externa **total**. Perceba que **forEach()** não retorna nenhum valor; ele simplesmente executa uma ação para cada item, sendo uma forma mais limpa e moderna de fazer um loop.

---

## 10. Map: gerando um novo array a partir da transformação

O método **map()** é a ferramenta essencial para a **transformação** de arrays. Ele percorre todos os elementos do array, aplica uma função de callback a cada elemento e, crucialmente, **retorna um novo array** contendo os resultados dessa aplicação, **sem alterar** o array original (imutável).

Isso faz com que **map()** seja amplamente superior ao uso de **forEach()** ou de um loop **for** tradicional, quando o objetivo é **criar uma nova lista** baseada na original. Por exemplo, se você tem uma lista de números e quer criar uma nova lista com todos esses números dobrados, **map()** é a escolha mais limpa e funcional.

A função de callback de **map()** também recebe o valor, o índice e o array original. O **retorno explícito** de cada chamada da função de callback é o que preenche o novo array que será gerado.

É importante lembrar que o novo array gerado por **map()** sempre terá o **mesmo comprimento** do array original, apenas com os valores transformados.

O **map()** percorre o array **notas** e, para cada nota, adiciona 0,5 (com um limite de 10,0). O valor retornado pela função de seta (arrow function) é o novo elemento que compõe o array **notasComBonus**. Observe a principal característica: o array **notas** original permanece inalterado, e o novo array **notasComBonus** é criado com o mesmo número de elementos, mas com os valores transformados.

---

## 11. Filter: selecionando elementos que atendem a uma condição

O método **filter()** é o método de alto nível para a **seleção** de elementos. Seu objetivo é criar um **novo array** contendo apenas os elementos do array original que satisfazem uma condição específica, sem alterar o array original (imutável).

A função de callback passada para **filter()** deve retornar um valor **booleano** (**true** ou **false**). Se a função de callback retornar **true** para um elemento, esse elemento será incluído no novo array. Se retornar **false**, o elemento será descartado.

Diferentemente de **map()**, o novo array gerado por **filter()** pode ter um comprimento **menor** do que o array original, ou até mesmo ser um array vazio se nenhum elemento satisfizer a condição.

Ele é a ferramenta ideal para criar subconjuntos de dados, como filtrar uma lista de clientes ativos, encontrar produtos em estoque ou selecionar apenas números pares. A legibilidade e a expressividade que **filter()** adiciona ao código são enormes, simplificando a lógica de seleção de dados.

O **filter()** itera sobre o array **estoque**. A função de callback verifica se a quantidade do item atual é maior que zero. Apenas os objetos em que essa condição é **true** (Camisa e Meia) são incluídos no novo array **produtosEmEstoque**. O item "Calça", com quantidade 0, é excluído. Isso demonstra como **filter()** gera um novo array que é um subconjunto do original, com base em uma condição lógica simples.

---

## 12. A tríade da iteração: forEach, map e filter

É fundamental para o domínio de JavaScript saber a diferença exata entre **forEach()**, **map()** e **filter()**. Embora todos iterem sobre um array, seus **propósitos** são completamente distintos.

**forEach()** serve para **executar uma ação** (efeito colateral) para cada elemento; ele retorna **undefined** e não modifica o array. **map()** serve para **transformar** cada elemento, retornando um novo array de mesmo comprimento com os valores transformados.

E **filter()** serve para **selecionar** elementos, retornando um novo array de comprimento igual ou menor que o original, contendo apenas os itens que passaram em um teste lógico. Um erro comum de iniciantes é tentar usar **forEach()** para criar um novo array de valores transformados; para isso, **map()** é a ferramenta correta.

Outro erro é tentar usar **map()** para selecionar elementos; para isso, **filter()** é o método correto. Utilizar o método certo torna o código mais claro, mais performático e alinhado com o paradigma de programação funcional.

O exemplo demonstra a diferença. A primeira parte mostra **forEach()** sendo usado para gerar um novo array, mas de forma ineficiente, pois precisa de um array externo (**novosValores**). A segunda parte mostra o uso correto de **map()** para alcançar o mesmo resultado de transformação de forma nativa e limpa. A terceira parte usa **filter()** para selecionar apenas os números maiores que 5. O **map()** e o **filter()** são preferíveis quando o resultado esperado é um novo array (transformado ou selecionado, respectivamente).

---

## 13. Transformação complexa: map com objetos

O verdadeiro poder de **map()** se revela ao trabalhar com arrays de **objetos**, que são o formato de dados mais comum em aplicações web. Muitas vezes, precisamos modificar a estrutura ou o conteúdo de cada objeto para adequá-lo a uma nova visualização ou a um novo formato de API, sem alterar os dados originais.

**map()** permite isso de forma elegante. Por exemplo, podemos ter um array com todos os detalhes de um produto, mas para uma exibição em uma lista resumida, precisamos apenas do nome e do preço. O **map()** percorre cada objeto e retorna um novo objeto que contém apenas as propriedades desejadas ou as propriedades com valores modificados.

Ao fazer isso, é uma boa prática usar o **spread operator** (**...**) para copiar as propriedades existentes de um objeto (se necessário) antes de adicionar ou sobrescrever as que serão alteradas. Lembre-se: o resultado é um novo array, garantindo a imutabilidade e a segurança dos dados.

O código usa **map()** para transformar o array **produtosComImposto** em um novo array chamado **precosFinais**. Para cada item, ele calcula o **valorTotal** (preço + imposto) e retorna um novo objeto com a estrutura simplificada (apenas **descricao** e **valorTotal**). O array original não é alterado. Isso é um padrão muito comum para preparar dados de backend (API) para serem exibidos no frontend (interface do usuário).

---

## 14. Filtragem de dados com filter: selecionando subconjuntos

A filtragem de arrays de objetos é uma das aplicações mais frequentes de **filter()**. Em um cenário de dados reais, como um catálogo de produtos, um registro de funcionários ou uma lista de posts de blog, a necessidade de extrair subconjuntos de dados com base em critérios complexos é constante.

O **filter()** permite aplicar uma lógica de teste em uma ou várias propriedades de cada objeto. Por exemplo, você pode querer filtrar apenas os funcionários que estão ativos **e** que pertencem ao setor de "TI", ou os produtos com preço inferior a 100 **e** que estejam em estoque.

A função de callback deve encapsular essa lógica, e a combinação de condições (**&&** para "e", **||** para "ou") é fundamental para criar filtros precisos. O resultado será um novo array contendo apenas os objetos que passaram na condição de filtro, o que facilita a manipulação de grandes volumes de dados de forma imutável e eficiente.

O **filter()** é usado para identificar os clientes que se encaixam no critério "VIP". A condição lógica dentro do callback exige que o **status** seja estritamente igual a "ativo" **e** o **saldo** seja maior que 1000. Apenas "Ana" e "Carla" satisfazem essa condição (Bruno falha em ambas). O **filter()** retorna um novo array (**clientesVIPS**) contendo apenas os objetos que atendem a esse critério composto.

---

## 15. Armadilha do forEach: efeitos colaterais em variáveis externas

Embora **forEach()** seja classificado como um método que não altera o array original (imutável em relação ao array), é crucial entender que ele **pode e deve** ser usado para gerar **efeitos colaterais** em variáveis externas. Isso é, na verdade, seu principal uso.

Se você declarar uma variável **fora** do escopo do **forEach()** (uma variável externa, como um contador ou um acumulador de soma) e a função de callback de **forEach()** modificar essa variável, o valor final dessa variável externa será alterado.

Isso é uma diferença importante em relação a **map()** e **filter()**, que priorizam o retorno de um novo array e desencorajam a manipulação de escopo externo. A armadilha reside em confundir a imutabilidade do array com a imutabilidade do escopo da função.

**forEach()** é o método de escolha quando você precisa interagir com o ambiente externo a partir dos dados do array, como, por exemplo, calcular a soma total de uma lista de preços ou renderizar elementos HTML na página, sem criar um novo array.

No primeiro bloco, **forEach()** altera a variável **somaTotal** a cada iteração, demonstrando seu uso para efeitos colaterais. O array **numeros** original não é alterado. O segundo bloco mostra um uso inadequado de **map()**: embora ele possa tecnicamente alterar uma variável externa, seu foco é o retorno de um novo array, e ele deve ser usado para transformação. A principal conclusão é: **forEach()** para alterar o ambiente externo; **map()** e **filter()** para gerar novos arrays.

---

## 16. Imutabilidade: preservando a fonte de dados para segurança

Pense em um array original como a **receita mestre** de um bolo. Se você altera a receita original (uso de métodos mutáveis como **push()** ou **splice()**), as próximas pessoas que forem fazer o bolo não terão mais a receita original, o que pode causar problemas se o ingrediente adicionado for errado.

A **Imutabilidade** (métodos como **slice()**, **map()**, **filter()**) significa que, em vez de alterar a receita mestre, você cria uma **cópia** dela e faz as mudanças ou extrações na cópia. Dessa forma, a receita original permanece intacta e consistente.

Em programação, isso é fundamental para **previsibilidade**. Se o estado de um array for alterado a partir de vários lugares, a depuração e a manutenção se tornam um pesadelo. Ao usar **map()** para transformar ou **filter()** para selecionar, você garante que qualquer parte do seu código que dependa dos dados originais os terá exatamente como esperado.

Adotar a imutabilidade como boa prática reduz bugs, simplifica a lógica de estado e é um pilar da programação robusta e moderna em JavaScript.

O exemplo utiliza a analogia da "receita mestre". Tanto **map()** quanto **filter()** são aplicados, gerando novos arrays (**ingredientesCaros** e **ingredientesEssenciais**). A mensagem-chave é que, após todas as transformações e seleções, o array **listaDeIngredientes** (a receita original) permanece exatamente o mesmo. Isso conclui a importância de usar métodos que retornam novos arrays para preservar a integridade da fonte de dados, o que é um conceito avançado, mas essencial para a programação web moderna.
