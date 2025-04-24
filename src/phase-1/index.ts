/**
 * TypeScript Fundamentals - Main File
 * This file demonstrates all the fundamental concepts of TypeScript
 */

import * as basicTypes from "./basic-types";
import * as interfaces from "./interfaces";
import * as functions from "./functions";
import * as generics from "./generics";
import * as exercises from "./exercises";

// Run all examples
console.log("=== TypeScript Fundamentals Examples ===\n");

// Basic Types Examples
console.log("Basic Types:");
console.log("String:", basicTypes.stringExample);
console.log("Number:", basicTypes.numberExample);
console.log("Boolean:", basicTypes.booleanExample);
console.log("Array:", basicTypes.numberArray);
console.log("Tuple:", basicTypes.tupleExample);
console.log("Enum:", basicTypes.currentDirection);
console.log("\n");

// Interface Examples
console.log("Interfaces:");
console.log("User:", interfaces.user);
console.log("Car:", interfaces.car.getInfo());
console.log("Employee:", interfaces.employee);
console.log("Search:", interfaces.search("Hello World", "World"));
console.log("\n");

// Function Examples
console.log("Functions:");
console.log("Add:", functions.add(5, 3));
console.log("Multiply:", functions.multiply(4, 2));
console.log("Greet:", functions.greet("John"));
console.log("Sum:", functions.sum(1, 2, 3, 4, 5));
console.log("Process Value:", functions.processValue("hello"));
console.log("\n");

// Generic Examples
console.log("Generics:");
console.log("Number Box:", generics.numberBox.getValue());
console.log("String Box:", generics.stringBox.getValue());
console.log("Response:", generics.response);
console.log("Result:", generics.result);
console.log("\n");

// Exercise Examples
console.log("Exercises:");
const numbers = [1, 2, 3, 4, 5];
console.log("Sum Array:", exercises.sumArray(numbers));
console.log("Find Max:", exercises.findMax(numbers));
console.log(
  "Filter Array:",
  exercises.filterArray(numbers, (n) => n > 2)
);
console.log(
  "Map Array:",
  exercises.mapArray(["a", "b", "c"], (s) => s.toUpperCase())
);
console.log("Combine Arrays:", exercises.combineArrays([1, 2, 3], [4, 5, 6]));
console.log(
  "Remove Duplicates:",
  exercises.removeDuplicates([1, 2, 2, 3, 3, 4])
);
console.log(
  "All Positive:",
  exercises.all(numbers, (n) => n > 0)
);
console.log(
  "Any Even:",
  exercises.any(numbers, (n) => n % 2 === 0)
);
