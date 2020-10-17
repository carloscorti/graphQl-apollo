const { ApolloServer, ApolloError } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  debug: false,
  formatError: (err) => {
    switch (err.extensions.code) {
      case 'INTERNAL_SERVER_ERROR':
        return new ApolloError(
          'Opps.. we have a problem, please try leater',
          'ERROR',
          { token: 'uniqueTokenToSaveOnDataBaseToTraceErrors' }
        );
      default:
        return err;
    }
  },
});
// in prod
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   dataSources,
//   introspection: false, // production ENV doesn't take off introspection, yet it isn't bad anyways
//   playground: false,
//   debug: false
// });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQl running at ${url}`);
});
