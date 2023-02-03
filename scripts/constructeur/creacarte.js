//CREATION DE CARTES

function creaCarte(cartes) {

  for (let resuls of cartes) {
    //DESTRUCTURE
    const { name, time, description, ingredients, appliance } = resuls;

    //DIV CONTENANT + CSS
    const recetteList = document.createElement("div");
    recetteList.setAttribute("class", "recipe__card");
    resulta.appendChild(recetteList);

    // IMAGE
    const placeHolder = document.createElement("div");
    placeHolder.setAttribute("class", "recipe__card__placeholder");
    recetteList.appendChild(placeHolder);

    // SECTION
    const section = document.createElement("section");
    section.setAttribute("class", "recipe__card__section");
    recetteList.appendChild(section);

    // HEADER
    const header = document.createElement("header");
    header.setAttribute("class", "recipe__card__header");
    section.appendChild(header);

    // TITRE
    const hUn = document.createElement("h2");
    hUn.setAttribute("class", "recipe__card__header__title");
    hUn.innerText = name;
    header.appendChild(hUn);

    // TEMPS
    const hDeux = document.createElement("h2");
    hDeux.setAttribute("class", "recipe__card__header__time");
    hDeux.innerHTML = `${time}/⏱`;
    header.appendChild(hDeux);

    // ASIDE
    const aside = document.createElement("aside");
    aside.setAttribute("class", "recipe__card__aside");
    section.appendChild(aside);

    // LISTE D'INGREDIENTS
    const ul = document.createElement("ul");
    ul.setAttribute("class", "recipe__card__list");
    aside.appendChild(ul);

    /*[...new Set(ingredients)].forEach((element) => {
      const { ingredient, quantity, unit } = element;
      console.log(unit)
      const li = document.createElement("li");
      li.setAttribute("class", "recipe__card__list__item");
      li.innerHTML = `<strong>${ingredient}</strong> ${quantity}  ${unit}`;
      ul.appendChild(li);
    });*/

    for (let ingre of ingredients) {
      const { ingredient, quantity, unit } = ingre;
      
      const li = document.createElement("li");
      li.setAttribute("class", "recipe__card__list__item");
      li.innerHTML = `<strong>${ingredient}</strong> ${quantity?quantity:''}  ${unit?unit:''}`;
      ul.appendChild(li);
    }

    const descriptions = document.createElement("p");
    descriptions.setAttribute("class", "recipe__card__description");
    descriptions.innerText = description;
    aside.appendChild(descriptions);


  // ************************** VERSION INNERHTML ***********************************

    /*recetteList.innerHTML = `<div class="recipe__card__placeholder"></div>
					 		 <section class="recipe__card__section">
					 			<header class="recipe__card__header">
					 				<h2 class="recipe__card__header__title">${name}</h2>
					 				<h2 class="recipe__card__header__time">${time}/⏱</h2>
					 			</header>
					 			<aside class="recipe__card__aside">
					 				<ul class="recipe__card__list" id="ingredients">								
					 				</ul>
					 				<p class="recipe__card__description">${description}</p>
					 			</aside>
					 			</section>`;

    resulta.appendChild(recetteList);*/

    //console.log(ingredient)

    /*for (let ingre of ingredients) {
		
		const { ingredient, quantity, unit } = ingre;
		//console.log(quantity);
		const ul = document.querySelector(".recipe__card__list");
		
		const ingrr = document.createElement("li");
		ingrr.setAttribute("class", "recipe__card__list__item");
		ingrr.innerHTML = `<strong>${ingredient}</strong>`;
		ul.appendChild(ingrr)
	}*/
  }
}