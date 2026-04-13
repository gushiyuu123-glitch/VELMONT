import Header from "./components/Header";
import Hero from "./sections/Hero";
import Values from "./sections/Values";
import Inventory from "./sections/Inventory";
import About from "./sections/About";
import Showroom from "./sections/Showroom";
import Contact from "./sections/Contact";
import Access from "./sections/Access";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-velmont-black text-velmont-stone">
      <Header />

      <main>
        <Hero />
        <Values />
        <Inventory />
        <About />
        <Showroom />
        <Contact />
        <Access />
      </main>

      <Footer />
    </div>
  );
}

export default App;