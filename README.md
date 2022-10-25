# Projeto Trybe Futebol Clube

## Objetivo

O objetivo desse projeto é desenvolver uma API usando o método TDD e integrar as aplicações usando docker compose para que as três (banco, back e front) funcionem da forma devida.
Os banco será consumido usando o ORM Sequelize respeitando as regras de negócio providas no projeto e a API vai ser consumida pelo front.
Para adicionar uma partida é necessário estar logada e com um token de admin, usuários comuns não podem fazê-lo.
O aplicativo TFC é um site informativo sobre partidas e classificações de futebol! ⚽️

## Conceitos utilizados nesse projeto:

* Typescript
* Programação orientada a objetos
* Aquitetura em camadas MSC
* Dockerfile e Docker Compose
* Modelagem de dados com MySQL através do Sequelize
* Construção de API Rest para consumir os modelos criados
* 

### Pre requisitos para instalação

Versão do NPM necessaria: 8.x

Versão do Node necessaria: 16.x

Sistema Operacional Distribuição Unix

Docker

Docker-compose versão >=1.29.2

### Instalando

Instale as dependencias com:

    npm install

E para fazer rodar:

    npm run compose:up

A aplicação frontend vai rodar na porta 3000 no localhost da sua máquina
A API vai rodar na porta 3001
O banco vai rodar na porta 3002

## Deployment

Ainda não foi feito deploy do projeto

## Autor

  - **João Paulo Veloso** - *Desenvolveu todo o código* -
