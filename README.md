  # Desafio [Softplan](https://www.softplan.com.br/)
  
  ## Sistema para Gerenciar Processos

  ### Pré-requisitos

[Node.js](https://nodejs.org/en/)

[Visual Code](https://code.visualstudio.com/)
[IntelliJ IDEA](https://www.jetbrains.com/pt-br/idea/)
ou sua Ide preferida

### 🎲 Rodando o Front End

```bash
# Clone este repositório

# Vá para a pasta frontend
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# O servidor iniciará na porta:3000
```


### 🎲 Rodando o Banco de Dados

```bash
# Vá para a pasta db
$ cd db

# Execute os scripts no seu gerenciador de banco de dados
*** Na criação da tabela Usuário , existe um insert para o primeiro acesso ao sistema pelo login,
usuário administrador, usuario = 'Softplan' e password = 123.

```
  
  ### 🎲 Rodando o Back End

```bash
# Clone este repositório

# Vá para a pasta backend
$ cd backend

# Navegue até a pasta src > main > resources, e edite o arquivo application
$ 
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=username
spring.datasource.password=password
spring.datasource.url=jdbc:mysql://localhost:3306/database?useTimezone=true&serverTimezone=America/Sao_Paulo

spring.jpa.hibernate.ddl-auto=update

***Altere os dados de Username, Password e Database, para poder acessar seu banco de dados

# Execute a aplicação
$ na sua idea execute o backend em Run

# O servidor iniciará na porta:8080
```
  
### Testes no Sistema

Foram realizados testes de Endpoint com [Insomnia](https://insomnia.rest/)
