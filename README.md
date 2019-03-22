# APITestCypress

Teste de API para DBServer

![alt text](http://www.dbserver.com.br/fotosnovosite/banners/banner---design--build.jpg)

## Resolução do problema:

O problema foi resolvido da seguinte forma, foi criando uma `BaseUrl` na `cypress.json`, para que as request consumisse globalmente a URL.<br />
Foi criada uma spec para cada módulo do PetStore, para que fosse mais fácil de dar manutenção ao código e para uma melhor organização. Também foi criada uma pasta chamada  `services`, nessa pasta fica todas as funções e validações, ficando as specs responsavel apenas de consumir as funções.<br />
Na `UserServices.js`, foi utilizado a biblioteca faker para gerar dados randômicos. No método `POST`, é criado um `json` com os dados gerado pelo faker, esse dados são consumidos pelos métodos `GET`,`DELETE`.

## Como rodar:
1. Faça um git clone : `https://github.com/GustavoBrasil/APITestCypress.git`;
2. No terminal digite: `npm install` para instalar as dependencias necessária para rodar o código;
3. Com o caminho da pasta aberto no terminal digite: `npm cy:open` para abrir a interface GUI;
4. Clicar em `Run all specs`.

