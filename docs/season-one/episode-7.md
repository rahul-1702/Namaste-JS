---
sidebar_position: 7
---


# Episode 7: The Scope Chain, Scope & Lexical Environment

:::info Core Concept
Scope in JavaScript is directly connected to Lexical Environment. Understanding this relationship is crucial for mastering variable accessibility in JavaScript.
:::

## Understanding Scope Through Examples

Let's examine different scenarios to understand how JavaScript handles variable access:

### Case 1: Accessing Global Variables

```js
// CASE 1
function a() {
  console.log(b); // 10
  // Instead of printing undefined, it prints 10
  // Function a can access variable b from outside its scope
}
var b = 10;
a();
```

### Case 2: Nested Function Access

```js
// CASE 2
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();
```

### Case 3: Local Variable Precedence

```js
// CASE 3
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
a();
```

### Case 4: Scope Accessibility Rules

```js
// CASE 4
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b); // Error: b is not defined
```

## Analyzing the Results

Let's break down what happens in each case:

### Case 1 Analysis:
Function `a` successfully accesses variable `b` from the global scope, demonstrating that functions can reach outside their local environment.

### Case 2 Analysis:  
The output is 10, showing that even deeply nested functions can access global scope variables through the scope chain.

### Case 3 Analysis:
The output is 100, proving that local variables with the same name take precedence over global variables - this is called **variable shadowing**.

### Case 4 Analysis:
- Function `c` can access variable `b` from function `a`'s scope
- However, the global execution context cannot access local variables from function `a`
- This demonstrates **one-way accessibility** in the scope chain

## Execution Context and Memory Structure

Here's how the execution contexts are structured in memory:

```
Call Stack = [GEC, a(), c()]

Memory allocation:
c() = [[lexical environment pointer → a()]]
a() = [b:10, c:{}, [lexical environment pointer → GEC]]
GEC = [a:{}, [lexical environment pointer → null]]
```

![Lexical Scope Explaination](../../static/img/lexical1.jpg 'Lexical Scope')
![Lexical Scope Explaination](../../static/img/lexical2.jpg 'Lexical Scope')

## What is Lexical Environment?

### Definition:
## Lexical Environment = Local Memory + Parent's Lexical Environment

### Key Components:
- **Local Memory**: Contains variables and functions declared in the current scope
- **Reference to Parent**: Points to the lexical environment of the parent scope
- **Chain Formation**: Creates a chain that enables variable lookup

## Understanding "Lexical"

The term "lexical" refers to hierarchy and order - specifically, the physical placement of code in your source file.

### Lexical Positioning Example:

```js
function a() {
  function c() {
    // logic here
  }
  c(); // c is lexically inside a
} // a is lexically inside global execution
```

## The Scope Chain Process

When JavaScript needs to find a variable, it follows this process:

1. **Check Local Scope**: Look in the current execution context
2. **Move Up the Chain**: If not found, check the parent's lexical environment  
3. **Continue Climbing**: Keep moving up until the variable is found or global scope is reached
4. **Handle Not Found**: If variable isn't found anywhere, throw a ReferenceError

:::tip The Scope Chain
The process of searching through parent scopes one by one is called the **scope chain** or **lexical environment chain**.
:::

## Lexical (Static) Scope Explained

Lexical scope determines variable accessibility based on where variables and functions are declared in your source code.

### Visual Representation:

```js
Global {
    Outer {
        Inner {
            // Inner can access Outer and Global variables
        }
        // Outer can access Global variables
    }
    // Global scope - outermost level
}
// Inner is surrounded by the lexical scope of Outer
```

## How Lexical Environment is Created

Every time an execution context is created, JavaScript also creates a corresponding lexical environment that gets referenced in the local execution context's memory space.

### The Creation Process:
1. **Execution Context Created** → **Lexical Environment Created**
2. **Local Memory Allocated** → **Parent Reference Established** 
3. **Scope Chain Formed** → **Variable Lookup Enabled**

## Key Takeaways

:::warning Important Rule
An inner function can access variables from outer functions, even when nested deeply. However, outer functions cannot access variables from inner functions.
:::

### Summary Points:
- **Inner → Outer Access**: ✅ Always possible
- **Outer → Inner Access**: ❌ Never possible  
- **Variable Shadowing**: Local variables hide global ones with the same name
- **Scope Chain**: JavaScript's method for finding variables through parent scopes
- **Lexical Positioning**: Physical code location determines scope relationships

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on Scope Chain in Javascript:

[![The Scope Chain, Scope & Lexical Environment Youtube Link](https://img.youtube.com/vi/uH-tVP8MUs8/0.jpg)](https://www.youtube.com/watch?v=uH-tVP8MUs8&ab_channel=AkshaySaini)