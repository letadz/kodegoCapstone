import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import Car from "../../../components/cars";
import { createCar } from "../../../functions/createCar";
import { carsReducer } from "../../../functions/reducers";
import AddCar from "../addCar";

const Cars = ({ profile }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);

  return (
    <div className="cars_container">
      {profile.cars &&
        profile.cars.length &&
        profile.cars.map((car) => <Car key={car._id} car={car} user={user} />)}
      <button
        className="orange_btn float_right"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Car
      </button>
      {visible && <AddCar user={user} setVisible={setVisible} />}
    </div>
  );
};

export default Cars;
