const heading = React.createElement("h1", {}, "I am from React!");

const findingTheRoot = ReactDOM.createRoot(document.getElementById("root"));

findingTheRoot.render(heading);