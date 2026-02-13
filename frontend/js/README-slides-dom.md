# Correções – Slides: O que é o DOM? A estrutura da página web

Este README descreve as **correções** e **melhorias** aplicadas ao documento **slides-javascript-dom-corrigido.md**.

---

## Conteúdo do documento

O arquivo contém **16 slides** sobre o DOM em JavaScript:

1. O que é o DOM? A estrutura da página web  
2. DOM vs. HTML: entendendo a diferença  
3. O objeto document e a porta de entrada  
4. Nós, elementos e hierarquia (pai, filho, irmão)  
5. Seleção I: getElementById (a busca exata)  
6. Seleção II: querySelector (a versatilidade do seletor CSS)  
7. Seleção III: querySelectorAll (listas de elementos)  
8. Outros métodos antigos: getElementsByTagName e getElementsByClassName  
9. Modificação de texto I: textContent (texto puro e seguro)  
10. Modificação de conteúdo II: innerHTML (HTML rico)  
11. Modificação de atributos: setAttribute e getAttribute  
12. Gerenciamento de classes: classList (mais prático que setAttribute)  
13. Inserção de elementos I: criando com createElement  
14. Inserção de elementos II: anexando com appendChild  
15. Estilização dinâmica com element.style  
16. Inserção em posições específicas: insertAdjacentElement  

---

## Resumo das correções

| Tipo | Original | Correção |
|------|----------|----------|
| Títulos | "A Estrutura", "Entendendo a Diferença", etc. | Padronização em estilo frase: "A estrutura", "entendendo a diferença" |
| Pontuação | "DOM.Por ser" | "DOM. Por ser" (espaço após ponto) |
| Quebra de linha | setAttribute('class' , 'nova-classe') partido | setAttribute('class', 'nova-classe') em texto contínuo |
| Quebra de linha | 'div' , 'p' , 'a' , 'li' partidos em createElement | 'div', 'p', 'a', 'li' em texto contínuo |
| Numeração | 1.add(classe), 2.remove(classe), etc. | 1. add(classe), 2. remove(classe) (espaço após número) |
| Numeração | 1.Criação, 2.Configuração, 3.Anexação | 1. Criação, 2. Configuração, 3. Anexação |
| Numeração | 1.beforebegin, 2.afterbegin, etc. | 1. beforebegin, 2. afterbegin (espaço após número) |
| Redação | "e o lista.appendChild" (quebra/typo) | "e lista.appendChild(novoItem) o insere" |
| Tags HTML no texto | <html>, <body>, etc. em prosa | **&lt;html&gt;**, **&lt;body&gt;** (evitar conflito com Markdown) |
| Formatação | — | Termos técnicos em **negrito** (DOM, document, getElementById, querySelector, NodeList, textContent, innerHTML, classList, createElement, appendChild, etc.) |

Para a lista completa, consulte o [RELATORIO.md](RELATORIO.md).
