import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { historyReducer } from "../../functions/reducers";
import CreateBooking from "../../pages/profile/createHistory";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Car = ({ car, user }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
  };
  
  const [visible, setVisible] = useState(false);

  return (
    <div className="car_container">
      <Moment fromNow interval={30}>
        {car.createdAt}
      </Moment>
      <div className="car_image">
        <img src={car.image} alt="" />
      </div>

      <Slider {...settings} className="slider">
        <div className="car_text">
          <h3>{car.car_brand}</h3>
          <span>{car.car_model}</span>
          <span>{new Date(car.car_year).getFullYear()}</span>
          <span>{car.car_variant}</span>
        </div>
      </Slider>

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
