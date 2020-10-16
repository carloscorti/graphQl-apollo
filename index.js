const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');

const typeDefs = gql`
  type Query {
    sessions: [Session]
    sessionsById(id: ID): Session
    sessionsMultifilter(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
  }

  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "will be replaced by tag")
    level: String
  }
`;

const resolvers = {
  Query: {
    // sessions: (parent, args, context, info) => {
    //   console.log(context);
    //   return context.dataSources.sessionAPI.getSessions();
    // },
    // sessionsById: (parent, args, { dataSources }, info) => {
    //   return dataSources.sessionAPI.getSessionById(args.id);
    // },
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions();
    },
    sessionsById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
    sessionsMultifilter: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionMultifilter(args);
    },
  },
};

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQl running at ${url}`);
});
