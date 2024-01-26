import "./App.css";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
/*
Header
  Navbar
Body
 Search 
 Restaurant Container
  Restaurant Cards
Footer
  Copyright
*/

function App() {
  return (
    <div className="app">
      <Header />
      <div className="flex flex-wrap justify-around m-5 border border-red-600 p-1">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}

export default App;
