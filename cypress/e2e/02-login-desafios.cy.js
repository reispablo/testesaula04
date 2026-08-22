describe.skip('Login no Seu Barriga — remova o .skip ao iniciar', () => {
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
    // Preencha as credenciais do objeto usuario.
    // Clique em Entrar e verifique a mensagem de boas-vindas e o menu Sair.
  })

  it('LOG-02: rejeita senha incorreta', () => {
    // Use o e-mail existente com uma senha diferente.
    // Verifique a mensagem de erro e que a página continua no login.
  })

  it('LOG-03: informa os dois campos obrigatórios quando estão vazios', () => {
    // Clique em Entrar sem preencher os campos.
    // Verifique a quantidade, cada mensagem com eq() e o formulário de login.
  })
})
