import "../App.css";
import Body from "./Body";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
//import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="app">
      <Header />
      <Body></Body>
    </div>
  );
}

export default App;
