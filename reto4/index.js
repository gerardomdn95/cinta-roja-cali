const request = require('request');
const rp = require('request-promise');
const Pokemon = require('./Pokemon');

const getPokemon = (name) => {
    return rp(`https://pokeapi.co/api/v2/pokemon/${name}/`)
}

getPokemon('pikachu')
    .then((data) => {
        const poke = JSON.parse(data);
        const pokemon = new Pokemon(poke.name, poke.id, poke.type);
        console.log(pokemon);
    })
    .catch(err => console.log(err))

console.log(getPokemon('pikachu'));