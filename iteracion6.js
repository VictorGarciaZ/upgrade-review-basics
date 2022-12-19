/**Iteración #6: Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante.

Sugerencia de array:*/

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap (array, posicion1, posicion2){
    const primero = array[posicion1];
    const segundo = array[posicion2];

    array.splice (posicion1, 1, segundo);
    array.splice(posicion2, 1, primero)

    return array 
}

console.log(swap(array, 0, 3));


////
function swap(array, posicion1, posicion2)[
   
    const primero = array [posicion1];

    array[posicion1] = array[posicion2]
    array[posicion2] = primero;
    
    return array
]
