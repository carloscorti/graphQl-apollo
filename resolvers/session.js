const { ApolloError } = require('apollo-server');

const Session = {
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
    // return session.speaker
    //   ? session.speakers.map(async (speaker) => {
    //       try {
    //         return await dataSources.speakerAPI.getSpeakerById(speaker.id);
    //       } catch (err) {
    //         return null;
    //       }
    //     })
    //   : [];
    return session.speakers.map(async (speaker) => {
      try {
        return await dataSources.speakerAPI.getSpeakerById(speaker.id);
      } catch (err) {
        return new ApolloError('Unable to retrive speakers', 'SPIKERAPIERROR', {
          token: 'uniqueTokenToSaveOnDataBaseToTraceErrors',
        });
      }
    });
  },
  // speakers: async (session, args, { dataSources }, info) => {
  //   try {
  //     const speakers = await dataSources.speakerAPI.getSpeakers();
  //     const speakersId = session.speakers.map((speaker) => speaker.id);
  //     return speakers.filter((speaker) => speakersId.includes(speaker.id));
  //   } catch (err) {
  //     console.log('catched errro');
  //     return new ApolloError('Unable to retrive speakers', 'SPIKERAPIERROR', {
  //       token: 'uniqueTokenToSaveOnDataBaseToTraceErrors',
  //     });
  //   }
  // },
};

module.exports = Session;
