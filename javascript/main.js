"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var data = {};
const display = document.getElementById("nombre");
/*async function callAPI(){
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        data = await res.json();
        console.log(data.results);
        makeCards();
        }catch(error){
            console.error(error);
    }
 }*/
function makingContainer(gridContainer, name, types) {
    //console.log(name, types);
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    const boxCard = document.createElement('div');
    boxCard.className = 'box card';
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    const nameElement = document.createElement('p');
    nameElement.textContent = name;
    const contentElement = document.createElement('div');
    contentElement.className = 'content';
    contentElement.textContent = types;
    cardContent.appendChild(nameElement);
    boxCard.appendChild(cardContent);
    boxCard.appendChild(contentElement);
    gridItem.appendChild(boxCard);
    gridContainer.appendChild(gridItem);
    // console.log(pokemon.name);
}
/*pokemonToShow.forEach((pokemon: any) => {
       fetch(pokemon.url)
           .then(response => response.json())
           .then(pokemonData => {
               const name: string = pokemonData.name;
               const types: string = pokemonData.types;
               console.log(`nombre: $(name), Type: $(type)`);
               makingContainer(gridContainer, name, types);
           })
           .catch(error => {
               console.log("Error al obtener la info");
           })
   });*/
function gettingAllData(pokemonToShow, gridContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const pokemon of pokemonToShow.results) {
            const response = yield fetch(pokemon.url);
            const pokemonData = yield response.json();
            const name = pokemonData.name;
            const types = pokemonData.types.map((typeData) => typeData.type.name).join(', ');
            console.log(`Nombre: ${name}, Tipo: ${types}`);
            makingContainer(gridContainer, name, types);
        }
    });
}
function displaySearch(pokemonContainer, pokemonToShow) {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    pokemonContainer.appendChild(gridContainer);
    console.log(pokemonToShow);
    //gettingAllData(pokemonToShow, gridContainer);
    pokemonToShow.forEach((pokemon) => {
        makingContainer(gridContainer, pokemon.name, pokemon.url);
    });
}
function showPokemons(pokemonToShow, flag) {
    return __awaiter(this, void 0, void 0, function* () {
        const pokemonContainer = document.getElementById('pokemonContainer');
        if (flag == true) {
            pokemonContainer.innerHTML = '';
            displaySearch(pokemonContainer, pokemonToShow);
        }
        else {
            const gridContainer = document.createElement('div');
            gridContainer.className = 'grid-container';
            pokemonContainer.appendChild(gridContainer);
            gettingAllData(pokemonToShow, gridContainer);
        }
    });
}
function checkFilter(data) {
    const input = document.querySelector('input');
    input.addEventListener('keyup', function () {
        const searchTerm = input.value.toLowerCase();
        const filteredPokemon = data.results.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
        showPokemons(filteredPokemon, true);
    });
}
function callAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://pokeapi.co/api/v2/pokemon');
            data = yield res.json();
            showPokemons(data, false);
            checkFilter(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
callAPI();
