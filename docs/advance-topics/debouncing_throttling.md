---
sidebar_position: 2
---


# Debouncing vs Throttling in JavaScript

Debouncing and throttling are techniques to control how often a function is executed, especially in response to events like scrolling, resizing, or typing.

---

## Debouncing

**Debouncing** ensures a function is only called after a certain period of inactivity. Useful for events like search input or window resizing.

### Example

```js
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Usage: Only logs after user stops typing for 500ms
const input = document.getElementById('search');
input.addEventListener('input', debounce(() => {
    console.log('Searching...');
}, 500));
```

---

## Throttling

**Throttling** ensures a function is called at most once in a specified interval, regardless of how many times the event occurs.

### Example

```js
function throttle(fn, interval) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Usage: Logs scroll position at most once every 200ms
window.addEventListener('scroll', throttle(() => {
    console.log(window.scrollY);
}, 200));
```

---

## Summary Table

| Technique   | When to Use                | Behavior                                 |
|-------------|---------------------------|------------------------------------------|
| Debouncing  | On bursty events (input)  | Executes after inactivity                |
| Throttling  | On frequent events (scroll)| Executes at regular intervals            |

---

## Visual Difference

- **Debounce:** Waits for silence, then fires.
- **Throttle:** Fires at regular intervals, ignoring extra calls.

---

📺 **Watch Live on YouTube:**   
Click the image below to watch this episode on Debouncing vs Throttling:

[![Execution Context Youtube Link](https://i.ytimg.com/vi/tJhA0DrH5co/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBF5nFhz_s8WCAJ1a0qcb0zLwzYYQ)](https://youtu.be/tJhA0DrH5co?si=IDqNkwqJrEVKLbMa)
