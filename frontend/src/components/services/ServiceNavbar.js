import React from "react";
import { Link } from "react-router-dom";

const ServiceNavbar = () => {
  return (
    <div className="menu-services">
      <Link to="/services/engine-repair">Engine Repair</Link>
      <Link to="/services/transmission-repair">Transmission Repair</Link>
    </div>
  );
};

export default ServiceNavbar;
