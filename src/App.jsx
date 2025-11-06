// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Page/Homepage"; // corrected path
import Earwaxremovalpage from "./Page/Earwaxremovalpage"; // corrected path
import ServiceDetailpage from "./Page/ServiceDetailpage"; // corrected path
import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import GDPRConsent from "./components/GDPRBanner.jsx";
import EarwaxremovalNottingham from "./Page/EarwaxremovalNottingham.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Earwaxremovalpage" element={<Earwaxremovalpage />} />
        <Route path="/symptoms" element={<ServiceDetailpage />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/earwax-removal-nottingham" element={<EarwaxremovalNottingham />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
