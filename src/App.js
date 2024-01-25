import React from "react";
import "./App.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Forgot from "./Pages/Forgot";
import Recovery from "./Pages/Recovery";

function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/Recovery" element={<Recovery />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>      
    </div>
  );
}

export default App;
