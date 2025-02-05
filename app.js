// const heading = React.createElement("h1", {
//     id:"heading1", xyz:"abc", name:"seeni"
// }, "Hello World From React!!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const heading = React.createElement("div", {id: "heading"},
    React.createElement("div", {}, 
        [
            [
                React.createElement("h1", {}, "I am from D1h1"),
                React.createElement("h2", {}, "I am from D1h2"),
            ],
            [
                React.createElement('h2', {}, "I am from D2h1"),
                React.createElement('h2', {}, "I am from D2h2")

            ]
        ]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
