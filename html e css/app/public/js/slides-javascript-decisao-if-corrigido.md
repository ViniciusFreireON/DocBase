# Slides – O conceito de decisão no código (if) – Conteúdo Corrigido

## 1. O conceito de decisão no código (if)

As estruturas condicionais são a espinha dorsal de qualquer linguagem de programação, incluindo o JavaScript, pois permitem que o código tome decisões. Pense nelas como a capacidade do seu programa de se perguntar: "Se essa condição for verdadeira, o que devo fazer? Caso contrário, o que farei?".

Em nosso dia a dia, tomamos decisões a todo momento: se chover, eu pego um guarda-chuva; se estiver calor, eu visto uma camiseta. No JavaScript, a estrutura de controle mais fundamental para expressar essa lógica é o bloco **if** (que significa "se" em inglês).

Ele avalia uma **expressão booleana** — algo que só pode ser verdadeiro (**true**) ou falso (**false**). Se a condição dentro dos parênteses do **if** for avaliada como **true**, o bloco de código imediatamente seguinte (delimitado por chaves **{}**) é executado. Se for **false**, esse bloco é completamente ignorado e o programa segue para a próxima linha de código após o bloco **if**.

Essa é a base de toda a lógica de fluxo de um programa, permitindo que ele se adapte a diferentes situações e dados de entrada. É crucial entender que a condição é sempre um teste, e o resultado desse teste (verdadeiro ou falso) determina o caminho que o código irá seguir.

O código define uma variável **idade** com o valor 18. A estrutura **if (idade >= 18)** testa se 18 é maior ou igual a 18. Como essa condição é verdadeira (**true**), o código dentro das chaves, **console.log("Você é maior de idade e pode dirigir.")**, é executado. Se a idade fosse 16, a condição seria falsa e a mensagem não apareceria. O programa simplesmente pularia o bloco **if** e executaria apenas o comando **console.log("Fim da verificação.")**. É um exemplo simples, mas que demonstra o controle de fluxo: o código não executa todas as linhas de forma linear, mas sim de forma condicional.

---

## 2. Sintaxe e regras do bloco if

A sintaxe do **if** em JavaScript é simples, mas deve ser seguida rigorosamente para evitar erros de execução. Uma estrutura condicional começa sempre com a palavra-chave **if**, seguida por um par de parênteses **()** que obrigatoriamente envolvem a condição a ser testada.

A condição dentro desses parênteses deve ser algo que se resolva em um valor booleano, ou seja, **true** ou **false**. Após os parênteses, vem o corpo da condição, que é delimitado por chaves **{}**. É dentro dessas chaves que colocamos todas as instruções que devem ser executadas apenas se a condição for avaliada como verdadeira.

Embora seja possível omitir as chaves para uma única instrução, é altamente recomendado que você sempre use as chaves, mesmo para uma linha de código. Isso melhora drasticamente a legibilidade e previne erros comuns ao adicionar mais instruções posteriormente.

A clareza do código é vital, especialmente em um ambiente de equipe ou para manutenção futura. O bloco **if** garante que uma parte do seu programa só será ativada sob circunstâncias específicas, controlando o fluxo de execução de maneira precisa.

Neste exemplo, a condição dentro do **if** é composta por duas verificações: **temCredito === true && saldo >= valorCompra**. Ambas precisam ser verdadeiras para que todo o bloco de código dentro das chaves **{}** seja executado. Se a condição composta for verdadeira, o saldo é atualizado e as mensagens de aprovação são exibidas. Perceba que a sintaxe exige a correta colocação dos parênteses para a condição e das chaves para o bloco de instruções. Se **temCredito** fosse **false**, ou se o saldo fosse insuficiente, as linhas de subtração e as mensagens de "Compra aprovada" seriam ignoradas, e o código executaria diretamente a linha "Verificação de compra finalizada.", mostrando a utilidade do **if** no controle de transações.

---

## 3. O caminho alternativo com else

O bloco **else** (que significa "senão" ou "caso contrário" em inglês) é o complemento perfeito para o **if**. Enquanto o **if** lida com o que deve ser feito se a condição for verdadeira, o **else** lida com tudo que deve ocorrer quando a condição é falsa. A palavra-chave **else** nunca pode ser usada sozinha; ela deve sempre vir logo após um bloco **if** fechado.

