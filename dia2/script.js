// console.log(1);

// // Antigua
// var age = 5;

// // Puede cambia
// let name = 'Gerardo';

// // Constantes
// const pi = 3.1416;

// // Antigua
// // function getAge(x) {
// //     console.log('La edad que escribiste es ' + x);
// // }

// // Arrow Functions
// const getAge = x => 'La edad que escribiste es ' + x;

// console.log(getAge(5));

// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
// }, 5000);
// console.log(4);

const operacion = (tipo, x, y) => tipo(x, y);

const suma = (x, y) => x + y;

const resta = (x, y) => x - y;

const mult = (x, y) => x * y;

const mayorEdad = (edad, menor, mayor) => {
    return edad >= 18 ? edad > 99 ? edad <= 75 ? '🚀': '☠️' : mayor() : menor();
    // Operación
    // if(edad >= 18) {
    //     return mayor();
    // } else {
    //     return menor();
    // }
}

const menorDeEdad = () => 'Eres menor de edad';
const mayorDeEdad = () => 'Eres mayor de edad';

console.log(mayorEdad(24, menorDeEdad, mayorDeEdad));

console.log(operacion(suma, 5, 5));
console.log(operacion(resta, 5, 5));
console.log(operacion(mult, 5, 5));

// Promesa
// Pendiente (Veremos)
// Se cumplió la promesa (celular)
// No se cumple y razón

const birthday = (dinero, amor, rencores) => {
    return new Promise((resolve, reject) => {
        if(dinero && amor && !rencores) {
            resolve('📱');
        } else {
            reject('🙅‍♀️ ❌ 🤷');
        }
    });
}

birthday(true, true, false)
    .then((data) => console.log(data))
    .catch((razon) => console.log(razon));