// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Page/Homepage"; // corrected path


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
