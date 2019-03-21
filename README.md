# APITestCypress

Teste de API para DBServer

![alt text](http://www.dbserver.com.br/fotosnovosite/banners/banner---design--build.jpg)

## Resolução do problema:
O problema foi resolvido da seguinte forma, foi criando uma `BaseUrl` na `cypress.json`, para que as request consumisse globalmente a URL.
No `PetStoreAPITestCase_spec.js`, ficou responsável pelo teste, para cada `it` foi gerado uma `request` com a tag para ser consumida pela `request`
, no final de cada `request` era feita uma verificação para garantir a integridade da operação.
