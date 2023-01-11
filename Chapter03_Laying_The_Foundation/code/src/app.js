import { createElement } from "react";
import { createRoot } from "react-dom/client";

// //Nested Header
// const h1 = createElement("h1", { key: "h1" }, "Hello");
// const h2 = createElement("h2", { key: "h2" }, "World");
// const h3 = createElement("h3", { key: "h3" }, "This is by createElement.");

// const simpleHeader = createElement(
//   "div",
//   { key: "mainDiv", className: "titleUsingCreateElement" },
//   [h1, h2, h3, <hr key={"hr"} />]
// );

// //Same Nested Header as above with JSX
// const nestedHeaderElementwithJSX = (
//   <div key="mainDivJsx" className="titleUsingJSX">
//     <h1 key="jsxh1">This H1 tag was written in JSX</h1>
//     <h2 key="jsxh2">andd this H2 too.</h2>
//     <h3 key="jsxh3">
//       yep. and icluding this H3. All three of this will go into a component now.
//     </h3>
//     <hr key="jsxhr" />
//   </div>
// );

// //Same Nested Header as above as functional components using JSX
// function Fh1() {
//   return <h1>This is a functional component.</h1>;
// }

// function Fh2() {
//   return <h2>So is this.</h2>;
// }

// function Fh3() {
//   return <h3>And this.</h3>;
// }

// function FHeaderComponent() {
//   return (
//     <div key="mainDivFunctional" className="titeUsingFunctionalComponent">
//       <Fh1 />
//       <Fh2 />
//       <Fh3 />
//     </div>
//   );
// }

// Create a Header Component from scratch using Functional Component with JSX
// 1. Add a Logo on left.
// 2. Add a search bar in middle.
// 3. Add User icon on right.
// 3. Add CSS to beautify.

const root = createRoot(document.getElementById("root"));

// PART - 1 of the assignment
// root.render([
//   simpleHeader,
//   nestedHeaderElementwithJSX,
//   <FHeaderComponent key={"mainFunctionalComponentKey"} />,
// ]);

//PART - 2 of the assignment
