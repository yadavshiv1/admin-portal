import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/components/LoginScreen";
import Dashboard from "../src/components/HomeScreen";

function App() {
  const isAuthenticated = localStorage.getItem("token"); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={<Dashboard /> } 
        />
      </Routes>
    </Router>
  );
}

export default App;
