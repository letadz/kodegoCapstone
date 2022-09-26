import React from "react";
import moment from "moment";

const Hist = ({ hist }) => {
  console.log(hist);
  return (
    <tr key={hist._id}>
      <td>{hist.car.car_brand}</td>
      <td>{hist.car.car_model}</td>
      <td>{hist.service}</td>
      <td>{moment(new Date(hist.date_book)).format("MM/DD/YYYY")}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default Hist;
