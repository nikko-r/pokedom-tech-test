import pokemonArray from "./data/pokemon.js"
console.log(pokemonArray)

const HTMLbody = document.querySelector("body")
const cardContainer = document.querySelector(".card-container")

// HTMLbody.innerHTML += `
//     <input id="search-box" type=input name="search" value="Search for a Pokemon">
//     `
HTMLbody.insertAdjacentHTML("afterbegin", `
<input id="search-box" type=input name="search" value="Search for a Pokemon">
<style>position: absolute; right: 0;</style>
`)

const searchBox = document.querySelector("#search-box") //Needs to be loaded after its added

//const modifyPokemonEntries = ()

pokemonArray.forEach(pokemonEntry => {
    let types = pokemonEntry.types.toString()
    types = types.replace(",", " & ")
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

const filterPokemonByNameEntries = () => {
    cardContainer.innerHTML = `<div class="card"></div>`
    pokemonArray.forEach(pokemonEntry => {
        if (pokemonEntry.name.includes(searchBox.value)) {
            let types = pokemonEntry.types.toString()
            types = types.replace(",", " & ")
            cardContainer.innerHTML += `
                <div class="card">
                    <img class="card__image" src="${pokemonEntry.sprite}" alt="${pokemonEntry.name}">
                    <div class="card__content">
                        <h1 class="card__heading">${pokemonEntry.name}</h1>
                        <p class="card__text">${pokemonEntry.name} (#${pokemonEntry.id}) is a ${types} type pokemon.</p>
                    </div>
                </div>
                `
        }
    })
}

searchBox.addEventListener("change", filterPokemonByNameEntries)