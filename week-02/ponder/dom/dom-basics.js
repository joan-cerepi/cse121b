const paragraph1 = document.createElement("p");
paragraph1.innerText = "Added with Javascript!";
document.body.appendChild(paragraph1);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Placeholder Image");
document.body.appendChild(newImage);

// New Section with child elements.
const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
const paragraph2 = document.createElement("p");

newH2.innerText = "CSE 121b";
paragraph2.innerText = "Welcome to Javascript Language";

newSection.appendChild(newH2);
newSection.appendChild(paragraph2);
document.body.appendChild(newSection);
