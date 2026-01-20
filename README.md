# 📱 Pokedex — Projeto em JavaScript

Projeto de uma **Pokedex interativa**, desenvolvida com **HTML, CSS e JavaScript**, que consome dados diretamente da **PokeAPI** para buscar e exibir informações dos Pokémon em tempo real.

O projeto foi criado com foco no consumo de APIs REST, manipulação do DOM, uso de funções assíncronas (`async/await`) e organização de lógica em aplicações front-end.

---

## 🎯 Objetivo do Projeto

O principal objetivo deste projeto é praticar conceitos fundamentais do desenvolvimento web moderno, como:

- Consumo de APIs externas
- Manipulação dinâmica de dados no HTML
- Uso de JavaScript assíncrono
- Interação com formulários e botões
- Organização de código front-end

A aplicação permite que o usuário busque Pokémon pelo **nome ou número**, exibindo suas informações de forma dinâmica na interface.

---

## ⚙️ Como Funciona a Aplicação

Ao iniciar a aplicação, um Pokémon padrão é carregado automaticamente.

O usuário pode:
- Digitar o **nome ou número** do Pokémon no campo de busca
- Navegar entre os Pokémon utilizando os botões **Anterior** e **Próximo**

Cada ação dispara uma requisição HTTP para a **PokeAPI**, que retorna os dados do Pokémon solicitado. Essas informações são então processadas e exibidas na tela, incluindo nome, número e imagem animada.

Caso o Pokémon não seja encontrado, a aplicação trata o erro e informa ao usuário que o Pokémon não existe.

---

## 🌐 Consumo da API (PokeAPI)

Este projeto utiliza a **PokeAPI**, uma API pública que fornece dados completos sobre o universo Pokémon.

A comunicação com a API é feita através da função `fetch`, utilizando requisições HTTP do tipo GET para o endpoint:

https://pokeapi.co/


Os dados retornados incluem:
- Nome do Pokémon
- Número (ID)
- Sprites (imagens), incluindo versões animadas

O uso de `async/await` garante que as requisições sejam tratadas de forma assíncrona, mantendo a aplicação fluida e organizada.

---

## 🛠 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **PokeAPI (API REST pública)**

---

## 📄 Descrição dos Arquivos

### `index.html`
- Estrutura principal da aplicação
- Contém os elementos da Pokédex:
  - Nome do Pokémon
  - Número
  - Imagem
  - Campo de busca
  - Botões de navegação
- Importa os arquivos de estilo e script

---

### `style.css`
- Responsável pelo layout e aparência da Pokédex
- Define o posicionamento dos elementos
- Estiliza botões, campo de busca e imagem do Pokémon
- Trabalha com responsividade e estética visual inspirada na Pokédex

---

### `script.js`
- Contém toda a lógica da aplicação
- Realiza requisições à PokeAPI
- Processa os dados retornados pela API
- Atualiza dinamicamente o DOM
- Controla a navegação entre Pokémon
- Trata erros quando o Pokémon não é encontrado

---

## ⌨️ Controles e Interações

- **Campo de busca** → Buscar Pokémon pelo nome ou número
- **Botão Anterior** → Volta para o Pokémon anterior
- **Botão Próximo** → Avança para o próximo Pokémon

---

## 🧠 Conceitos Aplicados

- Consumo de API REST
- Requisições HTTP com `fetch`
- JavaScript assíncrono (`async/await`)
- Manipulação do DOM
- Eventos de formulário e clique
- Tratamento de erros
- Organização de código front-end

---

## 📚 Referência

Este projeto foi desenvolvido com base em um tutorial do YouTube do canal:

**Manual do Dev**

O código foi adaptado e reorganizado, visando melhor compreensão do consumo de APIs e da lógica JavaScript.


