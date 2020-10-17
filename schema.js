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
    speakers: [Speaker]
    speakersById(id: ID): Speaker
    sessionsByIdWithError(id: ID): SessionOrError
  }

  union SessionOrError = Session | Error

  type Error {
    message: String
    code: String
    token: String
  }

  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }

  input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
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
    favorite: Boolean
    speakers: [Speaker]
  }

  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }
`;

module.exports = schema;
