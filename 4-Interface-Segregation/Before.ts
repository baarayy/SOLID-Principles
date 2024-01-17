interface Animal {
  eat()
  drink()
  walk()
  fly()
}

class Bird implements Animal {
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

class Dog implements Animal {
  eat() {
    console.log('Dogs can eat')
  }
  drink() {
    console.log('Dogs can drink')
  }
  walk() {
    console.log('Dogs can walk')
  }
  fly() {
    console.log('Dogs cannot fly')
  }
}
