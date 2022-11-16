/*
Create a function fetchRepositoryInfo (in fetchRepositoryInfo.js) which

fetches repository data from Github's API
calls the given callback with the data it receives from the API (as a JS object):
// In node

const fetchRepositoryInfo = require('./fetchRepositoryInfo');

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
  */

const got = require("got");

const fetchRepositoryInfo = (repository, callback) => {
  got(`https://api.github.com/repos/${repository}`).then((response) => {
    callback(JSON.parse(response.body));
  });
};

module.exports = fetchRepositoryInfo;
