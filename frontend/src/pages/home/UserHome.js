import React from "react";
import {
  Hero,
  Services,
  Company,
  Testimonials,
  Faqs,
  About,
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
      <Testimonials />
      <Faqs />
      <About />
      <Footer />
    </div>
  );
};

export default UserHome;
