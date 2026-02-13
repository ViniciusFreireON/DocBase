# Slides – Conteúdo Corrigido (HTML / Web)

## 1. O que é a Web? (Cliente e Servidor)

A web, ou World Wide Web (WWW), é um sistema de informação onde documentos e outros recursos são acessados através da Internet. Pense nela como uma biblioteca gigante. Para que isso funcione, usamos um modelo chamado "Cliente-Servidor". O "Cliente" é o seu navegador (como o Google Chrome ou Firefox). Quando você digita um endereço (URL), seu navegador (o Cliente) faz um "pedido" (request) pela rede até um computador especial chamado "Servidor".

O "Servidor" é um computador potente que armazena os arquivos de um site (como arquivos HTML, imagens, etc.). Ele "ouve" os pedidos dos clientes. Ao receber um pedido, ele encontra o arquivo solicitado (por exemplo, index.html) e o "envia de volta" (response) para o seu navegador.

O navegador então lê esse arquivo e desenha a página que você vê na tela. Todo esse processo, desde o pedido até a resposta, acontece em segundos, permitindo que você navegue por diferentes sites de forma quase instantânea.

Este código é um exemplo do arquivo (como index.html) que o Servidor enviaria para o seu navegador (o Cliente). O navegador lê essas "etiquetas" (chamadas tags, como <h1> e <p>) para entender como estruturar e exibir o conteúdo. O navegador entende que <h1> significa "um título principal" e <p> significa "um parágrafo", e então exibe "Olá, Mundo!" em letras grandes e o restante como texto normal.

---

## 2. O que é HTML? (Linguagem de Marcação)

HTML é a sigla para HyperText Markup Language, ou "Linguagem de Marcação de Hipertexto". É a linguagem padrão usada para criar e estruturar páginas web.

É importante entender que o HTML não é uma linguagem de programação; ele não toma decisões nem executa lógicas complexas. Em vez disso, é uma "linguagem de marcação", o que significa que ele usa "tags" (etiquetas) para descrever o conteúdo da página para o navegador. O HTML é o "esqueleto" de todo site.

Pense no HTML como se fosse o Microsoft Word, mas para a web. No Word, você clica em botões para dizer "isto é um título" ou "isto é uma lista". No HTML, usamos tags para fazer a mesma coisa. Por exemplo, a tag <p> diz ao navegador: "O texto que vem a seguir é um parágrafo". A tag <img> diz: "Coloque uma imagem aqui". Todo o conteúdo visual de um site – textos, imagens, botões e links – é organizado e estruturado usando HTML.

Este exemplo mostra o uso básico de tags HTML para estruturar texto. A tag <h1> é usada para o título mais importante da página (geralmente só há um). A tag <h2> é usada para um subtítulo, sendo um pouco menor. As tags <p> são usadas para blocos de texto, os parágrafos. Observe como as tags vêm em pares: uma de abertura (como <p>) e uma de fechamento (como </p>). O navegador usa esses pares para saber onde um elemento começa e onde ele termina.

---

## 3. O que é Front-End?

O "Front-End" é tudo aquilo com que o usuário interage diretamente no navegador. É a parte "Cliente" do modelo que vimos. O Front-End é responsável pela apresentação visual e pela interatividade do site. Se um site fosse um carro, o Front-End seria a carroceria, a pintura, o volante, os pedais e o painel – tudo o que o motorista vê e usa para dirigir. No desenvolvimento web, o Front-End é construído usando três tecnologias principais que trabalham juntas.

A primeira é o HTML, que (como já vimos) fornece a estrutura básica, o esqueleto (o chassi do carro). A segunda é o CSS (Cascading Style Sheets), que cuida da aparência, estilo e design – as cores, fontes e layout (a pintura e o design do carro). A terceira é o JavaScript, que adiciona interatividade e comportamento dinâmico à página, como animações, pop-ups, ou validar formulários (o motor e a parte elétrica do carro).

