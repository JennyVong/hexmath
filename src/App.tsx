import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [hexagon, setHexagon] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/hexagon")
      .then((response) => {
        setHexagon(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching othe hexagon data", error);
      });
  }, []);

  return (
    <div className="App">
      <header>HexMath Game</header>
      {hexagon ? (
        <>
          <div>
            <h2>Target: {hexagon.target} </h2>
            <h3>Numbers: {hexagon.numbers.join(", ")} </h3>
          </div>
        </>
      ) : (
        <p>Loading puzzle...</p>
      )}
    </div>
  );
}

export default App;
