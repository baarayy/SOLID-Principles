# Single Responsibility Principle (SRP)

## Overview

The Single Responsibility Principle (SRP) is a fundamental principle in object-oriented design, part of the SOLID principles. It states that a class should have only one reason to change, meaning it should have only one responsibility.

## What Does it Mean?

A class should focus on doing one thing and doing it well. By having a single responsibility, a class becomes more modular, maintainable, and adaptable to change. This principle encourages clean code and helps in avoiding tightly coupled and complex designs.

## Example

Consider a class managing tasks. Initially, it might handle both task management and formatting details. After applying SRP, responsibilities are separated into two classes: one for managing tasks and another for formatting details.

## Benefits

- **Modularity:** Each class has a clear, focused purpose.
- **Maintainability:** Changes to one responsibility don't affect others.
- **Readability:** Code becomes more readable and easier to understand.
