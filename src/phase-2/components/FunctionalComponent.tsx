import { FC, MouseEvent, ReactNode, useState, useEffect } from "react";

// Basic Props Interface
interface UserProps {
  name: string;
  age: number;
  email?: string; // Optional prop
}

// Functional Component with Props
export const UserProfile: FC<UserProps> = ({ name, age, email }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="user-profile"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
    >
      <h2>{name}</h2>
      <p style={{ color: "blue" }}>Age: {age}</p>
      {email && <p style={{ color: "green" }}>Email: {email}</p>}
      {isHovered && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "5px",
          }}
        >
          👋 Hovering over profile!
        </div>
      )}
    </div>
  );
};

// Component with Children
interface CardProps {
  title: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ title, children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="card"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
        transition: "transform 0.6s ease",
        cursor: "pointer",
      }}
    >
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
};

// Component with Event Handlers
interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className="custom-button"
      disabled={disabled}
      style={{ opacity: disabled ? 0.7 : 1 }}
    >
      {children}
    </button>
  );
};

// Example usage with improved state management and interactivity
export const Example: FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [lastClickTime, setLastClickTime] = useState<Date | null>(null);
  const [clickStreak, setClickStreak] = useState(0);

  // Effect to handle click streak
  useEffect(() => {
    if (lastClickTime) {
      const now = new Date();
      const timeDiff = now.getTime() - lastClickTime.getTime();

      if (timeDiff < 1000) {
        // If clicked within 1 second
        setClickStreak((prev) => prev + 1);
      } else {
        setClickStreak(0);
      }
    }
  }, [lastClickTime]);

  // Effect to handle button cooldown
  useEffect(() => {
    if (isButtonDisabled) {
      const timer = setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500); // 500ms cooldown
      return () => clearTimeout(timer);
    }
  }, [isButtonDisabled]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setClickCount((prev) => prev + 1);
    setShowMessage(true);
    setLastClickTime(new Date());
    setIsButtonDisabled(true);

    // Clear message after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  // Calculate click rate
  const getClickRate = () => {
    if (!lastClickTime) return 0;
    const now = new Date();
    const timeDiff = now.getTime() - lastClickTime.getTime();
    return timeDiff < 1000 ? (clickStreak + 1) / (timeDiff / 1000) : 0;
  };

  return (
    <div>
      <UserProfile name="John Doe" age={30} email="john@example.com" />

      <Card title="Welcome to TypeScript React">
        <p>This is a demonstration of TypeScript with React components.</p>
        <p>Click the button below to see it in action!</p>
        <p>Current click count: {clickCount}</p>
        {clickStreak > 1 && (
          <p style={{ color: "#e74c3c", fontWeight: "bold" }}>
            Click Streak: {clickStreak}!
          </p>
        )}
      </Card>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button onClick={handleClick} disabled={isButtonDisabled}>
          {isButtonDisabled ? "Cooldown..." : `Click Me (${clickCount} clicks)`}
        </Button>

        {showMessage && (
          <div className="message">
            Button clicked! Total clicks: {clickCount}
            {clickStreak > 1 && ` - Streak: ${clickStreak}!`}
          </div>
        )}

        <div className="counter-display">
          <p>You've clicked {clickCount} times</p>
          {clickStreak > 1 && (
            <p style={{ color: "#e74c3c" }}>
              Click Rate: {getClickRate().toFixed(1)} clicks/second
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
