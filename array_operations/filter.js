const phoneNumbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  }
}
/* 
checkLength is passed a number as an argument. If the number's length is less than 10, it returns true 
*/

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}

/* 
filterLongNumbers is passed an array of numbers. The array is filtered according to the checkLength function.
*/

/*
filterLongNumbers(phoneNumbers);
[ '1763687364', '4763687363', '7867867862' ]


> filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
[ '4763687363', '7867867862' ]

> filterLongNumbers([])
[ ]
*/
