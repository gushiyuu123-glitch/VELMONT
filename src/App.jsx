import Header from "./components/Header";
import HeaderSp from "./components/HeaderSp";

import Hero from "./sections/Hero";
import HeroSp from "./sections/HeroSp";

import Values from "./sections/Values";
import ValuesSp from "./sections/ValuesSp";

import Inventory from "./sections/Inventory";
import InventorySp from "./sections/InventorySp";

import About from "./sections/About";
import AboutSp from "./sections/AboutSp";

import Showroom from "./sections/Showroom";
import ShowroomSp from "./sections/ShowroomSp";

import Contact from "./sections/Contact";
import ContactSp from "./sections/ContactSp";

import Access from "./sections/Access";
import AccessSp from "./sections/AccessSp";

import Footer from "./components/Footer";
import FooterSp from "./components/FooterSp";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-velmont-black text-velmont-stone">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <HeaderSp />
      </div>

      <main className="relative">
        <div className="hidden md:block">
          <Hero />
          <Values />
          <Inventory />
          <About />
          <Showroom />
          <Contact />
          <Access />
        </div>

        <div className="block md:hidden">
          <HeroSp />
          <ValuesSp />
          <InventorySp />
          <AboutSp />
          <ShowroomSp />
          <ContactSp />
          <AccessSp />
        </div>
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="block md:hidden">
        <FooterSp />
      </div>
    </div>
  );
}

export default App;