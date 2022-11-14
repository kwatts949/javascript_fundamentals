const sayHello = (name) => {
  return ('Hello ' + name);
}

// export the function to use outside of file
module.exports = sayHello;

/*
node

const sayhello = require('./sayHello');

sayhello('Kay');
*/
