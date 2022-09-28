import React from "react";
import moment from "moment";
import Moment from "react-moment";

const Hist = ({ hist }) => {
  return (
    <tr key={hist._id}>
      <td>
        <Moment fromNow interval={30}>
          {hist.createdAt}
        </Moment>
      </td>
      <td>{hist.car.car_brand}</td>
      <td>{hist.car.car_model}</td>
      <td>{hist.service}</td>
      <td>{moment(new Date(hist.date_book)).format("MM/DD/YYYY")}</td>
      <td>
        <button className="orange_btn">Delete</button>
      </td>
    </tr>
  );
};

export default Hist;
