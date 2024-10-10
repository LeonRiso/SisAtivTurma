markdown
# Requisitos de Infraestrutura

## Visão Geral
Este projeto é uma aplicação que requer uma infraestrutura específica para ser executada de forma eficiente. Abaixo estão os requisitos de infraestrutura necessários para a implementação e execução do projeto.

## Pré-requisitos

1. **Sistema Operacional**:
   - Windows, macOS ou Linux.

2. **Node.js**:
   - Versão 14 ou superior.

3. **Banco de Dados**:
   MySQL
   - [Prisma ORM](https://www.prisma.io/) para interação com o banco de dados.

4. **Gerenciador de Pacotes**:
   - npm (incluído com Node.js) ou Yarn.


## Configuração do Ambiente

1. **Clone o Repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>

- Instale as Dependências:
    bash
    npm install
    Configuração do Banco de Dados:

Crie um banco de dados utilizando o PostgreSQL ou MySQL.
Adicione as credenciais do banco de dados em um arquivo .env:

DATABASE_URL="mysql://root:@localhost:3306/turmas"
Executar Migrações:

    
    npx prisma migrate dev
    Popular o Banco de Dados (opcional):

    npx prisma db seed
    Execução da Aplicação
    Para iniciar a aplicação, utilize o seguinte comando:

bash
npm start

Inicie o Front-End navegando até a pasta front e abrindo o arquivo index.html no navegador ou com Live Server do VsCode.