Um desenvolvedor Front-End foca em como o site se parece e se comporta no navegador do usuário.

Este código mostra como o HTML e o CSS (neste caso, "inline style") trabalham juntos no Front-End. A tag <h1> ainda é o título, mas usamos o atributo style para dizer ao navegador: "Eu quero que este título específico seja da cor azul e tenha 30 pixels de tamanho". Da mesma forma, o <p> tem um estilo que define sua cor de fundo como amarela. A tag <button> cria um botão clicável. O HTML estrutura o conteúdo (título, parágrafo, botão) e o CSS (o atributo style) define a aparência visual.

---

## 4. O que é Back-End?

O "Back-End" é a parte do site que o usuário não vê. É o que acontece nos "bastidores", no lado do "Servidor". Se o Front-End é o que o motorista vê (o painel), o Back-End é o motor, os sistemas de injeção de combustível e a transmissão – as peças complexas que fazem o carro andar.

É responsável pela lógica do negócio, pelo gerenciamento de dados e pela segurança. Por exemplo, quando você faz login em um site, o Front-End (o formulário) envia seu usuário e senha para o Back-End. O Back-End então verifica se esse usuário existe em um banco de dados, confere se a senha está correta e, só então, envia uma resposta de volta ao Front-End dizendo "Ok, pode deixar essa pessoa entrar".

Também lida com o armazenamento de postagens de blog, produtos de uma loja online ou comentários de usuários. Tecnologias comuns de Back-End incluem linguagens como PHP, Python, Java ou Node.js, e bancos de dados como MySQL ou MongoDB.

Este código HTML cria um formulário de login simples. Note a tag <form>. O atributo action="/processar-login.php" diz ao navegador para onde os dados devem ser enviados (para um arquivo no servidor chamado processar-login.php). O atributo method="POST" é o método HTTP usado para enviar os dados. As tags <input> criam os campos de texto. Quando o usuário clica no botão "Entrar" (<button type="submit">), o navegador pega os dados dos campos e os envia para o Back-End (o servidor) no endereço especificado no action.

---

## 5. A Anatomia de um Documento HTML

Todo documento HTML, não importa quão grande ou complexo, segue uma estrutura básica, uma anatomia fundamental. Pense nisso como o "esqueleto" padrão que toda página precisa ter para funcionar corretamente.

Essa estrutura básica diz ao navegador que tipo de documento ele está lendo e onde encontrar as principais partes da página. Se você não incluir essa estrutura, os navegadores podem entrar no "modo de compatibilidade" (quirks mode) e tentar adivinhar como exibir sua página, o que quase sempre resulta em erros visuais ou de funcionamento.

Essa estrutura essencial é composta por quatro partes principais que sempre estarão presentes:

Primeiro, a declaração do tipo de documento (o <!DOCTYPE>), que informa ao navegador que estamos usando HTML moderno. Segundo, a tag <html>, que é a "raiz" de todo o documento e envolve todo o resto. Terceiro, a tag <head>, que contém informações sobre a página (metadados), como o título da aba. E quarto, a tag <body>, que contém todo o conteúdo visível da página, como textos e imagens.

Este é o modelo básico (boilerplate) de todo arquivo HTML. O <!DOCTYPE html> informa ao navegador que este é um documento HTML5. A tag <html> é a "pai" de todas as outras; tudo (exceto o DOCTYPE) fica dentro dela. O <head> é o "cérebro": o conteúdo aqui não é exibido na página principal, mas é usado pelo navegador (como o título da aba ou links para arquivos CSS). O <body> é o "corpo": todo o conteúdo que você vê na página (títulos, parágrafos, imagens, links) deve ser colocado dentro desta tag.

---

## 6. O <!DOCTYPE html> e a tag <html>

As duas primeiras partes de um documento HTML são a declaração <!DOCTYPE html> e a tag <html>. A declaração <!DOCTYPE html> (note o ponto de exclamação) é uma instrução obrigatória que deve ser a primeira linha do seu arquivo.

