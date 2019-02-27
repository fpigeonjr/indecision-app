class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `hi ${this.name}`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('Frank Pigeon', 40)
console.log(me.getDescription())

const other = new Person()
console.log(other.getDescription())
