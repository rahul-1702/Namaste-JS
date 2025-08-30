---
sidebar_position: 1
---

# Async vs Defer - Docs

## Introduction

When including JavaScript files in HTML, the `async` and `defer` attributes control how scripts are loaded and executed. Understanding these helps optimize page performance.

## `async` Attribute

- Scripts with `async` are downloaded in parallel with the HTML parsing.
- Execution happens as soon as the script is downloaded, pausing HTML parsing.
- Use for independent scripts that do not rely on other scripts or DOM content.

```html
<script src="script.js" async></script>
```

## `defer` Attribute

- Scripts with `defer` are also downloaded in parallel with HTML parsing.
- Execution is deferred until after the HTML is fully parsed.
- Maintains the order of scripts as they appear in the HTML.
- Ideal for scripts that depend on the DOM being ready.

```html
<script src="script.js" defer></script>
```

## Comparison Table

| Attribute | Download | Execution | Order | Use Case |
|-----------|----------|-----------|-------|----------|
| async     | Parallel | Immediately after download | Unordered | Independent scripts |
| defer     | Parallel | After HTML parsing | Ordered | DOM-dependent scripts |

## Summary

- Use `async` for scripts that do not depend on other scripts or the DOM.
- Use `defer` for scripts that need the DOM to be fully loaded or must run in order.

