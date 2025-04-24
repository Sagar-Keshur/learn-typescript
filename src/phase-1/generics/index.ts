/**
 * Generics in TypeScript
 * This file demonstrates how to use generics for type-safe, reusable code
 */

// 1. Generic Function
function identity<T>(value: T): T {
  return value;
}

// 2. Generic Interface
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

// 3. Generic Class
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getValue(): T {
    return this.content;
  }

  setValue(value: T): void {
    this.content = value;
  }
}

// 4. Generic Constraints
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(item: T): number {
  return item.length;
}

// 5. Generic Default Types
interface Response<T = any> {
  data: T;
  status: number;
  message: string;
}

// 6. Generic Type Aliases
type Result<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// 7. Generic Utility Types
type ReadonlyContainer<T> = Readonly<Container<T>>;
type PartialContainer<T> = Partial<Container<T>>;

// 8. Generic Mapped Types
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Example Usage
const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello");

const response: Response<string> = {
  data: "Success",
  status: 200,
  message: "OK",
};

const result: Result<number> = {
  success: true,
  data: 42,
};

// Generic Constraints Example
console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3

// Export for use in other files
export {
  identity,
  Container,
  Box,
  getLength,
  Response,
  Result,
  ReadonlyContainer,
  PartialContainer,
  Optional,
  numberBox,
  stringBox,
  response,
  result,
};
