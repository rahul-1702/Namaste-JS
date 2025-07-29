---
sidebar_position: 4
---


# Episode 4: How functions work in JS & Variable Environment

## How functions work in JavaScript ❤️

- Whenever a function is invoked in JavaScript, it creates its own execution context.
- Each function maintains a separate variable environment (also called Memory Component), allowing you to define variables scoped only to that function.
- Variables declared inside a function can only be accessed within that function, unless returned or captured through closures (which we'll cover in a future episode).
- Due to hoisting, you can call a function before its definition. The declarations are moved to the top during the memory creation phase.

## Variable Environment

- A variable environment is part of the execution context where all variables and functions are stored during runtime.
- Every execution context has its own isolated memory, which holds only the variables and functions relevant to that particular context.
- When you try to access a variable, JavaScript first looks in the current environment. If not found, it searches in the outer environments up to the global one.
- This forms a chain of variable environments, enabling lexical scoping — where variable access is determined by where the code was written.

## Code Flow in terms of Execution Context

```js
var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.
console.log(x);

function a() {
  var x = 10; // local scope because of separate execution context
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

//Output
// 10
// 100
// 1
```
