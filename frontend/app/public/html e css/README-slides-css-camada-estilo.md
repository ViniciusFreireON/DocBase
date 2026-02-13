# Melhorias e Correções – Slides CSS: A Camada de Estilo da Web

## Sobre o documento

O arquivo **slides-css-camada-estilo-corrigido.md** contém 16 tópicos sobre CSS externo e reutilização, anatomia da regra CSS, seletores (tipo, classe, ID), cores (nome, hex, RGB, RGBA), unidades (px, %, em, rem), fontes e texto, background, Box Model (content, padding, border, margin), cascata, especificidade, combinadores de seletores e melhores práticas.

---

## Correções aplicadas

### Slide "Combinando Seletores"
| Problema | Correção |
|----------|----------|
| Exemplo trazia apenas `.container-central` e `.alinhado-centro` (centralização), tema mais de Box Model do que de combinadores | Incluídos exemplos de **combinadores** (`nav a`, `ul > li`, `h2 + p`, `h2 ~ p`); exemplo de centralização mantido ao final como distinção entre centralizar bloco vs. texto |

### Slide "Especificidade"
| Problema | Correção |
|----------|----------|
| Parágrafo sobre `.card-produto` (padding e margin) confundia com conteúdo de Box Model já tratado | Conceito de especificidade ilustrado com comparação entre #id, .classe e elemento; menção a `.card-produto` integrada como exemplo de uso de classe |

### Notação de especificidade
- Mantida em texto claro (ex.: 1.0.0 vs 0.10.0), sem símbolos matemáticos desnecessários.

---

## Melhorias no material

- 16 tópicos organizados de forma progressiva.
- Exemplos de combinadores (descendente, filho, adjacente, geral) bem diferenciados.
- Separação entre especificidade e Box Model.
- Explicações objetivas sobre cascata e herança.
