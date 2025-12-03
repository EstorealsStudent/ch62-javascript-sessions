// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento
const techStack = ["HTML", "CSS", "JavaScript"];

// Acceder al primer elemento
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"

// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"
// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento:  ${ techStack[1] }` ); // "CSS"
// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al último elemento:  ${ techStack[ techStack.length - 1 ] }` ); // "JavaScript"

/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];
// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]
// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]

//Metodo Splice

const colores = ["Rojo", "Verde", "Azul", "Amarillo"];

//agregar2 elementos en el indice 2, sin eliminar otros elementos
colores.splice(2, 0, "Naranja", "Morado");
console.log("Splice Agregar:", colores); // ["Rojo", "Verde", "Naranja", "Morado", "Azul", "Amarillo"] 

// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

const guestList = ["Aimep3", "Ternura"];
guestList.push("Kymberly");
guestList.unshift("Karina");
guestList.splice(1, 1, "Paolitasuarez");
console.log("Lista de invitados final:", guestList); // ["Karina", "Paolitasuarez", "Ternura", "Kymberly"]

/*   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/
const taskList = [];
taskList.push("Lavar los platos");
taskList.push("Hacer la cama");
taskList.push("Estudiar JavaScript");
console.log("Lista completa de tareas:", taskList);

const firstTask = taskList.shift();
console.log(`Atendiendo la tarea: ${firstTask}`);

taskList.unshift("Pagar las facturas (URGENTE)");
console.log("Lista actualizada de tareas:", taskList);

const urgentTask = taskList.shift();
console.log(`Atendiendo la tarea: ${urgentTask}`);
console.log("Tareas restantes:", taskList);

