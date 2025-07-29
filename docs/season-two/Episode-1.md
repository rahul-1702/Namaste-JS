---
sidebar_position: 1 
---

# Episode 1: Callback

Callbacks are foundational to asynchronous programming in JavaScript, and they come with both advantages and challenges.

---

## 🔄 Two Sides of Callback

1. **The Good**: Callbacks are crucial for handling asynchronous tasks in JavaScript.
2. **The Bad**: Relying heavily on callbacks can lead to:
   - **Callback Hell**
   - **Inversion of Control**

Understanding the downsides is essential before diving into Promises in the upcoming session.

> 💡 JavaScript is a synchronous, single-threaded language. It can execute only one operation at a time. With just one call stack, it runs code sequentially without waiting.

```js
console.log('Namaste');
console.log('JavaScript');
console.log('Season 2');

// Output:
// Namaste
// JavaScript
// Season 2

// 💡 It is printing so quickly because — "Time, tide & JavaScript waits for none."
```

