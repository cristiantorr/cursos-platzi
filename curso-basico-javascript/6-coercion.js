
/**
 * Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
 * 
 */

// La forma de convertir un type a otro: Coercion 

// === Implicit Coercion === 

var a = 20;

var b = a + ""; 

// más ejemplos

var a = [1,2];
var b = [3,4]; 

a + b // En este ejemplo, por la concatenación, ambos arrays son obligados a convertirse en strings, y luego se juntan.

// === Explicit coercion ===

var c = String( a );

var d = Number( c );

// Otro ejemplo

var a = 30; 
var b = a.toString();

var c = "100"; 
var d = +c; // Unary operator '+' de forma explícita convierte a número

// más ejemplos

var num1 = "3.14"; 
var num2 = 5 + +num1; 

/*  

Number + Number = Number
Number + String = String
String + Number = String
String + String = String

*/


// Todos las propiedades de valor, son strings 

