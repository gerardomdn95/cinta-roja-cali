// GET

class Pokemon {
    constructor(id, name, height, weight, sprite) {
        this.id = id,
            this.name = name.toUpperCase();
        this.height = height + 'cm',
            this.weight = weight + 'kg',
            this.sprite = sprite
    }
}

const getPokemon = name => {
    return new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then((response) => {
                if(response.status === 200) {
                    response.json()
                    .then((poke) => {
                        const pokemon = new Pokemon(poke.id, poke.name, poke.height, poke.weight, poke.sprites.front_default);
                        resolve(pokemon);
                    })
                    .catch(err => reject(err))   
                } else {
                    reject(`HTTP Status ${response.status}`)
                }
            })
            .catch((error) => console.log(error));
    })
}

getPokemon('perro')
    .then((data => console.log(data)))
    .catch(err => console.error(err));