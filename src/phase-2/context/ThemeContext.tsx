import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the theme type
type Theme = "light" | "dark";

// Define the context type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Example components using the theme context
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Toggle Theme ({theme})
    </button>
  );
};

export const ThemedContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        minHeight: "200px",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <p>This content changes based on the selected theme.</p>
    </div>
  );
};

// Example usage
export const ThemeExample: React.FC = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <h1>Theme Context Example</h1>
        <ThemeToggle />
        <div style={{ marginTop: "20px" }}>
          <ThemedContent />
        </div>
      </div>
    </ThemeProvider>
  );
};
