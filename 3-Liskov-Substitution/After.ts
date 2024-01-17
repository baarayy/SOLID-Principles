// After LSP

// Redefine the hierarchy to follow LSP
abstract class AnimalAfter {
  constructor(private name: string) {}

  abstract makeSound(): string
}

class DogAfter extends AnimalAfter {
  makeSound(): string {
    return 'Bark!'
  }

  wagTail(): string {
    return 'Wagging tail!'
  }
}

class CatAfter extends AnimalAfter {
  makeSound(): string {
    return 'Meow!'
  }

  purr(): string {
    return 'Purring'
  }
}

// Function that takes an array of AnimalAfters and makes them all sound
function makeAllSoundsAfter(AnimalAfters: AnimalAfter[]): void {
  AnimalAfters.forEach(AnimalAfter => {
    console.log(AnimalAfter.makeSound())
  })
}

// Usage example
const AnimalsAfter: AnimalAfter[] = [new DogAfter('Buddy'), new CatAfter('Whiskers')]
makeAllSoundsAfter(AnimalsAfter)
