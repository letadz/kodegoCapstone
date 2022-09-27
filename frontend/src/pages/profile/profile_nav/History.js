import axios from "axios";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import Hist from "../../../components/book_history/Hist";

const History = ({ profile }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Car",
        // First group columns
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
        // Second group - Details
        Header: "Details",
        // Second group columns
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
  return (
    <div className="history_container">
      <div className="history_header">
        <h3>Services History</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Service</th>
            <th>Schedule</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {profile.history &&
                profile.history.length &&
                profile.history.map((hist) => (
                  <Hist
                    key={hist._id}
                    columns={columns}
                    hist={hist}
                    user={user}
                  />
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
