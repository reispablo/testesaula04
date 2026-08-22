describe('Cadastro de usuário no Seu Barriga', () => {
  beforeEach(() => {
    cy.visit('/cadastro')
  })

  it('CAD-01: cria usuário quando nome, e-mail e senha são válidos', () => {
    const email = `cadastro.ok.${Date.now()}@email.com`

    cy.get('#nome').type('Aluno Aula 4')
    cy.get('#email').type(email)
    cy.get('#senha').type('Senha123')
    cy.get('input[type="submit"]').click()

    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Usuário inserido com sucesso')
    cy.contains('button', 'Entrar').should('be.visible')
  })

  it('CAD-02: rejeita cadastro quando o nome está vazio', () => {
    const email = `cadastro.sem.nome.${Date.now()}@email.com`

    cy.get('#email').type(email)
    cy.get('#senha').type('Senha123')
    cy.get('input[type="submit"]').click()

    cy.get('.alert-danger')
      .should('be.visible')
      .and('contain', 'Nome é um campo obrigatório')
    cy.get('input[type="submit"]').should('have.value', 'Cadastrar')
  })

  it('CAD-03: rejeita cadastro quando o e-mail está vazio', () => {
    cy.get('#nome').type('Aluno Aula 4')
    cy.get('#senha').type('Senha123')
    cy.get('input[type="submit"]').click()

    cy.get('.alert-danger')
      .should('be.visible')
      .and('contain', 'Email é um campo obrigatório')
    cy.get('input[type="submit"]').should('have.value', 'Cadastrar')
  })
})
