const { RESTDataSource } = require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/speakers';
  }

  // initialize(config) {}

  async getSpeakers() {
    // const data = await this.get('/');
    // return data;
    return await this.get('/');
  }

  async getSpeakerById(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

module.exports = SpeakerAPI;
