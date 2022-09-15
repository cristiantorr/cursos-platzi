
/**
 * const

Es una señal de que una variable no debe ser Re-Asignada.
Nos va a forzar a escribir código limpio.
Scope: bloque. Uso mas cercano de la variable.
let

La usamos para decir que una variable puede ser Re-Asignada.
Generalmente lo usamos para iterar ciclos for o cuando no nos queda otra opción.
Scope: bloque. Uso cercano de la variable.
Var

No nos dice mucho. No no da ninguna señal de cómo debería usarse las variables.

Puede representar una constante o una variable que se puede Re-Asignar.

Puede servir para usar variables dentro de un bloque o dentro de una función, lo cuál es confuso y pude traer bugs.
 * 
 * 
 */

const fruits=()=>{
    var fruit='appel';
    console.log(fruit)
}

fruits();
console.log(fruit)//'en este no podemos llegar

const anotherFunction=()=>{
    var x=1;
    var x=2;

    let y=1;
    //let y=2;//esto no lo podemos hacer let no permite redeclararse

    console.log(x)
    console.log(y)


}

anotherFunction();