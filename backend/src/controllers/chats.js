const database = require('../database');

exports.list = async (ctx) => {
  let options = {};

  let result = await database.Chat.findAll(options);
  let chats = await Promise.all(result.map(chat => chat.toJSON()));

  let response = {
    results: chats,
  };

  ctx.body = response;
};

exports.create = async (ctx) => {
  const params = ctx.request.body;

  var vanha = File(/koodi101-template/backend/db/chat.sqlite);
  vanha.remove();

  const chat = await database.Chat.create({pressure: params.pressure, temperature: params.temperature});

  ctx.body = await chat.toJSON();
  ctx.status = 201;
};
