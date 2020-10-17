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
      argsKeys.every((key) => args[key] == sess[key])
    );
  }

  toggleFavoriteSession(id) {
    const favSess = sessions.find((sess) => sess.id == id);
    favSess.favorite = !favSess.favorite;
    return favSess;
  }

  addNewSession(session) {
    // session.id = Math.ceil(Math.random() * 1000) and session.push(session) simulates persist data into database
    session.id = Math.ceil(Math.random() * 1000);
    sessions.push(session);
    return session;
  }

  getSessionByIdWithError(id, setError) {
    if (setError) {
      throw new Error();
    }
    return sessions.find((sess) => sess.id == id);
  }
}

module.exports = SessionAPI;
