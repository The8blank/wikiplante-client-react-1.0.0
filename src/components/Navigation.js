import React, { useContext } from "react";
import {  useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "../components/AppContext";
import Deconnexion from "./log/Deconnexion";


const Navigation = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.user.user)
  const state = useSelector((state) => state.user)
  return (
    <nav className=" mb-20 w-full flex justify-between items-center font-vercetti md:flex-col">
      <NavLink end to="/">
        <img src="./logo.png" alt="Wikiplante" className="h-60 "  />
      </NavLink>
      <div className="space-x-10 flex items-center  font-bold text-neutral-400 text-xl">
        <NavLink to="/plante"   className={({ isActive }) => (isActive ? 'border-4 border-neutral-400  rounded-full p-2' : 'inactive')} >
          <div >Plantes</div>
        </NavLink>
        <NavLink to="/profil" className={({ isActive }) => (isActive ? 'border-4 border-neutral-400 rounded-full p-2' : 'inactive')}>
            <div className="flex gap-3">
              <i className="fa-solid fa-user"></i>
              {uid && state.isLogged ? `${userData.username.charAt(0).toUpperCase() + userData.username.slice(1)} `: ''}
            </div>
          </NavLink>
          {uid && state.isLogged  ? (
          <Deconnexion />
        ) : null}
      </div>
    </nav>
  );
};

export default Navigation;
