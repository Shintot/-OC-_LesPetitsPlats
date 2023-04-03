let valeur = [];
let filtreTag = document.querySelector(".research__filters");
let appclic = document.querySelectorAll(".casparcasappareil");
let ustclic = document.querySelectorAll(".casparcasustensils");
let ingrclic = document.querySelectorAll(".casparcas");

function filtrer(resultas) {
  resulta.innerHTML = "";
  const tags = valeur.map((tag) => tag.toLowerCase());

  const trie = resultas.filter((el) => {
    return tags.every((tag) => {
      const tagInIngredients = el.ingredients.some((ingr) =>
        ingr.ingredient.toLowerCase().includes(tag)
      );
      const tagInUstensils = el.ustensils.some((ust) =>
        ust.toLowerCase().includes(tag)
      );

      const tagInAppareil = el.appliance.toLowerCase().includes(tag);
      return tagInIngredients || tagInUstensils || tagInAppareil;
    });
  });

  return trie;
}

const addTag = (element, tagClass, resultas) => {
  if (element.hasAttribute("data-tag-clicked")) {
    return;
  }

  element.setAttribute("data-tag-clicked", "true");

  filteredRecipes = filtrer(resultas);

  element.addEventListener("click", () => {
    valeur.push(element.innerText);

    const tag = document.createElement("div");
    tag.setAttribute("class", tagClass);
    tag.innerHTML = `<div class="flex${tagClass}">
                       <p class="tagtext">${element.innerHTML}</p>
                       <span class="croix">x</span>
                       </div>`;

    filtreTag.appendChild(tag);

    apprareilFiltreIngredient(filteredRecipes);
    apprareilFiltreAppareil(filteredRecipes);
    apprareilFiltreUstensiles(filteredRecipes);

    const tagRecup = tag.querySelector("span");
    tagRecup.addEventListener("click", () => {
      const contenantTag = tag.querySelector("div");
      tag.style.display = "none";

      // Supprimer la valeur du tag du tableau "valeur"
      const valeurIndex = valeur.indexOf(element.innerText);
      if (valeurIndex !== -1) {
        valeur.splice(valeurIndex, 1);
      }
      filteredRecipes = filtrer(resultas);

      apprareilFiltreIngredient(filteredRecipes);
      apprareilFiltreAppareil(filteredRecipes);
      apprareilFiltreUstensiles(filteredRecipes);
      creaCarte(filteredRecipes);
    });

    creaCarte(filteredRecipes);
  });
};

function Tags(resultas) {
  ingrclic.forEach((element) => {
    addTag(element, "tagingr", resultas);
  });

  appclic.forEach((element) => {
    addTag(element, "tagapp", resultas);
  });

  ustclic.forEach((element) => {
    addTag(element, "tagust", resultas);
  });

  let filteredRecipes = filtrer(resultas);
  creaCarte(filteredRecipes);
}

let tableauxIngrTrie = [];

function apprareilFiltreIngredient(ing) {
  let tableauxIngr = [];

  let filteredRecipe = filtrer(ing);

  filteredRecipe.forEach((recipe) => {
    recipe.ingredients && recipe.ingredients.length > 0
      ? recipe.ingredients.forEach((element) =>
          tableauxIngr.push(element.ingredient)
        )
      : tableauxIngr.push([]);
  });

  tableauxIngrTrie = [...new Set(tableauxIngr)].sort();

  const list = document.querySelector("#ingredient__results");

  list.innerHTML = tableauxIngrTrie
    .map((element) => `<li class="casparcas">${element}</li>`)
    .join("");

  ingrclic = document.querySelectorAll(".casparcas");

  Tags(filteredRecipe);
}

