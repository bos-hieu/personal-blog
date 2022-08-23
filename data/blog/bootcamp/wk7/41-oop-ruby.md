---
title: Object-Oriented Programming in Ruby
date: '2022-08-20'
tags: ['OOP', 'Ruby']
images: 'https://media-exp1.licdn.com/dms/image/C4D12AQEq3esS-4uCmw/article-cover_image-shrink_600_2000/0/1520203508165?e=2147483647&v=beta&t=MIYyShM8fS5SQQL4SfjWf2wBv8DBEdHkbPm22zfehQg'
draft: false
summary:
---

## Encapsulation

- hiding pieces of functionality from the outside world
- form of data protection
- done by creating objecting and exposing only the methods that you want to be public

## Polymorphism

- the ability to take on many forms
- use previously defined methods to do different things

## What are objects?

Things that are not objects

- methods
- blocks
- variables

Things that are objects

- numbers
- stirngs
- arrays
- classes
- modules

Objects are created **from** classes.

## What is a class?

- think of the as molds
- objects are the things produced by the molds.

- use the `class` keyword to create a class
- should be camel case (ex: `MyClass`)
- use the `end` keyword to close the class

```rb
class GoodDog
end

sparky = GoodDog.new
```

- **instantiation** is the process of creating a new object from a class

