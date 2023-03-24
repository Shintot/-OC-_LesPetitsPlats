function Tags(resultas) {
  const filtreTag = document.querySelector(".research__filters");
  const ingrclic = document.querySelectorAll(".casparcas");
  const appclic = document.querySelectorAll(".casparcasappareil");
  const ustclic = document.querySelectorAll(".casparcasustensils");

  let valeur = []; // tableau pour stocker les valeurs des tags
  
  
  // APPAREILS  ----------------------------------------------------------------------------------
  appclic.forEach((element) => {
    element.addEventListener("click", appareilsclic);
    element.addEventListener("click", filtrer);

    function filtrer() {
      resulta.innerHTML = "";

      const valeurTag = element.innerText;
      const objet = resultas;
      valeur.push(valeurTag); // stocker la valeur du tag

      const trie = objet.filter((el) =>
        el.appliance.toLowerCase().includes(valeurTag.toLowerCase())
      );
      creaCarte(trie);
    }

    function appareilsclic() {
      const tagapp = document.createElement("div");
      tagapp.setAttribute("class", "tagapp");
      tagapp.innerHTML = `<div class="flexapp">
                       <p class="tagtext">${element.innerHTML}</p>
                       <span class="croix">x</span>
                       </div>`;
      filtreTag.appendChild(tagapp);

      const tagRecup = tagapp.querySelector("span");
      tagRecup.addEventListener("click", close);

      function close() {
        const contenantTag = tagapp.querySelector("div");
        contenantTag.style.display = "none";

        // Supprimer la valeur du tag du tableau "valeur"
        const valeurIndex = valeur.indexOf(element.innerText);
        if (valeurIndex !== -1) {
          valeur.splice(valeurIndex, 1);
        }

        // Filtrer les résultats avec les tags restants
        resulta.innerHTML = "";
        const objet = resultas;
        const trie = objet.filter((el) => {
          return valeur.every((tag) =>
            el.appliance.toLowerCase().includes(tag.toLowerCase())
          );
        });
        creaCarte(trie);
      }
    }
  });

  // USTENSILES ----------------------------------------------------------------------------------
  ustclic.forEach((element) => {
    element.addEventListener("click", ustensilsappareilsclic);
    element.addEventListener("click", filtrer);

    function filtrer() {
      resulta.innerHTML = "";

      const valeurTag = element.innerText;
      const objet = resultas;
      valeur.push(valeurTag); // stocker la valeur du tag

      const trie = objet.filter((el) =>
        el.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(valeurTag.toLowerCase())
        )
      );
      creaCarte(trie);
    }

    function ustensilsappareilsclic() {
      const tagust = document.createElement("div");
      tagust.setAttribute("class", "tagust");
      tagust.innerHTML = `<div class="flexust">
                       <p class="tagtext">${element.innerHTML}</p>
                       <span class="croix">x</span>
                       </div>`;
      filtreTag.appendChild(tagust);

      const tagRecup = tagust.querySelector("span");
      tagRecup.addEventListener("click", close);

      function close() {
        const contenantTag = tagust.querySelector("div");
        contenantTag.style.display = "none";

        // Supprimer la valeur du tag du tableau "valeur"
        const valeurIndex = valeur.indexOf(element.innerText);
        if (valeurIndex !== -1) {
          valeur.splice(valeurIndex, 1);
        }

        const tagsIngredient = Array.from(ingrclic)
          .filter((element) => valeur.includes(element.innerText))
          .map((element) => element.innerText);

        const tagsUstensils = Array.from(ustclic)
          .filter((element) => valeur.includes(element.innerText))
          .map((element) => element.innerText);

        const trie = resultas.filter(
          (el) =>
            tagsIngredient.every((tag) =>
              el.ingredients.some((ingr) =>
                ingr.ingredient.toLowerCase().includes(tag.toLowerCase())
              )
            ) &&
            tagsUstensils.every((tag) =>
              el.ustensils.some((ust) =>
                ust.toLowerCase().includes(tag.toLowerCase())
              )
            )
        );
        creaCarte(trie);
      }
    }
  });

  // INGREDIENT ----------------------------------------------------------------------------------
  ingrclic.forEach((element) => {
    element.addEventListener("click", ingredientclic);
    element.addEventListener("click", filtrer);

    function filtrer() {
     resulta.innerHTML = "";

     const valeurTag = element.innerText;
     const objet = resultas;
     valeur.push(valeurTag); // stocker la valeur du tag

     
    }

    function ingredientclic() {
      const tag = document.createElement("div");
      tag.setAttribute("class", "tagingr");
      tag.innerHTML = `<div class="flexingr">
                      <p class="tagtext"  id="${element.innerText}">${element.innerText}</p>
                       <span class="croix">x</span>
                       </div>`;
      filtreTag.appendChild(tag);

      const tagRecup = tag.querySelector("span");
      tagRecup.addEventListener("click", close);
      function close() {
        const contenantTag = tag.querySelector("div");
        contenantTag.style.display = "none";
        resulta.innerHTML = "";

        // Supprimer la valeur du tag sélectionné de la variable 'valeur'
        const tagValue = element.innerText;
        const index = valeur.indexOf(tagValue);
        if (index > -1) {
          valeur.splice(index, 1);
        }

        // Filtrer les résultats en fonction des tags restants
        const objet = resultas;
        const trie = objet.filter((el) =>
          valeur.every((tag) =>
            el.ingredients.some((ingredient) =>
              ingredient.ingredient.includes(tag)
            )
          )
        );
        creaCarte(trie);
      }
    }
  });
}
