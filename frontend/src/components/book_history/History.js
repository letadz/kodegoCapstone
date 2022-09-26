import React from "react";
import moment from "moment";

const History = ({ book }) => {
  return (
    <tr key={book._id}>
      <td>{book.car.car_brand}</td>
      <td>{book.car.car_model}</td>
      <td>{book.service}</td>
      <td>{moment(new Date(book.date_book)).format("MM/DD/YYYY")}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default History;
