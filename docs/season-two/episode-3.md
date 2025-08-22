---
sidebar_position: 3
---


# Episode 3: Creating a Promise, Chaining & Error Handling

```js
const cart = ['shoes', 'pants', 'kurta'];

// Consumer side of promise
const promise = createOrder(cart); // orderId
// We expect this function to return a promise

promise.then(function (orderId) {
  proceedToPayment(orderId);
});


// We've seen this pattern in our previous lesson
// Now let's explore how createOrder is implemented to return a promise
// In other words, let's learn "How to create a Promise" and return it
```

## Producer Side of Promise

```js
function createOrder(cart) {
  // JavaScript provides a Promise constructor for creating promises
  // It accepts a callback function with two parameters: `resolve` & `reject`
  const promise = new Promise(function (resolve, reject) {
    // What are `resolve` and `reject`?
    // These are functions provided by JavaScript to handle success and failure scenarios
    // Now let's implement the `createOrder` logic
    /** Business logic steps:
     * 1. Validate the cart
     * 2. Save to database and retrieve orderId
     */
    // In real scenarios, validateCart would be properly defined
    if (!validateCart(cart)) {
      // If cart validation fails, reject the promise
      const err = new Error('Cart is not Valid');
      reject(err);
    }
    const orderId = '12345'; // Simulated database response
    if (orderId) {
      // Success scenario
      resolve(orderId);
    }
  });
  return promise;
}
```

When `validateCart` returns true, the promise resolves successfully:

```js
const cart = ['shoes', 'pants', 'kurta'];

const promise = createOrder(cart); // orderId
// ❓ What gets printed in the next line?
// It prints Promise {<pending>} - but why?
// Because createOrder takes time to resolve, showing pending status initially
// Once the promise resolves, the `.then` callback executes
console.log(promise);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error('Cart is not Valid');
      reject(err);
    }
    const orderId = '12345';
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}
```

## How do we handle promise rejection?

### Answer: Using `.catch`

```js
const cart = ['shoes', 'pants', 'kurta'];

const promise = createOrder(cart); // orderId

// Consuming the Promise and handling potential errors
promise
  .then(function (orderId) {
    // ✅ Success - resolved promise handling
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    // ⚠️ Failure - rejected promise handling
    console.log(err);
  });

// Creating the Promise
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // If `validateCart` returns false, the promise gets rejected
    // The browser will then throw an error
    if (!validateCart(cart)) {
      const err = new Error('Cart is not Valid');
      reject(err);
    }
    const orderId = '12345';
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}
```

## Understanding Promise Chaining

For this example, we'll assume that after `createOrder` completes, we need to call `proceedToPayment`.

:::info Promise Chaining Rules
- Whatever gets returned from the first `.then` becomes data for the next `.then`
- This pattern continues throughout the chain
- If any promise in the chain gets rejected, execution jumps to the nearest `.catch` block
:::

```js
const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
  .then(function (orderId) {
    // ✅ Success - resolved promise handling
    proceedToPayment(orderId);
    return orderId;
  })
  .then(function (orderId) {
    // Promise chaining continues
    // 💡 We ensure that `proceedToPayment` also returns a promise
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    // Since `proceedToPayment` returns a promise, we can consume it with `.then`
    console.log(paymentInfo);
  })
  .catch(function (err) {
    // ⚠️ Failure - rejected promise handling
    console.log(err);
  });

// Creating the Promise
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // If `validateCart` returns false, the promise gets rejected
    if (!validateCart(cart)) {
      const err = new Error('Cart is not Valid');
      reject(err);
    }
    const orderId = '12345';
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}

function proceedToPayment(cart) {
  return new Promise(function (resolve, reject) {
    // For now, we're simply resolving the promise
    resolve('Payment Successful');
  });
}
```

## What if we want to continue execution despite promise failures?

### Solution: Strategic placement of `.catch` blocks

You can place `.catch` blocks at specific levels where you want to handle failures. Multiple `.catch` blocks are also possible.

Example:

```js
createOrder(cart)
  .then(function (orderId) {
    // ✅ Success - resolved promise handling
    proceedToPayment(orderId);
    return orderId;
  })
  .catch(function (err) {
    // ⚠️ This catch only handles failures from the code above it
    // It won't affect the promise chain below
    console.log(err);
  })
  .then(function (orderId) {
    // Promise chaining continues
    // 💡 We ensure that `proceedToPayment` returns a promise
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    // Since `proceedToPayment` returns a promise, we can consume it with `.then`
    console.log(paymentInfo);
  });
```

:::tip Key Takeaway
Strategic placement of `.catch` blocks allows you to handle errors at specific points in your promise chain while allowing execution to continue for subsequent operations.
:::

---

📺 **Watch Live on YouTube:**  
Click the image below to watch this episode on Promise Chain in JS:

[![promise in Javascript Youtube Link](https://img.youtube.com/vi/U74BJcr8NeQ/0.jpg)](https://www.youtube.com/watch?v=U74BJcr8NeQ&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=4&ab_channel=AkshaySaini)