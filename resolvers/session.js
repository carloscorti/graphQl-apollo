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
    return session.speaker
      ? session.speakers.map(
          async (speaker) =>
            await dataSources.speakerAPI.getSpeakerById(speaker.id)
        )
      : [];
  },
  // speakers: async (session, args, { dataSources }, info) => {
  //   const speakers = await dataSources.speakerAPI.getSpeakers();
  //   const speakersId = session.speakers.map((speaker) => speaker.id);
  //   return speakers.filter((speaker) => speakersId.includes(speaker.id));
  // },
};

module.exports = Session;
