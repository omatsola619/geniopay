import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Wallet from "./components/Wallet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </Router>
  );
}

export default App;
