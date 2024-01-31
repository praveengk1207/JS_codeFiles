//obj can be created by literal and constuctor
//singleton == one object and it is not created by literal and can only be created by constructor

const jsuser = {}; //literal creation  //obj has key and value pairs

const obj = {
  name: "praveen",
  lastname: "gk",
  age: 21,
  location: "knr",
  abcd: 12,
};

const mysym = Symbol("abcd");

console.log(mysym);

const a = {
  name: 123,
  age: 1234,
  [mysym]: "mykey",
};

console.log(a[mysym]);

// if i have a scenario like this
// const obj = {
//       "name" = "praveen",
//       }
// i have to use log as this >
//console.log(obj[name])  not like this ---> console.log(obj.name)

// for change
const change = (obj.location = "NY"); //to change values inside the object
console.log(obj.location);

//for freeze
//const freeze = Object.freeze(obj); //here i freezed the object from changes
const change2 = (obj.location = "vegas"); //here i tryed to change
console.log(obj);

obj.greeting = function () {
  console.log("hello js user");
};

obj.greeting();

obj.greeting2 = function () {
  console.log(`hello js user,${this.name}`);
};

obj.greeting2();

//single ton object creation

const tinderuser = new Object();
tinderuser.name = "praveen";
tinderuser.age = 20;

console.log(tinderuser);
const forkeys = Object.keys(tinderuser);

console.log(forkeys);
const forvalues = Object.values(tinderuser);

console.log(forvalues);
const forent = Object.entries(tinderuser);

console.log(forent);
const isthere = tinderuser.hasOwnProperty("email");
console.log(isthere);

//obj merging

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c" };
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
