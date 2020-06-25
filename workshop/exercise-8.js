// Exercise 8
// ----------

const staffMembers = [
  {
    name: "Jane Smith",
    title: "Web Developer II",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6,
    },
  },
  {
    name: "Frank Castle",
    title: "Web Developer I",
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3,
    },
  },
  {
    name: "Steve Rogers",
    title: "Database Admin",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9,
    },
  },
  {
    name: "Chuck Taylor",
    title: "Web Developer III",
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8,
    },
  },
  {
    name: "Thor Odinson",
    title: "Web Intern",
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6,
    },
  },
];

const getJS6 = (arr) => {
  return arr.filter((obj) => {
    return obj.skillLevels.javascript >= 6;
  });
};

console.log(getJS6(staffMembers));

//Stretch

const getResource = (arr, language, minLevel) => {
  return arr.filter((obj) => {
    return obj.skillLevels[language] >= minLevel;
  });
};

console.log(getResource(staffMembers, "javascript", 1));
console.log(getResource(staffMembers, "python", 4));
