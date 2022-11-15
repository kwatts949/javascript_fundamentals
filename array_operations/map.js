const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (nameList) => {
  return nameList.map((name) => {
    return `Hi ${name}! 50% off our best candies for you today!`;
  });
}