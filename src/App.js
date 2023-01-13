import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Covid19 from "./Components/Covid19";
import States from "./Components/States";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Covid19 />} />
          <Route path="/estado" element={<States />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
