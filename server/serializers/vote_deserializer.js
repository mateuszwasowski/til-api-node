var JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

module.exports = new JSONAPIDeserializer({
  tils: {
    valueForRelationship: function (relationship) {
      return {
        id: relationship.id,
      };
    }
  },
  authors: {
    valueForRelationship: function (relationship) {
      return {
        id: relationship.id,
      };
    }
  }
});
