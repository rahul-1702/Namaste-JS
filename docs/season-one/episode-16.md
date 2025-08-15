---
sidebar_position: 16
---


# Episode 16: JS Engine Exposed, Google's V8 Architecture

:::info Important Note
JavaScript runs literally everywhere from smart watches to robots to browsers because of the JavaScript Runtime Environment (JRE). The JRE is like a big container which has everything required to run JavaScript code.
:::

The JavaScript Runtime Environment consists of a JS Engine (❤️ of JRE), set of APIs to connect with outside environment, event loop, Callback queue, Microtask queue and much more.

Browsers can execute JavaScript code because they have the JavaScript Runtime Environment built into them.

![JS Runtime Environment Demo](../../static/img/compilor.jpg)

## ECMAScript and JavaScript Engines

**ECMAScript** is the governing body of JavaScript. It has set of rules which are followed by all JavaScript engines across different browsers and platforms.

![JS Engines Demo](../../static/img/compilor-demo.gif)

Popular JavaScript Engines include:
- **Chakra** (Microsoft Edge)
- **SpiderMonkey** (Firefox) - The first JavaScript engine created by JavaScript's creator himself
- **V8** (Google Chrome) - Currently one of the fastest and most optimized engines

## What is a JavaScript Engine?

JavaScript Engine is **not a machine**. It's software written in low-level languages (like C++) that takes in high-level JavaScript code and converts it into low-level machine code that computers can understand.

![JS Engine Architecture Demo](../../static/img/v8.png)

## Three Phases of Code Execution

Code inside JavaScript Engine passes through 3 main steps: **Parsing**, **Compilation** and **Execution**

### 1. Parsing

During parsing, code is broken down into tokens and converted into an Abstract Syntax Tree (AST).

- **Tokenization**: In `let a = 7`, the tokens are: `let`, `a`, `=`, `7`
- **Syntax Parser**: Takes code and converts it into an AST (Abstract Syntax Tree)
- **AST**: A JSON-like structure with all key values like type, start, end, body etc.

:::note AST Explorer
You can visualize how your code gets converted into AST at astexplorer.net - it converts any line of JavaScript code into its corresponding Abstract Syntax Tree representation.
:::

### 2. Compilation

JavaScript uses **Just-in-Time (JIT) Compilation** - a hybrid approach that uses both interpreter and compiler.

**Key Points about JavaScript Compilation:**
- Compilation and execution go hand in hand
- The AST goes to interpreter which converts high-level code to bytecode
- While interpreting, compiler works simultaneously to compile and form optimized code during runtime
- JavaScript used to be only interpreted in old times, but now has both compiler and interpreter

:::tip Does JavaScript Really Compile?
The answer is a loud **YES**. JavaScript is now a JIT compiled language - it's the best of both worlds, combining the advantages of both interpretation and compilation.
:::

### 3. Execution

Execution requires 2 main components:

- **Memory Heap**: Place where all memory is stored and allocated
- **Call Stack**: Same call stack we learned about in previous episodes
- **Garbage Collector**: Uses an algorithm called **Mark and Sweep** to clean up unused memory

## Google's V8 Engine Architecture

Different companies use different JavaScript engines, each trying to make theirs the best and fastest.

**Google's V8 Engine Components:**
- **Ignition**: The interpreter component
- **TurboFan**: The optimizing compiler
- **Orinoco**: The garbage collector

The V8 engine follows the same three-phase approach but with highly optimized implementations of each component.

## How Different Engines Compete

Companies continuously work to make their JavaScript engines faster and more efficient:

- Each engine has its own unique optimizations
- V8 is known for its speed and optimization techniques
- SpiderMonkey focuses on standards compliance
- Chakra emphasizes integration with Microsoft technologies

## Memory Management and Garbage Collection

The **Mark and Sweep** algorithm used by garbage collectors works in two phases:

1. **Mark Phase**: Identifies which objects are still reachable/in use
2. **Sweep Phase**: Removes objects that are no longer needed, freeing up memory

This automatic memory management is crucial for preventing memory leaks in JavaScript applications.

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on JavaScript Engine Architecture:

[![JS Engine YouTube Link](https://img.youtube.com/vi/2WJL19wDH68/0.jpg)](https://www.youtube.com/watch?v=2WJL19wDH68&ab_channel=AkshaySaini)