# Relatório de Correções – Slides JavaScript

## Resumo geral

Este relatório documenta as **correções de erros** e **ajustes de redação e formatação** aplicados aos slides de JavaScript. São catorze documentos: **Introdução ao JavaScript**, **O conceito de decisão no código (if)**, **Introdução à automação com repetição**, **O laço for**, **O que são arrays (listas)**, **O que são funções e por que usá-las**, **Push e pop: métodos de array (avançados)**, **O que são objetos literais em JavaScript**, **O que é o DOM? A estrutura da página web**, **O que são eventos no JavaScript?**, **O que é local storage? (caixa de lembranças do navegador)**, **O que é uma API? (o garçom da web)**, **O que são POST, PUT e DELETE?** e **Introdução ao projeto final (CRUD básico)**.

| Documento | Arquivo | Tópicos |
|-----------|---------|---------|
| Introdução ao JavaScript | slides-javascript-introducao-corrigido.md | 16 |
| Decisão no código (if) | slides-javascript-decisao-if-corrigido.md | 16 |
| Automação com repetição (laços) | slides-javascript-repeticao-loops-corrigido.md | 16 |
| O laço for | slides-javascript-laco-for-corrigido.md | 16 |
| O que são arrays (listas) | slides-javascript-arrays-corrigido.md | 16 |
| O que são funções e por que usá-las | slides-javascript-funcoes-corrigido.md | 16 |
| Push e pop: métodos de array (avançados) | slides-javascript-arrays-metodos-avancados-corrigido.md | 16 |
| O que são objetos literais em JavaScript | slides-javascript-objetos-literais-corrigido.md | 16 |
| O que é o DOM? A estrutura da página web | slides-javascript-dom-corrigido.md | 16 |
| O que são eventos no JavaScript? | slides-javascript-eventos-corrigido.md | 16 |
| O que é local storage? (caixa de lembranças do navegador) | slides-javascript-local-storage-corrigido.md | 16 |
| O que é uma API? (o garçom da web) | slides-javascript-api-corrigido.md | 16 |
| O que são POST, PUT e DELETE? | slides-javascript-post-put-delete-corrigido.md | 16 |
| Introdução ao projeto final (CRUD básico) | slides-javascript-projeto-final-crud-corrigido.md | 16 |

---

# Parte I – Slides Introdução ao JavaScript

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Título do Slide 1 | **O Que é** JavaScript e Sua Função no Navegador | **O que é** JavaScript e sua função no navegador |
| Observação | Em títulos, a conjunção "que" (e pronomes relativos) costuma ficar em minúsculo conforme convenções de redação técnica e didática. Ajuste de "Sua Função" para "sua função" para uniformizar o estilo do título. |

---

## 2. Correção de redundância

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 5 – Variáveis e **let** | "variável cujo valor pode ser alterado **(variável)**" | "variável cujo valor pode ser alterado **(mutável)**" |
| Observação | A palavra "variável" estava repetida na mesma frase; "mutável" transmite o mesmo significado sem redundância. |

---

## 3. Numeração em listas

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 9 – Comentários | **1.Comentários** de Linha Única | **1.** Comentários de linha única |
| Slide 9 – Comentários | **2.Comentários** de Múltiplas Linhas | **2.** Comentários de múltiplas linhas |
| Observação | Inclusão de espaço após o número e padronização da capitalização nos itens da lista. |

---

## 4. Nomenclatura e registro de linguagem

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 3 – Integração HTML/JS | "para **'linkar'** o código externo" | "para **vincular** o código externo" |
| Observação | "Linkar" é anglicismo informal; em material didático, "vincular" (ou "associar") é mais adequado. |

---

## 5. Formatação e estrutura Markdown

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Tags HTML no texto | Uso de **&lt;script&gt;**, **&lt;body&gt;** etc. em trechos em prosa e de `` `script` ``, `` `button` `` para menções a elementos, evitando conflito com Markdown. |
| Termos técnicos | Uso consistente de **negrito** para palavras-chave (**let**, **const**, **console.log**, **DOM**, **onclick**, etc.). |
| Código | Nomes de funções, variáveis e propriedades em **negrito** nas explicações; exemplos de código mantidos em prosa quando não há bloco de código. |
| Slide 16 – Conclusão | "Chegamos ao ponto **onde**" corrigido para "ao ponto **em que**" (padrão culto: "ponto em que" para ideia de momento/situação). |

---

## 6. Pequenos ajustes de clareza

| Local | Ajuste |
|-------|--------|
| Slide 6 – **const** | Texto "(A linha comentada ... mostra que reatribuir)" ajustado para "(A linha comentada ..., se executada, mostraria que reatribuir)" para deixar claro que se trata de um exemplo hipotético. |
| Slide 14 – Preparação botão | Referência "a função que criamos no Slide 11" ajustada para **Slide 12** (função **mudarStatus** aparece no slide 12 – Contextualização e fluxo do código). |
| Slide 15 – onclick | Fluxo numerado (1, 2, 3) mantido e levemente reestruturado em uma única frase para leitura contínua. |

---

## 7. Resumo consolidado

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / título | 1 (O Que → O que; Sua → sua) |
| Redundância | 1 (variável → mutável) |
| Numeração em lista | 2 (1. e 2. com espaço) |
| Nomenclatura | 1 (linkar → vincular) |
| Formatação Markdown e consistência | Aplicada em todo o documento |
| Clareza e referência de slide | 2 (exemplo const; número do slide 11 → 12) |

---

Todas as alterações foram feitas preservando o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original, adequando apenas erros e formatação para uso em aula ou estudo.

---

# Parte II – Slides: O conceito de decisão no código (if)

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-decisao-if-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia, quebras de linha, pontuação, gramática, formatação Markdown, clareza |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Título Slide 1 e demais | **O Conceito** de Decisão no Código (if) | **O conceito** de decisão no código (if) |
| Observação | Padronização de título em estilo frase (apenas primeira palavra e nomes próprios em maiúscula). |

---

## 2. Quebras de linha e palavras partidas

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 – bloco if | "se" , em inglês) (quebra entre "se" e "em inglês") | "se" em inglês) (frase unificada) |
| Slide 4 – e-commerce | "um e- commerce" (palavra partida) | "um e-commerce" |
| Slide 4 – valor | "R$" e "200,00" em linhas separadas | "R$ 200,00" |
| Slide 8 – vice-versa | "vice- versa" (palavra partida) | "vice-versa" |
| Slide 8 – if (estouLogado) | "if" e "(estouLogado" em linhas separadas | "if (estouLogado)" |
| Slide 15 – Cancelar | "Cancelar" e "," em linhas separadas | "Cancelar", o prompt() |

