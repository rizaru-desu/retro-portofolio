import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RetroPortfolio from "./pages/RetroPortfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RetroPortfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
