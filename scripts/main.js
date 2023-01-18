

//API
fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    //LE JSON
    const resultas = data.recipes;
    //console.log(resultas)
    
// TRIE DE RECHERCHE 
    rechercheBar.addEventListener("input", filtre);
    function filtre(e) {
      //VIDE LA LISTE
      resulta.innerHTML = "";
      const rechercheString = e.target.value.toLowerCase().replace(/\s/g, "");

      const trie = resultas.filter(
        (el) =>
          el.name.toLowerCase().includes(rechercheString) ||
          el.appliance.toLowerCase().includes(rechercheString) 
          
      );

      creaCarte(trie);
    }

    // AFFICHE CARTES
    creaCarte(resultas);
    //affiche filtre appareil
    apprareilFiltreAppareil(resultas);
    apprareilFiltreIngredient(resultas);
    apprareilFiltreUstensiles(resultas);

    
  })

    
  //FIN 
  .catch((err) => {
    console.log(err);
  });
  

  
