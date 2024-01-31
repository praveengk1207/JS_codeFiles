const user = {
  username: "praveen",
  price: 999,

  welmsg: function () {
    console.log(`${this.username}, welcome to this accursed world!`); //we use this to get corrent context
  },
};

user.welmsg();
user.username = "sweety"; //current instance for this has been updated
user.welmsg();

//------------------------------------

function chai() {
  console.log(this.username);
}

chai();

//-----------------------

const chat = function () {
  let username = "gk";
  console.log(this.username);
};

chat();

//-----------------------------

//++++++++++++++ ARROW fun +++++++++++++++++++++++//

const add = (a, b) => {
  return a + b;
};

console.log(add(4, 6));

//------------ OR (Inmplicit method) ---------------//

const addthem = (num1, num2) => num1 + num2;
console.log(addthem(9, 9));
