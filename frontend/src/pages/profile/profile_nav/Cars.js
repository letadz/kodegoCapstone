import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import Car from "../../../components/cars";
import { createCar } from "../../../functions/createCar";
import { carsReducer } from "../../../functions/reducers";
import AddCar from "../addCar";

const Cars = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);

  const [{ loading, error, cars }, dispatch] = useReducer(carsReducer, {
    loading: false,
    cars: [],
    error: "",
  });
  useEffect(() => {
    getAllCars();
  }, []);
  const getAllCars = async () => {
    try {
      dispatch({
        type: "CARS_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllCars`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "CARS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "CARS_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  return (
    <div className="cars_container">
      {cars.map((car) => (
        <Car key={car._id} car={car} />
      ))}
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
