const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "I am from React!");

console.log(heading, "headingTag");

const findingTheRoot = ReactDOM.createRoot(document.getElementById("root"));

findingTheRoot.render(heading);