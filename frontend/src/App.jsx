import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
