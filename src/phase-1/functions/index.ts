/**
 * Functions in TypeScript
 * This file demonstrates different ways to define and use functions in TypeScript
 */

// 1. Basic Function with Type Annotations
function add(x: number, y: number): number {
  return x + y;
}

// 2. Arrow Function
const multiply = (x: number, y: number): number => x * y;

// 3. Function with Optional Parameters
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// 4. Function with Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// 5. Function with Union Types
function processValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString();
}

// 6. Function with Generic Types
function identity<T>(value: T): T {
  return value;
}

// 7. Function with Multiple Generic Types
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// 8. Function with Type Guards
function isString(value: any): value is string {
  return typeof value === "string";
}

// 9. Function with Overloads
function reverse(x: string): string;
function reverse(x: number): number;
function reverse(x: string | number): string | number {
  if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
  return -x;
}

// 10. Function with Callback
function fetchData(callback: (data: string) => void): void {
  setTimeout(() => {
    callback("Data fetched successfully!");
  }, 1000);
}

// Example Usage
console.log("Basic function:", add(5, 3));
console.log("Arrow function:", multiply(4, 2));
console.log("Optional parameter:", greet("John"));
console.log("Rest parameters:", sum(1, 2, 3, 4, 5));
console.log("Union types:", processValue("hello"));
console.log("Generic function:", identity("TypeScript"));
console.log("Multiple generics:", pair("hello", 42));
console.log("Type guard:", isString("test"));
console.log("Function overload:", reverse("hello"));
console.log("Function overload:", reverse(123));

// Export functions for use in other files
export {
  add,
  multiply,
  greet,
  sum,
  processValue,
  identity,
  pair,
  isString,
  reverse,
  fetchData,
};
