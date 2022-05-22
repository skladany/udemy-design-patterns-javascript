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

- [x] 11. Overview

  - Some objects are simple and only require single initializer
  - Other objects require a lot of inializers
  - Having an object with 10 initializer arguments is not productive
  - Instead, build it up piecewise
  - Builder provides an API for constructing the object step-by-step
  - "When piecewise object construction is complicated, provide an API for doing it succinctly"

  - [x] 12. Builder

    - Something that helps you build an object

  - [x] 13. Builder Facets

    - Sometimes one builder isn't enough

  - [x] Coding Exercise 1: Builder Coding Exercise
  - [x] 14. Summary
    - Builder is a separate component for building an object
    - Can either give builder an initializer or return it via a static function
    - Can be chained by returning `this`
    - Difference facets of an object can be built with different builders working in tandem via a base class

# Section 4: Factory (Factory Method & Abstract Factory)

- [x] 15. Overview

  - Factory Method
    - Object creation logic becomes to complicated
    - Initialize is not descriptive
      - Name is always `__init__` (is that true in JS?)
      - Cannot overload with same set of arguments with different names
      - Can turn into `optional paramater hell`
    - Wholesale object creation (non-pieceise, unlike Builder) can be outsourced to
      - A seperate method (Factory Method)
      - That may exist in a separate class (Factory)
      - Can create hierarchy of factories with Abstract Factory
  - Factory
    - A component responsible solely for the wholesale (not piecewise) creation of objects

- [x] 16. Factory Method

  - A method for creating something (often static)

- [x] 17. Factory

  - Seperation of concerns
  - Just a seperate class that takes on the responsibility of creating objects of a particular type

- [x] 18. Abstract Factory
