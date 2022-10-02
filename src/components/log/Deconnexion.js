import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { deco } from "../../slices/user/userSlice";

const Deconnexion = () => {
  const dispatch = useDispatch();

  const removeCookie = (key) => {
    if (window === undefined) {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios
      .get("http://localhost:8080/api/user/logout", { withCredentials: true })
      .then(() => {
        removeCookie("jwt");
      })
      .catch((err) => console.log(err));
    window.location = "/";
    dispatch(deco());
  };

  return (
    <i
      className="fa-solid fa-right-from-bracket text-lg hover:cursor-pointer"
      onClick={logout}
    ></i>
  );
};

export default Deconnexion;
