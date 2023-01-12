import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Covid_19 from "./Components/Covid_19";
import States from "./Components/States";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Covid_19 />} />
          <Route path="/estado" element={<States />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
