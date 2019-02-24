'use strict';

// arguments object is no longer bound

var add = function add(a, b) {
  // console.log(arguments)
  return a + b;
};

console.log(add(55, 1));

// this key is no longer bound

var user = {
  name: 'Frank',
  cities: ['Texas', 'Pennsylvania', 'South Carolina'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // console.log(this.name)
    // console.log(this.cities)

    // map method
    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });

    // foreach method
    // this.cities.forEach(city => {
    //   console.log(`${this.name} has lived in ${city}`)
    // })
  }
};

console.log(user.printPlacesLived());

// challenge area
var multiplier = {
  // numbers array
  numbers: [2, 8, 10],
  // multiply by - single number
  multiplyBy: 2,
  // multiply - method reutn a new array where numbers have been multiplied
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
