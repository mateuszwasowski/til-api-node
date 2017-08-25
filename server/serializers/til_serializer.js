var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('tils', {
  attributes: ['id', 'description'],
  author: {
    ref: 'id',
    attributes: ['email', 'first_name', 'last_name']
  },
  votes: {
    ref: 'id',
  }
});
