/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = 'Joan Çerepi';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = name;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let picture = 'images/joan.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
const img = document.querySelector('header img');
img.setAttribute('src', picture);
img.style.width = `${img.width / 1.1}px`;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFoods = ['pizza', 'hamburger', 'spaghetti', 'enchilada'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = `${favoriteFoods.join(', ')}.`;

// Step 3: declare and instantiate a variable to hold another favorite food
let favoriteFood = 'french fries';

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(favoriteFood);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = `${favoriteFoods.join(', ')}.`;

// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = `${favoriteFoods.join(', ')}.`;

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = `${favoriteFoods.join(', ')}.`;