class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  getName() {
    return this.name;
  }
  setName(newName) {
    this.name = newName;
  }

}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.log(myCar1)
console.log(myCar2)

console.log(myCar1.getName())
console.log(myCar2.getName())

myCar1.setName("GMC")
myCar2.setName("BMW")

console.log(myCar1.getName())
console.log(myCar2.getName())
