# Painel de Campo — Registro de Campanha

App de registro rápido de atividades de campanha, com painel de acompanhamento.
Funciona offline e guarda os dados no próprio navegador (`localStorage`).

## Arquivos

| Arquivo | Papel |
| --- | --- |
| `index.html` | O app inteiro — HTML, CSS e JS, sem dependências |
| `manifest.webmanifest` | Metadados de PWA (nome, ícone, cores) |
| `sw.js` | Service worker: guarda o app em cache para abrir offline |
| `icon.svg` | Ícone do app |

## Como usar

**Uso simples:** abra o `index.html` direto no navegador. Tudo funciona, menos
a instalação como app (que exige um servidor).

**Instalar no celular:** publique a pasta em qualquer hospedagem estática
(GitHub Pages, Netlify, Vercel) e acesse pelo celular. O navegador vai oferecer
"Adicionar à tela inicial" — a partir daí o app abre em tela cheia e funciona
sem internet.

Para testar localmente com o service worker ativo:

```bash
npx http-server -p 8080 .
# abra http://localhost:8080
```

## Funcionalidades

**Registro** — seis tipos de atividade (apoiadores, reuniões, financeiro, redes
sociais, votos convertidos e panfletagem), com validação de campos obrigatórios
e de números negativos. Reuniões e panfletagem aceitam foto como evidência de
campo (a imagem é reduzida para 900px antes de ser guardada).

**Gestão dos registros** — busca por qualquer campo, paginação, edição e
exclusão com opção de desfazer.

**Painel** — totais e gráficos filtráveis por período (7, 30, 90 dias ou tudo),
incluindo saldo financeiro acumulado e custo por voto.

**Dados** — exportação e importação de backup em JSON, exportação em CSV (por
tipo ou completo), relatório em PDF, medidor de espaço usado e data da eleição
configurável para o contador regressivo.

## Sobre os dados

Os registros ficam **apenas no navegador do aparelho**. Limpar o cache, trocar
de celular ou reinstalar o navegador apaga tudo. Por isso o app avisa quando o
último backup tem mais de 7 dias — exporte o JSON com regularidade.

O limite prático do `localStorage` é de cerca de 5 MB. A aba **Dados** mostra
quanto já foi usado; as fotos são o que mais ocupa espaço.
