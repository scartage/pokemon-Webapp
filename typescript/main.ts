var data = {};
const display = document.getElementById("nombre");

async function callAPI(){
    try{   
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        data = await res.json();
        console.log(data.results);
        
        const pokemonContainer = document.getElementById('pokemonContainer');

        data.results.forEach((pokemon) => {
            const column = document.createElement('div');
            column.className = 'column';

            const boxCard = document.createElement('div');
            boxCard.className = 'box card';

            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';

            const nameElement = document.createElement('p');
            nameElement.textContent = pokemon.name;

            const contentElement = document.createElement('div');
            contentElement.className = 'content';
            contentElement.textContent = 'Lorem ipsum dolor sit amet';

            cardContent.appendChild(nameElement);
            boxCard.appendChild(cardContent);
            boxCard.appendChild(contentElement);
            column.appendChild(boxCard);

            pokemonContainer.appendChild(column);

            console.log(pokemon.name);
        });
        }catch(error){
        console.error(error);
    }
 }


 callAPI();