---

## 3. Pontuação

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 5 – string "5" | string "5" , embora | string "5", embora |
| Slide 15 – prompt | "Cancelar" , o prompt() | "Cancelar", o prompt() |

---

## 4. Gramática e registro

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 4 – Lembre-se | Lembre-se **que** o foco | Lembre-se **de que** o foco |
| Observação | Após "Lembre-se", o padrão culto é "de que" quando se introduz oração. | |
| Slide 4 – alternativa | alternativa **graciosa** (o else) | alternativa **adequada** (o else) |
| Observação | "Graciosa" soa estrangeirismo; "adequada" transmite melhor a ideia de resposta apropriada em texto didático. | |

---

## 5. Formatação e estrutura Markdown (Decisão if)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **if**, **else**, **else if**, **===**, **!==**, **&&**, **||**, **!**, **prompt()**, **parseInt()**, etc. |
| Nomes de variáveis e funções | Em **negrito** nas explicações em prosa (ex.: **idade**, **nota**, **ehDiaDeAula**, **opcao**). |
| Números decimais | "5.5" e "7.0" no texto ajustados para "5,5" e "7,0" quando em contexto de redação em português (Slide 3), mantendo notação de código quando aplicável. |

---

## 6. Resumo consolidado – Decisão (if)

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / título | 1 (O Conceito → O conceito) |
| Quebras de linha / palavras partidas | 6 (se em inglês, e-commerce, R$, vice-versa, if, Cancelar) |
| Pontuação | 2 (vírgula após "5", após "Cancelar") |
| Gramática / registro | 2 (Lembre-se de que; graciosa → adequada) |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de decisão (if) preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte III – Slides: Introdução à automação com repetição (laços)

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-repeticao-loops-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia, quebras de linha, formatação Markdown, estrutura (unificação break) |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Título Slide 1 | Introdução à **A**utomação com Repetição | Introdução à **a**utomação com repetição |
| Observação | Padronização de título em estilo frase (apenas primeira palavra em maiúscula). |

---

## 2. Quebras de linha e operadores

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 5 – Condições | "operadores de comparação como <, >," em uma linha e "===" e ", ou !==" em linhas separadas | "operadores de comparação como **<**, **>**, **===** ou **!==**" em texto contínuo |

---

## 3. Numeração e estrutura (Loops infinitos)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 6 – Cuidados com loops infinitos | Os dois motivos (1) e (2) que estavam em linhas separadas foram integrados em um único parágrafo com "(1)" e "(2)" para leitura contínua. |

---

## 4. Estrutura do slide do break

| Local | Ajuste realizado |
|-------|------------------|
| Slides 13 e 14 (originais) | O texto teórico sobre o comando **break** e o título "O Uso do break para Saída Imediata" com seu exemplo estavam fragmentados. No documento corrigido, foram unificados em um **único slide** (13): "O comando break para saída imediata", contendo a teoria e o exemplo. O slide 14 passou a ser "O comando continue para pular iterações". |

---

## 5. Formatação e consistência Markdown (Repetição/laços)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **while**, **do while**, **break**, **continue**, **loop infinito**, **contador**, **flag**, **Math.random**, etc. |
| Variáveis e expressões | Nomes de variáveis (**contador**, **velocidade**, **desejaContinuar**, **numeroBusca**, **foraDoLaco**) e condições em **negrito** nas explicações. |

---

## 6. Resumo consolidado – Automação com repetição (laços)

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / título | 1 (Automação → automação) |
| Quebras de linha / operadores | 1 (Slide 5: <, >, ===, !== em linha única) |
| Numeração / parágrafo | 1 (Slide 6: (1) e (2) integrados) |
| Estrutura (break) | 1 (teoria + exemplo do break em um slide) |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de automação com repetição preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte IV – Slides: O laço for

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-laco-for-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia, numeração em listas, redação, pontuação, estrutura (tabuada), clareza (escada) |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Título Slide 1 | Um **L**aço de Repetição / **L**aço | O que é um **l**aço de repetição? / O **l**aço for |
| Observação | Padronização: "laço" em minúsculo em títulos (estilo frase). |

---

## 2. Numeração em listas

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 2 – Sintaxe | **1.**Inicialização, **2.**Condição, **3.**Expressão Final | **1.** Inicialização, **2.** Condição, **3.** Expressão Final (espaço após o número) |
| Slide 8 – Combinação | **1.**Inicialização, **2.**Condição, **3.**Expressão Final | **1.** Inicialização, **2.** Condição, **3.** Expressão Final |
| Slide 11 – Múltiplas condições | **1.**O primeiro if, **2.**Se não for, **3.**Se não for | **1.** O primeiro..., **2.** Se não..., **3.** Se não... |

---

## 3. Redação e pontuação

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 | "Esse controle é feito **através de** um contador" | "Esse controle é feito **por meio de** um contador" |
| Slide 2 | "ex: i < 10;" | "ex.: **i < 10;**" (abrev. com ponto, código em negrito) |

---

## 4. Estrutura do slide da tabuada

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | O parágrafo introdutório sobre "A repetição controlada do laço for..." e o título "Algoritmos Simples: Geração de Tabuadas" com o exemplo estavam fragmentados. No documento corrigido, foram unificados em um **único slide** (13): "Algoritmos simples: geração de tabuadas", contendo a teoria e o exemplo. |

---

## 5. Clareza (exemplo da escada)

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 16 – Analogia | "O resultado no console será a escada: * **" (texto incompleto ou cortado) | "O resultado no console será a escada de asteriscos: uma linha com *, depois **, depois *** e ****." (descrição completa do output). |

---

## 6. Formatação e consistência Markdown (Laço for)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **for**, **if**, **break**, **continue**, **i++**, **contador**, **acumulador**, etc. |
| Variáveis e expressões | Nomes de variáveis (**i**, **contador**, **volta**, **numero**, **valor**, **total**, **mensagemFinal**, **degrau**) em **negrito** nas explicações. |

---

