const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const afteradd10 = numbers.map((num) => num + 10);
console.log(afteradd10);

console.log("--------------------------------------------");

my = [];
let afteradding = numbers.forEach((item) => {
  item = item + 10;
  my.push(item);
});

console.log(my);

console.log("--------------------------------------------");

const newNum = numbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 35);
console.log(newNum);
