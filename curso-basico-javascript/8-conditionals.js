// Esto nos ayudará para poder hacer decisiones.

var esUsuario = true; 

if(esUsuario) {  // con el if validamos que la condición sea true
    console.log('Tiene acceso al contenido'); 
}

// Presentamos el else 

var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de cómo haríamos una validación

var edad = 18; 
var accion; 

if(edad >= 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de cómo utilizaremos el else if

var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion);



/* ================================================================ */ 

// Operador ternario 

var numero = 1; 
var resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

/* condition ? true : false; 
 */
var numero = 1; 
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';

console.log(resultado);


// ==============================


// Ejercicio, reaizar un piedra, papel o tijeras, utilizando condicionales, una funcion que reciba el parametro con el que vamos a jugar, y me regrese si gane o perdí. 

/*  

Variables piedra, papel y tiejeras 
una funcion que utilice cindicionales para validar si el parametro que le estoy pasando gana o pierde. 

y que la funcion al final me regrese el resultado de si gané, o  perdí. 


*/ 

//maquina papel usuario piedra
//piedra gana a tijera
//papel gana a piedra
//tijera gana a papel
/* var options = ['Piedra', 'Papel', 'Tijera'];
var choiceMachine;
var verifyItem;
function game(user) {
     choiceMachine =  options[Math.floor(Math.random()*options.length)];
     verifyItem =  options.indexOf(user);

    if( verifyItem == -1 ) {
        console.log('Lo siento el valor ingresado no es posible analizarlo.');
        return;
    }

    if( user === choiceMachine) {
        console.log('Empate vuelve a recargar.');
        return;
    }

    if( user != choiceMachine ) {
        if( (user === 'Piedra' && choiceMachine === 'Tijera') || (user === 'Papel' && choiceMachine === 'Piedra') ||  (user === 'Tijera' && choiceMachine === 'Papel') ) {
            console.log('El usuario gano.');
        }else{
            console.log('La maquina gano.');
        }
    }

}

game('Papel');
 */


//maquina papel usuario piedra
//piedra gana a tijera
//papel gana a piedra
//tijera gana a papel
var options = ['Piedra', 'Papel', 'Tijera'];
var choiceMachine;
var verifyItem;

function game(user) {
     choiceMachine =  options[Math.floor(Math.random()*options.length)];
     verifyItem =  options.indexOf(user);
     
   switch (true) {
    case verifyItem == -1:
        console.log('Lo siento el valor ingresado no es posible analizarlo.');
    break;
    case user === choiceMachine:
        console.log('Empate vuelve a recargar.');
    break;
    case (user === 'Piedra' && choiceMachine === 'Tijera') || (user === 'Papel' && choiceMachine === 'Piedra') ||  (user === 'Tijera' && choiceMachine === 'Papel'):
        console.log('El usuario gano.');
    break;
    default:
        console.log('La maquina gano.');
    break;
   }

}

game('Piedra');