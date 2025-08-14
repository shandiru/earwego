// App.jsx
// src/App.jsx
import WhyChoose from "./components/WhyChoose";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100">
      <Navbar />
       <Hero />
        <WhyChoose />
         <Pricing />
         <Reviews />
           <FAQSection />
           <Footer />
    </div>
  );
}

export default App;
