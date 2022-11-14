const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (delay, function) => {
  setTimeout(function, delay * 1000);
}

executeAfterDelay(5, printHello);
