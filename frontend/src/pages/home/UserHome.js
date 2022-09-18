import React from "react";
import {
  Header,
  Hero,
  Services,
  Company,
  Testimonials,
  Faqs,
  About,
  Contact,
  Footer,
} from "../../components/";
import LoggedInHeader from "../../components/headerUser";

const UserHome = () => {
  return (
    <div>
      <LoggedInHeader />
      <Hero />
      <Services />
      <Company />
      <Faqs />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default UserHome;
