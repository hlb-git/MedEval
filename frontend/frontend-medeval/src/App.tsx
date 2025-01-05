import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div className="app">
                        <Home />
                    </div>} />
                <Route path="/dashboard" element={<Dashboard />}/>
                </Routes>
        </Router>
    );
}

export default App;
