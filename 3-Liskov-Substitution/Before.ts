class Animal {
  constructor(private name: string) {}

  makeSound(): string {
    return 'Generic animal sound'
  }
}

class Dog extends Animal {
  makeSound(): string {
    return 'Bark!'
  }

  wagTail(): string {
    return 'Wagging tail!'
  }
}

class Cat extends Animal {
  makeSound(): string {
    return 'Meow!'
  }

  purr(): string {
    return 'Purring'
  }
}

// Function that takes an array of animals and makes them all sound
function makeAllSounds(animals: Animal[]): void {
  animals.forEach(animal => {
    console.log(animal.makeSound())
  })
}

// Usage example
const animals: Animal[] = [new Dog('Buddy'), new Cat('Whiskers'), new Animal('Ran')]
makeAllSounds(animals)
