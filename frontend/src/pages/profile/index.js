import React, { useEffect, useReducer, useState } from "react";
import "./style.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import Navbar from "./profile_nav/Navbar";
import Cars from "./profile_nav/Cars";
import Settings from "./profile_nav/Settings";
import History from "./profile_nav/History";
import { useDispatch, useSelector } from "react-redux";
import LoggedInHeader from "../../components/headerUser";
import SendVerification from "./sendVerfication";
import ProfileHome from "./profile_nav/ProfileHome";
import Logo from "../../images/logo/MagsLogo.png";
import Cookies from "js-cookie";
import { profileReducer } from "../../functions/reducers";
import axios from "axios";
import { Footer } from "../../components";
import Copyright from "../../components/copyright/Copyright";

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((user) => ({ ...user }));
  const userName = username === undefined ? user.username : username;
  const [photos, setPhotos] = useState({});
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: "",
  });

  useEffect(() => {
    getProfile();
  }, [userName]);

  const getProfile = async () => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (data.ok === false) {
        navigate("/");
      } else {
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  const routes = useRoutes([
    {
      path: "/home",
      element: <ProfileHome profile={profile} />,
    },
    { path: "/cars", element: <Cars profile={profile} /> },
    { path: "/settings", element: <Settings user={user} /> },
    { path: "/history", element: <History profile={profile} /> },
  ]);

  const dispatchs = useDispatch();
  const navigates = useNavigate();
  const logout = () => {
    Cookies.set("user", "");
    dispatchs({
      type: "LOGOUT",
    });
    navigates("/");
  };
  return (
    <>
      <div className="profile_nav">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        {profile ? (
          <div className="right_navbar">
            <Link to={`/profile/${userName}/home`}>
              <img src={profile.picture} alt="" />
            </Link>

            <button
              onClick={() => {
                logout();
              }}
              className="orange_btn"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="right_reset">
            <button className="orange_btn">Login</button>
          </Link>
        )}
      </div>
      <div className="profile_container">
        <div className="profile_navbar">
          <Navbar username={userName} />
        </div>
        <div className="profile_navbar-values">{routes}</div>
      </div>
      {/* <Footer /> */}
      {/* <Copyright /> */}
      <div className="copyright2-container">
        <div className="copyright2-content">
          <span>&copy; Mag's Auto Repair Philippines. All Right Reserved</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
