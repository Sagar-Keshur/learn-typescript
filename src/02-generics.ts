// Generic function example
function identity<T>(value: T): T {
  return value;
}

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
}

// Generic class
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

// Using generics with constraints
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(item: T): number {
  return item.length;
}

// Union types
type StringOrNumber = string | number;

function processValue(value: StringOrNumber): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString();
}

// Intersection types
interface Named {
  name: string;
}

interface Aged {
  age: number;
}

type Person = Named & Aged;

// Type guards
function isString(value: any): value is string {
  return typeof value === "string";
}

// Example usage
const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello");

numberBox.setValue(43);

stringBox.setValue("World");

const length = getLength("Hello");

const person: Person = {
  name: "John",
  age: 30,
};

// Export for use in other files
export {
  identity,
  Container,
  Box,
  getLength,
  StringOrNumber,
  processValue,
  Person,
  isString,
};
