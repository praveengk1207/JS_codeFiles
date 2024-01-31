// lets start with IF statements in js
// < less than , > greater then , <= less than or equal , >= grater than equal to , == equals to , != not equals to
// === it checks equals to strongly it even checks for type of variables\

function a(n1, n2) {
  if (n1 == n2) {
    return "they are equal";
  } else {
    return "they are not equal";
  }
}

console.log(a(2, "2"));

const userloggedin = true;
const userloggedout = false;
const logginbyemail = true;
const logginbyggl = false;
const hadcash = true;

if (userloggedin && hadcash) {
  console.log("allow to buy him course");
}

if ((userloggedin && logginbyemail) || logginbyggl) {
  console.log("allow him to class");
}

// switch case
var month = 5;

switch (month) {
  case 1:
    console.log("JAN");
    break;
  case 2:
    console.log("FEB");
    break;
  case 3:
    console.log("MAR");
    break;
  case 4:
    console.log("APR");
    break;
  case 5:
    console.log("MAY");
    break;

  default:
    console.log("DEFAULT");
    break;
}

var month = "feb";

switch (month) {
  case "jan":
    console.log("JAN");
    break;
  case "feb":
    console.log("FEB");
    break;

  default:
    console.log("DEFAULT");
    break;
}
