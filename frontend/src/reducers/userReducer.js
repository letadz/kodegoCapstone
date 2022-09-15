import Cookies from "js-cookie";

export function userReducer(
  state = Cookies.get("user")
    ? JSON.parse(Cookies.get("user"))
    : {
        first_name: "arbie",
        last_name: "abesamis",
        username: "arbieabesamis1",
        picture:
          "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
        email: "arbieabesamis@gmail.com",
      },

  action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    default:
      return state;
  }
}
