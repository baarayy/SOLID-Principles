# Interface Segregation Principle (ISP)

The **Interface Segregation Principle** is one of the SOLID principles in object-oriented design, focusing on the idea that a class should not be forced to implement interfaces it does not use. In simpler terms, it suggests that clients should not be forced to depend on interfaces they do not use.

## Understanding the Issue

Let's examine the original code before applying the Interface Segregation Principle:

```typescript
interface Animal {
  eat()
  drink()
  walk()
  fly()
}

class Bird implements Animal {
  // ... methods implementation
}

class Dog implements Animal {
  // ... methods implementation
  fly() // the dog is forced to implement the fly method while it doesn't need it
}
```

## Applying Interface Segregation Principle

```typescript
interface NormalAnimal {
  eat()
  drink()
  walk()
}

interface FlyingAnimal extends NormalAnimal {
  fly()
}

class BirdAfter implements FlyingAnimal {
  // ... methods implementation
}

class DogAfter implements NormalAnimal {
  // ... methods implementation
}
```

Here, we've segregated the original Animal interface into two more focused interfaces: NormalAnimal and FlyingAnimal. Now, a class can choose to implement only the interface(s) that are relevant to its behavior.

## Benefits of ISP

1. **Reduced Coupling**: By breaking down the original interface into smaller, more specialized interfaces, we reduce the coupling between classes and interfaces. This makes the system more flexible and easier to maintain.

2. **Better Encapsulation**: Each interface now represents a more cohesive set of behaviors, leading to better encapsulation. This makes it clear which methods are related and should be implemented together.

3. **Improved Code Reusability**: Classes that require specific behaviors can now implement only the interfaces they need, leading to improved code reusability. For example, a class representing a non-flying animal doesn't need to worry about implementing irrelevant methods.

## Conclusion

The Interface Segregation Principle encourages a design philosophy where interfaces are specific and focused on a particular set of behaviors. By doing so, we create more maintainable, flexible, and understandable code that aligns with the SOLID principles of object-oriented design.
