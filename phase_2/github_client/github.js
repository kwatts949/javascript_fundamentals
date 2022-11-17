const GithubClient = require("./githubClient");

class Github {
  constructor(client) {
    this.client = client;
    this.result;
  }

  fetch(repository) {
    this.client.fetchRepositoryData(repository, (response) => {
      this.result = response;
    });
  }

  getRepoData() {
    return this.result;
  }
}

const client = new GithubClient();
const hub = new Github(client);

console.log(hub.fetch("sinatra/sinatra"));

module.exports = Github;
