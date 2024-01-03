// const heading = React.createElement("h1", {id: "heading",xyz: "abc"}, "Hello World Rajdip");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello Hinjewadi !"),
    React.createElement("h1", {}, "Hello Wakad !"),
  ], ),
], React.createElement("div", {id : "child1"}, [React.createElement("h1", {}, "Hell Child h1"), React.createElement("h2", {}, "Child2")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// root.render(heading);
