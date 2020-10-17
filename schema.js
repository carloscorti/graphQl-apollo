const { gql } = require('apollo-server');

const schema = gql`
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

module.exports = schema;
