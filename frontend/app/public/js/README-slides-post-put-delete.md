# Correções – Slides: O que são POST, PUT e DELETE?

Este README descreve as **correções** e **melhorias** aplicadas ao documento **slides-javascript-post-put-delete-corrigido.md**.

---

## Conteúdo do documento

O arquivo contém **16 slides** sobre os métodos HTTP POST, PUT e DELETE e CRUD em JavaScript:

1. O que são POST, PUT e DELETE?  
2. O método POST – criando dados na API  
3. O método PUT – atualizando dados na API  
4. O método DELETE – removendo dados da API  
5. Criação de objeto e envio via fetch() (POST prático)  
6. Manipulação de resposta da API – sucesso e erro  
7. Simulação de API local com ferramentas  
8. Conversão de dados: objeto JS e string JSON  
9. Atualização do DOM com dados criados/atualizados  
10. O conceito CRUD e sua implementação em JS  
11. Organização de código: separando a lógica da API  
12. Usando async/await no fetch() para o CRUD  
13. Caso prático: criando uma tarefa (POST)  
14. Caso prático: marcando tarefa como concluída (PUT)  
15. Caso prático: excluindo um comentário (DELETE)  
16. Conclusão do CRUD: fluxo completo de interação  

---

## Resumo das correções

| Tipo | Original | Correção |
|------|----------|----------|
| Títulos | "**O Q**ue **S**ão", "**O M**étodo **P**OST – **C**riando **D**ados", etc. | Padronização em estilo frase: "O que são", "O método POST – criando dados na API" |
| Redação | "ao invés de" | "em vez de" |
| Notação | "JS Object $\leftrightarrow$ JSON String" (LaTeX) | "objeto JS e string JSON" (texto) |
| Numeração | 1) 2) 3) em listas | **1.** **2.** **3.** (espaço após número) |
| Quebras de linha | "Excluir" ou "Remover Item" / "a requisição"; "Salvar" / "a função"; "Adicionar" / "o JavaScript" | Texto contínuo |
| Estrutura slide 13 | Parágrafo "Vamos aplicar..." antes do título "Caso Prático: Criando uma Tarefa" | Título do slide primeiro, depois teoria e exemplo |
| Tags HTML | &lt;li&gt;, &lt;div&gt; em prosa | **&lt;li&gt;** , **&lt;div&gt;** (evitar conflito Markdown) |
| Formatação | — | Termos técnicos em **negrito** (POST, PUT, DELETE, fetch, CRUD, JSON.stringify, response.ok, etc.) |

Para a lista completa, consulte o [RELATORIO.md](RELATORIO.md).
