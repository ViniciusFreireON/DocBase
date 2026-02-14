# Slides – O que é local storage? (caixa de lembranças do navegador) (Conteúdo Corrigido)

## 1. O que é local storage? (caixa de lembranças do navegador)

O **Local Storage** (armazenamento local) é um dos tipos de memória que os navegadores web oferecem para guardar dados diretamente no computador do usuário. Pense nele como uma "caixa de lembranças" pessoal do seu navegador para um site específico.

Cada site ou domínio (como **meusite.com**) tem sua própria caixa, e um site não pode acessar a caixa de outro, garantindo a privacidade e a segurança dos dados. O principal objetivo do Local Storage é permitir que os websites se lembrem de informações do usuário, mesmo depois que ele feche e reabra o navegador.

Isso é chamado de **persistência de dados**. Por exemplo, se você seleciona o "Tema Escuro" em um site, o Local Storage pode guardar essa preferência para que, na próxima vez que você visitar, o site já abra com o tema escuro, sem precisar perguntar de novo.

Ele é ideal para guardar informações que não são sensíveis e que precisam ser acessíveis rapidamente em todas as sessões do usuário.

É importante notar que o Local Storage só consegue guardar informações no formato de **texto** (strings). Se você quiser guardar números, objetos ou arrays, precisará primeiro convertê-los para texto.

O código acima demonstra a função mais básica do Local Storage: guardar uma informação. Usamos o método **setItem()** para salvar um par de **chave** (**tema_preferido**) e **valor** (**escuro**). A chave é o "nome" que você dará à informação, e o valor é a informação em si. Ambos são armazenados como texto (string).

---

## 2. Storage web: local vs. session (comparações essenciais)

Quando falamos de armazenamento no lado do cliente (o navegador), o Local Storage não é a única opção. Existe também o **Session Storage** (armazenamento de sessão). A diferença fundamental entre eles está na **persistência** do dado, ou seja, por quanto tempo a informação ficará guardada.

O **Local Storage** é **persistente**: os dados que você guarda nele não têm um prazo de validade e permanecem no navegador mesmo depois que o usuário fecha a aba, fecha o navegador ou reinicia o computador.

A única forma de apagar esses dados é se o próprio código JavaScript remover, ou se o usuário limpar o cache e os dados do site manualmente nas configurações do navegador. Já o **Session Storage** é **temporário**, ou seja, baseado na sessão. Os dados guardados no Session Storage são válidos apenas para a aba atual do navegador.

Assim que o usuário fechar a aba ou a janela, todos os dados dessa sessão são automaticamente apagados. Para informações como um item que está temporariamente no carrinho de compras (antes do checkout) ou o estado atual de um formulário que o usuário está preenchendo, o Session Storage é o mais indicado.

Este exemplo mostra que ambos usam os mesmos métodos (**setItem**, **getItem**), mas se comportam de forma diferente. O dado permanente em **localStorage** persistirá, enquanto o dado **item_A** em **sessionStorage** será perdido assim que a aba do navegador for fechada, reforçando a diferença de persistência entre os dois tipos de armazenamento web.

---

## 3. Limite de armazenamento e acessibilidade (onde os dados moram)

Uma das características mais importantes do Local Storage é o **limite de espaço** que ele oferece para cada website. Na maioria dos navegadores modernos, esse limite varia entre **5 MB e 10 MB** por domínio (site).

Embora 5 MB possa parecer pouco, é um espaço considerável quando se trata de guardar apenas texto, o que é mais do que suficiente para salvar centenas de preferências de usuário, pequenas listas de dados ou o progresso em um jogo simples.

É crucial que você evite guardar arquivos grandes, como imagens ou vídeos, no Local Storage, pois isso não só consumirá o limite rapidamente, mas também tornará o site mais lento.

Outro ponto chave é a **acessibilidade**: os dados do Local Storage são acessíveis diretamente via JavaScript, o que os torna muito rápidos de ler e escrever. No entanto, eles não são automaticamente enviados ao servidor junto com cada requisição HTTP (diferente dos **cookies**).

