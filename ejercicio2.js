/* 
Joel quiere ver el porcentaje de veces que falto a clases, el programa recibirá la cantidad de asistencias 
y un arreglo de asistencias para poder calcular el resultado, cada elemento esta representado por un valor 
booleano
*/

function asistencia(listaAsistencia){
    let promedio = 0;
    let asistencias = 0;
    for(i=0; i<listaAsistencia.length; i++){
        if (listaAsistencia[i]){
            asistencias ++;
        }
    }
    promedio = (asistencias / listaAsistencia.length) * 100;
    return promedio;
}

let lista = [true, true, false, true, false];

console.log("El porcentage de asistencia de Joel es: " + asistencia(lista) + "%");