import React from "react";
import {
  Header,
  Hero,
  Offers,
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
      <Header />
      <LoggedInHeader />
      <Hero />
      <Offers />
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
