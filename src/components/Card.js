import React from "react";
import Button from "./Button";

function Card() {
  {
    const cards = [
      {
        id: 1,
        title: "HTML",
        description:
          "Hypertext Markup Language is the standard markup language for",
        color: "black",
      },
      {
        id: 2,
        title: "CSS",
        description:
          "Cascading Style Sheets is a style sheet language used for specifying the",
        color: "black",
      },
      {
        id: 3,
        title: "JS",
        description:
          "JavaScript is a programming language and core technology of the",
        color: "black",
      },
    ];
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              backgroundColor: card.color,
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
              color: "white",
            }}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <Button
              label="Read More"
              onClick={() => alert(`More about ${card.title}`)}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Card;
