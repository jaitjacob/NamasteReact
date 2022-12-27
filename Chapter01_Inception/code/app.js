const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading);
