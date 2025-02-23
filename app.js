import React from "react";
import ReactDOM from "react-dom/client"

/**
 * 
 * React Components are 2 types
 *  1. Class based component -> Old way.
 *  2. Functional component -> New way
 * 
 * Functional component -> is a normal Javascript Function -> Which returns some JSX code or ReactElement -> is an normal JS Object
 * 
 * Functional Component always start with CAPITAL LETTER.
 * 
 * Component Composition -> Passing another react component inside a react component.
 * 
 */

const TitleComponent = () =>{
    return <h1 id="heading"> I am Title Component</h1>
}

const EndComponent = () => {
    return (
        <h1 id="endingComponent"> I am Ending Component</h1>
    )
}

const HeadingComponent = () =>{
    return (
        <div id="container">
            <TitleComponent />
            <h1>I am Heading Component</h1>
            <EndComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
