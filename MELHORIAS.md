# Melhorias do Opensquad

## Diagnóstico

- O repositório não tinha `MELHORIAS.md`; os itens abaixo vêm da inspeção do fluxo de instalação e dos arquivos de documentação.
- O caminho `.env` apontado no inventário geral corresponde somente a `.env.example`, com valores demonstrativos. Não foi encontrado `.env` real versionado.
- O README anunciava `docker compose up --build`, mas não há arquivo Compose no repositório. O comando local `npm start` também não inicializava o Opensquad sem o argumento `init`.
- A inicialização repetida substituía o README do projeto e sobrescrevia arquivos de integração da IDE que poderiam conter personalizações.
- O README criado no projeto misturava português e inglês e não atendia a opção de idioma espanhol.

## Melhorias implementadas

- **P1 — Preservar conteúdo do projeto:** a inicialização cria `README.md` somente quando ele ainda não existe e mantém os arquivos de IDE existentes durante uma reconfiguração. A atualização do core continua sendo o caminho para atualizar arquivos gerenciados.
- **P1 — Respeitar o idioma escolhido:** o README inicial agora é criado em português do Brasil, inglês ou espanhol conforme a seleção.
- **P1 — Corrigir as instruções de instalação:** a documentação apresenta o comando `npx opensquad init`, declara Node.js 22.13+ e explica o comando correspondente ao executar a partir do checkout. A instrução de Compose inexistente foi removida.
- **P1 — Atualizar dependências vulneráveis do dashboard:** o lockfile foi atualizado dentro das versões compatíveis. `npm audit` passou de 11 alertas para zero no dashboard; o pacote principal também está sem alertas.

### SEC-01 — Restringir o dashboard local ao loopback [P2]

- **Arquivo:** `README.md:68,185` e `src/readme/README.{pt-BR,en,es}.md:27`.
- **Evidência:** os exemplos executavam `npx serve <dashboard>` sem interface explícita; o padrão documentado pelo utilitário `serve` escuta em `0.0.0.0`.
- **Impacto:** a página do dashboard e o estado dos squads poderiam ser acessados por outros dispositivos da rede local.
- **Mudança:** os exemplos agora passam `-l tcp://127.0.0.1:3000` e informam que a página fica disponível apenas na máquina atual.
- **Aceite:** os quatro exemplos de `serve` especificam o loopback.
- **Verificação:** `rg -n 'npx serve' README.md src/readme` mostra apenas comandos com `tcp://127.0.0.1:3000`.

### Itens da reauditoria

- [x] **P1 — Atualizar o runtime Node.js suportado.** `package.json` agora exige Node.js 22.13+, a imagem usa Node 24 e o Dockerfile instala pelo lockfile via `npm ci`. Node 20 chegou ao fim de suporte em 24/03/2026. CI `38199712445` passou em Node 22/24 e build Docker.

- [x] **SEC-02 — Atualizar dependências do dashboard-template [P1].** A auditoria encontrou 11 vulnerabilidades (8 altas, 2 moderadas e 1 baixa) no `templates/dashboard/package-lock.json`, correspondendo a 31 alertas Dependabot. Manifestos do dashboard ativo e do template são idênticos; lockfile foi alinhado e o template recebe CI de instalação/audit/build. Audit/build locais e CI `38199875949` passaram; a consulta de alertas após o push retornou zero abertos.

- [x] **PERF-01 — Adiar o carregamento do escritório Pixi [P2].** O build inicial tinha 616,07 kB (192,67 kB gzip) no chunk principal. Agora a cena só é carregada ao selecionar um squad; build local gera `index` de 202,59 kB (63,82 kB gzip) e `OfficeScene` de 411,78 kB (128,36 kB gzip), sem aviso de chunk maior que 500 kB.

- [x] **DEVOPS-01 — CI de verificações estáticas [P2].** Workflow em Ubuntu 24.04 para Node 22/24 executa instalação limpa, audits dos dois lockfiles de dashboard, sintaxe JS, builds TypeScript/Vite e build Docker; não executa testes. CI final `38199875949` passou.

- [x] **DEVOPS-02 — Reduzir e filtrar o contexto Docker [P2].** O primeiro build enviou 167 MB, incluindo dependências, dashboard, testes e amostras temporárias. `.dockerignore` exclui esses itens, metadados Git e arquivos locais de ambiente/configuração. O rebuild enviou 1,824 MB e construiu a imagem.

## Pendências

- `TEST-01`: testes automatizados não executados nesta rodada.
- Revisar e documentar uma experiência Docker apenas quando houver um fluxo Compose suportado e validado.
