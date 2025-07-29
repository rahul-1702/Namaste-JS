---
sidebar_position: 3
---

# Episode 3: Hoisting in JavaScript!

> Note: Everything in this episode is explained intuitively. If you find it difficult to grasp, consider watching Episode 2 first.

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the memory creation phase. This allows us to access them even before their actual lines in the code.

(Same knowledge, now in easy-to-digest points 🙃)

- Variables are initialized as `undefined`, and function declarations are stored as-is during memory allocation.
- Hoisting allows you to use variables and invoke functions before they appear in the code.
- Using a variable before it's assigned results in `undefined`, not an error—unless it's not declared at all, which throws a "not defined" error.
- Function declarations are fully hoisted, but function expressions and arrow functions are hoisted like variables and initially set to `undefined`.

> Memory Aid: <br />
> Variable declarations are scanned and made `undefined`<br />
> Function declarations are scanned and made available

## Examples of Hoisting:

### Example 1:

```js
getName(); // Namaste Javascript
console.log(x); // undefined
var x = 7;
function getName() {
  console.log("Namaste Javascript");
}
```

<details> <summary>Try to understand by yourself</summary> <h3>Below is Technical Language (Use this in Interviews)</h3> <ul> <li>The function getName is successfully called before its declaration due to full hoisting of function declarations.</li> <li>The variable x is also hoisted, but initialized with undefined, so the log outputs undefined.</li> </ul> </details>

### Example 2:

```js
getName(); // Namaste JavaScript
console.log(x); // Uncaught ReferenceError: x is not defined
console.log(getName); // f getName(){ console.log("Namaste JavaScript"); }
function getName() {
  console.log("Namaste JavaScript");
}
```

<details> <summary>Try to understand by yourself</summary> <h3>Below is Technical Language (Use this in Interviews)</h3> <ul> <li>The function getName still executes because it is hoisted.</li> <li>The variable x throws a ReferenceError because it was never declared.</li> <li>console.log(getName) logs the entire function definition: <br /> <code> f getName() &#123; console.log("Namaste JavaScript"); &#125; </code> </li> </ul> </details>

### Example 3:

```js
getName(); // Namaste JavaScript
getName(); // Uncaught TypeError: getName is not a function
console.log(getName);
var getName = function () {
	console.log('Namaste JavaScript');
};
// The code won't execute as the first line throws a TypeError.
```

<details> <summary>Try to understand by yourself</summary> <h3>Below is Technical Language (Use this in Interviews)</h3> <ul> <li>This example uses a function expression assigned to a variable.</li> <li>Calling getName before the assignment results in a TypeError because it’s treated like a variable, initially set to undefined.</li> <li>console.log(getName) outputs undefined since that’s the value during the hoisting phase.</li> <li>Execution stops at the TypeError, and the assignment never happens.</li> </ul> </details>


> `Note:` It's important to understand the distinction between function declarations and function expressions when dealing with hoisting. Function declarations are fully hoisted, while function expressions behave like variables and are hoisted with an initial value of undefined.


📺 **Watch Live on YouTube:**  
Click the image below to watch this episode on Hoisting in JS:

[![Execution Context Youtube Link](https://img.youtube.com/vi/Fnlnw8uY6jo/0.jpg)](https://www.youtube.com/watch?v=Fnlnw8uY6jo&ab_channel=AkshaySaini)
