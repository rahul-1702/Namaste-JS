---
sidebar_position: 18
---


# Episode 18: Higher-Order Functions ft. Functional Programming

:::info Important Note
Higher-order functions are regular functions that take one or more functions as arguments and/or return functions as a value from it. They are the foundation of functional programming in JavaScript.
:::

Higher-order functions enable us to write more modular, reusable, and elegant code by treating functions as first-class citizens in JavaScript.

## What is a Higher-Order Function?

A Higher-Order Function (HOF) is a function that either:
- Takes one or more functions as arguments, OR
- Returns a function as its result

Here's a simple example to understand the concept:

```javascript
function x() {
  console.log('Hi');
}

function y(x) {
  x();
}

y(x); // Output: Hi

// y is a higher-order function
// x is a callback function
```

## Problem-Solving Approach: From Imperative to Functional

Let's understand how to approach problems using functional programming principles through a practical example.

### The Problem
We have an array of radius values and need to calculate areas using these radius values and store them in an array.

### First Approach: Imperative Style

```javascript
const radius = [1, 2, 3, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));
```

:::note Initial Solution
This solution works perfectly fine, but what happens when we get a new requirement to calculate circumference? We'll end up duplicating code structure.
:::

### The Code Duplication Problem

Now we need to calculate circumference. Following the same pattern:

```javascript
const radius = [1, 2, 3, 4];

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));
```

:::warning DRY Principle Violation
We are violating the **DRY (Don't Repeat Yourself)** principle. The loop structure and array manipulation logic are identical - only the mathematical operation changes.
:::

## Better Approach: Functional Programming Style

Let's refactor this using higher-order functions and functional programming principles:

```javascript
const radiusArr = [1, 2, 3, 4];

// Logic to calculate area
const area = function (radius) {
    return Math.PI * radius * radius;
}

// Logic to calculate circumference
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

// Higher-order function that accepts operation as parameter
const calculate = function(radiusArr, operation) {
    const output = [];
    for (let i = 0; i < radiusArr.length; i++) {
        output.push(operation(radiusArr[i]));
    }
    return output;
}

console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, circumference));
```

### Benefits of This Approach

- **calculate** is our Higher-Order Function
- **area** and **circumference** are pure functions with single responsibilities
- We've extracted logic into separate, reusable functions
- This demonstrates the beauty of functional programming

:::tip Functional Programming Beauty
We've separated the **what** (mathematical operations) from the **how** (iteration and array manipulation). This makes our code more modular and maintainable.
:::

## Understanding the Map Connection

Our `calculate` function is essentially a **polyfill of the map function**:

```javascript
// These two lines produce the same result:
console.log(radiusArr.map(area));
console.log(calculate(radiusArr, area));
```

The native `map` function works exactly like our `calculate` function - it takes an array and a function, applies that function to each element, and returns a new array with the results.

## Creating Our Own Map Function

Let's convert our `calculate` function into a custom map implementation:

```javascript
// Adding our custom calculate method to Array prototype
Array.prototype.calculate = function(operation) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(operation(this[i]));
    }
    return output;
}

// Usage
console.log(radiusArr.calculate(area));
console.log(radiusArr.calculate(circumference));
```

:::note Polyfill Understanding
This implementation is essentially a **polyfill for the map function**. A polyfill provides functionality that may not be available in older browsers by implementing it manually.
:::

## Higher-Order Functions in Practice

Higher-order functions are everywhere in JavaScript:

**Common Higher-Order Functions:**
- `Array.prototype.map()`
- `Array.prototype.filter()`
- `Array.prototype.reduce()`
- `Array.prototype.forEach()`
- `Array.prototype.find()`
- `setTimeout()` and `setInterval()` (they take callback functions)

## Functional Programming Principles

This episode demonstrates key functional programming concepts:

### 1. **First-Class Functions**
Functions are treated as values - they can be assigned to variables, passed as arguments, and returned from other functions.

### 2. **Pure Functions**
Our `area` and `circumference` functions are pure - they always return the same output for the same input and have no side effects.

### 3. **Higher-Order Functions**
Functions that operate on other functions, either by taking them as arguments or returning them.

### 4. **Function Composition**
Building complex operations by combining simpler functions.

## Real-World Applications

Higher-order functions enable powerful patterns:

- **Data Transformation**: Processing arrays of objects
- **Event Handling**: Callback functions for user interactions
- **Async Programming**: Promises and async/await patterns
- **Middleware**: Express.js middleware functions
- **Decorators**: Adding functionality to existing functions

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on Higher-Order Functions and Functional Programming:

[![Higher-Order Functions YouTube Link](https://img.youtube.com/vi/HkWxvB1RJq0/0.jpg)](https://www.youtube.com/watch?v=HkWxvB1RJq0&ab_channel=AkshaySaini)