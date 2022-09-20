import React from "react";
import { useSelector } from "react-redux";
import SendVerification from "../sendVerfication";

const ProfileHome = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div>{user.verified === false && <SendVerification user={user} />}</div>
  );
};

export default ProfileHome;
