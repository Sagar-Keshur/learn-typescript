/**
 * Basic Types in TypeScript
 * This file demonstrates the fundamental types available in TypeScript
 */

// 1. Primitive Types
const stringExample: string = "Hello, TypeScript!";
const numberExample: number = 42;
const booleanExample: boolean = true;
const nullExample: null = null;
const undefinedExample: undefined = undefined;

// 2. Array Types
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "orange"];
const mixedArray: (string | number)[] = [1, "two", 3, "four"];

// 3. Tuple Types (fixed-length arrays with specific types)
const tupleExample: [string, number, boolean] = ["John", 30, true];

// 4. Enum Types
enum Direction {
  North = "NORTH",
  South = "SOUTH",
  East = "EAST",
  West = "WEST",
}

const currentDirection: Direction = Direction.North;

// 5. Any Type (use sparingly)
let anyExample: any = "This can be anything";
anyExample = 42; // Valid
anyExample = true; // Valid

// 6. Unknown Type (safer alternative to any)
let unknownExample: unknown = "This is unknown";
// unknownExample.toUpperCase(); // Error: Object is of type 'unknown'
if (typeof unknownExample === "string") {
  console.log(unknownExample.toUpperCase()); // Now TypeScript knows it's a string
}

// 7. Never Type (for functions that never return)
function throwError(message: string): never {
  throw new Error(message);
}

// 8. Void Type (for functions that don't return anything)
function logMessage(message: string): void {
  console.log(message);
}

// Export examples for use in other files
export {
  stringExample,
  numberExample,
  booleanExample,
  numberArray,
  stringArray,
  mixedArray,
  tupleExample,
  Direction,
  currentDirection,
  anyExample,
  unknownExample,
  throwError,
  logMessage,
};
