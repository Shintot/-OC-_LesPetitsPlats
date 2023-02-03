
//API
fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    
    //LE JSON
    const resultas = data.recipes;
    
    // TRIE DE RECHERCHE 
    rechercheBar.addEventListener("input", filtre);
    function filtre(e) {
      //VIDE LA LISTE
      resulta.innerHTML = "";
      const rechercheString = e.target.value.toLowerCase().replace(/\s/g, "");
       
      const trie = resultas.filter(
        (el) =>
          el.name.toLowerCase().includes(rechercheString) ||
          el.appliance.toLowerCase().includes(rechercheString) ||
          el.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(rechercheString)
          ) ||
          el.ustensils.some((ustensil) =>
            ustensil.toLowerCase().includes(rechercheString)
          )
      );
      creaCarte(trie);
    }

    // AFFICHE CARTES
    creaCarte(resultas);

    // AFFICHE FILTRE INGREDIENTS,APPAREIL,USTENSILES
    apprareilFiltreAppareil(resultas);
    apprareilFiltreIngredient(resultas);
    apprareilFiltreUstensiles(resultas);
    
    // TAGS DE RECHERCHE
    Tags();

    const test = document.querySelectorAll("#croix");
    console.log(test.firstElementChild);

  })
 
    //FIN
    .catch((err) => {
      console.log(err);
    });
  

  
