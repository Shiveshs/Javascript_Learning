console.log("this file contains the code to learn javascript variables");

// reserved words are not allowed in JS
//JS is case sensitive
let x = 7;
let X = 8;
//above two are different variables
//variables must start with letters, underscores, $ sign.
//variable name can not start with a number
// let 8shivesh = 8 ; this will throw a syntax error

//variable names can not be reserved keywords

// Difference between LET, VAR and CONST

var a = 45; // number
var b = "shivesh"; //string
var c = null; // null data type
var d = true; // boolean data type
var e = undefined; // undefined data type

/*
var is Global scoped while let and const are block scoped
var can be updated and redclared anywhere in it's scope while 
let cannot be redeclared but CAN BE updated in it's scope
const can neither be redeclared nor be updated in it's scope
var variables are initialised with undefined while let and const variables are not initialised
Const MUST BE initialised during declaration unlike let and var

*/
var aa = 40;
var aa = 10; // can be redclared in its own scope.
{
  //block starts
    let m = 10;
  // let m = 20; SyntaxError: Identifier 'm' has already been declared {stack: 'SyntaxError: Identifier 'm' has already been declared', message: 'Identifier 'm' has already been declared'}
}
let m = 20; // can be redeclared only after the previous block as it's scope ends in the above line

/*
Hoisting: Javscript hoisting is a term which can be defined as the process whereby the
interpreter appears to move the declaration of functions, variables and classes to the top of their scope, 
prior to execution of the code.

Let, const and classes are also hoisted up but since they don't have any default initialisation,
as compared to var, which has undefined as it's default initialisation, they throw a 
reference error : ReferenceError: Cannot access '{variable name}' before initialization

This state of let, const and class of giving a reference error and being in a state where it's hoisted up
but is not initialised is called "TEMPORAL DEAD ZONE".
*/

// console.log(age);
// let age=7; // reference error Cannot access 'age' before initialization

// console.log(car);
// const car = "Ferrari";  // reference error Cannot access 'car' before initialization

console.log(cars) // Uncaught ReferenceError ReferenceError: cars is not defined

/*
The above line proves that where car is hoisted and since it's in temporal dead zone, 
it's giving "cannot access before initialisation" error and cars is giving "not defined" 
error since no reference of this variable can be found by JS
*/