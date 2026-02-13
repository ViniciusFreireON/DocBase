# Correções – Slides: O que é uma API? (o garçom da web)

Este README descreve as **correções** e **melhorias** aplicadas ao documento **slides-javascript-api-corrigido.md**.

---

## Conteúdo do documento

O arquivo contém **16 slides** sobre API e consumo de dados com JavaScript:

1. O que é uma API? (o garçom da web)  
2. Para que serve uma API? (conectando sistemas)  
3. Introdução ao fetch(): o pedido assíncrono  
4. Requisições GET: o padrão de leitura de dados  
5. Promises: a promessa de um valor futuro  
6. O uso de .then() para sucesso sequencial  
7. O uso de .catch() para tratamento de falhas  
8. O fluxo completo de fetch(), .then() e .catch()  
9. Preparando o HTML para dados dinâmicos  
10. Inserindo um único item no HTML  
11. Inserindo uma lista de itens no HTML (loops)  
12. Funções para organizar o código de exibição  
13. Diferença entre erros de rede e erros de resposta  
14. Verificando o status da resposta HTTP (o response.ok)  
15. O tratamento unificado de erros no .catch()  
16. Resumo e melhores práticas de consumo de API  

---

## Resumo das correções

| Tipo | Original | Correção |
|------|----------|----------|
| Títulos | "O Garçom da **W**eb", "**P**ara que **S**erve", "**O** Padrão de **L**eitura", etc. | Padronização em estilo frase: "o garçom da web", "para que serve", "o padrão de leitura" |
| Conteúdo errado (slide 2) | Exemplo sobre **oninput** e evento **input** (copiado de slides de Eventos) | Exemplo sobre **fetch()** e API de clima, coerente com "conectando sistemas" |
| Typo | "a **Promisse** entra em estado Pending" | "a **Promise** entra em estado Pending" |
| Numeração | 1.Pending, 2.Fulfilled, 1.O primeiro .then(), 1.Erros de Rede, 1.response.status, 1.Logar o Erro | **1.** Pending, **2.** Fulfilled, **1.** O primeiro .then(), **1.** Erros de rede, **1.** response.status, **1.** Logar o erro (espaço após número) |
| Estrutura slide 13 | Parágrafo "É crucial saber..." antes do título "Diferença entre Erros..." | Título do slide primeiro, depois teoria (dois tipos de falhas) e exemplo |
| Tags HTML | &lt;div&gt;, &lt;ul&gt;, &lt;li&gt; em prosa | **&lt;div&gt;** , **&lt;ul&gt;** (evitar conflito com Markdown) |
| Formatação | — | Termos técnicos em **negrito** (API, fetch, Promise, .then(), .catch(), response.ok, JSON, GET, etc.) |

Para a lista completa, consulte o [RELATORIO.md](RELATORIO.md).
