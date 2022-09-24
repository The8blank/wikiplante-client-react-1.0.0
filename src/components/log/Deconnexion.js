import React from "react";
import axios from "axios";
import cookie from "js-cookie";

const Deconnexion = () => {
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

    window.location = "/"
  };

  return <i className="fa-solid fa-right-from-bracket" onClick={logout}></i>;
};

export default Deconnexion;
