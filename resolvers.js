const Query = require('./resolvers/query');
const Session = require('./resolvers/session');
const Mutation = require('./resolvers/mutation');

const resolvers = {
  Query,
  Session,
  Mutation,
};

module.exports = resolvers;
