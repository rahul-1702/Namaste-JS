---
sidebar_position: 10
---


# Episode 10: Closures in JS

## What is a Closure?

### Definition:
## A closure is a function bundled together with its lexical scope environment.

Think of a closure as a "backpack" that a function carries with it, containing all the variables from its surrounding scope that it might need.

## Understanding Closures Through Examples

### Basic Closure Example:

```js
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z); // Shows the entire code of function y
z(); // 7
```

### What's Happening Here?

1. **Function `x` executes** and creates variable `a = 7`
2. **Function `y` is defined** inside `x` and can access `a`
3. **Function `y` is returned** from `x`
4. **The closure is formed**: `y` + its lexical environment (which includes `a`)
5. **Variable `z` stores the closure**, not just the function
6. **When `z()` is called**, it still remembers and can access `a = 7`

:::info Key Insight
When `y` is returned, it doesn't just carry the function code. It carries the entire closure - the function along with its lexical scope. This allows `z()` to access `a` even after `x()` has finished executing.
:::

### Nested Closures Example:

```js
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b); // Can access both a and b
    }
    y();
  }
  x();
}
z(); // Output: 7 900
```

### How the Scope Chain Works:

When `y()` needs to access variables:
1. **Check local scope**: Does `y` have `a` or `b`? No.
2. **Check parent scope**: Does `x` have `a`? Yes! Does `x` have `b`? No.
3. **Check grandparent scope**: Does `z` have `b`? Yes!
4. **Access successful**: Both variables are found and logged.

## Closure in Simple Terms

### Practical Definition:
# A closure is a function that retains access to variables from its outer scope even after the outer function has finished executing.

This means:
- **Memory persistence**: Variables from outer scopes stay alive
- **Scope retention**: The function remembers where it was created
- **Access continuation**: Inner functions can use outer variables anytime

## Real-World Closure Example

```js
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (independent counter)
console.log(counter1()); // 3
```

Each counter maintains its own `count` variable through closure!

![Closure Explaination](../../static/img/closure.jpg 'Closure')

## Advantages of Closures

### 1. **Module Design Pattern**
Create private variables and methods:

```js
function createModule() {
  let privateVariable = 0;
  
  return {
    increment: () => ++privateVariable,
    decrement: () => --privateVariable,
    getValue: () => privateVariable
  };
}

const module = createModule();
console.log(module.getValue()); // 0
module.increment();
console.log(module.getValue()); // 1
// privateVariable is not directly accessible
```

### 2. **Data Hiding and Encapsulation**
Keep sensitive data private while providing controlled access:

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: (amount) => balance += amount,
    withdraw: (amount) => balance >= amount ? balance -= amount : "Insufficient funds",
    getBalance: () => balance
  };
}
```

### 3. **Currying**
Transform functions to accept arguments one at a time:

```js
function multiply(x) {
  return function(y) {
    return x * y;
  };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // 10
```

### 4. **Memoization**
Cache function results for performance:

```js
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = args.toString();
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}
```

### 5. **setTimeout and Async Operations**
Maintain state in asynchronous contexts:

```js
function delayedGreeting(name) {
  setTimeout(function() {
    console.log(`Hello, ${name}!`); // Closure preserves 'name'
  }, 1000);
}
```

## Disadvantages of Closures

### 1. **Memory Consumption**
Closures can consume more memory because they keep references to their outer scope:

```js
function heavyFunction() {
  const heavyData = new Array(1000000).fill('data');
  
  return function() {
    console.log('Function executed');
    // heavyData remains in memory due to closure
  };
}
```

### 2. **Memory Leaks**
Improper use can lead to memory leaks:

```js
function problematicClosure() {
  const element = document.getElementById('button');
  const data = new Array(1000000);
  
  element.onclick = function() {
    // This closure keeps 'data' in memory even if not used
  };
}
```

### 3. **Performance Impact**
Excessive closures can slow down your application:
- Increased memory usage
- Slower garbage collection
- Potential browser freezing with too many closures

## Best Practices for Closures

:::tip Memory Management Tips

### 1. **Clean up when possible**
```js
function createHandler() {
  let data = getHeavyData();
  
  return function handler() {
    processData(data);
    data = null; // Clean up when done
  };
}
```

### 2. **Avoid unnecessary closures**
```js
// ❌ Unnecessary closure
function processItems(items) {
  return items.map(function(item) {
    return item * 2;
  });
}

// ✅ Better approach
function processItems(items) {
  return items.map(item => item * 2);
}
```

### 3. **Be mindful of scope**
Only close over variables you actually need.
:::

## Key Takeaways

### Understanding Closures:
- **Definition**: Function + its lexical environment
- **Purpose**: Maintain access to outer scope variables
- **Persistence**: Variables stay alive even after outer function returns
- **Power**: Enables advanced patterns like modules, currying, and data encapsulation

### Practical Applications:
- **Data Privacy**: Hide implementation details
- **State Management**: Maintain state across function calls
- **Event Handling**: Preserve context in callbacks
- **Functional Programming**: Enable currying and partial application

### Memory Considerations:
- **Be aware**: Closures consume more memory
- **Clean up**: Release references when possible
- **Monitor**: Watch for memory leaks in long-running applications

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on Closure in Javascript:

[![Closure in JS Youtube Link](https://img.youtube.com/vi/qikxEIxsXco/0.jpg)](https://www.youtube.com/watch?v=qikxEIxsXco&ab_channel=AkshaySaini)