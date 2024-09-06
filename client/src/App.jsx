import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard"; 
import { Navbar } from "./Components/Navbar";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/user', { withCredentials: true })
      .then(response => {
        if (response.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  function PrivateRoute({ element, isLoggedIn }) {
    return isLoggedIn ? element : <Navigate to="/login" />;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/home" element={<PrivateRoute element={<Home />} isLoggedIn={isLoggedIn} />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <SignUp setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
