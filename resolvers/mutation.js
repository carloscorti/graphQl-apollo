const Mutation = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionAPI.toggleFavoriteSession(id);
  },

  // addNewSession: (parent, args, { dataSources }, info) => {
  //   return dataSources.sessionAPI.addNewSession(args.session);
  // },
  addNewSession: (parent, { session }, { dataSources }, info) => {
    return dataSources.sessionAPI.addNewSession(session);
  },
};

module.exports = Mutation;
