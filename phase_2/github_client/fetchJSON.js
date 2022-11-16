const got = require("got");

const fetchJson = (url, callback) => {
  got(url).then((response) => {
    callback(JSON.parse(response.body));
  });
};

module.exports = fetchJson;

//const fetchJson = require("./fetchJson");

//fetchJson("https://jsonplaceholder.typicode.com/todos", (response) => {
//  console.log(response); // handler callback
//});
