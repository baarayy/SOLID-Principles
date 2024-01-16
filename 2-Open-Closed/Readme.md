# Open/Closed Principle (OCP)

The Open/Closed Principle is one of the SOLID principles of object-oriented design, aimed at creating more maintainable and flexible software systems. It was introduced by Bertrand Meyer.

## Principle Statement

The Open/Closed Principle states:

> "A class should be open for extension but closed for modification."

## Explanation

1. **Open for Extension:**
   - The behavior of a module (e.g., a class or a function) can be extended without modifying its source code.
   - New functionality can be added through the introduction of new code.

2. **Closed for Modification:**
   - Once a module is defined and implemented, its source code should not be altered to add new functionality or modify existing behavior.
   - Existing code remains unchanged, reducing the risk of introducing errors and maintaining the stability of the system.

## Benefits

1. **Maintainability:**
   - Existing code remains stable, reducing the likelihood of introducing bugs during modifications.
   - Easier maintenance and updates as new features can be added without altering existing code.

2. **Flexibility:**
   - The system becomes more adaptable to changes and additions.
   - New functionality is added through extension, promoting a modular and scalable design.

3. **Reusability:**
   - Existing code can be reused without modification, fostering the reuse of well-tested and proven components.

## Example

Consider a class that performs calculations based on different geometric shapes. Instead of modifying the class each time a new shape is introduced, the Open/Closed Principle suggests creating an abstract base class or interface (e.g., `shape`) and extending it for each new shape (e.g., `Circle`, `Rectangle`). This way, the existing code is closed for modification, but new shapes can be added by creating new classes, adhering to the open-for-extension principle.

```typescript
abstract class shape {
  abstract draw(): void;
}

class Circle extends shape {
  // Implementation for Circle
}

class Rectangle extends shape {
  // Implementation for Rectangle
}

// ... More shapes can be added without modifying the existing code.
