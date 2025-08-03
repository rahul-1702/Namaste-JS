---
sidebar_position: 11
---

# Episode 11: setTimeout + Closures Interview Question

:::tip Famous Quote
"Time, tide and JavaScript wait for none."
:::

## Understanding setTimeout with Closures

Let's start with a basic example to understand how setTimeout interacts with closures:

```js
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log('Namaste Javascript');
}
x();
// Output:
// Namaste Javascript
// 1 (after waiting 3 seconds)
```

### What We Might Expect vs What Actually Happens

**Expected behavior**: JavaScript waits 3 seconds, prints 1, then prints the string.

**Actual behavior**: JavaScript prints the string immediately, waits 3 seconds, then prints 1.

### Why This Happens

The setTimeout mechanism works as follows:

1. **Closure Formation**: The function inside setTimeout forms a closure with variable `i`
2. **Timer Registration**: setTimeout registers the callback with a 3000ms timer
3. **Non-blocking Execution**: JavaScript doesn't wait and immediately moves to the next line
4. **String Output**: "Namaste Javascript" gets printed right away
5. **Timer Completion**: After 3000ms, the callback function executes and prints `i`

:::info How setTimeout Works
setTimeout doesn't pause JavaScript execution. Instead, it schedules the callback function to run after the specified delay while JavaScript continues executing the remaining code.
:::

## The Classic Interview Challenge

### Problem Statement:
**Print 1 after 1 second, 2 after 2 seconds, 3 after 3 seconds, 4 after 4 seconds, 5 after 5 seconds**

### The Intuitive (But Wrong) Approach:

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log('Namaste Javascript');
}
x();
// Output:
// Namaste Javascript
// 6
// 6  
// 6
// 6
// 6
```

### Why Does This Print 6 Five Times?

The issue stems from how closures work with `var`:

1. **Loop Execution**: The for loop runs completely first
2. **Closure Reference**: All 5 setTimeout callbacks form closures with the **same reference** to variable `i`
3. **Variable State**: By the time the loop finishes, `i` equals 6
4. **Timer Callbacks**: When setTimeout callbacks execute, they all reference the same `i`, which is now 6
5. **Result**: All callbacks print 6 instead of their intended values

:::warning The Closure Trap
The callbacks don't capture the **value** of `i` at each iteration. Instead, they capture the **reference** to `i`. Since all callbacks share the same reference, they all see the final value of `i`.
:::

## Solution 1: Using `let` (Block Scope)

The simplest fix is to replace `var` with `let`:

```js
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log('Namaste Javascript');
}
x();
// Output:
// Namaste Javascript
// 1 (after 1 second)
// 2 (after 2 seconds)
// 3 (after 3 seconds)
// 4 (after 4 seconds)
// 5 (after 5 seconds)
```

### Why This Works:

- **Block Scope**: `let` creates a new variable `i` for each iteration
- **Individual Closures**: Each setTimeout callback forms a closure with its own copy of `i`
- **Preserved Values**: Each callback remembers its specific value of `i`

## Solution 2: Using `var` with Function Wrapper

What if the interviewer specifically asks you to solve it using `var`?

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i); // Create a new scope for each iteration
  }
  console.log('Namaste Javascript');
}
x();
// Output:
// Namaste Javascript  
// 1 (after 1 second)
// 2 (after 2 seconds)
// 3 (after 3 seconds)
// 4 (after 4 seconds)
// 5 (after 5 seconds)
```

### How This Solution Works:

1. **Function Wrapper**: The `close()` function creates a new scope for each iteration
2. **Parameter Passing**: Each call to `close(i)` passes the current value of `i` as a parameter
3. **New Variable**: Inside `close()`, the parameter `i` is a new variable with the passed value
4. **Individual Closures**: Each setTimeout callback now closes over its own copy of `i`

## Alternative Solutions

### Solution 3: Using Immediately Invoked Function Expression (IIFE)

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    (function(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    })(i);
  }
  console.log('Namaste Javascript');
}
```

### Solution 4: Using bind()

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function(i) {
      console.log(i);
    }.bind(null, i), i * 1000);
  }
  console.log('Namaste Javascript');
}
```

## Key Learning Points

### Understanding the Problem:
- **Variable Reference vs Value**: Closures capture references, not values
- **Loop Completion**: Loops finish before async callbacks execute
- **Shared State**: Multiple closures can share the same variable reference

### Solution Strategies:
- **Block Scope (`let`)**: Creates new variables for each iteration
- **Function Scope**: Wrap setTimeout in a function to create new scope
- **IIFE**: Immediately invoked functions create isolated scopes
- **Binding**: Use bind() to attach specific values to functions

:::warning Interview Insight
This question tests your understanding of:
- How closures work with variable references
- The asynchronous nature of setTimeout
- Different scoping mechanisms in JavaScript
- Creative problem-solving with scope manipulation
:::

## Practical Applications

Understanding this concept helps with:
- **Event Handling**: Attaching event listeners in loops
- **Async Operations**: Managing state in asynchronous code
- **Module Patterns**: Creating private variables and methods
- **Performance Optimization**: Avoiding memory leaks in closures

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on setTimeout + Closures Interview Question in Javascript:

[![setTimeout + Closures Interview Question in JS Youtube Link](https://img.youtube.com/vi/eBTBG4nda2A/0.jpg)](https://www.youtube.com/watch?v=eBTBG4nda2A&ab_channel=AkshaySaini)