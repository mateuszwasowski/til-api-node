var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('votes', {
  attributes: ['author', 'til'],
  author: {
    ref: 'id',
    included: false,
    attributes: ['email', 'first_name', 'last_name']
  },
  til: {
    ref: 'id',
    included: false,
    attributes: ['description'],
  },
});
