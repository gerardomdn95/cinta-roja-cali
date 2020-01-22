// String
var name = 'Gerardo';
// Número
var age = 24;
// Booleanas
var raining = false;
// Arreglos
//                  0           1           2
var countries = ['Colombia', 'México', 'Costa Rica'];

// Abstracción de algo

// Objetos literales
var car = {
//  llave   valor
    color: 'Rojo',
    speed: 150,
    wheels: 'Michellin',
    engine: 'v8',

    start: function() {
        alert('Este auto va a ' + this.speed + 'km/h');
    },
    stop: function(a) {
        alert('Para, hay un ' + a + ' en el camino');
    }
}
console.log(car);

car.height = 140;
car.color= 'Verde';

console.log(car);
// console.log(car.color);
// car.start();
// car.stop('perro');

class pokemon {
    constructor(name, type, age) {
        this.name = name,
        this.type = type,
        this.age = age
    }
}

// Instancia de mi clase pokemon
var pikachu = new pokemon('Pikachu', 'Eléctrico', 20);
var bulbasaur = new pokemon('Bulbasaur', 'Planta', 3);

console.log(pikachu);
console.log(bulbasaur);

//                      a                 ===            b
// true
// false
console.log(pikachu.__proto__.constructor === bulbasaur.__proto__.constructor);

class animal {
    constructor(legs) {
        this.brain = true,
        this.legs = legs
    }
}

var human = new animal(2);

// Subclase
class pet extends animal {
    constructor(legs, fleas) {
        super(legs),
        this.fleas = fleas
    }
}

var dog = new pet(4, 2);
console.log(dog);
