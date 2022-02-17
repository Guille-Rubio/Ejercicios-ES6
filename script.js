
//Ejercicios
//1. Ejercicios destructuring
//Dado el siguiente objeto:

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

//Extrae la empleada Ana completa
//{"name":"Ana", "email":"Ana@gmail.com"}

//*****solucion*****
const { name: nombreAna, email: emailAna } = empleados[1];
const ana = { nombreAna, emailAna };

//Extrae el email del empleado Luis --> Luis@gmail.com

const { email: emailLuis } = empleados[0];


//Usa destructuración para intercambiar los valores de a y b
// Inicialmente
//let a = 5;
//let b = 3;
// Al final
//let a = 3;
//let b = 5;

const { a = 5, b = 3 } = { a: 3, b: 5 };


//Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

//Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
//const maximaHoy = HIGH_TEMPERATURES.today;
//const maximaManana = HIGH_TEMPERATURES.tomorrow;
//console.log(maximaHoy);
//console.log(maximaManana);

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;


//2. Ejercicios spread/rest
//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//sumEveryOther(6, 8, 2, 3, 1); //20
//sumEveryOther(11, 3, 12); //26
function sumEveryOther(...rest) {
  let total = 0;

  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return total;
}

/*
Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
*/



function addOnlyNums(...arr) {
  const arrayFiltrado = arr.filter(elemento => (typeof elemento === "number"));
  return arrayFiltrado.reduce((a, b) => (a + b));
}

addOnlyNums(1, "perro", 2, 4); //7


//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...i) => i.length;

countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9];
//combineTwoArrays(a1,a2);

//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

/*function onlyUniques(...arr) {
  for (i = 0; i < arr.length; i++) {
    const unicos = [];
    if (unicos.includes(arr[i])) {
    } else { unicos.push(arr[i]) }
  }
  unicos.reduce((a,b) => (a+b))
*/
const onlyUniques = (...a) => [...new Set(a)];



onlyUniques("gato", "pollo", "cerdo", "cerdo"); //['gato', 'pollo', 'cerdo']

onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

//Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
/*
const combineAllArrays = function([...arr]){
  return arr.reduce((a, b) => [a + b]);
}
*/
function combineAllArrays(...arr) {
  return arr.reduce((a, b) => [...a, ...b]);
}

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]

combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...a) => a.map(elemento => elemento*elemento).reduce((a, b) => a + b);
// sumAndSquare(1,2,3,4,5);
/*
function sumAndSquare(...a){
  return a.map(elemento => elemento*elemento).reduce((a, b) => a + b);
}
*/
