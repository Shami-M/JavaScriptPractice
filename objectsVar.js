//JavaScript objects can hold functions as properties, allowing for dynamic behavior.

// const person ={
//     name: 'John',
//     age: 30,
//     greet: function(){
//         console.log('Hello I am ' + this.name);
//     }
// }

// console.log(person.age);
// person.greet(); // Hello I am John

// //-------------------------------------------------------------------------------------
// //General function

// function sayHello(){
//     return 'Hello I am the world';
// }
// const helloMessage = sayHello();
// console.log(helloMessage);

// //-------------------------------------------------------------------------------------
// //Annonymous function

// const greet = function(name){
//     return 'Hello I am ' + name;
// }
// console.log(greet('Maya'));

// //-------------------------------------------------------------------------------------
// //'var' is function scpoed and globally scoped & can be re-declared & updated

// function varExample(){
//     var x= 1;
//     if(true){
//         var x= 2;
//         console.log(x);  // x=2
//     }
//     console.log(x);  //x=2
//     var x= 3;
//     console.log(x); //3
// }
// varExample();

//-------------------------------------------------------------------------------------
// //'let' is block scpoed and can be updated but not re-declared within the same scope

// function letExample(){
//     let x= 1;
//     if(true){
//         let x= 2;
//         console.log(x);  // x=2
//     }
//     console.log(x); //x=1
//     x= 3;
//     console.log(x);  //x=3
// }
// letExample();

// let a = 100;
// let a = 200;
// console.log(a);
// SyntaxError: Identifier 'a' has already been declared

//-------------------------------------------------------------------------------------
//'const' is block scpoed and cannot be updated or re-declared

// function constExample(){
//     const x= 1;
//     if(true){
//         const x= 2;
//         console.log(x);  // x=2
//     }
//     console.log(x);  //x=1
// }
// constExample();

// const num;
// num = 30;
// console.log(num);
//SyntaxxError: Missing initializer in const declaration

//-----------------------------------------------------------------------------------------

// Hoisting (Variable Access Before Declaration)
// • var: Hoisted but initialized as undefined.
// • let & const: Hoisted but not initialized (cannot be used before declaration).
// Example:
// console.log(a); // undefined (var is hoisted)
// var a = 10;
// console.log(b); // Error (Cannot access before initialization)
// let b = 20;
// console.log(c); // Error (Cannot access before initialization)
// const c = 30;

//-------------------------------------------------------------------------------------------

// function exampleLetConst() {
//   if (true) {
//     let message = "Hello, let!";
//     const greeting = "Hello, const!";
//   }
//   console.log(message);  //ReferenceError: message is not defined
//   console.log(greeting); //ReferenceError: message is not defined
// }
// exampleLetConst();

//-------------------------------------------------------------------------------------------
// var sum_first =50+20+' Sajeesh Sreeni ';
// var sum_second= " Sajeesh Sreeni "+50+20;
// console.log("The first varaible sum is :"+sum_first +
// "The second varaible sum is :"+sum_second)

//-------------------------------------------------------------------------------------------
// "use strict";

// var a = 10;

// function test() {
//   b = c = a = 20;
//   var a;
// }

// test();

// console.log("a:", a);
// console.log("b:", typeof b);
// console.log("c:", typeof c);

// //c is not defined

// var x; 
// console.log (typeof x);

var myDaysArray= ["Sunday","Monday","Tuesday","Wednesday"];
myDaysString= myDaysArray.join(',');
console.log(myDaysString);//output is joined string i.e.//Sunday,Monday,Tuesday,Wednesday
