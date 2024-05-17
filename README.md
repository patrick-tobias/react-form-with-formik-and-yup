# react-form-with-formik-and-yup
Formulários em react.js

## Descrição do Projeto
**Objetivo:** Demonstrar o uso das bibliotecas **Formik** e **Yup** no desenvolvimento de formulários em react.js. <br><br>
Este projeto foi desenvolvido como parte dos estudos em JavaScript para melhorar a gestão de estados dos campos de formulários e validação de dados no front-end, proporcionando uma melhor experiência ao usuário.

Foi utilizado como base desse projeto um formulário de cadastro de cliente, desenvolvido anteriormente para uma atividade acadêmica.<br>
Alguns dos requisitos para o desenvolvimento são: <br>

### Requisitos Funcionais
| Regra  | Nome                   | Descrição                                                                                                  |
|--------|------------------------|------------------------------------------------------------------------------------------------------------|
| RF0001 | Cadastro de cliente    | O sistema deve possibilitar o cadastro de clientes.                                                        |
| RF0002 | Cadastro de endereço   | O sistema deve possibilitar associar diversos endereços ao cadastro de um cliente.                         |

### Requisitos Não Funcionais
| Regra  | Nome                   | Descrição                                                                                                  |
|--------|------------------------|------------------------------------------------------------------------------------------------------------|
| RNF001 | Senha forte            | A senha deve conter pelo menos 8 caracteres, letras maiúsculas, minúsculas e caracteres especiais.         |
| RNF002 | Confirmar senha        | O usuário obrigatoriamente deve digitar duas vezes a mesma senha no momento do registro da mesma.          |

### Regras de Negócio
| Regra  | Nome                   | Descrição                                                                                                  |
|--------|------------------------|------------------------------------------------------------------------------------------------------------|
| RN0001 | Cadastro de cliente    | Obrigatório o cadastro dos seguintes dados: Gênero, Nome, Data de Nascimento, CPF, Telefone (DDD + número), e-mail, senha, endereço residencial. |
| RN0002 | Composição de endereço | Tipo de residência, Tipo Logradouro, Logradouro, Número, Bairro, CEP, Cidade, Estado e País. Todos os campos anteriores são de preenchimento obrigatório. Opcionalmente pode ser preenchido um campo observações. |


## Tecnologias Utilizadas e Documentação
- **React.js**
- **Formik:**
- **Yup:**

## Documentação
Encontre mais informações sobre as bibliotecas utilizadas em: <br>
https://formik.org/ e https://github.com/jquense/yup

## Instalação e Uso
Siga os passos abaixo para rodar este projeto localmente:

1. Download / Clone do repositório <br>
   ```$ git clone https://github.com/patrick-tobias/react-form-with-formik-and-yup.git```
   
3. Navegue até o diretório em seu terminal <br>
   ```$ cd formularios```
   
5. Instale as dependências <br>
   ```$ npm install```
   
7. Inicie localmente <br>
   ```$ npm start```

A execução dos passos iniciará o servidor local e abrirá o projeto em seu navegador padrão.