## 7. Resumo consolidado – O laço for

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / título | 1 (Laço → laço) |
| Numeração em lista | 6 (1., 2., 3. com espaço em três slides) |
| Redação / pontuação | 2 (através de → por meio de; ex: → ex.:) |
| Estrutura (tabuada) | 1 (teoria + exemplo em um slide) |
| Clareza (escada) | 1 (descrição do output completada) |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento do laço for preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte V – Slides: O que são arrays (listas)

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-arrays-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia, quebras de linha, pontuação, gramática, estrutura (slide soma/média), formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Título Slide 1 e demais | O que são **A**rrays (Listas) / **O** Conceito de Índice | O que são **a**rrays (listas) / **o** conceito de índice |
| Observação | Padronização: "arrays" e "listas" em minúsculo em títulos (estilo frase). |

---

## 2. Quebras de linha e texto partido

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 3 – Criação | **["Maria"** , **"João"** , **"Ana"]** em linhas separadas | **["Maria", "João", "Ana"]** em texto contínuo |
| Slide 5 – Modificação | "o sinal de igual," em uma linha e "=)" em outra | "o sinal de igual (**=**)" |
| Slide 5 – Exemplo | **nomes[2] =** e **"Novo Nome"** e **. Esta ação** em linhas separadas | **nomes[2] = "Novo Nome"**. Essa ação... |
| Slide 12 – shift() | "onde o" e "primeiro item" (FIFO) em linhas separadas | "em que o primeiro item a entrar é o primeiro a sair" em texto contínuo |

---

## 3. Abreviação e pontuação

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 | **ex:** nota1 | **ex.:** nota1 (abrev. com ponto) |
| Slide 15 | "ex: um array de 3 elementos" | "ex.: um array de 3 elementos" |

---

## 4. Ortografia e numeral

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 9 – push() | "4o elemento" | "4º elemento" |
| Slide 13 – Cálculo | "calcula a media" | "calcula a **média**" |

---

## 5. Gramática

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 16 – Comparação | Lembre-se **que** todos eles alteram | Lembre-se **de que** todos eles alteram |
| Observação | Após "Lembre-se", o padrão culto é "de que" quando se introduz oração. |

---

## 6. Estrutura do slide (soma e média)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | O parágrafo introdutório sobre o loop **for** para soma e média e o título "Aplicação Prática de for: Cálculo Simples" com o exemplo estavam fragmentados. No documento corrigido, foram unificados em um **único slide** (13): "Aplicação prática de for: cálculo simples (soma e média)", contendo a teoria e o exemplo. |

---

## 7. Formatação e consistência Markdown (Arrays)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **array**, **length**, **push()**, **pop()**, **unshift()**, **shift()**, **for**, **while**, **índice**, **LIFO**, **FIFO**, etc. |
| Variáveis e códigos | Nomes de variáveis e expressões (**listaDeFrutas**, **meuArray[2]**, **planetas**, **somaTotal**, **vendasSemanais**) em **negrito** nas explicações. |

---

## 8. Resumo consolidado – Arrays (listas)

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / título | 1 (Arrays → arrays; Conceito → conceito) |
| Quebras de linha | 4 (exemplo ["Maria"...], igual =, nomes[2], FIFO) |
| Abreviatura / pontuação | 2 (ex: → ex.:) |
| Ortografia / numeral | 2 (4o → 4º; media → média) |
| Gramática | 1 (Lembre-se de que) |
| Estrutura (soma/média) | 1 (teoria + exemplo em um slide) |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de arrays preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte VI – Slides: O que são funções e por que usá-las

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-funcoes-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia, concordância, redação, quebras de linha, gramática, estrutura (slide reutilização), formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Título Slide 1 e demais | O **Q**ue **S**ão **F**unções e **P**or **Q**ue Usá-las | O **q**ue são **f**unções e **p**or que usá-las |
| Observação | Padronização de título em estilo frase (apenas primeira palavra em maiúscula). |

---

## 2. Concordância verbal

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 | "podem ser **chamados** a qualquer momento" | "podem ser **chamadas** a qualquer momento" |
| Observação | "Funções" é substantivo feminino plural; o particípio deve concordar: "chamadas". |

---

## 3. Redação e registro

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 2 – Sintaxe | "**através da** Declaração de Função" | "**por meio da** Declaração de Função" |
| Slide 1 – Reutilização | "**ao invés de** repetir" | "**em vez de** repetir" |
| Observação | "Por meio da" e "em vez de" são preferíveis em texto técnico/didático. |

---

## 4. Quebras de linha e texto partido

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 2 | "palavra-**\n**chave" | "**palavra-chave**" em texto contínuo |
| Slide 2 | "Function **\n\n** Declaration" | "Function Declaration" |
| Slide 6 – Argumentos | "e **\n\n**o valor que deveria" | "e o valor que deveria" |

---

## 5. Gramática

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 15 – Funções puras | "**1. Dado** os mesmos argumentos" | "**1. Dados** os mesmos argumentos" |
| Observação | Concordância: com "argumentos" (plural), o particípio deve ficar no plural: "Dados os mesmos argumentos". |

---

## 6. Estrutura do slide (reutilização)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | O parágrafo introdutório sobre reutilização de código ("A reutilização de código é, de longe...") e o título "Reutilização de Código: A Força da Função" com o exemplo estavam fragmentados. No documento corrigido, foram unificados em um **único slide** (13): "Reutilização de código: a força da função", contendo a teoria e o exemplo. |

---

## 7. Formatação e consistência Markdown (Funções)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **function**, **return**, **parâmetros**, **argumentos**, **escopo**, **hoisting**, **let**, **const**, **undefined**, etc. |
| Variáveis e funções | Nomes de funções e variáveis (**saudacaoBasica**, **calcularDobro**, **exibirMensagemPersonalizada**, **formatarNome**, **calcularAreaQuadrado**, **calcularMedia**, **gerarIdUnico**, **multiplicar**, **elevarAoQuadrado**) em **negrito** nas explicações. |

---

## 8. Resumo consolidado – Funções

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / título | 1 (O Que São → O que são; Por Que → por que) |
| Concordância | 1 (chamados → chamadas) |
| Redação | 2 (através da → por meio da; ao invés de → em vez de) |
| Quebras de linha | 3 (palavra-chave, Function Declaration, e o valor) |
| Gramática | 1 (Dado → Dados os mesmos argumentos) |
| Estrutura (reutilização) | 1 (teoria + exemplo em um slide) |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de funções preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte VII – Slides: Push e pop e métodos de array (avançados)

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-arrays-metodos-avancados-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia/título, notação (splice), quebras de linha, clareza (pilha/fila), estrutura (map com objetos), formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 e demais | Push e **P**op: **A**dicionando e **R**emovendo | Push e **p**op: **a**dicionando e **r**emovendo no final |
| Observação | Padronização de títulos em estilo frase (apenas primeira palavra em maiúscula quando aplicável). |

