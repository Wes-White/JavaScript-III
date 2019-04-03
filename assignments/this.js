/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding is when this is what is left in the dot. ("this.name")
* 2. Explicit Binding of this occurs when .call(), .apply(), or .bind() are used on a function.
* 3. Window Binding of this is the global context whenever a function is invoke. (a global object)
* 4. New Binding When called on a function, .bind() sets a this context and returns a new function of the same name with a bound this context. So we are "binding" the object to our function. 
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

let sayHello = function () {
    console.log('Hello my name is ' + this.name)
  }

  let wes = {
    name: 'Wes'
  }

 let intro = sayHello.bind(wes)
  
 intro()


// Principle 4

// code example for Explicit Binding

const wes = { 
    name: 'Wes'
}

let movies = ['Overboard', 'Dirty Dancing', 'Interstellar']

function myFav (movie1, movei2, movie3){ 
   console.log(`Hello my name is ${this.name} and my favorite movies are ${movies}`)
}

myFav.apply(wes,movies)