//arrays are muta
let arr = [1, 2, 4, 5 ,7]
//Index    0, 1, 2, 3, 4 

arr[0] = 5666;
 console.log(arr, typeof arr);
 console.log(arr.length)
 console.log(arr[0])
 console.log(arr[1])
 console.log(arr[2])
 console.log(arr[3])
 console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))
 

let a1 = [8, 7, 6]
let a2 = [7, 8, 9]
let a3 = [1, 2, 3]

console.log(a1.concat(a2, a3))
console.log(a1.sort())