const uppercaseMessage = (message) => {
  return message.toUpperCase();
}
// takes message as an argument and returns it in uppercase

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

// takes a message and the transform function and performs the transform function on the message//

transform("hello", uppercaseMessage);

// passes 'hello' and function and applies it