import React from "react";
import "./App.css";
import ArrowBtn from "./components/subComponents/arrowBtn/ArrowBtn";
import {
  About,
  Company,
  Contact,
  Faqs,
  Footer,
  Hero,
  Navbar,
  Testimonials,
  Services,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Company />
      <Services />
      <About />
      <Faqs />
      <Testimonials />
      <Contact />
      <Footer />
      <ArrowBtn />
    </div>
  );
};

export default App;