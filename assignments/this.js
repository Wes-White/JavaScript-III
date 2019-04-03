/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this.name);

// Principle 2

// code example for Implicit Binding

const wes = { 
    name: 'Wes', 
    'age': 32, 
    speak(){ 
        return `Hello my name is ${this.name} and I am ${this.age} years old.`
    }
}

console.log(wes.speak())


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding