//   event page
new TypeIt("#hero-blog", {
  speed: 100,
  startDelay: 900,
})
  .type("blog ", { delay: 300 })
  .move(-4, { delay: 300 })
  .delete(1, { delay: 300 })
  .type("B", { delay: 100 })
  .move(null, { to: "END", delay: 300 })
  .type("/", { delay: 300 })
  .pause(300)
  .type(" <span class='text-secondary-yellow'> News</span> ", { delay: 400 })
  .go();
