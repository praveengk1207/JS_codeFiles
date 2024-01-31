//truthe and falsie values
const usermail = "gk@gmail.com";

if (usermail) {
  console.log("successful");
} else {
  console.log("un successful");
}

const usermail2 = [];

if (usermail) {
  console.log("successful");
} else {
  console.log("un successful");
}

// correct way to check empty array
const usermail22 = [];

if (usermail.length === 0) {
  console.log("empty");
} else {
  console.log("not empty");
}

// to check for object
const myobj = {};

if (Object.keys(myobj).length === 0) {
  console.log("empty");
}
console.log("full");

// false values
// false, 0 , -0 , BIG INT 0n, "" , null , undefined , NaN

//truthe
//"0" , 'false' , " " , [] , function(){}

//false == 0 "true"
//false == '' "true"
//0 = '' "true"

//Nullish Coalescing Operator (??) : null , undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val2 = undefined ?? 55;
val3 = undefined ?? 60 ?? 80;

console.log(val1);
console.log(val2);
console.log(val3);

//terinary operator

const iceTeaPrice = 100;
iceTeaPrice <= 90
  ? console.log("less than 90")
  : console.log("greater than  90");