Em termos de fluxo, o JavaScript avalia a condição do **if** primeiro. Se for **true**, ele executa o código dentro do bloco **if** e, em seguida, pula o bloco **else**, seguindo o fluxo normal do programa. No entanto, se a condição do **if** for **false**, o código dentro do bloco **if** é ignorado, e o fluxo de execução é automaticamente desviado para o bloco **else**.

O **else** não tem condição própria; ele é a garantia de que algo será executado quando a condição principal não for atendida. Usar o **if/else** garante que um dos dois caminhos seja sempre percorrido, o que é fundamental para evitar que o programa fique em um estado indefinido e é crucial para fornecer feedback adequado ao usuário em qualquer cenário.

Neste exemplo, temos a variável **nota** com o valor 5,5 e **mediaParaAprovacao** com 7,0. A condição **nota >= mediaParaAprovacao** é testada, e o resultado é falso (5,5 não é maior ou igual a 7,0). Como a condição do **if** falhou, o JavaScript ignora o primeiro bloco de código e executa o código presente no bloco **else**. Assim, as mensagens de "Atenção! Você foi Reprovado(a)." e "Tente novamente..." são exibidas. Se a nota fosse 8,0, a condição seria verdadeira, o **if** seria executado (Parabéns!) e o **else** seria ignorado. O par **if/else** é um mecanismo de exclusão mútua: apenas um dos dois blocos pode ser executado em uma única passagem.

---

## 4. Aplicações simples do if/else

A combinação **if/else** é a forma mais básica e poderosa de controlar o fluxo de um programa, e sua aplicação é universal. No contexto de sistemas e aplicações web, ela é utilizada para tudo, desde a verificação de credenciais de login até a determinação de impostos ou descontos. Imagine um e-commerce: se o valor total da compra for superior a R$ 200,00, o frete será gratuito; senão (**else**), o frete será cobrado.

Esse é um caso real de uso simples e eficaz. Outra analogia útil é a de um porteiro eletrônico: se a senha digitada for correta, a porta é aberta; senão, um aviso de senha incorreta é emitido. A beleza dessa estrutura está em sua simplicidade: ela força o programador a definir claramente dois caminhos mutuamente exclusivos.

Isso evita ambiguidades no código e garante que, para qualquer dado de entrada, o programa terá uma resposta definida, o que é vital para a robustez e confiabilidade de qualquer aplicação, por mais simples que ela seja.

Lembre-se de que o foco é sempre garantir que o programa faça a coisa certa sob as condições esperadas e forneça uma alternativa adequada (o **else**) para todas as outras condições.

Neste exemplo, estamos simulando a verificação de acesso a um ambiente de aula online. A condição composta **ehDiaDeAula === true && horario === 8** verifica se ambas as subcondições são verdadeiras. Como **ehDiaDeAula** é **true** e **horario** é 8, a condição principal é verdadeira, e o programa executa o bloco **if**, mostrando a mensagem de início da aula. Se, por exemplo, o **horario** fosse alterado para 9, a segunda parte da condição seria falsa, e todo o bloco **if** seria ignorado, fazendo com que o código no **else** fosse executado, informando ao aluno para aguardar. Este código é extremamente simples, mas ilustra como a combinação de variáveis e a lógica condicional controlam o que o usuário vê e pode fazer.

---

## 5. Operadores de comparação fundamentais

Para que uma estrutura **if** possa tomar uma decisão, ela precisa de uma condição que gere um valor booleano (**true** ou **false**). Essa condição é criada usando os **operadores de comparação**, que comparam dois valores e retornam o resultado da comparação.

O operador mais importante, e que deve ser priorizado, é o de **igualdade estrita**, representado por três sinais de igual (**===**). Ele não apenas verifica se os valores são iguais, mas também se eles são do mesmo tipo de dado. Por exemplo, o número 5 é estritamente diferente da string "5", embora tenham o mesmo valor aparente. Outro operador fundamental é o de **diferença estrita** (**!==**), que retorna **true** se os valores não forem iguais ou se forem de tipos diferentes.

