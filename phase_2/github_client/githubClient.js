const got = require("got");

class GithubClient {
  constructor() {}

  async fetchRepositoryData(repository, callback) {
    const result = await got(`https://api.github.com/repos/${repository}`);
    callback(JSON.parse(result.body));
  }
}

module.exports = GithubClient;
