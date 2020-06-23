// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// createRecommendations function

const createRecommendations = (arr) => {
  let sides = Object.values(arr);
  return Object.keys(arr).map((food, foodIndex) => {
    return `With ${food}, it is best to have ${sides[foodIndex]}`;
  });
};

// printRecommendations function
const printRecommendations = (arr) => {
  arr.forEach((element) => {
    console.log(`- ${element}`);
  });
};
// function call (done)
//printRecommendations(createRecommendations(foodPairings));

printRecommendations(createRecommendations(foodPairings));
