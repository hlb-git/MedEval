import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./pages/auth";
import "./App.css";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <Home />
          } />
        <Route path="/dashboard" element={
          <Dashboard />}/>
        <Route path="/auth" element={
          <Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
