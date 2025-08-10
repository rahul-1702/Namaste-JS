# Episode 17: Trust Issues with setTimeout()

:::info Important Note
setTimeout with a timer of 5 seconds sometimes does not exactly guarantee that the callback function will execute exactly after 5 seconds. The actual execution time depends on the call stack's availability.
:::

The setTimeout function is one of the most commonly used Web APIs in JavaScript, but it comes with some surprising behavior that every developer should understand.

Let's examine this fundamental issue with a detailed code example and understand why it happens.

<!-- ![setTimeout Issue Demo](../../static/img/settimeout_issue.jpg) -->

## The setTimeout Trust Issue

Consider the following code and observe its behavior:

```javascript
console.log('Start');
setTimeout(function cb() {
  console.log('Callback');
}, 5000);
console.log('End');
// Millions of lines of code to execute

// Output: setTimeout doesn't guarantee that the callback function 
// will be called exactly after 5s. Maybe 6, 7 or even 10 seconds!
// It all depends on the call stack. Why?
```

## Step-by-Step Execution Flow

Let's trace through exactly what happens during code execution:

![setTimeout Execution Flow Demo](../../static/img/callstack_block.jpg)

### Phase 1: Initial Setup
1. **Global Execution Context (GEC)** is created and pushed into the call stack
2. `console.log('Start')` is executed and "Start" is printed to console
3. When `setTimeout` is encountered, the callback function `cb()` is **registered in Web API's environment**
4. **Timer is attached** to the callback and started (5-second countdown begins)
5. JavaScript doesn't wait - it immediately moves to the next line

### Phase 2: Continued Execution
6. `console.log('End')` is executed and "End" is printed to console
7. After "End", assume we have 1 million lines of code that takes **10 seconds** to finish execution
8. **GEC remains in the call stack** for the entire duration (10 seconds)

:::note Background Process
While the call stack is busy executing code, the 5-second timer continues running in the background. After 5 seconds, the timer expires and the callback function `cb()` is pushed to the **Callback Queue**, waiting for its turn to execute.
:::

### Phase 3: The Wait
9. **Event Loop** continuously checks if the call stack is empty
10. Since GEC is still in the stack (busy with 1M lines of code), `cb()` cannot be moved from Callback Queue to Call Stack
11. **Though setTimeout was set for 5 seconds, it waits for 10 seconds** until the call stack becomes empty
12. Only when GEC is popped after 10 seconds, `cb()` is finally pushed to call stack and executed immediately

<!-- ![setTimeout Wait Demo](../../static/img/settimeout_wait.jpg) -->

## The Concurrency Model

This behavior is part of JavaScript's **[Concurrency Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)**. This is the fundamental logic behind setTimeout's "trust issues."

<!-- ![Concurrency Model Demo](../../static/img/concurrency_model.jpg) -->

:::warning The Golden Rule of JavaScript
**Do not block the main thread** - JavaScript is a single-threaded language with only one call stack. Blocking operations can severely impact performance and user experience.
:::

## Blocking the Main Thread Example

In the example below, we demonstrate how blocking the main thread affects setTimeout behavior:

<!-- ![Main Thread Blocking Demo](../../static/img/blocked_thread.jpg) -->

**Key Observations:**
- setTimeout guarantees that it will take **at least** the given timer duration to execute the code
- It does **not** guarantee exact timing
- The actual execution depends on call stack availability

## Understanding JavaScript's Nature

JavaScript is a **synchronous, single-threaded language** with unique characteristics:

<!-- ![JS Thread Model Demo](../../static/img/js_thread_model.jpg) -->

- **Single Thread**: Runs all pieces of code with just one thread
- **Interpreter-like**: Runs code very fast inside browsers without waiting for compilation
- **JIT Compilation**: Just-in-Time compilation provides performance benefits
- **Asynchronous Capabilities**: Despite being single-threaded, it can perform async operations through Web APIs

## Special Case: setTimeout with 0ms

What happens when we set the timeout to 0 seconds?

```javascript
console.log('Start');
setTimeout(function cb() {
  console.log('Callback');
}, 0);
console.log('End');

// Even though timer = 0ms, cb() has to go through the queue
// Process: Registers callback in Web API environment → 
// moves to callback queue → executes once call stack is empty
// Output: Start End Callback
```

<!-- ![Zero Timeout Demo](../../static/img/zero_timeout.jpg) -->

:::tip Practical Use Case
Setting `setTimeout` with 0ms can be used to **defer a less important function** slightly, allowing more important functions to execute first. This is a common pattern for managing execution priority.
:::

## setTimeout Execution Guarantees

Understanding what setTimeout actually promises:

<!-- ![setTimeout Guarantees Demo](../../static/img/settimeout_guarantees.jpg) -->

**What setTimeout Guarantees:**
- ✅ Callback will execute **at least** after the specified delay
- ✅ Callback will be queued after the timer expires

**What setTimeout Does NOT Guarantee:**
- ❌ Exact timing of execution
- ❌ Immediate execution when timer expires
- ❌ Execution if call stack is blocked

## Real-World Implications

This behavior has important implications for real-world applications:

<!-- ![Real World Impact Demo](../../static/img/realworld_impact.jpg) -->

- **Performance**: Long-running synchronous code blocks setTimeout execution
- **User Experience**: UI updates and animations can be delayed
- **Timing-Critical Operations**: Cannot rely on setTimeout for precise timing
- **Resource Management**: Understanding helps in better code architecture

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on setTimeout trust issues:

[![setTimeout Trust Issues YouTube Link](https://img.youtube.com/vi/nqsPmuicJJc/0.jpg)](https://www.youtube.com/watch?v=nqsPmuicJJc&ab_channel=AkshaySaini)