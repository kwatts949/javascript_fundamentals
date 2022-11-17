const got = require("got");

class GithubClient {
  constructor() {}

  fetchRepositoryData(repository, callback) {
    got(`https://api.github.com/repos/${repository}`).then((response) => {
      callback(JSON.parse(response.body));
    });
  }
}

module.exports = GithubClient;
