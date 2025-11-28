console.log("session started");

//Declara 3 variables para un perfil de usuario ficticio
let nombre = "Juan Pérez";
let edad = 28;
let correo = "Juanperezuwu@gmail.com";

//Muestra en consola un mensaje de bienvenida que incluya las 3 variables
console.log("¡Bienvenido " + nombre + "! Tienes " + edad + " años y tu correo es " + correo + ".");
console.log(`¡Bienvenido ${nombre}!\n Tienes ${edad} años y tu correo es ${correo}.`);

const gravedad = 9.81; // m/s²

console.log(typeof gravedad); // number
console.log(3.1416) // number
console.log(typeof 3.1416); // number
console.log(typeof "Hola Mundo"); // string
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof { nombre: "Ana", edad: 25 }); // object
console.log(typeof [1, 2, 3, 4, 5]); // object
console.log(typeof 3* "Pitufo trabajador"); // number
console.log(typeof NaN); // number
console.log(typeof +Infinity); 
console.log(typeof -Infinity); 
console.log(typeof 3 + "Viernes temático"); // string
console.log(4/0); 
console.log(typeof "4" * "2"); // 

console.log(parseInt("$63.32 dolares")); // imprime 63 