const sayHello = (name) => {
  return ('Hello ' + name);
}

module.exports = sayHello;

/*
node

const sayhello = require('./sayHello');

sayhello();
*/