Ela não é uma tag HTML, mas sim uma "declaração de tipo de documento" (Document Type Declaration). Ela é crucial porque informa ao navegador que o código a seguir está escrito em HTML5, a versão mais moderna do HTML. Sem ela, o navegador pode interpretar seu código de maneira incorreta, causando problemas de layout.

Imediatamente após o DOCTYPE, abrimos a tag <html>. Esta é a tag raiz, ou "elemento raiz", do documento. Todas as outras tags HTML (exceto o DOCTYPE) devem ser "filhas" desta tag, ou seja, devem estar "aninhadas" (colocadas dentro) dela. A tag <html> geralmente contém um atributo lang, como lang="pt-br", que é uma boa prática para informar ao navegador e aos motores de busca qual é o idioma principal do conteúdo da página, ajudando na acessibilidade e na indexação.

Neste exemplo, focamos nas duas primeiras linhas. O <!DOCTYPE html> está no topo, garantindo que o navegador use o modo de renderização HTML5. Em seguida, a tag <html> envolve todo o resto do documento (as tags <head> e <body>). Adicionamos o atributo lang="pt-br" dentro da tag <html> para especificar que o idioma principal desta página é o Português do Brasil. Isso é muito importante para ferramentas de acessibilidade (leitores de tela) e para o SEO (Google).

---

## 7. A tag <head> (O cérebro da página)

A tag <head> (cabeça) é o primeiro elemento que colocamos dentro da tag <html>. Pense no <head> como o "centro de controle" ou o "cérebro" da sua página web.

O conteúdo dentro do <head> não é exibido diretamente na janela principal do navegador (essa parte visível é o <body>). Em vez disso, o <head> contém "metadados", que são informações sobre o seu documento HTML. Essas informações são usadas pelo navegador, por motores de busca (como o Google) e por outras ferramentas.

Os elementos mais comuns dentro do <head> incluem: a tag <meta charset="UTF-8">, que é essencial e diz ao navegador qual codificação de caracteres usar (UTF-8 é o padrão mundial e permite o uso de acentos e "ç"); e a tag <title>, que define o texto que aparecerá na aba do navegador e nos resultados de busca do Google. O <head> também é o local onde, no futuro, você irá linkar seus arquivos de estilo CSS e seus scripts JavaScript.

Este código mostra um exemplo de uma seção <head> bem básica. A tag <meta charset="UTF-8"> é a primeira linha. Ela garante que todos os caracteres especiais do nosso idioma (como "ã", "é", "ç") sejam exibidos corretamente. Se você esquecer isso, seus acentos podem virar símbolos estranhos. A tag <title> define o título do documento. O texto "Minha Primeira Página" não aparecerá no conteúdo principal, mas sim na parte superior do navegador (a aba) e será o nome do seu site nos Favoritos.

---

## 8. A tag <body> (O corpo da página)

Se o <head> é o cérebro, o <body> (corpo) é todo o resto. Esta tag é a segunda e última tag que colocamos diretamente dentro da tag <html>, e ela deve vir sempre depois do fechamento da tag </head>.

A tag <body> é o contêiner de todo o conteúdo visível da sua página web. Absolutamente tudo o que você quer que o seu usuário veja deve ser colocado aqui dentro, entre as tags <body> e </body>. Isso inclui todos os seus títulos (como <h1>), todos os seus parágrafos (tags <p>), todas as suas imagens (tags <img>), seus links (tags <a>), listas, tabelas, formulários e qualquer outro elemento de conteúdo.

O navegador pega tudo o que está dentro do <body> e renderiza (desenha) na janela principal. Por isso, esta é a seção onde você passará a maior parte do seu tempo como desenvolvedor, adicionando e estruturando o conteúdo real do seu site.

