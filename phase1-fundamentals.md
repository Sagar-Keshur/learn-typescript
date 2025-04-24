# Phase 1: TypeScript Fundamentals

## ✅ What is TypeScript?

TypeScript is a superset of JavaScript that adds static typing. It helps catch bugs during development by checking types before running your code.

### Example:

```typescript
let name: string = "John"; // can't assign a number later
let age: number = 25;
let isDev: boolean = true;
```

## ✳️ Basic Types

| Type            | Example                               |
| --------------- | ------------------------------------- |
| string          | `let name: string = "Alice";`         |
| number          | `let age: number = 30;`               |
| boolean         | `let isHappy: boolean = true;`        |
| any             | `let x: any = 10; x = "text";`        |
| unknown         | Like any but safer                    |
| array           | `let names: string[] = ["John"]`      |
| tuple           | `let point: [number, number] = [0,0]` |
| enum            | `enum Color { Red, Green, Blue }`     |
| null, undefined | Literally those values                |

## ✅ Interfaces & Types

```typescript
interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // optional
}

type Post = {
  id: number;
  title: string;
  body: string;
};
```

### Usage:

```typescript
const user: User = { id: 1, name: "Alice" };
```

### Extending Interfaces:

```typescript
interface Admin extends User {
  permissions: string[];
}
```

## ✅ Functions

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}

const add = (a: number, b: number): number => a + b;
```

### Optional & Default Parameters:

```typescript
function greet(name: string = "Guest"): void {
  console.log(`Hello ${name}`);
}
```

## ✅ Generics

```typescript
function identity<T>(value: T): T {
  return value;
}

let result = identity<number>(42); // or just identity(42)
```

## Practice Exercises

1. Create a function that takes an array of numbers and returns the sum
2. Define an interface for a product with name, price, and optional description
3. Create a generic function that can work with any type of array
4. Implement a type-safe function that handles both string and number inputs

## Next Steps

After mastering these fundamentals, you'll be ready to move on to:

- Working with modules and imports
- Type inference and type narrowing
- Enums and utility types
- Type guards and assertions

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
