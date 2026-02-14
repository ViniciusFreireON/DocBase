import type { DocumentItem } from '../types/document';

// Em produção os .md ficam em public (raiz do deploy)
const basePath = '';

function path(p: string): string {
  return basePath + p;
}

export const documents: DocumentItem[] = [
  // ——— Front-end (HTML/CSS) ———
  { type: 'html-css', category: 'slide', title: 'Conteúdo', desc: 'HTML, web, marcação.', path: path('documentos/html-css/slides-conteudo-corrigido.md') },
  { type: 'html-css', category: 'slide', title: 'Listas e formulários', desc: 'Listas e formulários.', path: path('documentos/html-css/slides-listas-formularios-corrigido.md') },
  { type: 'html-css', category: 'slide', title: 'Estrutura de projeto', desc: 'Pastas e arquivos.', path: path('documentos/html-css/slides-estrutura-projeto-corrigido.md') },
  { type: 'html-css', category: 'slide', title: 'Revisão HTML e CSS', desc: 'Revisão HTML e CSS.', path: path('documentos/html-css/slides-revisao-html-css-corrigido.md') },
  { type: 'html-css', category: 'slide', title: 'CSS: camada de estilo', desc: 'CSS camada de estilo.', path: path('documentos/html-css/slides-css-camada-estilo-corrigido.md') },
  { type: 'html-css', category: 'slide', title: 'Box model e grid', desc: 'Box model e grid.', path: path('documentos/html-css/slides-box-model-grid-corrigido.md') },
  { type: 'html-css', category: 'slide', title: 'Flexbox', desc: 'Flexbox.', path: path('documentos/html-css/slides-flexbox-corrigido.md') },
  { type: 'html-css', category: 'slide', title: 'Landing page', desc: 'Landing page.', path: path('documentos/html-css/slides-landing-page-corrigido.md') },
  { type: 'html-css', category: 'readme', title: 'README (geral)', desc: 'Visão geral dos documentos Front-end.', path: path('documentos/html-css/README.md') },
  { type: 'html-css', category: 'readme', title: 'README conteúdo', desc: 'Resumo das correções: slides conteúdo.', path: path('documentos/html-css/README-slides-conteudo.md') },
  { type: 'html-css', category: 'readme', title: 'README listas e formulários', desc: 'Resumo das correções: listas e formulários.', path: path('documentos/html-css/README-slides-listas-formularios.md') },
  { type: 'html-css', category: 'readme', title: 'README estrutura de projeto', desc: 'Resumo das correções: estrutura de projeto.', path: path('documentos/html-css/README-slides-estrutura-projeto.md') },
  { type: 'html-css', category: 'readme', title: 'README revisão HTML/CSS', desc: 'Resumo das correções: revisão HTML/CSS.', path: path('documentos/html-css/README-slides-revisao-html-css.md') },
  { type: 'html-css', category: 'readme', title: 'README CSS camada de estilo', desc: 'Resumo das correções: CSS camada de estilo.', path: path('documentos/html-css/README-slides-css-camada-estilo.md') },
  { type: 'html-css', category: 'readme', title: 'README box model e grid', desc: 'Resumo das correções: box model e grid.', path: path('documentos/html-css/README-slides-box-model-grid.md') },
  { type: 'html-css', category: 'readme', title: 'README flexbox', desc: 'Resumo das correções: flexbox.', path: path('documentos/html-css/README-slides-flexbox.md') },
  { type: 'html-css', category: 'readme', title: 'README landing page', desc: 'Resumo das correções: landing page.', path: path('documentos/html-css/README-slides-landing-page.md') },
  { type: 'html-css', category: 'relatorio', title: 'Relatório geral', desc: 'Todas as correções e melhorias nos 8 documentos.', path: path('documentos/html-css/RELATORIO.md') },

  // ——— JavaScript ———
  { type: 'js', category: 'slide', title: 'Introdução ao JavaScript', desc: 'Variáveis, tipos, funções, DOM, eventos.', path: path('documentos/js/slides-javascript-introducao-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Decisão (if)', desc: 'if, else, operadores, validação.', path: path('documentos/js/slides-javascript-decisao-if-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Repetição (laços)', desc: 'while, do while.', path: path('documentos/js/slides-javascript-repeticao-loops-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Laço for', desc: 'Sintaxe, passo, break/continue, tabuada.', path: path('documentos/js/slides-javascript-laco-for-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Arrays', desc: 'Criação, índice, length, push/pop, iteração.', path: path('documentos/js/slides-javascript-arrays-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Funções', desc: 'Declaração, parâmetros, return, escopo, hoisting.', path: path('documentos/js/slides-javascript-funcoes-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Arrays: métodos avançados', desc: 'splice, slice, map, filter, forEach.', path: path('documentos/js/slides-javascript-arrays-metodos-avancados-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Objetos literais', desc: 'Sintaxe, propriedades, métodos, aninhamento.', path: path('documentos/js/slides-javascript-objetos-literais-corrigido.md') },
  { type: 'js', category: 'slide', title: 'DOM', desc: 'document, querySelector, modificação, createElement.', path: path('documentos/js/slides-javascript-dom-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Eventos', desc: 'click, submit, addEventListener, validação.', path: path('documentos/js/slides-javascript-eventos-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Local Storage', desc: 'setItem, getItem, JSON, persistência.', path: path('documentos/js/slides-javascript-local-storage-corrigido.md') },
  { type: 'js', category: 'slide', title: 'API', desc: 'fetch, Promise, GET, tratamento de erros.', path: path('documentos/js/slides-javascript-api-corrigido.md') },
  { type: 'js', category: 'slide', title: 'POST, PUT e DELETE', desc: 'CRUD, fetch com body, async/await.', path: path('documentos/js/slides-javascript-post-put-delete-corrigido.md') },
  { type: 'js', category: 'slide', title: 'Projeto final CRUD', desc: 'Planejamento, GET/POST/PUT/DELETE, testes.', path: path('documentos/js/slides-javascript-projeto-final-crud-corrigido.md') },
  { type: 'js', category: 'readme', title: 'README (geral)', desc: 'Visão geral da pasta js e finalidade de cada documento.', path: path('documentos/js/README.md') },
  { type: 'js', category: 'readme', title: 'README decisão (if)', desc: 'Resumo das correções: decisão if.', path: path('documentos/js/README-slides-decisao-if.md') },
  { type: 'js', category: 'readme', title: 'README repetição (laços)', desc: 'Resumo das correções: repetição.', path: path('documentos/js/README-slides-repeticao-loops.md') },
  { type: 'js', category: 'readme', title: 'README laço for', desc: 'Resumo das correções: laço for.', path: path('documentos/js/README-slides-laco-for.md') },
  { type: 'js', category: 'readme', title: 'README arrays', desc: 'Resumo das correções: arrays.', path: path('documentos/js/README-slides-arrays.md') },
  { type: 'js', category: 'readme', title: 'README funções', desc: 'Resumo das correções: funções.', path: path('documentos/js/README-slides-funcoes.md') },
  { type: 'js', category: 'readme', title: 'README arrays (avançados)', desc: 'Resumo das correções: métodos de array.', path: path('documentos/js/README-slides-arrays-metodos-avancados.md') },
  { type: 'js', category: 'readme', title: 'README objetos literais', desc: 'Resumo das correções: objetos literais.', path: path('documentos/js/README-slides-objetos-literais.md') },
  { type: 'js', category: 'readme', title: 'README DOM', desc: 'Resumo das correções: DOM.', path: path('documentos/js/README-slides-dom.md') },
  { type: 'js', category: 'readme', title: 'README eventos', desc: 'Resumo das correções: eventos.', path: path('documentos/js/README-slides-eventos.md') },
  { type: 'js', category: 'readme', title: 'README local storage', desc: 'Resumo das correções: local storage.', path: path('documentos/js/README-slides-local-storage.md') },
  { type: 'js', category: 'readme', title: 'README API', desc: 'Resumo das correções: API.', path: path('documentos/js/README-slides-api.md') },
  { type: 'js', category: 'readme', title: 'README POST/PUT/DELETE', desc: 'Resumo das correções: POST, PUT, DELETE.', path: path('documentos/js/README-slides-post-put-delete.md') },
  { type: 'js', category: 'readme', title: 'README projeto final CRUD', desc: 'Resumo das correções: projeto final CRUD.', path: path('documentos/js/README-slides-projeto-final-crud.md') },
  { type: 'js', category: 'relatorio', title: 'Relatório geral', desc: 'Todas as correções e ajustes no conteúdo.', path: path('documentos/js/RELATORIO.md') },
];
