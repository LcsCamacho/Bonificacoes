# Projeto Bonificações ACME Parafusos

## Tecnologias utilizadas

- NodeJS
- Express
- Prisma
- MariaDB
- Insomnia
- Typescript

## Sobre o projeto

- Algumas empresas costumam pagar participações nos lucros ou resultados de acordo com a legislação trabalhista ou acordo sindical a qual pertencem,
outras tratam apenas como benefício aos funcionários como insentivo ou agradecimento pelo serviço prestado.
A empresa ACME Parafusos precisa de um sistema para cadastrar/registrar e calcular as bonificações pagas a seus funcionários.

## Desafio

- Você foi contratado como Programador Back-End, por isso deve desenvolver a API com as funcionalidades documentadas,
A bonificação é 2% do salário multiplicado pelo total de anos de trabalho vezes a nota do desempenho (de 0 a 10)
Ex: um funcionário que recebe 1000.00 de salário, trabalhou 3 anos e obteve 10 de desempenho receberá 600.00 de bonificação,
utilize os dados a seguir para testar sua aplicação através da ferramenta Insomnia

## Observações

- Dados calculados nem sempre precisam ser armazenados em bancos de dados,
Porém, neste caso a empresa precisa registrar o histórico de pagamentos e em alguns casos pode haver diferença entre o valor calculado e o valor realmente recebido pelo funcionário/colaborador então o resultado deve ser armazenado no banco de dados.

## Checklist

- [x] Criar um projeto NodeJS

- [x] Criar um arquivo README.md com as instruções de instalação e execução do projeto

- [x] Criar um arquivo .gitignore para ignorar a pasta node_modules

- [x] Criar a estrutura de pastas do projeto, seguindo o padrão MVC

- [x] Criar a pasta docs para armazenar os arquivos de documentação do projeto

- [ ] Criar o banco de dados e as tabelas necessárias para armazenar os dados

- [ ] Criar as funções para cadastrar, listar, atualizar e excluir funcionários

- [ ] Criar as rotas para cadastrar, listar, atualizar e excluir funcionários

- [ ] Fazer os testes no Insomnia

- [ ] Exportar a collection do Insomnia e colocar na pasta docs
