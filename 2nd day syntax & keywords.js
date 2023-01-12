
var x; //redecalare a varriable 
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
console.log(z)
// JavaScript Values
// The JavaScript syntax defines two types of values:

// Fixed values
// Variable values
// Fixed values are called Literals.

// Variable values are called Variables.

// JavaScript Literals
// The two most important syntax rules for fixed values are:

// 1. Numbers are written with or without decimals:

num_1=10.50;


num_2=1001;
// 2. Strings are text, written within double or single quotes:

let x="John Doe";

let x='John Doe';

// keywords in javascript

//JavaScript keywords are used to identify actions to be performed.

const a = 'hello';
// Here, const is a keyword that denotes that a is a constant.

// The let keyword tells the browser to create variables:
// let does not allow to redeclare variables.	 
let x = 5 + 6;
let Y = x* 10;

// The var keyword also tells the browser to create variables
// var is function scoped.
// var allows to redeclare variables.
var A = 5; // 5
var A = 3; // 3

// the variable declare inside a function can be  with var can be used anywhere inside a function  
function greet() {
    // variable a can be used here
    var a = 'hello';
    console.log(a);
}
// variable a cannot be used here

greet(); // hello
