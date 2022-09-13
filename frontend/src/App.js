import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import ArrowBtn from "./components/subComponents/arrowBtn/ArrowBtn";
// import {
//   About,
//   Company,
//   Contact,
//   Faqs,
//   Footer,
//   Hero,
//   Navbar,
//   Testimonials,
//   Services,
// } from "./components";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";

const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
      </Routes>
>>>>>>> bc9a884d1da2476152f2dd6a9c0f28f142e28a9e
    </div>
  );
};

export default App;
