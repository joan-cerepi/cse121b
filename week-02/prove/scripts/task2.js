/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const fullName = "Joan Cerepi";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const nameContainer = document.getElementById("name");
nameContainer.textContent = fullName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
const yearContainer = document.getElementById("year");
yearContainer.textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
const imageName = "joan-profile.webp";
const imageUrl = `images/${imageName}`;
const imgElement = document.querySelector("img");
imgElement.setAttribute("src", imageUrl);
imgElement.setAttribute("alt", "Joan at a miniature golf course");

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = [
  "Pizza",
  "Mac & cheese",
  "Spaghetti",
  "Bacon",
  "French fries",
];
// Step 2: place the values of the favorite foods variable into the HTML file
const foodContainer = document.getElementById("food");
foodContainer.textContent = favoriteFoods.join(", ");

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFavoriteFood = "Hamburger";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(anotherFavoriteFood);

// Step 5: repeat Step 2
foodContainer.textContent = favoriteFoods.join(", ");

// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();

// Step 7: repeat Step 2
foodContainer.textContent = favoriteFoods.join(", ");

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 7: repeat Step 2
foodContainer.textContent = favoriteFoods.join(", ");
