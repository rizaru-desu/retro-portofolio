import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RetroPortfolio from "./pages/RetroPortfolio";
import LogDetail from "./pages/LogDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RetroPortfolio />} />
          <Route path="/logs/:id" element={<LogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
