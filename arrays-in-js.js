//arrays
// arrays in js are mutale or resizeable
const myarray = [1, 2, 3, 4, 5];
const heros = ["ballaya", "chiru", "nag"];
console.log(myarray);
console.log(heros);

console.log(heros[2]); //to access ele by its index

heros.push("allu"); // for inserting the elements into the array
console.log(heros);
heros.pop(); //to  remove  last ele from an array
console.log(heros);

heros.unshift("dil"); //in order to push elements into array from front

heros.shift(); //to rem ele similar to pop

console.log(myarray.includes(100)); //to check weather the element is there in the array or not

console.log(heros.indexOf("chiru")); //to get index posi of the element

console.log(myarray.join()); //to make array into string

// slice aur splice

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("og array", myarr);

const myarr2 = myarr.slice(1, 4);
console.log("sliced array", myarr2);

const myarr3 = myarr.splice(1, 4);
console.log("og array", myarr);
console.log("spliced array", myarr3);

// array part 2
//please visit prototypes in inspect page

const marvel = ["thor", "ironman", "spiderman"];
const dc = ["superman", "batman", "flash"];

//marvel.push(dc);
//console.log(marvel);

const all = marvel.concat(dc);
console.log(all);

//easy method for conact

const all2 = [...marvel, ...dc]; //spread operation
console.log(all2);

const mult = [1, 2, 3, [4, 5], 7, [9, 8, [10, 11, [12, 13], 14, 15], 16], 17];
const real = mult.flat(Infinity);
console.log(real);

//if we get data or array  from web scrapping

const arrcreation = Array.from("praveengk@9490"); //Array.form is used to crate array from the argument
console.log(arrcreation);

let a1 = "praveen";
let a2 = "sweety";
const offun = Array.of(a1, a2); //A set of elements to include in the new array object.
console.log(offun);

const tocheck = Array.isArray("hitu"); //is.Array is used inorder to find weather array is used before to find it
console.log(tocheck);
