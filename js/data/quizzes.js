// ============================================
// QUIZ DATA – Questions for each level
// ============================================

export const QUIZZES = {
    1: {
        title: 'Level 1 – OOP Foundations Quiz',
        questions: [
            {
                question: 'Q1 — Which of the following best describes a CLASS in OOP?',
                options: [
                    'A) A specific car parked in a lot',
                    'B) A blueprint used to create objects',
                    'C) A method that runs automatically',
                    'D) A variable that stores data',
                ],
                correct: 1,
                explanation: 'A class is a template. Just like a blueprint defines a house\'s structure but isn\'t a house itself, a class defines the structure of objects. Objects are the actual instances created from that class.',
            },
            {
                question: 'Q2 — A smartphone has properties like brand, color, and battery level, and behaviors like call() and playMusic(). In OOP terms, what is the smartphone?',
                options: [
                    'A) A class',
                    'B) An attribute',
                    'C) An object',
                    'D) A method',
                ],
                correct: 2,
                explanation: 'The smartphone with specific values (e.g., brand = "Samsung") is an instance — an object — created from the Smartphone class. The class is the blueprint; the actual smartphone with real data is the object.',
            },
            {
                question: 'Q3 — You\'re driving a car. You press the accelerator to speed up, but have no idea how the engine combustion works internally. Which OOP concept does this represent?',
                options: [
                    'A) Encapsulation',
                    'B) Inheritance',
                    'C) Polymorphism',
                    'D) Abstraction',
                ],
                correct: 3,
                explanation: 'Abstraction hides complex internal workings and exposes only what the user needs. You interact with the pedal (interface), not the engine internals (implementation). Encapsulation is about data hiding within a class — a related but distinct concept.',
            },
            {
                question: 'Q4 — A developer creates a BankAccount class. The balance attribute is marked private, and access is only allowed through deposit() and withdraw() methods. Which OOP principle is being applied?',
                options: [
                    'A) Abstraction',
                    'B) Polymorphism',
                    'C) Encapsulation',
                    'D) Inheritance',
                ],
                correct: 2,
                explanation: 'Encapsulation means protecting data by making it private and only allowing controlled access through public methods — exactly what\'s happening with the balance here. The data is bundled with the methods that operate on it.',
            },
            {
                question: 'Q5 — A Dog class and a Cat class both have a method called speak(). Dog\'s speak() returns "Woof" and Cat\'s speak() returns "Meow". What concept is being demonstrated?',
                options: [
                    'A) Encapsulation',
                    'B) Constructor',
                    'C) Method Overloading',
                    'D) Method Overriding / Polymorphism',
                ],
                correct: 3,
                explanation: 'Both classes override speak() differently. This is runtime polymorphism — the same method name behaves differently depending on the object. Method Overloading would be the same class having multiple methods with the same name but different parameters.',
            },
            {
                question: 'Q6 — A class Vehicle has attributes speed and fuel, and a method move(). A class Car extends Vehicle and adds a new method honk(). Which statement is TRUE?',
                options: [
                    'A) Car cannot use the move() method',
                    'B) Vehicle is the child class',
                    'C) Car inherits speed, fuel, and move() from Vehicle',
                    'D) Car and Vehicle are unrelated',
                ],
                correct: 2,
                explanation: 'Through inheritance, the child class Car automatically gets all non-private attributes and methods of the parent class Vehicle, plus its own additions like honk(). Vehicle is the parent (superclass) and Car is the child (subclass).',
            },
            {
                question: 'Q7 — "A SavingsAccount and FixedDepositAccount both extend BankAccount and each calculate interest differently." Which TWO pillars are demonstrated here?',
                options: [
                    'A) Abstraction and Encapsulation',
                    'B) Inheritance and Polymorphism',
                    'C) Encapsulation and Polymorphism',
                    'D) Abstraction and Inheritance',
                ],
                correct: 1,
                explanation: 'Extending BankAccount = Inheritance (parent-child relationship). calculateInterest() behaving differently in each subclass = Polymorphism (same method, different behavior). These two pillars work together to create flexible, reusable class hierarchies.',
            },
            {
                question: 'Q8 — When new Employee("John", 101) is called, a special method runs automatically and sets name="John" and id=101. What is this method called?',
                options: [
                    'A) Initializer',
                    'B) Destructor',
                    'C) Constructor',
                    'D) Static Loader',
                ],
                correct: 2,
                explanation: 'A constructor is a special method with the same name as the class, automatically called when an object is created. It initializes the object\'s attributes. Java provides a default no-argument constructor if none is explicitly defined.',
            },
            {
                question: 'Q9 — Inside a constructor, this.name = name; is used where the parameter shares the name of the field. What does "this" refer to?',
                options: [
                    'A) The parent class',
                    'B) The static class reference',
                    'C) The current object instance',
                    'D) The constructor itself',
                ],
                correct: 2,
                explanation: '"this" is a reference to the current object. When a parameter has the same name as an instance variable, this.name refers to the object\'s field while name alone refers to the parameter. Without this, the field would not be updated.',
            },
            {
                question: 'Q10 — Which of the following correctly lists ALL FOUR pillars of OOP?',
                options: [
                    'A) Inheritance, Polymorphism, Looping, and Recursion',
                    'B) Classes, Objects, Methods, and Variables',
                    'C) Encapsulation, Abstraction, Inheritance, and Polymorphism',
                    'D) Static, Final, Abstract, and Interface',
                ],
                correct: 2,
                explanation: 'The four fundamental pillars of OOP are: Encapsulation (data protection with access control), Abstraction (hiding complexity), Inheritance (code reuse through parent-child relationships), and Polymorphism (one interface, many behaviors). These are the building blocks of all OOP design.',
            },
        ],
    },

    2: {
        title: 'Level 2 – Advanced OOP Quiz',
        questions: [
            {
                question: 'Q1 — Which of the following is resolved at COMPILE TIME?',
                options: [
                    'A) Method overriding via parent reference',
                    'B) Dynamic dispatch through inheritance',
                    'C) Method overloading based on parameter types',
                    'D) Virtual method calls in subclasses',
                ],
                correct: 2,
                explanation: 'Method overloading is compile-time (static) polymorphism — the compiler selects the correct version based on the method signature before execution. Method overriding is resolved at runtime by the JVM through dynamic dispatch.',
            },
            {
                question: 'Q2 — Given: Animal a = new Dog(); — Animal has a speak() method and Dog overrides it. What happens when a.speak() is called?',
                options: [
                    'A) Animal\'s speak() is called because the reference is of type Animal',
                    'B) Compilation error — type mismatch',
                    'C) Dog\'s speak() is called because the actual object is Dog',
                    'D) Both Animal\'s and Dog\'s speak() are called',
                ],
                correct: 2,
                explanation: 'This is runtime polymorphism in action. The JVM looks at the actual object (Dog), not the reference type (Animal), to decide which speak() to call — this is dynamic dispatch. The reference type only matters for compile-time method accessibility.',
            },
            {
                question: 'Q3 — Which statement is TRUE about Interfaces in Java?',
                options: [
                    'A) An interface can have a constructor',
                    'B) A class can extend multiple interfaces',
                    'C) Interface variables can be reassigned anywhere in the program',
                    'D) A class can implement multiple interfaces simultaneously',
                ],
                correct: 3,
                explanation: 'Java allows a class to implement multiple interfaces, solving the multiple inheritance problem. Interface variables are implicitly public static final (constants) and cannot be reassigned. Interfaces have no constructors and are implemented (not extended) by classes.',
            },
            {
                question: 'Q4 — A developer writes: Vehicle v = new ElectricCar(); v.fuelType(); — ElectricCar overrides fuelType() from Vehicle. Which method runs and WHY?',
                options: [
                    'A) Vehicle\'s fuelType() — because v is declared as Vehicle',
                    'B) ElectricCar\'s fuelType() — because the actual object is ElectricCar (dynamic dispatch)',
                    'C) Both methods run in sequence',
                    'D) A compilation error occurs',
                ],
                correct: 1,
                explanation: 'This is the classic runtime polymorphism scenario. The reference type (Vehicle) is irrelevant for overridden methods — the JVM dispatches the call to the actual object\'s class (ElectricCar) at runtime. This is dynamic method dispatch.',
            },
            {
                question: 'Q5 — What is the correct use of the super keyword?',
                options: [
                    'A) To refer to the current object\'s instance variables',
                    'B) To call the parent class constructor or access parent class methods',
                    'C) To prevent a method from being overridden',
                    'D) To declare a class-level shared variable',
                ],
                correct: 1,
                explanation: 'super refers to the parent class. It\'s used to call the parent\'s constructor (super()), access parent methods (super.method()), or access parent fields. The keyword this refers to the current object. The final keyword prevents overriding.',
            },
            {
                question: 'Q6 — A Printer class handles printing, scanning, and emailing. A developer adds a fax feature by modifying this same class. Which TWO SOLID principles are violated?',
                options: [
                    'A) Liskov Substitution & Dependency Inversion',
                    'B) Single Responsibility Principle & Open/Closed Principle',
                    'C) Interface Segregation & Liskov Substitution',
                    'D) Open/Closed Principle & Dependency Inversion',
                ],
                correct: 1,
                explanation: 'SRP is violated because the class has multiple responsibilities (print, scan, email). OCP is violated because adding a new feature (fax) requires modifying the existing class instead of extending it. Fix: separate classes per responsibility, extend rather than modify.',
            },
            {
                question: 'Q7 — You are designing a system where Dog walks, Bird flies, and Fish swims. Which design approach best follows OOP principles?',
                options: [
                    'A) Create one Animal class with an if/else chain to check the type and call different moves',
                    'B) Define a Movable interface and let each class implement move() in its own way',
                    'C) Copy and paste the move logic into each class separately',
                    'D) Make all three extend a single abstract class that forces all to use the same move() implementation',
                ],
                correct: 1,
                explanation: 'Defining a Movable interface follows Polymorphism (same interface, different behavior per class) and ISP (each class only implements what it needs). An if/else chain violates OCP. Copy-pasting violates DRY. Forcing a fixed move() in an abstract class violates LSP.',
            },
            {
                question: 'Q8 — A class SchoolRecord has 500 student objects. The method getSchoolName() always returns "Springfield High" for every object. Which keyword should be used to optimize this?',
                options: [
                    'A) final',
                    'B) abstract',
                    'C) static',
                    'D) protected',
                ],
                correct: 2,
                explanation: 'static makes the method belong to the class itself, not individual objects. Since the school name is shared by all students, it doesn\'t need an instance to access — call it as SchoolRecord.getSchoolName(). This avoids creating 500 separate references to the same data.',
            },
            {
                question: 'Q9 — Inside Lion.sound(), a developer wants to call Animal\'s sound() method FIRST, then add "Roar!". Which syntax is correct?',
                options: [
                    'A) parent.sound();',
                    'B) Animal.sound();',
                    'C) super.sound();',
                    'D) this.sound();',
                ],
                correct: 2,
                explanation: 'super.sound() calls the parent class\'s version of the method, letting the child extend (not replace) the parent behavior. this.sound() would cause infinite recursion. Animal.sound() is not valid Java syntax for instance method calls.',
            },
            {
                question: 'Q10 — ModuleA creates instances of ModuleB and ModuleC directly. Every time B or C changes, A breaks. Which concept describes this and which SOLID principle fixes it?',
                options: [
                    'A) Low Cohesion — fix with Single Responsibility Principle',
                    'B) High Coupling — fix with Dependency Inversion Principle',
                    'C) Method Overriding — fix with Liskov Substitution Principle',
                    'D) Multiple Inheritance — fix with Interface Segregation Principle',
                ],
                correct: 1,
                explanation: 'High Coupling means classes are tightly dependent on each other\'s concrete implementations. The Dependency Inversion Principle says: "Depend on abstractions, not concretions." A should depend on interfaces that B and C implement — changes to B/C won\'t break A.',
            },
        ],
    },

    3: {
        title: 'Level 3 – Encapsulation Lock System Quiz',
        questions: [
            {
                question: 'Q1 — What is the PRIMARY purpose of encapsulation in OOP?',
                options: [
                    'A) To speed up code execution',
                    'B) To bundle data and methods while restricting direct external access',
                    'C) To allow multiple classes to inherit from each other',
                    'D) To create multiple objects from one class',
                ],
                correct: 1,
                explanation: 'Encapsulation bundles data (fields) and methods together inside a class and restricts direct external access using access modifiers like private. Controlled access is provided through public getters and setters — protecting the data from unintended misuse.',
            },
            {
                question: 'Q2 — In Java, which access modifier restricts a variable so ONLY the class itself can access it?',
                options: [
                    'A) public',
                    'B) protected',
                    'C) default',
                    'D) private',
                ],
                correct: 3,
                explanation: 'private restricts access exclusively to the class itself. public allows access everywhere, protected allows within class + package + subclasses, and default allows within the same package only. For encapsulation, fields should always be private.',
            },
            {
                question: 'Q3 — Given private int balance;, which is the CORRECT getter method?',
                options: [
                    'A) int getBalance() { return balance; }',
                    'B) private int getBalance() { return balance; }',
                    'C) public int getBalance() { return balance; }',
                    'D) public void getBalance() { balance; }',
                ],
                correct: 2,
                explanation: 'A getter must be public (so external classes can use it), return the correct type (int), follow the getFieldName() naming convention, and return the field value. Option A is missing public, Option B is private (useless externally), and Option D returns void instead of int.',
            },
            {
                question: 'Q4 — What does a setter method PRIMARILY do in encapsulation?',
                options: [
                    'A) Returns the value of a private field',
                    'B) Deletes a private field\'s value',
                    'C) Validates and assigns a new value to a private field',
                    'D) Converts a private field to public',
                ],
                correct: 2,
                explanation: 'A setter provides controlled write access. It typically validates the incoming value before assigning it to the private field — for example, preventing a negative balance. This is the core power of encapsulation: data cannot be corrupted through uncontrolled direct access.',
            },
            {
                question: 'Q5 — What is the security vulnerability in: class Account { public int balance; }?',
                options: [
                    'A) The class is missing a constructor',
                    'B) Any external code can set balance to an invalid value like -99999',
                    'C) The class cannot be instantiated',
                    'D) balance should be declared as static',
                ],
                correct: 1,
                explanation: 'With public access, any code can do account.balance = -99999 without any validation. This corrupts the object\'s state. Encapsulation (private field + setter with validation) prevents this by ensuring balance can only be changed through controlled, validated methods.',
            },
            {
                question: 'Q6 — After properly encapsulating Account, which code correctly modifies the balance?',
                options: [
                    'A) Account a = new Account(); a.balance = 500;',
                    'B) Account a = new Account(); a.setBalance(500);',
                    'C) Account a = new Account(); int b = a.balance;',
                    'D) Account a = new Account(); System.out.println(a.balance);',
                ],
                correct: 1,
                explanation: 'With encapsulation, balance is private and cannot be accessed directly from outside the class. The setter setBalance(500) is the only valid way to modify it. Options A, C, and D all attempt to directly access the private field, which causes a compile-time error.',
            },
            {
                question: 'Q7 — Which real-world scenario BEST demonstrates encapsulation?',
                options: [
                    'A) A child class inheriting traits from a parent class',
                    'B) An ATM machine — complex banking logic is hidden; you only interact through the public interface',
                    'C) One function working differently based on parameter types',
                    'D) Multiple classes sharing the same base blueprint',
                ],
                correct: 1,
                explanation: 'An ATM is a perfect encapsulation analogy: the internal banking logic (private data/methods) is hidden inside, and you only interact through the public interface (buttons/screen). You withdraw money without knowing how the internal ledger works — that\'s controlled access to hidden data.',
            },
            {
                question: 'Q8 — In public void setBalance(int balance), which keyword distinguishes the instance variable from the parameter?',
                options: [
                    'A) super',
                    'B) self',
                    'C) this',
                    'D) static',
                ],
                correct: 2,
                explanation: 'this.balance = balance — this.balance refers to the object\'s instance field, while balance alone refers to the method parameter. Without this, the assignment balance = balance has no effect on the field. This is one of the most common uses of the this keyword.',
            },
            {
                question: 'Q9 — Which statement about encapsulation is TRUE?',
                options: [
                    'A) Encapsulation makes all class fields directly accessible to other classes',
                    'B) An encapsulated class cannot have any public methods',
                    'C) Setters in encapsulated classes can include validation logic to protect data',
                    'D) Encapsulation eliminates the need for constructors',
                ],
                correct: 2,
                explanation: 'One of the key benefits of encapsulation is that setters can include validation — e.g., if (amount >= 0) this.balance = amount. This ensures data integrity. Getters and setters are public methods and are essential to encapsulation. Constructors are still fully needed.',
            },
            {
                question: 'Q10 — A BankAccount has private double balance and private double interestRate. Each setter rejects invalid values (negative balance, interest > 100%). This design demonstrates:',
                options: [
                    'A) Polymorphism — same method name behaving differently',
                    'B) Inheritance — BankAccount extending a parent class',
                    'C) Encapsulation — private data with validated, controlled public access',
                    'D) Abstraction — hiding the interest calculation algorithm',
                ],
                correct: 2,
                explanation: 'This is textbook encapsulation: private fields + public setters with validation = controlled, protected access. The setter rejects invalid values — this is exactly what encapsulation achieves: protecting the object\'s state from invalid or malicious modifications.',
            },
        ],
    },
};
