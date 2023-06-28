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
function callAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://pokeapi.co/api/v2/pokemon');
            data = yield res.json();
            console.log(data.results);
            data.results.forEach((pokemon) => {
                display.textContent = pokemon.name;
                console.log(pokemon.name);
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
callAPI();
