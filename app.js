import React from "react";
import ReactDOM from "react-dom/client";

// creating multiple component & passing inside the another component => which is called Nested Component.

const SecondComponent = () => (
  <h1>I am from Second Componet</h1>
);

const HeadingComponent = () => (
  <div id="container">
    <h1>Heading Component</h1>
    <SecondComponent />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

// Rendering React Component => React component means => returning some JSX or React element.
// How to render React component ?? => (<component-Name />)
root.render(<HeadingComponent />);
