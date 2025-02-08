import React from "react";
import ReactDOM from "react-dom/client";

const SecondComponent = () => (
  <h1>I am from Second Componet</h1>
);

// Inside Heading component we are going to write Javascript operation by using or simple adding this => { }
const HeadingComponent = () => (
  <div id="container">
    <h2>{1000 + 200}</h2>
    <h3>{console.log("Writing JS inside => React Function Component.")}</h3>
    <h1>Heading Component</h1>
    <SecondComponent />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />);
