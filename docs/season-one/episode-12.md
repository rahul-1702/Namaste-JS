---
sidebar_position: 12
---


# Episode 12: Famous Interview Questions ft. Closures

## Q1: What is Closure in JavaScript?

**Answer**: A function along with reference to its outer environment together forms a **closure**. In other words, a closure is a combination of a function and its lexical scope bundled together.

```js
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  } // inner forms a closure with outer
  return inner;
}
outer()(); // 10 
// over here first `()` will return inner function and then using second `()` to call inner function
```

:::info Key Concept
The inner function has access to variables in the outer function's scope even after the outer function has finished executing.
:::

## Q2: Will the below code still form a closure?

```js
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
outer()(); // 10
```

**Answer**: Yes, because inner function forms a closure with its outer environment so sequence doesn't matter. JavaScript's hoisting mechanism ensures that the variable `a` is available to the inner function regardless of declaration order.

## Q3: Changing var to let, will it make any difference?

```js
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()(); // 10
```

**Answer**: It will still behave the same way. Both `var` and `let` create closures when accessed by inner functions.

## Q4: Will inner function have access to outer function argument?

```js
function outer(str) {
  let a = 10;
  function inner() {
    console.log(a, str);
  }
  return inner;
}
outer('Hello There')(); // 10 "Hello There"
```

**Answer**: Inner function will now form closure and will have access to both `a` and `str`. Function parameters are part of the function's lexical scope.

## Q5: In below code, will inner form closure with **outest**?

```js
function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
outest()('Hello There')(); // 10 20 "Hello There"
```

**Answer**: Yes, inner will have access to all its outer environment. Closures can span multiple levels of nested functions.

## Q6: Output of below code and explanation?

```js
function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
let a = 100;
outest()('Hello There')(); // 10 20 "Hello There"
```

**Answer**: Still the same output, the inner function will have reference to inner `a`, so conflicting name won't matter here. If it wouldn't have found `a` inside outer function then it would have went more outer to find `a` and thus have printed 100. So, it tries to resolve variable in scope chain and if `a` wouldn't have been found it would have given reference error.

:::tip Scope Chain Resolution
JavaScript resolves variables by looking from the innermost scope outward. The closest variable declaration takes precedence.
:::

## Q7: Advantages of Closure

Closures provide several powerful programming patterns:

- **Module Design Pattern** - Creating private and public methods
- **Currying** - Partial function application  
- **Memoize** - Caching function results for performance
- **Data hiding and encapsulation** - Private variables
- **setTimeouts etc.** - Maintaining state in asynchronous operations

## Q8: Discuss more on Data hiding and encapsulation

### Without Closures - Data Exposure Problem

```js
// without closures
var count = 0;
function increment(){
  count++;
}
// in the above code, anyone can access count and change it.
```

:::warning Security Issue
The `count` variable is globally accessible and can be modified by any part of the program, leading to potential bugs and security issues.
:::

### With Closures - Basic Data Hiding

```js
// (with closures) -> put everything into a function
function counter() {
  var count = 0;
  function increment(){
    count++;
  }
}
console.log(count); // this will give referenceError as count can't be accessed. 
// So now we are able to achieve hiding of data
```

### Functional Approach with Closures

```js
//(increment with function using closure) true function
function counter() {
  var count = 0;
  return function increment(){
    count++;
    console.log(count);
  }
}
var counter1 = counter(); //counter function has closure with count var.
counter1(); // increments counter

var counter2 = counter();
counter2(); // here counter2 is whole new copy of counter function and it won't impact the output of counter1
```

:::info Independent Instances
Each call to `counter()` creates a new closure with its own `count` variable. `counter1` and `counter2` are completely independent.
:::

### Constructor Pattern for Scalability

```js
// Above code is not good and scalable for say, when you plan to implement decrement counter at a later stage.
// To address this issue, we use *constructors*

// Adding decrement counter and refactoring code:
function Counter() {
//constructor function. Good coding would be to capitalize first letter of constructor function.
  var count = 0;
  this.incrementCounter = function() { //anonymous function
    count++;
    console.log(count);
  }
   this.decrementCounter = function() {
    count--;
    console.log(count);
  }
}

var counter1 = new Counter();  // new keyword for constructor fun
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
// returns 1 2 1
```

:::tip Constructor Benefits
- **Scalable**: Easy to add new methods like increment, decrement
- **Encapsulated**: Private `count` variable  
- **Object-oriented**: Clean API with multiple methods
- **Best Practice**: Constructor function names start with capital letter
:::

## Q9: Disadvantage of closure?

**Answer**: Overconsumption of memory when using closure as every time those closed over variables are not garbage collected till program expires.
So when creating many closures, more memory is accumulated and this can create memory leaks if not handled.

### Understanding Garbage Collection

**Garbage collector**: Program in JS engine or browser that frees up unused memory. In high level languages like C++ or JAVA, garbage collection is left to the programmer, but in JS engine it's done implicitly.

```js
function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}

var y = a(); // y is a copy of b()
y();

// Once a() is called, its element x should be garbage collected ideally. 
// But fun b has closure over var x. So mem of x cannot be freed. 
// Like this if more closures formed, it becomes an issue. 
// To tackle this, JS engines like v8 and Chrome have smart garbage collection mechanisms. 
// Say we have var x = 0, z = 10 in above code. When console log happens, x is printed as 0 
// but z is removed automatically.
```

:::warning Memory Management
Creating many closures without proper cleanup can lead to memory leaks. Modern JavaScript engines optimize this, but it's still important to be mindful of closure usage in performance-critical applications.
:::

:::info Smart Garbage Collection
Modern JavaScript engines like V8 (Chrome) have intelligent garbage collection mechanisms. If you have multiple variables in a closure but only use some of them, unused variables can still be garbage collected automatically.
:::

## Key Takeaways

Understanding closures is crucial for JavaScript mastery:

1. **Closures** preserve access to outer scope variables even after the outer function returns
2. **Declaration order** doesn't affect closure formation due to hoisting  
3. **Variable shadowing** follows scope chain resolution rules
4. **Data encapsulation** is one of the most practical uses of closures
5. **Memory management** should be considered when creating many closures
6. **Modern engines** optimize garbage collection for closures automatically

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on Closures Interview Questions:

[![Closures Interview Question in JS Youtube Link](https://img.youtube.com/vi/t1nFAMws5FI/0.jpg)](https://www.youtube.com/watch?v=t1nFAMws5FI&ab_channel=AkshaySaini)