const inputIngredient = document.querySelector("#chercheIngr");
inputIngredient.addEventListener("input", function () {
  const rechercheString = inputIngredient.value
    .toLowerCase()
    .replace(/\s/g, "");
  const regex = new RegExp(rechercheString);

  const listItems = document.querySelectorAll(".casparcas");
  const filteredItems = Array.from(listItems).filter((li) =>
    regex.test(li.textContent.toLowerCase().replace(/\s/g, ""))
  );

  filteredItems.sort((a, b) => a.textContent.localeCompare(b.textContent));

  const list = document.querySelector("#ingredient__results");

  if (rechercheString === "") {
    // réinitialiser la liste si la chaîne de recherche est vide
    list.innerHTML = tableauxIngrTrie
      .concat()
      .map((element) => `<li class="casparcas">${element}</li>`)
      .join("");
  } else {
    list.innerHTML = "";
    filteredItems.forEach((li) => list.appendChild(li));
  }
});

let tableauxAppTrie = [];

function apprareilFiltreAppareil(filtre) {
  let filteredRecipe = filtrer(filtre);
  tableauxApp = filteredRecipe.map((element) => element.appliance);

  tableauxAppTrie = [...new Set(tableauxApp)].sort();

  const list = document.querySelector("#appareil__results");

  list.innerHTML = tableauxAppTrie
    .map((element) => `<li class="casparcasappareil">${element}</li>`)
    .join("");

  appclic = document.querySelectorAll(".casparcasappareil");

  Tags(filteredRecipe);
}

const inputAppareil = document.querySelector("#chercheApp");
inputAppareil.addEventListener("input", function () {
  const rechercheString = inputAppareil.value.toLowerCase().replace(/\s/g, "");
  const regex = new RegExp(rechercheString);

  const listItems = document.querySelectorAll(".casparcasappareil");
  const filteredItems = Array.from(listItems).filter((li) =>
    regex.test(li.textContent.toLowerCase().replace(/\s/g, ""))
  );

  filteredItems.sort((a, b) => a.textContent.localeCompare(b.textContent));

  const list = document.querySelector("#appareil__results");

  if (rechercheString === "") {
    // réinitialiser la liste si la chaîne de recherche est vide
    list.innerHTML = tableauxAppTrie
      .concat()
      .map((element) => `<li class="casparcasappareil">${element}</li>`)
      .join("");
  } else {
    list.innerHTML = "";
    filteredItems.forEach((li) => list.appendChild(li));
  }
});

let tableauxUstTrie = [];

function apprareilFiltreUstensiles(ust) {
  let tableauxUst = [];
  console.log("base", tableauxUst);

  let filteredRecipe = filtrer(ust);

  filteredRecipe.forEach((recipe) => {
    recipe.ustensils && recipe.ustensils.length > 0
      ? tableauxUst.push(...recipe.ustensils)
      : tableauxUst.push([]);
  });

  tableauxUstTrie = [...new Set(tableauxUst)].sort();
  console.log("trie", tableauxUstTrie);

  const list = document.querySelector("#ustensils__results");
  list.innerHTML = tableauxUstTrie
    .map((element) => `<li class="casparcasustensils">${element}</li>`)
    .join("");

  ustclic = document.querySelectorAll(".casparcasustensils");

  Tags(filteredRecipe);
}

const input = document.querySelector("#rechercheUsteniles");
input.addEventListener("input", function () {
  const rechercheString = input.value.toLowerCase().replace(/\s/g, "");
  const regex = new RegExp(rechercheString);

  const listItems = document.querySelectorAll(".casparcasustensils");
  const filteredItems = Array.from(listItems).filter((li) =>
    regex.test(li.textContent.toLowerCase().replace(/\s/g, ""))
  );

  filteredItems.sort((a, b) => a.textContent.localeCompare(b.textContent));

  const list = document.querySelector("#ustensils__results");

  if (rechercheString === "") {
    // réinitialiser la liste si la chaîne de recherche est vide
    list.innerHTML = tableauxUstTrie
      .concat()
      .map((element) => `<li class="casparcasustensils">${element}</li>`)
      .join("");
  } else {
    list.innerHTML = "";
    filteredItems.forEach((li) => list.appendChild(li));
  }
});
