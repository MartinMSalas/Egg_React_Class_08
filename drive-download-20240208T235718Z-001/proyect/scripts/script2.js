const numbers = [1, 2, 3, 4, 5];
const positives = numbers.filter(number => number >= 0);
console.log(positives); // [1, 2, 3, 4, 5]
console.log(numbers); // [1, 2, 3, 4, 5]

const personas = [
    { nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { nombre: "Juan", edad: 16, ciudad: "Barcelona" },
    { nombre: "Luis", edad: 17, ciudad: "Madrid" },
    { nombre: "Sofía", edad: 17, ciudad: "Valencia" },
    { nombre: "Carlos", edad: 22, ciudad: "Madrid" }
];

const mayoresMadrid = personas.filter(persona => { 
    // Tener en    cuenta que `persona` es un objeto.
    // Condiciones para filtrar
    const esMayorDeEdad = persona.edad > 18;
    const esDeMadrid = persona.ciudad === "Madrid";
    
    // Retornar true si cumple ambas condiciones
    return esMayorDeEdad && esDeMadrid;
    });
    
console.log(mayoresMadrid);
    
    /*
    [
    { nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { nombre: "Carlos", edad: 22, ciudad: "Madrid" }
    ]
    */
// Map

const numbers2 = [1, 2, 3, 4, 5];
const doubled = numbers2.map(number => {
return number * 2 // Retorna una expresión.
});
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]

const personas2 = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 16 },
    { nombre: "Luis", edad: 30 }
];

const nombres = personas2.map(persona => persona.nombre) //
// `return` implícito.

console.log(nombres) // ["Ana", "Juan", "Luis"]

const personas3 = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 16 },
    { nombre: "Luis", edad: 30 }
];

const personasConMayoríaDeEdad = personas3.map(persona => {
return {
...persona,
esMayorDeEdad: persona.edad >= 18
};
});

console.log(personasConMayoríaDeEdad);

/*
[
{ nombre: "Ana", edad: 25, esMayorDeEdad: true },
{ nombre: "Juan", edad: 16, esMayorDeEdad: false },
{ nombre: "Luis", edad: 30, esMayorDeEdad: true }
]
*/