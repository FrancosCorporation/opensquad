# Opensquad

Crea equipos de agentes de IA que colaboran en tareas directamente desde tu IDE.

## Primeros pasos

Abre este proyecto en tu IDE y escribe:

```text
/opensquad
```

Usa el menú para crear, ejecutar y administrar tus squads. También puedes describir directamente lo que necesitas:

```text
/opensquad crea un squad para escribir publicaciones de LinkedIn sobre IA
/opensquad ejecuta el squad mi-squad
```

Durante la configuración, el Arquitecto aclara el objetivo, propone los roles de los agentes y prepara el flujo de trabajo. La ejecución se detiene en los puntos que requieren una decisión tuya.

## Oficina Virtual

Para seguir a los agentes en una interfaz visual:

1. En tu IDE, pide `/opensquad dashboard` para generar el panel del squad.
2. En una terminal, ejecuta `npx serve squads/<nombre-del-squad>/dashboard`.
3. Abre `http://localhost:3000` en tu navegador.

Consulta `CLAUDE.md`, `AGENTS.md` o el archivo de reglas creado durante la instalación para ver las instrucciones específicas de tu IDE.