---

## 2. Notação e formatação de código

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 3 – Splice | "Entender **$splice()$**" (notação LaTeX/math) | "Entender o **splice()**" (negrito Markdown) |

---

## 3. Quebras de linha e texto partido

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 14 – Filter | "setor de \"TI\"\n\n," e "ou os produtos" em linhas separadas | "setor de \"TI\", ou os produtos" em texto contínuo |
| Slide 14 – Filter | "&& para \"e\"\n\n, \|\| para \"ou\"" | "**&&** para \"e\", **\|\|** para \"ou\"" em texto contínuo |

---

## 4. Clareza (slide 1 – push/pop)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 1 – Exemplo | O texto original mencionava "simulando uma fila onde novos itens entram no fim e são processados (removidos) em sequência, ou uma pilha onde a última tarefa...". Como **push()** e **pop()** implementam comportamento de **pilha** (LIFO), a descrição foi simplificada para destacar a pilha (última tarefa adicionada é a primeira a ser feita), evitando confusão com fila (FIFO). |

---

## 5. Estrutura do slide (Map com objetos)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | O parágrafo introdutório sobre o poder de **map()** com arrays de objetos e o título "Transformação Complexa: Map com Objetos" com o exemplo estavam fragmentados. No documento corrigido, foram unificados em um **único slide** (13): "Transformação complexa: map com objetos", contendo a teoria e o exemplo. |

---

## 6. Formatação e consistência Markdown (Métodos de array)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **push()**, **pop()**, **shift()**, **unshift()**, **splice()**, **slice()**, **indexOf()**, **includes()**, **forEach()**, **map()**, **filter()**, **LIFO**, **mutável**, **imutável**, etc. |
| Variáveis e códigos | Nomes de variáveis e arrays (**tarefas**, **removido**, **convidados**, **frutas**, **notasComBonus**, **produtosEmEstoque**, **clientesVIPS**, **precosFinais**) em **negrito** nas explicações. |

---

## 7. Resumo consolidado – Métodos de array (avançados)

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / título | 1 (Push e Pop → Push e pop; Adicionando → adicionando) |
| Notação (splice) | 1 ($splice()$ → **splice()**) |
| Quebras de linha | 2 (setor "TI"; && e \|\|) |
| Clareza (pilha/fila) | 1 (slide 1 simplificado para pilha LIFO) |
| Estrutura (map com objetos) | 1 (teoria + exemplo em um slide) |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de métodos de array preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte VIII – Slides: O que são objetos literais em JavaScript

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-objetos-literais-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia/título, concordância (string), typo (vírgula), quebras de linha, numeração (1.–5.), estrutura (Caso de uso 1), formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 e demais | O que são **O**bjetos **L**iterais | O que são **o**bjetos **l**iterais |
| Observação | Padronização de título em estilo frase (apenas primeira palavra em maiúscula). |

---

## 2. Concordância e redação

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 2 – Sintaxe | "o string" | "a string" (concordância com "string", substantivo feminino em português técnico) |

---

## 3. Typo na descrição da sintaxe

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 2 – Sintaxe | "cada par é separado do próximo por uma vírgula (**.**)" | "cada par é separado do próximo por uma vírgula (**,**)" |
| Observação | O símbolo correto da vírgula é a vírgula (**,**), não o ponto. |

---

## 4. Quebras de linha e texto partido

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 9 – Objetos dentro de arrays | Exemplo com `{ nome: 'Mouse'` e `, preco: 50 }` e `'Teclado'` e `, preco: 150` partidos em linhas | Texto contínuo: **{ nome: 'Mouse', preco: 50 }** e **{ nome: 'Teclado', preco: 150 }** |

---

## 5. Numeração em listas (slide 12 – Complexidade máxima)

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 12 | **1.**pedidos[0], **2..**itens, **3.**[0], **4..**produto, **5..**nome (sem espaço ou com ponto duplo) | **1.** pedidos[0], **2.** .itens, **3.** [0], **4.** .produto, **5.** .nome (espaço após o número) |
| Observação | Inclusão de espaço após o número na lista de passos de acesso. |

---

## 6. Estrutura do slide (Caso de uso 1)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | O parágrafo introdutório sobre modelagem de entidades (usuário) e o título "Caso de Uso 1: Modelando um Usuário" com o exemplo estavam fragmentados. No documento corrigido, foram unificados em um **único slide** (13): "Caso de uso 1: modelando um usuário", contendo a teoria e o exemplo. |

---

## 7. Formatação e consistência Markdown (Objetos literais)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **objeto**, **chave**, **valor**, **notação de ponto**, **notação de colchetes**, **delete**, **this**, **método**, **propriedade**, **undefined**, etc. |
| Código e variáveis | Nomes de variáveis e propriedades (**livro**, **item**, **cliente**, **calculadora**, **listaProdutos**, **perfil**, **usuario**, **pedidos**, **produto**) em **negrito** nas explicações quando apropriado. |

---

## 8. Resumo consolidado – Objetos literais

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / título | 1 (Objetos Literais → objetos literais) |
| Concordância | 1 (o string → a string) |
| Typo (vírgula) | 1 (.** → .,**) |
| Quebras de linha | 1 (exemplos { nome: 'Mouse', preco } em texto contínuo) |
| Numeração (1.–5.) | 1 (espaço após número no slide 12) |
| Estrutura (Caso de uso 1) | 1 (teoria + exemplo em um slide) |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de objetos literais preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte IX – Slides: O que é o DOM? A estrutura da página web

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-dom-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia/títulos (estilo frase), pontuação (DOM. Por), quebras de linha, numeração (classList, createElement, insertAdjacentElement), redação (appendChild), tags HTML (evitar conflito Markdown), formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 e demais | O que é o DOM? **A E**strutura da **P**ágina **W**eb | O que é o DOM? **A estrutura** da **página web** |
| Slide 2 | DOM vs. HTML: **E**ntendendo a **D**iferença | DOM vs. HTML: **entendendo a diferença** |
| Slide 4 | Nós, Elementos e Hierarquia (**P**ai, **F**ilho, **I**rmão) | Nós, elementos e hierarquia (**pai, filho, irmão**) |
| Slide 5 | Seleção I: getElementById (**A** Busca **E**xata) | Seleção I: getElementById (**a busca exata**) |
| Slide 6 | (**A** Versatilidade...) | (**a versatilidade** do seletor CSS) |
| Slides 8, 9, 10, 11, 12, 13, 14, 15, 16 | Iniciais em maiúscula em subtítulos | Padronização em estilo frase (ex.: "Outros métodos antigos", "Modificação de texto I", "Gerenciamento de classes", "Inserção em posições específicas") |

