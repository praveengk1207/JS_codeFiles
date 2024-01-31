const codeing = ["js", "ruby", "c", "c++"];
codeing.forEach((val) => {
  console.log(val);
});

console.log("----------------------------");

function hbo(item) {
  console.log(item);
}

codeing.forEach(hbo);

console.log("----------------------------");

codeing.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

console.log("----------------------------");

const objarr = [
  {
    lang: "JS",
    langfor: "webd",
  },
  {
    lang: "PY",
    langfor: "DA",
  },
];

objarr.forEach((element) => {
  console.log(element);
});
objarr.forEach((element) => {
  console.log(element.lang);
});
objarr.forEach((element) => {
  console.log(element.langfor);
});
