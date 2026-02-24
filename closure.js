const assert = require('assert')

// Replace the following class with an object factory using a closure pattern

// function Car(acceleration, topSpeed) {

class Car {
  constructor(acceleration, topSpeed) {
    this.acceleration = acceleration
    this.topSpeed = topSpeed
    this.position = 0
    this.speed = 0
  }

  getPosition() {
    return this.position
  }

  update() {
    this.speed += this.acceleration
    this.speed = Math.min(this.topSpeed, this.speed)
    this.position += this.speed
  }
}

function race(cars) {
  console.clear()
  cars.forEach((car, i) => {
    car.update()
    const pos = car.getPosition()
    console.log(`${' '.repeat(pos)}${i}`)
  })

  if (cars.every(c => c.getPosition() < 80)) {
    setTimeout(() => race(cars), 300)
  }
}

// Tests
const car = new Car(1, 2)
assert(car.getPosition() === 0, 'Position does not start at 0')
assert(car.update() || car.getPosition() === 1, 'Position does not update correctly')
assert(car.update() || car.getPosition() === 3, 'Position does not update correctly')
assert(car.position === undefined, 'Position is public')
assert(car.speed === undefined, 'Speed is public')

race([new Car(1.2, 6), new Car(1, 12), new Car(1.1, 8)])
