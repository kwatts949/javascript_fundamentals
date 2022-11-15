class User {

  // A constructor, to give initial arguments.
  constructor(name) {

    // We can define attributes stored on the instance with `this`
    this.name = name;
  }

  // A method.
  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

// Export the class
module.exports = User;

// to require: const User = require('./user');
// to create a new instance: const user = new User('Uma');
/*

> user.getName(); 
'Uma'

> user.getIntroduction();
'Hi, my name is Uma'
*/