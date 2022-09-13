import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Header,
  Hero,
  Services,
  Company,
  Testimonials,
  Faqs,
  About,
  Footer,
} from "../../components/";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Company />
      <Testimonials />
      <Faqs />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
