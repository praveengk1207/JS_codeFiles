let a = "99";
let b = Number(a);
let c = b + 100;
console.log(c);

console.table([typeof a, typeof b, typeof c]);

const a1 = {
  name: "praveen",
  age: 21,
  edu: "btech",
};
console.log(a1);

//a1 = 45 in js we cannot change it

const a2 = {
  name: "hams",
  age: 21,
  edu: "btech",
};

a1["rel"] = "single";
console.log(a1);
a2["rel"] = "single";
console.log(a2);
