import Cookies from "js-cookie";

export function userReducer(
  state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  // {
  //     first_name: "arbie",
  //     last_name: "abesamis",
  //     email: "arbieabesamis@gmail.com",
  //     verified: false,
  //     picture:
  //       "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
  // } 
 action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "VERIFY":
      return { ...state, verified: action.payload };
    default:
      return state;
  }
}
