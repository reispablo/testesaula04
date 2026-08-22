# Gabarito do instrutor — Aula 4

Não entregue antes da atividade.

## Solução dos desafios de login

```js
describe('Login no Seu Barriga', () => {
  const usuario = {
    nome: 'Aluno Aula 4',
    email: `login.aula4.${Date.now()}@email.com`,
    senha: 'Senha123',
  }

  before(() => {
    cy.visit('/cadastro')
    cy.get('#nome').type(usuario.nome)
    cy.get('#email').type(usuario.email)
    cy.get('#senha').type(usuario.senha)
    cy.get('input[type="submit"]').click()
    cy.get('.alert-success').should('contain', 'Usuário inserido com sucesso')
  })

  beforeEach(() => {
    cy.visit('/login')
  })

  it('LOG-01: permite entrar com e-mail e senha válidos', () => {
    cy.get('#email').type(usuario.email)
    cy.get('#senha').type(usuario.senha)
    cy.contains('button', 'Entrar').click()

    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', `Bem vindo, ${usuario.nome}!`)
    cy.contains('a', 'Sair').should('be.visible')
  })

  it('LOG-02: rejeita senha incorreta', () => {
    cy.get('#email').type(usuario.email)
    cy.get('#senha').type('SenhaIncorreta')
    cy.contains('button', 'Entrar').click()

    cy.get('.alert-danger')
      .should('be.visible')
      .and('contain', 'Problemas com o login do usuário')
    cy.contains('button', 'Entrar').should('be.visible')
  })

  it('LOG-03: informa os dois campos obrigatórios quando estão vazios', () => {
    cy.contains('button', 'Entrar').click()

    cy.get('.alert-danger').should('have.length', 2)
    cy.get('.alert-danger').eq(0).should('contain', 'Email é um campo obrigatório')
    cy.get('.alert-danger').eq(1).should('contain', 'Senha é um campo obrigatório')
    cy.contains('button', 'Entrar').should('be.visible')
  })
})
```

## Pontos para o debrief

- O cenário feliz precisa de um usuário existente; por isso a massa é criada uma vez no `before`.
- O `beforeEach` abre novamente o login e reduz dependências entre os cenários.
- Senha incorreta e campos vazios são falhas diferentes: uma testa autenticação e a outra testa validação obrigatória.
- Verificar o formulário ou o menu `Sair` evita um falso positivo em que a mensagem aparece, mas a interface está no estado errado.
- O e-mail dinâmico permite repetir a suíte sem disputar com um cadastro anterior.
- O ambiente é externo e compartilhado; lentidão ou indisponibilidade deve ser registrada como bloqueio, não como defeito funcional confirmado.
