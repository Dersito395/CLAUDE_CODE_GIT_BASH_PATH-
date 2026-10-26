# Gislene Giorgette — Biosite

Página de links de **Gislene Giorgette** — *Análise técnica contratual &
cerimonial*. *A segurança que o seu contrato precisa, a cerimônia que o seu amor
merece.* Endereço: **https://gislenecerimonial.github.io**

| Botão | Ação |
| --- | --- |
| Salvar contato | Abre `contato.vcf` — nome "Gislene Giorgette - Cerimonial", (14) 93300-7561, Instagram, logo e o lema nas notas. No iPhone mostra direto "Criar Novo Contato"; no Android baixa o arquivo e o toque em *Abrir* leva aos Contatos |
| Instagram | https://www.instagram.com/gislene_cerimonialista/ |
| WhatsApp | https://wa.me/5514933007561 — (14) 93300-7561 |

## Funciona sem internet

A página é um app instalável (`manifest.webmanifest`) com service worker
(`sw.js`) que guarda a página, o contato e as imagens no aparelho. Depois de
abrir uma vez com internet, a tela inicial e o "Salvar contato" funcionam
offline; Instagram e WhatsApp avisam que precisam de conexão.

Para instalar no celular:
- **Android (Chrome):** menu ⋮ → *Instalar app* (ou *Adicionar à tela inicial*).
- **iPhone (Safari):** botão Compartilhar → *Adicionar à Tela de Início*.

## Ao alterar algo

Troque a versão em `CACHE` no `sw.js` (ex.: `gislene-v2`) para os celulares
baixarem a versão nova. A página confere se há versão nova toda vez que abre com
internet e, quando há, recarrega sozinha uma vez para já mostrá-la.

## Publicação

GitHub Pages a partir do branch `main`, pasta `/ (root)`. O repositório precisa
ser **público** e se chamar `gislenecerimonial.github.io` para o endereço ficar na raiz.
