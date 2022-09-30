import axios from "axios";
import React, { useState } from "react";
import "./style.css";

const SendVerification = ({ user }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const sendVerificationLink = async () => {
    try {
      const { data } = await axios.post(
        "/sendVerification",
        {},
        {
          header: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="send_verification">
      <span>
        Your account is not verified, verify your account before it gets deleted
        after a month from creating
      </span>
      <a
        onClick={() => {
          sendVerificationLink();
        }}
      >
        Click here to resend verification link
      </a>
      {success && <div className="success_text">{success}</div>}
      {error && <div className="error_text">{error}</div>}
    </div>
  );
};

export default SendVerification;