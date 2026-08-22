# Guia rápido — Cypress para formulários

## Massa de dados única

O cadastro persiste no servidor. Um e-mail fixo poderá funcionar uma vez e falhar nas próximas execuções. Gere uma massa descartável:

```js
const email = `aula4.${Date.now()}@email.com`
```

Use prefixos diferentes para entender de qual cenário veio o registro. Nunca use e-mail ou senha pessoal em um ambiente de treinamento.

## `before` e `beforeEach`

```js
before(() => {
  // Executa uma vez antes de todos os testes do grupo.
  // Útil para criar a conta usada nos testes de login.
})

beforeEach(() => {
  // Executa antes de cada teste.
  // Útil para abrir a página inicial do cenário.
  cy.visit('/login')
})
```

O `before` prepara um dado compartilhado controlado. O `beforeEach` devolve a interface a um estado conhecido em cada cenário.

## Novos recursos desta aula

| Recurso | Para que serve | Exemplo |
|---|---|---|
| `.and()` | Encadeia outra asserção | `.should('be.visible').and('contain', 'sucesso')` |
| `.eq()` | Seleciona um item pela posição | `cy.get('.alert-danger').eq(0)` |
| `before()` | Prepara o grupo uma única vez | `before(() => criarUsuario())` |
| `Date.now()` | Ajuda a criar dado único | `` `aluno.${Date.now()}@email.com` `` |
| `have.length` | Verifica a quantidade encontrada | `.should('have.length', 2)` |

## Padrão para validar alertas

```js
cy.get('.alert-success')
  .should('be.visible')
  .and('contain', 'Usuário inserido com sucesso')
```

Para dois erros exibidos juntos:

```js
cy.get('.alert-danger').should('have.length', 2)
cy.get('.alert-danger').eq(0).should('contain', 'Email é um campo obrigatório')
cy.get('.alert-danger').eq(1).should('contain', 'Senha é um campo obrigatório')
```

## Verifique também o estado final

Uma mensagem isolada não prova todo o comportamento. Combine-a com um elemento que identifique a interface resultante:

```js
cy.contains('button', 'Entrar').should('be.visible') // formulário de login
cy.contains('a', 'Sair').should('be.visible')        // área autenticada
```

Neste sistema, os formulários enviam dados para rotas técnicas como `/logar` e `/cadastrarUsuario`. Por isso, a interface resultante é um oráculo mais expressivo do que a URL.

## Boas práticas

- use IDs quando eles forem claros e estáveis: `#nome`, `#email`, `#senha`;
- gere massa única para operações que persistem dados;
- faça uma ação principal por cenário;
- verifique mensagem e estado final;
- mantenha cada `it` legível e independente;
- não use `cy.wait(3000)` para esperar uma resposta;
- não coloque credenciais reais no código.
