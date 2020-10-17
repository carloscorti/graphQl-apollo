const Query = {
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
};

module.exports = Query;
