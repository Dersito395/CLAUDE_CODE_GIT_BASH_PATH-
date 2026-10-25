/* A Zag Modas mudou para https://zagmodas.github.io.
   Este service worker substitui o antigo nos celulares que instalaram o app:
   apaga o cache, se remove e leva as telas abertas para o endereço novo. */
const NOVO = "https://zagmodas.github.io/";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const chaves = await caches.keys();
    await Promise.all(chaves.filter((c) => c.startsWith("zagmodas-")).map((c) => caches.delete(c)));
    await self.registration.unregister();
    const telas = await self.clients.matchAll({ type: "window" });
    telas.forEach((t) => t.navigate(NOVO).catch(() => {}));
  })());
});
