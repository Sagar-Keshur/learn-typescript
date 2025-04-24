/**
 * String Extensions Demo
 * This file demonstrates how to use the string extensions
 */

import "./string-extensions";
import { examples } from "./string-extensions";

// Run the examples
console.log("=== String Extensions Demo ===\n");
examples();

// Additional examples
console.log("\n=== Additional Examples ===\n");

// Capitalize example
const name = "john doe";
console.log("Name:", name);
console.log("Capitalized:", name.capitalize());

// Title case example
const title = "the quick brown fox";
console.log("\nTitle:", title);
console.log("Title Case:", title.toTitleCase());

// Word count example
const sentence = "This is a sample sentence with multiple words.";
console.log("\nSentence:", sentence);
console.log("Word Count:", sentence.wordCount());

// Palindrome examples
const palindromes = [
  "racecar",
  "A man, a plan, a canal: Panama",
  "hello world",
];

console.log("\nPalindrome Tests:");
palindromes.forEach((text) => {
  console.log(`"${text}" is a palindrome:`, text.isPalindrome());
});
