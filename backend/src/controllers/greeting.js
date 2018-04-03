
exports.greet = async (ctx) => {
  const greetings = ["Hello!", "Guten Tag!", "Bonjour!", "Moro!", "Tere!", "Hail Hitler!"];

  const greeting = greetings[Math.floor(Math.random()*greetings.length)];

  let response = {
    greeting: greeting,
  };

  ctx.body = response;
};
