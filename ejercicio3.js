/* 
Paco no estudió mucho para sus últimos exámenes, quiere saber cuántos exámenes tendrá que realizar de nuevo,
 el programa recibirá la cantidad de exámenes y un arreglo de calificaciones para poder calcular el resultado
*/

function reprobados (listaCals){
    let totalRep = 0;
    for(i=0; i<listaCals.length; i++){
        if (listaCals[i] < 6){
            totalRep++;
        }
    }
    return totalRep;
}

let cals = [10, 4, 5, 7, 8, 6, 5];
console.log("Total de examenes a repetir: " + reprobados(cals));