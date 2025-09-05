# Event Bubbling and Capturing

## Introduction

In the DOM (Document Object Model), events propagate through elements in two main phases: **capturing** and **bubbling**. Understanding these phases is essential for effective event handling in JavaScript.

---

## Event Propagation Phases

### 1. Capturing Phase (Trickling Down)

- The event starts from the `window` and travels down to the target element.
- Also known as the "capture phase" or "trickling phase".
- Listeners registered with `{ capture: true }` are triggered during this phase.

### 2. Target Phase

- The event reaches the target element.
- Event listeners on the target element are executed.

### 3. Bubbling Phase

- The event bubbles up from the target element back to the `window`.
- Listeners registered with `{ capture: false }` (default) are triggered during this phase.

---

## Example

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

```js
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
}, false); // Bubbling phase

document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
}, false); // Bubbling phase
```

**Order of logs when button is clicked:**
1. "Child clicked"
2. "Parent clicked"

---

## Using Capturing

```js
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked (capturing)');
}, true); // Capturing phase
```

**Order of logs when button is clicked:**
1. "Parent clicked (capturing)"
2. "Child clicked"

---

## Stopping Propagation

- Use `event.stopPropagation()` to prevent further propagation in either phase.

```js
document.getElementById('child').addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Child clicked');
});
```

---

## Summary

- **Capturing:** Event travels from root to target.
- **Bubbling:** Event travels from target back to root.
- Use the `capture` option to control when your handler runs.
- Use `stopPropagation()` to control event flow.

---

📺 **Watch Live on YouTube:**   
Click the image below to watch this episode on Event bubbling and capturing:

[![Execution Context Youtube Link](https://i.ytimg.com/vi/aVSf0b1jVKk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLm_4dahpXhH8kqPiuJgAfoOyB6Q)](https://youtu.be/aVSf0b1jVKk?si=aCaH2bV8Ej5nYzcf)
