// for of

// ['' , '' , '']
// [{} , {} , {}]

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  console.log(num);
}

console.log("--------------------------");

const a = "greetings";
for (const i of a) {
  console.log(i);
}

console.log("-----------------------------");
// maps   // are objects and it has key value pairs and it have order for key

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("EU", "Europe");

for (const [key, value] of map) {
  console.log(key, " : ", value);
}

console.log("---------------------------------");

const mygames = {
  game1: "NFS",
  game2: "pubg",
};

for (const [key, value] of mygames) {
  console.log(key, " : ", value);
}
