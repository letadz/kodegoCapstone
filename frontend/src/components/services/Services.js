import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div id="services" className="services">
        <div className="services-container">
          <div className="services-wrapper container">
            <h1 className="bottom-title">Our Services</h1>

            <div className="services-section">
              <Link className="services-items" to="/services/engine-repair">
                <div className="services-img1"></div>
                <div className="services-content">
                  <h4 className="services-title">Engine Repair</h4>
                </div>
              </Link>

              <div className="services-items">
                <div className="services-img2"></div>
                <div className="services-content">
                  <h4 className="services-title">Exterior Body Services</h4>
                </div>
              </div>

              <div className="services-items">
                <div className="services-img3"></div>
                <div className="services-content">
                  <h4 className="services-title">Auto Body Restoration</h4>
                </div>
              </div>

              <div className="services-items">
                <div className="services-img4"></div>
                <div className="services-content">
                  <h4 className="services-title">Collision Repair</h4>
                </div>
              </div>

              <div className="services-items">
                <div className="services-img5"></div>
                <div className="services-content">
                  <h4 className="services-title">Glass Repair</h4>
                </div>
              </div>

              <div className="services-items">
                <div className="services-img6"></div>
                <div className="services-content">
                  <h4 className="services-title">Dent Repair</h4>
                </div>
              </div>

              <div className="services-items">
                <div className="services-img7"></div>
                <div className="services-content">
                  <h4 className="services-title">Frame Straightening</h4>
                </div>
              </div>

              <div className="services-items">
                <div className="services-img8"></div>
                <div className="services-content">
                  <h4 className="services-title">Hail Damage Repair</h4>
                </div>
              </div>

              <div className="services-items">
                <div className="services-img9"></div>
                <div className="services-content">
                  <h4 className="services-title">Rust Repair</h4>
                </div>
              </div>

              <div className="services-items">
                <div className="services-img10"></div>
                <div className="services-content">
                  <h4 className="services-title">Car Repair Services</h4>
                </div>
              </div>
              <Link
                className="services-items"
                to="/services/transmission-repair"
              >
                <div className="services-img11"></div>
                <div className="services-content">
                  <h4 className="services-title">Transmission Repair</h4>
                </div>
              </Link>

              <div className="services-items">
                <div className="services-img12"></div>
                <div className="services-content">
                  <h4 className="services-title">Muffler & Exhaust Services</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
