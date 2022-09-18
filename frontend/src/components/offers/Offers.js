import React from "react";
import "./Offers.css";

const Offers = () => {
  return (
    <div id="offers" className="offers">
      <div className="container">
        {/* SPECIAL OFFERS */}
        <div className="offers-special">
          <h1 className="offers-title">Special Offers</h1>
          <div className="offers-offers">
            <div className="item">
              <div className="item1-img"></div>
              <div className="item-content">
                <h4 className="item-title">Engine Repair</h4>
                <p className="item-description">
                  If a warning light is on, your vehicle has a problem! We will
                  report your codes for FREE and provide an estimate for any
                  recommended work.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item2-img"></div>
              <div className="item-content">
                <h4 className="item-title">Transmission Service</h4>
                <p className="item-description">
                  If a warning light is on, your vehicle has a problem! We will
                  report your codes for FREE and provide an estimate for any
                  recommended work.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item3-img"></div>
              <div className="item-content">
                <h4 className="item-title">Brakes Repair</h4>
                <p className="item-description">
                  If a warning light is on, your vehicle has a problem! We will
                  report your codes for FREE and provide an estimate for any
                  recommended work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