O uso dos operadores estritos (**===** e **!==**) é uma boa prática em JavaScript, pois evita comportamentos inesperados causados pela coerção de tipos que ocorre com os operadores de igualdade e diferença simples (**==** e **!=**). Entender esses operadores é a chave para construir condições precisas e evitar bugs lógicos sutis no código.

O código acima demonstra a diferença crucial da comparação estrita. A primeira condição, **numeroA === textoB**, é falsa, porque, embora ambos representem o valor 10, a variável **numeroA** é um número (**number**) e **textoB** é um texto (**string**). Assim, o bloco **else** é executado, indicando a diferença de tipos. Já na segunda comparação, **numeroA !== numeroC**, o teste é se 10 é estritamente diferente de 10. Isso é falso, pois eles são iguais em valor e tipo. Portanto, o bloco **else** é executado, confirmando que eles são estritamente iguais. A saída do código será as duas mensagens do bloco **else**, ilustrando como o operador de igualdade estrita (**===**) força uma correspondência exata, o que é essencial para a lógica do programa.

---

## 6. Mais operadores de comparação numérica

Além dos operadores de igualdade e diferença, as estruturas condicionais frequentemente precisam verificar relações de ordem entre valores numéricos, como "maior que" ou "menor que". Para isso, utilizamos um conjunto adicional de operadores de comparação.

O operador **maior que** (**>**) retorna **true** se o valor à esquerda for estritamente maior que o valor à direita. O operador **menor que** (**<**) faz o oposto.

É muito comum a necessidade de incluir a possibilidade de igualdade na comparação. Para isso, existem os operadores **maior ou igual a** (**>=**) e **menor ou igual a** (**<=**). Por exemplo, para um sistema de descontos que se aplica a compras a partir de R$ 100,00, você usaria o operador **maior ou igual a**: **valorTotal >= 100**. Se usasse apenas **valorTotal > 100**, uma compra de exatos R$ 100,00 ficaria de fora, o que seria um erro lógico. A correta escolha do operador de comparação é o que permite ao código lidar com as fronteiras e limites de forma precisa, garantindo que as regras de negócio sejam aplicadas exatamente como esperado.

Neste caso, a variável **valorSolicitado** (500) é comparada ao **saldoConta** (500) usando o operador **menor ou igual a** (**<=**). Como a condição é verdadeira (500 é igual a 500), a primeira mensagem ("Saque liberado...") é exibida. Se o operador usado tivesse sido apenas **<** (menor que), a condição seria falsa e a mensagem de saldo insuficiente apareceria incorretamente. A segunda estrutura **if** usa o operador **maior que** (**>**) para verificar se o saque excede o **limiteSaque**. Como 500 não é maior que 500, a condição é falsa e o bloco **if** é ignorado, não exibindo a mensagem de limite excedido. O exemplo mostra a importância de escolher entre operadores estritos (**>**) e inclusivos (**>=**) para o controle correto de valores limite.

---

## 7. Combinando condições com operador lógico AND (&&)

Em muitas situações do mundo real, uma decisão não depende de apenas uma, mas de múltiplas condições serem verdadeiras ao mesmo tempo. Para ligar essas condições, usamos os **operadores lógicos**.

O primeiro e mais importante é o operador **AND** (E), representado por dois ampersands (**&&**). O papel do **&&** é avaliar duas ou mais expressões booleanas e só retornar **true** se **todas** as expressões conectadas por ele forem, individualmente, verdadeiras.

Se qualquer uma das condições conectadas pelo **&&** for avaliada como **false**, o resultado final da expressão completa será **false**, e o bloco de código condicional (do **if**, por exemplo) não será executado.

Voltando à analogia do e-commerce, para que um usuário finalize uma compra, o sistema pode verificar se: (1) o carrinho não está vazio **e** (2) o endereço de entrega foi fornecido **e** (3) o pagamento foi aprovado. Apenas se todas essas três condições forem verdadeiras, a compra pode ser concluída. O **&&** é, portanto, a ferramenta para impor regras de negócio que requerem conformidade total com diversos requisitos.

