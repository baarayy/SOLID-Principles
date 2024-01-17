interface NormalAnimal {
  eat()
  drink()
  walk()
}

interface FlyingAnimal extends NormalAnimal {
  fly()
}

class BirdAfter implements FlyingAnimal {
  eat() {
    console.log('Birds can eat')
  }
  drink() {
    console.log('Birds can drink')
  }
  walk() {
    console.log('Birds can walk')
  }
  fly() {
    console.log('Birds can fly')
  }
}

class DogAfter implements NormalAnimal {
  eat() {
    console.log('Dogs can eat')
  }
  drink() {
    console.log('Dogs can drink')
  }
  walk() {
    console.log('Dogs can walk')
  }
}
