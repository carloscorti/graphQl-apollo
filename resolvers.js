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
    speakers: (parent, args, { dataSources }, info) => {
      return dataSources.speakerAPI.getSpeakers();
    },
    speakersById: (parent, { id }, { dataSources }, info) => {
      return dataSources.speakerAPI.getSpeakerById(id);
    },
  },

  Session: {
    // speakers: async (parent, args, { dataSources }, info) => {
    // in this case parent is the session where speaker is
    speakers: (session, args, { dataSources }, info) => {
      // let filteredSpeakers = [];
      // for await (let speaker of session.speakers) {
      //   filteredSpeakers.push(
      //     dataSources.speakerAPI.getSpeakerById(speaker.id)
      //   );
      // }
      // return filteredSpeakers;
      return session.speakers.map(
        async (speaker) =>
          await dataSources.speakerAPI.getSpeakerById(speaker.id)
      );
    },
    // speakers: async (session, args, { dataSources }, info) => {
    //   const speakers = await dataSources.speakerAPI.getSpeakers();
    //   const speakersId = session.speakers.map((speaker) => speaker.id);
    //   return speakers.filter((speaker) => speakersId.includes(speaker.id));
    // },
  },
};

module.exports = resolvers;
