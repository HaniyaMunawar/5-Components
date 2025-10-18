import React from "react";
import Button from "./Button";

function Form() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        marginBottom: "30px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form submitted!");
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Give us your Feedback/Suggestion
      </h2>
      <input
        type="text"
        placeholder="Your Name"
        required
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      />
      <input
        type="email"
        placeholder="Your Email"
        required
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      />
      <textarea
        placeholder="Your Message"
        required
        style={{
          padding: "10px",
          width: "250px",
          height: "100px",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      />
      <Button label="Submit" onClick={() => {}} />
    </form>
  );
}

export default Form;
