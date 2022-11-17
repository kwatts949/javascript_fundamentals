const Github = require("./github");
const GithubClient = require("./githubClient");

describe("Github", () => {
  it("constructs", () => {
    let client = new GithubClient();
    let hub = new Github(client);
    expect(hub).toBeInstanceOf(Github);
  });

  it("gets the repo data fetched by the GithubClient class", (done) => {
    // 1. We mock the implementation of the Client class
    const mockedClient = {
      // 2. It has a method `fetchRepositoryData`...
      fetchRepositoryData: (repository, callback) => {
        // 3. ...which calls the given callback function
        callback({
          name: "sinatra/sinatra",
          description: "Some fake description",
        });
      },
    };

    // 4.  We can now call
    //    `mockedClient.fetchRepositoryData('repo-name', callbackFunction)`
    //     and get the expected behaviour (our callbackFunction will be called
    //     with the fake repo data)

    const github = new Github(mockedClient);

    // 5. The mocked implementation will be called instead of the real one
    github.fetch("sinatra/sinatra");

    // 6. We should get the fake repo data by calling `github.getRepoData()`
    expect(github.getRepoData()).toEqual({
      name: "sinatra/sinatra",
      description: "Some fake description",
    });
    done();
  });
});
