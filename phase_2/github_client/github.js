const GithubClient = require("./githubClient");

class Github {
  constructor(client) {
    this.client = client;
  }

  fetch(repository) {
    client.fetchRepositoryData("sinatra/sinatra", (result) => {
      return result;
    });
  }
}

const client = new GithubClient();
const hub = new Github(client);

console.log(hub.fetch("sinatra/sinatra"));

module.exports = Github;
