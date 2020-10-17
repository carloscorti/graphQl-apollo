const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions() {
    return sessions;
  }

  getSessionById(id) {
    // the same with lodash
    // const _ = require('lodash')
    // return _.filter(sessions, {id: parseInt(id)})
    return sessions.find((sess) => sess.id == id);
  }

  getSessionMultifilter(args) {
    // the same with lodash
    // const _ = require('lodash')
    // return _.filter(sessions, args)
    const argsKeys = Object.keys(args);
    return sessions.filter((sess) =>
      argsKeys.every((key) => args[key] === sess[key])
    );
  }

  toggleFavoriteSession(id) {
    const favSess = sessions.find((sess) => sess.id == id);
    favSess.favorite = !favSess.favorite;
    return favSess;
  }
}

module.exports = SessionAPI;
