var JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

module.exports = new JSONAPIDeserializer({
  authors: {
    valueForRelationship: function (relationship) {
      return {
        id: relationship.id,
      };
    }
  }
});
