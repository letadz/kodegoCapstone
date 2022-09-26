import axios from "axios";
import React, { useRef, useState } from "react";
import { createBooking } from "../../../functions/createBooking";
import useClickOutside from "../../../helpers/clickOutside";

import "./style.css";

const CreateBooking = ({ setVisible, user, car }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [date_book, setDate_book] = useState(null);
  const [service, setService] = useState("Body & Paint");
  const [mileAge, setMileAge] = useState(0);
  const [preferred_time, setPreferred_time] = useState("07:30 AM");
  const [book_notes, setBook_notes] = useState("");
  const popup = useRef(null);
  useClickOutside(popup, () => {
    setVisible(false);
  });
  const bookingSubmit = async (e) => {
    setLoading(true);

    const res = await createBooking(
      date_book,
      preferred_time,
      service,
      mileAge,
      book_notes,
      car._id,
      user.id,
      user.token
    );
    setLoading(false);
    if (res === "ok") {
      setDate_book("");
      setService("");
      setMileAge("");
      setPreferred_time("");
      setBook_notes("");
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
          <span>Book a Service</span>
          <span>
            {car.car_brand} {car.car_model}
          </span>
        </div>
        <form
          onSubmit={() => {
            bookingSubmit();
          }}
        >
          <div className="input-group mb-3">
            <label htmlFor="service" className="input-group-text">
              Select Service
            </label>
            <select
              name="service"
              id="service"
              onChange={(e) => setService(e.target.value)}
            >
              <option value="Body & Paint">Body & Paint</option>
              <option value="Dealer Option Service">
                Dealer Option Service
              </option>
              <option value="Express Maintenance">Express Maintenance</option>
              <option value="General Service">General Service</option>
              <option value="Preventive Maintenance">
                Preventive Maintenance
              </option>
              <option value="Service Campaign">Service Campaign</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label htmlFor="mileAge" className="input-group-text">
              Etimated Mileage
            </label>
            <input
              name="mileAge"
              id="mileAge"
              type="text"
              placeholder="Eg. 1000"
              onChange={(e) => setMileAge(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="date_book" className="input-group-text">
              Preffered Date
            </label>
            <input
              asp-for="date_book"
              asp-format="{MM-dd-yyyy}"
              type="date"
              id="date_book"
              name="date_book"
              onChange={(e) => setDate_book(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="preferred_time" className="input-group-text">
              Preffered Time
            </label>
            <select
              name="preferred_time"
              id="preferred_time"
              onChange={(e) => setPreferred_time(e.target.value)}
            >
              <option value="07:30 AM">07:30 AM</option>
              <option value="07:50 AM">07:50 AM</option>
              <option value="08:30 AM">08:30 AM</option>
              <option value="08:50 AM">08:50 AM</option>
              <option value="09:30 AM">09:30 AM</option>
              <option value="09:50 AM">09:50 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="10:50 AM">10:50 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="11:50 AM">11:50 AM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="12:50 PM">12:50 PM</option>
              <option value="01:30 PM">01:30 PM</option>
              <option value="01:50 PM">01:50 PM</option>
              <option value="02:30 PM">02:30 PM</option>
              <option value="02:50 PM">02:50 PM</option>
              <option value="03:30 PM">03:30 PM</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label htmlFor="book_notes" className="input-group-text">
              Notes
            </label>
            <textarea
              type="text"
              id="book_notes"
              name="book_notes"
              placeholder="Type notes here .."
              onChange={(e) => setBook_notes(e.target.value)}
            />
          </div>

          <button className="orange_btn">Book Service</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBooking;
