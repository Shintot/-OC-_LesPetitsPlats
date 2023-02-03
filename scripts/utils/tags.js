function Tags() {
    
    const filtreTag = document.querySelector(".research__filters");
    const ingrclic = document.querySelectorAll(".casparcas");
    const appclic = document.querySelectorAll(".casparcasappareil");
    const ustclic = document.querySelectorAll(".casparcasustensils");

    appclic.forEach((element) => {
      element.addEventListener("click", appareilsclic);

      function appareilsclic() {
        const tagapp = document.createElement("div");
        tagapp.setAttribute("class", "tagapp");
        tagapp.innerHTML = `<div class="flex">
                       <p class="tagtext">${element.innerHTML}</p>
                       <span class="croix">x</span>
                       </div>`;
        filtreTag.appendChild(tagapp);
      }
    });

    ustclic.forEach((element) => {
      element.addEventListener("click", ustensilsappareilsclic);

      function ustensilsappareilsclic() {
        const tagust = document.createElement("div");
        tagust.setAttribute("class", "tagust");
        tagust.innerHTML = `<div class="flex">
                       <p class="tagtext">${element.innerHTML}</p>
                       <span class="croix">x</span>
                       </div>`;
        filtreTag.appendChild(tagust);
      }
    });

    ingrclic.forEach((element) => {
      element.addEventListener("click", ingredientclic);

      function ingredientclic() {
        const tag = document.createElement("div");
        tag.setAttribute("class", "tagingr");
        tag.innerHTML = `<div class="flex">
                       <p class="tagtext">${element.innerHTML}</p>
                       <span class="croix" id="croix">x</span>
                       </div>`;
        filtreTag.appendChild(tag);
      }
    });
}