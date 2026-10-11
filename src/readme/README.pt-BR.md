# Opensquad

Crie equipes de agentes de IA que colaboram em tarefas diretamente no seu IDE.

## Começar

Abra o projeto no IDE escolhido e digite:

```text
/opensquad
```

O menu permite criar, executar e administrar seus squads. Você também pode descrever o que precisa diretamente:

```text
/opensquad crie um squad para escrever posts no LinkedIn sobre IA
/opensquad execute o squad meu-squad
```

Durante a criação, o Arquiteto entende o objetivo, propõe os papéis dos agentes e prepara o fluxo. A execução pausa nos pontos que precisam de uma decisão sua.

## Escritório Virtual

Para acompanhar os agentes em uma interface visual:

1. No IDE, peça `/opensquad dashboard` para gerar o dashboard do squad.
2. No terminal, execute `npx serve -l tcp://127.0.0.1:3000 squads/<nome-do-squad>/dashboard`.
3. Abra `http://localhost:3000` no navegador.
   O painel fica disponível somente neste computador.

Consulte as instruções do IDE em `CLAUDE.md`, `AGENTS.md` ou no arquivo de regras criado durante a instalação.
