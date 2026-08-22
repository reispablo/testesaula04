# Kahoot — Aula 4: Cypress, cadastro e login

Cada questão possui somente uma alternativa correta.

## 1. Por que usamos `Date.now()` no e-mail de cadastro?

- A) Para esconder o e-mail na tela.
- **B) Para criar uma massa diferente a cada execução.**
- C) Para tornar o teste mais lento.
- D) Para validar o formato da senha.

## 2. Quando o `before` é executado?

- **A) Uma vez antes dos testes do grupo.**
- B) Depois de cada teste.
- C) Somente quando um teste falha.
- D) A cada comando Cypress.

## 3. Qual recurso encadeia outra asserção sobre o mesmo elemento?

- A) `.eq()`
- B) `before()`
- **C) `.and()`**
- D) `Date.now()`

## 4. O que `.should('have.length', 2)` verifica?

- A) Que o texto possui duas letras.
- **B) Que a consulta retornou dois elementos.**
- C) Que o teste executou duas vezes.
- D) Que a página possui duas mensagens iguais.

## 5. Por que validar mensagem e interface resultante?

- A) Para duplicar comandos sem necessidade.
- B) Porque toda mensagem garante que o fluxo terminou corretamente.
- **C) Para confirmar a resposta visível e o estado final do fluxo.**
- D) Para evitar o uso de seletores.

## 6. Qual cenário representa uma falha de autenticação?

- A) Criar usuário com dados válidos.
- B) Entrar com credenciais válidas.
- **C) Tentar entrar com senha incorreta.**
- D) Abrir a página de cadastro.

## 7. Qual prática deve ser evitada?

- A) Usar IDs claros.
- B) Criar massa descartável.
- C) Verificar o resultado final.
- **D) Usar `cy.wait(3000)` como espera principal.**

## Gabarito

1. B
2. A
3. C
4. B
5. C
6. C
7. D
