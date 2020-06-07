# Singleton - Under building

### What is it?

The Singleton pattern is a creation pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

### What problem are we trying to solve?

### Pros and Cons

#### Pros
 - You can be sure that a class have only a single instance;
 - You gain a global access to that instance;
 - The singleton object is initialized only when it's requested for the first time;

#### Cons
 - Violates the _Single Responsility Principle_. The pattern solves two problems at the time;
 - The singleton pattern can mask bad design, for instance, when the components of the program know too much about each other;
 - The pattern requires special treatment in a multithreaded environment so that multiple threads won't create a singleton object several times;
 - It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static method is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don't write the tests. Or don't use the Singleton pattern;

### Reference
https://refactoring.guru/design-patterns/singleton