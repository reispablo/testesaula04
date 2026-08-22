# Atividade — cadastro e login com Cypress

## Contexto

O time decidiu proteger as duas portas de entrada do Seu Barriga: criação de usuário e autenticação. Para cada funcionalidade, a suíte deve demonstrar o comportamento esperado e duas rejeições importantes.

Não use nome completo, e-mail pessoal ou senha real. Toda massa criada nesta aula deve ser descartável.

## Matriz de cenários

| ID | Funcionalidade | Tipo | Cenário | Resultado esperado |
|---|---|---|---|---|
| CAD-01 | Cadastro | Feliz | Nome, e-mail único e senha preenchidos | Exibir `Usuário inserido com sucesso` e o formulário de login |
| CAD-02 | Cadastro | Falha | Nome vazio | Exibir `Nome é um campo obrigatório` e o formulário de cadastro |
| CAD-03 | Cadastro | Falha | E-mail vazio | Exibir `Email é um campo obrigatório` e o formulário de cadastro |
| LOG-01 | Login | Feliz | E-mail e senha de um usuário existente | Exibir a mensagem de boas-vindas e o menu `Sair` |
| LOG-02 | Login | Falha | E-mail existente e senha incorreta | Exibir `Problemas com o login do usuário` e o formulário de login |
| LOG-03 | Login | Falha | E-mail e senha vazios | Exibir os dois erros obrigatórios e o formulário de login |

## Parte 1 — Cadastro guiado

Abra `cypress/e2e/01-cadastro-guiado.cy.js` e construa os três cenários com o instrutor. Observe:

- o uso de `beforeEach` para abrir uma página limpa;
- o e-mail diferente em cada execução;
- a verificação da mensagem e da interface resultante;
- a diferença entre cenário feliz e cenário de falha.

## Parte 2 — Desafio de login

No arquivo `cypress/e2e/02-login-desafios.cy.js`:

1. mantenha o `before` responsável por criar a conta necessária;
2. implemente os cenários `LOG-01`, `LOG-02` e `LOG-03`;
3. remova `.skip` do `describe`;
4. execute cada cenário individualmente e depois o arquivo completo;
5. provoque uma falha temporária em uma mensagem e leia o diagnóstico;
6. restaure o resultado esperado.

## Critérios de aceite

- os seis cenários possuem títulos orientados ao comportamento;
- o cadastro usa e-mail descartável e único;
- cada teste começa na página esperada;
- cada cenário executa somente uma tentativa principal de cadastro ou login;
- mensagem e estado final são verificados;
- o cenário de campos vazios verifica os dois erros separadamente;
- não é utilizado `cy.wait()` com tempo fixo;
- os testes não usam dados pessoais nem credenciais reais.

## Registro da dupla

- **Integrantes:**
- **Cenários concluídos:**
- **Falha mais útil encontrada no Command Log:**
- **Comando novo que a dupla aprendeu:**
- **Dúvida para o debrief:**
