import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Navbar from "./profile_nav/Navbar";
import Cars from "./profile_nav/Cars";
import Settings from "./profile_nav/Settings";
import History from "./profile_nav/History";
import { useSelector } from "react-redux";
import LoggedInHeader from "../../components/headerUser";

const Profile = () => {
  const { user } = useSelector((user) => ({ ...user }));
  const routes = useRoutes([
    { path: "/cars", element: <Cars /> },
    { path: "/settings", element: <Settings user={user} /> },
    { path: "/history", element: <History /> },
  ]);
  return (
    <div>
      <Navbar />
      {routes}
    </div>
  );
};

export default Profile;
