/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1> heading 1 </h1>
 *          <h2> heading 2 </h2>
 *      </div>
 *          
 *      <div id="child2">
 *          <h1> heading 1 </h1>
 *          <h2> heading 2 </h2>
 *      </div>
 * </div>
 * 
 */

// To add sibling -> we have to wrap inside ->  []

const heading = React.createElement("div", {id:"parent"}, 
    [
        React.createElement("div", {id:"child"}, 
            [
                React.createElement("h1", {}, "I am heading 1"),
                React.createElement("h2", {}, "I am heading 2")
            ]
        ),
        React.createElement("div", {id:"child2"}, 
            [
                React.createElement("h1", {}, "I am heading 1"),
                React.createElement("h2", {}, "I am heading 2")
            ]
        )
    ]
    
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);