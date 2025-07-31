---
sidebar_position: 5
---


# Episode 5: SHORTEST JS Program | window & this keyword!

## What is the Shortest JavaScript Program?

The shortest JavaScript program is simply an empty file. Even without any code to execute, the JavaScript engine works extensively behind the scenes.

### What happens when you run an empty JavaScript file?

- JavaScript creates a global execution context along with its global memory component (variable environment)
- The JavaScript engine generates a global object called "Window" in browser environments, containing numerous built-in functions and variables
- You can access this global object using either the `Window` keyword or the `this` keyword at the global level
- At the global level, `this === window` is always true
- Any variables you declare in the global scope automatically become properties of the global object
- Different JavaScript runtime environments use different names for the global object (browsers use `window`, Node.js uses `global`)

### Code Example:

```js
var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10
```

### Understanding Global vs Local Objects

:::info Advanced Concept
The global object remains unique and shared across all execution contexts within the same JavaScript environment (browser or Node.js). 

However, when functions execute, they create their own local context with a `variable object` or `activation object`. This local object exists specifically for that function's execution context and contains:
- Local variables
- Function arguments  
- Function declarations within that scope

Unlike the global object, you cannot directly access the activation context (variable object) from outside its execution context.
:::

:::tip Key Takeaway
Even the simplest JavaScript program (an empty file) triggers significant behind-the-scenes activity, including the creation of the global execution context and the global object.
:::

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on Shortest JS Program:

[![Shortest JS Program, window & this keyword Youtube Link](https://img.youtube.com/vi/QCRpVw2KXf8/0.jpg)](https://www.youtube.com/watch?v=QCRpVw2KXf8&ab_channel=AkshaySaini)
