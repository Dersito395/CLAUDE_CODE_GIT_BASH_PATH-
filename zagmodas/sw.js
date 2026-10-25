/* Service worker da Zag Modas.
   Guarda a página, o contato e as imagens no aparelho para a tela inicial
   abrir sem internet. Ao mudar algum arquivo, troque a versão do CACHE. */
const CACHE = "zagmodas-v2";
const SHELL = [
  "./",
  "./index.html",
  "./contato.vcf",
  "./manifest.webmanifest",
  "./img/logo.png",
  "./img/icone.png",
  "./img/apple-touch.png",
  "./img/app-192.png",
  "./img/app-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((chaves) => Promise.all(
        chaves.filter((c) => c.startsWith("zagmodas-") && c !== CACHE).map((c) => caches.delete(c))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const mesmaOrigem = url.origin === self.location.origin;
  const fonte = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!mesmaOrigem && !fonte) return;

  // Cache primeiro; a rede atualiza a cópia em segundo plano para a próxima visita.
  event.respondWith(
    caches.match(req, { ignoreSearch: req.mode === "navigate" }).then((cacheado) => {
      const rede = fetch(req)
        .then((resp) => {
          if (resp && (resp.ok || resp.type === "opaque")) {
            const copia = resp.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copia));
          }
          return resp;
        })
        .catch(() => cacheado || (req.mode === "navigate" ? caches.match("./index.html") : undefined));
      return cacheado || rede;
    })
  );
});
