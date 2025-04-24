// Basic Types Examples
let name: string = "John";
let age: number = 25;
let isDev: boolean = true;
let skills: string[] = ["TypeScript", "React", "Node.js"];
let point: [number, number] = [10, 20];

// Enum example
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let userRole: UserRole = UserRole.Admin;

// Interface example
interface User {
  id: number;
  name: string;
  email: string;
  role?: UserRole; // optional property
}

// Type example
type Point = {
  x: number;
  y: number;
};

// Using interfaces and types
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  role: UserRole.User,
};

const point1: Point = { x: 10, y: 20 };

// Function with type annotations
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function with optional parameter
function createUser(name: string, role?: UserRole): User {
  return {
    id: Math.random(),
    name,
    email: `${name.toLowerCase()}@example.com`,
    role,
  };
}

// Export for use in other files
export { User, Point, UserRole, greet, createUser };
