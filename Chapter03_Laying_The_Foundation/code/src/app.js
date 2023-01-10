import { createElement } from "react";
import { createRoot } from "react-dom/client";

const h1 = createElement("h1", { key: "h1" }, "Hello");
const h2 = createElement("h2", { key: "h2" }, "World");
const h3 = createElement("h3", { key: "h3" }, "Wecome");

const Header = createElement("div", { className: "title" }, [h1, h2, h3]);

const root = createRoot(document.getElementById("root"));
console.log("root");

root.render(Header);
