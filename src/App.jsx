// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Page/Homepage"; // corrected path
import Earwaxremovalpage from "./Page/Earwaxremovalpage"; // corrected path
import ServiceDetailpage from "./Page/ServiceDetailpage"; // corrected path


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Earwaxremovalpage" element={<Earwaxremovalpage />} />
        <Route path="/ServiceDetailpage" element={<ServiceDetailpage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
