# Function Currying in JavaScript

## What is Currying?

Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

## Why Use Currying?

- **Reusability:** Create specialized functions from general ones.
- **Readability:** Makes code more declarative and expressive.
- **Partial Application:** Pre-fill some arguments and reuse the function.

## Example: Without Currying

```js
function add(a, b, c) {
    return a + b + c;
}

add(1, 2, 3); // 6
```

## Example: With Currying

```js
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

curriedAdd(1)(2)(3); // 6
```

## Currying Using ES6 Arrow Functions

```js
const curriedAdd = a => b => c => a + b + c;
console.log(curriedAdd(1)(2)(3)); // 6
```

## Practical Use Case

```js
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // 10
```

## Currying with `bind`

```js
function greet(greeting, name) {
    return `${greeting}, ${name}!`;
}

const sayHelloTo = greet.bind(null, 'Hello');
console.log(sayHelloTo('Rahul')); // Hello, Rahul!
```

## Summary

- Currying transforms a function so it can be called with fewer arguments at a time.
- Useful for creating reusable and composable code.

---

📺 **Watch Live on YouTube:**   
Click the image below to watch this episode on Function Currying:

[![Function Currying Youtube Link](https://i.ytimg.com/vi/vQcCNpuaJO8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC9jQKZkIpZUX1C68-NiFMR5gYiIg)](https://youtu.be/vQcCNpuaJO8?si=EJ3X1eXJHk3bX3mW)
