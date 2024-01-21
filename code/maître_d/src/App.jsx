import "./App.css";
import logo from "./assets/logo.png";

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
function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img height={250} width={250} src={logo} />
      </div>
      <p>Maitre D</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header></Header>
    </div>
  );
}

export default App;
