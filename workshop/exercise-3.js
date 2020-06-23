// Exercise 3
// ----------

let mostPopularFood = [
  "bean burritos",
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  "buffalo-flavored cauliflower",
];

const printInAlphabeticalOrder = (arr) => {
  const alphaArr = [...arr];
  alphaArr.sort().forEach((element) => {
    console.log(`${element} (${arr.indexOf(element) + 1})`);
  });
};

printInAlphabeticalOrder(mostPopularFood);
