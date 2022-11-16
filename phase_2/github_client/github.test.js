const Github = require("./github");
const GithubClient = require("./githubClient");

describe("Github", () => {
  it("constructs", () => {
    let client = new GithubClient();
    let hub = new Github(client);
    expect(hub).toBeInstanceOf(Github);
  });
});
