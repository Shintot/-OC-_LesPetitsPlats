function Tags(resultas) {
  const filtreTag = document.querySelector(".research__filters");
  const ingrclic = document.querySelectorAll(".casparcas");
  const appclic = document.querySelectorAll(".casparcasappareil");
  const ustclic = document.querySelectorAll(".casparcasustensils");

  let valeur = []; // tableau pour stocker les valeurs des tags

  // Fonction pour filtrer les recettes en fonction des tags sélectionnés

  function filtrer() {
    resulta.innerHTML = "";

    const tags = valeur.map((tag) => tag.toLowerCase());

    const trie = resultas.filter((el) =>
      tags.every((tag) => {
        const tagInIngredients = el.ingredients.some((ingr) =>
          ingr.ingredient.toLowerCase().includes(tag)
        );
        const tagInUstensils = el.ustensils.some((ust) =>
          ust.toLowerCase().includes(tag)
        );

        const tagInAppareil = el.appliance
          .toLowerCase()
          .includes(tag);
        return tagInIngredients || tagInUstensils || tagInAppareil;
      })
    );
    creaCarte(trie);
  }

  // Ajoute un tag au tableau et filtre les recettes
  const addTag = (element, tagClass) => {
    element.addEventListener("click", () => {
      valeur.push(element.innerText);

      const tag = document.createElement("div");
      tag.setAttribute("class", tagClass);
      tag.innerHTML = `<div class="flex${tagClass}">
                         <p class="tagtext">${element.innerHTML}</p>
                         <span class="croix">x</span>
                         </div>`;

      filtreTag.appendChild(tag);

      const tagRecup = tag.querySelector("span");
      tagRecup.addEventListener("click", () => {
        const contenantTag = tag.querySelector("div");
        tag.style.display = "none";

        // Supprimer la valeur du tag du tableau "valeur"
        const valeurIndex = valeur.indexOf(element.innerText);
        if (valeurIndex !== -1) {
          valeur.splice(valeurIndex, 1);
        }
        filtrer();
      });
      filtrer();
    });
  };

  ingrclic.forEach((element) => {
    addTag(element, "tagingr");
  });

  appclic.forEach((element) => {
    addTag(element, "tagapp");
  });

  ustclic.forEach((element) => {
    addTag(element, "tagust");
  });

  filtrer();
}
