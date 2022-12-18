/*Dado el siguiente javascript usa forof y forin para 
hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

//for of (para arrays) y for in (es para objetos)
//media de volumenes - de los sonidos favoritos - dentro de cada usuario

//creamos variable contador para contar cuantos volumenes hay
let contador = 0;
//creamos variable sum para sumar todos los volumenes Y obtener un total
let sum = 0;

//creamos forof para obtener cada user de nuestro array users
for (const user of users){
    //creamos forin para acceder a cada clave de cada sonido (waves, wind, firecamps)
    for (const key in user.favoritesSounds) {
    //creamos una variable volumen para guardar cada uno de los volumenes, gracias a nuestra key utilizando user.favoriteSounds[key].volume (50,60,80,...)
       let volumen = user.favoritesSounds[key].volume;
       //sumamos todos los volumenes
        sum += volumen;
        //cuenta cuantos volumenes hay
        contador ++;

        }
    }
    //sum divide a contador para hallar la media
console.log(sum/contador);