// landing page
new TypeIt("#hero", {
  speed: 100,
  startDelay: 900,
})
  .type(" join ", { delay: 400 })
  .pause(300)
  .type(' <span class="text-secondary-yellow">/</span>', { delay: 400 })
  .move(-9, { delay: 300 })
  .type('<span class="text-secondary-yellow">/</span>', { delay: 100 })
  .move(2, { delay: 300 })
  .delete(1, { delay: 200 })
  .type("J", { delay: 100 })
  .move(null, { to: "END", delay: 300 })
  .pause(300)
  .type(" the <span class='font-light text-secondary-yellow'>My</span>", { delay: 400 })
  .break()
  .type(" Communty ! ", { delay: 400 })
  .move(-5, { delay: 300 })
  .type("i", { delay: 100 })
  .move(-9, { delay: 300 })
  .delete(2, { delay: 200 })
  .type("<span class='font-light text-secondary-yellow'>Our</span>", { delay: 400 })
  .pause(1000)
  .delete(3, { delay: 300 })
  .type("Code Lab", { delay: 400 })
  .move(null, { to: "END", delay: 300 })
  .go();
