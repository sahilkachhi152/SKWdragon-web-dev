// exercise 9 solution
/* 

Create a faulty  calculator using JavaScript 

This faulty calculator does following: 
1. It takes two numbers as input from the user 
2. It performs wrong operation as follows:
+ ---> _
* ---> +
- ---> /
/ ---> *

It performs wrong operation 10% of the times 

*/

let random = Math.random()
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",

}
console.log(random)
if (random > 0.1) {
    //perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`The result is ${a} ${c} ${b}`)
}

else{
    //performing wrong calculation 
    c = obj[c]
      alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}