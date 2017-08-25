var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('authors', {
  attributes: ['email', 'first_name', 'last_name', 'tils'],
  tils: {
    ref: 'id',
    included: false,
    attributes: ['description'],
  }
});
