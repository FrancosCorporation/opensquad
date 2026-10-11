# Opensquad

Create teams of AI agents that collaborate on tasks directly in your IDE.

## Get started

Open this project in your chosen IDE and type:

```text
/opensquad
```

Use the menu to create, run, and manage squads. You can also describe what you need directly:

```text
/opensquad create a squad to write LinkedIn posts about AI
/opensquad run my-squad
```

During setup, the Architect clarifies the goal, proposes agent roles, and prepares the workflow. A run pauses at checkpoints that need your decision.

## Virtual Office

To follow agents in a visual interface:

1. In your IDE, ask `/opensquad dashboard` to generate the squad dashboard.
2. In a terminal, run `npx serve squads/<squad-name>/dashboard`.
3. Open `http://localhost:3000` in your browser.

See `CLAUDE.md`, `AGENTS.md`, or the rules file created during setup for IDE-specific instructions.
