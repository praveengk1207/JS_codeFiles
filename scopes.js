function one() {
  const username = "praveen"; //global
  function two() {
    const website = "youtube"; //local
    console.log(username);
  }
  //console.log(website);
  two();
}

one();
