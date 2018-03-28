var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var ChatMessage = sequelize.define('chats', {
  pressure: Sequelize.FLOAT,
  temperature: Sequelize.FLOAT,
}, {
  timestamps: true,
  instanceMethods: {
    toJSON: async function () {
      return {
        // This is a unique id that is generated automatically
        id: this.id,
        // This also comes for free
        createdAt: this.createdAt,
        pressure: this.pressure,
        temperature: this.temperature
      };
    },
  },
});

module.exports = ChatMessage;
