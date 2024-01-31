const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const my = numbers.reduce((acc, curval) => {
//   console.log(acc, curval);
//   return acc + curval;
// }, 0);

const my = numbers.reduce((acc, curval) => acc + curval, 0);

console.log(my);