Isso significa que, se o servidor precisar de uma informação do Local Storage, o código JavaScript deve primeiro recuperá-la e, então, enviá-la ao servidor por meio de uma nova requisição (como um **fetch** ou **XMLHttpRequest**).

O código ilustrativo acima tenta salvar uma grande quantidade de pares chave-valor para simular o preenchimento do espaço de armazenamento. Na prática, você nunca fará isso. O ponto é demonstrar que existe um limite e que, ao tentar ultrapassá-lo, o navegador lança um erro (**QuotaExceededError**). Isso reforça a necessidade de usar o Local Storage apenas para pequenos pedaços de dados que são essenciais para a experiência do usuário.

---

## 4. Local storage e a estrutura chave-valor (armazenamento de strings)

A estrutura de dados que o Local Storage utiliza é fundamentalmente simples: um sistema de **chave-valor**. Pense nisso como um dicionário ou um mapa, em que cada informação guardada tem um nome único (a **chave**) e um conteúdo associado (o **valor**).

A regra mais importante do Local Storage é que ele só armazena dados como **strings** de texto. Isso significa que, se você tentar guardar um número (como **123**) ou um booleano (como **true**), o Local Storage irá automaticamente convertê-los para o seu formato de string equivalente (**"123"** ou **"true"**) antes de salvar.

Essa conversão implícita pode causar problemas se você não souber o tipo original do dado ao recuperá-lo. Por exemplo, o número **10** se torna a string **"10"**. Se você tentar fazer uma soma com ele, como **"10" + 5**, o JavaScript fará uma **concatenação** de strings, resultando em **"105"**, e não a soma matemática **15**. Por isso, é uma boa prática converter os dados de volta ao seu tipo original (número, booleano, objeto) assim que forem lidos do Local Storage.

Este código demonstra a conversão automática de tipos. O número **15** e o booleano **true** são salvos como as strings **"15"** e **"true"**. Ao usar **getItem()**, o resultado é sempre uma string. Isso é crucial: você sempre deve esperar uma string de volta e, se necessário, fazer a conversão explícita (como **parseInt()** para números ou comparar com **"true"** para booleanos) antes de usar o valor em operações lógicas ou matemáticas no seu código.

---

## 5. setItem(): guardando a primeira informação (a função de escrita)

O método **localStorage.setItem(chave, valor)** é o que você usa para guardar uma nova informação no Local Storage, ou para atualizar uma informação que já existe. Ele é a função de "escrita".

O método exige sempre dois argumentos obrigatórios: a **chave** (o nome que você dará ao dado, sempre uma string) e o **valor** (o conteúdo do dado, que será sempre convertido para string).

Se você tentar guardar um dado com uma chave que já existe, o Local Storage simplesmente irá **sobrescrever** o valor antigo pelo novo. Não haverá aviso ou erro; o dado anterior será perdido.

É uma operação muito rápida e simples. Por ser uma operação de escrita, você deve ter cuidado para não chamá-lo com muita frequência em um curto espaço de tempo ou dentro de um loop muito grande, pois pode impactar ligeiramente a performance da sua aplicação, especialmente se estiver armazenando muitos dados.

Como prática de codificação, evite usar chaves genéricas como **"data"** ou **"temp"**. Prefira chaves descritivas e únicas, como **"user_email"** ou **"app_config_theme"**, para que seu código fique mais claro sobre o que exatamente está sendo armazenado.

Neste exemplo, o **setItem()** é usado duas vezes com a mesma chave, **nome_usuario**. Na primeira vez, ele armazena "Visitante". Na segunda vez, ele armazena o novo nome fornecido pelo usuário, substituindo o valor anterior. Isso demonstra o comportamento de sobrescrita: **setItem** não verifica se a chave existe, apenas armazena o novo valor sob aquela chave, garantindo que a informação mais recente seja sempre a que está salva.

---

## 6. setItem(): detalhando a gravação (sobrescrita e regra da string)

Ao usar o **setItem()**, é fundamental internalizar duas regras principais. A primeira é a **regra da sobrescrita**. Se você invocar **setItem()** com uma chave que já está presente no Local Storage, o valor associado a essa chave será completamente substituído.

