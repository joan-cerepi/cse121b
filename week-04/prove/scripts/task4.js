/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const person = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
person.name = "Joan Cerepi";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
person.photo = "images/joan-profile.webp";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
person.favoriteFoods = [
  "Pizza",
  "Mac & cheese",
  "Spaghetti",
  "Bacon",
  "French fries",
];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
person.hobbies = ["Coding", "Reading", "Eating", "Ethical Hacking"];

// Step 6: Add another property named placesLived with a value of an empty array
person.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
person.placesLived.push({ place: "", length: "" });

// Step 8: For each property, add appropriate values as strings
person.placesLived[0].place = "United States";
person.placesLived[0].length = "6 months";

// Step 9: Add additional objects with the same properties for each place you've lived
person.placesLived.push({ place: "Albania", length: "25 years" });
person.placesLived.push({ place: "Greece", length: "2 years" });

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = person.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = person.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = person.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const favoriteFoodItems = person.favoriteFoods.map((favoriteFood) => {
  const li = document.createElement("li");
  li.textContent = favoriteFood;
  return li;
});

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
const favoriteFoodList = document.getElementById("favorite-foods");
favoriteFoodItems.forEach((favoriteFood) => {
  favoriteFoodList.appendChild(favoriteFood);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbies = person.hobbies.map((hobby) => {
  const li = document.createElement("li");
  li.textContent = hobby;
  return li;
});

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const hobbyList = document.getElementById("hobbies");
hobbies.forEach((hobby) => {
  hobbyList.appendChild(hobby);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const placesLived = person.placesLived
  .map(
    (placeLived) => `<dt>${placeLived.place}:</dt><dd>${placeLived.length}</dd>`
  )
  .join("");

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.getElementById("places-lived").innerHTML = placesLived;
