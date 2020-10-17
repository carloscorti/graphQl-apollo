const { ApolloServer } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
// in prod
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   dataSources,
//   introspection: false, // production ENV doesn't take off introspection, yet it isn't bad anyways
//   playground: false,
// });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQl running at ${url}`);
});
