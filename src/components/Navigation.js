import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "../components/AppContext";
import Deconnexion from "./log/Deconnexion";

const Navigation = () => {
  const uid = useContext(UidContext);
  return (
    <nav>
      <NavLink end to="/">
        <div className="logo" alt="Wikiplante logo">WIKIPLANTE</div>
      </NavLink>
      <div className="liens">
        <NavLink to ='/plante'>Index</NavLink>
        {uid ? (
          <Deconnexion/>
        ) : (
          <NavLink to="/profil">
            <i className="fa-solid fa-user"></i> 
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
