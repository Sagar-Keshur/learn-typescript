import { User, Point, UserRole, greet, createUser } from "./01-basic-types";
import {
  identity,
  Box,
  getLength,
  StringOrNumber,
  processValue,
  Person,
  isString,
} from "./02-generics";

// Basic Types Examples
console.log("=== Basic Types Examples ===");
const user = createUser("John", UserRole.Admin);
console.log("Created user:", user);
console.log("Greeting:", greet("Alice"));

// Generics Examples
console.log("\n=== Generics Examples ===");
const numberBox = new Box<number>(42);
console.log("Number box value:", numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log("String box value:", stringBox.getValue());

// Type Guards and Union Types
console.log("\n=== Type Guards and Union Types ===");
const value1: StringOrNumber = "Hello";
const value2: StringOrNumber = 42;

console.log("Processed string:", processValue(value1));
console.log("Processed number:", processValue(value2));

// Type Guards
const testValue = "Hello";
if (isString(testValue)) {
  console.log("String length:", testValue.length);
}

// Practice Exercises
console.log("\n=== Practice Exercises ===");

// Exercise 1: Sum of array
function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Exercise 2: Product interface
interface Product {
  name: string;
  price: number;
  description?: string;
}

// Exercise 3: Generic array function
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Exercise 4: Type-safe function for string/number
function processInput(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toString();
}

// Run exercises
console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));
console.log("First element of array:", firstElement(["a", "b", "c"]));
console.log("Process input:", processInput("hello"));
console.log("Process input:", processInput(42));
