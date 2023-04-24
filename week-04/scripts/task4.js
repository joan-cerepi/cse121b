/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const information = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
information['name'] = 'Joan Çerepi';
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
information['photo'] = 'images/joan.jpg';
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
information['favoriteFoods'] = ['pizza', 'hamburger', 'spaghetti', 'enchilada'];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
information['hobbies'] = ['coding', 'reading', 'laughing', 'traveling', 'eating'];
// Step 6: Add another property named placesLived with a value of an empty array
information['placesLived'] = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
for (let i = 0; i < 5; i++) {
    let place = {'place': '', 'length': ''};
    information.placesLived.push(place);
}

for (let i = 0; i < 5; i++) {
    const places = {
        'places': [
            'United States', 'Bulgaria', 'France',
            'Greece', 'Switzerland'
        ],
        'lengths': [
            '2 months', '2 years', '3 weeks',
            '5 months', '1 week'
        ]
    };
    information['placesLived'][i].place = places.places[i];
    information['placesLived'][i].length = places.lengths[i];
}

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const name = document.getElementById('name');
name.innerHTML = information.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const photo = document.getElementById('photo');
photo.src = information.photo;
photo.width = photo.width;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.alt = information.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
const favoriteFoods = document.getElementById('favorite-foods');
const favFoodsLength = information.favoriteFoods.length;
for (let i = 0; i < favFoodsLength; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = information.favoriteFoods[i];
    favoriteFoods.appendChild(listItem);
}
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const hobbies = document.getElementById('hobbies');
const hobbiesLength = information.hobbies.length;
for (let i = 0; i < hobbiesLength; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = information.hobbies[i];
    hobbies.appendChild(listItem);
}
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const placesLived = document.getElementById('places-lived');
const placesLivedLength = information.placesLived.length;
for (let i = 0; i < placesLivedLength; i++) {
    placesLived.innerHTML += `<dt>${information.placesLived[i].place}</dt>`;
    placesLived.innerHTML += `<dd>${information.placesLived[i].length}</dt>`;
}