---

## 2. Pontuação e espaçamento

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 10 – innerHTML | "no DOM.**P**or ser" | "no DOM. **Por** ser" (espaço após o ponto final) |

---

## 3. Quebras de linha e texto partido

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 11 – setAttribute | setAttribute('class' , 'nova-classe') com quebras | **setAttribute('class', 'nova-classe')** em texto contínuo |
| Slide 13 – createElement | 'div' , 'p' , 'a' , 'li' partidos em várias linhas | **'div'**, **'p'**, **'a'**, **'li'** em texto contínuo |
| Slide 14 – appendChild | "e o\n\nlista.appendChild(novoItem) o insere" | "e **lista.appendChild(novoItem)** o insere" (remoção da quebra e do "o" solto antes de "lista") |

---

## 4. Numeração em listas

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 12 – classList | 1.add(classe), 2.remove(classe), 3.toggle(classe), 4.contains(classe) | **1.** add(classe), **2.** remove(classe), **3.** toggle(classe), **4.** contains(classe) (espaço após o número) |
| Slide 13 – createElement | 1.Criação, 2.Configuração, 3.Anexação | **1.** Criação, **2.** Configuração, **3.** Anexação |
| Slide 16 – insertAdjacentElement | 1.beforebegin, 2.afterbegin, 3.beforeend, 4.afterend | **1.** beforebegin, **2.** afterbegin, **3.** beforeend, **4.** afterend |

---

## 5. Tags HTML no texto (prosa)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Uso de **&lt;html&gt;**, **&lt;body&gt;**, **&lt;head&gt;**, **&lt;div&gt;**, **&lt;ul&gt;**, **&lt;li&gt;**, **&lt;script&gt;**, **&lt;h1&gt;**, **&lt;b&gt;** etc. em trechos em prosa, para evitar que o Markdown interprete as tags e quebre a renderização. |

---

## 6. Formatação e consistência Markdown (DOM)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **DOM**, **document**, **getElementById**, **querySelector**, **querySelectorAll**, **NodeList**, **HTMLCollection**, **textContent**, **innerHTML**, **setAttribute**, **getAttribute**, **classList**, **add**, **remove**, **toggle**, **contains**, **createElement**, **appendChild**, **insertAdjacentElement**, **element.style**, **camelCase**, **XSS**, etc. |
| Código e variáveis | Nomes de métodos, propriedades e variáveis em **negrito** nas explicações quando apropriado. |

---

## 7. Resumo consolidado – DOM

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / títulos | Vários (estilo frase em todos os títulos de slide) |
| Pontuação | 1 (DOM. Por) |
| Quebras de linha | 3 (setAttribute, createElement, appendChild) |
| Numeração (1.–4.) | 3 blocos (classList, passos createElement, posições insertAdjacentElement) |
| Tags HTML | Uso de &lt; &gt; em todo o documento |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de DOM preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte X – Slides: O que são eventos no JavaScript?

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-eventos-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia/títulos (estilo frase), quebras de linha ('click', 'submit'), redação (Lembre-se de que), HTML5, tags HTML em prosa, estrutura (slide Funções anônimas), formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 e demais | O que são **E**ventos no JavaScript? | O que são **e**ventos no JavaScript? |
| Slide 2 | Tipos de **E**ventos **C**omuns e **O**corrências | Tipos de **eventos comuns e ocorrências** |
| Slide 4 | A Função de Resposta... e o **O**bjeto **E**vento | A função de resposta... e o **objeto evento** |
| Slide 5 | O **E**vento **S**ubmit e **S**ua **I**mportância | O **evento submit** e **sua importância** |
| Demais slides | Iniciais em maiúscula em subtítulos | Padronização em estilo frase (ex.: "Acessando dados dos formulários", "Validação simples", "Funções anônimas e setas", "Respondendo a múltiplos elementos") |

---

## 2. Quebras de linha e texto partido

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 3 – addEventListener | 'click' , 'mouseover' , 'submit' partidos em várias linhas | **'click'**, **'mouseover'**, **'submit'** em texto contínuo |

---

## 3. Redação e convenções

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 7 | "HTML 5" | "HTML5" (forma consolidada) |
| Slide 15 | "Lembre-se que" | "Lembre-se de que" (padrão culto: lembrar-se de que + oração) |
| Slide 6 | "(**&lt;input&gt;**...), possua" | "(**&lt;input&gt;**...) possua" (remoção da vírgula entre parêntese e verbo) |

---

## 4. Tags HTML no texto (prosa)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Uso de **&lt;button type="submit"&gt;** , **&lt;form&gt;** , **&lt;a&gt;** , **&lt;input&gt;** , **&lt;textarea&gt;** , **&lt;select&gt;** , **&lt;option&gt;** , **&lt;style&gt;** em trechos em prosa, para evitar que o Markdown interprete as tags. |

---

## 5. Estrutura do slide (Funções anônimas e setas)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | No texto original, o parágrafo introdutório ("Ao usar o addEventListener()...") vinha antes do título "Funções Anônimas e Setas (Arrow Functions)". No documento corrigido, o slide foi organizado com o título primeiro ("Funções anônimas e setas (arrow functions)"), seguido da teoria e do exemplo, mantendo um único slide coerente. |

---

## 6. Formatação e consistência Markdown (Eventos)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **eventos**, **handler**, **addEventListener**, **onclick**, **click**, **submit**, **input**, **change**, **e.target**, **e.preventDefault()**, **.value**, **.checked**, **.length**, **.textContent**, **.classList**, **.toggle()**, **.contains()**, **.disabled**, **querySelectorAll**, **NodeList**, **forEach**, **arrow function**, **.style**, **camelCase**, etc. |
| Código e variáveis | Nomes de métodos, propriedades e variáveis em **negrito** nas explicações quando apropriado. |

---

