
exports.greet = async (ctx) => {
  const greetings = ["suomalainen", "pilvinen(todennäköisesti)", "tavallinen", "paska", "hyvä(ehkä kerran vuodessa)", "sateinen"];

  const greeting = greetings[Math.floor(Math.random()*greetings.length)];

  let response = {
    greeting: greeting,
  };

  ctx.body = response;
};
