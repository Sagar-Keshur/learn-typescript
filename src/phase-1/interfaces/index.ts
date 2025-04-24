/**
 * Interfaces in TypeScript
 * This file demonstrates how to use interfaces for type checking
 */

// 1. Basic Interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Read-only property
}

// 2. Interface with Methods
interface Vehicle {
  brand: string;
  model: string;
  year: number;
  start(): void;
  stop(): void;
  getInfo(): string;
}

// 3. Extending Interfaces
interface Employee extends User {
  department: string;
  salary: number;
  getSalary(): number;
}

// 4. Interface for Function Types
interface SearchFunction {
  (source: string, subString: string): boolean;
}

// 5. Interface with Index Signatures
interface StringArray {
  [index: number]: string;
}

// 6. Interface with Call Signatures
interface Calculator {
  (x: number, y: number): number;
  version: string;
}

// Example Implementations
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date(),
};

const car: Vehicle = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  start() {
    console.log("Starting the car...");
  },
  stop() {
    console.log("Stopping the car...");
  },
  getInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  },
};

const employee: Employee = {
  id: 2,
  name: "Jane Smith",
  email: "jane@example.com",
  createdAt: new Date(),
  department: "Engineering",
  salary: 75000,
  getSalary() {
    return this.salary;
  },
};

// Function type implementation
const search: SearchFunction = (source: string, subString: string): boolean => {
  return source.includes(subString);
};

// Index signature implementation
const colors: StringArray = ["red", "green", "blue"];

// Call signature implementation
const add: Calculator = (x: number, y: number): number => x + y;
add.version = "1.0";

// Export examples for use in other files
export {
  User,
  Vehicle,
  Employee,
  SearchFunction,
  StringArray,
  Calculator,
  user,
  car,
  employee,
  search,
  colors,
  add,
};
