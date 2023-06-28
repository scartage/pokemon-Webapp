var data = {};
const display = document.getElementById("nombre");

async function callAPI(){
    try{   
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        data = await res.json();
        console.log(data.results);
        data.results.forEach((pokemon) => {
            display.textContent = pokemon.name
            console.log(pokemon.name);
         });
        }catch(error){
        console.error(error);
    }
 }


 callAPI();