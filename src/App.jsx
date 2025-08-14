// App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100">
      <Navbar />
       <Hero />
    </div>
  );
}

export default App;