Não há maneira de "anexar" ou "adicionar" um novo valor ao valor existente diretamente. Se você quiser modificar um valor (por exemplo, adicionar um novo item a uma lista), você deve primeiro ler o valor existente com **getItem()**, modificá-lo no JavaScript e só então salvar o novo valor completo com **setItem()**.

A segunda regra é a **regra da string**: o Local Storage só armazena strings. Se você tentar passar um tipo de dado complexo, como um objeto (**{ nome: "João" }**) ou um array (**[1, 2, 3]**), eles serão convertidos para uma string de forma não muito útil.

O objeto se tornará a string **"[object Object]"** e o array se tornará **"1,2,3"**. Nenhuma dessas conversões automáticas preserva a estrutura de dados original. Por isso, na próxima etapa, aprenderemos a usar o **JSON.stringify()** para converter objetos e arrays em strings que possam ser lidas de volta corretamente.

Este exemplo ilustra a armadilha de tentar salvar um objeto diretamente. O objeto **configObjeto** é convertido para a string genérica **[object Object]**. Ao recuperar, você obtém essa string inútil em vez da estrutura original do objeto. Isso reforça a necessidade de um passo intermediário, que veremos mais adiante, para que a estrutura de dados original seja preservada na forma de texto e possa ser reconstruída.

---

## 7. getItem(): recuperando o valor armazenado (a função de leitura)

O método **localStorage.getItem(chave)** é o oposto do **setItem()**: ele é usado para **ler** um valor que foi previamente salvo no Local Storage, usando a chave associada. Ele é a função de "leitura". Você precisa passar como argumento apenas a **chave** (o nome) do dado que você deseja recuperar.

A função irá buscar essa chave na "caixa de lembranças" do navegador e retornará o valor correspondente. É importante lembrar que o **getItem()** sempre retorna um valor no formato de **string**. Mesmo que você tenha salvo um número, como **10**, você receberá de volta a string **"10"**.

Você será responsável por converter essa string de volta para o tipo de dado que você precisa (como usar **Number()** ou **parseInt()** para converter para número). Se a chave que você tentar buscar não existir no Local Storage, o método **getItem()** não irá causar um erro na sua aplicação; em vez disso, ele retornará o valor especial **null**.

Por isso, sempre que usar **getItem()**, é crucial verificar se o valor retornado é **null** antes de tentar usá-lo, garantindo que seu código não tente acessar propriedades de um dado inexistente.

Este exemplo mostra o fluxo correto de recuperação e uso de um dado numérico. Primeiro, o valor é lido como a string **"28"**. Em seguida, é usada a função **parseInt()** para converter essa string de volta para o número inteiro **28**. Após a conversão, a variável **idadeNumero** pode ser usada corretamente em operações matemáticas, como a soma **28 + 1**, resultando em **29**, e não na concatenação de strings.

---

## 8. getItem(): lidando com dados ausentes (retorno null e verificação)

Um cenário muito comum ao trabalhar com Local Storage é tentar recuperar uma chave que o usuário ainda não salvou, seja porque é o primeiro acesso dele ao site ou porque o dado foi removido. Nesses casos, o método **localStorage.getItem(chave)** retorna o valor **null**.

É fundamental que seu código saiba lidar com esse retorno **null** de forma elegante. Se você tentar acessar uma propriedade ou chamar um método em um valor **null**, o JavaScript irá gerar um erro de execução, o que pode quebrar toda a sua aplicação.

A forma mais segura de lidar com isso é usar uma estrutura de controle, como o **if**, para verificar se o dado existe antes de tentar usá-lo. Por exemplo, você pode verificar se o valor retornado não é **null**. Se for **null**, você pode definir um **valor padrão** (default) para a variável, garantindo que seu código sempre terá um valor válido para trabalhar. Essa técnica de fornecer um **fallback** (valor de reserva) melhora a robustez do seu código e a experiência do usuário.

O código acima demonstra a checagem de **null**. Como a chave **config_tema** provavelmente não existe no primeiro acesso, **getItem()** retorna **null**. O bloco **if** detecta isso e atribui o valor de fallback **'padrao-claro'** à variável **tema**. Isso garante que a variável **tema** sempre terá um valor utilizável, evitando erros na aplicação e, de quebra, salva o valor padrão para que ele seja usado na próxima vez que o usuário acessar o site.

