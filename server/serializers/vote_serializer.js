var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('votes', {
  attributes: ['id'],
  author: {
    ref: 'id',
    attributes: ['email', 'first_name', 'last_name']
  },
  til: {
    ref: 'id',
    attributes: ['description'],
  },
});
