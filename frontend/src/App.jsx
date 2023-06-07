import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/Layout/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      {showCart && <Cart onClose={hideCartHandler} />}

      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
