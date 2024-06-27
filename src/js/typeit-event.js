//   event page
new TypeIt("#hero-event", {
  speed: 100,
  startDelay: 900,
})
  .type("Evnt", { delay: 300 })
  .move(-2, { delay: 300 })
  .type("e", { delay: 100 })
  .move(null, { to: "END", delay: 300 })
  .type(" <span class='text-secondary-yellow'>Meet-Up </span>", { delay: 400 })
  .go();
