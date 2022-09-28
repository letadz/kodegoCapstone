import axios from "axios";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import Hist from "../../../components/book_history/Hist";
import { deleteHistory } from "../../../functions/deleteHistory";

const History = ({ profile }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [error, setError] = useState();

  const deletehist = async (e) => {
    const res = await deleteHistory(profile.history, user.id, user.token);
    if (res === "ok") {
    } else {
      setError(res);
    }
  };
  const columns = useMemo(
    () => [
      {
        columns: [
          {
            Header: "Brand",
            accessor: "profile.car.car_brand",
          },
          {
            Header: "Model",
            accessor: "profile.car.car_model",
          },
        ],
      },
      {
        columns: [
          {
            Header: "Service",
            accessor: "profile.history.service",
          },
          {
            Header: "Schedule",
            accessor: "profile.history.date_book",
          },
        ],
      },
    ],
    []
  );
  console.log(profile.history);
  return (
    <div className="history_container">
      <div className="history_header">
        <h3>Services History</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Brand</th>
            <th>Model</th>
            <th>Service</th>
            <th>Schedule</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {profile.history &&
            profile.history.length &&
            profile.history.map((hist) => (
              <Hist
                key={hist._id}
                columns={columns}
                hist={hist}
                deletehist={deletehist}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
