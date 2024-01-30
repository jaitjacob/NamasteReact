import "../App.css";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

function App() {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="app">
      <Header />

      <div className="flex flex-wrap justify-start border border-red-600">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
}

export default App;
