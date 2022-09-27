import { useRef } from "react";
import Detail from "./Detail";
import useOnCLickOutside from "../../../helpers/clickOutside";
import "./style.css";
export default function EditProfile({
  details,
  handleChange,
  updateDetails,
  infos,
  setVisible,
}) {
  const modal = useRef(null);
  useOnCLickOutside(modal, () => setVisible(false));
  return (
    <div className="blur">
      <div className="postBox infosBox" ref={modal}>
        <div className="box_header">
          <div className="small_circle" onClick={() => setVisible(false)}>
            <i className="exit_icon">x </i>
          </div>
          <span>Edit Details</span>
        </div>
        <div className="details_wrapper scrollbar">
          <div className="details_header">Name</div>
          <Detail
            value={details?.first_name}
            placeholder="First Name"
            name="first_name"
            text="First Name"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <Detail
            value={details?.last_name}
            placeholder="Last Name"
            name="last_name"
            text="Last Name"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <div className="details_header">Gender</div>
          <Detail
            value={details?.gender}
            placeholder="Male or Female"
            name="gender"
            text="Gender"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
            rel
          />
          <div className="details_header">Birth Day</div>
          <Detail
            value={details?.birth_month}
            placeholder="Birth Month"
            name="birth_month"
            text="Birth Month"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <Detail
            value={details?.birth_day}
            placeholder="Birth Day"
            name="birth_day"
            text="Birth Day"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <Detail
            value={details?.birth_year}
            placeholder="Birth Year"
            name="birth_year"
            text="Birth Year"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <div className="details_header">Address</div>
          <Detail
            value={details?.address}
            placeholder="Add address"
            name="address"
            text="Address"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <div className="details_header">Phone Number</div>
          <Detail
            value={details?.phone_number}
            placeholder="Add phone number"
            name="phone_number"
            text="Phone Number"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
        </div>
      </div>
    </div>
  );
}
