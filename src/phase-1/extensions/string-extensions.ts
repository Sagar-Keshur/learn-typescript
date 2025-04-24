/**
 * String Extensions in TypeScript
 * This file demonstrates how to extend the String type with custom methods
 */

// Declare the extension interface
declare global {
  interface String {
    /**
     * Capitalizes the first letter of each word in the string
     * @returns The string with capitalized words
     */
    capitalize(): string;

    /**
     * Converts the string to title case
     * @returns The string in title case
     */
    toTitleCase(): string;

    /**
     * Reverses the string
     * @returns The reversed string
     */
    reverse(): string;

    /**
     * Counts the number of words in the string
     * @returns The number of words
     */
    wordCount(): number;

    /**
     * Checks if the string is a palindrome
     * @returns True if the string is a palindrome
     */
    isPalindrome(): boolean;
  }
}

// Implement the extensions
String.prototype.capitalize = function (): string {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

String.prototype.toTitleCase = function (): string {
  return this.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};

String.prototype.reverse = function (): string {
  return this.split("").reverse().join("");
};

String.prototype.wordCount = function (): number {
  return this.trim().split(/\s+/).length;
};

String.prototype.isPalindrome = function (): boolean {
  const cleanStr = this.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
};

// Example usage
const examples = () => {
  const text = "hello world typescript";

  console.log("Original:", text);
  console.log("Capitalized:", text.capitalize());
  console.log("Title Case:", text.toTitleCase());
  console.log("Reversed:", text.reverse());
  console.log("Word Count:", text.wordCount());
  console.log("Is Palindrome:", text.isPalindrome());

  const palindrome = "A man, a plan, a canal: Panama";
  console.log("\nPalindrome Test:");
  console.log("Original:", palindrome);
  console.log("Is Palindrome:", palindrome.isPalindrome());
};

// Export the examples function
export { examples };

// Export the extensions
export {};
