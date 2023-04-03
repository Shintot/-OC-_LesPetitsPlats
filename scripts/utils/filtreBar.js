//********************** INGREDIENTS *********************************

pagefiltreIngredient.setAttribute("class", "ingredient__results__displayed");
pagefiltreIngredient.style.display = "none";

//BTN UP CACHE
const btnup = document.querySelector("#boutonup");
btnup.style.display = "none";

//EVENEMENT OUVERTURE DU FILTRE INGREDIENTS
document
  .querySelector(".ingredient__button")
  .addEventListener("click", ingredientOuvre);

function ingredientOuvre() {
  var boutonouvert = document.querySelector(".ingredient__results__displayed");
  boutonouvert.style.display = "grid";

  const btnup = document.querySelector("#boutonup");
  btnup.style.display = "block";

  const btndown = document.querySelector("#boutondown");
  btndown.style.display = "none";
}

//EVENEMENT FERMER
document.querySelector("#boutonup").addEventListener("click", fermeBtn);
document.querySelector("#boutonAppareil").addEventListener("click", fermeBtn);
document
  .querySelector("#boutonUstensilsDown")
  .addEventListener("click", fermeBtn);

function fermeBtn() {
  const boutonouvert = document.querySelector("#ingredient__results");
  boutonouvert.style.display = "none";

  const btndown = document.querySelector("#boutondown");
  btndown.style.display = "block";

  const btnup = document.querySelector("#boutonup");
  btnup.style.display = "none";
}

// APARITION DES INGREDIENTS BOUCLE FOR

// ********************** APPAREILS *********************************

//BTN UP CACHE
const boutonUp = document.querySelector("#boutonAppareilup");
boutonUp.style.display = "none";

// OUVRE APPAREIL
const boutonAppareil = document
  .querySelector("#boutonAppareil")
  .addEventListener("click", appareils);

function appareils() {
  const appareil = document.querySelector("#appareil__results");
  appareil.classList.add("apparatus__results", "apparatus__results__displayed");
  appareil.style.display = "grid";

  boutonUp.style.display = "block";

  const btnDown = document.querySelector("#boutonAppareil");
  btnDown.style.display = "none";
}

//EVENEMENT FERMER
document
  .querySelector("#boutonAppareilup")
  .addEventListener("click", fermeAppareil);
document.querySelector("#boutondown").addEventListener("click", fermeAppareil);
document
  .querySelector("#boutonUstensilsDown")
  .addEventListener("click", fermeAppareil);

function fermeAppareil() {
  const fermeBouton = document.querySelector("#appareil__results");
  fermeBouton.style.display = "none";

  const btndown = document.querySelector("#boutonAppareil");
  btndown.style.display = "block";

  boutonUp.style.display = "none";
}

//  ------- ADD LA LISTE D'APPAREILS AU BOUTON
pagefiltreAppareil.setAttribute("class", "apparatus__results__undisplayed");

// ********************** USTENSILS *********************************

const up = document.querySelector("#boutonUstensils");
up.style.display = "none";

document
  .querySelector("#boutonUstensilsDown")
  .addEventListener("click", ustensils);

function ustensils() {
  const appareil = document.querySelector("#ustensils__results");
  appareil.classList.add("ustensils__results", "ustensils__results__displayed");
  appareil.style.display = "grid";

  const boutonUstensils = document.querySelector("#boutonUstensilsDown");
  boutonUstensils.style.display = "none";

  up.style.display = "block";
}

document.querySelector("#boutonUstensils").addEventListener("click", ferme);
document.querySelector("#boutonAppareil").addEventListener("click", ferme);
document.querySelector("#boutondown").addEventListener("click", ferme);

function ferme() {
  var appareil = document.querySelector("#ustensils__results");
  appareil.style.display = "none";

  const boutonUstensils = document.querySelector("#boutonUstensilsDown");
  boutonUstensils.style.display = "block";

  const up = document.querySelector("#boutonUstensils");
  up.style.display = "none";
}

//  ------- ADD LA LISTE D'USTENSILES AU BOUTON
pagefiltreUstensiles.setAttribute("class", "apparatus__results__undisplayed");

// ------ RECHERCHE USTENSILS
let tableauxTrie = [];
