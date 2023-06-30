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

function makingContainer(gridContainer, name, types){
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
    console.log(pokemon.name);
}

function displaySearch(pokemonContainer, pokemonToShow){
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    pokemonContainer.appendChild(gridContainer);
    pokemonToShow.forEach((pokemon: any) => {
        makingContainer(gridContainer, pokemon.name, hola);
    });
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

 async function showPokemons(pokemonToShow, flag: boolean){
    const pokemonContainer = document.getElementById('pokemonContainer');
    if (flag == true){
        pokemonContainer.innerHTML = '';
        console.log("limpiar html")
        displaySearch(pokemonContainer, pokemonToShow);
    }else{
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
        pokemonContainer.appendChild(gridContainer);
        pokemonToShow.results.forEach((pokemon: any) => {

            const response = await fetch(pokemon.url);
            const pokemonData = await responseesponse.json();

            const name: string = pokemonData.name;
            const types: string = pokemonData.types;
            makingContainer(gridContainer, name, types);
            console.log(`Nombre: ${name}, Tipo: ${types}`);
        });
    }
}

function checkFilter(data){
    const input = document.querySelector('input');
    input.addEventListener('input', function(){
        const searchTerm = input.value.toLowerCase();
        console.log(searchTerm);
        const filteredPokemon = data.results.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
        console.log(filteredPokemon);
        showPokemons(filteredPokemon, true);
    });
 }

async function callAPI(){
    try{   
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        data = await res.json()
        console.log(data.results);
        showPokemons(data, false);
        checkFilter(data);
        console.log("pepe");
        }catch(error){
            console.error(error);
    }
 }

 callAPI();
