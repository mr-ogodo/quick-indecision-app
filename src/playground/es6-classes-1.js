
class Person {
  constructor(name="anon", age=0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `hi i am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += `, his major is ${this.major}`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting(){
    let home = super.getGreeting();
    if(this.homeLocation){
      home += `, i am visiting from ${this.homeLocation}`;
    }
    return home;
  }

}

const mee = new Traveler('seun', 31, 'Chicago');
console.log(mee.getGreeting());

const otherr = new Traveler();
console.log(otherr.getGreeting());

const me = new Student('seun', 30, 'computer science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
