// arguments object is no longer bound

const add = (a, b) => {
  // console.log(arguments)
  return a + b
}

console.log(add(55, 1))

// this key is no longer bound

const user = {
  name: 'Frank',
  cities: ['Texas', 'Pennsylvania', 'South Carolina'],
  printPlacesLived() {
    // console.log(this.name)
    // console.log(this.cities)

    // map method
    return this.cities.map(city => `${this.name} has lived in ${city}`)

    // foreach method
    // this.cities.forEach(city => {
    //   console.log(`${this.name} has lived in ${city}`)
    // })
  }
}

console.log(user.printPlacesLived())

// challenge area
const multiplier = {
  // numbers array
  numbers: [2, 8, 10],
  // multiply by - single number
  multiplyBy: 2,
  // multiply - method reutn a new array where numbers have been multiplied
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
