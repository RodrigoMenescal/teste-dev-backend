# Serviço de cadastro
## Desafio Backend

[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![Postgres](https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white)](#)

Este projeto é uma APÌ criada usando **NodeJs, TypeScript e Postgres.**

## Indice
- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone o repository:

```bash
git clone https://github.com/RodrigoMenescal/teste-dev-backend/tree/dev
```

2. Crie uma tabela 
```bash
CREATE SEQUENCE  IF NOT EXISTS sq_pessoa INCREMENT 1 START 1;
CREATE TABLE IF NOT EXISTS tb_pessoa
(
    id int8 NOT NULL DEFAULT nextval('sq_pessoa'),
    nome varchar(200) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    CONSTRAINT pk_pessoa PRIMARY KEY (id)
);
```

3. Configure banco de dados em .env
```bash
DATABASE_URL=postgres://<USUARIO>:<SENHA>@localhost:5432/<DATABASE>
```

## Usage
1. Inicie o aplicativo com NPM
2. Api estará acessível em  http://localhost:3000
