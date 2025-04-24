# Phase 2: TypeScript in React

This phase covers TypeScript integration with React, including components, state management, context, and custom hooks.

## Directory Structure

```
phase-2/
├── components/          # Functional components with TypeScript
├── state/              # State management examples
├── context/            # Context API examples
├── hooks/              # Custom hooks with TypeScript
└── README.md          # This file
```

## Prerequisites

1. Install dependencies:

   ```bash
   npm install react react-dom @types/react @types/react-dom
   ```

2. Make sure your tsconfig.json is properly configured for React:
   ```json
   {
     "compilerOptions": {
       "jsx": "react",
       "lib": ["DOM", "DOM.Iterable", "ESNext"]
       // ... other options
     }
   }
   ```

## Running the Examples

### 1. Components

```bash
# Run the functional components example
npx ts-node src/phase-2/components/FunctionalComponent.tsx
```

### 2. State Management

```bash
# Run the state management examples
npx ts-node src/phase-2/state/StateManagement.tsx
```

### 3. Context API

```bash
# Run the context API examples
npx ts-node src/phase-2/context/ThemeContext.tsx
```

### 4. Custom Hooks

```bash
# Run the custom hooks examples
npx ts-node src/phase-2/hooks/CustomHooks.tsx
```

## Testing

To test the components, you can use Jest and React Testing Library. Here's how to set it up:

1. Install testing dependencies:

   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom jest ts-jest
   ```

2. Create a test file (e.g., `FunctionalComponent.test.tsx`):

   ```typescript
   import { render, screen } from "@testing-library/react";
   import { UserProfile } from "./FunctionalComponent";

   describe("UserProfile", () => {
     it("renders user information correctly", () => {
       render(<UserProfile name="John" age={30} email="john@example.com" />);
       expect(screen.getByText("John")).toBeInTheDocument();
       expect(screen.getByText("Age: 30")).toBeInTheDocument();
       expect(screen.getByText("Email: john@example.com")).toBeInTheDocument();
     });
   });
   ```

3. Run tests:
   ```bash
   npm test
   ```

## What You'll Learn

### Components

- Typing props and state
- Functional components with TypeScript
- Event handlers with proper types
- Children & composition

### State Management

- useState with TypeScript
- useReducer with TypeScript
- Complex state management
- Type-safe state updates

### Context API

- Creating typed context
- Using context with TypeScript
- Context providers and consumers
- Custom context hooks

### Custom Hooks

- Creating type-safe hooks
- Generic hooks
- Hook composition
- Testing hooks

## Best Practices

1. Always define prop types using interfaces or type aliases
2. Use React.FC for functional components
3. Leverage TypeScript's type inference where possible
4. Use proper event types for handlers
5. Create reusable type definitions
6. Use proper type guards when needed

## Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
