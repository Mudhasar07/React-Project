import React from "react";
import ReactDOM from "react-dom/client";

// Creating React using Normal React.CreateElement

// const heading = React.createElement("h1", {id: "heading"}, "Hello From Normal React CreateElement");

//  // Creating React Element using JSX -> Javascript Extension:

const JsxHeading = (
  <h1 id="heading" className="heading">
    React Element Using JSX Syntax
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// console.log(heading, "Normal React Ceatte Element");

root.render(JsxHeading);
