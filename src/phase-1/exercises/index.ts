/**
 * TypeScript Exercises
 * This file contains practice exercises for TypeScript fundamentals
 */

// Import string extensions
import "../extensions/string-extensions";

// Exercise 1: Create a function that takes an array of numbers and returns the sum
function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Exercise 2: Create a function that finds the maximum value in an array
function findMax<T extends number>(numbers: T[]): T {
  return Math.max(...numbers) as T;
}

// Exercise 3: Create a function that filters an array based on a predicate
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
  return array.filter(predicate);
}

// Exercise 4: Create a function that maps an array to a new array
function mapArray<T, U>(array: T[], mapper: (item: T) => U): U[] {
  return array.map(mapper);
}

// Exercise 5: Create a function that combines two arrays
function combineArrays<T>(array1: T[], array2: T[]): T[] {
  return [...array1, ...array2];
}

// Exercise 6: Create a function that removes duplicates from an array
function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

// Exercise 7: Create a function that checks if all elements in an array satisfy a condition
function all<T>(array: T[], predicate: (item: T) => boolean): boolean {
  return array.every(predicate);
}

// Exercise 8: Create a function that checks if any element in an array satisfies a condition
function any<T>(array: T[], predicate: (item: T) => boolean): boolean {
  return array.some(predicate);
}

// String Extension Exercises
console.log("\n=== String Extension Exercises ===\n");

// Exercise 9: String Capitalization
const names = ["john doe", "jane smith", "bob wilson"];
console.log("Original names:", names);
console.log(
  "Capitalized names:",
  names.map((name) => name.capitalize())
);

// Exercise 10: Title Case
const titles = [
  "the quick brown fox",
  "jumping over the lazy dog",
  "typescript is awesome",
];
console.log("\nOriginal titles:", titles);
console.log(
  "Title case:",
  titles.map((title) => title.toTitleCase())
);

// Exercise 11: Word Count
const sentences = [
  "This is a sample sentence.",
  "How many words are in this sentence?",
  "One two three four five.",
];
console.log("\nSentences:", sentences);
console.log(
  "Word counts:",
  sentences.map((sentence) => sentence.wordCount())
);

// Exercise 12: Palindrome Check
const testStrings = [
  "racecar",
  "A man, a plan, a canal: Panama",
  "hello world",
  "madam",
  "typescript",
];
console.log("\nPalindrome tests:");
testStrings.forEach((str) => {
  console.log(`"${str}" is a palindrome:`, str.isPalindrome());
});

// Exercise 13: String Reversal
const words = ["hello", "world", "typescript", "javascript"];
console.log("\nOriginal words:", words);
console.log(
  "Reversed words:",
  words.map((word) => word.reverse())
);

// Run all exercises
console.log("\n=== Array Exercises ===\n");

const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "cherry"];

console.log("Sum of array:", sumArray(numbers));
console.log("Maximum value:", findMax(numbers));
console.log(
  "Filtered array:",
  filterArray(numbers, (n) => n > 2)
);
console.log(
  "Mapped array:",
  mapArray(strings, (s) => s.toUpperCase())
);
console.log("Combined arrays:", combineArrays(numbers, [6, 7, 8]));
console.log("Unique values:", removeDuplicates([1, 2, 2, 3, 3, 4]));
console.log(
  "All positive:",
  all(numbers, (n) => n > 0)
);
console.log(
  "Any even:",
  any(numbers, (n) => n % 2 === 0)
);

// Export exercises for use in other files
export {
  sumArray,
  findMax,
  filterArray,
  mapArray,
  combineArrays,
  removeDuplicates,
  all,
  any,
};
