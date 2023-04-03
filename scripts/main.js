
//API
fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    //LE JSON
    const resultas = data.recipes;

        rechercheBar.addEventListener("input", filtre);
        function filtre(e) {
          //VIDE LA LISTE
          resulta.innerHTML = "";
          const rechercheString = e.target.value
            .toLowerCase()
            .replace(/\s/g, "");

          const trie = [];

          for (const el of resultas) {
            if (
              el.name
                .toLowerCase()
                .replace(/\s/g, "")
                .includes(rechercheString) ||
              el.appliance.toLowerCase().includes(rechercheString) ||
              el.ingredients.some((ingredient) =>
                ingredient.ingredient
                  .toLowerCase()
                  .replace(/\s/g, "")
                  .includes(rechercheString)
              ) ||
              el.ustensils.some((ustensil) =>
                ustensil
                  .toLowerCase()
                  .replace(/\s/g, "")
                  .includes(rechercheString)
              )
            ) {
              trie.push(el);
            }
          }

          creaCarte(trie);
        }

    // AFFICHE CARTES
    creaCarte(resultas);

    // AFFICHE FILTRE INGREDIENTS,APPAREIL,USTENSILES
    apprareilFiltreAppareil(resultas);
    apprareilFiltreIngredient(resultas);
    apprareilFiltreUstensiles(resultas);

    // TAGS DE RECHERCHE
    Tags(resultas);
  })
 
    //FIN
    .catch((err) => {
      console.log(err);
    });
  

  
