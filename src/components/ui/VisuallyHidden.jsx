// src/components/ui/visually-hidden.js

export function VisuallyHidden({ children }) {
    return (
      <span style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        margin: "-1px",
        padding: "0",
        border: "0",
        clip: "rect(0 0 0 0)",
        overflow: "hidden",
        whiteSpace: "nowrap"
      }}>
        {children}
      </span>
    );
  }
  