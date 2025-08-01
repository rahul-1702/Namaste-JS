---
sidebar_position: 6
---


# Episode 6: `undefined` vs `not defined` in JS

## How JavaScript Handles Memory Allocation

JavaScript performs memory allocation for variables and functions before executing any code. This happens during the creation phase of the execution context.

### Key Points About Memory Allocation:

- Memory space gets reserved for variables even before the first line of code runs
- Variables that haven't received values yet automatically contain `undefined`
- `undefined` serves as a placeholder or default value until you assign something else
- This behavior is part of JavaScript's hoisting mechanism

## Understanding `undefined` vs `not defined`

These two concepts are fundamentally different and often confuse developers:

### `undefined`:
- Memory has been allocated for the variable
- No value has been assigned to it yet
- The variable exists in memory but holds the default `undefined` value

### `not defined`:
- The variable hasn't been declared anywhere in the code
- No memory allocation has occurred for this variable
- Attempting to access it throws a ReferenceError

## `undefined` is Not Empty

:::warning Common Misconception
`undefined` is not the same as empty, null, or absence of value. It's a specific JavaScript keyword that occupies its own memory space and represents a distinct state.
:::

Think of `undefined` as JavaScript's way of saying: *"I've prepared a space for this variable, but you haven't told me what to put in it yet."*

## Practical Examples

```javascript
// Example 1: Variable declared but not assigned
var a; // Memory allocated for 'a', contains undefined
console.log(a); // Output: undefined

// Example 2: Another undefined scenario
var x;
console.log(x); // Output: undefined

// Example 3: Variable not declared at all
console.log(y); // Output: ReferenceError: y is not defined
```

## JavaScript's Type System

JavaScript operates as a loosely typed (or weakly typed) language, meaning:

- Variables aren't bound to specific data types
- You can reassign variables to different types freely
- The same variable can hold different data types throughout its lifetime

```javascript
var dynamicVariable = 5;           // Number
dynamicVariable = true;            // Boolean
dynamicVariable = 'hello';         // String
// All of these assignments are perfectly valid
```

:::tip Best Practice
Avoid manually assigning `undefined` to variables. Let JavaScript handle `undefined` naturally. If you need to represent "no value," consider using `null` instead, which explicitly indicates intentional absence of value.
:::

## Why This Matters

Understanding the difference between `undefined` and `not defined` helps you:
- Debug errors more effectively
- Write more predictable code
- Understand JavaScript's execution process better
- Avoid common pitfalls in variable handling

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on undefined vs not defined in Javascript:

[![undefined vs not defined in JS Youtube Link](https://img.youtube.com/vi/B7iF6G3EyIk/0.jpg)](https://www.youtube.com/watch?v=B7iF6G3EyIk&ab_channel=AkshaySaini)