Neste código, temos uma única condição no **if** que é composta por três subcondições ligadas pelo operador **&&**. A primeira (**estaLogado**) é **true**. A segunda (**temPermissao**) também é **true**. A terceira (**pagina === "admin"**) também é **true**. Como todas são verdadeiras, o resultado final da expressão complexa é **true**, e o bloco **if** é executado, exibindo a mensagem de acesso liberado. Se alterássemos **temPermissao** para **false**, por exemplo, a expressão completa se tornaria **false**, mesmo com as outras duas verdadeiras. Nesse caso, o bloco **else** seria executado, pois o **&&** exige que todas as partes sejam verdadeiras para que o resultado final seja positivo.

---

## 8. Operadores lógicos OR (||) e NOT (!)

Além do **AND** (**&&**), temos o operador **OR** (OU), representado por duas barras verticais (**||**), e o operador **NOT** (NÃO), que é o ponto de exclamação (**!**). O operador **||** é o oposto do **&&** em sua exigência: ele retorna **true** se **pelo menos uma** das condições conectadas for verdadeira. Ele só retorna **false** se absolutamente todas as condições forem falsas.

Por exemplo, em uma promoção: o cliente tem desconto se ele for um novo usuário **ou** se o valor da compra for acima de R$ 500,00. Nesses casos, basta que uma das condições se cumpra para que a regra seja ativada. Já o operador **!** (NOT) é um operador de **negação**: ele inverte o valor booleano de uma expressão. Se uma condição é **true**, aplicar o **!** a ela a torna **false**, e vice-versa. Ele é útil para verificar o oposto de uma condição; por exemplo, **if (!estouLogado)** é uma forma concisa de escrever **if (estouLogado === false)**.

A combinação desses três operadores lógicos (**&&**, **||**, **!**) permite criar expressões condicionais que cobrem qualquer complexidade da lógica de negócios.

O primeiro **if** utiliza o operador **||** para verificar múltiplas condições. A condição testa se **diaSemana** é "Sábado" ou "Domingo" ou se **estaFeriado** é **true**. Como **diaSemana** é "Domingo", a segunda condição é verdadeira, e o **||** garante que toda a expressão seja **true**, executando o bloco **if** ("Acesso de manutenção permitido..."). Se **diaSemana** fosse "Segunda-feira" e **estaFeriado** fosse **false**, todas as condições seriam falsas, e o bloco **else** seria executado. O segundo **if** mostra o operador **!** negando a variável **estaFeriado** (que é **false**). A negação de **false** é **true**, então o bloco **if** é executado.

---

## 9. Múltiplas escolhas com else if

Até agora, lidamos com dois caminhos: o que acontece se a condição for verdadeira (**if**) e o que acontece se for falsa (**else**). Mas e quando temos mais de duas possibilidades? É aí que entra a estrutura **else if** (senão se), que permite testar múltiplas condições de forma sequencial e eficiente.

O **else if** é sempre colocado após um **if** e antes de um eventual **else** final. O que é crucial entender é o fluxo de execução: o JavaScript avalia a primeira condição (**if**). Se ela for verdadeira, o bloco de código correspondente é executado, e todo o restante da estrutura (**else if** e **else**) é ignorado.

Se a primeira for falsa, o programa passa para o primeiro **else if** e testa a nova condição. Esse processo continua até que uma condição seja verdadeira ou o programa chegue ao **else** final (que funciona como o "caminho padrão" se nenhuma das condições anteriores for verdadeira).

O **else if** é ideal para classificar um valor em categorias mutuamente exclusivas, como um sistema de notas (A, B, C, D ou F) ou faixas de imposto.

O código simula um sistema de classificação de notas. A **pontuacao** é 85. Primeiro, o **if (pontuacao >= 90)** é testado; ele é falso (85 não é maior ou igual a 90). O programa então avança para o primeiro **else if (pontuacao >= 80)**. Este é verdadeiro (85 é maior ou igual a 80). O bloco de código correspondente ("Nota: B...") é executado. Uma vez que um bloco (**if** ou **else if**) é executado, o JavaScript sai de toda a estrutura condicional. Isso significa que ele ignora os **else if** e o **else** seguintes. Se a nota fosse 95, o primeiro **if** seria verdadeiro, o código mostraria "Nota: A", e o restante seria ignorado, garantindo que o aluno receba apenas uma única classificação correta.

---

## 10. Condições aninhadas (if dentro de if)

