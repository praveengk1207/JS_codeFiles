// for loop
for (let index = 0; index < 10; index++) {
  const element = index;
  console.log(element);
}

console.log("----------------------------");

for (let i = 0; i < 10; i++) {
  const element = i;
  if (i === 5) {
    console.log("we encountered 5 ");
  }
  console.log(element);
}

console.log("----------------------------------");
console.log("---------9th  table---------");
for (let a = 9; a < 10; a++) {
  for (let index = 1; index < 10; index++) {
    console.log(`${a} * ${index}  =  ${a * index}`);
  }
}

console.log("----------------------------------");
// array opp

let myarr = ["flash", "batman", "superman"];
for (let index = 0; index < myarr.length; index++) {
  const element = myarr[index];
  console.log(element);
}

console.log("-----------------------------------------");

//break and continue

for (let aindex = 1; aindex <= 20; aindex++) {
  const element = aindex;
  if (aindex === 5) {
    console.log("value == 5");
    break;
  }
  console.log(`vlaues of i is ${aindex}`);
}

console.log("-------------------------------------");

for (let aindex = 1; aindex <= 20; aindex++) {
  const element = aindex;
  if (aindex === 5) {
    console.log(" 5 is detected");
    continue;
  }
  console.log(`vlaues of i is ${aindex}`);
}
