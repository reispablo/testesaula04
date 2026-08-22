# Aula 4 — Cypress na prática: cadastro e login

Aula prática para ampliar os comandos básicos vistos na Aula 3 e automatizar seis cenários no [Seu Barriga](https://seubarriga.wcaquino.me/login): um cenário feliz e dois cenários de falha para cadastro, seguidos de um cenário feliz e dois cenários de falha para login.

## Objetivos de aprendizagem

Ao final, o aluno deverá conseguir:

- transformar uma regra em cenário feliz e cenários de falha;
- criar massa de dados única com `Date.now()`;
- organizar preparação com `before` e `beforeEach`;
- preencher e submeter formulários com Cypress;
- validar mensagens, quantidade de elementos e estado final da interface;
- usar `should`, `and`, `eq` e `cy.url` nas verificações;
- manter cenários isolados e sem esperas fixas.

## Preparação do instrutor

Requisitos: Node.js 20 ou superior, npm e acesso à internet.

```bash
npm ci
npm run cy:open
```

Para executar sem interface:

```bash
npm test
```

O arquivo de desafios de login começa com `describe.skip`. Remova o `.skip` depois da implementação. Os testes criam usuários descartáveis com e-mails únicos para evitar colisões com dados já existentes.

## Duração sugerida — 2 horas

| Bloco | Tempo | Atividade |
|---|---:|---|
| Retomada | 10 min | Comandos básicos da Aula 3 |
| Planejamento | 15 min | Exploração do site e matriz de cenários |
| Novos recursos | 20 min | Massa única, hooks e novas asserções |
| Cadastro guiado | 25 min | Implementação de três cenários |
| Login em duplas | 30 min | Implementação de três desafios |
| Debrief | 10 min | Comparação das soluções e diagnóstico |
| Quiz e encerramento | 10 min | Revisão dos conceitos |

## Materiais

- `apresentacao.html`: slides da aula.
- `docs/atividade.md`: enunciado e critérios de aceite.
- `docs/guia-de-comandos.md`: consulta rápida dos recursos novos.
- `docs/gabarito-do-instrutor.md`: solução dos desafios de login.
- `docs/perguntas-kahoot.md`: questões de revisão com gabarito.
- `cypress/e2e/01-cadastro-guiado.cy.js`: exemplo construído com o instrutor.
- `cypress/e2e/02-login-desafios.cy.js`: arquivo de trabalho dos alunos.

## Dependências e contingência

- O laboratório depende da disponibilidade de um site externo.
- Instale o Cypress e execute uma verificação na rede da escola antes da aula.
- Como contingência, projete os exemplos e use o gabarito para revisão estática caso o site fique indisponível.
- As contas criadas são apenas massa descartável do ambiente de treinamento; não utilize dados pessoais ou senhas reais.
