import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

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
    <>
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
    </>
  );
};

export default UserHome;
