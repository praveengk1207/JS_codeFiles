const name = new String("PraveenGogulakonda");
console.log(name);

console.log(name.length); //len of string

console.log(name[2]); //accessing from posi

console.log(name.toUpperCase());

console.log(name.toLowerCase());

console.log(name.charAt(5));

console.log(name.substring(0, 5));

console.log(name.slice(-7, 1));

//incase of taking input from the HTML forms we may get white spaces in that case we use (.trim())
//example

const ipname = new String("         praveen        ");
console.log(ipname);
console.log(ipname.trim()); //to trim all white spaces
console.log(ipname.trimStart()); //to trim white spaces at start
console.log(ipname.trimEnd()); //to trim white spaces at end

// for replacing an char in string we use .replace('char that we want to replace' , 'char that we want to replace with')
//example
const rep = "antesports";
console.log(rep.replace("a", "A"));
console.log(rep.replace("e", "E"));

console.log(rep.includes("ant"));