## 7. Resumo consolidado – Eventos

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / títulos | Vários (estilo frase em todos os títulos) |
| Quebras de linha | 1 (tipos de evento 'click', 'mouseover', 'submit') |
| Redação | 2 (Lembre-se de que; HTML5) |
| Pontuação | 1 (vírgula antes de "possua" no slide 6) |
| Tags HTML | Uso de &lt; &gt; em todo o documento |
| Estrutura (slide 13) | 1 (título + teoria + exemplo em ordem lógica) |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de eventos preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte XI – Slides: O que é local storage? (caixa de lembranças do navegador)

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-local-storage-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia/títulos (estilo frase), quebras de linha, redação (Ao invés de → Em vez de), exemplo getItem (valores 28/29), numeração (passos 1.–3.), estrutura (slide Exemplo prático tema), formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 e demais | O que é **L**ocal **S**torage? (**C**aixa de **L**embranças do **N**avegador) | O que é **local storage**? (**caixa de lembranças** do **navegador**) |
| Slide 2 | **S**torage **W**eb: **L**ocal vs. **S**ession (**C**omparações **E**ssenciais) | **Storage web**: **local** vs. **session** (**comparações essenciais**) |
| Slides 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | Iniciais em maiúscula em subtítulos | Padronização em estilo frase (ex.: "Limite de armazenamento", "setItem(): guardando a primeira informação", "getItem(): recuperando o valor", "Exemplo prático: salvando uma preferência", "Boas práticas: o que guardar e onde") |

---

## 2. Quebras de linha e texto partido

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 4 – chave-valor | "resultando em \"105\" , e não a soma matemática 15" com quebra entre "105" e ", e não" | **"105"**, e não a soma matemática **15** em texto contínuo |
| Slide 5 – setItem | "app_config_theme" e "para que seu código" partidos em linhas | **"user_email"** ou **"app_config_theme"** em texto contínuo antes de "para que seu código" |
| Slide 9 – JSON.stringify | "como {\"nome\":\"Ana\" , \"idade\": 30}" com quebra | **{"nome":"Ana","idade":30}** em texto contínuo |

---

## 3. Redação

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 9 – JSON | "Ao invés de" | "Em vez de" (padrão preferível em redação técnica) |

---

## 4. Exemplo getItem() (slide 7 – valores numéricos)

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 7 | "o valor é lido como a string \" \"" e "para o número inteiro ." e "soma de + 1, resultando em 29" (valores em branco) | Preenchimento dos valores: string **"28"**, número inteiro **28**, soma **28 + 1** resultando em **29**, para que o exemplo fique coerente e utilizável |

---

## 5. Numeração em listas (slide 14 – lista persistente)

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 14 | 1. Recuperar... 2. Modificar... 3. Salvar... (sem espaço ou destaque) | **1.** Recuperar / **2.** Modificar / **3.** Salvar (espaço após o número e negrito nos números, alinhado ao padrão dos outros documentos) |

---

## 6. Estrutura do slide (Exemplo prático: tema escuro/claro)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | No texto original, o parágrafo introdutório ("Um dos usos mais comuns...") vinha antes do título "Exemplo Prático: Salvando uma Preferência (Tema Escuro/Claro)". No documento corrigido, o slide foi organizado com o título primeiro ("Exemplo prático: salvando uma preferência (tema escuro/claro)"), seguido da teoria e do parágrafo "Este código mostra...", mantendo um único slide coerente. |

---

## 7. Formatação e consistência Markdown (Local Storage)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **Local Storage**, **Session Storage**, **setItem()**, **getItem()**, **JSON.stringify()**, **JSON.parse()**, **removeItem()**, **clear()**, **null**, **serialização**, **desserialização**, **QuotaExceededError**, **XSS**, **cookies HTTP-Only**, **JWTs**, etc. |
| Código e variáveis | Nomes de métodos, chaves e variáveis em **negrito** nas explicações quando apropriado. |

---

## 8. Resumo consolidado – Local Storage

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / títulos | Vários (estilo frase em todos os títulos) |
| Quebras de linha | 3 ("105"/15, chaves, JSON) |
| Redação | 1 (Ao invés de → Em vez de) |
| Exemplo getItem | 1 (valores 28/29 preenchidos) |
| Numeração (1.–3.) | 1 (passos da lista persistente) |
| Estrutura (slide 13) | 1 (título + teoria + exemplo em ordem) |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de local storage preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte XII – Slides: O que é uma API? (o garçom da web)

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-api-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia/títulos (estilo frase), conteúdo inadequado (exemplo slide 2), typo (Promisse → Promise), numeração em listas, estrutura (slide Diferença entre erros), tags HTML, formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 e demais | O que é uma API? **O G**arçom da **W**eb | O que é uma API? (**o garçom da web**) |
| Slide 2 | **P**ara que **S**erve uma API? **C**onectando **S**istemas | **Para que serve** uma API? (**conectando sistemas**) |
| Slides 3–16 | Iniciais em maiúscula em subtítulos | Padronização em estilo frase (ex.: "Introdução ao fetch(): o pedido assíncrono", "Requisições GET: o padrão de leitura de dados", "Promises: a promessa de um valor futuro", "Diferença entre erros de rede e erros de resposta") |

---

## 2. Conteúdo inadequado (slide 2 – exemplo errado)

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 2 – "Para que serve uma API?" | O exemplo descrevia o evento **oninput** em um campo de texto e a propriedade **.value**, ou seja, conteúdo copiado dos slides de **Eventos**, sem relação com API ou "conectando sistemas" | Exemplo substituído por um que ilustra o uso de **fetch()** para obter dados de uma API de clima e exibir a temperatura na página, coerente com o tema do slide (APIs conectando sistemas, site de notícias + API de clima) |

---

## 3. Typo

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 8 – Fluxo completo | "a **Promisse** entra em estado Pending" | "a **Promise** entra em estado Pending" |

---

## 4. Numeração em listas

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 5 – Promises | 1.Pending, 2.Fulfilled, 3.Rejected | **1.** Pending, **2.** Fulfilled, **3.** Rejected (espaço após o número) |
| Slide 6 – .then() | 1.O primeiro .then(), 2.O segundo .then() | **1.** O primeiro .then(), **2.** O segundo .then() |
| Slide 7 – .catch() | 1.Erros de Rede, 2.Erros Lançados | **1.** Erros de rede, **2.** Erros lançados |
| Slide 14 – response.ok | 1.response.status, 2.response.ok | **1.** response.status, **2.** response.ok |
| Slide 15 – .catch() | 1.Logar o Erro, 2.Informar o Usuário, 3.Ações de Recuperação | **1.** Logar o erro, **2.** Informar o usuário, **3.** Ações de recuperação |

