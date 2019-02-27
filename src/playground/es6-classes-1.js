class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `hi ${this.name}.`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription()
    return `${description} and is a(n) ${
      this.hasMajor() ? this.major : 'undecided'
    } student.`
  }
}

class Travelor extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      greeting += ` I'm from ${this.homeLocation}`
    }

    return greeting
  }
}

const me = new Travelor('Frank Pigeon', 40, 'Texas')
console.log(me.getGreeting())

const other = new Travelor()
console.log(other.getGreeting())
