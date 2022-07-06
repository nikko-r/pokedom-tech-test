import pokemonArray from "./data/pokemon.js"
console.log(pokemonArray)

const cardContainer = document.querySelector(".card-container")

pokemonArray.forEach(pokemonEntry => {
    //console.log(pokemonEntry.name)
    let types = pokemonEntry.types.toString()
    types = types.replace(",", " & ")
    console.log(types)
    cardContainer.innerHTML += `
        <div class="card">
            <img class="card__image" src="${pokemonEntry.sprite}" alt="${pokemonEntry.name}">
            <div class="card__content">
                <h1 class="card__heading">${pokemonEntry.name}</h1>
                <p class="card__text">${pokemonEntry.name} (#${pokemonEntry.id}) is a ${types} type pokemon.</p>
            </div>
        </div>
        `
})