---

## 5. Estrutura do slide (Diferença entre erros de rede e erros de resposta)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | No texto original, o parágrafo introdutório ("É crucial saber que existem dois tipos principais de falhas...") vinha antes do título "Diferença entre Erros de Rede e Erros de Resposta". No documento corrigido, o slide foi organizado com o título primeiro ("Diferença entre erros de rede e erros de resposta"), seguido da teoria (erros de rede e erros de resposta HTTP) e do exemplo ("Quando a URL retorna um 404..."), mantendo um único slide coerente. |

---

## 6. Tags HTML no texto (prosa)

| Local | Ajuste realizado |
|-------|------------------|
| Slides 9, 10, 11 | Uso de **&lt;div&gt;** , **&lt;ul&gt;** , **&lt;li&gt;** , **&lt;p&gt;** , **&lt;img&gt;** em trechos em prosa, para evitar que o Markdown interprete as tags. |

---

## 7. Formatação e consistência Markdown (API)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **API**, **fetch()**, **Promise**, **.then()**, **.catch()**, **response.json()**, **response.ok**, **GET**, **JSON**, **Response**, **Rejected**, **Fulfilled**, **Pending**, **XSS**, **DOM**, etc. |
| Código e variáveis | Nomes de métodos, propriedades e variáveis em **negrito** nas explicações quando apropriado. |

---

## 8. Resumo consolidado – API

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / títulos | Vários (estilo frase em todos os títulos) |
| Conteúdo inadequado | 1 (exemplo slide 2: oninput → fetch/API de clima) |
| Typo | 1 (Promisse → Promise) |
| Numeração (1.–3.) | 5 blocos (Promises, .then(), .catch(), response, .catch() unificado) |
| Estrutura (slide 13) | 1 (título + teoria + exemplo em ordem) |
| Tags HTML | Uso de &lt; &gt; nos slides 9, 10, 11 |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de API preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte XIII – Slides: O que são POST, PUT e DELETE?

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-post-put-delete-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia/títulos (estilo frase), redação (ao invés de → em vez de), notação (LaTeX $\leftrightarrow$ → texto), numeração (1.–3.), quebras de linha, estrutura (slide Caso prático POST), tags HTML, formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 e demais | **O Q**ue **S**ão POST, PUT e DELETE? | **O que são** POST, PUT e DELETE? |
| Slides 2, 3, 4, 5–16 | "**O M**étodo **P**OST – **C**riando **D**ados", "**O M**étodo **P**UT", "**C**riação de **O**bjeto", "**M**anipulação de **R**esposta", "**C**onversão de **D**ados", "**C**aso **P**rático", etc. | Padronização em estilo frase: "O método POST – criando dados na API", "Criação de objeto e envio via fetch() (POST prático)", "Conversão de dados: objeto JS e string JSON", "Caso prático: criando uma tarefa (POST)", etc. |

---

## 2. Redação

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 | "ao invés de apenas pedir informação" | "**em vez de** apenas pedir informação" (padrão preferível em redação técnica) |

---

## 3. Notação (slide 8 – conversão de dados)

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 8 – Título e corpo | "Conversão de Dados: JS Object **$\leftrightarrow$** JSON String" (notação LaTeX/matemática) | "Conversão de dados: **objeto JS e string JSON**" (texto corrido, sem símbolo LaTeX, para evitar problemas de renderização em Markdown) |

---

## 4. Numeração em listas

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 5 – POST prático | 1) Definir o method... 2) Definir o cabeçalho... 3) Converter... | **1.** Definir o method... **2.** Definir o cabeçalho... **3.** Converter... (espaço após número) |
| Slide 6 – Resposta | Códigos de sucesso/erro em lista | Mantida coerência com negrito em códigos HTTP |
| Slide 9 – Atualização DOM | 1) Receber os Dados 2) Criar Elementos 3) Anexar ao DOM | **1.** Receber os dados **2.** Criar elementos **3.** Anexar ao DOM |
| Slide 15 – DELETE | 1) Enviar DELETE 2) Aguardar sucesso 3) Remover do DOM | **1.** Enviar DELETE **2.** Aguardar sucesso **3.** Remover o elemento do DOM |

---

## 5. Quebras de linha e texto partido

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 4 – DELETE | "Excluir" ou "Remover Item" e "a requisição DELETE" partidos em linhas | "Excluir" ou "Remover Item", **a requisição DELETE** em texto contínuo |
| Slide 11 – Organização | "Salvar" e "a função do DOM" partidos | "Salvar", **a função do DOM** em texto contínuo |
| Slide 13 – Caso prático POST | "Adicionar" e "o JavaScript coleta" partidos | "Adicionar", **o JavaScript coleta** em texto contínuo |

---

## 6. Estrutura do slide (Caso prático: criando uma tarefa – POST)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | No texto original, o parágrafo introdutório ("Vamos aplicar o conhecimento de POST...") vinha antes do título "Caso Prático: Criando uma Tarefa (POST)". No documento corrigido, o slide foi organizado com o título primeiro ("Caso prático: criando uma tarefa (POST)"), seguido da teoria e do exemplo (função **adicionarNovaTarefa**), mantendo um único slide coerente. |

---

## 7. Tags HTML no texto (prosa)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 9 | Uso de **&lt;li&gt;** , **&lt;div&gt;** em trechos em prosa, para evitar que o Markdown interprete as tags. |

---

## 8. Formatação e consistência Markdown (POST, PUT, DELETE)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **HTTP**, **POST**, **PUT**, **DELETE**, **GET**, **CRUD**, **fetch()**, **body**, **Content-Type**, **JSON**, **JSON.stringify()**, **JSON.parse()**, **resposta.ok**, **resposta.status**, **async**, **await**, **try...catch**, **DOM**, etc. |
| Código e variáveis | Nomes de métodos, propriedades e funções em **negrito** nas explicações quando apropriado. |

---

## 9. Resumo consolidado – POST, PUT, DELETE

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / títulos | Vários (estilo frase em todos os títulos) |
| Redação | 1 (ao invés de → em vez de) |
| Notação (LaTeX) | 1 ($\leftrightarrow$ → "e") |
| Numeração (1.–3.) | 4 blocos (POST prático, DOM, DELETE) |
| Quebras de linha | 3 (Excluir/Remover Item, Salvar, Adicionar) |
| Estrutura (slide 13) | 1 (título + teoria + exemplo em ordem) |
| Tags HTML | Uso de &lt; &gt; no slide 9 |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de POST, PUT e DELETE preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.

