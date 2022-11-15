class UserBase {
  constructor(users) { // takes an array of user instances
    this.users = users;
  }

  Count() {  // return count of names in users array
    return this.users.length;
  }

  getNames = () => { // return list of names
    // call getName for each person in list
    return this.users.map((user) => {
      return user.getName();
    });
  }

  getIntroductions = () => {
    return this.users.map((user) => {
      return user.getIntroduction();
    });
  }
}

module.exports = UserBase;


// const User = require('./user');
// const UserBase = require('./UserBase');
/*
const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

> const userBase = new UserBase(users);

> userBase.count();
3

> userBase.getNames();
[ 'Uma', 'Josh', 'Ollie' ]

> userBase.getIntroductions();
[
  'Hi, my name is Uma',
  'Hi, my name is Josh',
  'Hi, my name is Ollie'
]
*/