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
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot/:id" element={<Forgot />} />
        <Route exact path="/recovery" element={<Recovery />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
