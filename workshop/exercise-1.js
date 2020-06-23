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
  arr[9] = last;
  return arr;
};

console.log(
  fixList(mostPopularFood, "bean burritos", "buffalo-flavored cauliflower")
);
