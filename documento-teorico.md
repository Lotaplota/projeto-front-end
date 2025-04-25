# Trabalho Final do Bimestre

O trabalho apresentado tem como objetivo destacar os principais conceitos aplicados na execução do projeto final do bimestre. Neste documento são apresentados os casos de estrutura, organização, responsividade e acessibilidade que foram utilizados na aplicação.

## 1. Conceitos Principais Aplicados

Durante a criação do projeto, colocamos em prática os principais conceitos estudados em HTML e CSS, além de nos aprofundarmos em JavaScript básico para adicionar funcionalidades interativas. Os tópicos mais relevantes aplicados foram:

- **HTML Semântico**: Estruturamos o conteúdo utilizando tags apropriadas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, entre outras. Isso melhora a leitura do site por mecanismos de busca e tecnologias assistivas.
- **CSS Externo e Responsivo**: Criamos um estilo unificado em um arquivo externo para facilitar a manutenção do código. Usamos Flexbox e Grid Layout para garantir a responsividade.
- **JavaScript**: Incluímos um carrossel funcional na página inicial e utilizamos JS para carregar dinamicamente o cabeçalho e o rodapé em todas as páginas, promovendo reutilização de código.
- **Boas práticas de design**: Aplicamos uma paleta de cores suave e tipografias legíveis (importadas do Google Fonts), além de botões com contraste adequado e efeitos visuais simples.

![Palheta de cores utilizada](img/palette.png)

## 2. Estrutura do HTML e Justificativa do Uso de Tags Semânticas

Nosso HTML foi dividido em arquivos reutilizáveis, como `header.html` e `footer.html`, facilitando a manutenção. A estrutura principal inclui:

- `<header>`: onde fica o logo e a navegação principal. Usamos uma `<nav>` com links organizados por listas.
- `<main>` e `<section>`: separam o conteúdo por blocos lógicos, como carrossel, lista de carros, depoimentos e formulário de contato.
- `<article>`: utilizado para cada "cartão de carro", pois cada um é uma unidade independente de conteúdo.
- `<footer>`: reúne informações institucionais, links úteis, redes sociais e formulário de newsletter.

Essas escolhas melhoram a acessibilidade e tornam o código mais compreensível.

## 3. Organização do CSS

Todo o estilo do site está centralizado em `css/style.css`, com organização por seções (header, botões, cards de carros, rodapé etc.). Seguindo boas práticas:

- Utilizamos classes bem nomeadas, com padrão bloco-elemento-modificador para facilitar a leitura.
- Aplicamos variáveis CSS para manter consistência de cores e tamanhos (caso necessário).
- Utilizamos flex e grid para distribuir os elementos de forma concreta em diferentes tamanhos de tela.

## 4. Responsividade

O site foi projetado para funcionar bem em diversos tamanhos de tela. A responsividade foi implementada com:

- Unidades relativas (%, em, rem) para tamanhos de fonte e largura.
- Media queries com breakpoints para ajustar o layout em telas menores, como celulares e tablets.
- Componentes responsivos como carrossel e grid de carros que se reorganizam conforme o espaço disponível.

## 5. Acessibilidade

Algumas ações que tomamos para melhorar a acessibilidade do site:

- Uso de atributos `alt` descritivos em todas as imagens.
- Navegação por teclado garantida nos principais botões e seções.
- Uso de `aria-labels` nos ícones de redes sociais para leitores de tela.
- Cores com contraste suficiente entre texto e fundo, facilitando a leitura por pessoas com baixa visão.
---
### Autores
- Anny Beatriz Silva de Carvalho
- Cayo Mendes de Carvalho
- Kaio de Bessa Apóstolo
- Karina de Bessa Apóstolo
- Kristhian Lucas Rodrigues de Lima Pinto
- Peterson Patrick Carvalho de Queiroz