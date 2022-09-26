import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { historyReducer } from "../../functions/reducers";
import CreateBooking from "../../pages/profile/createHistory";
import "./style.css";

const Car = ({ car }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);

  return (
    <div className="car_container">
      <Moment fromNow interval={30}>
        {car.createdAt}
      </Moment>
      <div className="car_image">
        <img src={car.image} alt="" />
      </div>
      <div className="car_text">
        <h3>{car.car_brand}</h3>
        <span>{car.car_model}</span>
        <span>{new Date(car.car_year).getFullYear()}</span>
        <span>{car.car_variant}</span>
      </div>
      <div className="btns_container">
        <button
          className="red_btn"
          onClick={() => {
            setVisible(true);
          }}
        >
          BOOK A SERVICE
        </button>
        <button className="gray_btn">REPAIR STATUS</button>
        <button className="gray_btn">SERVICE HISTORY</button>
      </div>
      {visible && (
        <CreateBooking user={user} car={car} setVisible={setVisible} />
      )}
    </div>
  );
};

export default Car;
