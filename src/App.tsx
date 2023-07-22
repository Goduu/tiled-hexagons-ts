import { useState } from "react";
import "./App.css";
import { SquareGrid } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SquareGrid
        tileSideLengths={60}
        tileGap={4}
        tileBorderRadii={9}
        maxHorizontal={7}
        tileTextStyles={{
          fontSize: "68px",
          fill: "#7cebff",
        }}
        tiles={[{ text: "-" }, { text: "-" }]}
      />
    </div>
  );
}

export default App;
