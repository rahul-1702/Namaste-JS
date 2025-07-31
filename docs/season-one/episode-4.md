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
## [Curious to See This in Action? 👀 Paste the Code Here! 🔗](https://ui.dev/javascript-visualizer)

1. The code starts with `var x = 1;`, which declares a variable `x` in the global execution context and assigns it the value `1`.
2. The function `a()` is then called, creating a new execution context specific to `a()`.
3. Inside `a()`, the statement `var x = 10;` declares a new `x` that exists only within the local scope of `a()`, and it's initialized with `10`.
4. The `console.log(x);` inside `a()` prints the local `x`, which is `10`.
5. After `a()` completes, its execution context is removed from the call stack, and control returns to the global context.
6. Next, the function `b()` is invoked, leading to the creation of a new execution context for it.
7. Within `b()`, `var x = 100;` declares another local `x`, separate from both the global and `a()`'s `x`, and assigns it the value `100`.
8. The `console.log(x);` inside `b()` prints this local `x`, which is `100`.
9. Once `b()` finishes, its context is also popped off the call stack, returning again to the global scope.
10. Finally, `console.log(x);` in the global scope is executed. Since there’s no local variable shadowing it, JavaScript uses the global `x`, which still holds the value `1`.
11. So, the console logs `1` as the final output.

![Reference-Image](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DGoh2eLn6nzskdQb9rHWxQ.jpeg)

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on how Functions work in Javascript:

[![Execution Context Youtube Link](https://img.youtube.com/vi/gSDncyuGw0s/0.jpg)](https://www.youtube.com/watch?v=gSDncyuGw0s&ab_channel=AkshaySaini)