---

## 9. JSON.stringify(): preparando objetos para guardar (serialização)

Como já vimos, o Local Storage só aceita strings. Para guardar dados estruturados, como **arrays** (**[]**) ou **objetos** (**{}**), é preciso primeiro convertê-los em uma representação de texto que preserve a sua estrutura, um processo chamado de **serialização**.

O método nativo do JavaScript **JSON.stringify(dado)** é a ferramenta ideal para isso. Ele pega qualquer estrutura de dados JavaScript válida (como um objeto, um array, um número ou até mesmo um booleano) e a transforma em uma única string no formato **JSON** (JavaScript Object Notation).

Esse formato JSON é uma convenção de texto universalmente aceita para representar dados estruturados. Em vez de o seu objeto virar a string inútil **"[object Object]"** (como na conversão automática), ele se torna uma string de texto muito bem formatada, como **{"nome":"Ana","idade":30}**.

É essa string JSON que você deve passar para o **localStorage.setItem()**. Graças a essa serialização, a estrutura de dados original fica preservada no formato de texto.

Este código mostra o passo essencial da serialização. O objeto **dadosUsuario** é convertido pelo **JSON.stringify()** em uma string JSON, que é então salva no Local Storage usando **setItem()**. A string JSON é a representação fiel do objeto original, permitindo que ela seja lida e reconstruída pelo JavaScript quando for necessário usar esses dados.

---

## 10. setItem() com objetos: a solução JSON.stringify() (exemplo prático)

A combinação dos métodos **setItem()** e **JSON.stringify()** é a forma correta e recomendada de persistir dados complexos no Local Storage.

Para guardar um objeto ou um array:

**Passo 1:** Defina seu objeto ou array em JavaScript.

**Passo 2:** Use **JSON.stringify()** para convertê-lo em uma string JSON.

**Passo 3:** Use **localStorage.setItem()** para guardar essa string JSON.

Essa sequência garante que, embora o Local Storage tecnicamente armazene apenas strings, essa string armazena a estrutura completa do seu dado de forma legível. Uma analogia útil é pensar no **JSON.stringify()** como o ato de colocar o seu objeto em uma "embalagem" de texto, pronta para ser transportada para o armazenamento.

Sem essa embalagem, o objeto original seria danificado ou descaracterizado no processo de salvamento. É crucial que você não se esqueça de que essa string JSON ocupa mais espaço do que um simples número, então use essa técnica com responsabilidade, mantendo o limite de 5–10 MB em mente.

Este exemplo ilustra a aplicação dos passos 1 e 2 para salvar uma lista (array de objetos). O array **listaFavoritos** é primeiramente transformado em uma string JSON. Essa string, que é a representação textual do array, é o que é efetivamente armazenado pelo **setItem()**. A saída no console mostra a string JSON que o Local Storage está guardando, o que confirma que a estrutura do array (com seus colchetes e objetos internos) foi preservada no formato de texto.

---

## 11. JSON.parse(): voltando ao formato original (desserialização)

Se o **JSON.stringify()** é a "embalagem" que prepara o dado para salvar, o **JSON.parse(stringJSON)** é o processo de "desembalar". O método **JSON.parse()** é usado para pegar uma string formatada em JSON (que foi recuperada do Local Storage via **getItem()**) e convertê-la de volta para um **objeto** ou **array** JavaScript que você possa realmente usar.

Esse processo de conversão de string para o tipo de dado original é chamado de **desserialização**. Sem o **JSON.parse()**, seu dado seria apenas um longo texto, e você não conseguiria, por exemplo, acessar as propriedades de um objeto (como **usuario.nome**) ou iterar sobre um array (como **lista.forEach(...)**).

É essencial que a string que você passar para o **JSON.parse()** seja uma string JSON **válida**. Se você tentar passar uma string simples (como **"meu nome"**) ou uma string JSON inválida (com erros de sintaxe), o **JSON.parse()** irá lançar um erro, o que pode quebrar a aplicação. Por isso, essa operação deve ser sempre protegida por blocos **try...catch** em códigos mais complexos.

