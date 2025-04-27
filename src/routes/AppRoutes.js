import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

function AppRoutes() {
    // const isAuthenticated = localStorage.getItem("token"); 
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={<Home /> } 
            />
          </Routes>
        </Router>
  );
}

export default AppRoutes;