Este exemplo mostra uma estrutura completa. O <body> começa na linha 7, logo após o fechamento do </head>. Dentro dele, colocamos um <h1> (título) e dois <p> (parágrafos). Quando o navegador abrir este arquivo, ele lerá o <title> ("Café e Programação") para a aba, e então exibirá o "Aprenda HTML" e os dois parágrafos na janela principal. Todo o conteúdo dentro do <body> é o que o usuário final irá consumir.

---

## 9. Hierarquia de Títulos (<h1> a <h6>)

O HTML oferece seis níveis de tags de título, de <h1> a <h6>. Essas tags são usadas para definir a hierarquia e a estrutura de tópicos do seu conteúdo.

É fundamental entender que elas não servem apenas para deixar o texto grande ou pequeno; elas servem para informar ao navegador (e aos motores de busca) qual é a importância de cada título. A tag <h1> é o título mais importante da página (o título principal do seu documento) e, como regra geral, você deve usar apenas um <h1> por página.

As tags <h2> são usadas para subtítulos, ou seja, para os principais tópicos dentro do <h1>. As tags <h3> são usadas para sub-tópicos dentro de um <h2>, e assim por diante, até o <h6>, que é o nível de menor importância.

Usar essa hierarquia corretamente (não pular de um <h1> para um <h3>, por exemplo) é crucial para a "Semântica" do seu site, ajudando na acessibilidade (leitores de tela usam esses títulos para navegar) e no SEO (o Google entende melhor o seu conteúdo).

Este exemplo mostra uma estrutura de títulos correta. O <h1> ("Receita de Bolo de Chocolate") é o título principal da página. "Ingredientes" e "Modo de Preparo" são os dois tópicos principais, por isso usamos <h2>. Dentro de cada <h2>, temos subseções (Massa e Cobertura), que recebem a tag <h3>. O navegador, por padrão, exibirá o <h1> maior, o <h2> um pouco menor, e o <h3> menor ainda, refletindo visualmente essa hierarquia de importância.

---

## 10. Parágrafos (A tag <p>)

A tag <p> (parágrafo) é uma das tags mais comuns e essenciais do HTML. Ela é usada para agrupar blocos de texto em parágrafos. Sempre que você tiver um texto corrido, você deve envolvê-lo em tags <p>.

O navegador trata cada elemento <p> como um bloco distinto e, por padrão, adiciona automaticamente um espaço em branco (uma margem) acima e abaixo de cada parágrafo, separando-os visualmente. Isso é muito importante para a legibilidade; sem os parágrafos, seu texto seria um bloco único e difícil de ler.

É um erro comum entre iniciantes tentar separar parágrafos apenas apertando "Enter" várias vezes no editor de código. O HTML ignora espaços em branco extras e quebras de linha no seu código. Se você escrever dois blocos de texto um após o outro sem tags, o navegador os mostrará na mesma linha. A única maneira correta de criar um parágrafo é usando a tag <p> (abertura) e </p> (fechamento) para cada bloco de texto que você deseja separar.

No exemplo, temos um <h1> seguido por dois elementos <p>. Note que, no primeiro <p>, demos um "Enter" no meio do texto (depois de "HTML."). No entanto, o navegador irá ignorar essa quebra de linha e renderizará tudo em um único bloco de parágrafo. O navegador só cria uma separação visual entre a tag </p> (linha 5) e a tag <p> (linha 7). Isso garante que o conteúdo seja separado em dois parágrafos distintos na tela do usuário.

---

## 11. Criando Links (A tag <a>)

A tag <a> (âncora) é o que torna a web "web". É a tag que nos permite criar "hiperlinks" (ou apenas "links"), que conectam uma página a outra. A própria palavra "Hipertexto" no nome do HTML refere-se a essa capacidade de linkar documentos.

A tag <a> por si só não faz nada; ela precisa de um "atributo" chamado href (hypertext reference) para funcionar. O atributo href especifica o destino para onde o link deve levar o usuário quando clicado.