O código ilustra o processo de desserialização. Primeiro, a string JSON é recuperada do Local Storage. Em seguida, o **JSON.parse()** a transforma de volta no array JavaScript original, que chamamos de **listaArray**. Uma vez que é um array JavaScript, podemos acessar seus elementos e propriedades normalmente, como feito na linha que exibe o nome do primeiro favorito. Sem o **JSON.parse()**, tentaríamos fazer **listaJSON[0].nome**, o que resultaria em erro.

---

## 12. removeItem() e clear(): apagando dados do navegador (liberação de espaço)

Assim como é importante guardar dados, também é fundamental saber como removê-los para gerenciar o espaço de armazenamento e manter a privacidade. O Local Storage oferece dois métodos principais para exclusão de dados.

O primeiro, e mais seguro, é o **localStorage.removeItem(chave)**. Este método remove apenas o par chave-valor **específico** que você indicar. Por exemplo, se você removeu a preferência de tema do usuário, a lista de favoritos e outras configurações importantes continuam intactas.

Ele é a escolha ideal para gerenciar dados individualmente. O segundo método é o **localStorage.clear()**. Este método é muito mais drástico, pois ele remove **absolutamente todos** os pares chave-valor de uma só vez, limpando todo o Local Storage daquele domínio (site).

O **clear()** deve ser usado com extrema cautela e apenas em situações específicas, como quando o usuário faz logout e todos os dados de sessão devem ser removidos para evitar que o próximo usuário os acesse. No dia a dia, para a maioria das tarefas, o **removeItem()** é o mais indicado, pois oferece um controle mais refinado sobre quais dados são removidos.

O código demonstra a diferença entre os dois métodos de exclusão. Primeiro, **removeItem('chave_1')** apaga apenas um dado, deixando o outro intacto. Em seguida, **clear()** é chamado e, como resultado, todos os dados são apagados, o que é confirmado ao verificarmos o tamanho (**length**) do Local Storage. O uso do **removeItem()** permite manter o dado **chave_2** persistente, ao passo que o **clear()** apaga tudo sem exceção.

---

## 13. Exemplo prático: salvando uma preferência (tema escuro/claro)

Um dos usos mais comuns e simples do Local Storage é a persistência de preferências do usuário, como a escolha entre Tema Escuro e Tema Claro. Este é um excelente exemplo de como o armazenamento local melhora a experiência do usuário, pois evita que ele precise redefinir sua preferência em cada visita.

A lógica é simples: quando o usuário clica no botão de trocar o tema, o código JavaScript não apenas aplica a classe CSS para mudar o visual, mas também usa **localStorage.setItem()** para guardar a nova escolha (ex.: **"dark"** ou **"light"**). Na próxima vez que o site carregar, o código JavaScript deve primeiro verificar o Local Storage usando **localStorage.getItem()**.

Se um valor for encontrado, o tema é aplicado imediatamente, antes mesmo que o restante do conteúdo seja renderizado, resultando em uma abertura rápida e personalizada. Se a chave for **null** (ou seja, o usuário nunca escolheu), o tema padrão do site (geralmente **"light"**) é aplicado.

Este código mostra o ciclo de vida da preferência de tema. Na primeira parte, o código recupera o tema salvo e, se não houver, assume o padrão. A função **toggleTheme()** inverte a preferência atual e salva o novo valor no Local Storage. Essa preferência fica salva como uma string simples (**"dark"** ou **"light"**), pronta para ser lida e aplicada na próxima vez que a página for carregada, garantindo a persistência do estado do tema.

---

## 14. Criando uma lista persistente (a base para um app de tarefas)

Uma aplicação mais avançada, mas ainda simples, do Local Storage é a criação de uma **lista persistente**, como uma lista de tarefas (To-Do List) ou uma lista de favoritos.

Este exemplo é crucial porque envolve todos os conceitos que aprendemos: **getItem()**, **JSON.parse()**, modificação do array no JavaScript, **JSON.stringify()** e **setItem()**.

