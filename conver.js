//conversion//


//string to  number
let a = "21"
let s = "praveen"
console.log(typeof a);
let a1 = Number(a)
console.log(typeof a1);
let s1 = Number(s)
console.log(s1); //we  get NaN as o/p bucz the string cannot be converted as num

//  num to str
let age = 90
console.log(typeof(a));
let b = String(age)
console.log(typeof(b));

//NAN
let n = "21abc"
console.log(typeof n);
let n1 = Number(n)
console.log(typeof n1) //it is converted to number 
console.log(n1); //nut we get output NAN bcuz 

//null
let nu = null
console.log(typeof nu);
let nu1 =  Number(nu)
console.log(nu1);

//undefined 
let un = undefined
console.log(typeof un);
let un1 =  Number(un)
console.log(un1);

//Boolean
let t = true
console.log(typeof t);
let t1 = Number(t)
console.log(t1);
let t2 = String(t)
console.log(t2);

let f =   false
console.log(typeof f);
let f1 = Number(f)
console.log(f1);
console.log(typeof f1);

