import "./App.css";

import { useState } from "react";

import AnimalShow from "./AnimalShow";

const data = ["bird", "cat", "cow", "dog", "gator", "horse"];

function App(props) {
  const [animals, setAnimals] = useState([]);

  function handleButtonClick(e) {
    setAnimals([...animals, data[Math.floor(Math.random() * data.length)]]);
  }

  return (
    <div className="app">
      <button onClick={handleButtonClick}>Add Animal</button>
      <div className="animal-list">
        {animals.map((animal, i) => {
          return <AnimalShow key={i} type={animal} />;
        })}
      </div>
    </div>
  );
}

export default App;
