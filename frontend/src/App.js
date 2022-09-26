import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ServicesHome } from "./components/services/ServicesHome";
import Home from "./pages/home";
import Activate from "./pages/home/Activate";
import UserHome from "./pages/home/UserHome";
import Login from "./pages/login";
import Profile from "./pages/profile";
import LoggedinRoutes from "./routes/LoggedinRoutes";
import NotLoggedinRoutes from "./routes/NotLoggedinRoutes";
import ArrowButton from "./components/subComponents/scroll-top/ScrollToTop";
import ResetPassword from "./pages/reset";

const App = () => {
  return (
    <div className="App">
      <ArrowButton />
      <Routes>
        <Route path="/services//*" element={<ServicesHome />} />
        <Route element={<LoggedinRoutes />}>
          <Route path="/activate/:token" element={<Activate />} />
          <Route path="/*" element={<UserHome />} />
          {/* <Route path="/profile//*" element={<Profile />} /> */}
          <Route path="/profile/:username/*" element={<Profile />} />
        </Route>
        <Route element={<NotLoggedinRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
