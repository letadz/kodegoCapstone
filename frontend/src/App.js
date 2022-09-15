import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./pages/home/UserHome";
import Login from "./pages/login";
import Profile from "./pages/profile";
import NotFound from "./components/notfound";
import LoggedinRoutes from "./routes/LoggedinRoutes";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<LoggedinRoutes />}>
          <Route path="/" element={<UserHome />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