---

# Parte XIV – Slides: Introdução ao projeto final (CRUD básico)

## Resumo do documento

| Item | Descrição |
|------|------------|
| Documento corrigido | **slides-javascript-projeto-final-crud-corrigido.md** |
| Quantidade de tópicos (slides) | **16** |
| Tipos de correção | Ortografia/títulos (estilo frase), redação (através → por meio), numeração (1.–4.), quebras de linha, estrutura (slide Testes de integração), tags HTML, formatação Markdown |

---

## 1. Correções de ortografia e estilo em títulos

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 1 e demais | **I**ntrodução ao **P**rojeto **F**inal (**C**RUD **B**ásico) | **Introdução ao projeto final** (**CRUD básico**) |
| Slides 2–16 | "**P**lanejamento da **I**nterface", "**O** Conceito de **A**PI", "**D**etalhando a **O**peração", "**I**mplementando a **O**peração", "**E**ntendendo os **M**étodos", "**O** Processo de", "**P**ersistência **O**pcional", "**O**rganização **F**inal", "**T**estes de **I**ntegração", "**C**onsiderações sobre **A**PIs", "**E**strutura **F**inal", "**O**rientações para **M**elhorias" | Padronização em estilo frase: "Planejamento da interface (HTML e CSS)", "O conceito de API e a operação de leitura (GET)", "Implementando a operação de criação (POST)", "Testes de integração e depuração (debug)", etc. |

---

## 2. Redação

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 2 – Planejamento | "é **através desses** seletores" | "é **por meio desses** seletores" (padrão preferível em redação técnica) |

---

## 3. Numeração em listas

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 2 – Elementos UI | 1. Um formulário... 2. Uma área... 3. Botões (com quebras entre itens) | **1.** Um formulário... **2.** Uma área... **3.** Botões (espaço após número, itens em linhas claras) |
| Slide 6 – POST | 1. O método... 2. Os cabeçalhos... 3. O corpo | **1.** O método... **2.** Os cabeçalhos... **3.** O corpo |
| Slide 9 – DELETE | 1. O método... 2. A URL | **1.** O método... **2.** A URL correta |
| Slide 12 – Estrutura script.js | 1.Variáveis Globais 2.Funções CRUD 3.Funções de DOM 4.Função de Inicialização | **1.** Variáveis globais/constantes **2.** Funções CRUD **3.** Funções de DOM/interface **4.** Função de inicialização (init()) |
| Slide 13 – Testes | 1.Teste GET 2.Teste POST 3.Teste DELETE 4.Teste PUT | **1.** Teste GET **2.** Teste POST **3.** Teste DELETE **4.** Teste PUT |
| Slide 15 – Entrega | 1. O index.html... 2. O script.js... 3. As funções... 4. O código... | **1.** **2.** **3.** **4.** (espaço após número) |
| Slide 16 – Melhorias | 1.Validação 2.Interface 3.Tratamento 4.Uso de Funções | **1.** Validação **2.** Interface (UX/UI) **3.** Tratamento de erros **4.** Uso de funções de ordem superior |

---

## 4. Quebras de linha e texto partido

| Local | Erro / Original | Correção |
|-------|-----------------|----------|
| Slide 6 – POST | addEventListener('submit' , ...) com quebra entre 'submit' e vírgula | **addEventListener('submit', ...)** em texto contínuo |
| Slide 10 – PUT | "método para 'PUT' , definamos" ou quebra entre PUT e vírgula | "método para **'PUT'**, definamos" em texto contínuo |
| Slide 9 – DELETE | "status de sucesso (comumente 200, 204 ou 202), significa" com possível quebra | Texto contínuo |

---

## 5. Estrutura do slide (Testes de integração e depuração)

| Local | Ajuste realizado |
|-------|------------------|
| Slide 13 | No texto original, o parágrafo introdutório ("O desenvolvimento de um projeto CRUD envolve...") vinha antes do título "Testes de Integração e Depuração (Debug)". No documento corrigido, o slide foi organizado com o título primeiro ("Testes de integração e depuração (debug)"), seguido do conteúdo e da lista numerada (1. Teste GET, 2. Teste POST, 3. Teste DELETE, 4. Teste PUT), mantendo um único slide coerente. |

---

## 6. Tags HTML no texto (prosa)

| Local | Ajuste realizado |
|-------|------------------|
| Slides 2, 3, 5 | Uso de **&lt;ul&gt;** , **&lt;table&gt;** , **&lt;li&gt;** , **&lt;body&gt;** em trechos em prosa, para evitar que o Markdown interprete as tags. |

---

## 7. Formatação e consistência Markdown (Projeto final CRUD)

| Local | Ajuste realizado |
|-------|------------------|
| Documento inteiro | Estruturação em **16 seções** com **##** para título de cada slide e **---** como separador entre slides. |
| Termos técnicos | Uso consistente de **negrito** para **CRUD**, **API**, **Front-end**, **Back-end**, **fetch()**, **GET**, **POST**, **PUT**, **DELETE**, **DOM**, **JSON.stringify()**, **JSON.parse()**, **async**, **await**, **localStorage**, **DOMContentLoaded**, **init**, **data-id**, **event.preventDefault()**, etc. |
| Código e variáveis | Nomes de arquivos, funções e propriedades em **negrito** nas explicações quando apropriado. |

---

## 8. Resumo consolidado – Projeto final CRUD

| Tipo de correção | Quantidade (referência) |
|------------------|--------------------------|
| Ortografia / títulos | Vários (estilo frase em todos os títulos) |
| Redação | 1 (através desses → por meio desses) |
| Numeração (1.–4.) | 7 blocos (elementos UI, POST, DELETE, estrutura script.js, testes, entrega, melhorias) |
| Quebras de linha | 3 (submit, PUT, DELETE) |
| Estrutura (slide 13) | 1 (título + conteúdo em ordem) |
| Tags HTML | Uso de &lt; &gt; nos slides 2, 3, 5 |
| Formatação Markdown | Aplicada em todo o documento (16 slides) |

---

Todas as alterações do documento de projeto final CRUD preservam o conteúdo didático, a ordem dos tópicos e a extensão próxima ao texto original.
