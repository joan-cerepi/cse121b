// ACTIVITY 1 - map
// 1. Declare an array with value = ['one', 'two', 'three'].
const numbers = ["one", "two", "three"];

// 2. Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example: "<li>one</li>".
const htmlNumbers = numbers.map((number) => `<li>${number}</li>`);

// 3. Set our list of HTML strings into the myList list. (Hint...checkout the .join() method.).
const myList = document.getElementById("myList");
myList.innerHTML = htmlNumbers.join("");

// ACTIVITY 2 - map
// 1. Declare an array with letter grades in it: ['A', 'B', 'A'].
const letterGrades = ["A", "B", "A"];

// 2. Write a function that will take one letter grade, and return the appropriate gpa points for that grade.
// IE if we send in 'A' it should return 4.
const getGpaPoints = (grade) => {
  return grade === "A" ? 4 : 3;
};

// 3. Use map and our conversion function to convert the array in step 1 to gpa points.
const gpaPoints = letterGrades.map(getGpaPoints);

// ACTIVITY 3 - reduce
// 1. Using reduce calculate the GPA from the array of gpaPoints.
const gpaTotal = gpaPoints.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);

// ACTIVITY 4 - filter
// 1. Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape'].
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

// 2. Using filter keep only the fruits that are longer than 6 characters.
const longWords = fruits.filter((fruit) => fruit.length > 6);

// ACTIVITY 5 - indexOf
// 1. Declare an array with the following value: [12, 34, 21, 54].
const luckyNumbers = [12, 34, 21, 54];

// 2. Declare a luckNumber variable with the value 21.
const luckyNumber = 21;

// 3. Use indexOf to see if the luckyNumber is in the Array.
const luckyIndex = luckyNumbers.indexOf(luckyNumber);
