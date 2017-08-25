var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('authors', {
  attributes: ['id', 'email', 'first_name', 'last_name', 'tils'],
  included: false,
  tils: {
    ref: 'id',
    attributes: ['description'],
  }
});
