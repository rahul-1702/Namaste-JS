---
sidebar_position: 13
---


# Episode 13: First Class Functions ft. Anonymous Functions

:::info
Functions are heart ♥ of Javascript.
:::

## What is Function Statement?

Below way of creating function are function statement.

```javascript
function a() {
  console.log('Hello');
}
a(); // Hello
```

## What is Function Expression?

Assigning a function to a variable. Function acts like a value.

```javascript
var b = function () {
  console.log('Hello');
};
b();
```

## Difference between Function Statement and Expression

The major difference between these two lies in **Hoisting**.

```javascript
a(); // "Hello A"
b(); // TypeError

function a() {
  console.log('Hello A');
}

var b = function () {
  console.log('Hello B');
};
```

:::note Why does this happen?
During memory creation phase `a` is created in memory and function assigned to `a`. But `b` is created like a variable (`b: undefined`) and until code reaches the `function()` part, it is still undefined. So it cannot be called.
:::

## What is Function Declaration?

Other name for **function statement**.

## What is Anonymous Function?

A function without a name.

```javascript
function () {
} // this is going to throw Syntax Error - Function Statement requires function name.
```

:::warning Important Points
- They don't have their own identity. So an anonymous function without code inside it results in an error.
- Anonymous functions are used when functions are used as values eg. the code sample for **function expression** above.
:::

## What is Named Function Expression?

Same as Function Expression but function has a name instead of being anonymous.

```javascript
var b = function xyz() {
  console.log('b called');
};

b(); // "b called"
xyz(); // Throws ReferenceError: xyz is not defined.
```

:::caution
`xyz` function is not created in global scope. So it can't be called.
:::

## Parameters vs Arguments

```javascript
var b = function (param1, param2) {
  // labels/identifiers are parameters
  console.log('b called');
};

b(arg1, arg2); // arguments - values passed inside function call
```

## What is First Class Function aka First Class Citizens?

We can pass functions inside a function as arguments and/or return a function (HOF). These abilities are altogether known as First class function. It is a programming concept available in some other languages too.

```javascript
var b = function (param1) {
  console.log(param1); // prints " f() {} "
};
b(function () {});

// Other way of doing the same thing:
var b = function (param1) {
  console.log(param1);
};

function xyz() {}
b(xyz); // same thing as prev code

// we can return a function from a function:
var b = function (param1) {
  return function () {};
};

console.log(b()); // we log the entire function within b.
```

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on First Class Function in JS:

[![First Class Function Youtube Link](https://img.youtube.com/vi/SHINoHxvTso/0.jpg)](https://www.youtube.com/watch?v=SHINoHxvTso&ab_channel=AkshaySaini)