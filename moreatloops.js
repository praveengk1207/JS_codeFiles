const myarr = ["sa", "an", "he"];

// const val = myarr.forEach((item) => {
//   return item;
// });
// console.log(val);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnums = numbers.filter((num) => {
  return num > 4;
});

console.log(newnums);

console.log("--------------------------------------------");

const nuw = [];

numbers.forEach((element) => {
  if (element > 5) {
    nuw.push(element);
  }
});
console.log(nuw);

console.log("--------------------------------------------");

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let gonrewise = books.filter((bks) => {
  return bks.genre === "Fiction";
});

console.log(gonrewise);

console.log("--------------------------------------------");

let g = books.filter((iten) => {
  return iten.publish >= 2000;
});

console.log(g);

console.log("--------------------------------------------");

let gnp = books.filter((bk) => {
  return bk.genre === "History" && bk.edition >= 2000;
});

console.log(gnp);

console.log("--------------------------------------------");
