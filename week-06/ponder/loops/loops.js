const myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};

const generateMarkup = (list, templateCallback) => {
  return list.map(templateCallback).join("");
};

const favoriteFoodTemplate = (favoriteFood) => `<li>${favoriteFood}</li>`;
const placesLivedTemplate = (placeLived) =>
  `<dt>${placeLived.place}</dt><dd>${placeLived.length}</dd>`;

document.getElementById("favorite-foods").innerHTML = generateMarkup(
  myInfo.favoriteFoods,
  favoriteFoodTemplate
);

document.getElementById("places-lived").innerHTML = generateMarkup(
  myInfo.placesLived,
  placesLivedTemplate
);