Enquanto o **else if** é usado para testar uma sequência de condições que levam a caminhos alternativos, as **condições aninhadas** são usadas para testar uma condição secundária que só faz sentido se uma condição primária já for verdadeira. O aninhamento significa simplesmente colocar uma estrutura **if** ou **if/else** dentro do bloco de código (dentro das chaves **{}**) de outra estrutura **if** ou **else**.

A condição de dentro só será avaliada se a condição de fora (a "mãe") já tiver sido avaliada como **true**. Imagine o login em uma conta: a primeira verificação é se o usuário e a senha estão corretos (**if** externo). Se estiverem corretos, o código pode então aninhar uma segunda verificação para saber se a conta está ativa (**if** interno). Se a senha estiver errada, a verificação da conta ativa sequer precisa ocorrer.

Embora o aninhamento possa ser útil, estruturas muito aninhadas (muitos **if**s um dentro do outro) podem tornar o código difícil de ler e manter. Muitas vezes, é melhor usar o operador lógico **AND** (**&&**) para combinar as condições em uma única linha; mas o aninhamento é ideal quando a segunda condição depende de um processamento que só ocorre se a primeira for verdadeira.

Neste código, temos um aninhamento de até três níveis. A primeira condição, **if (cartaoAtivo === true)**, é testada e é verdadeira. O programa entra no primeiro bloco. Dentro, ele encontra o segundo **if (temSaldo === true)**, que também é verdadeiro. O programa entra neste segundo bloco e encontra o terceiro **if (valor <= 500)**, que é verdadeiro. A mensagem de autorização é exibida. Note que se **cartaoAtivo** fosse **false**, o programa executaria diretamente o **else** mais externo, exibindo "Cartão inativo." e ignorando todas as checagens de saldo e valor aninhadas, pois elas se tornam irrelevantes. Isso demonstra como o aninhamento estabelece uma hierarquia de verificações.

---

## 11. Eficiência: else if vs. aninhamento

A escolha entre usar a estrutura **else if** e o aninhamento (**if** dentro de **if**) é uma decisão de design de código que impacta diretamente a clareza e a eficiência. O **else if** é a melhor escolha para lidar com uma série de opções mutuamente exclusivas sobre o mesmo dado.

Por exemplo, classificando uma pontuação, um número só pode cair em uma única faixa (A, B ou C), tornando o **else if** o mecanismo mais limpo, pois ele para de testar assim que encontra uma condição verdadeira. Isso é mais eficiente. Já o aninhamento é apropriado quando você está refinando uma condição ou estabelecendo uma pré-condição. Ele deve ser usado quando o teste interno depende diretamente de um resultado ou estado estabelecido pelo teste externo. O problema do aninhamento excessivo, conhecido como "flecha do inferno" (Arrow of Hell), é que ele aumenta a indentação e torna o código difícil de rastrear.

Uma regra prática é: se você pode combinar as condições com o operador **&&** (por exemplo, **if (condicaoA && condicaoB)**) sem perder a clareza, evite aninhar. O objetivo é sempre ter o código mais "plano" possível, reservando o aninhamento para quando a lógica realmente exigir uma hierarquia de dependências.

Este exemplo demonstra como o operador lógico **&&** pode substituir o aninhamento em muitos casos, melhorando a leitura. Em vez de escrever **if (produtoDisponivel) { if (clienteVIP) { ... } }**, combinamos as duas condições em uma única linha: **if (produtoDisponivel === true && clienteVIP === true)**. Isso facilita a visualização de que as duas coisas precisam ser verdadeiras simultaneamente. O código usa uma sequência de **if/else if/else** para lidar com as três possibilidades de forma eficiente: a primeira condição é avaliada; se for **true** (produto e cliente VIP), ela executa a prioridade e pula o resto. Se for **false**, ele tenta o **else if** (produto disponível, mas não VIP). Se ambas falharem, o **else** final é executado.

---

## 12. O conceito de curto-circuito (Short-Circuit)

Um detalhe importante na execução de expressões com operadores lógicos em JavaScript é o conceito de **curto-circuito** (Short-Circuit Evaluation). Isso se refere à otimização que o JavaScript e muitas outras linguagens realizam ao avaliar expressões lógicas.

