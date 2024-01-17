# Liskov Substitution Principle (LSP)

The Liskov Substitution Principle is one of the SOLID principles, and it deals with the substitution of objects of a superclass with objects of its subclasses without affecting the correctness of the program.

## Principle Statement

"If S is a subtype of T, then objects of type T may be replaced with objects of type S without affecting the correctness of the program."

## Example

Let's consider a simple example in TypeScript with animals:

### Before LSP Adherence:

```typescript
class Animal {
  // ... (omitted for brevity)
}

class Dog extends Animal {
  // ... (omitted for brevity)
  wagTail(): string {
    // ... (omitted for brevity)
  }
}

class Cat extends Animal {
  // ... (omitted for brevity)
  purr(): string {
    // ... (omitted for brevity)
  }
}

function makeAllSounds(animals: Animal[]): void {
  // ... (omitted for brevity)
}
```

In this scenario, the Dog and Cat subclasses have additional methods (wagTail and purr, respectively) not present in the base Animal class. Substituting a Dog or Cat instance for an Animal may lead to unexpected behavior when accessing methods not defined in the base class.

### After LSP Adherence:

```typescript
abstract class Animal {
  abstract makeSound(): string
}

class Dog extends Animal {
  makeSound(): string {
    // ... (omitted for brevity)
  }

  wagTail(): string {
    // ... (omitted for brevity)
  }
}

class Cat extends Animal {
  makeSound(): string {
    // ... (omitted for brevity)
  }

  purr(): string {
    // ... (omitted for brevity)
  }
}

function makeAllSounds(animals: Animal[]): void {
  // ... (omitted for brevity)
}
```

In this refactored example, the Animal class is abstract, and the makeSound method is abstract. This ensures that any subclass of Animal can be safely substituted for an Animal without causing unexpected behavior or violating the contract defined by the base class.

By adhering to LSP, we create a more robust and maintainable codebase, enabling better flexibility and extensibility.
