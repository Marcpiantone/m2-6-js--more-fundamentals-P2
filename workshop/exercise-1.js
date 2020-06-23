// Exercise 1
// ----------

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

const fixList = (arr, first, last) => {
  arr.unshift(first);
  arr.pop();
  arr.push(last);
  return arr;
};

const printList = (arr) => {
  arr.forEach((element) => {
    console.log(`${arr.indexOf(element) + 1}. ${element}`);
  });
};

printList(
  fixList(mostPopularFood, "bean burritos", "buffalo-flavored cauliflower")
);
