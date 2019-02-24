var nameVar = 'Frank'
var nameVar = "Mike"
console.log(nameVar, ' name')

let nameLet = "Jen"
nameLet = 'Julie'
console.log(nameLet, 'nameLet')

const nameConst  = 'Frank'
console.log(nameConst, 'nameConst')

// block scoping
// all variables start as const
// if you need to change, set to let

const fullName = "Francis Pigeon"
let firstName

if (fullName){
  firstName =  fullName.split(' ')[0]
  console.log(firstName, ' first name')
}

console.log(firstName )