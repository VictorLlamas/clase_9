/* 
A Daniel le acaban de mandar una lista con sus calificaciones, quiere saber si su promedio es 
suficiente para tener una beca este año, el promedio mínimo que necesita es 8, el programa 
recibirá la cantidad de calificaciones y un arreglo de calificaciones para poder calcular el resultado
*/

function promedio(listaCals){
    let sumaDeCals = 0;
    let prom = 0;
    for (let i=0; i<listaCals.length; i++){
        sumaDeCals += listaCals[i];
    }
    prom = sumaDeCals / listaCals.length;
    return prom;
}

let calificaciones = [10,8,7,9,9,10];
let prom = promedio(calificaciones).toFixed(2); 
console.log("El promedio de Daniel es: " + prom)
if( prom > 8 ){
    console.log("Daniel puede aplicar para la beca");
}else{
    console.log("Daniel es un burro y ya se la pelo con la beca");
}