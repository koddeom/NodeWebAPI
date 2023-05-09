# NodeWebAPI
APENAS UM TESTE

##### Hopedado no Render.com
https://nodewebapi.onrender.com/api/brasilApi/banco/104)
https://nodewebapi.onrender.com/api/brasilApi/bancos

Programa NodeJs exemplo acessa uma webAPI externa.

Peculiaridades do código:

- Utiliza Swagger (swaager autogen) para gerenciar a documetacao
- Axios para acessar api externa que retorna as insrtituições bancarias do país
- Utiliza express no modelo MVC e Views com padrão EJS
- Uma implemetacao DTO/ Business/ Service pode ser feita no futuro


##### NOTAS

1 - Na pasta do projeto
	npm init -y

2 - Instalacao basica:
    -http    - Listner para ouvir porta
    -express - Prove MVC
    -debug   - Prove debug de codigo
	npm install http express debug --save


##### Usando o gerador de aplicacao do express

1- npm install -g express-generator

Exemplo (cria uma aplicacao na Pasta NodeWebAPI):

```
     express -ejs -view=ejs -css --git NodeWebAPI
     npm install
     set DEBUG=myapp:* 
     npm start
```

##### Bibliotecas
```
npm install nodemon
npm install axios
npm install cors
npm install body-parser
npm install swagger-ui-express
npm install --save-dev swagger-autogen
```

