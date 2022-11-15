for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// As a function:

/*
const getParity = (number) => {
  if (i % 2 === 0) {
    return `even`;
  } else {
    return `odd`;
  }
}

for (let i = 0; i <= 20; i++) {
  const parity = getParity(i);
  console.log(`${i} is ${parity}`);
}
*/