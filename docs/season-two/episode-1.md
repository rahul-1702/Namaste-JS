---
sidebar_position: 1
---

# Episode 1: Callback

Callbacks have two distinct aspects:

1. ## The Benefits of Callbacks
   Callbacks are essential for writing asynchronous code in JavaScript

2. ## The Problems with Callbacks
   Using callbacks can create serious issues:
   - Callback Hell
   - Inversion of Control

Understanding these callback problems is crucial for mastering Promises in our next lesson.

:::info Key Concept
JavaScript operates as a synchronous, single-threaded language. It can only execute one task at a time using a single call-stack. The JavaScript engine processes code immediately without waiting.
:::

```js
console.log('Namaste');
console.log('JavaScript');
console.log('Season 2');
// Output:
// Namaste
// JavaScript
// Season 2

// 💡 This prints instantly because "Time, tide & JavaScript wait for none."
```

### What if we need to delay code execution?

We can use callbacks to achieve this:

```js
console.log('Namaste');
setTimeout(function () {
  console.log('JavaScript');
}, 5000);
console.log('Season 2');
// Output:
// Namaste
// Season 2
// JavaScript (after 5 seconds)

// 💡 Here we're delaying execution using setTimeout's callback approach
```

## 🛒 E-Commerce Application Example

Imagine an e-commerce website where a user places an order. They've added shoes, pants, and kurta to their cart and are now checking out. The backend logic might look like this:

```js
const cart = ['shoes', 'pants', 'kurta'];
// Order placement requires two steps:
// 1. Create the Order
// 2. Process Payment

// Basic structure might look like:
api.createOrder();
api.proceedToPayment();
```

However, payment can only happen after order creation - there's a dependency. How do we handle this dependency?

Callbacks provide the solution:

```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});
// 💡 Here, `createOrder` first creates the order, then executes `api.proceedToPayment()` through the callback
```

Let's add more complexity. After payment completion, we need to display the order summary by calling `api.showOrderSummary()`, which depends on `api.proceedToPayment()`.

Our code evolves to:

```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});
```

Now suppose we need to update the user's wallet, which depends on `showOrderSummary`:

```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
// 💡 Welcome to Callback Hell
```

## What is Callback Hell?

When working with large codebases containing multiple interdependent APIs, we fall into callback hell. This code structure becomes difficult to maintain and is also called the ## Pyramid of Doom.

Now let's explore `Inversion of Control` - a critical concept for understanding Promises.

:::warning Inversion of Control
Inversion of control means losing control over your code when using callbacks.
:::

Let's examine this through our example:

```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});

// 💡 We're creating an order and blindly trusting `createOrder` to execute `proceedToPayment`

// 💡 This is risky because `proceedToPayment` contains critical code, yet we're completely trusting `createOrder` to handle it properly

// 💡 When we pass a function as a callback, we become dependent on the parent function to execute it. This dependency is called `inversion of control`. What happens if the parent function breaks? What if it was written by another developer? What if the callback runs twice, or never runs at all?

// 💡 In our next session, we'll learn how to solve these problems
```

:::tip Important Note
Asynchronous programming in JavaScript exists because callbacks exist.
:::

Learn more at `http://callbackhell.com/`

---

📺 **Watch Live on YouTube:**  
Click the image below to watch this episode on Callback in JS:

[![callback Youtube Link](https://img.youtube.com/vi/yEKtJGha3yM/0.jpg)](https://www.youtube.com/watch?v=yEKtJGha3yM&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX)