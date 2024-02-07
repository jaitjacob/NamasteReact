import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export default function Body() {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
      );
      const json = await data.json();
      const rawCards = json.data.cards;
      if (Array.isArray(rawCards) && rawCards.length > 0) {
        setListOfRestaurant(
          rawCards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        console.log(listOfRestaurants[1]);
      }
    }
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {listOfRestaurants.map((restaurant) => {
        let propObj = restaurant.info;
        <RestaurantCard info={propObj}></RestaurantCard>;
      })}
    </div>
  );
}
