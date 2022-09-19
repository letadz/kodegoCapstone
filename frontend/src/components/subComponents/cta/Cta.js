import React from "react";
import ModalSchedule from '../modal-schedule/ModalSchedule';
import "./Cta.css";

const Cta = () => {
  return (
    <>
      <button
        type="button"
        className="btn-schedule"
        data-bs-toggle="modal"
        data-bs-target="#schedule"
      >
        <span>Book Schedule</span>
      </button>

      {/* Modal Form */}
      <ModalSchedule />
    </>
  );
};

export default Cta;