Funciona assim: no operador **AND** (**&&**), se a primeira condição for avaliada como **false**, o JavaScript já sabe que o resultado final de toda a expressão será **false**, independentemente do valor das condições seguintes. Portanto, ele para imediatamente de avaliar o resto da expressão. Ele "curto-circuita" o resto do caminho. Da mesma forma, no operador **OR** (**||**), se a primeira condição for avaliada como **true**, o JavaScript já sabe que o resultado final será **true**, e também para de avaliar as condições subsequentes.

Essa característica não é apenas uma curiosidade, mas um recurso que pode ser usado para escrever um código mais seguro. Por exemplo, podemos testar se uma variável existe antes de tentar acessar uma propriedade dela, evitando um erro. É uma otimização invisível, mas fundamental para o bom desempenho e para a lógica de validação.

O primeiro **if** testa **numero1 > 5** (**true**) e **numero2 < 10** (**true**). Como ambos são verdadeiros, o **&&** exige que ele verifique os dois, e o bloco é executado. No segundo **if**, a condição é **numero1 > 1** (**true**) **ou** **numero2 === 10** (**false**). Pelo princípio do curto-circuito, assim que o JavaScript vê que a primeira parte (**numero1 > 1**) é verdadeira, ele nem sequer avalia a segunda condição com **numero2**, pois já sabe que o resultado total do **||** será **true**. Por fim, a última linha demonstra um uso moderno do **&&** para execução condicional: se **nome.length > 0** for **true**, ele prossegue e executa a instrução **console.log** (exibindo "O nome não está vazio."), mas se fosse **false**, ele pararia no primeiro operando.

---

## 13. Capturando dados para decisão (input do usuário)

A verdadeira utilidade das estruturas condicionais aparece quando o código precisa tomar decisões com base em dados que não são fixos, ou seja, que mudam durante a execução do programa. Um dos tipos mais comuns de dados dinâmicos é o **input do usuário**.

No ambiente de desenvolvimento em JavaScript para o navegador, podemos usar a função simples **prompt()** para solicitar um valor ao usuário. O **prompt()** exibe uma caixa de diálogo onde o usuário pode digitar uma informação. É importante notar que o valor retornado pela função **prompt()** é sempre do tipo **string** (texto), mesmo que o usuário digite um número.

Se você precisar usar esse valor para comparações numéricas (como verificar se a idade é maior que 18), você deve primeiro convertê-lo explicitamente para um tipo numérico (usando funções como **parseInt()** ou **Number()**), caso contrário, suas comparações podem falhar por causa da diferença de tipos que vimos nos operadores estritos.

O processo de capturar a entrada do usuário e aplicá-la em uma estrutura **if/else** é o que transforma um programa estático em uma aplicação interativa e útil.

O código utiliza **prompt()** para coletar a idade do usuário como uma string e armazena em **idadeTexto**. A linha chave é **let idadeNumero = parseInt(idadeTexto)**, que tenta converter essa string em um número inteiro. Essa conversão é obrigatória para que o teste condicional **idadeNumero >= 16** funcione corretamente de forma numérica. Se o usuário digitar "17", **idadeNumero** será o número 17. Como 17 é maior ou igual a 16, a condição é verdadeira e a mensagem de que pode votar é exibida. Se a conversão não fosse feita, a comparação de string com número poderia levar a resultados inesperados, reforçando a necessidade de tratar o input antes de usá-lo na lógica condicional.

---

## 14. Fluxo de decisão baseado em input dinâmico

Quando o programa utiliza dados inseridos pelo usuário, o fluxo de decisão se torna fundamental para determinar a resposta adequada. O objetivo é guiar o usuário de forma lógica, garantindo que o programa reaja corretamente à informação fornecida.

Um caso de uso clássico é um sistema de atendimento automatizado, onde a resposta do programa depende da opção que o usuário escolhe. Por exemplo, o sistema pode perguntar: "Qual é o seu problema: 1- Financeiro, 2- Técnico, 3- Outro?". O código, então, usará uma estrutura **if/else if/else** para direcionar o usuário com base no número digitado.

O valor capturado pelo **prompt()** é lido e, em seguida, é comparado em uma sequência de **else if**s para encontrar a correspondência correta. Se o valor digitado não corresponder a nenhuma das opções válidas, o bloco **else** final entra em ação, oferecendo uma resposta padrão ou solicitando que o usuário tente novamente.

