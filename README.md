# Projeto tecnologias favoritas.
### Como executar o projeto:
-> Digito no terminal o comando **yarn install** para baixar todas as dependências do projeto.  
-> Altere o arquivo **src/config/database.js** de acordo com sua conexão com o banco de dados e deixe seu banco de dados ativo.  
-> Crie uma **database** com o mesmo nome especificado no **src/config/database.js** no campo **database**.  
-> Rode o comando **yarn sequelize db:migrate** para criar todas as tabelas no banco conforme as migrations.  
-> Digite no terminal **yarn dev** para executar o projeto com o nodemon.  
-> Use o **Postman** o **Insomnia** uma **Aplicação Web** ou até mesmo outra **API** para chamar as rotas do deste projeto que estão em **src/routes.js**.   

### Descrição do projeto:
O projeto, feito com Node, utiliza o ORM Sequelize, a biblioteca do Express e o banco Postgres. Nesse projeto é explorado a construção de relacionamentos de muitos para muitos N:N, a construção de Querys das mais variadas formas e as formas de se usar o Sequelize de maneira mais produtiva. Nesse projeto é feito cadastro de usuários, cadastro de endereços do usuário e cadastro de tecnologias usadas pelo usuário.     

### Requisitos de software e bibliotecas:  
-> Insominia ou Postman (Para testar as requisições). OBS: o Insomnia so funciona para sistemas 64bits.  
-> Node.  
-> npm ou yarn.  
-> Nodemon. (Faz a atualização automática do servidor todas vez que tivermos alteração no código).   
-> Express. (Disponibiliza incluirmos rotas na nossa aplicação e gerencia requisições de diferentes métodos HTTP de maneira fácil e eficiente).  
-> ORM Sequelize.  
-> Banco de dados Postgres.  
-> Biblioteca Cors. (Segurança de acesso ao back-end).  

### Links úteis:  
Documentação do Sequelize: https://sequelize.org/  
Documentação do Express: https://expressjs.com/pt-br/guide/routing.html  
Download do Insomnia: https://insomnia.rest/download/  
