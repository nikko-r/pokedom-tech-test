import pokemonArray from "./data/pokemon.js"

const HTMLbody = document.querySelector("body")
const cardContainer = document.querySelector(".card-container")

//Adding a search box without modifying the html
HTMLbody.insertAdjacentHTML("afterbegin", `
<input id="search-box" type=input name="search" value="Search for a Pokemon">
<style>position: absolute; right: 0;</style>
`) //Attempted to style the search box to be on the right

const searchBox = document.querySelector("#search-box") //Needs to be loaded after its added

//Function for getting pokemon entry data
const modifyPokemonEntries = (pokemonEntry) => {
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

//Loads all pokemon data on load
pokemonArray.forEach(pokemonEntry => {
    modifyPokemonEntries(pokemonEntry)
})

//Function for filtering pokemon by name
const filterPokemonByNameEntries = () => {
    cardContainer.innerHTML = ``
    pokemonArray.forEach(pokemonEntry => {
        if (pokemonEntry.name.includes(searchBox.value)) {
            modifyPokemonEntries(pokemonEntry)
        }
    })
}

//Event listener for pokemon name filtering
searchBox.addEventListener("change", filterPokemonByNameEntries)