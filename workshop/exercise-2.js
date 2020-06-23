// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

const printGuestOrder = (early, late) => {
  const newArray = early.concat(late);
  newArray.forEach((element) => {
    console.log(`${newArray.indexOf(element) + 1}. ${element}`);
  });
};

printGuestOrder(earlyBirds, lateComers);
