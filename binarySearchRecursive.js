/**

 * 1. Crear una funcion para recibir un arreglo A[] y un objetivo a buscar (target) con parametros establecidos de inicio
 *   igual a 0 y fin igual a la longitud del arreglo menos uno
 * 2. Definir un caso base con un Condicional de inicio mayor a fin (que este vacio el arreglo) Retorna menos uno
 * 3. Definir una variable 'mitad' con el valor de la funcion "Math.flor" de la división entre 2 de la suma de inicio y fin 
 * 4. Definir un condicional de el arreglo en la posicion mitad igual en valor y tipo a el target, se retorna mitad si es verdadero
 * 5. Se anida un condicional de arreglo en la posicion de mitad mayor a target se Retorna la funcion misma con los valores (array, target, inicio, mitad -1)
 * 6. Se anida un condicional de arreglo se Retorna la funcion misma con valores (array, target, mitad + 1, fin)
 * 
 * busquedaBinariaRecursiva(array, target,Inicio <- 0, fin <- array.length - 1)
 * // input: an ordered array , target, values def inicio <-0, fin <- array.length -1
 * // output: the number of the target in the array (If it is on it)
 * IF inicio > fin THEN:
 *  RETURN -1
 *  mitad <- Math.floor ((inicio + fin) / 2)
 * IF array[mitad] = target then:
 *   RETURN mitad
 * ELSE IF array[mitad] > target THEN
 *      RETURN busquedaBinariaRecursiva(array, target, inicio, mitad -1)
 * ELSE THEN:
 *      RETURN busquedaBinariaRecursiva(array,target,mitad + 1, fin)

 */

function busquedaBinariaRecursiva (array, target,inicio = 0, fin = array.length -1){

    if(inicio > fin){
        return -1; 
    }

    const mitad = Math.floor((inicio + fin) / 2);

    if (array[mitad]=== target){
        return mitad;

    }else if (array[mitad] > target){
        return busquedaBinariaRecursiva(array, target, inicio, mitad -1);
    }else {
        return busquedaBinariaRecursiva(array,target,mitad + 1, fin);

    }

}

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,16];
const t = 9;

if (busquedaBinariaRecursiva(numeros,t) !== -1){
    console.log(`El elemento ${t} se encuentra en la posición ${ busquedaBinariaRecursiva(numeros, t)}.`);
} else {
    console.log(`El elemento ${t} no se encuentra en el arreglo.`);
}
