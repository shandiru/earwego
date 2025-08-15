// App.jsx
// src/App.jsx
import WhyChoose from "./components/WhyChoose";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Pricing />
      <Reviews />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>


  );
}

export default App;
