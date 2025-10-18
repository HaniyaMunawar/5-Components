import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Card />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
