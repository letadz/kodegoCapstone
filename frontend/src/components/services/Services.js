import React, { useState } from "react";
import "./Services.css";
// import ShowServices from "./ShowServices";
// import data from "./ServicesData";

const Services = () => {
  // const [page, setPage] = useState(12);

  // const slice = data.cardData.slice(0, page);

  // const [show, setShow] = useState(false);

  // const handleClick = () => {
  //   setShow(!show);
  // };

  return (
    <>
      <div className="services">
        <div className="services-container">
          <div className="services-wrapper container">
            <h1 className="bottom-title">Our Services</h1>

            {/* {slice.map((item, index) => {
              return (
                <div className="services-section" key={index}>
                  <div className="services-items">
                    <img src={item.img} className="services-img"></img>
                    <div className="services-content">
                      <h4 className="services-title">{data.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })} */}

            <div
              className="services-section"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="services-items">
                <div className="services-img1"></div>
                <div className="services-content">
                  <h4 className="services-title">Engine Repair</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img2"></div>
                <div className="services-content">
                  <h4 className="services-title">Exterior Body Services</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img3"></div>
                <div className="services-content">
                  <h4 className="services-title">Auto Body Restoration</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img4"></div>
                <div className="services-content">
                  <h4 className="services-title">Collision Repair</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img5"></div>
                <div className="services-content">
                  <h4 className="services-title">Glass Repair</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img6"></div>
                <div className="services-content">
                  <h4 className="services-title">Dent Repair</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img7"></div>
                <div className="services-content">
                  <h4 className="services-title">Frame Straightening</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img8"></div>
                <div className="services-content">
                  <h4 className="services-title">Hail Damage Repair</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img9"></div>
                <div className="services-content">
                  <h4 className="services-title">Rust Repair</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img10"></div>
                <div className="services-content">
                  <h4 className="services-title">Car Repair Services</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img11"></div>
                <div className="services-content">
                  <h4 className="services-title">Transmission Repair</h4>
                </div>
              </div>

              <div
                className="services-items"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="services-img12"></div>
                <div className="services-content">
                  <h4 className="services-title">Muffler & Exhaust Services</h4>
                </div>
              </div>

              {/* {show ? (
                <ShowServices />
              ) : null} */}

              {/* <button onClick={handleClick}>Click me</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
