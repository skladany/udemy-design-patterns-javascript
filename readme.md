[Design Patterns in JavaScript](https://www.udemy.com/course/design-patterns-javascript/learn/lecture/13880096#overview)

Notes and a checklist as I go through the course.

# Section 1: Introduction to Object-Oriented JavaScript

- [x] 1. Introduction

## The Patterns

- Creational
- Builder
- Factories
  - Abstract Factory
  - Factory Method
- Prototype
- Singleton

# Structural

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

# Behavioral

- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

- [x] 2. Tools of the Trade

# Section 2: SOLID Design Principles

- [x] 3. Overview
- [x] 4. Single Responsibility Principle

  - Class should only have a single responsibility
  - Should only have one reason to change related to that responsibility
  - Antipattern: the god object
  - Seperation of concerns

- [x] 5. Open-Closed Principle

  - Objects are open for extension (e.g, inheritance), but close for modification (e.g, adding methods, etc)
  - Instead, use specification pattern & combinator pattern

- [x] 6. Liskov Substitution Principle

  - A function that takes a base type, should also be able to take a derived type

- [x] 7. Interface Segregation Principle

  - Segregate interface into different parts so you don't need to implement things you don't need
  - Principle of least surprise; Should be obvious
  - In JavaScript, it's somewhat moot given the lack of interfaces in classes (due to lack of abstract classes)
  - YAGNI - You Ain't Going to Need It

- [x] 8. Depdendency Inversion Principle

  - Defines a relation you should have between high-level & low-level modules
  - Low-level module ("close to the metal", concerned with storage)
  - High-level module (concerned with getting the data out, using it somehow)
  - High-level modules should _not_ depending directly on low-level modules but instead depend on abtractions

- [x] 9. Summary

# Section 3: Builder

- [x] 10. Gamma Categorization (Erich Gamma, one of the GoF, Gang of Four)
  - Creational Patterns
    - Deals with the creation (construction) of objects
    - Explicit (constructor) vs implicit (DI, reflection, etc)
    - Wholesale (single statement) vs piecewise (step-by-step)
  - Structural Patterns
    - Concerned with the structure (e.g, class members)
    - Many patterns are wrappers that mimic the underlying class' interface
    - Stress importance of good API design
  - Bahavorial Patterns
    - All different, no central theme
