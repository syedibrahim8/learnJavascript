// Type Conversions
// Ex : let a = "10" ==> string
// convert 10 of string to 10 of number

/*
There are 2 types of conversions in JS
1.Implicit Conversion 
2.Explicit Conversion
*/
/*

1.Implicit Conversion  : ==> Automatic Conversion

 // Anything (any datatype) to string
*/
let result = 2 + "";
console.log(result);

let a = 1 + "hello";
console.log(a);

let b = true + "hello";
console.log(b);

let c = 'hello' + 'ya'
console.log(c);

let d = null + 'hello';
console.log(d);

let e = undefined + 'hello'
console.log(e);

// Anything to number use only ( -, /, *)

let f;
f = "5" - "3";
console.log(f);
f = "5" * 3;
console.log(f);
f = 10 / '2';
console.log(f);
f = 2 - "hi";
console.log(f); //NaN ==> Not an Number

// Anything to Boolean
// false ==> 0
// true ==> 1

let a1 = "5" - false;
let a2 = 2 + true;
let a3 = "2" + true;
console.log(a1, a2, a3);

// Null to Number
// null = 0

let b1 = 4 + null;
console.log(b1);

// undefined to null

let c1 = undefined + 5;
let c2 = true + undefined;
console.log(c1, c2);


// Explicit Conversion
/*
| Original Value     | Converted to Number | Converted to String     | Converted to Boolean |
|--------------------|--------------------|--------------------------|----------------------|
| false              | 0                  | "false"                  | false                |
| true               | 1                  | "true"                   | true                 |
| 0                  | 0                  | "0"                      | false                |
| 1                  | 1                  | "1"                      | true                 |
| "0"                | 0                  | "0"                      | true                 |
| "1"                | 1                  | "1"                      | true                 |
| NaN                | NaN                | "NaN"                    | false                |
| Infinity           | Infinity           | "Infinity"               | true                 |
| -Infinity          | -Infinity          | "-Infinity"              | true                 |
| ""                 | 0                  | ""                       | false                |
| "20"               | 20                 | "20"                     | true                 |
| "twenty"           | NaN                | "twenty"                 | true                 |
| []                 | 0                  | ""                       | true                 |
| [20]               | 20                 | "20"                     | true                 |
| [10,20]            | NaN                | "10,20"                  | true                 |
| ["twenty"]         | NaN                | "twenty"                 | true                 |
| ["ten","twenty"]   | NaN                | "ten,twenty"             | true                 |
| function(){}       | NaN                | "function(){}"           | true                 |
| {}                 | NaN                | "[object Object]"        | true                 |
| null               | 0                  | "null"                   | false                |
| undefined          | NaN                | "undefined"              | false                |
*/

//1. Using number() method 

let a = Number("10");
console.log(a);
a =  Number(true);
console.log(a);
a = Number(false);
console.log(a);
a = Number(null);
console.log(a);
a = Number('');
console.log(a);
a = Number(' ');
console.log(a);
a = Number("hello");
console.log(a);
a = Number(undefined);
console.log(a);

// String method 
let b;
b = String(234);
console.log(b);
b = String(true);
console.log(b);
b = String(null);
console.log(b);
b = String(undefined);
console.log(b);

// Boolean

let c;
c = Boolean(undefined);
console.log(c);
c = Boolean("hi");
console.log(c);
c = Boolean(234);
console.log(c);
c = Boolean(NaN);
console.log(c);
