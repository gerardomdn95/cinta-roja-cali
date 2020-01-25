const request = require('request');
const rp = require('request-promise');

const getPokemon = (name) => {
    return new Promise((resolve, reject) => {
        request(`https://pokeapi.co/api/v2/pokemon/${name}/`, ((error, response, body) => {
            if (response.statusCode === 200) {
                resolve(body);
            } else {
                reject('Error');
            }
        }));
    });
};

getPokemon('pikachu')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
getPokemon('solgaleo')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
getPokemon('lucario')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
