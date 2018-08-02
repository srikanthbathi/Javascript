# Javascript

typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type

The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined 


You cannot use typeof to determine if a JavaScript object is an array (or a date).


JavaScript evaluates expressions from left to right. Different sequences can produce different results:

JavaScript evaluates expressions from left to right. Different sequences can produce different results:

var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

Difference Between Undefined and Null
Undefined and null are equal in value but different in type:
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true


Primitive Data
A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:

string
number
boolean
undefined


Explicit Function Binding
The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument.

You can read more about call() and apply() later in this tutorial.

In this example, when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1:


HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.



