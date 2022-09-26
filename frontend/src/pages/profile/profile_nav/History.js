import axios from "axios";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import BookHistory from "../../../components/book_history";
import { historyReducer } from "../../../functions/reducers";

const History = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [{ loading, error, history }, dispatch] = useReducer(historyReducer, {
    loading: false,
    history: [],
    error: "",
  });
  useEffect(() => {
    getAllBooking();
  }, []);
  const getAllBooking = async () => {
    try {
      dispatch({
        type: "BOOKS_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllBooking`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "BOOKS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "BOOKS_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Car",
        // First group columns
        columns: [
          {
            Header: "Brand",
            accessor: "history.car.car_brand",
          },
          {
            Header: "Model",
            accessor: "history.car.car_model",
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
            accessor: "history.service",
          },
          {
            Header: "Schedule",
            accessor: "history.date_book",
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
      <BookHistory history={history} columns={columns} />
    </div>
  );
};

export default History;
