// App.jsx
// src/App.jsx
import WhyChoose from "./components/WhyChoose";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100">
      <Navbar />
       <Hero />
        <WhyChoose />
         <Pricing />
    </div>
  );
}

export default App;
