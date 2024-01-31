// Imediately Invoked Function Expression

(function chai() {
  console.log("DB connected !");
})(); // this is called name iife

//()() iife

(() => console.log())();

((username, age) => console.log(`${username} welcome to chai aur code ${age}`))(
  "praveen",
  21
); //unnamed iife