![instantiation](https://d2aw5xe2jldque.cloudfront.net/books/ruby/images/class_instance_diagram.jpg)

## Modules

- similar to classes, but cannot be instantiated (no `new` keyword)
- can't be used to create a new object
- usable in other classes via **mixins**
- A module is "mixed in" to a class using the `include` method invocation.

```rb
module Speak
  def speak(sound)
    puts sound
  end
end

class GoodDog
  include Speak
end

class HumanBeing
  include Speak
end

sparky = GoodDog.new
sparky.speak("Arf!")        # => Arf!
bob = HumanBeing.new
bob.speak("Hello!")         # => Hello!
```

You can see where a module is mixed in by using the `ancestors` method.

```rb
puts '---GoodDog ancestors---'
puts GoodDog.ancestors
puts ''
puts '---HumanBeing ancestors---'
puts HumanBeing.ancestors
```

```bash
---GoodDog ancestors---
GoodDog
Speak
Object
Kernel
BasicObject

---HumanBeing ancestors---
HumanBeing
Speak
Object
Kernel
BasicObject
```

## States and Behaviors

- we use classes to create objects
- objects have **states** and **behaviors**
  - **state**: tracks the object's attributes
  - **behavior**: are the actions that the object can perform

Even though you may have two different objects (or instances of a class), they contain identical behaviors.

### Initialize a new Object with `initialize` (constructor)

- you can modify a class by using the `initialize` method

```rb
class GoodDog
  def initialize
    puts "This object was initialized!"
  end
end

sparky = GoodDog.new        # => "This object was initialized!"
```

- the `initialize` method gets called every time a new object is created.
- the `initialize` method is a **constructor**.
  - It is used to set up the initial state of an object.
  - it is a special method that is automatically invoked when a new object is created.
  - Gets triggered by the `.new` method.

### Instance Variables

```rb
class GoodDog
  def initialize(name)
    @name = name
  end
end
```

- using the `@` symbol to create an instance variable
- It does not "die" after the `initialize` method is finished executing.
- In the above example, you can pass in a name when you create a new object.

```rb
doggo = GoodDog.new("Doggo")
```

- When we pass a string in the `new` method, it is assigned to the `name` parameter in the `initialize` method.
- every object can have it's own unique state.

```rb
fido = GoodDog.new("Fido")

gilly = GoodDog.new("Gilly")
```

### Instance Methods

Right now our `GoodDog` class can not do very much. We can add instance methods to our class.

```rb
class GoodDog
  def initialize(name)
    @name = name
  end

  def speak
    "Arf!"
  end
end

sparky = GoodDog.new("Sparky")
sparky.speak

#  this does not do anything.
#  we need to call the speak method on the sparky object.

puts sparky.speak # => Arf!
```

- You can use string interpolation to return the name of the dog.

```rb
class GoodDog
  def initialize(name)
    @name = name
  end

  def speak
    "#{@name} says arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak # => Sparky says arf!

fido = GoodDog.new("Fido")
puts fido.speak # => Fido says arf!
```

### Accessor Methods (get/set instance variables)

What if we wanted to print the dogs name?

```rb
p sparky.name # => NoMethodError: undefined method `name' for #<GoodDog:0x00007f9b1a0b9a00>
```

`NoMethodError` means that there is no method called `name` for the `GoodDog` class.

If we want to access the object's name, which is stored in the `@name` instance variable, we have to **create a method that will return the name**.

> We can call it `get_name`, and its only job is to return the value in the `@name` instance variable.

```rb
class GoodDog
  def initialize(name)
    @name = name
  end

  def get_name
    @name
  end

  def speak
    "#{@name} says arf!"
  end
end
```

#### Getters and Setters

We can go one step further and create a method that will allow us to **change** the name of the dog.

```rb
class GoodDog
  def initialize(name)
    @name = name
  end

  # getter method
  def get_name
    @name
  end

  # setter method
  def set_name=(name)
    @name = name
  end

  def speak
    "#{@name} says arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak               # => Sparky says arf!
puts sparky.get_name            # => Sparky

# use the setter method to change the name

sparky.set_name = "Spartacus"   # => Spartacus
puts sparky.get_name            # => Spartacus
```

Syntax for setters:

You may expect to do something like this: `sparky.set_name=("Spartacus")`

But this is not valid syntax. The `=` sign is not part of the method name. It is part of the assignment operator.

```rb
sparky.set_name = "Spartacus"
```

> Correct way!

Finally, as a convention, Rubyists typically want to name those getter and setter methods using the **same name as the instance variable they are exposing and setting**. We'll make the change to our code as well:

```rb
class GoodDog
  def initialize(name)
    @name = name
  end

  def name                  # This was renamed from "get_name"
    @name
  end

  def name=(n)              # This was renamed from "set_name="
    @name = n
  end

  def speak
    "#{@name} says arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak
puts sparky.name            # => "Sparky"
sparky.name = "Spartacus"
puts sparky.name            # => "Spartacus"
```

> **Setter** methods always **return** the value that is passed in as an argument

```rb
class Dog
  def name=(n)
    @name = n
    "Laddieboy"              # value will be ignored
  end
end

sparky = Dog.new()
puts(sparky.name = "Sparky")  # returns "Sparky"
```

## attr_accessor, attr_reader, attr_writer method

- we can use the `attr_accessor` method to create both the getter and setter methods for us.

```rb
# Use the attr_accessor method to create a getter and setter method for the @name instance variable:

class GoodDog
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def speak
    "#{@name} says arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak
puts sparky.name            # => "Sparky"
sparky.name = "Spartacus"
puts sparky.name            # => "Spartacus"
```

- accepts a **symbol** as an argument
  - which Ruby uses to create the method name for the _getter_ and _setter_ methods.
  - That one line replaced _two method definitions_.
- If you **ONLY** wanted to create a getter method, you could use the `attr_reader` method.
- If you **ONLY** wanted to create a setter method, you could use the `attr_writer` method.
- All of the `attr_*` methods take `Symbol` objects as arguments

Instead of referencing the instance variable directly, we can use the getter and setter methods to access and change the state of the object.

```rb
def speak
  "#{name} says arf!" # does not reference the instance variable directly (no @ sign)
end

#  from this:

def speak
  "#{@name} says arf!"
end
```

> If there are more than one state you are tracking, use this syntax:

```rb
attr_accessor :name, :height, :weight
```

Maybe we want a method to change all these attributes at once:

```rb
def change_info(n, h, w)
  @name = n
  @height = h
  @weight = w
end
```

Our `GoodDog` class looks like this:

```rb
class GoodDog
  attr_accessor :name, :height, :weight

  def initialize(n, h, w)
    @name = n
    @height = h
    @weight = w
  end

  def speak
    "#{name} says arf!"
  end

  def change_info(n, h, w)
    @name = n
    @height = h
    @weight = w
  end

  def info
    "#{name} weighs #{weight} and is #{height} tall."
  end
end
```

We can use the `change_info` method to change the state of the object:

```rb
sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')
puts sparky.info      # => Sparky weighs 10 lbs and is 12 inches tall.

sparky.change_info('Spartacus', '24 inches', '45 lbs')
puts sparky.info      # => Spartacus weighs 45 lbs and is 24 inches tall.
```

## Methods with `self` keyword

- `self` is a reference to the calling object

If you updated the `change_info` method to use the getter and setter methods, it would look like this:

```rb
def change_info(n, h, w)
  self.name = n
  self.height = h
  self.weight = w
end
```

If you just did this:

```rb
def change_info(n, h, w)
  name = n
  height = h
  weight = w
end
```

Ruby think you are creating local variables, not instance variables. Similar to doing `x = 5` in a method. Ruby will create a local variable named `x` and assign it the value of `5`. This is not what we want.

To be consistent, we could also adopt this syntax for the getter methods as well, though it is not required.

```rb
def info
  "#{self.name} weighs #{self.weight} and is #{self.height} tall."
end
```

## Class Methods

- Previously, we created a `GoodDog` class and instantiated a `GoodDog` object.
  - these are **instance methods**

There are also **class methods**.

- class methods can be called on the class itself, not on an instance of the class.
- use the `self` keyword to define a class method.

```rb
def self.what_am_i         # Class method definition
  "I'm a GoodDog class!"
end
```

Then when we call the class method, we use the class name `GoodDog` followed by the method name, without even having to instantiate any objects, like this:

```rb
GoodDog.what_am_i          # => I'm a GoodDog class!
```

```rb
class GoodDog
  attr_accessor :name, :height, :weight

  def initialize(n, h, w)
    @name = n
    @height = h
    @weight = w
  end

  def speak
    "#{name} says arf!"
  end

  def change_info(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
  end

  def info
    "#{name} weighs #{weight} and is #{height} tall."
  end

  def self.what_am_i         # Class method definition
    "I'm a GoodDog class!"
  end
end

puts GoodDog.what_am_i       # => I'm a GoodDog class!
```

## Class Variables

- **class variables** can create variables for an **entire** class.
- Recall, instance variables capture information related to specific instances of classes (i.e., objects).

- created using two `@` symbols like so: `@@`

```rb
class GoodDog
  @@number_of_dogs = 0

  def initialize
    @@number_of_dogs += 1
  end

  def self.total_number_of_dogs
    @@number_of_dogs
  end
end

puts GoodDog.total_number_of_dogs   # => 0

dog1 = GoodDog.new
dog2 = GoodDog.new

puts GoodDog.total_number_of_dogs   # => 2
```

- `@@number_of_dogs` is a class variable.
- initialize `@@number_of_dogs` to `0`
- increment `@@number_of_dogs` by `1` each time a new `GoodDog` object is created.
  - we can access class variables from within an instance method.
    - `initialize` is an instance method.
- we can return the value of `@@number_of_dogs` by calling the `self.total_number_of_dogs` class method.

## Constants

- **constants** are similar to variables, except that their values cannot be changed once they are set.
  - similar to `const` in JavaScript
- defined using all capital letters

```rb
class GoodDog
  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(n, a)
    self.name = n
    self.age  = a * DOG_YEARS
  end
end

sparky = GoodDog.new("Sparky", 4)
puts sparky.age             # => 28
```

- we use the `DOG_YEARS` constant to convert the human years to dog years.
  - we know this number should never change.

## to_s method

- built into every class in Ruby

```rb
class GoodDog
  def initialize(n)
    @name = n
  end
end

sparky = GoodDog.new("Sparky")

puts sparky       # => #<GoodDog:0x007f9c2a356d30>
```

- here is that the `puts` method _automatically_ calls `to_s` on its argument
- is equivalent to `puts sparky.to_s`

- the `p` method is similar to `puts`, but it calls `inspect` on its argument instead of `to_s`.

```rb
p sparky         # => #<GoodDog:0x007fe54229b358 @name="Sparky", @age=28>
```

## More on `self`

- `self` can refer to different things depending on the context and where it is being called.

We have seen two uses of `self` so far:

1. use `self` when calling setter methods from within the class.
2. use `self` for class method definitions.

```rb
class GoodDog
  attr_accessor :name, :height, :weight

  def initialize(n, h, w)
    self.name   = n
    self.height = h
    self.weight = w
  end

  def change_info(n, h, w)
    self.name   = n
    self.height = h
    self.weight = w
  end

  def info
    "#{self.name} weighs #{self.weight} and is #{self.height} tall."
  end
end
```

- we use `self` whenever we call an instance method from within the class.

What is `self`?

```rb
class GoodDog
  # ... rest of code omitted for brevity

  def what_is_self
    self
  end
end

sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')

p sparky.what_is_self

#  #<GoodDog:0x00007fd8910738b8 @name="Sparky", @height="12 inches", @weight="10 lbs">
```

- `self` is the calling object, in this case, `sparky`.

The other place we use self is when we're **defining class methods**, like this:

```rb
class MyAwesomeClass
  def self.this_is_a_class_method
  end
end
```

> When `self` is prepended to a method definition, it is defining a **class method**

`def self.a_method` is equivalent to `def GoodDog.a_method`

To be clear, from within a class...

- `self`, **inside** of an instance method...
  - references the instance (object) that called the method
    - the calling object.
  - `self.weight=` is the same as `sparky.weight=`, in our example.
- `self`, **outside** of an instance method...
  - references the class
  - can be used to define class methods
    - Therefore if we were to define a name class method, `def self.name=(n)` is the same as `def GoodDog.name=(n)`.

## Inheritance

- when a class inherits from another class, it inherits all of the methods from the parent class.

### Class Inheritance

- uses the `<` symbol to indicate inheritance.

```rb
class Animal
  def speak
    "Hello!"
  end
end

class GoodDog < Animal
end

class Cat < Animal
end

sparky = GoodDog.new
paws = Cat.new
puts sparky.speak           # => Hello!
puts paws.speak             # => Hello!
```

- `GoodDog` and `Cat` are subclasses of `Animal`.
  - `<` indicates that `GoodDog` and `Cat` inherit from `Animal`.
- all the methods from `Animal` are available to `GoodDog` and `Cat` objects.

But what if we want to use the original `speak` method from the `GoodDog` class only. Let's add it back and see what happens.

```rb
class Animal
  def speak
    "Hello!"
  end
end

class GoodDog < Animal
  attr_accessor :name

  def initialize(n)
    self.name = n
  end

  def speak
    "#{self.name} says arf!"
  end
end

class Cat < Animal
end

sparky = GoodDog.new("Sparky")
paws = Cat.new

puts sparky.speak           # => Sparky says arf!
puts paws.speak             # => Hello!
```

> The `speak` method in the `GoodDog` class overrides the `speak` method in the `Animal` class.

### Super

- used to call methods from the parent class.
- searches the method loop-up path for a method with the same name as the method from which `super` is called.

```rb

class Animal
  def speak
    "Hello!"
  end
end

class GoodDog < Animal
  def speak
    super + " from GoodDog class"
  end
end

class Cat < Animal
end

sparky = GoodDog.new
sparky.speak        # => "Hello! from GoodDog class"
paws = Cat.new
paws.speak          # => "Hello!"
```

Common ways to use `super` within `initialize`:

```rb
class Animal
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

class GoodDog < Animal
  def initialize(color)
    super
    @color = color
  end
end

bruno = GoodDog.new("brown") #<GoodDog:0x00007fa9a9814020 @name="brown", @color="brown">
```

When `super` is called with **no arguments** :

- the `super` call passes the `color` argument to the `initialize` method in the `Animal` class.
- as well as `color` to the `Animal` class, resulting in the `@name` instance variable being set to `"brown"`.

When `super` is called with **arguments** (`super(a, b)`):

- arguments are sent up the method lookup path to the parent class.

```rb
class BadDog < Animal
  def initialize(age, name)
    super(name)
    @age = age
  end
end

BadDog.new(2, "bear")        # => #<BadDog:0x007fb40b2beb68 @age=2, @name="bear">
```

There's one last twist. If you call `super()` exactly as shown -- with **parentheses** -- it calls the method in the **superclass** with **no arguments** at all.

If you have a method in your superclass that takes no arguments, this is the safest -- and sometimes the only -- way to call it:

```rb
class Animal
  def initialize
  end
end

class Bear < Animal
  def initialize(color)
    super()
    @color = color
  end
end

bear = Bear.new("black")        # => #<Bear:0x007fb40b1e6718 @color="black">
```

> If you forget to use the parentheses here, Ruby will raise an `ArgumentError` exception since the number of arguments is incorrect.

### Mixing In Modules

- keeps code DRY
- extract common methods to a superclass
  - has a very generic superclass
  - subclasses become more specific

![classes](https://d2aw5xe2jldque.cloudfront.net/books/ruby/images/animal_hierarchy.jpg)

```rb
module Swimmable
  def swim
    "I'm swimming!"
  end
end

class Animal; end

class Fish < Animal
  include Swimmable         # mixing in Swimmable module
end

class Mammal < Animal
end

class Cat < Mammal
end

class Dog < Mammal
  include Swimmable         # mixing in Swimmable module
end

#  Fish and Dog objects can swim, but objects of other classes won't be able to:

sparky = Dog.new
neemo  = Fish.new
paws   = Cat.new

p sparky.swim                 # => I'm swimming!
p neemo.swim                  # => I'm swimming!
p paws.swim                   # => NoMethodError: undefined method `swim' for #<Cat:0x007fc453152308>
```

## Inheritance vs Mixing In Modules

- **Inheritance** is used to model the **is-a** relationship.
  - `GoodDog` is a `Mammal`
  - `GoodDog` is a `Animal`
- **Mixing in Modules** is used to model the **has-a** relationship.
  - known as **interface inheritance**
  - The class doesn't inherit from another type, but instead inherits the interface provided by the mixin module.

Considerations when choosing between inheritance and mixing in modules:

- you can only inherit from **one class**
- you can mix in **multiple modules**
  - as many interfaces as you need

## Private, Protected, and Public Methods

- Access Control is a concept that exists in a number of programming languages
- implemented in Ruby using **access modifiers**

  - `private`
  - `protected`
  - `public`

- `public`
  - accessible by anyone who knows the class name or the objects name
- `private`
  - anything **below** the `private` keyword is not accessible outside the class

```rb
class GoodDog
  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(n, a)
    self.name = n
    self.age = a
  end

  private

  def human_years
    age * DOG_YEARS
  end
end

sparky = GoodDog.new("Sparky", 4)
sparky.human_years


#  returns an error:
#  NoMethodError: private method `human_years' called for
# <GoodDog:0x007f8f431441f8 @name="Sparky", @age=4>
```

- `private` methods are **only** accessible from other methods **in the class**

---

Protected methods are accessible **only** by the class and its **subclasses**.

```rb
class Person
  def initialize(age)
    @age = age
  end

  def older?(other_person)
    age > other_person.age
  end

  protected

  attr_reader :age
end

malory = Person.new(64)
sterling = Person.new(42)

malory.older?(sterling)  # => true
sterling.older?(malory)  # => false

malory.age
  # => NoMethodError: protected method `age' called for #<Person: @age=64>
```