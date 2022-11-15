const addToBatch = (array, number) => {
  // return `${array}${number}`
  if (array.length >= 5) {
    console.log(array);
  } else {
    console.log(array.concat(number));
  }
}

/*
const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  }

  return array.concat(number);
}
*/
