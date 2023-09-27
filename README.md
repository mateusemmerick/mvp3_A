# MVP Sprint 3 - iPlace

Este é um projeto que faz parte do MVP da sprint 3 - Desenvolvimento Back-end Avançado.
O projeto consiste em um site para comercialização de iPhones. Por meio dele é possível ofertar e comprar um iPhone.

# APIs

O front-end se comunica com 3 APIs, duas delas desenvolvidas, e uma API gratuita. 
A API relacionada ao estoque se encontra no link: https://github.com/mateusemmerick/mvp3_C1
A API relacionada ao registro de vendas se encontra no link: https://github.com/mateusemmerick/mvp3_C2

# API Externa
A API externa utilizada foi a ViaCEP (viacep.com.br). É uma API gratuita, sem necessidade de registro para utilização. A rota utilizada foi a de validação do CEP, obtendo o retorno no formato JSON. Essa rota é executada diretamente no front-end.

Para usá-la, basta utizar o endpoint: viacep.com.br/ws/{CEP}/json/ , onde {CEP} é a variável para consulta. 
A resposta da API são informações completas como logradouro, bairro, cidade, estado entre outras.

# Como executar
Será necessário ter o Nodejs, ou o npm, instalado.

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

$ npm install Este comando instala as dependências/bibliotecas, descritas no arquivo package.json. Uma pasta chamada node_modules será criada.

Para executar a interface basta executar o comando: $ npm start

Abra o http://localhost:3000/#/ no navegador.

Esse front-end também poderá ser executado via docker, utilizando os seguintes comandos (necessário possuir docker desktop instalado):

Criação da imagem
```
docker build . -t <Nome da imagem>
```
Execução da imagem
```
docker run -d -p 3000:3000 <Nome da imagem>
```
