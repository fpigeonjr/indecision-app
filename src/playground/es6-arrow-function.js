const square = function(x) {
  return x * x
}

const squareTwo = x => {
  return x * x
}

const sqaureArrow = x => x * x

console.log(square(10))
console.log(squareTwo(2))
console.log(sqaureArrow(9))

// challenge
// getFirstName
// create reg arrow func
// create arrow using short hand syntax


const getFirstName = (fullName) => {
  return fullName.split(" ")[0]
}

const getFirstNameShort = (fullName) => fullName.split(" ")[0]

console.log(getFirstName("Frank Pigeon"))

console.log(getFirstNameShort("Emma Stone"))