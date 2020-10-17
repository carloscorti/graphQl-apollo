const Mutation = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionAPI.toggleFavoriteSession(id);
  },
};

module.exports = Mutation;
