import "../App.css";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";

function App() {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  useEffect(() => {
    console.log("useffect called.");
    async function fetchRestaurants() {
      try {
        const rawRestaurants = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97&lng=77.59"
        );
        const rawJson = await rawRestaurants.json();
        console.log(rawJson);
      } catch {
        console.warn("cors issue. skill issue.");
      }
    }
    fetchRestaurants();
  });

  return (
    <div className="app">
      <Header />

      <button
        onClick={() => {
          const filteredTopRestaurant = listOfRestaurants.filter(
            (res) => res.info.avgRating >= 4
          );
          setListOfRestaurant(filteredTopRestaurant);
        }}
        class=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold m-1 py-2 px-4 rounded inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          />
        </svg>

        <span className="px-3">Filter</span>
      </button>
      <div className="flex flex-wrap justify-start border border-red-600">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
}

export default App;
