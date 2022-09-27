import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "../components/AppContext";
import Deconnexion from "./log/Deconnexion";


const Navigation = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer.user)
  return (
    <nav className=" flex justify-between items-center font-vercetti">
      <NavLink end to="/">
        <img src="./logo.png" alt="Wikiplante" className="h-60" />
      </NavLink>
      <div className="space-x-10 flex items-center  font-bold text-gray-400 text-lg">
        <NavLink to="/plante"   className={({ isActive }) => (isActive ? 'border-4 border-gray-400  rounded-full p-2' : 'inactive')} >
          <div >Plantes</div>
        </NavLink>
        <NavLink to="/profil"  className={({ isActive }) => (isActive ? 'border-4 border-gray-400 rounded-full p-2' : 'inactive')}>
            <div className="flex gap-3">
              <i className="fa-solid fa-user"></i>
              {userData? `${userData.username} `: ''}
            </div>
          </NavLink>
          {uid ? (
          <Deconnexion />
        ) : null}
      </div>
    </nav>
  );
};

export default Navigation;