A lógica para manter uma lista de itens atualizada é sempre a mesma, seguindo um ciclo de três etapas:

**1. Recuperar** a lista existente (usando **getItem()** e **JSON.parse()**). Se não existir, iniciar com um array vazio (**[]**).

**2. Modificar** o array no JavaScript (adicionar, remover ou editar um item).

**3. Salvar** o array modificado de volta (usando **JSON.stringify()** e **setItem()**).

Você nunca deve tentar adicionar um item novo sem antes ler e parsear a lista completa que já está salva, pois isso sobrescreveria a lista antiga, resultando na perda de todos os dados anteriores, exceto o último.

Este código mostra a essência da persistência de listas. Ele primeiro verifica se já existe uma lista salva; se sim, ele a carrega (desserializa). Em seguida, ele usa o método **push()** do JavaScript para adicionar a nova tarefa ao array. Finalmente, ele serializa o array atualizado de volta para JSON e o salva, sobrescrevendo a versão anterior no Local Storage. Assim, a lista cresce a cada nova adição.

---

## 15. Boas práticas: o que guardar e onde (otimização e UX)

Saber o que e como guardar dados no Local Storage é tão importante quanto saber os métodos.

A primeira boa prática é **guardar apenas o essencial**. O Local Storage é rápido, mas não é ilimitado (5–10 MB), e acessá-lo constantemente pode ter um pequeno custo de performance. Não use-o para cache de grandes arquivos. Guarde apenas dados de configuração e de estado que sejam pequenos e essenciais para a experiência do usuário.

A segunda boa prática é a **serialização explícita** com **JSON.stringify()** e **JSON.parse()**, garantindo que você não perca a estrutura de objetos e arrays.

Terceiro, **verifique a existência de dados ausentes** (**null**) antes de tentar usá-los, fornecendo sempre um valor padrão (fallback).

A quarta prática é a **organização**. Use nomes de chaves que sejam claros e que ajudem a identificar o que está sendo guardado, evitando confusão. Por exemplo, use **app_user_id** em vez de apenas **id**. Seguir estas práticas melhora a estabilidade, a performance do seu site e a facilidade de manutenção do seu código.

Este código exemplifica uma função **obterConfig** que implementa várias boas práticas. Ela não só verifica se o dado existe (lidando com **null**), mas também envolve o **JSON.parse()** em um bloco **try...catch**. Isso é uma defesa contra dados mal formatados que podem ter sido salvos no Local Storage, garantindo que mesmo se houver um erro, a função retornará um valor padrão em vez de quebrar a aplicação do usuário.

---

## 16. Considerações de segurança (dados sensíveis e limitações)

O ponto mais crítico sobre o Local Storage é a **segurança**. Embora seja uma ótima ferramenta para preferências e estados de interface, você **nunca** deve usá-lo para armazenar dados sensíveis, como senhas, números de cartão de crédito ou qualquer informação de identificação pessoal que possa ser utilizada em um ataque. Isso ocorre porque o Local Storage é altamente vulnerável a ataques de **Cross-Site Scripting (XSS)**.

Em um ataque XSS, se um invasor conseguir injetar código JavaScript malicioso em sua página, esse código tem acesso total a todos os dados armazenados no Local Storage.

O invasor pode facilmente usar **localStorage.getItem()** para ler suas senhas, tokens de sessão ou outras informações valiosas e enviá-las para seu próprio servidor.

Para dados que exigem um alto nível de segurança e que o servidor precisa constantemente, como tokens de autenticação (como **JWTs**), os **cookies HTTP-Only** são a opção preferida, pois são inacessíveis via JavaScript, mitigando o risco de XSS. Em resumo, mantenha o Local Storage para dados de **conveniência**, não de segurança.

Este código é um aviso. Ele demonstra como um código malicioso injetado pode facilmente obter o valor de **auth_token** se ele for armazenado no Local Storage. O acesso via **getItem()** é direto e irrestrito, tornando-o perigoso para informações que permitem a um usuário mal-intencionado se passar pelo usuário real. A regra é simples: se a perda do dado causar um problema de segurança significativo para o usuário, não guarde no Local Storage. Use-o apenas para conveniência e preferências.