Este tipo de encadeamento de decisões a partir de um input é o que define a interatividade e a utilidade de quase todos os formulários e interfaces de software que usamos.

O código solicita que o usuário escolha uma opção e armazena o valor (como string) na variável **opcao**. A estrutura **if/else if/else** é utilizada para processar essa escolha. A primeira condição, **if (opcao === "1")**, verifica se o texto digitado é "1". Se for, a mensagem de extrato é exibida. Se não for, ele testa o **else if (opcao === "2")**. Se for "2", ele prepara a transferência. Note que a comparação é feita com strings ("1" e "2"), pois o **prompt** retorna texto. Se o usuário digitar "3", "a", ou simplesmente cancelar, o programa não encontrará uma correspondência nas primeiras duas condições e executará o bloco **else**, garantindo que o usuário receba um feedback sobre a opção inválida.

---

## 15. Validação de dados simples (verificando a qualidade do input)

Não basta apenas capturar o dado do usuário; é essencial verificar se esse dado é válido antes de usá-lo na lógica do programa. Esse processo é chamado de **validação de dados**. Uma das validações mais simples e comuns é verificar se o usuário realmente digitou algo e não deixou o campo vazio.

Quando o usuário clica em "OK" no **prompt()** sem digitar nada, ou se clica em "Cancelar", o **prompt()** retorna um valor especial (**null** ou uma string vazia **""**). Se você prosseguir com um valor inválido, seu código pode quebrar ou tomar uma decisão incorreta.

Portanto, a primeira camada de proteção em qualquer **if** que use um input do usuário é geralmente uma checagem de validade. Podemos usar o operador de negação (**!**) ou a comparação de desigualdade estrita (**!==**) para verificar rapidamente se a entrada não é nula ou vazia. Por exemplo, **if (entrada !== null && entrada !== "")** garante que temos algum dado para trabalhar. A validação simples previne erros de execução e melhora a experiência do usuário, pedindo que ele corrija a entrada antes de processá-la.

O código primeiro tenta obter o nome do usuário. Em seguida, a condição **if (nomeUsuario !== "" && nomeUsuario !== null)** verifica duas coisas importantes: (1) se a string não é vazia (**""**) e (2) se o usuário não cancelou a caixa de diálogo (**null**). Se o usuário digitar "Maria", as duas subcondições serão verdadeiras, o **if** será executado e o nome será registrado. Se o usuário apenas clicar em "OK", **nomeUsuario** será **""**, a primeira subcondição será falsa, e o bloco **else** é executado, solicitando o nome novamente. A última linha mostra uma técnica comum: o JavaScript considera uma string vazia (**""**) como falsa em um contexto booleano. Assim, **if (nomeUsuario)** é o mesmo que **if (nomeUsuario !== "" && nomeUsuario !== null)** na maioria dos casos, por ser mais conciso, mas a forma explícita é mais clara para quem está aprendendo.

---

## 16. Aplicação completa: decisão e validação juntas

Para consolidar o aprendizado, vamos combinar as estruturas condicionais (**if/else if/else**), os operadores lógicos (**&&**, **||**) e a validação de dados simples em um único fluxo. Um programa robusto sempre começa pela validação.

A primeira coisa a fazer após coletar um input é verificar sua validade. Somente depois de garantir que o dado existe e está no formato correto, o programa deve prosseguir para a lógica de decisão.

Por exemplo, em uma calculadora de frete: (1) Primeiro, verificamos se o usuário digitou um CEP válido e se o peso da encomenda foi fornecido. (2) Se a validação for positiva, passamos para a lógica de decisão: se o peso for superior a 10 kg **e** a distância for longa, aplica-se a Tarifa 1; senão, se a distância for curta, aplica-se a Tarifa 2; senão (**else**), aplica-se a Tarifa Padrão.

O encadeamento de validação inicial seguido por uma série de **else if**s é a arquitetura mais comum e confiável para sistemas que dependem da entrada de dados para tomar decisões complexas. Isso garante que o programa não só tome a decisão correta, mas também lide de forma adequada com entradas incorretas.
