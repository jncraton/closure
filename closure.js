const assert = require('assert')

// Replace the following class with an object factory using a closure pattern

// function Car(acceleration, top_speed) {

class Car {
  constructor(acceleration, top_speed) {
    this.acceleration = acceleration
    this.top_speed = top_speed
    this.position = 0
    this.speed = 0

  }

  get_position() {
    return this.position
  }

  update() {
    this.speed += this.acceleration
    this.speed = Math.min(this.top_speed, this.speed)
    this.position += this.speed
  }
}



function race(cars) {
  console.clear()
  cars.forEach((car, i) => {
    car.update()
    const pos = car.get_position()
    console.log(`${" ".repeat(pos)}${i}`)
  })

  if (cars.every(c => c.get_position() < 80)) {
    setTimeout(() => race(cars), 300)
  }
}

// Tests
const car = new Car(1,2)
assert(car.get_position() == 0, "Position does not start at 0")
assert(car.update() || car.get_position() == 1, "Position does not update correctly")
assert(car.update() || car.get_position() == 3, "Position does not update correctly")
assert(car.position == undefined, "Position is public")
assert(car.speed == undefined, "Speed is public")

race([
  new Car(1.2,6),
  new Car(1,12),
  new Car(1.1,8),
])
