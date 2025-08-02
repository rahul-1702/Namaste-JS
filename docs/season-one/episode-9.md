---
sidebar_position: 9
---

# Episode 9: Block Scope & Shadowing in JS

## What is a Block?

A **Block** (also called a *compound statement*) is used to group multiple JavaScript statements together into a single unit. We create blocks using curly braces `{...}`.

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
  // Here let and const are hoisted in Block scope,
  // While var is hoisted in Global scope.
}
```

### Why Do We Need Blocks?

Blocks allow us to group statements together, which is essential for:
- Control structures (if, for, while statements)
- Function bodies
- Creating isolated scopes for variables

## Understanding Block Scope

Let's examine how different variable declarations behave within blocks:

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10
console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c); // Uncaught ReferenceError: c is not defined
```

### Why This Behavior?

The key difference lies in **where variables are stored in memory**:

- **`let` and `const`**: Stored in a separate memory space called **block scope**
- **`var`**: Stored in the **global scope**

:::info Memory Allocation
During hoisting:
- `b` and `c` are initialized as `undefined` in **block memory space**
- `a` is initialized as `undefined` in **global memory space**
- `let` and `const` variables can only be accessed within their block
- `var` variables can be accessed from anywhere in their scope
:::

This is why we say **`let` and `const` are block-scoped** while **`var` is function-scoped**.

## What is Shadowing?

Shadowing occurs when a variable declared inside a block has the same name as a variable in an outer scope. The inner variable "shadows" (hides) the outer one.

### Shadowing with var:

```js
var a = 100;
{
  var a = 10; // Same name as global var
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10 (not 100 as expected!)
```

### What Happened Here?

:::warning Important Behavior
Since both `var a` declarations exist in the same **global scope**, the block assignment `var a = 10` actually **modifies** the original global variable instead of creating a new one. This is because `var` doesn't respect block boundaries.
:::

### Shadowing with let and const:

```js
let b = 100;
{
  var a = 10;
  let b = 20; // Creates a new variable in block scope
  const c = 30;
  console.log(b); // 20
}
console.log(b); // 100 (original value preserved)
```

### Why Different Behavior?

The two `b` variables exist in **separate memory spaces**:
- Outer `b` (100): Stored in **Script scope**
- Inner `b` (20): Stored in **Block scope**

Since they're in different memory spaces, they don't interfere with each other.

## Shadowing in Functions

The same shadowing principles apply to functions:

```js
const c = 100;
function x() {
  const c = 10; // Shadows the outer c
  console.log(c); // 10
}
x();
console.log(c); // 100 (original value preserved)
```

## Illegal Shadowing

Not all shadowing combinations are allowed. JavaScript has rules about which types can shadow others:

### Example of Illegal Shadowing:

```js
let a = 20;
{
  var a = 20; // Uncaught SyntaxError: Identifier 'a' has already been declared
}
```

### Shadowing Rules:

| Outer Variable | Inner Variable | Result |
|----------------|----------------|---------|
| `var` | `let`/`const` | ✅ **Valid** - Block scope shadows function scope |
| `let`/`const` | `var` | ❌ **Invalid** - Function scope can't shadow block scope |
| `let`/`const` | `let`/`const` | ✅ **Valid** - Block scope shadows block scope |
| `var` | `var` | ✅ **Valid** - Same scope, just reassignment |

### Why This Restriction?

```js
let a = 20;
{
  var a = 20; // ❌ Not allowed
}
```

This is illegal because:
- `let a` creates a variable in the outer scope
- `var a` would try to create a variable in the function scope
- Since `var` is function-scoped, it would conflict with the existing `let a`

### Valid Shadowing in Functions:

```js
let a = 20;
function x() {
  var a = 20; // ✅ Valid - different function scope
  console.log(a); // 20
}
x();
console.log(a); // 20
```

This works because `var a` inside the function creates a variable in the **function's scope**, not the same scope as the outer `let a`.

## Scope Behavior in Arrow Functions

:::tip Arrow Functions
All scope rules that apply to regular functions also apply to arrow functions. The scoping behavior remains consistent.
:::

```js
let x = 10;
const arrowFunc = () => {
  let x = 20; // Valid shadowing
  console.log(x); // 20
};
arrowFunc();
console.log(x); // 10
```

## Key Takeaways

### Variable Scope Summary:
- **`var`**: Function-scoped, can be accessed outside blocks
- **`let`/`const`**: Block-scoped, cannot be accessed outside their block
- **Shadowing**: Inner variables can hide outer variables with the same name
- **Illegal Shadowing**: `var` cannot shadow `let`/`const` in the same scope level

### Best Practices:
1. **Prefer `let`/`const`** for better scope control
2. **Be aware of shadowing** - it can make code confusing
3. **Use meaningful variable names** to avoid accidental shadowing
4. **Understand scope boundaries** to predict variable accessibility

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on Block Scope & Shadowing in Javascript:

[![Block Scope & Shadowing in JS Youtube Link](https://img.youtube.com/vi/lW_erSjyMeM/0.jpg)](https://www.youtube.com/watch?v=lW_erSjyMeM&ab_channel=AkshaySaini)