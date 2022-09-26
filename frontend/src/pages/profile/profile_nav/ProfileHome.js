import React from "react";
import { useSelector } from "react-redux";
import SendVerification from "../sendVerfication";

const ProfileHome = ({ profile }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="profile_container-user">
      <div className="profile_verification">
        {user.verified === false && <SendVerification user={user} />}
      </div>
      <div className="profile_infos">
        <div className="profile_image">
          <img src={profile.picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
