import React from "react";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "black",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          marginBottom: "15px",
          color: "yellow",
        }}
      >
        5 Components task
      </h1>
      <nav>
        <a
        href="#"
          style={{ margin: "5px 10px", color: "white", textDecoration: "None" }}
        >
          Home
        </a>
        <a
        href="#"
          style={{ margin: "5px 10px", color: "white", textDecoration: "None" }}
        >
          About
        </a>
        <a
        href="#"
          style={{ margin: "5px 10px", color: "white", textDecoration: "None" }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
