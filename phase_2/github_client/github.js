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

module.exports = Github;

/*
const client = new GithubClient();

// We inject the instance of `GithubClient`:
const github = new Github(client);

// This method will delegate to `GithubClient.fetchRepositoryData()`
github.fetch("sinatra/sinatra");

// And after a few moments, this should return a JS object with the repo information.
setTimeout(() => {
  console.log(github.getRepoData());
}, 1000);
*/
