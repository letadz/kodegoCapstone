import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const colors = {
  orange: "#f5d10d",
  grey: "#181818",
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true,
  };

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div id="testimonials" className="testimonials">
      <h1 className="testimonials-title">Testimonials</h1>
      <div className="cards container">
        <div className="row py-3 my-5">
          <Slider {...settings} className="slider">
            <div className="cardBody p-3">
              <div style={ratingStar.container}>
                <div style={ratingStar.stars}>
                  {stars.map((_, index) => {
                    return <FaStar key={index} color={colors.orange} />;
                  })}
                </div>
              </div>
              <h5 className="card-username py-3">John Doe</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                ultrices magna at tristique lobortis. Aliquam vel ex ac ex
                malesuada viverra. Sed euismod nisl et pellentesque maximus.
              </p>
            </div>
            <div className="cardBody p-3">
              <div style={ratingStar.container}>
                <div style={ratingStar.stars}>
                  {stars.map((_, index) => {
                    return <FaStar key={index} color={colors.orange} />;
                  })}
                </div>
              </div>
              <h5 className="card-username py-3">Jane Doe</h5>
              <p className="card-text">
                Sed eleifend, felis vel posuere lobortis, erat nisi malesuada
                sapien, in dictum velit lorem nec turpis. Suspendisse sodales
                neque eget euismod faucibus. Phasellus bibendum pellentesque
                pretium.
              </p>
            </div>

            <div className="cardBody p-3">
              <div style={ratingStar.container}>
                <div style={ratingStar.stars}>
                  {stars.map((_, index) => {
                    return <FaStar key={index} color={colors.orange} />;
                  })}
                </div>
              </div>
              <h5 className="card-username py-3">John Smith</h5>
              <p className="card-text">
                Nunc ultricies erat arcu, vel laoreet dolor cursus vitae. Nullam
                quis pharetra sapien. Nam erat nulla, suscipit ac euismod a,
                pharetra non nulla. Curabitur bibendum sapien velit.
              </p>
            </div>

            <div className="cardBody p-3">
              <div style={ratingStar.container}>
                <div style={ratingStar.stars}>
                  {stars.map((_, index) => {
                    return <FaStar key={index} color={colors.orange} />;
                  })}
                </div>
              </div>
              <h5 className="card-username py-3">Mark Smith</h5>
              <p className="card-text">
                Nunc ultricies erat arcu, vel laoreet dolor cursus vitae. Nullam
                quis pharetra sapien. Nam erat nulla, suscipit ac euismod a,
                pharetra non nulla. Curabitur bibendum sapien velit.
              </p>
            </div>
          </Slider>
        </div>
      </div>

      {/* Button review */}
      <div className="container d-block text-center pt-1 mt-3">
        <button
          type="button"
          className="btn-review"
          data-bs-toggle="modal"
          data-bs-target="#review"
        >
          Leave a Review
        </button>
      </div>

      {/* Modal */}
      <div className="modal fade text-center" id="review" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="reviewLabel">
                Leave a Review
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div style={styles.container}>
                  <div style={styles.stars}>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={32}
                          style={{
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                          color={
                            (hoverValue || currentValue) > index
                              ? colors.orange
                              : colors.grey
                          }
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                        />
                      );
                    })}
                  </div>
                </div>
                <textarea
                  className="textbox"
                  rows={10}
                  placeholder="Your message"
                ></textarea>
                <div className="modalInfo my-3">
                  <input
                    type="text"
                    className="username p-1 mb-3"
                    placeholder="Your name*"
                    required
                  />
                  <input
                    type="text"
                    className="number p-1"
                    placeholder="Phone number*"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-warning">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 0",
  },
};

const ratingStar = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "start",
  },
};

export default Testimonials;
