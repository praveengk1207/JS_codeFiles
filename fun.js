function saymyname() {
  console.log("praveen");
}

saymyname();

//---------------------------

function add(a, b) {
  console.log(a + b);
}

add(4, 5);

function add1(a, b) {
  let result = a + b;
  return result;
}

const result = add1(6, 7);
console.log(result);

//-----------------------------------

function add2(a, b) {
  let result2 = a + b;
  console.log(result2);
}

add2(88, 22);

//------------------------------

function login(username) {
  return `${username} just logged in`;
}

console.log(login("praveen"));

//----------------------------------

function login1(username) {
  return `${username} just logged in`;
}

console.log(login1());

//-----------------------------------

function login2(username) {
  //if (!username) {}
  if (username === undefined) {
    console.log("please define username");
    return;
  }
  return `${username} just logged in`;
}

console.log(login2());

//------------------------------------

function login3(username) {
  if (!username) {
    console.log("please define username");
    return;
  }
  return `${username} just logged in`;
}

console.log(login3("gk"));

//----------------------------------

function addtocart(num) {
  return num;
}

console.log(addtocart(2));

//------------------------------

function calthecart(...item) {
  return item;
}

console.log(calthecart(2, 3, 5, 6, 7));

//---------------------------------

const User = {
  UserName: "PraveenGogulakonda",
  age: 21,
};

function obj(anyobject) {
  console.log(`hello ! ${anyobject.UserName} and your age is ${anyobject.age}`);
}

obj(User);

//-------------------------

const myarray = [100, 200, 300];

function GetArray(getvalue) {
  return getvalue[2];
}

console.log(GetArray(myarray));

//---------------------------------

function GetArray1(getvalue1) {
  return getvalue1[2];
}

console.log(GetArray([200, 300, 5000, 600]));

//---------------------------------
