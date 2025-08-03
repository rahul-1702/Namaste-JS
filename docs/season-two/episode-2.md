---
sidebar_position: 2
---

# Episode 2: Promises

:::info
Promises handle asynchronous operations in JavaScript effectively.
:::

Let's explore how JavaScript handled async operations before Promises existed, and how Promises revolutionized this approach.

Consider an E-Commerce scenario:

```js
const cart = ['shoes', 'pants', 'kurta'];

// These two functions are asynchronous and depend on each other
const orderId = createOrder(cart);
proceedToPayment(orderId);

// Using Callbacks (The old way)
// Here, createOrder must first complete the order creation, then execute our callback
createOrder(cart, function () {
  proceedToPayment(orderId);
});
// This creates an `Inversion of Control` problem
```

## How can we solve this problem?

### Solution: Use Promises

Let's modify `createOrder` to return a promise and store that promise in a variable.

Think of a Promise as a container that starts empty but will eventually hold data from the `createOrder` function.

Since `createOrder` runs asynchronously, we can't predict how long it'll take to complete.

Initially, `createOrder` returns `undefined`. After execution completes (say, 5 seconds later), the `orderId` becomes available and replaces the `undefined` value.

### Here's what happens:
When `createOrder` executes, it immediately returns a promise object containing `undefined`. JavaScript continues executing other code. Once `createOrder` finishes and produces the `orderId`, that value automatically fills our promise object.

## How do we know when the result is ready?

### Answer: 
We attach a callback function to the promise using `then`, which triggers automatically when the result becomes available.

```js
const cart = ['shoes', 'pants', 'kurta'];

const promiseRef = createOrder(cart);
// promiseRef now has access to the `then` method

// {data: undefined}
// Initially undefined, so the code below won't execute
// Once execution completes and promiseRef contains data, the following line triggers automatically

promiseRef.then(function () {
  proceedToPayment(orderId);
});
```

## Why are Promises better than callbacks?

Previously, we passed functions to other functions and trusted them to execute our callbacks properly.

With Promises, we attach callback functions to promise objects instead.

There's a crucial difference between passing a function versus attaching a function.

Promises guarantee they'll execute the attached function exactly once when data becomes available. No more, no less.

Earlier we described promises as objects with empty data, but Promises offer much more functionality.

Let's examine a real promise object.

The `fetch` API makes HTTP requests and returns promises.

We'll call the public GitHub API to retrieve data: https://api.github.com/users/rahul-1702

```js
// Calling the public GitHub API
const URL = 'https://api.github.com/users/rahul-1702';
const user = fetch(URL);
// 'user' is now a promise
console.log(user); // Promise {<Pending>}

/** KEY OBSERVATIONS:
 * Promise objects contain three main properties:
 * `prototype`, `promiseState`, and `promiseResult`
 * `promiseResult` stores the data we discussed earlier
 * Initially, `promiseResult` contains `undefined`
 *
 * `promiseResult` will hold the API response data
 * `promiseState` indicates the current promise status - starts as `pending`, becomes `fulfilled` later
 */

/**
 * When this line runs, `fetch` makes the API call and immediately returns a `pending` promise
 * JavaScript doesn't wait for fulfillment and continues to the next line
 * The console shows the pending promise immediately
 * NOTE: Chrome browser shows inconsistent behavior - it displays pending initially, but expanding the log reveals fulfilled status because Chrome updates logs when promises resolve
 * Once fulfilled, data appears in promiseResult within the body as ReadableStream format, which requires extraction
 */
```

Now we can attach callbacks to this response using `.then`:

```js
const URL = 'https://api.github.com/users/rahul-1702';
const user = fetch(URL);

user.then(function (data) {
  console.log(data);
});
// This demonstrates proper Promise usage
// Promises guarantee single resolution - either success or failure
/**
    Promises exist in three states:

    pending: initial state, neither fulfilled nor rejected
    fulfilled: operation completed successfully
    rejected: operation failed
 */
```

:::tip Important Concept
Promise objects are immutable.
Once a promise fulfills and contains data, you can pass it around without worrying about data mutation. You cannot directly modify the `user` promise object - you must use `.then` to access its data.
:::

## Interview Guide

### What is a Promise?

A Promise object serves as a placeholder that will eventually contain the result of an asynchronous operation.

Think of it as a container for future values.

### Official Definition:
# A Promise represents the eventual completion or failure of an asynchronous operation.

We've solved the Inversion of Control problem, but another issue remains: callback hell.

```js
// Callback Hell Example
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInf) {
    showOrderSummary(paymentInf, function (balance) {
      updateWalletBalance(balance);
    });
  });
});
// This code grows horizontally, creating a "pyramid of doom"
// Callback hell makes code ugly and difficult to maintain

// 💡 Promises solve this through `Promise Chaining`
// Here's Promise Chaining in action:
createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    updateWalletBalance(balance);
  });

// ⚠️ Common Mistake
// Forgetting to return promises in Promise chains
// Remember: the promise/data from one .then becomes input for the next .then
// Correct approach:
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    return showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });

// Use arrow functions for better readability
```

---

📺 **Watch Live on YouTube:**  
Click the image below to watch this episode on Promise in JS:

[![promise in Javascript Youtube Link](https://img.youtube.com/vi/ap-6PPAuK1Y/0.jpg)](https://www.youtube.com/watch?v=ap-6PPAuK1Y&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=3&ab_channel=AkshaySaini)
