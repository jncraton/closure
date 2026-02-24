# Closures

## Learning Outcomes

1. Convert a class-based object to a factory that uses closures for private state
2. Encapsulate internal state using function scope
3. Write and run zero-dependency tests using Node.js
4. Separate program execution from test execution

## Context

Reimplement the `Car` class as a function factory that uses [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures) to keep position and speed private. No code outside the Car function should need modification.

## Usage

Run tests:

```
make test
```

Run the race animation:

```
make run
```

## Testing

The project includes inline assertions that exercise the Car API. `make test` runs the assertions and exits. `make run` executes the race animation after the tests pass.

## Tasks

1. Replace the Car class with a factory function `Car(acceleration, topSpeed)`
2. Ensure position and speed are not publicly accessible
3. Keep API unchanged. `update()` and `getPosition()` should still function as methods
4. Do not use the `class` keyword

## Resources

- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [State Representation](<https://en.wikipedia.org/wiki/Closure_(computer_programming)#State_representation>)
- [Function Objects in JavaScript](https://en.wikipedia.org/wiki/Function_object#In_JavaScript)
