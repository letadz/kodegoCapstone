import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./pages/home/UserHome";
import Login from "./pages/login";
import Profile from "./pages/profile";
import LoggedinRoutes from "./routes/LoggedinRoutes";
import NotLoggedinRoutes from "./routes/NotLoggedinRoutes";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<LoggedinRoutes />}>
          <Route path="/" element={<UserHome />} />
          <Route path="/profile//*" element={<Profile />} />
        </Route>
        <Route element={<NotLoggedinRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