O texto que fica entre as tags <a> e </a> é o que o usuário vê e clica (chamado de "texto âncora"). Por exemplo, em <a href="https://www.google.com">Acessar Google</a>, o href é o destino (o site do Google) e "Acessar Google" é o texto que aparecerá na página, geralmente sublinhado e na cor azul por padrão.

Os links podem apontar para sites externos (URLs completas) ou para outras páginas dentro do seu próprio site (usando caminhos relativos, como /contato.html).

Este código mostra dois links. O primeiro link, dentro do primeiro parágrafo, usa uma URL completa (https://www.google.com) no atributo href. Isso levará o usuário para um site externo. O segundo link, no segundo parágrafo, usa um caminho relativo (contato.html). Isso diz ao navegador para procurar um arquivo chamado "contato.html" na mesma pasta onde o arquivo atual está. O texto clicável será "Google" e "Contato", respectivamente.

---

## 12. Inserindo Imagens (A tag <img>)

A tag <img> (imagem) é usada para incorporar imagens em sua página web. Diferente das outras tags que vimos (como <p> e <h1>), a tag <img> é uma tag "auto-fechável" (self-closing). Isso significa que ela não precisa de uma tag de fechamento (como </img>), pois ela não "envolve" nenhum conteúdo. Ela simplesmente é o conteúdo.

Para funcionar, a tag <img> depende de dois atributos obrigatórios: src e alt. O atributo src (source) especifica o caminho (a URL ou o local no seu computador) onde o arquivo de imagem está. O navegador usa esse caminho para buscar a imagem e exibi-la.

O atributo alt (alternative text) fornece um texto alternativo para a imagem. Esse texto é crucial por duas razões: Primeiro, ele será exibido se a imagem falhar ao carregar (por exemplo, se o caminho no src estiver errado); Segundo, ele é lido por leitores de tela para pessoas com deficiência visual, descrevendo o que está na imagem.

Neste exemplo, usamos a tag <img> (que pode ser escrita em várias linhas para facilitar a leitura dos atributos). O atributo src aponta para "https://via.placeholder.com/300x150". Este é um serviço online gratuito que gera uma imagem de exemplo (um retângulo cinza) no tamanho que especificamos (300 pixels de largura por 150 de altura). Isso é ótimo para testar o layout. O atributo alt descreve a imagem. Se você salvar este código e abrir no navegador, verá a imagem cinza aparecer abaixo do parágrafo.

---

## 13. Atributos HTML (Revisão de href e src)

Como vimos nas tags <a> e <img>, muitos elementos HTML são inúteis sem "atributos". Atributos são informações adicionais que fornecemos dentro da tag de abertura para modificar o comportamento ou a aparência do elemento.

Eles geralmente vêm em pares de nome/valor, no formato nome="valor". Os atributos são o que dá poder às tags, permitindo que elas façam mais do que apenas estruturar texto. Eles são colocados diretamente na tag de abertura, após o nome da tag.

Os dois atributos mais importantes que aprendemos são href e src. O atributo href (usado na tag <a>) define o destino do hiperlink. O atributo src (usado na tag <img>) define a fonte da imagem. Outro atributo muito comum é o alt (na tag <img>), que fornece o texto alternativo. Existem centenas de atributos, mas href, src e alt são fundamentais. Outro exemplo é o atributo style, que usamos para adicionar CSS e mudar a cor de um elemento.

Este slide revisa o conceito de atributos em diferentes tags. A tag <a> usa href para definir seu link. A tag <img> usa src para localizar a imagem e alt para a descrição. A tag <p> usa o atributo style para aplicar uma regra de CSS (cor vermelha) diretamente nela. O padrão é sempre nome_do_atributo="valor_do_atributo", sempre dentro da tag de abertura do elemento.

---

## 14. Comentários em HTML

Comentários são pedaços de texto no seu código HTML que são completamente ignorados pelo navegador. Eles não são exibidos na página e não afetam o layout ou o funcionamento do site. A utilidade dos comentários é para os desenvolvedores.

Eles servem para você deixar notas e lembretes para si mesmo, ou para explicar partes complexas do código para outros programadores que possam trabalhar no mesmo projeto. É uma prática excelente de organização, especialmente em arquivos grandes.

Outro uso muito comum dos comentários é "comentar" (desativar) temporariamente um bloco de código. Se você quer testar como a página ficaria sem uma imagem ou sem um parágrafo, em vez de apagar o código (e talvez perdê-lo), você pode simplesmente envolvê-lo em tags de comentário.

O HTML trata tudo o que está entre <!-- e --> como um comentário. Isso funciona para uma única linha ou para várias linhas.

Este código mostra dois usos de comentários. O primeiro comentário é uma nota de "TODO" (a fazer), um lembrete para o desenvolvedor. O segundo comentário envolve um <p> e uma <img>. Como eles estão dentro de <!-- e -->, o navegador irá ignorá-los completamente, e eles não aparecerão na página. Isso é perfeito para testar seu código sem precisar deletar nada.

---

## 15. A importância da Indentação

Indentação é o ato de usar espaços (geralmente com a tecla "Tab") no início das linhas de código para mostrar a hierarquia e o "aninhamento" dos elementos. É crucial entender que, para o navegador, a indentação não faz nenhuma diferença; o navegador ignora esses espaços em branco da mesma forma que ignora quebras de linha.

Um arquivo HTML todo escrito em uma única linha funcionaria perfeitamente para o navegador. No entanto, para um ser humano, seria impossível de ler e dar manutenção.

A indentação é uma "boa prática" essencial que serve unicamente para a legibilidade do código. Ela nos ajuda a ver rapidamente quais elementos estão "dentro" de quais outros elementos. A regra é simples: se um elemento é "filho" de outro (por exemplo, <p> está dentro do <body>), ele deve ter um nível de indentação (um Tab) a mais que o elemento "pai". Um código bem indentado é mais fácil de entender, mais rápido para encontrar erros e passa uma imagem mais profissional.

O código acima mostra dois exemplos. O "Bom Exemplo" é fácil de ler. Vemos claramente que o <body> contém um <div>, e que o <div> contém um <h1> e um <p>. A estrutura de "árvore" (pai/filho) é óbvia. No "Mau Exemplo", embora o código funcione, é uma bagunça. É difícil identificar o início e o fim de cada bloco e entender a relação entre eles. Sempre use a indentação para manter seu código limpo e organizado.

---

## 16. Montando uma Homepage Simples

Vamos agora juntar tudo o que aprendemos para criar a estrutura básica de uma página de "homepage" (a página inicial de um site). Esta página irá combinar a estrutura fundamental (DOCTYPE, html, head, body), os metadados corretos (charset, title), uma hierarquia de títulos (h1, h2), texto (p), uma imagem (img) e um link (a). Este é o bloco de construção fundamental de quase todas as páginas que você irá criar.

Lembre-se da estrutura de aninhamento e da indentação. O <head> e o <body> são filhos do <html>. O <meta> e o <title> são filhos do <head>. Todos os elementos de conteúdo (<h1>, <h2>, <p>, <img>, <a>) são filhos do <body>.

Ao criar um arquivo (por exemplo, index.html) com este conteúdo e abri-lo no navegador, você terá sua primeira página web completa e funcional, estruturada da maneira correta e pronta para receber estilos (CSS) no futuro.

Este é um arquivo HTML completo e bem estruturado. Linhas 1-6: A estrutura básica com DOCTYPE, <html>, <head> (com meta e title). Linha 8: O <h1>, título principal da página. Linha 9: Um parágrafo de introdução. Linha 11: Um <h2> para uma nova seção. Linha 12: Uma imagem (usando um placeholder). Linha 13: Um parágrafo relacionado à seção "Sobre Mim". Linhas 15-18: Outra seção (<h2>) contendo um parágrafo (<p>) que, por sua vez, contém um link (<a>) para um site externo (GitHub).
