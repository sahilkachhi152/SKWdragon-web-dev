// console.log("Hey Sahil you are nice ")
// console.log("Hey Sahil you are good ")
// console.log("Hey Sahil your tshirt is nice ")
// console.log("Hey Sahil your course is good too")


function nice(name) {
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are good") 
    console.log("hey " + name + " your tshirt is nice")
    console.log("hey " + name + " your course is good too")
}

function sum(a, b, c = 3) {
    // console.log(a + b)
    return a + b + c
}

result1 = sum(4,25)
result2 = sum(4, 15)
result3 = sum(4, 5)

console.log("The sum of these numbers is: ", result1 )
console.log("The sum of these numbers is: ", result2 )
console.log("The sum of these numbers is: ", result3  )


const func1 = (x)=> {
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);