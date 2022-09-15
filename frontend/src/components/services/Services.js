import React, { useState } from "react";
import data from "./ServicesData";
import './Services.css';

const Services = () => {
  const perPage = 4;

  const [numberImage, setNumberImage] = useState(8);

  const showMore = () => {
    setNumberImage(numberImage + perPage);
  };

  const slice = data.cardData.slice(0, numberImage);

  return (
    <div id="services" className="services">
      <div className="container">
        {/* SPECIAL OFFERS */}
        <div className="services-special">
          <h1 className="offers-title">Special Offers</h1>
          <div className="services-offers">
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

      {/* SERVICES */}
      <div className="services-bottom">
        <div className="services-wrapper container">
          <h1 className="bottom-title">Our Services</h1>

          <div className="services-section">
            {slice.map((item, index) => {
              return (
                <div className="services-items" key={index}>
                  <img src={item.img} alt="" className="services-img" />
                  <div className="services-content">
                    <h4 className="services-title">{item.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="btnServices d-block" onClick={() => showMore()}>
            Show More
          </button>

          {/* <div className="services-items">
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

            <div className="services-items">
              <div className="services-img11"></div>
              <div className="services-content">
                <h4 className="services-title">Transmission Repair</h4>
              </div>
            </div>

            <div className="services-items">
              <div className="services-img12"></div>
              <div className="services-content">
                <h4 className="services-title">Muffler & Exhaust Services</h4>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
