const tils = require('./tils_controller');
const authors = require('./authors_controller');
const votes = require('./votes_controller');
const session = require('./session_controller');
const slack = require('./slack_controller');

module.exports = {
  tils,
  authors,
  votes,
  session,
  slack
};
