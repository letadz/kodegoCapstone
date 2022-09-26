import axios from "axios";
import React, { useRef, useState } from "react";
import { createCar } from "../../../functions/createCar";
import useClickOutside from "../../../helpers/clickOutside";

import "./style.css";

const AddCar = ({ setVisible, user }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [car_brand, setCar_brand] = useState();
  const [car_model, setCar_model] = useState();
  const [car_year, setCar_year] = useState(2016);
  const [car_variant, setCar_variant] = useState();
  const popup = useRef(null);
  useClickOutside(popup, () => {
    setVisible(false);
  });

  const carSubmit = async (e) => {
    setLoading(true);

    const res = await createCar(
      car_brand,
      car_model,
      car_year,
      car_variant,
      user.id,
      user.token
    );
    setLoading(false);
    if (res === "ok") {
      setCar_brand("");
      setCar_model("");
      setCar_year(2016);
      setCar_variant("");
      setVisible(false);
    } else {
      setError(res);
    }
  };

  return (
    <div className="blur">
      <div className="addCar_container" ref={popup}>
        {error && <div>{error}</div>}
        <div className="container_header">
          <div
            className="small_circle"
            onClick={() => {
              setVisible(false);
            }}
          >
            <i className="exit_icon"></i>
          </div>
          <span>Add Car</span>
        </div>
        <form
          onSubmit={() => {
            carSubmit();
          }}
          encType="multipart/form-data"
        >
          <div className="input-group mb-3">
            <label htmlFor="car_brand" className="input-group-text">
              Brand
            </label>
            <input
              name="car_brand"
              id="car_brand"
              type="text"
              onChange={(e) => setCar_brand(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="car_model" className="input-group-text">
              Model
            </label>
            <input
              name="car_model"
              id="car_model"
              type="text"
              onChange={(e) => setCar_model(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="car_name" className="input-group-text">
              Year
            </label>
            <input
              type="number"
              name="car_year"
              id="car_year"
              min="1900"
              max="2022"
              step="1"
              value={car_year}
              onChange={(e) => setCar_year(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="car_variant" className="input-group-text">
              Variant
            </label>
            <input
              name="car_variant"
              id="car_variant"
              type="text"
              onChange={(e) => setCar_variant(e.target.value)}
            />
          </div>

          <button className="orange_btn">Add Car</button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
