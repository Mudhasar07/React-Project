import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id: "heading"}, "The heading 1"); // Normal create Element

/**
 * 
 * 
 * JSX is a not pure JS Code. JS Browser does not understand JSX. its throw error.
 * 
 * Babel will Convert JSX into normal React.createElement.
 * 
 * JSX => Babel transpile it to React.createElement => ReactElement as (JS object) => change to HTML Element => RENDER it to browser.
 * 
 * 
 */

const jsxHeading = (<h1 id="heading" >
    Heading from JSX - Babel
    </h1>) // JSX syntax for creating element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
