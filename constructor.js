// constructor function
/** A constructor is a special function that creates and initializes an 
object instance of a class. In JavaScript, a constructor gets called when
an object is created using the new keyword. The purpose of a constructor 
is to create a new object and set values for any existing object properties. */

function Person (person_name) {

     this.name = person_name,
     
     this.greet = function () {
         return (this.name);
     }
 }
 
 
 
 const person1 = new Person('John');
 const person2 = new Person('lucky');
 
 console.log(person1.name); 
 console.log(person2.name); 
 
