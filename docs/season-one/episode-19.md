---
sidebar_position: 19
---


# Episode 19: map, filter & reduce

:::info Important Note
map, filter & reduce are Higher Order Functions. They are the most powerful and commonly used array methods in JavaScript that enable functional programming patterns.
:::

These three methods form the foundation of functional programming in JavaScript and are essential tools for array manipulation and data transformation.

## Map Function

The `map()` method is used to **transform an array**. It creates a new array with the results of calling a function for every array element.

**Syntax:** `const output = arr.map(function)` 
- The function parameter tells map what transformation to apply on each element

### Map Examples

**Task 1: Double the array elements**

```javascript
const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

const doubleArr = arr.map(double);
console.log(doubleArr); // [10, 2, 6, 4, 12]

// Internally map runs the double function for each element 
// and creates a new array with transformed values
```

**Task 2: Triple the array elements**

```javascript
const arr = [5, 1, 3, 2, 6];

function triple(x) {
  return x * 3;
}

const tripleArr = arr.map(triple);
console.log(tripleArr); // [15, 3, 9, 6, 18]
```

**Task 3: Convert array elements to binary**

```javascript
const arr = [5, 1, 3, 2, 6];

// Method 1: Separate function
function binary(x) {
  return x.toString(2);
}
const binaryArr = arr.map(binary);

// Method 2: Inline function
const binaryArr = arr.map(function binary(x) {
  return x.toString(2);
});

// Method 3: Arrow function (most concise)
const binaryArr = arr.map((x) => x.toString(2));
console.log(binaryArr); // ["101", "1", "11", "10", "110"]
```

:::note Map Functionality
Map function is **mapping** each and every value and **transforming** it based on the given condition. It always returns a new array with the same length as the original array.
:::

## Filter Function

The `filter()` method is used to **filter values inside an array**. It creates a new array consisting of only those elements that satisfy a condition.

### Filter Examples

**Task: Filter odd values from array**

```javascript
const array = [5, 1, 3, 2, 6];

// Method 1: Separate function
function isOdd(x) {
  return x % 2; // Returns truthy for odd numbers
}
const oddArr = array.filter(isOdd);
console.log(oddArr); // [5, 1, 3]

// Method 2: Arrow function
const oddArr = array.filter((x) => x % 2);
console.log(oddArr); // [5, 1, 3]
```

:::tip Filter Behavior
Filter function creates a new array and stores only those values which **evaluate to true** when passed through the condition function. The resulting array length can be different from the original array.
:::

## Reduce Function

The `reduce()` method takes all values of an array and **reduces them to a single output**. It's the most powerful and flexible of the three methods.

### Reduce Examples

**Task 1: Calculate sum of array elements**

```javascript
const array = [5, 1, 3, 2, 6];

// Non-functional programming approach
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(array)); // 17

// Functional programming approach using reduce
const sumOfElem = array.reduce(function (accumulator, current) {
  // current: represents each array element
  // accumulator: stores the result from previous iterations
  accumulator = accumulator + current;
  return accumulator;
}, 0); // 0 is the initial value for accumulator

console.log(sumOfElem); // 17
```

**Task 2: Find maximum value in array**

```javascript
const array = [5, 1, 3, 2, 6];

// Non-functional programming approach
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(array)); // 6

// Using reduce
const output = array.reduce((acc, current) => {
  if (current > acc) {
    acc = current;
  }
  return acc;
}, 0);
console.log(output); // 6

// More semantic version (renaming acc to max for clarity)
const output = array.reduce((max, current) => {
  if (current > max) {
    max = current;
  }
  return max;
}, 0);
console.log(output); // 6
```

:::note Reduce Parameters
- **Accumulator**: The accumulated result from previous iterations
- **Current**: The current element being processed
- **Initial Value**: The starting value for the accumulator (second parameter to reduce)
:::

## Advanced Examples with Complex Data

Let's work with more complex data structures to understand the power of these methods:

```javascript
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];
```

### Map with Objects: Get Full Names

```javascript
// Get array of full names: ["Alok Raj", "Ashish Kumar", ...]
const fullNameArr = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullNameArr);
// Output: ["Alok Raj", "Ashish Kumar", "Ankit Roy", "Pranav Mukherjee"]
```

### Reduce for Data Aggregation

```javascript
// Get count of people by age: {23: 1, 29: 2, 50: 1}
const report = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc; // Always return the updated accumulator
}, {});

console.log(report); // {23: 1, 29: 2, 50: 1}
```


## Function Chaining

One of the most powerful features is the ability to **chain** these methods together:

```javascript
// Get first names of all people whose age is less than 30
const users = [
  { firstName: 'Alok', lastName: 'Raj', age: 23 },
  { firstName: 'Ashish', lastName: 'Kumar', age: 29 },
  { firstName: 'Ankit', lastName: 'Roy', age: 29 },
  { firstName: 'Pranav', lastName: 'Mukherjee', age: 50 },
];

// Method 1: Function chaining with filter and map
const output = users
  .filter((user) => user.age < 30)    // Filter users under 30
  .map((user) => user.firstName);     // Extract first names

console.log(output); // ["Alok", "Ashish", "Ankit"]

// Method 2: Using only reduce (homework challenge solution)
const output = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output); // ["Alok", "Ashish", "Ankit"]
```

### Chaining Benefits

- **Readability**: Code reads like natural language
- **Modularity**: Each method has a single responsibility
- **Performance**: Modern JavaScript engines optimize these chains
- **Immutability**: Original arrays remain unchanged

:::tip Function Chaining Best Practices
- Chain methods in logical order: filter first, then transform with map
- Use reduce when you need complex transformations or aggregations
- Keep individual transformation functions pure and simple
- Consider performance for very large datasets
:::

## Comparison Summary

| Method | Purpose | Input Array | Output | Use Case |
|--------|---------|-------------|---------|----------|
| **map** | Transform | `[1,2,3]` | `[2,4,6]` | Convert/transform each element |
| **filter** | Select | `[1,2,3,4]` | `[2,4]` | Keep elements matching condition |
| **reduce** | Aggregate | `[1,2,3,4]` | `10` | Combine all elements to single value |

---

📺 **Watch Live On YouTube:**  
Click the image below to watch this episode on map, filter & reduce:

[![map, filter & reduce YouTube Link](https://img.youtube.com/vi/zdp0zrpKzIE/0.jpg)](https://www.youtube.com/watch?v=zdp0zrpKzIE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&ab_channel=AkshaySaini)