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
  function apprareilFiltreIngredient(ing) {
    // ------ VERSION BOUCLE FOR()
      /* for (let u of ing) {
        const { ingredients } = u;
        for (let ingredientList of ingredients) {
          const { ingredient } = ingredientList;
          const liIng = document.createElement("li");
          liIng.setAttribute("class", "casparcas");
          liIng.innerHTML = `${ingredient}`;
          pagefiltreIngredient.appendChild(liIng);
        }
      }*/

  // ------ VERSION FOREACH()
  let tableauxIngr = [];

  ing.forEach((element) => {
    const { ingredients } = element;
    if (ingredients && ingredients.length > 0) {
      ingredients.forEach((element) => {
        const { ingredient } = element;
        tableauxIngr.push(ingredient);
      });
    } else {
      tableauxIngr.push(element);
    }
  });
  [...new Set(tableauxIngr)].forEach((element) => {
    tableauxIngrTrie.push(element);
    const liIng = document.createElement("a");
    
    liIng.setAttribute("class", "casparcas");
    liIng.innerHTML = `${element}`;
    pagefiltreIngredient.appendChild(liIng);
  });
  }

  let tableauxIngrTrie = [];

  resultasIngr.addEventListener("input", rechercheFiltreIngr);
  function rechercheFiltreIngr(e) {
  pagefiltreIngredient.innerHTML = "";

  const rechercheString = e.target.value.toLowerCase().replace(/\s/g, "");
  let regex = new RegExp(rechercheString);

  const trie = tableauxIngrTrie.filter((el) => {
    return regex.test(el.replace(/\s/g, "").toLowerCase());
  });
  //console.log("filtered", trie);
  apprareilFiltreIngredient(trie);
  
  // AFFICHE TAG AU CLIC 
  Tags()
  }




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
  function apprareilFiltreAppareil(filtre) {
  // ------ VERSION BOUCLE FOR()
  /*for (let uls of filtre) {
      const { appliance } = uls;
      console.log(appliance);
      const li = document.createElement("li");
      li.innerHTML = `<p class="">${appliance}</p>`;
      pagefiltreAppareil.appendChild(li);
    }*/

  // ------ VERSION FOREACH()
  let tableauxApp = [];
  filtre.forEach((element) => {
    const { appliance } = element;
    tableauxApp.push(appliance);
    tableauxAppTrie.push(element);
  });
  [...new Set(tableauxApp)].forEach((element) => {
    const li = document.createElement("a");
    li.setAttribute("class", "casparcasappareil");
    li.innerHTML = `<p>${element}</p>`;
    pagefiltreAppareil.appendChild(li);
  });
  }

  // ------ RECHERCHE APPAREILS
  let tableauxAppTrie = [];

  resultasApp.addEventListener("input", rechercheFiltreApp);
  function rechercheFiltreApp(e) {
    pagefiltreAppareil.innerHTML = "";
    const rechercheString = e.target.value.toLowerCase().replace(/\s/g, "");

    const trie = tableauxAppTrie.filter((el) =>
      el.appliance.toLowerCase().replace(/\s/g, "").includes(rechercheString)
    );
    apprareilFiltreAppareil(trie);

    // AFFICHE TAG AU CLIC
    Tags();
  }



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
  function apprareilFiltreUstensiles(ust) {
  // ------ VERSION BOUCLE FOR()
  /*for (let materiel of ust) {
    const { ustensils } = materiel;
    for (let ustensil of ustensils) {
      //console.log(ustensil);
      const liUst = document.createElement("li");
      liUst.setAttribute("class", "test");
      liUst.innerHTML = `<p class="">${ustensil}</p>`;
      pagefiltreUstensiles.appendChild(liUst);
    }
  }*/

  // ------ VERSION FOREACH()
  let tableauxUst = [];

  ust.forEach((element) => {
    const { ustensils } = element;

    if (ustensils && ustensils.length > 0) {
      ustensils.forEach((element) => {
        tableauxUst.push(element);
      });
    } else {
      tableauxUst.push(element);
    }
  });
  [...new Set(tableauxUst)].forEach((element) => {
    tableauxTrie.push(element);
    // const lien = document.createElement("a");
    const liUst = document.createElement("a");
    liUst.setAttribute("class", "casparcasustensils");
    liUst.innerHTML = `<p class="tagtext">${element}</p>`;
    pagefiltreUstensiles.appendChild(liUst);
  });
  }

  // ------ RECHERCHE USTENSILS
  let tableauxTrie = [];
  //console.log(tableauxTrie);

  resultasUst.addEventListener("input", rechercheFiltreUst);
  function rechercheFiltreUst(e) {
    pagefiltreUstensiles.innerHTML = "";

    const rechercheString = e.target.value.toLowerCase().replace(/\s/g, "");

    let regex = new RegExp(rechercheString);
    const trie = tableauxTrie.filter((el) => {
      console.log(el);
      return regex.test(el.replace(/\s/g, "").toLowerCase());
    });
    //console.log("filtered", trie);
    apprareilFiltreUstensiles(trie);
    // AFFICHE TAG AU CLIC
    Tags();
  }
  

  

