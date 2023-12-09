/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
const person = {
  name: "Joan Cerepi",
  photo: "images/joan-profile.webp",
  favoriteFoods: [
    "Pizza",
    "Mac & cheese",
    "Spaghetti",
    "Bacon",
    "French fries",
  ],
  hobbies: ["Coding", "Reading", "Eating", "Ethical Hacking"],
};

// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
person.placesLived = [
  {
    place: "United States",
    length: "6 months",
  },
  {
    place: "Albania",
    length: "25 years",
  },
  {
    place: "Greece",
    length: "2 years",
  },
];

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = person.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = person.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = person.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
person.favoriteFoods.forEach((favoriteFood) => {
  const li = document.createElement("li");

  li.textContent = favoriteFood;

  document.getElementById("favorite-foods").appendChild(li);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
person.hobbies.forEach((hobby) => {
  const li = document.createElement("li");

  li.textContent = hobby;

  document.getElementById("hobbies").appendChild(li);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
person.placesLived.forEach((placeLived) => {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  const listOfPlacesLived = document.getElementById("places-lived");

  dt.textContent = placeLived.place;
  dd.textContent = placeLived.length;

  listOfPlacesLived.appendChild(dt);
  listOfPlacesLived.appendChild(dd);
});
