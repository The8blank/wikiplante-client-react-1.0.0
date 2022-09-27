import React from "react";
import Log from "../components/log/Index";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer.user)

  return (
    <>
      <div className="app h-full flex justify-center items-center bg-neutral-300/50 rounded-lg">
          {uid ? (
            <h1 className="font-vercetti font-bold text-3xl text-neutral-900 ">Profil de {userData.username} </h1>
          ) : (
            <Log inscription={true} connexion={false} />
          )}
      </div>
    </>
  );
};

export default Profil;
