var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('tils', {
  attributes: ['description', 'author', 'votes'],
  author: {
    ref: 'id',
    included: false,
    attributes: ['email', 'first_name', 'last_name']
  },
  votes: {
    ref: 'id',
    included: false,
    attributes: ['id']
  }
});
