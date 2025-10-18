import React from "react";

function Button({ label, onClick }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "black",
        color: "yellow",
        border: "1px solid yellow",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default Button;
