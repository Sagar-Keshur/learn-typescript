# Phase 1: TypeScript Fundamentals

This directory contains examples and exercises for learning TypeScript fundamentals.

## Directory Structure

```
phase-1/
├── basic-types/     # Basic TypeScript types
├── interfaces/      # Interface examples
├── functions/       # Function examples
├── generics/        # Generic type examples
├── exercises/       # Practice exercises
├── index.ts        # Main file to run all examples
└── README.md       # This file
```

## How to Run Examples

1. First, install all dependencies:

   ```bash
   npm install
   ```

2. Run all Phase 1 examples:

   ```bash
   npm run phase1
   ```

3. Run individual examples using npx:

   ```bash
   # Run basic types examples
   npx ts-node src/phase-1/basic-types/index.ts

   # Run interface examples
   npx ts-node src/phase-1/interfaces/index.ts

   # Run function examples
   npx ts-node src/phase-1/functions/index.ts

   # Run generic examples
   npx ts-node src/phase-1/generics/index.ts

   # Run exercise examples
   npx ts-node src/phase-1/exercises/index.ts
   ```

## What You'll Learn

### Basic Types

- String, number, boolean types
- Arrays and tuples
- Enums
- Any and unknown types
- Never and void types

### Interfaces

- Basic interfaces
- Interface with methods
- Extending interfaces
- Function types
- Index signatures
- Call signatures

### Functions

- Basic functions
- Arrow functions
- Optional parameters
- Rest parameters
- Union types
- Generic functions
- Type guards
- Function overloads

### Generics

- Generic functions
- Generic interfaces
- Generic classes
- Generic constraints
- Generic utility types
- Generic mapped types

### Exercises

- Array manipulation
- Type-safe functions
- Generic implementations
- Type guards
- Utility functions

## Tips for Learning

1. Start with `basic-types` to understand the fundamentals
2. Move to `interfaces` to learn about type definitions
3. Study `functions` to understand TypeScript's function features
4. Explore `generics` for advanced type safety
5. Practice with `exercises` to reinforce your learning

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
